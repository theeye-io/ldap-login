const express      = require('express')
const passport     = require('passport')
const bodyParser   = require('body-parser')
const LdapStrategy = require('passport-ldapauth')
const config = require('./config').ldapauth
 
passport.use(
  new LdapStrategy(config, (user, done) => {
	console.log('user')
	console.log(user)
	done(null, user)
  })
)
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(passport.initialize())

 
app.post('/login',
  (req, res, next) => {
	console.log(req.body)
	console.log(req.params)
	console.log(req.query)
	next()
  },
  (req, res, next) => {
  passport.authenticate('ldapauth', {session: false}, (err, user, info) => {
		  console.log(err)
		  console.log(user)
		  console.log(info)
next()
		  })(req,res,req.next)
  },
  function(req, res) {
console.log('authenticated')
   res.send(req.user)
  }
)

app.listen(8080)
