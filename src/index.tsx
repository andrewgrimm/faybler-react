
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AppRouter from './routers/AppRouter';

const jsx = (
  <>
    <AppRouter />
  </>
);

ReactDOM.render(jsx, document.getElementById('app'));
