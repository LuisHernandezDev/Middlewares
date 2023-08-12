const fs = require('fs');

const middlewares = {

    ckeckAdmin: (req, res, next) => {
        const authorizedUsers = ['Ada', 'Greta', 'Vim', 'Tim'];
        const user = req.query.user;
        if (authorizedUsers.includes(user)) {
            next(); // Usuario autorizado, pasa al siguiente middleware
        } else {
            res.send('No tienes los privilegios para ingresar');
            // res.redirect('/'); // O se puede redireccionar al home u otra ruta
        }
    },

    userOther: (req, res, next) => {

    }
}



module.exports = middlewares;