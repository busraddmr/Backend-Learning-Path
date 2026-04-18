
const fetchUser= (id) => {
  return new Promise((resolve, reject)=> {
    setTimeout(() =>{
      if(id ===1){
      resolve({id:1, name: "Büşra D."});
      }
      else{
        reject("kullanici bulunamadi")
      }
    } , 2000);
  });
};

const fetchKonum = (userName) =>{
  return new Promise ((resolve) => {
    setTimeout(()=> {
      resolve(`${userName} şu an İstanbulda`);
    }, 1000);
  });
};

const fetchInfo = (loc) =>{
  return new Promise ((resolve) =>{
    setTimeout(() =>{
      resolve("Tr-East-1");
    } ,1001);
});
} 

const anaSurec = async () => {
  try{
    console.log("Süreç Başladi... ");
    const user = await fetchUser(1);
    console.log("1.adim tamam" , user.name);

    const konum = await fetchKonum(user.name);
    console.log("2.adim tamam" , konum);

    const sunucu = await fetchInfo(konum);
    console.log("3. adim tamam:", sunucu);
  }
  catch(error){
    console.log("Hata" , error);
  }

}; 
//test2
anaSurec();