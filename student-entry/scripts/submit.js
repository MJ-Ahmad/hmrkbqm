document.getElementById('studentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const timestamp = new Date().toLocaleString();

  const formData = {
    teacher: document.getElementById('teacher').value,
    studentName: document.getElementById('studentName').value,
    address: document.getElementById('address').value,
    age: document.getElementById('age').value,
    progress: document.getElementById('progress').value,
    residential: document.getElementById('residential').value,
    photo: document.getElementById('photo').files[0]?.name,
    submittedAt: timestamp
  };

  document.getElementById('timestamp').textContent = "Data submitted at: " + timestamp;

  // Send to backend server
  fetch('/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(data => {
    alert("Data submitted successfully!");
    console.log("Server response:", data);
  })
  .catch(err => console.error("Error submitting data:", err));
});
