const fs = require('fs');
const outputFolder = fs.existsSync('./html/') ? './html/' : './';
const inputFolder = fs.existsSync('./xml/') ? './xml/' : './';

//tags that parser shouldn't accept as xml
const HTML_TAGS = ['a', 'b', 'br', 'i', 'img', 'span'];

const generateXml = inputFilename => {
  const inputPath = inputFolder + inputFilename + '.xml';

  if (!fs.existsSync(inputPath)) {
    console.log(`${inputFilename}.xml hasn't been found`);
    return;
  }

  const xml = fs.readFileSync(inputPath).toString();

  // change <tag/> to &lt;tag/> to avoid acception as xml
  const templ = HTML_TAGS.reduce(
    (acc, tag, i) => acc + `${i ? '|' : ''}(<|</)${tag}( |>)`,
    ''
  );
  const xmlWithReplacements = xml.replace(
    new RegExp(templ, 'g'),
    tag => '&lt;' + tag.slice(1)
  );

  const parseString = require('xml2js').parseString;
  parseString(
    xmlWithReplacements,
    {
      trim: true,
      normalize: true,
      explicitRoot: false,
      explicitArray: false
    },
    (err, content) => {
      const outputPath =
        outputFolder +
        (content.meta.filename
          ? content.meta.filename + '.html'
          : inputFilename + '.html');

      const custom = content.sections.section.reduce((acc, section) => {
        const commonChunks = require('./chunks/common.js');
        const titleChunk = commonChunks.getTitleChunk(section.title);

        if (section.title && Object.keys(section).length === 1) {
          return acc + titleChunk;
        }

        const sectionChunk = require(`./chunks/${section.type}.js`)(section);
        const dividerChunk = commonChunks.getDividerChunk(10);

        return (
          acc +
          `\n            ${sectionChunk}\n
              ${dividerChunk}`
        );
      }, '');

      const htmlContainer = require(`./chunks/container.js`)(
        content.meta,
        custom
      );

      fs.writeFileSync(outputPath, htmlContainer);
    }
  );
};

const commander = require('commander');

commander
  .option('-i, --input <fileName>', 'parse specified xml and generate html')
  .option(
    '-i, --all',
    'parse all xmls in folder and generate corresponding htmls'
  )
  .parse(process.argv);

const options = commander.rawArgs
  .filter(
    item =>
      item.match(/--.+=/) ||
      item.match(/--.+/) ||
      item.match(/-.=/) ||
      item.match(/-./)
  )
  .map(item => item.match(/[a-zA-Z0-9]+/)[0])
  .filter(item => item !== 'C');

if (commander.input) {
  //parse specified xml
  generateXml(commander.input);
} else if (commander.all) {
  // parse all xml in folder
  const xmls = fs
    .readdirSync(inputFolder)
    .filter(filename => filename.match(/.xml$/))
    .map(filename => filename.replace(/.xml$/, ''));

  xmls.forEach(file => generateXml(file));
} else if (!options.length) {
  // parse first xml in folder
  const xmls = fs
    .readdirSync(inputFolder)
    .filter(filename => filename.match(/.xml$/))
    .map(filename => filename.replace(/.xml$/, ''));

  if (xmls.length) {
    generateXml(xmls[0]);
  }
}
