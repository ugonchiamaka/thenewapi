require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5000;
const app = express();

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

// app.get("/studentdata/:id");

app.listen(port, () => {
  console.log(`server is currently running on port ${port}`);
});
