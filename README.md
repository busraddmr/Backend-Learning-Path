### 1. Senkron vs. Asenkron Çalışma
* **Senkron:** Kodun yukarıdan aşağıya sırayla, her satırın birbirini beklemesiyle çalışmasıdır. Bir işlem uzun sürerse tüm sistem donar.
* **Asenkron:** Uzun süren işlemlerin (API istekleri, veritabanı sorguları vb.) arka planda yürütülmesi ve ana akışın durmamasıdır.

### 2. JavaScript'te Asenkron Yönetimi
Asenkron işlemleri yönetmek için iki ana yöntem üzerinde çalıştım:

* **Promises (.then / .catch):** İşlemin başarıyla tamamlanması (`resolve`) veya hata alması (`reject`) durumuna göre zincirleme bir yapı kurar.
* **Async / Await:** Modern JavaScript standardıdır. Asenkron kodu sanki senkronmuş gibi (daha okunabilir) yazmamızı sağlar. Hata yönetimi `try-catch` blokları ile yapılır.

### 3. JSON İşlemleri ve Veri Dönüşümü
Interface ve Tip Güvenliği: Sunucudan dönen JSON verilerinin yapısını TypeScript interface ile tanımlayarak hatalı veri erişimlerinin önüne geçilmesi.

* **JSON Parsing (.json())**: HTTP yanıtındaki ham metin verisinin, üzerinde işlem yapılabilen JavaScript nesnesine dönüştürülmesi.

* **JSON Serialization (JSON.stringify()):** Yerelde güncellenen nesne verisinin, sunucuya (PUT/POST) gönderilmek üzere tekrar string formatına paketlenmesi.

* **HTTP Metot Standartları:** GET ve PUT gibi metotların büyük harf hassasiyeti ve application/json header kullanımının veri iletimindeki kritik rolü.

* **Encoding ve Derleme:** Dosya karakter kodlamasının (UTF-8) önemi ve ts-node yerine npx tsc ile manuel derleme yaparak hataların nasıl ayıklandığı.


## Dosyalar ve İçerikleri
* `promise-ogrenimi.js`: `.then()` zinciri ile asenkron akış örnekleri.
* `promiseWithAwait.js`: Aynı mantığın modern `async/await` yapısına dönüştürülmüş hali.

*`jsonFormat.ts`: JSON verisi çekme, yerelde güncelleme ve sunucuya geri gönderme süreçlerini içeren asenkron uygulama örneği.
