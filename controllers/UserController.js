const User = require('../models/User');

class UserController {

    async index(req, res){
        try {
            var result = await User.findAll();
            if(result != undefined){
                res.status(200);
                res.json(result);
            } else {
                res.status(404);
            }
        } catch(error){
            res.json({error});
        }
    }

    async register(req, res){
        var { email, password, name } = req.body;

        if(email == undefined || password == undefined){
            res.status(400);
            res.send('Preencha os dados corretamente!');
            return;
        }

        var isEmailExists = await User.findEmail(email);
        if(isEmailExists.status){
            res.status(406);
            res.send('O e-mail ja esta cadastrado!');
            return;
        }

        await User.create(name, email, password);

        res.status(200);
        res.send('Cadastrado com sucesso!');
    }
}

module.exports = new UserController();