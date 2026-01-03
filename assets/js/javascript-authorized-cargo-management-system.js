/*

Yetkili Kargo Yönetim Sistemi - Bölüm Sonu Canavarı

NOT: Diğer örnekleri yapmadan bu örneğe geçmeyiniz !!!

Senaryo
Bir kargo sisteminde kullanıcılar ve gönderiler object’ler ile tutulmaktadır.

Sistemde:

    Kullanıcılar → key–value
    Kargo → nested object
    Yetki → property kontrolü
    Listeleme → Object.keys / values / entries
    Güncelleme → spread
    Ayıklama → rest

kullanılacaktır.

1) Kullanıcı Sistemi

Aşağıdaki kullanıcı object’i verilmiştir:

let users = {
ali: "admin",
ayse: "user",
mehmet: "user"
};

    Kullanıcıdan adını prompt ile al
    Eğer kullanıcı yoksa → "Kullanıcı bulunamadı"

Varsa:

    admin ise → devam et
    user ise → "Yetkiniz yok"

2) Admin Onaylandıysa → Kargo Oluştur

Admin kullanıcıdan aşağıdaki bilgileri al:

    Gönderici adı
    Alıcı adı
    Alıcı şehir
    Alıcı ilçe
    Kargo firması
    Takip numarası

Bu bilgileri nested object yapısında sakla.

3) Kargo Bilgilerini Güncelle (Spread)

Kargoya yeni bir bilgi ekle:

    durum: "Hazırlanıyor"

Orijinal kargo object’i bozulmasın.

4) Kargo Özeti Yazdır

    Object.entries() kullanarak
    Tüm kargo bilgilerini key – value şeklinde yazdır

5) Alıcı Bilgilerini Ayır (Rest)

Alıcı içindeki:

    isim ayrı değişkende
    Geri kalan adres bilgileri başka bir object’te toplansın

*/

let users = {
  ali: "user",
  ayse: "editor",
  veli: "admin",
  mehmet: "user"
};

let inputUser = prompt("Adınızı Giriniz");

let found = false;

// let key = Object.entries(users);

for (const [key, value] of Object.entries(users)) {
  // console.log(key);
  if (key !== inputUser) {
    found = false;
    console.log("İşlem Yapmak İçin Yetkiniz Yok");
    break;
  } else if (key === inputUser) {
    found = true
    confirm("Kargo İşlemleri Başlasın Mı?");
    if (true) {
      let senderName = prompt("Gönderici Adını Giriniz");
      let recipientName = prompt("Alıcı Adını Giriniz");
      let recipientCity = prompt("Alıcının Şehir Bilgisini Giriniz");
      let recipientDistrict = prompt("Alıcının İlçe Bilgisini Giriniz");
      let cargoCompany = prompt("Kargo Şirketinin Adını Giriniz");
      let cargoTrackingNumber = prompt("Kargo Takip Numarasını Giriniz");

      let cargo = {
        sender: senderName,
        recipientInformations: {
          recipientname: recipientName,
          recipientaddress: {
            city: recipientCity,
            district: recipientDistrict
          }
        },
        cargoCompanyInformations: {
          companyName: cargoCompany,
          trackingNumber: cargoTrackingNumber
        }
      }

      console.log("Kargo Gönderim Bilgileri");
      console.log(`Gönderici Adı : ${cargo.sender}`);
      console.log(`Alıcı Adı : ${cargo.recipientInformations.recipientname}`);
      console.log(`Alıcı Şehir Adı : ${cargo.recipientInformations.recipientaddress.city}`);
      console.log(`Alıcı İlçe Adı : ${cargo.recipientInformations.recipientaddress.district}`);
      console.log(`Kargo Firması Adı : ${cargo.cargoCompanyInformations.companyName}`);
      console.log(`Kargo Takip Numarası : ${cargo.cargoCompanyInformations.trackingNumber}`);
    }
  } else if (value === "user") {
    console.log("İşlem Yapmak İçin Yetkiniz Yok");
  }
}