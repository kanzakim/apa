function nextPage(index) {
  alert(`Kamu membuka Halaman ${index + 1}... teruskan perjalananmu.`);
}

function reveal() {
  const key = document.getElementById("keyword").value.toLowerCase();
  if (key === "rahasia") { // Kamu bisa ganti kata ini dengan nama panggilan atau kata spesial!
    document.querySelector(".secret").style.display = "block";
  } else {
    alert("Kata kunci tidak cocok... mungkin belum waktunya.");
  }
}
