//Global vars
const jsonSource= "./CourseFeed_Global.json";
const display =document.querySelector("#display-data");
const input=document.querySelector('#input');
const rNum=document.querySelector('#rNum');
const cBx=document.querySelectorAll('input');
const hsrc=localStorage.getItem('hq1');





if(hsrc!=null){input.value=hsrc}



//category vars
    const au = document.getElementById("Automation"), cl = document.getElementById("Cloud")
    const dna = document.getElementById("Data&AI"), fin = document.getElementById("Finance");
    const sec = document.getElementById("Security"),sus = document.getElementById("Sustainability");
    const sys = document.getElementById("Systems");
    const aul = document.getElementById("auL"), cll = document.getElementById("clL");
    const dnal = document.getElementById("dnaL"), finl = document.getElementById("finL");
    const secl = document.getElementById("secL"), susl = document.getElementById("susL");
    const sysl = document.getElementById("sysL");

//skill level variables
    const adv = document.getElementById("Advanced");
    const int = document.getElementById("Intermediate");
    const bas = document.getElementById("Basic");    



//search functions
async function m(hId,Key,jSource) { 
   
    const check = hId.checked;;
    const query=(check===true)?`${Key}`:"";
    const payload = await jSource;
    const filterList = payload.filter((eventData) => {
        if (query === "") { return eventData; }
        else if (eventData.MKTCATEGORY_NAME.toLowerCase().includes(query)) { return eventData}   
    })
    return filterList;

    }


       
async function sD(lId,Key,jSource) { 
         
            let filterlist = await jSource;
            const sList=filterlist.filter((eventData) => {
                (eventData.SKILLLEVEL.toLowerCase().includes(query)) }  )
            const fNum=sList.length
            lId.innerHTML=`${Key} ${fNum}`
            
            }    





//data funct
const getrawData = async () => {
    const res = await fetch(jsonSource); //works on server but not on local file
    const data = await  res.json();
    return data
}

function cbclick(e){
    e = e || event;
    var cb = e.srcElement || e.target;
    if (cb.type !== 'checkbox') {return true;}
    var cbxs = document.getElementById('radiocb').getElementsByTagName('input'), i=cbxs.length;
     while(i--) {
         if (cbxs[i].type && cbxs[i].type == 'checkbox' && cbxs[i].id !== cb.id) {
          cbxs[i].checked = false;
         }
     }
     // if the click should always result in a checked checkbox 
     // unconmment this:
     // cb.checked = true;
 } 






async function filter1(){

var filt1=null;
switch(true){
    case au.checked:
        filt1=m(au,"aut",getrawData())
        console.log("Automation");
        break
    case cl.checked:
        filt1=m(cl,"clo",getrawData());
        console.log("Cloud");
        break
    case dna.checked:
        filt1=m(dna,"data",getrawData());
        console.log("Data and AI");
        break
    case fin.checked:
        filt1=m(fin,"fin",getrawData());
        console.log("Finance");
        break
    case sec.checked:
        filt1=m(sec,"sec",getrawData());
        console.log("Security");
        break
    case sus.checked:
        filt1=m(sus,"sus",getrawData());
        console.log("Sustainability");
        break
    case sys.checked:
        filt1=m(sys,"sys",getrawData());
        console.log("Systems");
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

    const query=(check===true)?`${Key}`:"";
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
        filt2=s(adv,"adv",filter1())
        break
    case int.checked:
        filt2=s(int,"int",filter1())
        break
    case bas.checked:
        filt2=s(bas,"bas",filter1())
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


const sUsers= async()=>{
     let query = input.value;//input var
    console.log("Query::",query);
    //filter added between payload and etc because payload holds users list
  const payload = await filter2();
  //seperates arrays in json into seperate objects
  let nuArr = payload.filter((eventData)=>{
    if (query==="") {return eventData}
    else if (eventData.TITLE.toLowerCase().includes(query.toLowerCase())){return eventData}
  })  
  return nuArr   
}
const sUsers1= async()=>{
    let query = input.value;//input var
   console.log("Query::",query);
   //filter added between payload and etc because payload holds users list
 const payload = await filter2();
 //seperates arrays in json into seperate objects
 let nuArr = payload.filter((eventData)=>{
   if (query==="") {return eventData}
   else if (eventData.COURSECODE.toLowerCase().includes(query.toLowerCase())){return eventData}
 })  
 return nuArr   
}
const sUsers2= async()=>{
    let query = input.value;//input var
   console.log("Query::",query);
   //filter added between payload and etc because payload holds users list
 const payload = await filter2();
 //seperates arrays in json into seperate objects
 let nuArr = payload.filter((eventData)=>{
   if (query==="") {return eventData}
   else if (eventData.KEYWORD.toLowerCase().includes(query.toLowerCase())){return eventData}
 })  
 return nuArr   
}

const tList= async()=>{
    let iList1=await sUsers()
    let iList2=await sUsers1()
    let iList3=await sUsers2()
    let iList=[...iList1,...iList2,...iList3];
    let uniq = i => [...new Set(i)];
    let iL=uniq(iList)
   
    
    return  iL;
}



const displayUsers =async () => {
    let query = input.value;//input var
    console.log("Query::",query);
    //filter added between payload and etc because payload holds users list
  const payload = await tList();
  //seperates arrays in json into seperate objects
  let dataDisplay = payload.map((object) => {

    const {TITLE, SHORT_SUMMARY,SKILLLEVEL,COURSECODE,DURATION_UNIT,DURATION_LENGTH} = object;
    
    return `
    <link rel="stylesheet" href="disp.css">
    <div type="container" class="search-result-blank-1">
    <img class="heart-line-1-23" src="heart-line-1-22.svg" />
    <img class="bookmark-fill-23" src="bookmark-fill-22.svg" />
    <img class="cyber-badges-2" src="cyber-badges-22.png" />
    <img class="arrow-drop-down-line-133" src="arrow-drop-down-line-132.svg"/>
    <div class="course-ibm-safer-payments-hands-on-technical">
      <a href="./coursedisp2.html">Course -${TITLE}</a>
    </div>
    <div class="code-xxxx-this-course-reviews-the-ibm-cloud-account-types-lite-pay-go-subscription-and-enterprise">
      (Code:ITS-${COURSECODE})${SHORT_SUMMARY}.
    </div>
    <div class="sub-info-2">
      <div class="ilo">ILO</div>
      <img class="vector25" src="vector24.svg" />
      <img class="vector26" src="vector25.svg" />
      <img class="vector27" src="vector26.svg" />
      <div class="request-quote">Request Qoute</div>
      <div class="_3-days">${DURATION_LENGTH} ${DURATION_UNIT}</div>
      <div class="basic">${SKILLLEVEL}</div>
      <img class="vector28" src="vector27.svg" />
    </div>
  </div>
</div>
<br>
    `
        
}).join("");

let rLen=payload.length
rNum.innerHTML=`Showing ${rLen} Results`;
display.innerHTML = dataDisplay;
}
displayUsers();

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        displayUsers();
    }
});





const Jsrc=getrawData();
const cIn=document.getElementById("cIn")


/*document.onclick = function(event) {
  var target = event.target || event.srcElement;

 // alert ( target.innerHTML ); 
 const t=target.innerHTML
 return t
};*/
const nuQ=()=>{
    var target= event.target || event.srcElement
    const t =target.innerHTML
    const q=t.replace("Course -",'')
    console.log(t)
    console.log(q)
    localStorage.setItem("qq1",q)
    console.log(localStorage.qq1)
    return JSON.stringify(q)
}
display.addEventListener('click',nuQ);
localStorage.setItem("qq","advanced machine learning models using ibm spss modeler (v18.2)")
const jt=nuQ();
console.log(jt);



let tt=bindEvent();
console.log(JSON.stringify(tt))

const v=bindEvent();//nuQ();
console.log(v);
const qr=JSON.stringify(v)
localStorage.setItem("query",JSON.stringify(v));
localStorage.qry=JSON.stringify(v);
console.log(localStorage)

document.cookie=v
// On the first page
const data = JSON.stringify(v);
const encodedData = encodeURIComponent(data);
//window.location.href = `secondPage.html?data=${encodedData}`;










