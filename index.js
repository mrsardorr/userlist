const express = require('express')
const app = express()
const path = require('path')
const { create } = require('express-handlebars')

const hbs = create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: './views/layouts'
})

app.use(express.static(path.join('views')))
app.use(express.urlencoded({ extended: true }))

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

const users = [
    { username: 'Tom', password: 'asoidaosdij', id: 92299 },
    { username: 'Harry', password: 'asdijansdo', id: 	6825 },
    { username: 'Nyuton', password: 'odfkngondfg', id: 403 },
]

app.get('/', function (req, res) {
    res.render('index')
})
app.get('/users', function (req, res) {
    res.render('users',{
        users,
    })
})
app.post('/add/user', function (req, res) {
    req.body.id = Math.floor(Math.random() * 99999)
    req.body.age = +req.body.age
    req.body.age = +req.body.age
    users.push(req.body)
    res.redirect('/users')
})


app.listen(9999,function(){
    console.log('nice :)')
})