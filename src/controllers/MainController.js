const index = (req, res) => res.render('start')

const major = (req, res) => {
  const { age } = req.query

  return res.render('age', { age })
}

const minor = (req, res) => {
  const { age } = req.query
  return res.render('age', { age })
}

const check = (req, res) => {
  const { age } = req.body

  if (age >= 18) {
    return res.redirect(`/major?age=${age}`)
  } else {
    return res.redirect(`/minor?age=${age}`)
  }
}

module.exports = {
  index,
  major,
  minor,
  check
}
