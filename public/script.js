function getAllPets() {
    fetch('/api/v1/pets')
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        });
}

function getPetsByName() {
    const petName = document.getElementById('petName').value;
    fetch(`/api/v1/pets/name/${petName}`)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        });
}

function getPetsByOwner() {
    const ownerName = document.getElementById('ownerName').value;
    fetch(`/api/v1/pets/owner/${ownerName}`)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        });
}

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<h2>Results:</h2>';

    if (data.length === 0) {
        resultsDiv.innerHTML += '<p>No matching pets found.</p>';
    } else {
        data.forEach(pet => {
            const appointmentsList = pet.appointments.map(appointment => {
                return `Date: ${appointment.date}, Time: ${appointment.time}, Reason: ${appointment.reason}`;
            }).join('<br>'); // Join appointments with line breaks

            resultsDiv.innerHTML += `
              <p>ID: ${pet.id}, 
              Name: ${pet.name}, 
              Owner: ${pet.owner}, 
              Breed: ${pet.breed}, 
              Age: ${pet.age}, 
              Upcoming Appointments: ${appointmentsList}</p>
            `;
        });
    }
}