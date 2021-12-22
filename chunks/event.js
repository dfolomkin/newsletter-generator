const MONTHES = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря'
];

const chunk = section => `<!-- section:event.begin -->
            <tr>
              <td style="margin: 0; padding: 40px 50px 40px 40px; background-color: #ffffff">

                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0; padding: 0">
                  <tr>
                    <td style="width: 25%; margin: 0; padding: 0" valign="top">

                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0; padding: 0; text-align: center">
                        <tr>
                          <td tyle="margin: 0; padding: 0; text-align: center">
                            <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 64px; font-weight: 600; line-height: 64px; color: #c9dc49">
                              ${new Date(section.date).getDate()}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td tyle="margin: 0; padding: 0; text-align: center">
                            <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 24px; font-weight: 600; line-height: 24px; color: #333333">
                              ${MONTHES[new Date(section.date).getMonth()]}
                            </span>
                          </td>
                        </tr>
                      </table>

                    </td>
                    <td style="width: 75%; margin: 0; padding: 0 0 0 40px; text-align: left">

                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0; padding: 0">
                        <tr>
                          <td tyle="margin: 0; padding: 0">
                            <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 20px; font-weight: 600; line-height: 24px; color: #333333">
                              ${section.title}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td style="margin: 0; padding: 10px 0 0">
                            <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 16px; line-height: 24px; color: #666666">
                              ${section.text}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td style="margin: 0; padding: 20px 0 0">

                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0; padding: 0">
                              <tr>
                                <td style="min-width: 140px; height: 30px; margin: 0; padding: 6px 20px; border: 1px solid #c9dc49; text-align: center">
                                  <a href="${
                                    section.button.link
                                  }" style="text-decoration: none">
                                    <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 14px; line-height: 18px; color: #333333">
                                      ${section.button.caption}
                                    </span>
                                  </a>
                                </td>
                                <td style="width: 50%; margin: 0; padding: 0">
                                </td>
                              </tr>
                              <tr>
                                <td style="height: 1px; margin: 0; padding: 0">
                                </td>
                              </tr>
                            </table>

                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>
                </table>

              </td>
            </tr>
            <!-- section:event.end -->`;

module.exports = chunk;
