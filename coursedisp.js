
const filterapiSource = "./CourseFeed_Global.json"; // replace with actual remote json source
const label=document.querySelector('label[for="apt"]')
const display =document.querySelector("#display-data");
const qry= localStorage.getItem("qq1")//'advanced machine learning models using ibm spss modeler (v18.2)'//localStorage.getItem('query');//require('qr');
const cIn=document.getElementById('cIn');


// On the second page
const urlParams = new URLSearchParams(window.location.search);
const data = urlParams.get('data');
//console.log(decodeURIComponent(data)); // Outputs: Hello, World!
console.log(localStorage)

//get  coursecode from click event

const getrawData = async () => {
    const res = await fetch(filterapiSource); //works on server but not on local file
    const data = await  res.json();
    return data
}
console.log(qry);
const Jsrc=getrawData();
const tEl=Jsrc;
console.log(tEl)

document.onclick = function(event) {
  var target = event.target || event.srcElement;

  alert ( target.innerHTML ); 
};


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









const tS= async()=>{
   const h=qry; 
  const query = String(h.toLowerCase());//input var
 console.log("Query::",query);
 //filter added between payload and etc because payload holds users list
const payload = await getrawData();
//seperates arrays in json into seperate objects
let nuArr = payload.filter((eventData)=>{
 if (query==="") {return eventData}
 else if (eventData.TITLE.toLowerCase().includes(query.toLowerCase())){return eventData}
})  
return nuArr   
}


const tDisplay =async () => {
  
 //var temp=''; 
const payload = await tS();
 if (payload.BADGE_ID="NONE"){
 temp=payload.map((object) => {

  const {TITLE, OVERVIEW,JOB_ROLE,COURSECODE,SKILLLEVEL,OBJECTIVES,DURATION,DURATION_UNIT} = object;
  
  return `
  <link rel="stylesheet" href="./coursestyles.css">
  <div class="header">
        <img class="sl-030822-49070-19-2" src="sl-030822-49070-19-20.png" />
        <div class="maximo-7-6-security-model">${TITLE}</div>
      </div>
      <div class="body">
        <div class="maximo-administators">Maximo Administators</div>
        <div class="maximo-administators2">Maximo Administators</div>
        <div class="related-learning">Related Learning</div>
        <img class="rectangle-33" src="rectangle-330.png" />
        <div class="rectangle-34"></div>
        <div class="time-choice">
          <div class="rectangle-41"></div>
          <div class="button">
            <div class="button-content">
              <div class="button2">Request Quote</div>
              <div class="icon">
                <img class="add" src="add0.svg" />
              </div>
            </div>
          </div>
          <div class="rectangle-40"></div>
          <div class="rectangle-39"></div>
          <div class="_14-17">14-17</div>
          <div class="select-a-date-to-enroll">Select a date to enroll</div>
        </div>
        <div class="choose-a-session">Choose a session:</div>
        <div class="objectives">Objectives</div>
        <div
          class="simulation-1-security-overview-is-marked-complete-simulation-2-security-group-design-is-marked-complete-simulation-3-creating-security-groups-is-marked-complete-simulation-4-security-group-options-is-marked-complete-simulation-5-conditional-security-is-marked-complete-simulation-6-self-registration-is-marked-complete-simulation-7-global-data-restrictions-is-marked-complete-simulation-8-user-creation-is-marked-complete-simulation-9-creating-users-through-ldap-is-marked-complete-simulation-10-authentication-and-authorization-is-marked-complete"
        >
        ${OBJECTIVES}
        </div>
        <div class="course-details">Course details</div>
        <div class="consultants-system-administrators-support-technical-sales">
          ${JOB_ROLE}
        </div>
        <div class="audience">Audience</div>
        <div class="this-course-discusses-the-various-security-aspects-of-an-asset-management-system-to-include-identifying-the-number-of-security-groups-security-group-creation-integration-with-ldap-repositories-and-using-conditional-expression-the-course-is-delivered-via-interactive-simulations-where-you-have-an-opportunity-to-learn-and-potentially-interact-with-the-system-while-we-lead-you-through-the-functionality-at-the-end-you-can-test-your-knowledge-by-completing-the-short-quizzes-these-simulations-may-aid-you-in-preparing-for-certification-on-the-product" >
          ${OVERVIEW}
        </div>
        <div class="course-overview">Course Overview</div>
        <div class="scroll-wheel">
          <div class="course-details2">Course Details</div>
          <div class="overview">Overview</div>
          <div class="rectangle-32"></div>
          <div class="rectangle-35"></div>
        </div>
        <div class="badge-frame">
          <div class="line-10"></div>
          <div class="rectangle-36"></div>
          <div class="request-quote">Request Quote</div>
          <div class="basic">${SKILLLEVEL}</div>
          <div class="_3-days">${DURATION} ${DURATION_UNIT}</div>
          <img class="price-tag-3-line-1-2" src="price-tag-3-line-1-20.svg" />
          <div class="course-code-w-0107-g">Course Code:${COURSECODE}</div>
          <div class="line-8"></div>
          <img class="time-line-2" src="time-line-20.svg" />
          <img class="numbers-line-2" src="numbers-line-20.svg" />
          <div class="ilo">ILO</div>
          <div class="maximo-7-6-security-model2">
            ${TITLE}
          </div>
          <img class="pages-line-2" src="pages-line-20.svg" />
        </div>
      </div>
  
  `
      
}).join("");


}else{
    console.log(payload)
   temp=payload.map((object) => {

    const {TITLE, OVERVIEW} = object;
    
    return `
    <link rel="stylesheet" href="./badgestyles.css">
    <div class="body">
      <div class="io-t-banner">
        <img class="oip-2" src="oip-20.png" />
        <div class="link-credentials">Credentials</div>
        <div class="div">/</div>
        <div class="io-t-maximo-domains">${TITLE}</div>
        <div class="link-ibm-training">Crs Training</div>
        <div class="div2">/</div>
      </div>
      <div class="badge">
        <div class="view-additional-information">View additional information</div>
        <img class="vector3" src="vector2.svg" />
        <div class="io-t-maximo-domains2">${TITLE}</div>
        <img class="cyber-badges-1" src="cyber-badges-10.png" />
        <div class="badge2">Badge</div>
      </div>
      <div class="scroll-wheel">
        <div class="link-overview">Overview</div>
        <div class="link-skills">Skills</div>
        <div class="link-what-it-takes-to-earn-this-badge">
          What it takes to earn this badge
        </div>
        <div class="rectangle-35"></div>
        <div class="rectangle-32"></div>
      </div>
      <div class="badge-overview">Badge Overview</div>
      <div class="paragraph-overview">
          ${OVERVIEW}
      </div>
      <div class="skills">
        <div class="background">
          <div class="application-development">Application Development</div>
        </div>
        <div class="background2">
          <div class="asset-management">Asset Management</div>
        </div>
        <div class="background3">
          <div class="implementer">Implementer</div>
        </div>
        <div class="background4">
          <div class="internet-of-things">Internet Of Things</div>
        </div>
        <div class="background5">
          <div class="maximo">${TITLE}</div>
        </div>
        <div class="background6">
          <div class="pwid-b-0147000">PWID-B0147000</div>
        </div>
        <div class="skills2">Skills</div>
      </div>
      <div class="sction-2">
        <div class="what-it-takes-to-earn-this-badge">
          What it takes to earn this badge
        </div>
        <div
          class="link-successful-completion-of-the-asset-management-course-maximo-7-6-domains-and-lookups-consisting-of-the-following"
        >
          Successful completion of the asset management course: Maximo 7.6 Domains
          and Lookups, consisting of the following:
        </div>
        <div class="div3">–</div>
        <div
          class="link-completion-of-the-quiz-at-the-end-of-each-simulation-and-receive-a-score-of-100"
        >
          Completion of the quiz at the end of each simulation and receive a score
          of 100%.
        </div>
        <div class="div4">–</div>
        <div
          class="link-completion-of-the-end-of-course-test-and-receive-a-score-of-80-or-higher"
        >
          Completion of the end-of-course test and receive a score of 80% or
          higher.
        </div>
        <div class="div5">–</div>
      </div>
    `
        
  }).join("");
  
 
}




cIn.innerHTML = temp;
}
tDisplay();


localStorage.removeItem('query')





