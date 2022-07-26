const sections=document.querySelectorAll('.sect');
 const navLi=document.querySelectorAll('.nav-link');
 const SidenavLi=document.querySelectorAll('.side-nav-link'); 

 window.addEventListener('scroll',()=>{
     let current="";
     sections.forEach( section=>{
         const sectionTop=section.offsetTop;
         const sectionHight=section.clientHeight;

         if(window.pageYOffset>=(sectionTop-sectionHight/2-30))
         {
             current=section.getAttribute('id');
         }
     })
    navLi.forEach(a =>{
        a.classList.remove('activelink');
        if(a.classList.contains(current))
        {
            a.classList.add('activelink');
        }
    })
    SidenavLi.forEach(a =>{
        a.classList.remove('activelink');
        if(a.classList.contains(current))
        {
            a.classList.add('activelink');
        }
    })
 })