const router = require('koa-router')();
router.get('*', async (ctx, next) => {
    ctx.body = "访问的页面404";
});
module.exports = router