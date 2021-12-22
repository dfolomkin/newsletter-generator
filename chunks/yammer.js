const chunk = section => `<!-- section:yammer.begin -->
            <tr>
              <td style="width: 100%; margin: 0; padding: 0; background-color: #ffffff">
                <img width="${section.image.width}" height="${
  section.image.height
}" alt="${section.image.alt}" src="${section.image.link}">
              </td>
            </tr>

            <tr>
              <td style="padding: 40px 50px; background-color: #ffffff">

                <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; margin: 0; padding: 0">
                  <tr>
                    <td style="margin: 0; padding: 0; text-align: left">
                      <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 16px; line-height: 24px; color: #666666">
                        ${section.text}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style="margin: 0; padding: 20px 0 0; text-align: center">
                      <img width="150" height="50" alt="Yammer" src="http://static.cdn.epam.com/uploads/e87946a1a980fa0c84ff231a086e385a/newsletter/yammer-logo-01.png">
                    </td>
                  </tr>
                </table>

              </td>
            </tr><!-- section:yammer.end -->`;

module.exports = chunk;
