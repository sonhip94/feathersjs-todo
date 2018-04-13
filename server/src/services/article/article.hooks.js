
module.exports = {
  before: {
    all: [
      function (hook) {
        let { query } = hook.params;
        query = {
          $populate: ['todo', 'createdBy'],
          $select: ['title', 'description'],
          $sort: {
            createdAt: -1
          }
        };
        hook.params.query = query;
        return hook;
      }
    ],
    find: [],
    get: [

    ],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};