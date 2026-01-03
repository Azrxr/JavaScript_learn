/*
Pembuatan function sebetulnya mirip dengan pembuatan variabel. 
Dalam variabel, nilai dapat kita akses dengan menyebutkan nama variabelnya.

function keyword
   |
function greetWorl() ->identifier
{
 consol.log('Hello, World!')  ->function body
}

Keyword “function” harus selalu disertakan ketika mendeklarasikan function. 
Berikutnya, keyword tersebut diikuti dengan identifier.
rumus = 9 / 5 * {angka_suhu_celsius} + 32;
*/
function convertCelsiusToFahrenheit(temperature){
    
    const temperatureInfahrenheit = 9 / 5 * temperature + 32;

    console.log('Hasil konversi: ', temperatureInfahrenheit);
}

//Pemanggilan Function
const temperatureInCelsius = 90;
  
  // Hanya menampilkan nilai function
  console.log(convertCelsiusToFahrenheit);
  // Output => [Function: convertCelciusToFahrenheit]
  
  // Akan menjalankan isi function
  convertCelsiusToFahrenheit(temperatureInCelsius);
  // Output => Hasil konversi: 194

  //fitur hoisting dalam JavaScript.
  greetWorld();
  
  function greetWorld() {
    console.log('Hello, world!');
  }
  
  /* Output:
  Hello, world!
  */

  // Langsung memasukkan nilai
convertCelsiusToFahrenheit(100);
 
// Memasukkan nilai dengan variabel
const temperatureInCelsius1 = 90;
convertCelsiusToFahrenheit(temperatureInCelsius1);


//Default Paramater
/*
Tahukah Anda bahwa argument dapat bernilai undefined jika kita tidak beri nilai apa pun dalam parentheses saat function dipanggil?
*/
convertCelsiusToFahrenheit()
/* Output:
Hasil konversi: NaN
*/

//memberikan nilai default
function luasPersegi(panjang = 10, tinggi = 10){
    const hasil = panjang * tinggi;
    console.log('luas persegi : ', hasil);
}

// Menggunakan default value
luasPersegi()

// Menggantikan default value
const panjang = 20;
const tinggi = 30;
luasPersegi(panjang, tinggi)

/*
Return Value

Untuk memberikan kemampuan function mengembalikan nilai (return statement), 
kita gunakan kata kunci return dan diikuti nilai kembaliannya.
*/

function luasLingkaran(r){
    L = 3.14 * r ** 2;
    hasil = 'diketahui Jari-jari: ' + r + ',\n'
    return console.log(hasil, 'maka luas lingkaran adalah: ', L,'cm');

}

luasLingkaran(7);

/*
Function Expression
Tata caranya adalah keyword function, identifier, parentheses untuk parameter, dan function body.

const greetWorld = function (message) {
    console. log( 'Hello, world!
}
*/

const luasSegitiga = function(alas, tinggi){
    const result = 0.5 * alas * tinggi;
    return result;
}

const segitiga = luasSegitiga(10, 6);
console.log('luas segitiga: ', segitiga, 'cm')

/*
Menjadi First-Class Citizen

Pada JavaScript, function dapat kita jadikan sebagai nilai dan disimpan dalam variabel, 
nilai argumen function lain, mengembalikan nilai function dari suatu function, dsb.

*/
function multiply(a, b) {
  return a * b;
}

function calculate(operation, numA, numB) {
  return operation(numA, numB);
}

const result = calculate(multiply, 2, 4);
console.log(result);

function multiplier(x) {
    return function (num) {
        return x * num;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10));
console.log(triple(11));

/*
Arrow Function


*/
console.log("\n<-Arrow Function->\n")

let temperatureInFahrenheit = null;
// Deklarasi function dengan Regular Function
const convertCelsiusToFahrenheitUsingRegularFunction = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingRegularFunction(90);
console.log('Hasil konversi:', temperatureInFahrenheit);
// Hasil ==> Hasil konversi: 194

// Deklarasi Function dengan Arrow Function
const convertCelsiusToFahrenheitUsingArrowFunction = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingArrowFunction(90);
console.log('\nHasil konversi:', temperatureInFahrenheit);
// Hasil ==> Hasil konversi: 194

console.log("versi lebih simple\n")

const cTof = (celcius) => (9 * 5) * celcius + 32;
const convertCelsiusToFahrenheitInConciseSyntax = 
    (temperature) => cTof(temperature)

temperatureInFahrenheit = convertCelsiusToFahrenheitInConciseSyntax(90);
console.log('Hasil konversi:', temperatureInFahrenheit);

/**
 * TODO:
 * 1. Buatlah sebuah fungsi bernama `hello` yang menerima 2 argumen: `name` dan `origin`.
 * 2. Kembalikan fungsi tersebut dengan nilai string dengan templat:
 *    "Halo! Nama saya (name). Saya tinggal di (origin)."
 *
 *    Contoh: Jika `name` bernilai 'Fulan' dan `origin` bernilai 'Jakarta', fungsi harus mengembalikan:
 *    "Halo! Nama saya Fulan. Saya tinggal di Jakarta.".
 *
 * 3. Argumen `origin` boleh kosong dengan nilai default adalah "Bandung".
 * 4. Buatlah variabel bernama `rahmat` yang menampung nilai dari hasil pemanggilan fungsi `hello`
 *    yang diberikan argumen name = 'Rahmat' dan origin = 'Semarang'.
 * 5. Buatlah variabel bernama `indra` yang menampung nilai dari hasil pemanggilan fungsi `hello`
 *    yang diberikan argumen name = 'Indra' tanpa memberikan nilai origin.
 */

function hello(name, origin = 'Bandung'){
    let result = `Halo! Nama saya ${name}. Saya tinggal di ${origin}.`;
    return result;
}
let rahmat = hello('Rahmat', 'Semarang');
console.log(rahmat);
let indra = hello('Indra');
console.log(indra);

