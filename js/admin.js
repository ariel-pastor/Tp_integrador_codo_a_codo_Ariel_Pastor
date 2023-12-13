let clickCount = 0;

function redirectToAdmin() {
  window.location.href = "admin.html";
}

document.getElementById('logo').addEventListener('click', function () {
  clickCount++;

  if (clickCount === 3) {
    redirectToAdmin();
  }
});