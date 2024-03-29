'use strict';

window.onload = () => {
    initUpcomingReleases(); 
};

function convertToMonth(date) {
    // Array of month names
    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    return monthNames[date.getMonth()];
}

function navigateToShoePage(id) {
    window.location.href = `/docs/shoepage.html?id=${id}`;
}

async function initUpcomingReleases() {
    // Get outerwrapper dom
    const outerWrapper = document.querySelector('#outer-wrapper');

    // Fetch from backend, sneaksapi requires "require" which is not supported in browser
    const req = await fetch('https://web-2-backend-fresh-kickz.onrender.com/populair-sneakers', { method: 'GET' });
    const sneakers = await req.json();
    console.log(sneakers);

    // Create a new div element containing the upcoming release shoe html
    let upcomingReleasesHTML = ``;

    sneakers.forEach((sneaker, index) => {
        const htmlString = `
        <div class="wrapper">
        <div onclick="navigateToShoePage(${sneaker.goatProductId})" class="shoe-tile" style="cursor: pointer">         

                <time datetime="${sneaker.releaseDate}" class="icon">
                    <strong>${convertToMonth(new Date(sneaker.releaseDate))}</strong>
                    <span>${new Date(sneaker.releaseDate).getDate()}</span>
                </time>
                <img id="shoe-img" src="${sneaker.thumbnail}" alt="..." />
            </div>
            <div class="shoe-col">
                <div class="shoe-body">
                    <!-- Like Button -->
                    <button
                        class="like-button"
                        x-data="{
                        state: 'Unliked',
                        usedKeyboard: false,
                        async updateState(to) {
                        this.state = 'Saving'
                        await new Promise(resolve => setTimeout(resolve, 1000))
                        this.state = to
                        }
                        }"
                            :class="{
                        'like unliked': state === 'Unliked',
                        'like saving': state === 'Saving',
                        'like liked': state === 'Liked',
                        'focus:outline-none': !usedKeyboard
                        }"
                     @click="updateState(state === 'Unliked' ? 'Liked' : 'Unliked')"
                     @keydown.window.tab="usedKeyboard = true">
                    <span class="like-icon like-icon-state" aria-label="state" x-text="state" aria-live="polite">Unliked</span>
                  </button>
        
                    <h3 id="shoeName" class="shoe-name">${sneaker.shoeName}</h3>
                </div>
          </div>
        </div>`;
        upcomingReleasesHTML += htmlString;
    });

    // Insert the upcoming release shoe html into the outerwrapper
    outerWrapper.innerHTML = upcomingReleasesHTML;
}

//Filter button
const filterButton = document.getElementById('filter-button');
const closeFilterButton = document.getElementById('close-filter-button');
const filterContainer = document.getElementById('filter-container');
const applyFilterButton = document.getElementById('apply-filter-button');

filterButton.addEventListener('click', () => {
    //adds the 'show-filters' class to the filterContainer element
    filterContainer.classList.add('show-filters');
    applyFilterButton.style.display = 'inline-block';
});

closeFilterButton.addEventListener('click', () => {
    //removes the 'show-filters' class from the filterContainer element
    filterContainer.classList.remove('show-filters');
    applyFilterButton.style.display = 'none';
});
