// == import and config ==
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 9999;

const app = express();

app.use(cors());
app.use(express.json());


// == connect to a db ==
mongoose.connect("mongodb://localhost/todo-list", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// == create a model ==
const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: [3, "Your todo needs a title!"]
    },
    desc: {
        type: String,
        required: true,
        minlength: [2, "Your description must be at least 2 characters!"]
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

let Todo = mongoose.model("Todo", TodoSchema);

// == write some routes ==
app.post("/todos", (req, res) => {
    console.log(req.body);
    Todo.create(req.body)
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
})

app.get("/todos", (req, res) => {
    Todo.find()
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
})

app.get("/todos/:id", (req, res) => {
    Todo.findOne({"_id": req.params.id})
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
})

app.put("/todos/:id", (req, res) => {
    Todo.findOneAndUpdate({"_id": req.params.id} , req.body)
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
})

app.delete("/todos/:id", (req, res) => {
    Todo.deleteOne({"_id": req.params.id})
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
})

// == listen ==
app.listen(port, () => {
    console.log(`you are on ${port}`);
})