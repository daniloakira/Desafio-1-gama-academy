function saveOnStorage() {
  let input = document.getElementById('email-input').value;
  localStorage.setItem('email', input);
}
