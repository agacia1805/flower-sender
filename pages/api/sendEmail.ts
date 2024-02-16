import type { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

interface ErrorResponse {
  error: string;
}

interface SuccessResponse {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, senderName } = req.body;

  const message = {
    to: email,
    from: 'flower_sender@proton.me',
    subject: `${senderName || 'Someone'} is sending you flowers`,
    html:
      `
      <!DOCTYPE html>
        <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
          <head>
            <title>
            </title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!--[if mso]>
              <xml>
                <o:OfficeDocumentSettings>
                  <o:PixelsPerInch>
                    96
                  </o:PixelsPerInch>
                  <o:AllowPNG/>
                </o:OfficeDocumentSettings>
              </xml>
            <![endif]-->
            <!--[if !mso]>
              <!-->
              <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet"
              type="text/css">
              <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900"
              rel="stylesheet" type="text/css">
            <!--<![endif]-->
            <style>
              * { box-sizing: border-box; } body { margin: 0; padding: 0; } a[x-apple-data-detectors]
              { color: inherit !important; text-decoration: inherit !important; } #MessageViewBody
              a { color: inherit; text-decoration: none; } p { line-height: inherit }
              .desktop_hide, .desktop_hide table { mso-hide: all; display: none; max-height:
              0px; overflow: hidden; } .image_block img+div { display: none; } @media
              (max-width:700px) { .desktop_hide table.icons-inner { display: inline-block
              !important; } .icons-inner { text-align: center; } .icons-inner td { margin:
              0 auto; } .mobile_hide { display: none; } .row-content { width: 100% !important;
              } .stack .column { width: 100%; display: block; } .mobile_hide { min-height:
              0; max-height: 0; max-width: 0; overflow: hidden; font-size: 0px; } .desktop_hide,
              .desktop_hide table { display: table !important; max-height: none !important;
              } }
            </style>
          </head>
          <body style="background-color: #f9ecdc; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
            <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0"
            role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f9ecdc;">
              <tbody>
                <tr>
                  <td>
                    <table class="row row-1" align="center" width="100%" border="0" cellpadding="0"
                    cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f7f7f7; background-position: center top;">
                      <tbody>
                        <tr>
                          <td>
                            <table class="row-content stack" align="center" border="0" cellpadding="0"
                            cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px; margin: 0 auto;"
                            width="680">
                              <tbody>
                                <tr>
                                  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                    <table class="heading_block block-1" width="100%" border="0" cellpadding="35"
                                    cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                      <tr>
                                        <td class="pad">
                                          <h1 style="margin: 0; color: #171719; direction: ltr; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 38px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 45.6px;">
                                            <span class="tinyMce-placeholder">
                                              <strong>
                                                ${senderName || 'Someone'} is sending flowers!
                                              </strong>
                                              <br>
                                            </span>
                                          </h1>
                                        </td>
                                      </tr>
                                    </table>
                                    <table class="image_block block-2" width="100%" border="0" cellpadding="0"
                                    cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                      <tr>
                                        <td class="pad" style="padding-bottom:25px;padding-top:25px;width:100%;">
                                          <div class="alignment" align="center" style="line-height:10px">
                                            <div style="max-width: 500px;">
                                              <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6021/HEADER.png"
                                              style="display: block; height: auto; border: 0; width: 100%;" width="500"
                                              alt="Flower-decoration" title="Flower-decoration">
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                    <table class="paragraph_block block-3" width="100%" border="0" cellpadding="15"
                                    cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                      <tr>
                                        <td class="pad">
                                          <div style="color:#171719;font-family:Cabin, Arial, Helvetica Neue, Helvetica, sans-serif;font-size:18px;line-height:150%;text-align:center;mso-line-height-alt:27px;">
                                            <p style="margin: 0; word-break: break-word;">
                                              <em>
                                                "Love is the flower you've got to let grow."
                                              </em>
                                            </p>
                                            <p style="margin: 0; word-break: break-word;">
                                              &nbsp;
                                            </p>
                                            <p style="margin: 0; word-break: break-word;">
                                              And there is no better way for love to grow than to share it with precious
                                              people.&nbsp;
                                            </p>
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                    <table class="button_block block-4" width="100%" border="0" cellpadding="25"
                                    cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                      <tr>
                                        <td class="pad">
                                          <div class="alignment" align="center">
                                            <!--[if mso]>
                                              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"
                                              href="www.example.com" style="height:48px;width:117px;v-text-anchor:middle;"
                                              arcsize="10%" strokeweight="0.75pt" strokecolor="#171719" fill="false">
                                                <w:anchorlock/>
                                                <v:textbox inset="0px,0px,0px,0px">
                                                  <center style="color:#171719; font-family:Arial, sans-serif; font-size:16px">
                                                  <![endif]-->
                                                  <a href="https://flower-sender.vercel.app/" target="_blank" style="text-decoration:none;display:inline-block;color:#171719;background-color:transparent;border-radius:4px;width:auto;border-top:1px solid #171719;font-weight:undefined;border-right:1px solid #171719;border-bottom:1px solid #171719;border-left:1px solid #171719;padding-top:5px;padding-bottom:5px;font-family:Cabin, Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;">
                                                    <span style="padding-left:30px;padding-right:30px;font-size:16px;display:inline-block;letter-spacing:normal;">
                                                      <span style="word-break: break-word; line-height: 32px;">
                                                        Get your bouquet
                                                      </span>
                                                    </span>
                                                  </a>
                                                  <!--[if mso]>
                                                  </center>
                                                </v:textbox>
                                              </v:roundrect>
                                            <![endif]-->
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
              </table>
          </body>
        </html>
`,
  };

  try {
    await sendgrid.send(message);
    res.status(200).json({ message: 'Email sent' });
  } catch (error) {
    if (typeof error === 'object' && error !== null && 'response' in error) {
      const sgError = error as { response: { body: string } };
      console.error(sgError.response.body);
    } else {
      console.error('An unexpected error occurred:', error);
    }
    res.status(500).json({ error: 'Failed to send email' });
  }
}
