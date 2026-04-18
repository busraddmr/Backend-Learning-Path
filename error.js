const fetchUser = (id) => {
    return new Promise ((resolve , reject) =>{
        setTimeout(() =>{
            if(id ===1){
                resolve({id:1 , name: "Büşra"});
            }
            else{
                reject(new Error("sunucuya baglanmadi."));
            }
        },1500);
    });
};

fetchUser(2)
.then((user) => {
    console.log(`user fetched: ${user.name}`);
})
.catch((err) => {
    if (err instanceof Error) {
        console.log(`An error was thrown: ${err.message}`);
    } else {
        console.log("An unknown error occurred:", err);
    }
});

const getUserData = async(userId) => {
    console.log("  veri çekme başladi  timout olmadim için ilk ben calistim.");

    try {
        const user = await fetchUser(userId); // Burada 'u' harfini düzelttik
        console.log(`basarili kullanici :${user.name} `);
    }
    catch(err){
        if (err instanceof Error) {
            console.log(`Hata yakalandı: ${err.message}`);
        }
    } finally {
        console.log("İşlem tamamlandı.");
    }
};

getUserData(1);