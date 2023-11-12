import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

const APP_NAME = 'Trader Calc'
const APP_DESCRIPTION = 'V 1.0';

class DocumentComponent extends Document {
  static async getInitialProps(ctx) {

    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => (
            <StyleSheetManager sheet={sheet.instance} disableVendorPrefixes={true}>
              <App {...props} />
            </StyleSheetManager>
        )
      })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          initialProps.styles,
          sheet.getStyleElement(),
        ]
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang='en' dir='ltr'>
        <Head>
          <meta name='application-name' content={APP_NAME} />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content={APP_NAME} />
          <meta name='description' content={APP_DESCRIPTION} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content='#FFFFFF' />
          <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
          {/* <link rel='manifest' href='/manifest.json' /> */}
          <link rel='shortcut icon' href='/faviconf1-app.png' />
          <style>
            {`
            * {
              box-sizing: border-box;
            }
            html, body {
              height: 100%;
              padding: 0;
              margin: 0;
              font-family:
                -apple-system,
                BlinkMacSystemFont,
                Segoe UI,
                Roboto,
                Oxygen,
                Ubuntu,
                Cantarell,
                Fira Sans,
                Droid Sans,
                Helvetica Neue,
                sans-serif;
            }
            #__next {
              margin: 0 auto;
            }
            @media (prefers-reduced-motion: no-preference) {
              body {
                scroll-behavior: smooth;
              }
            }
            html {
              overflow-x: hidden;
            }
            body {
              height: 100vh;
              margin: 0px;
              position: absolute;
              top: 0;
              width: 100vw;
            }
            @media (prefers-reduced-motion: no-preference) {
              body {
                scroll-behavior: smooth;
              }
            }           
            @media (max-width: 1015px) {
              .hide_mobile {
                display: none;
              }
            }
            @media (min-width: 1016px) {
              .hide_desktop {
                display: none;
              }
            }
            .scroll {
              overflow-y: auto;
            }
            .no-scroll {
              overflow-y: hidden;
            }
            `}
          </style>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='crossOrigin' />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&family=Viga&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;1,200;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Public+Sans&display=swap" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet"></link>
        </Head>
        <body className='scroll'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default DocumentComponent