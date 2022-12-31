const form = document.getElementById('chapterSelect');
const select = form.elements['chapters'];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  return window.location = select.value;
});