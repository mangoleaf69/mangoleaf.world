// const fetch = require('node-fetch');
// Deta

const CLOUDFLARE_ACCOUNT_ID="81823b6e40ff985b1b60e39263b3c087"
const CLOUDFLARE_API_TOKEN="pc_akc_Ndmx0H1vWHSmGf4XQ3QKNvdTI9QLaYsi6"



var myHeaders = new Headers();
myHeaders.append("X-Auth-Email", "mangoleaf96d343@gmail.com");
myHeaders.append("X-Auth-Key", "0d2e073a4ee75281348057277a606e0717fb7");
myHeaders.append("Authorization", 'Bearer '+CLOUDFLARE_API_TOKEN);
myHeaders.append("Content-Type", "application/json");



// Helper function to fetch data from a given URL with options
async function fetchData(url, options) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log("Data fetched successfully:", data);
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}


// Function to fetch Cloudflare SSL verification data
async function fetchCloudflareDomain(domain="mangoleaf.world", headers) {
    let url = 'https://api.cloudflare.com/client/v4/accounts/81823b6e40ff985b1b60e39263b3c087/intel/domain?domain='+domain;
    const requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    const sslData = await fetchData(url, requestOptions);
    if (sslData) {
        saveJsonFile(sslData, 'cloudflare_ssl_verification.json');
    }
}

// Function to fetch Cloudflare SSL verification data
async function fetchCloudflareSSL(zoneId, headers) {
    const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/ssl/verification?retry=true`;
    const requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    const sslData = await fetchData(url, requestOptions);
    if (sslData) {
        saveJsonFile(sslData, 'cloudflare_ssl_verification.json');
    }
}


const fs = require('fs');
const path = require('path');

// Function to save JSON data to a file using Node.js fs module
function saveJsonFile(data, filename) {
    const filePath = path.join(__dirname, filename);
    const jsonData = JSON.stringify(data, null, 2); // Pretty-print with 2 spaces indentation

    fs.writeFile(filePath, jsonData, 'utf8', (err) => {
        if (err) {
            console.error(`Error writing file ${filename}:`, err);
        } else {
            console.log(`File ${filename} has been saved successfully.`);
        }
    });

}

// Reusable WHOIS lookup function (replace this with the actual API endpoint)
async function fetchWhoisData(domain, headers) {
    const url = `https://api.cloudflare.com/client/v4/whois/${domain}`;
    const requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    const whoisData = await fetchData(url, requestOptions);
    if (whoisData) {
        saveJsonFile(whoisData, 'whois_lookup.json');
    }
}



fetchCloudflareDomain("mangoleaf.world", myHeaders)

const ZONE_ID = "09cb0d19eb4d3748c08b3539c60e90b9";
fetchCloudflareSSL(ZONE_ID, myHeaders);

//
// const ZONE_ID = "09cb0d19eb4d3748c08b3539c60e90b9";
// fetchCloudflareSSL(ZONE_ID, myHeaders);
//
// // Example of performing a WHOIS lookup
const DOMAIN = "mangoleaf.world";

fetchWhoisData(DOMAIN, myHeaders);
//


// let options = {
//     method: 'GET',
//     headers: myHeaders
// };
//
// fetch(url, options)
//     .then(res => res.json())
//     .then(json => {
//         console.log(json)
//
//         // document.getElementById('domain-deets').innerText = JSON.stringify(json, null, 2);
//
//     })
//
//     .catch(err => console.error('error:' + err));
//
//
//
//
// var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow'
// };
//
// const ZONE_ID = "09cb0d19eb4d3748c08b3539c60e90b9"
// fetch("https://api.cloudflare.com/client/v4/zones/"+ZONE_ID+"/ssl/verification?retry=true", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));



// curl -X GET "https://api.cloudflare.com/client/v4/accounts/81823b6e40ff985b1b60e39263b3c087/intel/domain?domain=mangoleaf.world" \
//      -H "X-Auth-Email: mangoleaf96d343@gmail.com" \
//      -H "X-Auth-Key: 0d2e073a4ee75281348057277a606e0717fb7" \
//      -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
//      -H "Content-Type: application/json"