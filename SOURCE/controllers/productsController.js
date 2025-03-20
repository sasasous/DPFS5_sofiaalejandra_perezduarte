let productController = {
    create:function(req,res){
        return res.render('productNew', {title: 'Producto Nuevo'});
    },

    store:function(req,res){
        let info = req.body;
        return res.redirect('/');
    },

    edit:function(req,res){
        return res.render('productEdit', {title: 'Editar Producto'});
    },

    list:function(req,res){
        return res.render('productList', {title: 'Lista de Productos'});
    }

}

//Exportar módulo
module.exports = ProductosControladores;