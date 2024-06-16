import axios from 'axios'

export const httpClient = {
	get: async(url: string) => {
		const resp = await axios.get(url);
        return resp.data;
	},
    post: () => {},
    put: () => {},
    delete: () => {},
};

// module.exports = {
//     httpPlugin: httpClientPlugin
// }