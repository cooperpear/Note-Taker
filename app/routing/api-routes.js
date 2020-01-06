var notesData = require ("../data/db.json");
var fs = require ("fs");

module.exports = function (app) {

app.get("/api/notes", function (req, res) {
    console.log("get data", notesData);

    res.json(notesData);
});



app.post("/api/notes", function (req, res) {
    var id = notesData[notesData.length - 1].id +1;
    var data = {
        title: req.body.title, 
        text: req.body.text,
        id: id
    };

    notesData.push(data);
    console.log("post data");
    fs.writeFile("./app/data/db.json", JSON.stringify(notesData), function(err, data) {
        
        console.log("File updated")
    });

    res.json(true);
});

app.delete("/api/notes/:id", function (req, res) {
var tempNotes = [];

    for (let i =0; i <notesData.length; i++) {
        if ( req.params.id !== notesData[i].id)
        {tempNotes.push(notesData[i])}
    };


    notesData[i].delete(req.body);
    res.json(true);
});


}

