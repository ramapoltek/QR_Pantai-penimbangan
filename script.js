

        function payWithEWallet() {
            var vehicleType = document.getElementById('vehicleType').value;
            var paymentStatus = document.getElementById('paymentStatus');
            
            if (vehicleType === "0") {
                paymentStatus.innerHTML = "Silahkan pilih jenis kendaraan terlebih dahulu.";
            } else {
                // Simulasi proses pembayaran
                paymentStatus.innerHTML = "Pembayaran Rp" + vehicleType + " berhasil menggunakan E-Wallet.";
                // Anda bisa menambahkan integrasi API pembayaran e-wallet di sini
            }
        }
    </script>
</body>
</html>

