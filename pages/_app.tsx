import { AppProps } from 'next/app';
import { ApolloClientProvider } from '@/service/context/ApolloClientProvider';
import { CurrentUserProvider } from '@/service/context/CurrentUserProvider';
import NextIntlProvider from '@/i18n/NextIntlProvider';
import '../app/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloClientProvider>
      <CurrentUserProvider initialUser={null}>
        <NextIntlProvider>
          <Component {...pageProps} />
        </NextIntlProvider>
      </CurrentUserProvider>
    </ApolloClientProvider>
  );
};

export default App;
