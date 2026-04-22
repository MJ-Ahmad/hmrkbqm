fetch('../assets/config.json')
  .then(response => response.json())
  .then(data => {
    const role = document.title.split(' ')[0].toLowerCase();
    const list = document.getElementById(`${role}-features`);
    if (list && data[role]) {
      data[role].forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        list.appendChild(li);
      });
    }
  })
  .catch(err => console.error("Error loading config:", err));
