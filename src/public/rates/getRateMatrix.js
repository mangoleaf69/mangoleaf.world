
const fs = require('fs');
const path = require('path');

function getRates(code, cb) {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    let code2 = code.substring(0,3).toUpperCase();
    if(!isIsoCode(code2)) {
        return "invalid code"
    }

     fetch("https://api.exchangerate-api.com/v4/latest/"+code2, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            if(typeof cb==="function") cb(result);
        })
        .catch((error) => console.error(error));

    return "fetching";
}


function isIsoCode(code) {
    // Replace this with actual ISO code validation logic.
    return /^[A-Z]{3}$/.test(code);
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getMatrix(startCode = "CAD") {
    const queue = [startCode.toUpperCase()];
    const fetched = {};
    const matrix = {};

    while (queue.length > 0) {
        const currentCode = queue.shift();
        console.log(`Fetching rates for ${currentCode}...`);

        const response = await new Promise((resolve) => {
            getRates(currentCode, resolve);
        });

        if (response && response.rates) {
            matrix[currentCode] = response.rates;
            fetched[currentCode] = true;

            // Save individual rates to JSON file
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const dir = path.join(__dirname, year.toString(), month);

            fs.mkdirSync(dir, { recursive: true });

            const filePath = path.join(dir, `${currentCode}.json`);
            fs.writeFileSync(filePath, JSON.stringify(response, null, 2));
            console.log(`Saved rates for ${currentCode} to ${filePath}`);

            // Add new currencies to the queue if not already fetched
            for (const currency in response.rates) {
                if (!fetched[currency] && !queue.includes(currency)) {
                    queue.push(currency);
                }
            }
        } else {
            console.error(`Failed to fetch rates for ${currentCode}`);
        }

        // Wait 1 second + random delay between requests
        const delay = 1000 + Math.random() * 1000;
        await sleep(delay);
    }

    // Save the matrix to matrix.json
    const matrixFilePath = path.join(__dirname, 'matrix.json');
    fs.writeFileSync(matrixFilePath, JSON.stringify(matrix, null, 2));
    console.log(`Saved complete matrix to ${matrixFilePath}`);
}

// Example usage
getMatrix();
