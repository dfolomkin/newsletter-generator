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

const chunk = (meta, custom) => {
  const date = new Date(meta.date);

  return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  </head>
  <body>
    <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; margin: 0; padding: 0; background-color: #f2f3f7">
      <tr>
        <td style="width: 30%"></td>
        <td style="width: 40%; height: 100%; margin: 0; padding: 30px 0 0">
          <table border="0" cellpadding="0" cellspacing="0" style="width: 600px; margin: 0; padding: 0">

            <!-- header.begin -->
            <tr>
              <td style="width: 100%; height: 300px; margin: 0; padding: 0" valign="top" background="http://static.cdn.epam.com/uploads/e87946a1a980fa0c84ff231a086e385a/newsletter/head-01.png">
                <!--[if gte mso 9]>
                  <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px; height: 300px">
                  <v:fill type="tile" src="http://static.cdn.epam.com/uploads/e87946a1a980fa0c84ff231a086e385a/newsletter/head-01.png" color="#ffffff" />
                  <v:textbox inset="0,0,0,0">
                <![endif]-->

                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0; padding: 0">
                  <tr>
                    <td style="margin: 0; padding: 50px 0 0; text-align: center">
                      <img width="66" height="46" alt="News" src="http://static.cdn.epam.com/uploads/e87946a1a980fa0c84ff231a086e385a/newsletter/plain-logo-01.png">
                    </td>
                  </tr>
                  <tr>
                    <td style="margin: 0; padding: 20px 0 0; text-align: center">
                      <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 36px; line-height: 36px; font-weight: 600; color: #ffffff">
                        Новости EPAM Беларусь
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style="margin: 0; padding: 30px 0 0; text-align: center">
                      <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 16px; line-height: 16px; color: #ffffff">
                        ${date.getDate()} ${
    MONTHES[date.getMonth()]
  } ${date.getFullYear()}
                      </span>
                    </td>
                  </tr>
                </table>

                <!--[if gte mso 9]>
                  </v:textbox>
                  </v:rect>
                <![endif]-->
              </td>
            </tr>

            <tr>
              <td style="padding: 40px 50px; background-color: #ffffff; text-align: center">
                <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 16px; line-height: 24px; color: #666666">
                  ${meta.annotation}
                </span>
              </td>
            </tr>
            <!-- header.end -->\n${custom}

            <tr>
              <td style="margin: 0; padding: 20px 40px; background-color: #333333">

                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0; padding: 0">
                  <tr>
                    <td style="margin: 0; padding: 0 10px; text-align: center">
                      <a href="https://epa.ms/info-nwsltr" style="color: #ffffff">
                        <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 20px; line-height: 24px; color: #ffffff">
                          Infoportal
                        </span>
                      </a>
                    </td>
                    <td style="margin: 0; padding: 0 10px; text-align: center">
                      <a href="https://epa.ms/yammer-nwsltr" style="color: #ffffff">
                        <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 20px; line-height: 24px; color: #ffffff">
                          Yammer
                        </span>
                      </a>
                    </td>
                    <td style="margin: 0; padding: 0 10px; text-align: center">
                      <a href="https://epa.ms/fb-nwsltr" style="color: #ffffff">
                        <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 20px; line-height: 24px; color: #ffffff">
                          Facebook
                        </span>
                      </a>
                    </td>
                    <td style="margin: 0; padding: 0 10px; text-align: center">
                      <a href="https://epa.ms/vk-nwsltr" style="color: #ffffff">
                        <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 20px; line-height: 24px; color: #ffffff">
                          Vk
                        </span>
                      </a>
                    </td>
                    <td style="margin: 0; padding: 0 10px; text-align: center">
                      <a href="https://epa.ms/twi-nwsltr" style="color: #ffffff">
                        <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 20px; line-height: 24px; color: #ffffff">
                          Twitter
                        </span>
                      </a>

                    </td>
                  </tr>
                  <tr>
                    <td style="margin: 0; padding: 10px 0 0; text-align: center" colspan="5">
                      <span style="font-family: Source Sans Pro, Trebuchet, sans-serif; font-size: 14px; line-height: 16px; color: #999999">
                        Есть идеи для ньюслеттера?
                        <a href="mailto:ORGCommunicationsBY@epam.com" style="color: #75cdd8">Напиши нам</a>
                      </span>
                    </td>
                  </tr>
                </table>

              </td>
            </tr>

          </table>
        </td>
        <td style="width: 30%"></td>
      </tr>
    </table>
  </body>
</html>`;
};

module.exports = chunk;
