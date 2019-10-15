
module.exports = {
   'parser': '@typescript-eslint/parser',
   'plugins': ['@typescript-eslint'],
   'extends': ['airbnb'],
   'rules': {
     'react/jsx-filename-extension': 0,
   },
   'settings': {
    'import/extensions': ['.js','.jsx','.ts','.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts','.tsx'],
     },
     'import/resolver': {
         'node': {
             'extensions': ['.js','.jsx','.ts','.tsx'],
         }
     },
   },
}

// TODO - Modify eslint so warning is shown instead of throwing error.
