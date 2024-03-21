var express = require('express');
var router = express.Router();

// lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname + '/../data/db.json')
const db = low(adapter)
//shortid
const shortid = require('shortid')


/* 记账本列表 */
router.get('/account', function(req, res, next) {
  let accounts = db.get('accounts').value()
  res.render('list', {accounts: accounts})
});

/* 添加记录 */
router.get('/create', function(req, res, next) {
  res.render('create')
});
// 新增记录 用于对接create.ejs的form表单
router.post("/account", (req, res) => {
  let id = shortid.generate()
  console.log(req.body)
  db.get('accounts').unshift({id:id, ...req.body}).write();
  res.render('success', {msg: '添加成功', url: '/account'})
})

module.exports = router;
