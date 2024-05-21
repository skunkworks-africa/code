const input=document.querySelector('#searchBox');
const isb=document.querySelector('#ibmSearchBox');




hs=()=>{
    let state=input;
    console.log(state)
if (state!=null){
    localStorage.setItem('hq1',input.value)
};    
window.open("./Searchsk1.html","_self")
}

input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        hs();
    }
});




is=()=>{
    let state=input;
    console.log(state)

    localStorage.setItem('hq1',isb.value)
   
window.open("./Searchsk1.html","_self")
}

isb.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        is();
    }
});
