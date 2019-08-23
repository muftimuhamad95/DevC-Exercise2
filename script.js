document.querySelector('#tambah').addEventListener("click", function() {
    var angka1 = document.querySelector('#angka1').value;
    var angka2 = document.querySelector('#angka2').value;
    var hasil = parseInt(angka1) + parseInt(angka2);

    document.querySelector('#hasil').innerHTML = hasil;
});

document.querySelector('#kurang').addEventListener('click', function() {
    var angka1 = document.querySelector('#angka1').value;
    var angka2 = document.querySelector('#angka2').value;
    var hasil = parseInt(angka1) - parseInt(angka2);

    document.querySelector('#hasil').innerHTML = hasil;
});

document.querySelector('#kali').addEventListener('click', function () {
    var angka1 = document.querySelector('#angka1').value;
    var angka2 = document.querySelector('#angka2').value;
    var hasil = parseInt(angka1) * parseInt(angka2);

    document.querySelector('#hasil').innerHTML = hasil;
});

document.querySelector('#bagi').addEventListener('click', function () {
    var angka1 = document.querySelector('#angka1').value;
    var angka2 = document.querySelector('#angka2').value;
    var hasil = parseInt(angka1) / parseInt(angka2);

    document.querySelector('#hasil').innerHTML = hasil;
});
