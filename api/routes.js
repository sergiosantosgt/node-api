const Users = require('../auth/auth.controller');
const Contacts = require('../controller/contact.controller');
module.exports = (router) => {
  router.post('/register', Users.createUser);
  router.post('/login', Users.loginUser);
  router.post('/contact', Contacts.createContact);
  router.get('/contacts', Contacts.listContacts);
}