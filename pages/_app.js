import "../styles/globals.css";
import { AppWrapper } from '../context/state';

function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default App;
