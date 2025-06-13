const form = document.getElementById('saranForm');
const reviewContainer = document.getElementById('reviewContainer');
const scriptURL = 'https://script.google.com/macros/s/PASTE_LINK_DI_SINI/exec';

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => {
      showReview(data.nama, data.saran);
      form.reset();
      alert("Terima kasih atas ulasan Anda!");
    })
    .catch(err => alert("Gagal mengirim. Coba lagi."));
});

function showReview(nama, saran) {
  const div = document.createElement('div');
  div.classList.add('review-item');
  div.innerHTML = `<strong>${nama}</strong><br><p>${saran}</p>`;
  reviewContainer.prepend(div);
}
