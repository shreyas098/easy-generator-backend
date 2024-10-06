const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/auth';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model(
    'User',
    new mongoose.Schema({
        email: String,
        name: String,
        password: String,
    }),
);

async function fetchUsers() {
    const users = await User.find();
    console.log(users);
}

fetchUsers();
