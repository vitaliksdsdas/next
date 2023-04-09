import "@/styles/globals.scss";
import "@/firebase";
import { wrapper } from "@/store";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
