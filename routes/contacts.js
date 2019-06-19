const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Get users contacts')
})

router.post('/', (req, res) => {
  res.send('Add a contact')
})

router.put('/:id', (req, res) => {
  res.send('Update contact')
})

router.delete('/:id', (req, res) => {
  res.send('Delete contact')
})

module.exports = router