const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

const connection = mysql
	.createConnection({
		host: "localhost",
		user: "root",
		database: "study",
		password: "1322",
	})
	.promise();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Server is Running");
});

app.get("/courses", async (req, res) => {
	try {
		const page = req.query.page || 1;
		const limit = req.query.limit || 8;
		const offset = (page - 1) * limit;

		// Check if a 'topicIds' query parameter is provided
		const topicIdsParam = req.query.topicIds;

		let query = `
SELECT
    c.ID AS CourseID,
    c.Name AS CourseName,
    s.Name AS SpeakerName,
    t.Name AS TopicName,
    c.PriceRange,
    c.CreatedON
FROM
    Courses c
JOIN
    Courses_Speakers cs ON c.ID = cs.CourseID
JOIN
    Speakers s ON cs.SpeakerID = s.ID
JOIN
    Topics t ON c.TopicID = t.ID
`;

		// If 'topicIdsParam' is provided, split it into an array and add a WHERE clause to filter courses by topic IDs
		if (topicIdsParam) {
			const topicIds = topicIdsParam.split(",").map((id) => parseInt(id));
			if (topicIds.length > 0) {
				query += `WHERE t.ID IN (${topicIds.join(",")})`;
			}
		}

		// Add LIMIT and OFFSET clauses for pagination
		query += ` LIMIT ${limit} OFFSET ${offset};`;

		const [rows] = await connection.query(query);

		res.json(rows);
	} catch (error) {
		console.error("Error while fetching courses:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

app.get("/topics", async (req, res) => {
	try {
		const [rows] = await connection.query(`select * from topics`);
		res.json(rows);
	} catch (error) {
		console.error("Error while fetching courses:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

app.listen(9000, () => console.log("Server Started on Port 9000"));
