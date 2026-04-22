let submissionsData = [];

fetch('assets/submissions.json')
  .then(response => response.json())
  .then(data => {
    submissionsData = data.submissions;
    populateTable(submissionsData);
    populateTeacherFilter(submissionsData);
  })
  .catch(err => console.error("Error loading submissions:", err));

function populateTable(records) {
  const tbody = document.querySelector('#submissionsTable tbody');
  tbody.innerHTML = "";
  records.forEach(record => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${record.teacher}</td>
      <td>${record.studentName}</td>
      <td>${record.address}</td>
      <td>${record.age}</td>
      <td>${record.progress}</td>
      <td>${record.residential}</td>
      <td>${record.photo}</td>
      <td>${record.submittedAt}</td>
    `;
    tbody.appendChild(row);
  });
}

function populateTeacherFilter(records) {
  const teacherSelect = document.getElementById('teacherFilter');
  const teachers = [...new Set(records.map(r => r.teacher))];
  teachers.forEach(t => {
    const option = document.createElement('option');
    option.value = t;
    option.textContent = t;
    teacherSelect.appendChild(option);
  });
}

function applyFilters() {
  const teacher = document.getElementById('teacherFilter').value;
  const residential = document.getElementById('residentialFilter').value;
  const searchName = document.getElementById('searchName').value.toLowerCase();

  let filtered = submissionsData;

  if (teacher !== "all") {
    filtered = filtered.filter(r => r.teacher === teacher);
  }
  if (residential !== "all") {
    filtered = filtered.filter(r => r.residential === residential);
  }
  if (searchName) {
    filtered = filtered.filter(r => r.studentName.toLowerCase().includes(searchName));
  }

  populateTable(filtered);
}
