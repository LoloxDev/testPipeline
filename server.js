const express = require('express');
const app = express();
const port = 5555;

app.get('/hello', (req, res) => {
    // Renvoie les données de session avec la réponse
    res.status(200).json({
        message: 'Salut les pros de node express 🫡',
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});