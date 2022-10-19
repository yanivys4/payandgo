import axios from "axios";

const instance = axios.create({
    baseURL:'http://c08c-2a00-a040-199-b1e6-9578-96a8-373a-8a4d.ngrok.io'
});

export default instance;