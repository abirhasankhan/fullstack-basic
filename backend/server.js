import express from "express";

const app = express();

// app.get("/", (req, res) => {
//     res.send("Server is up and running!");
// });

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            setup: "Why did the tomato turn red?",
            punchline: "Because it saw the salad dressing!",
        },
        {
            id: 2,
            setup: "Why did the golfer wear two pairs of pants?",
            punchline: "In case he got a hole in one!",
        },
        {
            id: 3,
            setup: "Why did the hipster burn his tongue?",
            punchline: "He drank his coffee before it was cool!",
        },
        {
            id: 4,
            setup: "What do you call a can opener that doesn’t work?",
            punchline: "A can't opener!",
        },
        {
            id: 5,
            setup: "Why did the chicken cross the playground?",
            punchline: "To get to the other slide!",
        },
    ];



    res.send(jokes);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
