let userController = {
    create: function(req, res) {
     return res.render('userNew', {title: 'Usuario nuevo'});
    },

    store: function(req, res) {
        let info = req.body;
        req.session.user = info;
        res.cookie('user', info.email, {maxAge: 60000});
        res.cookie('password', info.password, {maxAge: 60000});
        res.redirect('/');
        return res.redirect('/');
    },

    require: function(req, res) {
        return res.render('login', {title: 'Iniciar sesión'});
    }
}