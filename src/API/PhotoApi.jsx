import Unsplash from 'unsplash-js';



export const API_ROOT = 'https://api.unsplash.com/';
export const ACCESS_KEY = "_lA3lHkE44r0DM1pEbgwrjXpFna7SrgNn4n3fSggVc8";
export const URL_ROOT_PHOTO = 'https://images.unsplash.com/photo-'
export const SECRET_KEY = 'D4mBhM0frM4mBFFrX8FF0Zb1cEf8lvQIRPW2PzZZt04'


export const unsplash = new Unsplash({
    accessKey: ACCESS_KEY,
    secret: SECRET_KEY,
});