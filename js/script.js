const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn) {
    menuBtn.addEventListener("click", function() {
        navLinks.classList.toggle("aktif");
    });
}

const slaytlar = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let aktifSlayt = 0;
let otoSlider;

if (slaytlar.length > 0) {
    function slaytDegistir(yon) {
        slaytlar[aktifSlayt].classList.remove("aktif");
        if (yon === "ileri") {
            aktifSlayt = (aktifSlayt + 1) % slaytlar.length;
        } else if (yon === "geri") {
            aktifSlayt = (aktifSlayt - 1 + slaytlar.length) % slaytlar.length;
        }
        slaytlar[aktifSlayt].classList.add("aktif");
    }

    function otomatikBaslat() {
        otoSlider = setInterval(() => {
            slaytDegistir("ileri");
        }, 5000);
    }

    otomatikBaslat();

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            clearInterval(otoSlider);
            slaytDegistir("ileri");
            otomatikBaslat();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            clearInterval(otoSlider);
            slaytDegistir("geri");
            otomatikBaslat();
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            clearInterval(otoSlider);
            slaytDegistir("ileri");
            otomatikBaslat();
        } else if (e.key === 'ArrowLeft') {
            clearInterval(otoSlider);
            slaytDegistir("geri");
            otomatikBaslat();
        }
    });
}

const iletisimFormu = document.getElementById("iletisimFormu");
const formUyari = document.getElementById("formUyari");

if (iletisimFormu) {
    iletisimFormu.addEventListener("submit", function(event) {
        event.preventDefault();

        const adSoyad = document.getElementById("adSoyad").value;
        const mesaj = document.getElementById("mesaj").value;

        if (adSoyad.trim() === "" || mesaj.trim() === "") {
            formUyari.style.color = "red";
            formUyari.textContent = "Lütfen Ad Soyad ve Mesaj alanlarını boş bırakmayınız!";
        } else {
            formUyari.style.color = "green";
            formUyari.textContent = "Mesajınız başarıyla alınmıştır. Teşekkür ederiz!";
            iletisimFormu.reset();
        }
    });
}
