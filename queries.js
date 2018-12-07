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
    createSnack(newSnack) {
        return database('snacks').insert(newSnack).returning('*');
    },
    deleteSnack(id) {
        return database('snacks').where('id', id).delete();
    },
    updateSnack(id, snack) {
        return database('snacks').where('id', id).update(snack)
    }
}