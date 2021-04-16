import PrincipalProvider from '../context/PrincipalContext';
import ModalProvider from '../context/ModalContext';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <PrincipalProvider>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </PrincipalProvider>
  )
};

export default MyApp;
