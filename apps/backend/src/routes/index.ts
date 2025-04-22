import Router from 'koa-router';
import testRouter from './test';

const router = new Router();

// Test route
router.use('/test', testRouter.routes());

export default router; 