const express = require('express');

const app= express();

// app["m-search"]()

const port = process.env.PORT || 3004;

app.listen(port, () => {
    console.log(`The Server is running on Port ${port}`)
})