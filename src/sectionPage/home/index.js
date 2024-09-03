// import Image from "next/image";
import { Inter } from "next/font/google";
// import Header from "../component/header"
import Head from "next/head";
import Header from "@/component/layout/header/header";
import MainHome from "./mainHome";
import FooterStyleTwo from "@/component/layout/Footer/FooterStyleTwo";

// const inter = Inter({ subsets: ["latin"] });

export default function Home({Referrer}) {

  return (
    <main>
      <Head>

        <title>Best Abacus Classes & Training : Mastermind Abacus Academy</title>
        <meta name="keywords" content="abacus classes, abacus academy, abacus training, mastermind abacus, abacus learning center, abacus institute, whole brain development, abacus portal, abacus course structure, best abacus classes, top abacus classes, abacus school, abacus education, abacus program" />
        <meta name="description" content="Boost Your Child's Math Skills with Mastermind Abacus. Book A Free Demo Class for A Firsthand Experience." />
        <meta property="og:title" content="Best Abacus Classes & Training : Mastermind Abacus Academy" />
        <meta property="og:site_name" content="Mastermind Abacus" />
        <meta property="og:url" content="https://www.mastermindabacus.com/" />
        <meta property="og:description" content="Boost Your Child's Math Skills with Mastermind Abacus. Book A Free Demo Class for A Firsthand Experience." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://tt.mastermindschool.co.in/ab_images/mastermindabacus-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mastermindabac2" />
        <meta name="twitter:title" content="Best Abacus Classes & Training : Mastermind Abacus Academy" />
        <meta name="twitter:description" content="Boost Your Child's Math Skills with Mastermind Abacus. Book A Free Demo Class for A Firsthand Experience." />
        <meta name="twitter:image" content="https://tt.mastermindschool.co.in/ab_images/mastermindabacus-logo.png" />

      </Head>
      <Header
        parentMenu='home'
        TopBar='enable'
        CanvasClass='right_menu_togle hidden-md'
        headerClass='full-width-header header-style2'
        TopBarClass='topbar-area dark-parimary-bg'
        emailAddress='support@website.com'
        phoneNumber='(+088) 589-8745'
      />
      <MainHome Referrer={Referrer}/>
      <FooterStyleTwo Referrer={Referrer}/>
    </main>
  );
}
