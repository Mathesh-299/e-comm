const mongoose = require('mongoose');

const connectionData = () => {
    mongoose.connect(process.env.DB_URL).then((con) => {
        console.log('Your database is ready to connect ' + con.connection.host);
    }
    )
}

module.exports = connectionData;