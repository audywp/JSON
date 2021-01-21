console.log('JSON');

//          apasih JSON
// GADA : json adalah daftar format yang dapat mudah dibaca oleh mesin
// SOFYAN : Sekumpulan object yang di rubah ke Text / String
// VANIA : Fortmat yang di gunakan untuk melakukan pertukaran antar client dan server
// Versi ku JSON = Text / String

// Syarat Syarat Membuat JSON dalam bentuk FIle
// 1. Format extension file, = .json
// 2. merupakan object, dengan key , tipe datanya  string
// 3. tipe data value , string, number , null , array, object, dll, kecuali function, undefined, ...

const data = {
  nama: 'audywp',
  umur: 24,
  hobby: ['Coding', 'is', 'my', 'life'],
  addtional: {
    makanaFavorit: 'Martabak',
    jumlahAnak: 2,
    BuahFavorit: ['Apel', 'Jeruk', 'Alpukat'],
  },
};

// manipulasi object menggunakan spread operator

const {nama, umur, hobby, addtional} = data;
const {makanaFavorit} = addtional;
console.log(nama, umur, hobby, addtional, makanaFavorit);

const changeObjectToJson = JSON.stringify(data);
console.log(changeObjectToJson, data);

const dataFromBe =
  '{"nama":"audywp","umur":24,"hobby":["Coding","is","my","life"],"addtional":{"makanaFavorit":"Martabak","jumlahAnak":2,"BuahFavorit":["Apel","Jeruk","Alpukat"]}}';

const changeJsonToObject = JSON.parse(dataFromBe);

console.log(changeJsonToObject);
console.log(changeJsonToObject.nama);

// hal penting
// stringify merubah object menjadi text/string
// const changeObjectToJson = JSON.stringify(data);

// parse merubha string / text menjadi object, dengan syarat text yang di kembalikan terlihat seperti object
// const changeJsonToObject = JSON.parse(dataFromBe);
