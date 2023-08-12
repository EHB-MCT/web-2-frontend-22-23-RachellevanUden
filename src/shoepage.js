'use strict';

function navigateToShoePage(id) {
    window.location.href = `/docs/shoepage.html?id=${id}`;
}

window.onload = () => {
    // Call initProductDetails when the window loads
    initProductDetails(sneakerId);
};

async function initProductDetails(sneakerId) {
    // Get outer container dom
    const outerContainer = document.querySelector('.outer-container2'); // Use class selector

    // Fetch data for the specific sneaker using the id
    const req = await fetch(`http://localhost:3000/sneaker/id?id=${sneakerId}`, { method: 'GET' });
    const sneakers = await req.json();
    console.log('sneaker:', sneakers); // Log the fetched sneaker data
    const sneaker = sneakers[0]; // Access the first sneaker in the array
    console.log(sneaker);

    // Create a new div element containing the product details HTML
    const htmlString = `
        <h1>${sneaker.shoeName}</h1>
        <div class="content-container">
            <div class="container-three">
                <time datetime="${sneaker.releaseDate}" class="icon">
                    <strong>${convertToMonth(new Date(sneaker.releaseDate))}</strong>
                    <span>${new Date(sneaker.releaseDate).getDate()}</span>
                </time>
                <img id="shoe-img-detail" src="${sneaker.thumbnail}" alt="...">
            </div>
            <div class="container-four">
                <ul class="detail-list">
                    <li>
                        <h3>Productdetails</h3>
                    </li>
                    <li>
                        <h4>Shoe Name: ${sneaker.shoeName}</h4>
                    </li>
                    <li>
                        <h4>Brand: ${sneaker.brand}</h4>
                    </li>
                    <li>
                        <h4>Description: ${sneaker.description}</h4>
                    </li>
                    <li>
                        <h4>Release Date: ${sneaker.releaseDate}</h4>
                    </li>
                    <li>
                        <h4>Retail Price: ${sneaker.retailPrice}</h4>
                    </li>
                </ul>
            </div>
        </div>`;

   // Insert the product details HTML into the outer container
    outerContainer.innerHTML = htmlString;
}

initProductDetails();