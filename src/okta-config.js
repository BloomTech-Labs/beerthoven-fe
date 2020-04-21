const OKTA_DOMAIN =
  process.env.REACT_APP_OKTA_DOMAIN || process.env.OKTA_DOMAIN;
const CLIENT_ID =
  process.env.REACT_APP_OKTA_CLIENTID || process.env.OKTA_CLIENTID;
const CALLBACK_PATH = "/implicit/callback";

const ISSUER = `https://${OKTA_DOMAIN}/oauth2/default`;
const HOST = window.location.host;
const PROTOCOL = window.location.protocol;
const REDIRECT_URI = `${PROTOCOL}//${HOST}${CALLBACK_PATH}`;
const SCOPES = "openid profile email";

export default {
  issuer: ISSUER,
  clientId: CLIENT_ID,
  redirectUri: REDIRECT_URI,
  scope: SCOPES.split(/\s+/),
  callbackPath: CALLBACK_PATH,
};
