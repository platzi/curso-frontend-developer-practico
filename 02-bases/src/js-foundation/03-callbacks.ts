interface User {
	id: number;
	name: string;
}

interface Callback {
	call: () => string;
}

const users = [
	{
		id: 1,
		name: "Fabio",
	},
	{
		id: 2,
		name: "Yulieth",
	},
];

export function findName(id: number, callback: (error?: string, user?: User) => string): User | string {
	const user = users.find(function (user) {
		return user.id == id;
	});

	if (!user) {
		return callback(`❌ ERROR!!! No se encontro el usuario!`, undefined);
	}

	return callback(undefined, user);
}
