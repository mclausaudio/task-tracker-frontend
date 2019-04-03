import axios from "axios";

//breaking out a seperate function for all of our API calls
export function apiCall(method, path, data) {
	//it will return a new promise, we will resolve the promise when our actions have resolved
	return new Promise((resolve, reject) => {
		//return the axios request, with whatever method i pass in (cant do . and need to use brackets because we need to evaluate the value of 'method'.  axios[method] returns a function which we can then immediately invoke and pass in our path and our data)
		return (
			axios[method](path, data)
				//then return the appropriate axios obj responses.  successful requests always have a sub obj called data
				.then(res => {
					return resolve(res.data);
				})
				.catch(err => {
					//rejects return an err object that matches below
					return reject(err.response.data.error);
				})
		);
	});
}
