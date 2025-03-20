let userController = {
    create: function(req, res) {
     return res.render('userNew', {title: 'Usuario nuevo'});
    },

    store: function(req, res) {
        let info = req.body
        return res.redirect('/');
    },

    require: function(req, res) {
        return res.render('login', {title: 'Iniciar sesión'});
    }
}