import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import NoteList from '../shared/stores/NoteList';

import App from '../shared/App';

const initialData = window.initialData || {};
const noteList = NoteList.fromJS(initialData.noteList);
const initialState = { noteList };

ReactDOM.hydrate(
  <Provider {...initialState}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept('../shared/App', () => {
    const NewApp = require('../shared/App').default;
    ReactDOM.hydrate(
      <Provider {...initialState}>
        <NewApp />
      </Provider>,
      document.getElementById('app')
    );
  });
}
