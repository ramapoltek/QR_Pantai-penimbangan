function payWithEWallet() {
    var vehicleType = document.getElementById('vehicleType').value;
    var paymentStatus = document.getElementById('paymentStatus');
    
    if (vehicleType === "0") {
        paymentStatus.innerHTML = "Silahkan pilih jenis kendaraan terlebih dahulu.";
    } else {
        // Simulasi proses pembayaran
        paymentStatus.innerHTML = "Pembayaran Rp" + vehicleType + " berhasil. Silakan lanjutkan pembayaran.";
        showPopup(); // Menampilkan popup "Terima Kasih"
        
        // Redirect ke halaman pembayaran Shopee
        setTimeout(function() {
            window.location.href = "https://sandbox.ipaymu.com/api/v2/payment/direct"; // Ganti dengan URL pembayaran Shopee yang benar
        }, 2000); // Tunggu 2 detik sebelum redirect
    }
}

function showPopup() {
    document.getElementById('thankYouPopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('thankYouPopup').style.display = 'none';
}

async function getQRIS() {
    const response = await fetch('https://sandbox.ipaymu.com/api/v2/payment/direct', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('8A76EFF4-3024-4ED5-93B4-B7DCAD199764')
        },
        body: JSON.stringify({
            payment_type: 'qris',
            transaction_details: {
                order_id: 'order-id-123',
                gross_amount: 10000
            }
        })
    });

    const data = await response.json();
    return data.qr_code_url; // URL QRIS yang dikembalikan oleh API Midtrans
}

async function displayQRIS() {
    const qrisUrl = await getQRIS();
    document.querySelector('.qris-image').src = qrisUrl;
}

displayQRIS();
