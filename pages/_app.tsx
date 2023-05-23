import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import "../styles/globals.css"
import Head from "next/head";
import { GLOBALS } from "../lib/const";

const App = ({ Component, pageProps: {session, ...pageProps} }: AppProps) => {
  console.log({session: pageProps.session})
  return (
    <SessionProvider session={session}>
      <Head>
        <title>{GLOBALS.PAGE_TITLE}</title>
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
