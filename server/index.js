const express = require('express');
const path = require('path'); // NEW

const app = express();
const port = process.env.PORT || 8082;
const DIST_DIR = path.join(__dirname, './../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.ejs'); // NEW
app.use('/public', express.static(path.join(__dirname, './../public')));
app.use(express.static('dist'));

app.set('views', '/dist');
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
    res.render(HTML_FILE); // EDIT
});

app.listen(port, function () {
    console.log('App listening on port: ' + port);
});