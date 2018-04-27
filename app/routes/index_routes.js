module.exports = function(app, db) {
  app.get('/', (req, res) => {
    res.sendFile('index.html', {
      root: './public/views'
    });
  });
};