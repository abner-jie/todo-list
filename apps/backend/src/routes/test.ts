import Router from 'koa-router';
import { Context } from 'koa';

const router = new Router();

router.get('/', async (ctx: Context) => {
  ctx.body = {
    message: 'Test API is working!',
    timestamp: new Date().toISOString()
  };
});

export default router; 