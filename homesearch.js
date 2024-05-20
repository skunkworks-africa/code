const sc=document.getElementById('searchbox');

hs=()=>{
if (sc.value!=null){
    localStorage.setItem('hq1',sc.value)
};    
open("./searchsk1.html")
}
sc.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        hs();
    }
});
