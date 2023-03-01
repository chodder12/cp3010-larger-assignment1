import express from 'express';
import fs from 'fs';

const app = express()
const port = 8000

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('Hello World')
});

const movieData = JSON.parse(fs.readFileSync('./movies.json'));
console.log(movieData);

/*let movieData = [
        {"title":"Top Gun"}, 
        {"title":"Terminator 2"},
        {"title":"Titanic"}
    ];*/



app.get('/movies', (req, res) => {
    res.json(movieData)
})

app.post('/review', (req, res) => {
    movieData.push({"title":req.body.title})
    saveData();
    console.log("update movies called")
    console.log(req.body);
    res.send(req.body);
    res.redirect('/');
})

const saveData = () => {
    const jsonContent = JSON.stringify(movieData);
    fs.writeFile("./movies.json", jsonContent, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON object to file.");
        }
        console.log("JSON file has been saved.");
    })
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});