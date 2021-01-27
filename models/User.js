const knex = require('../database/connection');
const bcrypt = require('bcrypt');

class User {

    async findAll(){
        try{
            var result = await knex.select(['id', 'name', 'email', 'role']).table('users');
            if(result.length > 0){
                return result[0];
            } else {
                return undefined;
            }
        } catch(error){
            return undefined;
        }
    }

    async findEmail(email){
        try {
            var result = await knex.select('*').from('users').where({email: email});

            if(result > 0){
                return {status: true};
            } else {
                return {status: false};
            }
        } catch(error){
            return {status: false, error};
        }
    }

    async create(name, email, password){
        try {
            var hash = await bcrypt.hash(password, 10);
            await knex.insert({name, email, password: hash, role: 0}).table('users');
        } catch(error){
            console.log(error);
        }
    }
}

module.exports = new User();