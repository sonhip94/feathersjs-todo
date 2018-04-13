const todo = require('./todo/todo.service.js');
const users = require('./users/users.service.js');
const contact = require('./contact/contact.service.js');
const article = require('./article/article.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(todo);
  app.configure(users);
  app.configure(contact);
  app.configure(article);
};
