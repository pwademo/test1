/*  */

const nav=document.querySelector(".navbar");
fetch("/test1/navbar.html")
.then(
    res=>res.text()
)
.then(    
    data=>{        
       // console.log(data);
        nav.innerHTML=data;
    }
);
