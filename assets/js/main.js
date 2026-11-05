document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Script Jam & Tanggal Real-time (Dashboard Admin)
  function updateClock() {
    const clockElement = document.getElementById('clock');
    if (clockElement) {
      const now = new Date();
      const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      };
      clockElement.innerText = now.toLocaleDateString('id-ID', options);
    }
  }
  
  if (document.getElementById('clock')) {
    setInterval(updateClock, 1000);
    updateClock();
  }

  // 2. Script Validasi Form Login Admin
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');
      const errorMsg = document.getElementById('errorMsg');

      if (!usernameInput.value.trim() || !passwordInput.value.trim()) {
        event.preventDefault(); // Hentikan pengiriman jika kosong
        errorMsg.style.display = 'block';
      } else {
        errorMsg.style.display = 'none';
      }
    });
  }

});
