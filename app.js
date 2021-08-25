require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5450;
const mongoose = require("mongoose");
const app = express();
const path = require("./Router");
const cors = require("cors");

const url = process.env.MONGODB_URI;
// console.log(url);

//connecting to MongoDB Atlas
mongoose
  .connect(url, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected successfully");
  });
app.use(express.json());

app.get("/", (req, res) => {
  res.send("new api");
});

// const Student_Data = [
//   { id: 1, name: "Ugonna Judith", course: "Biotechnology" },
//   { id: 2, name: "Sani Stella", course: "Computer-Science" },
//   { id: 3, name: "Cynthia Onyilimba", course: "Computer-Science" },
//   { id: 4, name: "Lucky Ofili", course: "Statistics" },
//   { id: 5, name: "Goodluck Ogbonna", course: "Software-Engineer" },
// ];

// app.post("/studentdata", (req, res) => {
//   if (!Student_Data) {
//     console.log("no collection as such");
//   }
//   const newStudent = {
//     id: Student_Data.length + 1,
//     name: req.body.name,
//     course: req.body.course,
//   };
//   Student_Data.push(newStudent);
//   res.status(200).json(Student_Data);
// });

// app.get("/", (req, res) => {
//   res.send("connected successfully");
// });

// app.get("/studentdata", (req, res) => {
//   res.status(200).json(Student_Data);
// });

// app.get("/studentdata/:id", (req, res) => {
//   const studentId = studentData.find(
//     (stud) => stud.id === parseInt(req.params.id)
//   );
//   if (!studentId) {
//     console.log(`no such student id : ${req.params.id}`);
//   }
//   res
//     .status(200)
//     .json({ message: `student id: ${req.params.id}`, data: studentId });
// });

//app.get("/studentdata/:id");
app.use(cors());
app.use("/churchdata/api", path);
app.listen(port, () => {
  console.log(`server is currently running on port ${port}`);
});
