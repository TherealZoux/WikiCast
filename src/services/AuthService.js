const generateRandomString = (length) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = crypto.getRandomValues(new Uint8Array(length));
  return Array.from(values)
    .map((x) => possible[x % possible.length])
    .join('');
};

const sha256 = async (plain) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  const hashed = await window.crypto.subtle.digest('SHA-256', data);
  return base64encode(hashed);
};

const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
};

const clientId = "f64ad8be70dd426fae602cfa7c877f5d";
const redirectUri = `${window.location.origin}/redirect`;
const scope = 'user-read-private user-read-email';

const authenticateWithSpotify = () => {
  const codeVerifier = generateRandomString(64);
  window.localStorage.setItem('code_verifier', codeVerifier);

  sha256(codeVerifier).then((codeChallenge) => {
    const authUrl = new URL("https://accounts.spotify.com/authorize");
    const params = {
      response_type: 'code',
      client_id: clientId,
      scope: scope,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
      redirect_uri: redirectUri,
    };
    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString();
  });
};

const getToken = async (code) => {
  const codeVerifier = window.localStorage.getItem('code_verifier');

  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    }),
  };

  const response = await fetch('https://accounts.spotify.com/api/token', payload);
  const data = await response.json();
  localStorage.setItem('access_token', data.access_token);
  localStorage.setItem('refresh_token', data.refresh_token);
  localStorage.setItem('expires_in', data.expires_in);
};

const getRefreshToken = async () => {
  const refreshToken = localStorage.getItem('refresh_token');

  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: clientId,
    }),
  };

  const response = await fetch('https://accounts.spotify.com/api/token', payload);
  const data = await response.json();
  localStorage.setItem('access_token', data.access_token);
  localStorage.setItem('expires_in', data.expires_in);
};

export { authenticateWithSpotify, getToken, getRefreshToken };

