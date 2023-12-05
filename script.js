let o=prompt("Masukkan operator sebagai berikut\nContoh :\n+ = Untuk Penjumlahan\n- = Untuk Pengurangan\n/ = Untuk Pembagian\n* = Untuk Perkalian ")
let a=+prompt("Masukkan angka ke 1: ")
let b=+prompt("Masukkan angka ke 2: ")

switch(o){
    case "+":
    alert(`Hasilnya adalah : ${a+b}`)
    break;    
    case "-":
    alert(`Hasilnya adalah : ${a-b}`)
    break;    
    case "*":
    alert(`Hasilnya adalah : ${a*b}`)
    break;       
    case "/":
    alert(`Hasilnya adalah : ${a/b}`)
    break;
    default:
    alert('Masukkan Operartor Atau Angka Dengan Benar!')
}

