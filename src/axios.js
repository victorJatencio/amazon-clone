import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-5c372.cloudfunctions.net/api", // THE API (cloud function) URL
});

export default instance;

// For debuging only
// baseURL: "http://localhost:5001/clone-5c372/us-central1/api"
