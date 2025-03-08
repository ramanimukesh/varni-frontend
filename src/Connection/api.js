import axios from 'axios'

const use = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export const userContact = () => use.post("/userContact");
export const getcontact = () => use.get("/getcontact");
