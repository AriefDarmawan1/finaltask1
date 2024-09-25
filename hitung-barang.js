function hitungBarang(kualitas, qty) {
  let hargaPerUnit = 0;
  let totalHarga = 0;
  let potongan = 0;

  if (kualitas === "A") {
    hargaPerUnit = 4550;
    totalHarga = hargaPerUnit * qty;

    // Jika qty lebih dari 13, ada potongan sebesar 231 per qty
    if (qty > 13) {
      potongan = 231 * qty;
    }
  } else if (kualitas === "B") {
    hargaPerUnit = 5330;
    totalHarga = hargaPerUnit * qty;

    // Jika qty lebih dari 7, ada potongan sebesar 23% dari total harga
    if (qty > 7) {
      potongan = totalHarga * 0.23;
    }
  } else if (kualitas === "C") {
    hargaPerUnit = 8653;
    totalHarga = hargaPerUnit * qty;
    // Tidak ada potongan untuk kualitas C
  } else {
    console.log("Kualitas barang tidak valid!");
    return;
  }

  let totalYangHarusDibayar = totalHarga - potongan;

  console.log(`- Total harga barang : ${totalHarga}`);
  console.log(`- Potongan : ${potongan}`);
  console.log(`- Total yang harus dibayar : ${totalYangHarusDibayar}`);
}

// Contoh penggunaan fungsi:
hitungBarang("A", 14); // Kualitas A dengan quantity 14
hitungBarang("B", 8); // Kualitas B dengan quantity 8
hitungBarang("C", 5); // Kualitas C dengan quantity 5
