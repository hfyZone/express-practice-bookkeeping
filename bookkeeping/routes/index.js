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
// 新增记录 用于对接create.ejs的form表单
router.post("/account", (req, res) => {
  console.log(req.body)
  res.send("添加记录")
})

module.exports = router;
