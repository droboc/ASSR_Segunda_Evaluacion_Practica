require('./models/routes')
const express = require('express')
const path = require('path')
const handlebars = require('handlebars')
const exphbs = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const bodyparser = require('body-parser')
const { engine } = require('express-handlebars');
const routes_controller = require('./controllers/routes_controller')

var app = express();

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.get('/', (req, res) => {
    res.render("router/index");
    
});

app.set('views', path.join(__dirname, "/views/"));

app.engine('hbs', exphbs.engine({
        handlebars: allowInsecurePrototypeAccess(handlebars),
        extname: 'hbs',
        defaultLayout: "MainLayout",
        layoutsDir: __dirname + "/views/layouts/",
    })
);

app.set('view engine', 'hbs');

const port = process.env.PORT || 80

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
});

app.use('/router', routes_controller);

