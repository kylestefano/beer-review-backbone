var ReviewsCollection = Backbone.Collection.extend({
  
  model: ReviewModel,


  addReview: function (name, text) {
    this.create({
      name: name,
      text: text
    }, { wait: true })
  },


});
