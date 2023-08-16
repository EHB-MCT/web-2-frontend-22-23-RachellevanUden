'use strict';

// function navigateToShoePage(id) {
//     window.location.href = `/docs/shoepage.html?id=${id}`;
// }


function convertToMonth(date) {
    // Array of month names
    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    return monthNames[date.getMonth()];
}

window.onload = () => {
    // Call initProductDetails when the window loads
    let params = (new URL(document.location)).searchParams;
    let sneakerId = params.get("id");
    initProductDetails(sneakerId);
};


async function initProductDetails(sneakerId) {
    // Get outer container dom
    const outerContainer = document.querySelector('.outer-container2'); // Use class selector
    console.log(outerContainer); // Log the fetched sneaker data
    // Fetch data for the specific sneaker using the id
    const req = await fetch(`https://web-2-backend-fresh-kickz.onrender.com/sneaker/id?id=${sneakerId}`, { method: 'GET' });
    const sneaker = await req.json();
    

    // Create a new div element containing the product details HTML
    const htmlString = `
        <h1>${sneaker[0].shoeName}</h1>
        <div class="content-container">
            <div class="container-three">
                <time datetime="${sneaker[0].releaseDate}" class="icon">
                    <strong>${convertToMonth(new Date(sneaker[0].releaseDate))}</strong>
                    <span>${new Date(sneaker[0].releaseDate).getDate()}</span>
                </time>
                <img id="shoe-img-detail" src="${sneaker[0].thumbnail}" alt="...">
            </div>
            <div class="container-four">
                <ul class="detail-list" style="list-style-type: none;">
                    <li>
                        <h3>Productdetails</h3>
                    </li>
                    <li>
                        <h4>Shoe Name: ${sneaker[0].shoeName}</h4>
                    </li>
                    <li>
                        <h4>Brand: ${sneaker[0].brand}</h4>
                    </li>
                    <li>
                        <h4>Description: ${sneaker[0].description}</h4>
                    </li>
                    <li>
                        <h4>Release Date: ${sneaker[0].releaseDate}</h4>
                    </li>
                    <li>
                        <h4>Retail Price: ${sneaker[0].retailPrice}</h4>
                    </li>
                </ul>
            </div>
        </div>`;
  
   // Insert the product details HTML into the outer container
    outerContainer.innerHTML = htmlString;

}