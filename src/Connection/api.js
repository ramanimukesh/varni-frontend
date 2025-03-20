import axios from 'axios';

export const contactAPI = axios.create({
    baseURL: "https://varni-backend.onrender.com",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export const userContact = (data) => contactAPI.post("/userContact", data);
export const getcontact = () => contactAPI.get("/getcontact");

export const vendorAPI = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});
export const userVendor = (data) => vendorAPI.post("/userVendor", data);
export const getvendor = () => vendorAPI.get("/getvendor");