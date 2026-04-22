const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

// Serve static files (HTML, JS, CSS) from current folder
app.use(express.static(__dirname));

// Default route → student-entry.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'student-entry.html'));
});

// Dashboard route → submissions-dashboard.html
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'submissions-dashboard.html'));
});

const submissionsFile = path.join(__dirname, 'assets', 'submissions.json');

// Endpoint to handle submissions
app.post('/submit', (req, res) => {
  const newSubmission = req.body;

  fs.readFile(submissionsFile, 'utf8', (err, data) => {
    if (err) return res.status(500).send({ error: 'Failed to read file' });

    let submissions = JSON.parse(data);
    submissions.submissions.push(newSubmission);

    fs.writeFile(submissionsFile, JSON.stringify(submissions, null, 2), (err) => {
      if (err) return res.status(500).send({ error: 'Failed to write file' });
      res.send({ message: 'Submission saved', submission: newSubmission });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
