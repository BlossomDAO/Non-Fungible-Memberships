import '../styles/globals.css'

import Router from 'next/router';
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  size: 4,
  color: "#D6E7FE",
  className: "z-50",
  delay: 100,
});

const Noop = ({children}) => <>{children}</>

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ?? Noop

    return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
