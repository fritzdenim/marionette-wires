var Radio = require('backbone.radio');
var Module = require('src/common/module');
var Collection = require('src/common/collection');
var View = require('./view');

module.exports = Module.extend({
  initialize: function() {
    this.container = this.options.container;
    this.collection = new Collection();
    this.start();
  },

  onStart: function() {
    this._showHeaderView();
    this._bindChannelCommands();
  },

  onStop: function() {
    Radio.stopComplying('header');
  },

  addNavitem: function(name, path) {
    this.collection.add({ name: name, path: path });
  },

  _showHeaderView: function() {
    this.view = new View({ collection: this.collection });
    this.container.show(this.view);
  },

  _bindChannelCommands: function() {
    Radio.comply('header', 'add', this.addNavitem, this);
  }
});
