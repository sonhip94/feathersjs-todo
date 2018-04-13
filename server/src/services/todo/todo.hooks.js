

module.exports = {
  before: {
    all: [],
    find: [
      //Filter data
      function (hook) {
        let {query} = hook.params;
        query = {
          $limit : 1001,
          $sort: { createdAt: -1 }
        };
        hook.params = Object.assign({},hook.params,{query});
        return hook;
      }
    ],
    get: [],
    create: [
      // // add field
      // function (hook) {
      //   let {data} = hook;
      //   data.createdAt = new Date();
      //   data.updatedAt = new Date();
      //   hook.data = data;
      //   return hook;
      // }

    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [
      
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [

    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
