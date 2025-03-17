import axios from 'axios';

const use = axios.create({
    baseURL: "https://varni-backend.onrender.com",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export const userContact = (data) => use.post("/userContact", data);  

export const getcontact = () => use.get("/getcontact");
