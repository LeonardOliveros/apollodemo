import Sequelize from 'sequelize';

//Crear conexion
const db = new Sequelize('apollodemo', "root", "fpbx$1045%fx", {
	host: 'localhost',
	dialect: 'mysql'
});

//Definir el modelo
const PostModel = db.define('post', {
	content: { type: Sequelize.STRING },
	views: { type: Sequelize.INTEGER }
}, {
	timestamps: false
});

//Crear la tabla si no existe
db.sync();

//Exportar Post
const Post = db.models.post;
export { Post };
