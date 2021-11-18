function blog() {
    const searchForm = document.getElementById('search_form');
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const searchTerm = document.getElementById('search_input').value;

        // Strip previous query out of current location
        const newLocation = location.href.indexOf('&q=') == -1 ? location.href : location.href.substring(0, location.href.indexOf('&q='));

        location.href = `${newLocation}&q=${searchTerm}`;
    });
}

blog();

