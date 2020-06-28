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

    getKeyPhraseExtraction(textInput) {
      console.log("Middle Tier Receiver: " + textInput);
      return axios.get(`/api/keyPhraseExtraction`, {
        method: 'GET',
        params: {
          "text": textInput
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
          "Content-type": "application/json"
        },
      })
    }

    // @app.route('/api/relatedSearch', methods=['POST', 'GET'])
    // def relatedSearch():
    //   error = None
    //   if request.method == 'GET':
    //     text = request.args.get('text', '')
    //     print(text)
    //     api = BingClient()
    //     result = api.get_similar_results(text)
    //     print(result)
    //     return jsonify({'related' : result})
    getRelatedSearch(textInput) {
      console.log("Middle Tier Receiver: " + textInput);
      return axios.get(`/api/relatedSearch`, {
        method: 'GET',
        params: {
          "text": textInput
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
          "Content-type": "application/json"
        },
      })
    }    

}