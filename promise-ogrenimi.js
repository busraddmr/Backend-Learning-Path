// Bu bizim "Zaman Alan" fonksiyonumuz. Hesaplama burada!
const applyDamage = (damage, currentHP) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newHP = currentHP - damage; // Hesaplama burada yapılıyor
      if (newHP <= 0) {
        reject(`OYUNCU ÖLDÜ! Kalan: ${newHP}`);
      } else {
        resolve(`Oyuncu yaşadı. Kalan HP: ${newHP}`); // Dönen değer bu!
      }
    }, 2000);
  });
};

async function savaşıBaşlat() {
  console.log("Savaş başladı, 2 saniye bekliyoruz...");

  try {
    // applyDamage içindeki resolve'dan gelen metin direkt 'sonuç'a atanır
    const sonuç = await applyDamage(120, 100); 
    console.log("Gelen Mesaj:", sonuç);
  } catch (hata) {
    // applyDamage içindeki reject'ten gelen metin buraya düşer
    console.log("Gelen Hata:", hata);
  }

  console.log("Savaş bitti, şimdi bu satır yazıldı.");
}

savaşıBaşlat();
console.log("Bak! Ben fonksiyonun dışındayım ve fonksiyonu beklemeden hemen yazıldım!");