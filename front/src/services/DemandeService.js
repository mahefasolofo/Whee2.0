import axios from "axios";

const OFFER_API_BASE_URL = "http://localhost:8090/api/whee/demandes";

class OfferService {
  getDemandes() {
    return axios.get(OFFER_API_BASE_URL);
  }

  getDemandesById(covoitId) {
    return axios.get(OFFER_API_BASE_URL + "/" + covoitId);
  }
}

export default new OfferService();
