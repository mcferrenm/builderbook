const sendRequest = require('./sendRequest');

const BASE_PATH = '/api/v1/admin';

export const getBookList = () => sendRequest(`${BASE_PATH}/books`, {
  method: 'GET',
});
