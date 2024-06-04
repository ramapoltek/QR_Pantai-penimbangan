function payWithEWallet() {
    var vehicleType = document.getElementById('vehicleType').value;
    var paymentStatus = document.getElementById('paymentStatus');
    
    if (vehicleType === "0") {
        paymentStatus.innerHTML = "Silahkan pilih jenis kendaraan terlebih dahulu.";
    } else {
        // Simulasi proses pembayaran
        paymentStatus.innerHTML = "Pembayaran Rp" + vehicleType + " berhasil. Silakan lanjutkan pembayaran.";

        // Redirect ke halaman pembayaran yang Anda buat
        window.location.href = "Terima Kasih"; // Ganti dengan URL pembayaran Anda yang benar
    }
}
