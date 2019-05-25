const express = require('express');
const app = express();
app.get('/', (req, res) =>{
    res.send('Hi Ernest');
});

app.get('/api/courses', (req, res) => {
    res.send([1,2,3]);
});

// using enviremeonts variables
// port
const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`listenig on port ${port}...`));
