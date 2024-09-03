import "@/styles/globals.css";
import '@/styles/scss/main.scss';
// import '@/styles/updated.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
// import '@/styles/landingstyle/output.css'
import { config } from '@fortawesome/fontawesome-svg-core';
import { InquiryProvider } from "@/context/inquiryContext";
// import { InquiryProvider } from '../context/InquiryContext';
config.autoAddCss = false; // Prevent Font Awesome from adding its own CSS

export default function App({ Component, pageProps }) {
  return (
    <InquiryProvider>
      <Component {...pageProps} />
    </InquiryProvider>
  )
}