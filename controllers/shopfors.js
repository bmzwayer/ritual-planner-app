const Shopfor = require('../models/shopfor')


module.exports = {
    index,
    show,
    new: newshopfor,
    create,
    delete: deleteShopfor,
    edit,
    update
};

function update(req, res){
    req.body.done = req.body.done === 'on';
    Shopfor.update(req.params.id, req.body);
    res.redirect(`/shopfors`);
}

function edit(req, res){
    var shopfor = Shopfor.getOne(req.params.id);
    res.render('shopfors/edit', {
        shopfor,
        shopforId: req.params.id
    })
}

function deleteShopfor(req, res){
    Shopfor.deleteOne(req.params.id);
    res.redirect('/shopfors')
}

function create(req, res){
    req.body.done = false;
    Shopfor.create(req.body);
    res.redirect('/shopfors');
}

function newshopfor(req, res){
    res.render('shopfors/new')
}


function show (req, res){
    res.render('shopfors/show', {
        shopfor: Shopfor.getOne(req.params.id),
        shopforNum: parseInt(req.params.id) + 1
    });
}

function index (req, res) {
    res.render('shopfors/index', {
        shopfors: Shopfor.getAll()
    });
};