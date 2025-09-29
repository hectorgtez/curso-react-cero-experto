/**
 * Rutas de usuarios / Auth
 * host + /api/auth
 */

const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');
const { createUser, loginUser, renewToken } = require('../controllers/auth');

const router = Router();


router.get('/renew', validateJWT, renewToken);

router.post(
  '/new',
  [
    check('name', 'Name is required.').not().isEmpty(),
    check('email', 'Email is required.').isEmail(),
    check('password', 'Password must be 6 characters lenght.').isLength({ min: 6 }),
    validateFields,
  ],
  createUser
);

router.post(
  '/',
  [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be 6 characters lenght.').isLength({ min: 6 }),
    validateFields,
  ],
  loginUser
);

module.exports = router;