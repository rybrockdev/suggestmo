import decode from 'jwt-decode';
import moment from 'moment';

const setToken = (token) => {
  window.localStorage.setItem('Token', token);
};

const getToken = () => window.localStorage.getItem('Token');

const getTokenPayload = () => {
  const token = getToken();
  return token && decode(token);
};

const isTokenValid = () => {
  const token = getTokenPayload();

  return Boolean(token && ((!token.exp) || (moment().unix() < token.exp)));
};


const removeToken = () => {
  window.localStorage.removeItem('Token');
};

export default {
  setToken,
  getToken,
  getTokenPayload,
  isTokenValid,
  removeToken,
};
