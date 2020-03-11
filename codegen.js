const dotenv = require('dotenv');
// dotenv.config({path:'.env.hasura'});
module.exports = {
  schema: ['./server/**/*.graphql'],
  documents: ['./src/**/*.graphql'],
  overwrite: true,
  generates: {
    './src/App/types.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};
