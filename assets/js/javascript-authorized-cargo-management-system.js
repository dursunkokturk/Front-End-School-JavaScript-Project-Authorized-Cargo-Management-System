/*

Yetkili Kargo Yönetim Sistemi - Bölüm Sonu Canavarı
Nihat DUYSAK
•
Dec 21, 2025
100 points
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