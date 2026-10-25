document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const zoomableImages = document.querySelectorAll('.zoomable-img, #chatImageTrigger');
    const chatBody = document.getElementById('chatBody');

    // Autoscroll ke bagian paling bawah obrolan saat halaman dimuat
    if (chatBody) {
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Event Listener untuk semua gambar yang dapat diklik
    zoomableImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.classList.add('active');
            modalImg.src = img.src;
            downloadBtn.href = img.src;
        });
    });

    // Tombol tutup modal
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    // Tutup modal jika mengklik area hitam luar gambar
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('wa-modal-body')) {
            modal.classList.remove('active');
        }
    });

    // Tutup modal dengan tombol 'ESC' pada keyboard
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
});