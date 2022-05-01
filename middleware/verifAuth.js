const verifAuth = () => {
  return (req, res, next) => {
    const isLogged = true;
    if (!isLogged) {
        res.redirect('/login')
    } else {
      next()
    }
  }
}

module.exports = verifAuth