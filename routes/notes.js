var express = require('express');
var router = express.Router();
var cors = require('cors');
require('dotenv').config();

// CORSミドルウェアを使用
//app.use(cors());

// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');

// idが１のドキュメントを取得
//const query = { id: 1 };
const query = {};
//const note = await notes.findOne(query);
const notesArray = await notes.find(query).toArray();
res.json(notesArray);
})

module.exports = router;
