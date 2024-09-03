import "@/styles/globals.css";
import '@/styles/scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; 
import { config } from '@fortawesome/fontawesome-svg-core';
import { InquiryProvider } from "@/context/inquiryContext";
import { useEffect, useState } from 'react';

config.autoAddCss = false; 

function App({ Component, pageProps, initialReferrer }) {
  const [referrer, setReferrer] = useState(initialReferrer);

  useEffect(() => {
    // If the referrer is not set, capture it from document.referrer
    if (!referrer && document.referrer) {
      setReferrer(document.referrer);
    }
  }, [referrer]);

  return (
    <InquiryProvider>
      <Component {...pageProps} referrer={referrer} />
    </InquiryProvider>
  );
}

App.getInitialProps = async ({ ctx }) => {
  const referrer = ctx.req ? ctx.req.headers.referer || '' : '';
  return { initialReferrer: referrer };
};

export default App;




// import "@/styles/globals.css";
// import '@/styles/scss/main.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-svg-core/styles.css'; 
// import { config } from '@fortawesome/fontawesome-svg-core';
// import { InquiryProvider } from "@/context/inquiryContext";

// config.autoAddCss = false; 

// export default function App({ Component, pageProps }) {
//   return (
//     <InquiryProvider>
//       <Component {...pageProps} />
//     </InquiryProvider>
//   )
// }