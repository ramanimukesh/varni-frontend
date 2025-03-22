import axios from 'axios';

export const invokeApi = axios.create({
    baseURL: "https://varni-backend.onrender.com",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export const userContact = (data) => invokeApi.post("/userContact", data);
export const getContact = () => invokeApi.get("/getcontact");

export const userVendor = (data) => invokeApi.post("/userVendor", data);
export const getVendor = () => invokeApi.get("/getvendor");