import axios from "axios";

const FISHER_API_BASE_URL ="http://localhost:8080/api/v1/fisher";
class FisherService{

        getFishers(){
            return axios.get(FISHER_API_BASE_URL);
        }

        createFisher(fisher){
            return axios.post(FISHER_API_BASE_URL, fisher);
        }

        getFisherById(fisherId){
            return axios.get(FISHER_API_BASE_URL + '/' + fisherId);
        }

        updateFisher(fisher, fisherId){
            return axios.put(FISHER_API_BASE_URL + '/' + fisherId, fisher);
        }

}

export default new FisherService()