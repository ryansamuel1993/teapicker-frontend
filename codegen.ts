import type { CodegenConfig } from '@graphql-codegen/cli';
import env from './env.json';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [env.SERVER_URL]: {
        headers: {},
      },
    },
  ],
  generates: {
    // Browser client
    './service/gql/index.gql.ts': {
      documents: './**/*.gql',
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        useIndexSignature: true,
        ignoreNoDocuments: true,
        withHooks: true,
        maybeValue: 'T',
      },
    },

    // // Server client
    // './service/gql/server.gql.ts': {
    //   documents: './**/*.gql',
    //   plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
    // },
  },
};

export default config;
