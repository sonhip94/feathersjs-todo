const createService = require('feathers-mongoose');
const createModel = require('../../models/article.model.js');
const hooks = require('./article.hooks');
const filters = require('./article.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'article',
    Model,
    paginate
  };

  //Initialize our service with any option it requires
  app.use('/article', createService(options));

  //Get our initiallized service so that we can regester hooks and filters
  const service = app.service('article');

  service.hooks(hooks);

  if (service.filters) {
    service.filters(filters);
  }

};