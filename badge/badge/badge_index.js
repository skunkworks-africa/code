const filterapiSource = "http://localhost:3000/Coursefeed1"; // replace with actual remote json source

const ov =document.querySelector("#overview-data");
const sk =document.querySelector("skills-data");
//const query="0A069G";


const getrawData = async () => {
    const res = await fetch(filterapiSource); //works on server but not on local file
    const data = await  res.json();
    return data
}
console.log(getrawData());
let dSrc=getrawData()
//let td=dSrc.COURSECODE
//console.log(td)

async function dOv() { 
   
    let query="0A069G";
     console.log("Filtquery:",query);
    const payload = await getrawData();
    const s2 =payload[2];
    //seperates arrays in json into seperate objects
   //filters will be tweaked to suit ideal parameters
    let ovList = payload.filter((eventData) => {
        (eventData.COURSECODE.toLowerCase().includes(query)) 
             return eventData
    }).map((object) => {

        const {OVERVIEW} = object;

        return `
         <div> <p>TITLE:${OVERVIEW}</p></div>
        
        ` 
       }).join("");
       ;

       ov.innerHTML = ovList;
       
    }
    
dOv();

async function dSk() { 
   
    let query="0A069G";
     console.log("Filtquery:",query);
    const payload = await getrawData();
    //seperates arrays in json into seperate objects
   //filters will be tweaked to suit ideal parameters
    let skList = payload.filter((eventData) => {
        (eventData.COURSECODE.toLowerCase().includes(query)) 
             return eventData
    }).map((object) => {

        const {SKILLS} = object;

        return `
         <div class="container">
          <p>OVERVIEW:${SKILLS}</p>
          </div>
          <hr>
        ` 
       }).join("");
       ;

       sk.innerHTML = skList;
       
    }
    
//dSk();