const database = require('./database-connection');

module.exports = {
    listAllSnacks() {
        return database('snacks');
    },
    getSnacksById(id) {
        return (
            database('snacks').where('id', id)
            // database('reviews').where('snack_id', id)
        )
    },
}