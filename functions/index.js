
const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51KUgOCAetY2YJrJOUz8vlDyO4LufZ5ugFORVpC8hIPi0EcS5HgBZvatJnN7HwaStaWjyxIzJa2SyuN2rOZpaXxI800OqhVMZ9e'
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Recieved for this amount >>> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/clone-ee72d/us-central1/api


//to start backend
// firebase emulators:start

//to deploy run
// firebase deploy --only functions