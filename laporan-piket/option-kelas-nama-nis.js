// ISI DENGAN URL WEB APP YANG DIDAPATKAN DARI LANGKAH 1 DEPLOYMENT APPS SCRIPT
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwmuoHUodfXR8iRSUNP8MBNhz3qTyUJ6yZJKjCCe9uP_yArecNG5wu4agO0a_cY0BL_ag/exec";

// 1. Fungsi Memuat Data Siswa dari Sheet ke Select Option HTML
async function loadOptions() {
    const selectElement = document.getElementById('kelas_nama_nis');
    try {
        const response = await fetch(WEB_APP_URL);
        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error);
        }

        selectElement.innerHTML = '<option value="">-- Pilih Nama Siswa --</option>'; // Reset opsi
        
        // Memasukkan array nama siswa ke elemen seleksi dropdown
        data.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            selectElement.appendChild(option);
        });
    } catch (error) {
        console.error('Gagal memuat data:', error);
        selectElement.innerHTML = '<option value="">Gagal memuat data siswa</option>';
    }
}



// Jalankan otomatis fungsi memuat opsi begitu dokumen siap dibuka
document.addEventListener('DOMContentLoaded', loadOptions);
