// const { uuid } = require('../plugins/uuid.plugin');
// const { getAge } = require('../plugins/getAge.plugin');
// const { uuid, getAge } = require("../plugins")

const buildPersonFactory = (uuid, getAge) => {
	return ({ name, birthday }) => {
		return {
			id: uuid(),
			name,
			birthday,
			age: getAge(birthday),
		};
	};
};

module.exports = {
	buildPersonFactory,
};

// const buildPersonFactory = factoryFuntion.buildPersonFactory;

// const buildPerson = buildPersonFactory(uuid, getAge);

// const fabio = { name: "Fabio", birthday: "04-04-1990" }