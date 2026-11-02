let harcamalar = [];

function harcamaEkle() {

    let ad = document.getElementById("harcamaAdi").value;

    let tutar = Number(document.getElementById("harcamaTutari").value);

    if (ad === "" || tutar <= 0) {
        alert("Lütfen bilgileri doğru giriniz!");
        return;
    }

    let harcama = {
        ad: ad,
        tutar: tutar
    };

    harcamalar.push(harcama);

    listeyiGoster();

    document.getElementById("harcamaAdi").value = "";
    document.getElementById("harcamaTutari").value = "";

}

function listeyiGoster() {

    let liste = document.getElementById("harcamaListesi");

    liste.innerHTML = "";

    let toplam = 0;

    for (let i = 0; i < harcamalar.length; i++) {

        toplam += harcamalar[i].tutar;

        let li = document.createElement("li");

        li.innerHTML = harcamalar[i].ad + " - " +
            harcamalar[i].tutar + " TL";

        let buton = document.createElement("button");

        buton.innerText = "Sil";

        buton.className = "sil";

        buton.onclick = function() {
            harcamaSil(i);
        };

        li.appendChild(buton);

        liste.appendChild(li);

    }

    document.getElementById("toplam").innerText = toplam;

}

function harcamaSil(index) {

    harcamalar.splice(index, 1);

    listeyiGoster();

}