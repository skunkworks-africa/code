//Global vars
const jsonSource= "http://localhost:3000/Coursefeed1";
const display =document.querySelector("#display-data");
const input=document.querySelector('#input');
const rNum=document.querySelector('#rNum');
const cBx=document.querySelectorAll('input');



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




/*m(au,"Automation",getrawData());
m(cl,"Cloud",getrawData());
m(dna,"Data and AI",getrawData());
m(fin,"Finance",getrawData());
m(sec,"Security",getrawData());
m(sus,"Sustainability",getrawData());
m(sys,"Systems",getrawData());*/

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

//input.addEventListener("input",()=>{
//displayUsers();
//})
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        displayUsers();
    }
});
/*au.addEventListener("click",displayUsers);
//cl.addEventListener("click",displayUsers);
//dna.addEventListener("click",displayUsers);
//fin.addEventListener("click",displayUsers);
//sec.addEventListener("click",displayUsers);
//sus.addEventListener("click",displayUsers);
//sys.addEventListener("click",displayUsers);

//adv.addEventListener("click",displayUsers);
//int.addEventListener("click",displayUsers);
//bas.addEventListener("click",displayUsers);*/

cBx.forEach(el => el.addEventListener('click', displayUsers))




/*const fD=async ()=>{

    async function mD(Key) { 
         
        let filterlist = await sUsers();
        const sList=filterlist.filter((eventData) => {
          eventData.MKTCATEGORY_NAME.toLowerCase(Key).includes(query)})
        return sList;
    }    


   
    sList=mD("Automation");
    sList=mD("Cloud");
    sList=mD("Data and AI");
    sList=mD("Finance");
    sList=mD("Security");
    sList=mD("Sustainability");
    sList= mD("Systems");

    const fNum1=sList.length(), fNum2=sList.length(), fNum3=sList.length(), fNum4=sList.length()
    const fNum5=sList.length(), fNum6=sList.length(), fNum7=sList.length()

    aul.innerHTML=`${Key}_${fNum1}`, cll.innerHTML=`${Key}_${fNum2}`,dnal.innerHTML=`${Key}_${fNum3}`
    finl.innerHTML=`${Key}_${fNum4}`, secl.innerHTML=`${Key}_${fNum5}`,   susl.innerHTML=`${Key}_${fNum6}`
    sysl.innerHTML=`${Key}_${fNum7}`
   
   
    async function sD(Key) { 
         
        let filterlist = await sUsers();
        const sList=filterlist.filter((eventData) => {
          eventData.SKILLLEVEL.toLowerCase(Key).includes(query)})
        return sList;
    }    



    const fNum8=sList.length()
    lId.innerHTML=`${Key}_${fNum8}`
    const fNum9=sList.length()
    lId.innerHTML=`${Key}_${fNum9}`



}
fD();
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        fD();
    }
});*/


















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
    const q=t.replace("Course-",'')
    console.log(t)
    console.log(q)

    return q
}
display.addEventListener('click',nuQ);
localStorage.setItem(nuQ())


var bindEvent = function(elem ,evt,cb) {
  //see if the addEventListener function exists on the element
  if ( elem.addEventListener ) {
      elem.addEventListener(evt,cb,false);
  //if addEventListener is not present, see if this is an IE browser
  } else if ( elem.attachEvent ) {
      //prefix the event type with "on"
      elem.attachEvent('on' + evt, function(){
          /* use call to simulate addEventListener
           * This will make sure the callback gets the element for "this"
           * and will ensure the function's first argument is the event object
           */
           cb.call(event.srcElement,event);
      });
  }
}

bindEvent(document,'click', function(event) {
  var target = event.target || event.srcElement;
  console.log(target)
});
const v=nuQ();
const qr=JSON.stringify(v)
localStorage.setItem("query",qr);
console.log(localStorage)
export const w=v;











