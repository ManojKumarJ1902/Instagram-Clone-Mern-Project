import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use('/assets', express.static(path.join(process.cwd(), "assets")));

function readDB() {
    const data = fs.readFileSync('./db.json');
    return JSON.parse(data);
};

function writeDB(newData) {
    fs.writeFileSync('./db.json', JSON.stringify(newData, null, 2));
};

app.get('/posts', (req, res) => {
    const db = readDB();
    res.json(db.posts);
});

app.get('/profile', (req, res) => {
    const db = readDB();
    res.json(db.profile);
});

app.put('/profile', (req, res) => {
    const db = readDB();
    db.profile = req.body;
    writeDB(db);
    res.json({ message : "profile updated successfully", profile : db.profile });
});

app.get('/suggestions', (req, res) => {
    const db = readDB();
    res.json(db.suggestions);
});

app.get('/story', (req, res) => {
    const db = readDB();
    res.json(db.story);
});

app.get('/story/:id', (req, res) => {
    const db = readDB();
    const story = db.story.find((s) => s.id === req.params.id);
    if(!story) {
        res.status(400).json({message : "Story not found"});
        return;
    };
    res.json(story);
});

app.get('/followers', (req, res) => {
    const db = readDB();
    res.json(db.followers);
});

app.post('/followers', (req, res) => {
    const db = readDB();
    const { id, username } = req.body;
    if(db.followers.some((f) => f.id === id)) {
        return res.status(400).json({ message : "Already followed" });
    };
    db.followers.push({ id, username });
    writeDB(db);
    res.json({ message : "followed successfully "});
});

app.delete('/followers/:id', (req, res) => {
    const db = readDB();
    db.followers = db.followers.filter((f) => f.id !== req.params.id);
    writeDB(db);
    res.json({ message : "unfollowed successfully" });
});

app.listen(3000, () => {
    console.log(`server running on http://localhost:3000`);
})