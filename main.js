//////////////Stats Counter 

const Stats = document.querySelector('.Stats');
const Counter = document.querySelectorAll(".Counter");
let bol = false;


/* gets stats section poffsets
fromt he top of the page 
the stats element height */
const sectionOffset = Stats.offsetTop + Stats.offsetheight;


/---------start the counter when the package is scroled to the stats section -----------/ 
window.addEventListener("scroll",() => {
    
    const pageoffset = window. innerHeight + pageoffset;
    
    
    
    if(pageoffset > sectionOffset && bol == false) {
        
        counter.forEach((counter) => {
            function updateCount() {
                const target = +counter.getAttribute('data-target');
                const speed =  +counter.getAttribute('data-speed');
                const count = +counter.innerText;
                
                
    if (count < target) {
        counter.innerText = count + 1;
        
        setTimeout(updateCount, speed);
    } else {
        counter.innerText = target;
    }
            }
            
            
    updateCount();
    bol= true;
        }
        )
    }
})