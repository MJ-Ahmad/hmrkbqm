document.getElementById('studentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const timestamp = new Date().toLocaleString();

  const formData = {
    teacher: document.getElementById('teacher').value,
    studentName: document.getElementById('studentName').value,
    address: document.getElementById('address').value,
    age: document.getElementById('age').value,
    residential: document.getElementById('residential').value,
    startDate: document.getElementById('startDate').value,
    endDate: document.getElementById('endDate').value,
    completedParas: document.getElementById('completedParas').value,
    memorizedParas: document.getElementById('memorizedParas').value,
    perfectParas: document.getElementById('perfectParas').value,
    needParas: document.getElementById('needParas').value,
    currentPara: document.getElementById('currentPara').value,
    lastSabakDate: document.getElementById('lastSabakDate').value,
    lastPage: document.getElementById('lastPage').value,
    photo: document.getElementById('photo').files[0]?.name,
    submittedAt: timestamp
  };

  document.getElementById('timestamp').textContent = "তথ্য সাবমিট হয়েছে: " + timestamp;

  // সার্ভারে পাঠানো
  fetch('/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(data => {
    alert("তথ্য সফলভাবে জমা হয়েছে!");
    console.log("সার্ভারের উত্তর:", data);
  })
  .catch(err => console.error("সাবমিশনে সমস্যা:", err));
});
