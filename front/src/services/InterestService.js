import axios from 'axios';

const EVENT_API_BASE_URL = "http://localhost:8090/api/whee/interests";


class InterestService {
    getInterest() {
        return axios.get(EVENT_API_BASE_URL + '/getInterest');
    }

    getUserInterests(userId) {
        return axios.get('http://localhost:8090/api/whee/interests/getUserInterest/'+userId);
    }


}

export default new InterestService()
