/* eslint-disable */

import axios from 'axios';

module.exports = async function () {
  // Configure axios for tests to use.
  const host = process.env.HOST ?? 'localhost';
  const port = process.env.POST_SERVICE_PORT ?? '3031';
  axios.defaults.baseURL = `http://${host}:${port}`;
};
