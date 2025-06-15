export const BASE_URL=process.env.NEXT_PUBLIC_ENVIRONMENT === 'production'
? process.env.NEXT_PUBLIC_BASEURL_PROD
: process.env.NEXT_PUBLIC_BASEURL_DEV;

console.log(BASE_URL, "base url");

export const TOKEN = globalThis?.sessionStorage?.getItem("api_key_token");


export const POINTER = {
    service:'service',
    blog:'blog',
    about:'about',
    media:'media',
    testimonial:'testimonial',
    team:'teams',
    hero:'hero',
    clients:'clients',
    office_location:'office_location'
}