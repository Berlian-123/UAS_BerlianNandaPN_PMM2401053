// Script untuk menyapa pengunjung
const greeting = document.getElementById('greeting');
const today = new Date();
const hour = today.getHours();

if (hour < 12) {
    greeting.textContent = 'Selamat Pagi!';
} else if (hour < 18) {
    greeting.textContent = 'Selamat Sore!';
} else {
    greeting.textContent = 'Selamat Malam!';
}
