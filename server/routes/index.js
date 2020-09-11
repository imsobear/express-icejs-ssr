var express = require('express');
const fs = require('fs');
const path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  // 后续会去除对 htmlTemplate 的依赖
  const htmlTemplate = fs.readFileSync(path.join(__dirname, '../../build/index.html'), 'utf8');

  const render = require('../../build/server/index').default;
  const { html, error } = await render({
    // 当 前请求的路径（必选参数）
    pathname: req.path,
    initialData: {},
    htmlTemplate,
  });

  if (error) {
    console.log('SSR 失败，降级到 CSR', error);
  }

  res.send(html);
});

module.exports = router;
