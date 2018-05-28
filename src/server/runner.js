require('babel-register')(
  {
    plugins: [
      ['css-modules-transform', { generateScopedName: '[hash:8]', extensions: ['.css'] }]
    ]
  }
);
require('./index.js');
