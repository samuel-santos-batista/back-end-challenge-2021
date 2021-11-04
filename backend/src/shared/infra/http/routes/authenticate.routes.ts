// import { Router } from 'express';

// import { AuthenticateUserController } from '@modules/accounts/useCases/authenticateUser/AuthenticateUserController';
// import { RefreshTokenController } from '@modules/accounts/useCases/refreshToken/RefreshTokenController';

// const authenticateRoutes = Router();

// const authenticateUserController = new AuthenticateUserController();
// const refreshTokenController = new RefreshTokenController();

// const authenticateUserInitalUserController =
//   new AuthenticateUserInitalUserController();

// const authenticateUserWithSocialLoginController =
//   new AuthenticateUserWithSocialLoginController();

// authenticateRoutes.post('/sessions', authenticateUserController.handle);

// authenticateRoutes.post(
//   '/sessions-with-social-login',
//   authenticateUserWithSocialLoginController.handle,
// );

// authenticateRoutes.post('/refresh-token', refreshTokenController.handle);

// authenticateRoutes.post('/access', authenticateUserInitalUserController.handle);

// export { authenticateRoutes };
