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
    const index = produkToko.findIndex(produk => produk.id === id);
    if (index !== -1) {
        const namaProduk = produkToko[index].nama;
        produkToko.splice(index, 1);
        console.log(`Produk ${namaProduk} (ID: ${id}) berhasil dihapus!`);
    } else {
        console.log(`Gagal: Produk dengan ID ${id} tidak ditemukan.`);
    }
}

function tampilkanProduk(){
console.log("\n=== Daftar Produk Toko ===");
        produkToko.forEach(produk => {
            console.log(`ID: ${produk.id} | Nama: ${produk.nama} | Harga: Rp${produk.harga} | Stok: ${produk.stok}`);
        });
    console.log("==========================\n");
    }
tampilkanProduk();
tambahProduk("Monitor", 1500000 ,3);
tampilkanProduk();
hapusProduk(2);
tampilkanProduk();