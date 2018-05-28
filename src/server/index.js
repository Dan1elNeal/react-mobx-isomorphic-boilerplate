import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { Provider } from 'mobx-react';
import config from 'config';

import App from '../shared/App';
import template from './template';
import NoteList from '../shared/stores/NoteList';

const app = express();

const { port } = config.get('host');

const isProduction = process.env.NODE_ENV === 'production';

const notes = [{ text: 'Hello' }, { text: 'mobx' }, { text: 'example' }];
const noteList = new NoteList();
noteList.addNotes(notes);

if (!isProduction) {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../../webpack/webpack.dev.js');

  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, { noInfo: true,
    publicPath: webpackConfig.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

app.use('/static', express.static('public/static'));

app.get('/', (req, res) => {
  const initialState = { noteList };

  const markup = renderToString(
    <Provider {...initialState}>
      <App />
    </Provider>
  );

  const html = template(markup, initialState, isProduction);

  res.status(200).send(html);
});

app.listen(port, () => console.info(`Running on port ${port}`));
