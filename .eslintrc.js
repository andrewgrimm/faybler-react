
module.exports = {
   'parser': '@typescript-eslint/parser',
   'plugins': ['@typescript-eslint', 'only-warn', 'eslint-plugin-html'],
   'extends': ['airbnb'],
   'rules': {
     'react/jsx-filename-extension': 0,
     'no-unused-vars': 'off',
     '@typescript-eslint/no-unused-vars': ['error', {
       'vars': 'all',
       'args': 'after-used',
       'ignoreRestSiblings': false,
     }],
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
   'env': {
    'browser': true,
}
}
