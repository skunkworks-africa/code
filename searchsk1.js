//Global vars
const jsonSource= "http://localhost:3000/Coursefeed1";
const display =document.querySelector("#display-data");
//import m,{sFilt as s, jFilt as j} from "./filtermod";


//category vars
    const au = document.getElementById("Automation");
    const cl = document.getElementById("Cloud");
    const dna = document.getElementById("Data&AI");
    const fin = document.getElementById("Finance");
    const sec = document.getElementById("Security");
    const sus = document.getElementById("Sustainability");
    const sys = document.getElementById("Systems");

//skill level variables
    const adv = document.getElementById("Advanced");
    const int = document.getElementById("Intermediate");
    const bas = document.getElementById("Basic");

//search functions
async function m(hId,Key,jSource) { 
    const check = hId.checked;

    let query=(check===true)?`${Key}`:"";
     console.log("Filtquery:",query);
    const payload = await jSource;
    //seperates arrays in json into seperate objects
   //filters will be tweaked to suit ideal parameters
    let filterList = payload.filter((eventData) => {
        if (query === "") { return eventData; }
        else if (eventData.MKTCATEGORY_NAME.toLowerCase().includes(query)) { return eventData}   
    })
    return filterList;
    }





//data funct
const getrawData = async () => {
    const res = await fetch(jsonSource); //works on server but not on local file
    const data = await  res.json();
    return data
}



// the selector will match all input controls of type :checkbox
// and attach a click event handler 

m(au,"Automation",getrawData());
m(cl,"Cloud",getrawData());
m(dna,"Data and AI",getrawData());
m(fin,"Finance",getrawData());
m(sec,"Security",getrawData());
m(sus,"Sustainability",getrawData());
m(sys,"Systems",getrawData());

async function filter1(){

var filt1=null;
switch(true){
    case au.checked:
        filt1=m(au,"Automation",getrawData())
        break
    case cl.checked:
        filt1=m(cl,"Cloud",getrawData())
        break
    case dna.checked:
        filt1=m(dna,"Data and AI",getrawData())
        break
    case fin.checked:
        filt1=m(fin,"Finance",getrawData())
        break
    case sec.checked:
        filt1=m(sus,"Sustainability",getrawData())
        break
    case sus.checked:
        filt1=m(sus,"Sustainability",getrawData())
        break
    case sys.checked:
        filt1=m(sys,"Systems",getrawData())
        break
    default:
        filt1=getrawData()
};
return filt1

}

//eventlisteners
au.addEventListener("change",()=>{
    filter1();
    })

cl.addEventListener("change",()=>{
    filter1();
})
dna.addEventListener("change",()=>{
    filter1();
    })

fin.addEventListener("change",()=>{
    filter1();
})
sec.addEventListener("change",()=>{
    filter1();
    })
sus.addEventListener("change",()=>{
    filter1();
})
sys.addEventListener("change",()=>{
    filter1();
    })





async function s(hId,Key,jSource) { 
    const check = hId.checked;

    let query=(check===true)?`${Key}`:"";
     console.log("Filtquery:",query);
    const payload = await jSource;
    //seperates arrays in json into seperate objects
   //filters will be tweaked to suit ideal parameters
    let filterList = payload.filter((eventData) => {
        if (query === "") { return eventData; }
        else if (eventData.SKILLLEVEL.toLowerCase().includes(query)) { return eventData}   
    })
    return filterList;
    }
s(adv,"Advanced",filter1())
s(int,"Intermediate",filter1())
s(bas,"Basic",filter1())
async function filter2(){

    var filt2=null;
 switch(true){
    case adv.checked:
        filt2=s(adv,"Advanced",filter1())
        break
    case int.checked:
        filt2=s(int,"Intermediate",filter1())
        break
    case bas.checked:
        filt2=s(bas,"Basic",filter1())
        break
    default:
        filt2=filter1()
};   
return filt2
}
adv.addEventListener("change",()=>{
    filter2();
    })
int.addEventListener("change",()=>{
    filter2();
    })
bas.addEventListener("change",()=>{
    filter2();
    })






const displayUsers =async () => {
    let query = input.value;//input var
  console.log("Query::",query);
  //filter added between payload and etc because payload holds users list
const payload = await filter2();
//seperates arrays in json into seperate objects
let dataDisplay = payload.filter((eventData)=>{
  if (query==="") {return eventData}
  else if (eventData.TITLE.toLowerCase().includes(query.toLowerCase())){return eventData}
}).map((object) => {

 const {TITLE, OVERVIEW} = object;

 return `
  <div class="container">
   <p>TITLE:${TITLE}</p>
   <p>OVERVIEW:${OVERVIEW}</p>
   </div>
   <hr>
 `
        
}).join("");

display.innerHTML = dataDisplay;
}
displayUsers();

input.addEventListener("input",()=>{
displayUsers();
})