// Função para ativar o seletor de data apenas quando existir na tela
function ativarDatePicker() {
  const datePicker = document.getElementById("datePicker");
  const selectedDate = document.getElementById("selectedDate");
  if (datePicker && selectedDate) {
    datePicker.onchange = () => {
      let data = new Date(datePicker.value);
      let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      selectedDate.textContent = "Data selecionada: " + data.toLocaleDateString("pt-BR", options);
    };
  }
}

// Função para mostrar apenas a tela selecionada
function mostrarTela(telaId) {
  const telas = ['telaInicio', 'telaCalendario', 'telaEvento', 'telaPerfil'];
  telas.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = (id === telaId) ? 'block' : 'none';
  });
  if (telaId === 'telaCalendario') ativarDatePicker();
}

// Eventos de navegação
window.addEventListener('DOMContentLoaded', () => {
  const navInicio = document.getElementById('navInicio');
  const navCalendario = document.getElementById('navCalendario');
  const navEvento = document.getElementById('navEvento');
  const navPerfil = document.getElementById('navPerfil');
  const profileIcon = document.getElementById('profileIcon');
  if (navInicio) navInicio.onclick = () => mostrarTela('telaInicio');
  if (navCalendario) navCalendario.onclick = () => mostrarTela('telaCalendario');
  if (navEvento) navEvento.onclick = () => mostrarTela('telaEvento');
  if (navPerfil) navPerfil.onclick = () => mostrarTela('telaPerfil');
  if (profileIcon) profileIcon.onclick = () => mostrarTela('telaPerfil');
  // Mostra a tela inicial ao abrir a página
  mostrarTela('telaInicio');
});
