const { Router } = require('express');
const router = Router();

const admin = require('firebase-admin');

var serviceAccount = require("../../node-firebase-example-5b8c5-firebase-adminsdk-xf54r-0e86117901.json");

//Aqui conectamos a la base de datos de firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://node-firebase-example-5b8c5.firebaseio.com/'
});

const db = admin.database();

router.get('/', (req, res) => {

    //Traera todos los registros que estan en la base de datos
    db.ref('Contacts').once('value', (snapshot) => {
        const data = snapshot.val();

        res.render('index', { contacts: data });
    });
});

router.post('/new-contact', (req, res) => {

    const newContact = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone
    };

    console.log(req.body);

    //Aqui vendria siendo el nombre de la tabla
    db.ref('Contacts').push(newContact);
    res.redirect('/');
});

router.get('/delete-contact/:id', (req, res) => {

    db.ref('Contacts/' + req.params.id).remove();
    res.redirect('/');

});

module.exports = router;