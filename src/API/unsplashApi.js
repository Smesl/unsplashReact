import Unsplash from 'unsplash-js';

const API_ROOT = 'https://api.unsplash.com/';
const ACCESS_KEY = "_lA3lHkE44r0DM1pEbgwrjXpFna7SrgNn4n3fSggVc8";
const URL_ROOT_PHOTO = 'https://images.unsplash.com/photo-'
const SECRET_KEY = 'D4mBhM0frM4mBFFrX8FF0Zb1cEf8lvQIRPW2PzZZt04'

export const unsplash = new Unsplash({
    apiRoot: 'https://api.unsplash.com/',
    accessKey: ACCESS_KEY,
    secret: SECRET_KEY,
    callbackUrl: 'http://localhost:3000'
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
        "public",
        "write_likes"
])