const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/lit/:lat/:lon', (req, res) => {
    const { lat, lon } = req.params;
    res.send(`Latitude: ${lat}, Longitude: ${lon}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
