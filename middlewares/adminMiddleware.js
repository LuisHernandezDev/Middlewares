const fs = require('fs');

function userAdmin(req, res, next) {
    const authorizedUsers = ['Ada', 'Greta', 'Vim', 'Tim'];
    const user = req.query.user;
    if (authorizedUsers.includes(user)) {
        next(); // Usuario autorizado, pasa al siguiente middleware
    } else {
        res.send('No tienes los privilegios para ingresar');
    }
};




module.exports = userAdmin;