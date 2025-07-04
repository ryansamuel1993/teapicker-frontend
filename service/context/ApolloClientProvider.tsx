

import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { ReactNode, useMemo } from 'react';
import env from '../../env.json';
interface ApolloClientProviderProps {
  children: ReactNode;
}

export const ApolloClientProvider = ({ children }: ApolloClientProviderProps) => {
  const client = useMemo(() => {
    const link = createHttpLink({
      uri: env.SERVER_URL,
    });

    return new ApolloClient({
      link,
      cache: new InMemoryCache(),
      defaultOptions: {
        query: { fetchPolicy: 'no-cache' },
        mutate: { fetchPolicy: 'no-cache' },
      },
    });
  }, []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
