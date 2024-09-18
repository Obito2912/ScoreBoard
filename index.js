let homePt = document.getElementById('home__points');
let guestPt = document.getElementById('guest__points');
homeScore = 0;
guestScore = 0;


function homeAdd1() {
    homeScore += 1;
    homePt.textContent = homeScore;
} 

function homeAdd2() {
    homeScore += 2;
    homePt.textContent = homeScore;
} 

function homeAdd3() {
    homeScore += 3;
    homePt.textContent = homeScore;
} 

function guestAdd1() {
    guestScore += 1;
    guestPt.textContent = guestScore;
}

function guestAdd2() {
    guestScore += 2;
    guestPt.textContent = guestScore;
}

function guestAdd3() {
    guestScore += 3;
    guestPt.textContent = guestScore;
} 