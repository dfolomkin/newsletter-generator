const chunk = section => `<!-- section:half.begin -->
            <tr>
              <td style="margin: 0; padding: 0; background-color: #ffffff">

                <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; margin: 0; padding: 0">
                  <tr>${
                    !section.imagePosition || section.imagePosition === 'left'
                      ? `\n                    <td style="height: 100%; width: 50%; margin: 0; padding: 0">
                      <img width="${section.image.width}" height="${
                          section.image.height
                        }" alt="${section.image.alt}" src="${
                          section.image.link
                        }">
                    </td>`
                      : ''
                  }
                    <td style="height: 100%; width: 50%; margin: 0; padding: 0" valign="top">

                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0; padding: 0">
                        <tr>
                          <td style="margin: 0; padding: 20px 30px 0; text-align: left">
                            <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 18px; line-height: 24px; font-weight: 600; color: #333333">
                            ${section.title}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td style="margin: 0; padding: 10px 30px 20px; text-align: left">
                            <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 14px; line-height: 18px; color: #666666">
                            ${section.text}
                            </span>
                          </td>
                        </tr>
                      </table>

                    </td>${
                      section.imagePosition === 'right'
                        ? `\n                    <td style="height: 100%; width: 50%; margin: 0; padding: 0">
                      <img width="${section.image.width}" height="${
                            section.image.height
                          }" alt="${section.image.alt}" src="${
                            section.image.link
                          }">
                    </td>`
                        : ''
                    }
                  </tr>
                </table>

              </td>
            </tr>
            <!-- section:half.end -->`;

module.exports = chunk;
