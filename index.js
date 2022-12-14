const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const users = [ 
  {
   "id": 1,
   "name":"Ronaldo Nazario",
   "Sport": "Football",
   "Nationality": "Brazil",
   "Position":"Centre Forward",
   "Club": "PSV(Netherland),Barcelona(Spain),Inter(Italy),Real-Madrid(Spain),AC-MILAN(Italy),Corinthes(Brazil)"
  },
  {
    "id":2,
    "Name":"Cristiano Ronaldo",
    "Sport":"Football",
    "Nationality":"Portugal",
    "Position":"Right Winger",
    "Club":"SportingCP(Portugal),Manchester-United(England),Real-Madrid(Spain),Juventes(Italy)"
  },
  {
    "id":"3",
    "Name":"Lionel-Messi",
    "Sport":"Football",
    "Nationality":"Argentina",
    "Position":"Right Winger",
    "Club":"NewBoys(Argentina),FC-Barcelona(Spain),PSG(France)"
  },
  {
    "id":"4",
    "Name":"David-Beckham",
    "sport":"Football",
    "Nationality":"England",
    "Position":"Centre Attacking Midfield",
    "Club":"Manchester-United(England),Real-Madrid(Spain),DC-United(USA),AC-Milan(ITALY),PSG(France)"    
  },
  {
    "id":"5",
    "name":"Ronaldinho",
    "sport":"Football",
    "Nationality":"Brazil",
    "Position":"Centre Attacking Midfielder",
    "Club":"Atlerio-Minera(Brazil),PSG(France),FC-Barcelona(Spain),AC-Milan(Italy)"
  },
  {
    "id":"6",
    "name":"Ricardo Kaka",
    "sport":"Football",
    "Nationality":"Brazil",
    "Position":"Centre Attacking Midfielder",
    "Club":"Sao Palo(Brazil),AC MILAN(ITALY),Real Madrid(Spain),ORLANDO CITY(AUSTRALIA)"
  },
  {
    "id":"7",
    "name":"Zinadine Zidane",
    "sport":"Football",
    "Nationality":"France",
    "Position":"Centre Attacking Midfielder",
    "Club":"Juventes(Italy),Real Madrid(Spain)"
  },
  {
    "id":"8",
    "name":"Diego Marodona",
    "sport":"Football",
    "Nationality":"Argentina",
    "Position":"Centre-Attacking-Midfielder",
    "Club":"New Old Boys(Argentina),FC Barcelona(Spain),Napoli(Italy)"
  },
  {
    "id":"9",
    "name":"Johan Cruyff",
    "sport":"Football",
    "Nationality":"Netherland",
    "Position":"Centre Forward",
    "Club":"Ajax(Netherland),FC Barcelona(Spain)"
  },
  {
    "id":"10",
    "name":"Arjen Robben",
    "sport":"Football",
    "Nationality":"Netherland",
    "Position":"Left Winger",
    "Club":"FC Gronnign(Netherlands),Chelsea(England),Real Madrid(Spain),FC Bayern(Germany)"
  },
  {
    "id":"11",
    "name":"Neymar",
    "sport":"Football",
    "Nationality":"Brazil",
    "Position":"Left Winger",
    "Club":"Santos(Brazil),FC Barcelona(Spain),PSG(France)"
  },
  {
    "id":"12",
    "name":"Zlatan Ibramhavic",
    "sport":"Football",
    "Nationality":"Sweden",
    "Position":"Centre Forward",
    "Club":"Ajax(Netherland),Inter(Italy),FC Barcelona(Spain),AC Milan(Italy),PSG(France),Machester United(England),Napoli(Italy)"
  },
  {
    "id":"13",
    "name":"Samuel Eto",
    "sport":"Football",
    "Nationality":"Cameron",
    "Position":"Centre Forward",
    "Club":"Real Madrid(Spain),FC Barcelona(Spain),Inter(Italy),Chelsea(England)"
  },
  {
    "id":"14",
    "name":"Wesley Sniejder",
    "sport":"Football",
    "Nationality":"Netherland",
    "Position":"Centre-Attacking-Midfielder",
    "Club":"Ajax(Netherland),Real Madrid(Spain),Inter(Italy)"
  },
  {
    "id":"15",
    "name":"Marco Van Basten",
    "sport":"Football",
    "Nationality":"Argentina",
    "Position":"Centre-Attacking-Midfielder",
    "Club":"Ajax(Netherland),AC Milan(Italy)"
  }
];

app.get('/', (req, res) => {
  res.send('TOP 15 Footballers ALL TIME LEGENDS!');
});

app.post('/users', (req, res) => {
  const user = req.body;
  // Handle incoming user data...
  res.send(201);
});

app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  // Handle updated user data...
  res.send(200);
});

app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Handle user deletion...
  res.send(200);
});


const port = process.env.Port || 3000;
app.listen(port, () => 
console.log(`listening on port ${port}...`)
);