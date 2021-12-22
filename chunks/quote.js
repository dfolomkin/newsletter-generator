const chunk = section => `<!-- section:quote.begin -->
            <tr>
              <td style="margin: 0; padding: 0; background-color: #273852">
                <img width="${section.image.width}" height="${
  section.image.height
}" alt="${section.image.alt}" src="${section.image.link}">
              </td>
            </tr>

            <tr>
              <td style="margin: 0; padding: 0 50px 40px; background-color: #273852">

                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0; padding: 0">
                  <tr>
                    <td style="margin: 0; padding: 0; text-align: left">
                      <span style="font-family: Calibri, sans-serif; font-size: 18px; line-height: 24px; font-style: italic; color: #ffffff">
                        «${section.text}».
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style="margin: 0; padding: 20px 0 0; text-align: left">
                      <a href="https://telescope.epam.com/who/Pavel_Liber" style="text-decoration: none">
                        <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 20px; font-weight: 600; line-height: 24px; color: #75cdd8">
                          ${section.author.name}
                        </span>
                      </a>
                      <br />
                      <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 20px; line-height: 24px; color: #ffffff">
                        ${section.author.post}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style="margin: 0; padding: 20px 0 0">

                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0; padding: 0">
                        <tr>
                          <td style="width: 10%; margin: 0; padding: 0">
                          </td>
                          <td style="min-width: 360px; height: 30px; margin: 0; padding: 6px 20px; background-color: #75cdd8; text-align: center">
                            <a href="${
                              section.button.link
                            }" style="text-decoration: none">
                              <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 14px; line-height: 18px; color: #ffffff">
                                ${section.button.caption}
                              </span>
                            </a>
                          </td>
                          <td style="width: 10%; margin: 0; padding: 0">
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>
                </table>

              </td>
            </tr>
            <!-- section:quote.end -->`;

module.exports = chunk;
