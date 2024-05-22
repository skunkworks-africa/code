
const Coursefeed = "http://localhost:3000/Coursefeed1"; // replace with actual remote json source
const display =document.querySelector("#display-data");
const input = document.querySelector('#input'); //input data


const getData = async () => {
    const res = await fetch(Coursefeed); //works on server but not on local file
    const data = await  res.json();
    return data
}

const verseoune =getData();
console.log(verseoune);
const displayUsers =async () => {
          let query = "Adv"//input.value;//input var
        console.log("Query::",query);


        //filter added between payload and etc because payload holds users list
    const payload = await getData();
    //seperates arrays in json into seperate objects
    let dataDisplay = payload.filter((eventData)=>{
        if (query==="") {return eventData}
        else if (eventData.SKILLLEVEL.toLowerCase().includes(query.toLowerCase())){return eventData}
    }).map((object) => {
  
       const {TITLE, OVERVIEW,SKILLLEVEL,DURATION,BADGE_CODE} = object;

       return `
       <div class="search-result-blank-2">
       <img class="heart-line-1-22" src="heart-line-1-21.svg" />
       <img class="bookmark-fill-22" src="bookmark-fill-21.svg" />
       <img class="cyber-badges-2" src="cyber-badges-21.png" />
       <img
         class="arrow-drop-down-line-132"
         src="arrow-drop-down-line-131.svg"
       />
       <div
         class="code-xxxx-this-course-reviews-the-ibm-cloud-account-types-lite-pay-go-subscription-and-enterprise"
       >
         (Code:${BADGE_CODE})${OVERVIEW}
       </div>
       <div class="course-${TITLE}">
         Course -IBM Safer Payments Hands On Technical
       </div>
       <div class="sub-info-2">
         <div class="ilo">ILO</div>
         <img class="vector21" src="vector20.svg" />
         <img class="vector22" src="vector21.svg" />
         <img class="vector23" src="vector22.svg" />
         <div  type="button"  class="request-quote">Request Quote</div>
         <div class="_3-days">${DURATION}</div>
         <div class="basic">${SKILLLEVEL}</div>
         <img class="vector24" src="vector23.svg" />
       </div>
     </div>
       `
              
    }).join("");

    display.innerHTML = dataDisplay;
}
displayUsers();

input.addEventListener("input",()=>{
displayUsers();
})