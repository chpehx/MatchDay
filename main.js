document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const favoriteTeamsList = document.getElementById('favoriteTeamsList');
    const matchesList = document.getElementById('matchesList');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = loginForm.email.value;
            const password = loginForm.password.value;

            fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = '/dashboard.html';
                } else {
                    alert(data.message);
                }
            });
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = registerForm.email.value;
            const password = registerForm.password.value;

            fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = '/login.html';
                } else {
                    alert(data.message);
                }
            });
        });
    }

    function loadFavoriteTeams() {
        fetch('/api/teams/favorites')
            .then(response => response.json())
            .then(data => {
                favoriteTeamsList.innerHTML = '';
                data.teams.forEach(team => {
                    const li = document.createElement('li');
                    li.textContent = team.name;
                    favoriteTeamsList.appendChild(li);
                });
            });
    }

    function loadUpcomingMatches() {
        fetch('/api/matches')
            .then(response => response.json())
            .then(data => {
                matchesList.innerHTML = '';
                data.matches.forEach(match => {
                    const li = document.createElement('li');
                    li.textContent = `${match.homeTeam} vs ${match.awayTeam} on ${match.date}`;
                    matchesList.appendChild(li);
                });
            });
    }

    if (favoriteTeamsList) {
        loadFavoriteTeams();
    }

    if (matchesList) {
        loadUpcomingMatches();
    }
});