var express = require('express');
var router = express.Router();

/* 记账本列表 */
router.get('/account', function(req, res, next) {
  res.render('list')
});

/* 添加记录 */
router.get('/create', function(req, res, next) {
  res.render('create')
});

module.exports = router;
