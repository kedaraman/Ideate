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

    // @app.route('/api/keyPhraseExtraction', methods=['POST', 'GET'])
    // def keyPhraseExtraction():
    //   error = None
    //   if request.method == 'POST':
    //     text = request.args.get('text', '')
    //     print(text)
    //     return jsonify({'phrases' : key_phrase_extraction_example(client, text)})
    getKeyPhraseExtraction(textInput) {
      return axios.get(`/api/keyPhraseExtraction`, {
        method: 'get',
        params: {
          text: textInput
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
          "Content-type": "application/json"
        },
      })
      .then(function (response) {
        console.log("This is from the middle tier")
        console.log(response);
        console.log("This is from the middle tier")
      })
      .catch(function (error) {
        console.log(error);
      });
    }
}