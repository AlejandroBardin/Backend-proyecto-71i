const express = require('express');

const { validarJWT } = require('../middlewares/validateToken');
const { validateRegister } = require('../helpers/authCheck');
const { checkAdminPermission } = require('../middlewares/checkAdminPermission');

const {
	createUser,
	getUsers,
	getUserById,
	updateUser,
	deleteUser,
} = require('../controllers/userControllers');

const { Router } = require('express');

const router = Router();

// Registro público
router.post('/register', validateRegister, createUser);

// Solo para administradores autenticados
router.post('/user-add', validarJWT, checkAdminPermission, createUser);

router.get('/users', validarJWT, checkAdminPermission, getUsers);

router.get('/user/:id', validarJWT, checkAdminPermission, getUserById);

router.put('/user/:id', validarJWT, checkAdminPermission, updateUser);

router.delete('/user/:id', validarJWT, checkAdminPermission, deleteUser);

module.exports = router;
