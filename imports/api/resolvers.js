import { Post } from './connectors';

//Crear la resolucion para la disponibilidad de consultas GraphQL
export default resolvers = {
	Query: {
		posts(_, args) {
			return Post.findAll({ where: args });
		},
	}
};
