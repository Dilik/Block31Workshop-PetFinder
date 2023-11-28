const express = require('express');
const app = express();
const PORT = 4400;

app.use(express.static('public'));

const pets = [
    {
      "id": 1,
      "name": "Fido",
      "breed": "Labrador",
      "age": 3,
      "owner": "John",
      "telephone": "555-555-5555",
      "appointments": [
        {"date": "01/01/2020", "time": "10:00", "reason": "checkup"}
      ]
    },
    {
      "id": 2,
      "name": "Spot",
      "breed": "Poodle",
      "age": 2,
      "owner": "Jane",
      "telephone": "555-555-5555",
      "appointments": [
        {"date": "01/01/2020", "time": "10:00", "reason": "checkup"}
      ]
    },
    {
      "id": 3,
      "name": "Rover",
      "breed": "Pitbull",
      "age": 1,
      "owner": "John",
      "telephone": "555-555-5555",
      "appointments": [
        {"date": "01/01/2020", "time": "10:00", "reason": "checkup"},
        {"date": "01/01/2020", "time": "10:00", "reason": "checkup"}
      ]
    }
  ];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/api/v1/pets', (req, res) => {
    res.json(pets)
})

app.get('/api/v1/pets/name/:petName', (req, res) => {
    const petName = req.params.petName;
    const filteredPets = pets.filter((pet) =>
        pet.name.toLowerCase().includes(petName.toLowerCase())
    );
    res.json(filteredPets);
});


app.get('/api/v1/pets/owner/:ownerName', (req, res) => {
    const ownerName = req.params.ownerName;
    const filteredPets = pets.filter((pet) =>
        pet.owner.toLowerCase().includes(ownerName.toLowerCase())
    );
    res.json(filteredPets);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});