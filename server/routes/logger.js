const router = require('koa-router')();

router.prefix('/logger');

router.post('/', function (ctx, next) {
    console.log(ctx.request.body);
    ctx.response.body = {
        test: 123
    }
})

module.exports = router;
