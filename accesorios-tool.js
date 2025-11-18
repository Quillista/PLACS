let templates = JSON.parse(localStorage.getItem('templates')) || [];

function saveTemplates() {
  localStorage.setItem('templates', JSON.stringify(templates));
}

function renderTemplates() {
  const list = document.getElementById('template-list');
  list.innerHTML = '';

  templates.forEach((template, index) => {
    const div = document.createElement('div');
    div.className = 'template';

    div.innerHTML = `
      <strong>${template.title}</strong>
      <pre>${template.body}</pre>

      <div class="template-actions">
        <button onclick="editTemplate(${index})">Edit</button>
        <button onclick="deleteTemplate(${index})">Delete</button>
      </div>
    `;

    list.appendChild(div);
  });
}

function createTemplate() {
  const title = document.getElementById('template-title').value.trim();
  const body = document.getElementById('template-body').value.trim();

  if (!title || !body) return alert('Please fill out both fields.');

  templates.push({ title, body });
  saveTemplates();
  renderTemplates();

  // Clear form
  document.getElementById('template-title').value = '';
  document.getElementById('template-body').value = '';
}

function deleteTemplate(index) {
  if (!confirm('Delete this template?')) return;
  templates.splice(index, 1);
  saveTemplates();
  renderTemplates();
}

function editTemplate(index) {
  const template = templates[index];
  const newTitle = prompt('Edit title:', template.title);
  const newBody = prompt('Edit content:', template.body);

  if (newTitle !== null && newBody !== null) {
    templates[index] = { title: newTitle.trim(), body: newBody.trim() };
    saveTemplates();
    renderTemplates();
  }
}

renderTemplates();
