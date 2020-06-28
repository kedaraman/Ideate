import axios from "axios";

//real backend URL will go here
//axios.defaults.baseURL = ""
axios.defaults.baseURL = "http://127.0.0.1:5000/"

export default class ApiService {
    
    getHelloWorld() {
      return axios.get(`/`)
    }

    getBase() {
      return axios.get(`/api`)
    }

    getTime() {
      return axios.get(`/api/time`)
    }

    // Example of how to use variables
    getAB(A, B) {
        return axios.get(`/api/something/${A}/somethingElse/${B}`)
    }
}