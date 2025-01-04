



function request_per_sec(a, o) {

    let options = o || {}
    let array = a || []

    async function fetchWithRateLimit(urls, delay = 1000, options = {}) {
        const responses = [];

        // Helper to pause execution
        const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        for (const url of urls) {
            try {
                const response = await fetch(url, options);
                const text = await response.text();
                responses.push({ url, text });
            } catch (error) {
                console.error(`Error fetching ${url}:`, error);
                responses.push({ url, error: error.message });
            }
            await pause(delay); // Enforce delay
        }

        return responses;
    }

// Example usage:
    const urls = [
        "https://jsonplaceholder.typicode.com/posts/1",
        "https://jsonplaceholder.typicode.com/posts/2"
    ];

    return fetchWithRateLimit(urls).then((results) => {
        console.log(results);
    }).catch(e=>{
        console.error("failed to fetch", e);
    });


}