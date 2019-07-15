const Contact = require('../dao/contact.dao');

exports.listContacts = (req, res, next) => {
  // res.status(200).send(res.body);
    Contact.find({}, (err, list) => {
      res.status(200).send(list);
      // var map = {};

      // list.forEach(function(data) {
      //   map[data._id] = data;
      // });

      // res.send(map);  
    });
}

exports.createContact = (req, res, next) => {
  //res.status(200).send(req.body);
  // process.exit();

  req.assert('name', 'O nome é obrigatório').notEmpty();
  req.assert('telefone', 'O telefone é obrigatório').notEmpty();
  req.assert('telefone', 'Telefone inválido').isMobilePhone('pt-BR');
  req.assert('email', 'O email é obrigatório').notEmpty();
  req.assert('email', 'Email inválido').isEmail();

  var errors = req.validationErrors();
       
  if(errors){
    res.status(400).json(errors);
    res.format({
        html: function(){
            res.status(400).render('cliente/form', {errors: errors, cliente: cliente});        
        },
        json: function(){
            res.status(400).json(errors);
        }
    });
    
    return;
  }
  
  const data = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    observation: req.body.observation
  }
  
  Contact.create(data, (err, data) => {
    if (err && err.code === 11000) return res.status(409).send('Email already exists');
    if (err) return res.status(500).send('Server error');
    const dataRet = {
      name: data.name,
      email: data.email,
    }
    // response 
    res.send({ dataRet });
  });
}













