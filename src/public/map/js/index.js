
// ok you get to put up with my cs pun naming.


// index.html is the defualut page becuse it should index your site for new visitors

// index.js is for this index.html

//but in this case index refres to this fils pupros of holding the code responsible for indexing the images uploaded
//to mangoleaf.world/map/cam.html



//

function indexUploadedPhoto(hash) {
    //shared information from the structure.
    //this will be hosted from
    //freemap.online/api/free/etch
    //this api is still evolving and under development but in theory
    //


}



// Function to fetch the image, detect its dimensions, and create a popup on a marker
async function addImagePopupOnMarker(map, imageUrl, title) {
    try {
        // Fetch the image
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const imageObjectURL = URL.createObjectURL(blob);

        // Create a virtual image element to load and detect dimensions
        const img = new Image();
        img.src = imageObjectURL;

        img.onload = function() {
            const width = img.width;
            const height = img.height;
            const aspectRatio = width / height;

            // Add a marker at the center of the map
            const marker = L.marker(map.getCenter()).addTo(map);

            // Create the popup content with image, title, and download button
            const popupContent = `
                <div style="text-align: center;">
                    <h3>${title}</h3>
                    <p>Dimensions: ${width} x ${height} (Aspect Ratio: ${aspectRatio.toFixed(2)})</p>
                    <img src="${imageUrl}" alt="${title}" style="max-width:100%; height:auto;" />
                    <br/>
                    <button onclick="downloadImage('${imageUrl}', '${title}')">Download Image</button>
                </div>
            `;

            // Bind the popup to the marker
            marker.bindPopup(popupContent).openPopup();
        };
    } catch (error) {
        console.error("Error fetching image:", error);
    }
}

// Helper function to download the image
function downloadImage(url, title) {
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Example usage: Adding an image popup to a marker on the map
// const map = L.map('map').setView([51.505, -0.09], 13); // Initialize Leaflet map

// Sample image URL (replace with actual URL)
// const imageUrl = 'https://example.com/image.jpg';

// Call the function to add the image popup to a marker
// addImagePopupOnMarker(map, imageUrl, 'Example Image');
