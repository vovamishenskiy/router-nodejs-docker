const express = require('express')
const app = express()
const path = require('path')
const { readFile } = require('fs').promises
const port = 3030

app.use(express.static('public'))
app.use(express.static('pages'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/pages/page1', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'pages', 'page1.html');
        const content = await readFile(filePath, 'utf-8');
        res.send(content);
    } catch (error) {
        console.error('Error reading page1.html:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/pages/page2', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'pages', 'page2.html');
        const content = await readFile(filePath, 'utf-8');
        res.send(content);
    } catch (error) {
        console.error('Error reading page2.html:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/pages/page3', async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'pages', 'page3.html');
        const content = await readFile(filePath, 'utf-8');
        res.send(content);
    } catch (error) {
        console.error('Error reading page3.html:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`server running at localhost:${port}`)
})