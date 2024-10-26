// script.js

// Initialize vote counts for each party and city
let votes = {
    UPND: 0,
    PF: 0,
    UKA: 0
};

let cityVotes = {
    Lusaka: 0,
    Ndola: 0,
    Kitwe: 0,
    Livingstone: 0,
    Chipata: 0,
    Solwezi: 0
};

// Flag to prevent multiple votes
let hasVoted = false;

function vote(party) {
    // Check if user has already voted
    if (hasVoted) {
        alert("You can only vote once!");
        return;
    }

    // Get selected city
    const city = document.getElementById("city").value;
    if (city === "") {
        alert("Please select a city before voting.");
        return;
    }

    // Increment vote count for the selected party
    if (votes.hasOwnProperty(party)) {
        votes[party]++;
        document.getElementById(`${party}-votes`).textContent = votes[party];
    } else {
        console.error("Invalid party selection");
        return;
    }

    // Increment vote count for the selected city
    if (cityVotes.hasOwnProperty(city)) {
        cityVotes[city]++;
        document.getElementById(`${city}-votes`).textContent = cityVotes[city];
    } else {
        console.error("Invalid city selection");
    }

    // Disable voting buttons and set hasVoted flag
    document.getElementById("vote-UPND").disabled = true;
    document.getElementById("vote-PF").disabled = true;
    document.getElementById("vote-UKA").disabled = true;
    hasVoted = true;

    alert(`Thank you for voting for ${party} from ${city}!`);
}
