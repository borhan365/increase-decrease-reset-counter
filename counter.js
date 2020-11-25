
// let's initial value
let count = 0; 

const value = document.getElementById("value");
const Btns = document.querySelectorAll(".btn");

Btns.forEach( function(btn){
    btn.addEventListener('click', function(e){
        
        const styles = e.currentTarget.classList;
        if( styles.contains("btn-danger") ) {
            count--;
        } else if ( styles.contains("btn-primary") ) {
            count++; 
        } else {
            count = 0; 
        }

        // coloring
        if( count < 0 ){
            value.style.color = "red";
            value.style.fontSize = "9rem";
        }
        if( count > 0 ){
            value.style.color = "green";
        }
        if( count == 0 ){
            value.style.color = "black";
        }
        value.textContent = count; 
    });
} );