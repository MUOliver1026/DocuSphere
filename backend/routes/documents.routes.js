const express = require('express');
const Document = require('../models/document.model');
const router = express.Router();

// 创建文档
router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const document = new Document({ title, content });
    await document.save();
    res.status(201).send(document);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// 获取所有文档
router.get('/', async (req, res) => {
  try {
    const documents = await Document.find({});
    res.status(200).send(documents);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// 更新文档
router.put('/:id', async (req, res) => {
  try {
    const { title, content } = req.body;
    const document = await Document.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    if (!document) {
      return res.status(404).send('Document not found');
    }
    res.status(200).send(document);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// 删除文档
router.delete('/:id', async (req, res) => {
  try {
    const document = await Document.findByIdAndDelete(req.params.id);
    if (!document) {
      return res.status(404).send('Document not found');
    }
    res.status(204).send(); // No Content
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
