const connection = require('../database/connection');

module.exports = {
    async update(request, response){
        const {password} = request.body;
        const { id } = request.params

        await connection('users')
        .update({password})
        .where({ id });

        return response.json();
    }
}