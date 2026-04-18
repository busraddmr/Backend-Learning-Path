### 1. Senkron vs. Asenkron Çalışma
* **Senkron:** Kodun yukarıdan aşağıya sırayla, her satırın birbirini beklemesiyle çalışmasıdır. Bir işlem uzun sürerse tüm sistem donar.
* **Asenkron:** Uzun süren işlemlerin (API istekleri, veritabanı sorguları vb.) arka planda yürütülmesi ve ana akışın durmamasıdır.

### 2. JavaScript'te Asenkron Yönetimi
Asenkron işlemleri yönetmek için iki ana yöntem üzerinde çalıştım:

* **Promises (.then / .catch):** İşlemin başarıyla tamamlanması (`resolve`) veya hata alması (`reject`) durumuna göre zincirleme bir yapı kurar.
* **Async / Await:** Modern JavaScript standardıdır. Asenkron kodu sanki senkronmuş gibi (daha okunabilir) yazmamızı sağlar. Hata yönetimi `try-catch` blokları ile yapılır.

## Dosyalar ve İçerikleri
* `promise-ogrenimi.js`: `.then()` zinciri ile asenkron akış örnekleri.
* `promiseWithAwait.js`: Aynı mantığın modern `async/await` yapısına dönüştürülmüş hali.