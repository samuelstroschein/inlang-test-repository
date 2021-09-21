import "../styles/globals.css";
import { useRouter } from "next/router";
import { setLocale } from "../translations";

function MyApp({ Component, pageProps }) {
  // using the router to get the current locale of the website
  // https://nextjs.org/docs/advanced-features/i18n-routing
  const router = useRouter();
  if (router.locale) {
    // setting the locale if available for inlang
    setLocale(router.locale);
  }
  return <Component {...pageProps} />;
}

export default MyApp;
