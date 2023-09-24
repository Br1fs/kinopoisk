const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/kinopoisk', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4, // Указываем использовать IPv4
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((e) => {
    console.log('Failed to connect to MongoDB');
    console.log(e);
});
