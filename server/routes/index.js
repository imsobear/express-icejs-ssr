const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const render = require('../../build/server/index').default;
  const { html, error } = await render({
    // 当前请求的路径（必选参数）
    pathname: req.path,
    initialData: {},
  });

  if (error) {
    console.log('SSR 失败，降级到 CSR', error);
  }

  res.send(html);
});

module.exports = router;
