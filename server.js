const express = require('express')
const cors = require('cors')

const app = express()

const user = require('./routes/user')
const crypto = require('./routes/crypto')
const nft = require('./routes/nft')
const auth = require('./routes/auth')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/user', user)
app.use('/crypto', crypto)
app.use('/nft', nft)
app.use('/auth', auth)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
