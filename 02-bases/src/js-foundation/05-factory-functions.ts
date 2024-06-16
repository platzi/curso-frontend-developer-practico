import { uuidPlugin, getAgePlugin} from '../plugins'

interface pluginsOptionMaker {
    uuidPlug: () => string, 
    agePlug: (birthday: string) => number
}

export const buildPersonFactory = (plugOptMaker: pluginsOptionMaker) => {
	return ( name: string, birthday: string ) => {
		return {
			id: uuidPlugin(),
			name,
			birthday,
			age: getAgePlugin(birthday),
		};
	};
};

// module.exports = {
// 	buildPersonFactory,
// };

// const buildPersonFactory = factoryFuntion.buildPersonFactory;

// const buildPerson = buildPersonFactory(uuid, getAge);

// const fabio = { name: "Fabio", birthday: "04-04-1990" }