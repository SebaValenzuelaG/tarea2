const express = require('express');
const router = express.Router();
const authController = require('./../controller/auth.controller')

router.get('/',authController.getlogin)