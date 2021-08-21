const API_KEY = "2Mla1AX7Y5PJ7vde2bWZH19HDZM";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById('resultsModal'));

document.getElementById('status').addEventListener("click", e => getStatus(e));

// Awaits the promise coming true
// const follows the instructions: https://ci-jshint.herokuapp.com/api?api_key=thisismykey
async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if(response.ok) {
        console.log(data.expiry);
    }
}