const mongoose = require('mongoose')
mongoose.connect('mongodb://mongo/VUTTR', {
    useNewUrlParser: true,
    useFindAndModify: false
})
