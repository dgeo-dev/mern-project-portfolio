module.exports = function (req, res, next) {
  const isLogged = true;
  if(!isLogged) {
    res.redirect('/login')
    return
  }
  res.send('Connecté')
  next();
}