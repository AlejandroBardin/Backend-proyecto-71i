const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
	name: {
		type: String,
		required: true,
	},

	precio: {
		type: String,
		required: true,
	},

	cantidad: {
		type: String,
		required: true,
	},

	descripcion: {
		type: String,
		required: true,
	},

	categoria: {
		type: String,
		required: true,
	},

	imagen: {
		type: String,
		required: true,
	},
});

module.exports = model('productos', ProductoSchema);
