const indexRoutes = require('./index_routes');

module.exports = function(app, db) {
  indexRoutes(app, db);
};