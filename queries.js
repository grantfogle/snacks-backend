const database = require('./database-connection');

module.exports = {
    listAllSnacks() {
        return database('snacks');
    }
}