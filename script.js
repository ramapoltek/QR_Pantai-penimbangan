function payWithEWallet() {
    var vehicleType = document.getElementById('vehicleType').value;
    var paymentStatus = document.getElementById('paymentStatus');
    
    if (vehicleType === "0") {
        paymentStatus.innerHTML = "Silahkan pilih jenis kendaraan terlebih dahulu.";
    } else {
        // Simulasi proses pembayaran
        paymentStatus.innerHTML = "Pembayaran Rp" + vehicleType + " berhasil. Silakan lanjutkan pembayaran.";
        alert("Terima Kasih"); // Menambahkan alert "Terima Kasih"
        
        // Redirect ke payment link Midtrans
        window.location.href = "https://app.sandbox.midtrans.com/payment-links/1715559557735";
    }
}
