// importing dependencies
const express = require('express');
const cors = require('cors');
const auth0 = require('./auth0');

// configuring Express
const app = express();
app.use(express.json());
app.use(cors());

// defining contacts array
const contacts = [
  { name: 'Bruno Krebs', phone: '+555133334444' },
  { name: 'John Doe', phone: '+191843243223' },
];

// defining endpoints to manipulate the array of contacts
// app.get('/contacts', (req, res) => res.send(contacts));
// app.post('/contacts', (req, res) => {
//   contacts.push(req.body);
//   res.send();
// });

// redefining both endpoints
app.get('/contacts', auth0(), (req, res) => res.send(contacts));
app.post('/contacts', auth0(), (req, res) => {
  contacts.push(req.body);
  res.send();
});

// starting Express
app.listen(3000, () => console.log('Example app listening on port 3000!'));
