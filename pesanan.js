const produkToko= [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
]

function tambahProduk(nama, harga, stok){
    const idbr = produkToko[produkToko.length - 1].id + 1;
    const produkbr = {id: idbr,nama: nama,harga: harga,stok:stok};
    produkToko.push(produkbr);
    console.log(`produk ${nama} berhasil ditambahkan!`);
}
function hapusProduk(id){

}
function tampilkanProduk(){

}
tambahProduk("Monitor", 1500000 ,3);