// _app.tsx
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

import "../styles/globals.scss";
import BackToTopButton from "../components/BackToTopButton";
import ProfileCard from "../components/ProfileCard"; // import the ProfileCard component

function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  return (
    <ThemeProvider defaultTheme="dark">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Toaster position="top-right" reverseOrder={false} />
      <BackToTopButton />
      <ProfileCard /> {/* use the ProfileCard component */}
      <AnimatePresence initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
