export const BASE_URL="http://127.0.0.1:9001/v1";
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