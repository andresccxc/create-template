import PrincipalProvider from '../context/PrincipalContext';
import ModalProvider from '../context/ModalContext';
import DragProvider from '../context/DragContext';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <PrincipalProvider>
      <ModalProvider>
        <DragProvider>
          <Component {...pageProps} />
        </DragProvider>
      </ModalProvider>
    </PrincipalProvider>
  )
};

export default MyApp;
