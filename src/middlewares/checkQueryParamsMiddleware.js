const checkAgeQueryParams = (req, res, next) => {
  const { age } = req.query

  if (!age) {
    return res.redirect('/')
  }

  return next()
}

module.exports = {
  checkAgeQueryParams
}
