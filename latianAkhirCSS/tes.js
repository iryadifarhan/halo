// DOM (Document Object Model) //

// cara pertama
console.log(document.getElementsByClassName("kontakSaya"))

// cara kedua
console.log(document.querySelector(".fotoPorto")) //hanya satu elemen pertama (bukan array)

console.log(document.querySelectorAll(".fotoPorto")) //semua elemen yang sama (array)

let asu = document.querySelector("#kalimatPembuka")

// console.log(asu.innerText = "<b>Anjay</b>") // => ngubah jadi anjay di kalimat pembuka dan nampilin se bold tagnya

/* (nyalain klo mau ubah text)
console.log(asu.innerHTML = "<b>Anjay</b>")         // => ngubah jadi anjay di kalimat pembuka
console.log(asu.style.backgroundColor = "red") 
*/

console.log(asu.classList.remove()) // remove class
console.log(asu.classList.add("wadaw"))
// asu.style.color = 'Red'     //buat warna kalimat pembuka



/* 
==========
Dom Events
==========
*/

let inputNama = document.querySelector("#namaInput");
let button = document.querySelector("button");

button.addEventListener('click', function() {
    let isi = inputNama.value
    var wonderwoman = "#WonderWoman"
    if(isi == ""){
        alert("tolong isi data nama dengan benar!")
        $("#tombolKirim").removeAttr("href")
        asu.innerText = "Halo selamat datang di web saya"
    }else{
        alert('Data berhasil terkirim!')
        $("#tombolKirim").attr("href",wonderwoman)
        $(asu).hide()
        asu.innerText = "Halo selamat datang di web saya, " + inputNama.value + "!"
        $(asu).show(1500)
    }
})



/* 
==========
Jquery DOM
==========
*/

// $ di jquery == memilih elemen HTML (DOM)

$(document).ready(function(){
    
    // let pembuka = $(".wadaw")
    // console.log(pembuka.html())                  // ini buat output biasa

    // console.log(pembuka.html("<i> Anjay </i>")) // ini buat ubah sekaligus output
    // pembuka.prepend("<u>Kelas</u>")
    // pembuka.append("<u>Mabar</u>")
    // pembuka.before("<b> asu </b>")              //add element sebelum element pembuka

    let input = $("textarea")
    console.log(input.val())
    input.empty()                               // dikosongin isi textboxnya
    input.html("Bagikan tanggapanmu di sini!")  // diisi nilai textboxnya
    // input.remove()                           // dihapus texboxnya
})


/* 
====================
Jquery CSS and Class
====================
*/

$(document).ready(function(){
    let footer = $("footer > p")
    footer.addClass("test123")
    footer.removeClass()
    
    //styling - 1
    footer.css('color','salmon')

    //styling -2 
    let style = {
        color: 'white',
        fontSize: '1.1rem'
    }

    footer.css(style)
})


/* 
============
Jquery Event
============
*/

$(document).ready(function(){
    let tombol = $(".tombolNav")
    // tombol.on('click',function(){})  ==> ini persis js dom query addListener

    var windowSize = window.matchMedia("(max-width: 600px)")

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('.tombolNav').on('click', function() { 
        $('html, body').animate({scrollTop: $(this.hash).offset().top}, 800);
        return false;
    });

    $('#tombolKirim').on('click', function() {  
        $('html, body').animate({scrollTop: $(this.hash).offset().top}, 800);
        return false;
    });

    if(windowSize.matches){
        $('textarea').css('fontSize',"1.5rem")  //kalo di load dari hp digenerate nya gede
    }
})
