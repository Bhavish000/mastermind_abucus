import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href='https://tt.mastermindschool.co.in/ab_images/favicon.png' />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
        {/* <link rel="preload" href="http://localhost:3000/_next/static/media/experience_mastermind_abacus.81e93c62.jpg" as="image" /> */}


        <Script defer id="gtm-loader" strategy="afterInteractive">
          {`
            setTimeout(() => {
              (function (w, d, s, l, i) {
                w[l] = w[l] || []; w[l].push({
                  'gtm.start': new Date().getTime(), event: 'gtm.js'
                }); 
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; 
                j.async = true; 
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; 
                f.parentNode.insertBefore(j, f);
              })(window, document, 'script', 'dataLayer', 'GTM-MKS6BGK');
            }, 5000);
          `}
        </Script>

        <Script defer
          src="https://www.googletagmanager.com/gtag/js?id=G-ZN1X5CY96X"
          strategy="afterInteractive"
        />

        <Script defer id="gtag-init" strategy="afterInteractive">
          {`
            setTimeout(() => {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZN1X5CY96X');
            }, 8000);
          `}
        </Script>
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MKS6BGK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />

        <Script id="botsonic-loader" strategy="afterInteractive">
          {`
          function loadBotsonic() {
      (function (w, d, s, o, f, js, fjs) {
        w["botsonic_widget"] = o;
        w[o] =
          w[o] ||
          function () {
            (w[o].q = w[o].q || []).push(arguments);
          };
        (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
        js.id = o;
        js.src = f;
        js.async = 1;
        fjs.parentNode.insertBefore(js, fjs);
      })(window, document, "script", "Botsonic", "https://widget.writesonic.com/CDN/botsonic.min.js");
      Botsonic("init", {
        serviceBaseUrl: "https://api-azure.botsonic.ai",
        token: "90634077-727b-4eef-8808-596f9c988dbb",
      });
    }`}
        </Script>
      </body>
    </Html>
  );
}
