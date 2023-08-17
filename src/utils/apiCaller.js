import axios from "axios";
import * as Config from "./../constants/Config";

// dinh nghia fucntion call API
export default function callApi(endpoint, method = "GET", body) {
	try {
		return axios({
			method: method,
			url: `${Config.API_URL}/${endpoint}`,
			data: body,
		});
	} catch (err) {
		console.log(err);
	}
}
