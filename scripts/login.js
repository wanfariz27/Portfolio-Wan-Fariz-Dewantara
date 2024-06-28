// Ambil form login
const loginForm = document.getElementById('loginForm');

// Tangkap event submit pada form
loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Mencegah submit form refresh halaman

  // Ambil nilai username dan password dari form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Contoh sederhana validasi (biasanya ini akan dilakukan di backend)
  if (username === 'user' && password === 'user123') {
    // Login berhasil
    localStorage.setItem('isLoggedIn', true); // Simpan status login di localStorage
    window.location.href = 'index.html'; // Redirect ke halaman utama
  } else {
    // Login gagal
    alert('Username atau password salah. Silakan coba lagi.');
  }
});
