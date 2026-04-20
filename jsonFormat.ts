interface Project {
    id:string;
    title:string;
    completed: boolean;
    assignees: number;
}
const generateKey = (): string => {
    let result = "";
    const characters = "ABCDEF0123456789";
    for(let i = 0 ; i<16 ; i++){
        result +=characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return result;
};
const apiKey = generateKey();

const getHeader = () : Record <string,string> =>{
    return {
        "X-API-Key" : apiKey,
        "Content-Type": "application/json",
    };
};

const getProjectById = async (id:string): Promise <Project> =>{
    const path = `https://api.boot.dev/v1/courses_rest_api/learn-http/projects/${id}`;
    const response = await fetch (path, {  // fetch oto. sunucudan gelen veriyi bekliyor ve otomatik parseing yapar.
        method:"GET",
        mode:"cors", 
        headers: getHeader(),
    });
    return await response.json() as Project;     //JSON.parse() burda yapılıyor otomatik aslında yani javascript formatinda nesneye dönmüş oluyor.
}

const updateProjectById = async (id:String , projectObj:Project) : Promise<Project> =>{
    const path = `https://api.boot.dev/v1/courses_rest_api/learn-http/projects/${id}`;
    const response = await fetch (path, {
        method:"PUT",
        mode:"cors", 
        headers: getHeader(),
        body: JSON.stringify(projectObj),  //obje kargo için yazıya çevrildi
    });
return await response.json() as Project;}

const startApp = async () => {
    console.log("--- SİSTEM BAŞLATILDI ---");
  const projectID = "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8";

  // 1. Önce sunucudan projeyi çekelim
  const project = await getProjectById(projectID);
  console.log("Proje çekildi:", project.title ,project.completed);

  // 2. Projeyi güncelleyelim (Sadece kendi bilgisayarımızda)
  project.completed = true;

  // 3. Güncel halini sunucuya yükleyelim
  await updateProjectById(projectID, project);
  console.log("Sunucu başariyla güncellendi!" , project.completed);
};

startApp(); 

// Terminalden çalıştırmamız lazım ts dosyası direkt çalışmaz:npx tsc jsonFormat.ts
// Oluşan  dosyayı ekranda görmek için: node jsonFormat.js