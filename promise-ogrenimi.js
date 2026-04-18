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
fetchUser(1)
.then((user)=>{
  console.log("kullaniciyi buldum:" , user.name);
  return fetchKonum(user.name);
})
.then ((konum) => {
  console.log("2.adim: Konum geldi= " , konum);
  return fetchInfo(konum);
})
.then((info) =>{
  console.log("3.adm: sunucu bilgisi" , info);
})

.catch ((hata) => {
  console.log ("hata olustu = " , hata);
});
 //test1