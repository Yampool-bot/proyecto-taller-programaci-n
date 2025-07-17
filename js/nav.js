window.addEventListener("scroll", function(){
    var navbar = this.document.querySelector("nav")
    navbar.classList.toggle("navsticky", window.scrollY > 0)
})
document.addEventListener('DOMContentLoaded', () => {
  const hora = new Date().getHours();
  let saludo = "¡Bienvenido!";
  if (hora < 12) saludo = "¡Buenos días!";
  else if (hora < 18) saludo = "¡Buenas tardes!";
  else saludo = "¡Buenas noches!";

  const saludoDiv = document.createElement('div');
  saludoDiv.textContent = saludo;
  saludoDiv.style = "position:fixed; top:10px; right:10px; background:#fff3cd; padding:10px; border-radius:8px; font-weight:bold;";
  document.body.appendChild(saludoDiv);

  setTimeout(() => saludoDiv.remove(), 5000);
});
const form = document.getElementById('formulario');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('mensaje-envio').style.display = 'block';
    form.reset();
  });