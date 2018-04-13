// contact-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const article = new Schema({
    title: {
      type:String,
      required:true
    },
    description: String,
    todo: [{
      type: Schema.Types.ObjectId,
      ref: 'todo'
    }],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  });
  return mongooseClient.model('article', article);
};