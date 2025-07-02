import { AppProps } from 'next/app';
import { ApolloClientProvider } from '@/service/context/ApolloClientProvider';
import '../app/globals.css';
import NextIntlProvider from '@/service/context/NextIntClientProvider';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloClientProvider>
      <NextIntlProvider>
        <Component {...pageProps} />
      </NextIntlProvider>
    </ApolloClientProvider>
  );
};

export default App;
