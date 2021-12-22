const getTitleChunk = title => `\n            <tr>
              <td style="margin: 0; padding: 20px 0">
                <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 30px; font-weight: 600; line-height: 30px; color: #333333">
                  ${title}
                </span>
              </td>
            </tr>\n`;

const getDividerChunk = height => `<tr>
              <td style="height: ${height}px; margin: 0; padding: 0">
              </td>
            </tr>\n`;

module.exports = {
  getTitleChunk: getTitleChunk,
  getDividerChunk: getDividerChunk
};
