const axios = require('axios');

const httpClientPlugin = {
	get: async(url) => {
		const resp = await axios.get(url);
        return resp.data;
	},
    post: () => {},
    put: () => {},
    delete: () => {},
};

module.exports = {
    httpPlugin: httpClientPlugin
}