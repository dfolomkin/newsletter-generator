const chunk = section => `<!-- section:wide.begin -->
            <tr>
              <td style="margin: 0; padding: 0; background-color: #ffffff">
                <img width="${section.image.width}" height="${
  section.image.height
}" alt="${section.image.alt}" src="${section.image.link}">
              </td>
            </tr>

            <tr>
              <td style="margin: 0; padding: 40px 50px; background-color: #ffffff">

                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0; padding: 0">
                  <tr>
                    <td style="margin: 0; padding: 0; text-align: ${section.textAlign ||
                      'center'}">
                      <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 18px; font-weight: 600; line-height: 18px; color: #333333">
                        ${section.title}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style="margin: 0; padding: 20px 0 0; text-align: ${section.textAlign ||
                      'center'}">
                      <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 16px; line-height: 24px; color: #666666">
                        ${section.text}
                      </span>
                    </td>
                  </tr>${
                    section.button
                      ? `\n                  <tr>
                    <td style="margin: 0; padding: 20px 0 0">

                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0; padding: 0">
                        <tr>
                          <td style="width: 20%; margin: 0; padding: 0">
                          </td>
                          <td style="min-width: 240px; height: 30px; margin: 0; padding: 6px 20px; background-color: #75cdd8; text-align: center">
                            <a href="${
                              section.button.link
                            }" style="text-decoration: none">
                              <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 14px; line-height: 18px; color: #ffffff">
                                ${section.button.caption}
                              </span>
                            </a>
                          </td>
                          <td style="width: 20%; margin: 0; padding: 0">
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>`
                      : ''
                  }
                </table>

              </td>
            </tr>
            <!-- section:wide.end -->`;

module.exports = chunk;
