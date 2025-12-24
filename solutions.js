// Task 1: Create Database & Collection
db = db.getSiblingDB('university');
db.students.drop();
db.createCollection('students');

console.log("--- Task 1 Completed: Created 'university' database and 'students' collection ---");

// Task 2: Insert Complex Documents
db.students.insertMany([
    {
        name: "Ali",
        age: 20,
        year: 2,
        courses: ["Database", "Algorithms"],
        address: { city: "Cairo", street: "9th St" },
        grades: { midterm: 80, final: 85 }
    },
    {
        name: "Sara",
        age: 21,
        year: 3,
        courses: ["Web Development", "UI/UX"],
        address: { city: "Giza", street: "Pyramids St" },
        grades: { midterm: 90, final: 95 }
    },
    {
        name: "Omar",
        age: 23,
        year: 4,
        courses: ["Database", "Cloud Computing"],
        address: { city: "Cairo", street: "Nile St" },
        grades: { midterm: 75, final: 80 }
    },
    {
        name: "Mona",
        age: 22,
        year: 4,
        courses: ["AI", "Data Science"],
        address: { city: "Alexandria", street: "Corniche" },
        grades: { midterm: 88, final: 92 }
    }
]);

console.log("--- Task 2 Completed: Inserted 4 complex student documents ---");

// Task 3: Queries
console.log("\n--- Task 3: Display all students who live in Cairo ---");
printjson(db.students.find({ "address.city": "Cairo" }).toArray());

console.log("\n--- Task 3: Display students who are enrolled in the course 'Database' ---");
printjson(db.students.find({ courses: "Database" }).toArray());

console.log("\n--- Task 3: Display students whose age is greater than 21 ---");
printjson(db.students.find({ age: { $gt: 21 } }).toArray());

// Task 4: Update One (Embedded Field)
db.students.updateOne(
    { name: "Ali" },
    { $set: { "grades.final": 90 } }
);
console.log("\n--- Task 4 Completed: Updated Ali's final grade to 90 ---");

// Task 5: Update Many (Array & New Field)
db.students.updateMany(
    { courses: "Database" },
    { $set: { passed: true } }
);
console.log("--- Task 5 Completed: Set passed: true for all 'Database' students ---");

// Task 6: Increment
db.students.updateMany(
    { year: 4 },
    { $inc: { age: 1 } }
);
console.log("--- Task 6 Completed: Increased age of 4th-year students by 1 ---");

// Task 7: Remove Field
db.students.updateOne(
    { name: "Sara" },
    { $unset: { "address.street": "" } }
);
console.log("--- Task 7 Completed: Removed street field from Sara's address ---");

// Task 8: Final Check
console.log("\n--- Task 8: Display all documents in the students collection ---");
printjson(db.students.find().toArray());
