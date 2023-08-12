const path = require('path');
// const userAdmin = require('../middlewares/adminMiddleware');


const controller = {

    home: (req, res) => {
        return res.send('Estas ingresando al home');
    },

    services: (req, res) => {
        return res.send('Estas ingresando a los servicios');
    },


    design: (req, res) => {
        return res.send('Estas ingresando al diseño');
    },

    admin: (req, res) => {
        const user = req.query.user;
        res.send(`Hola Admin: ${user}`);

    }
}

module.exports = controller;