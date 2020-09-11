var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  // get ssr bundle
  const render = require('../../build/server/index').default;
  console.log(2222, req.path)
  const { html, error } = await render({
    // 当 前请求的路径（必选参数）
    pathname: req.path,
    initialData: {},
  });
  console.log(111, html, error)

  res.send(html);
});

module.exports = router;
