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

// Object Icindeki key'leri Tarama Yapiyoruz
let userKeys = Object.keys(users);

if (!userKeys.includes(inputUser)) {
  console.log("Kullanıcı bulunamadı");
} else {
  console.log("Kullanıcı bulundu");
}

// Girilen Ismin Admin Olma Yetkisi Kontrolu
let isAdmin = false;

for (const [key, value] of Object.entries(users)) {
  if (key === inputUser) {
    if (value === "admin") {
      isAdmin = true;
    }
    break;
  }
}

// Girilen Isim Object Icinde Olsa Bile Admin Olma Kontrolu
if (!isAdmin) {
  console.log("Yetkiniz yok");
} else {
  console.log("Admin onaylandı, devam edebilirsiniz");
  // Admin onayı
  let isApproved = confirm("Kargo işlemleri başlasın mı?");

  /*Girilen Isim Admin Yetkisi Yoksa İslemi Durdur */
  if (!isApproved) {
    console.log("İşlem iptal edildi");
  } else {
    /* Girilen Isim Admin Yetkisi Varsa Kargo Bilgilerini Iste */
    let senderName = prompt("Gönderici Adını Giriniz");
    let recipientName = prompt("Alıcı Adını Giriniz");
    let recipientCity = prompt("Alıcının Şehir Bilgisini Giriniz");
    let recipientDistrict = prompt("Alıcının İlçe Bilgisini Giriniz");
    let cargoCompanyName = prompt("Kargo Şirketinin Adını Giriniz");
    let cargoTrackingNumber = prompt("Kargo Takip Numarasını Giriniz");

    /* Kargo Bilgilerini Nested Object Olarak Aliyoruz */
    let cargoInformations = {
      sender: senderName,
      recipientInformations: {
        recipientname: recipientName,
        address: {
          recipientcity: recipientCity,
          recipientdistrict: recipientDistrict
        }
      },
      cargoInformations: {
        cargoName: cargoCompanyName,
        trackingNumber: cargoTrackingNumber
      }
    };

    /* Kargo Bilgileri Alindiktan Sonra
      Object Icinde Yeni Bir Ozellik Ekliyoruz 
      Cargo Update (Spread) */
    let updatedCargo = {
      ...cargoInformations,
      status: "Hazırlanıyor"
    };

    // Cargo Summary (Object.entries)
    console.log("Kargo Özeti");
    for (const [key, value] of Object.entries(updatedCargo)) {
      console.log(key, ":", value);
    }

    // Recipient Informations (Rest)
    let { name, ...addressInfo } = updatedCargo.recipientInformations;

    console.log("Alıcı İsmi:", name);
    console.log("Alıcı Adres Bilgileri:", addressInfo);
  }
}