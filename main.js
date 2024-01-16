
const message = document.querySelector("#message");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");
const submit = document.querySelector("#submit");
const img = document.querySelector("#img")

const imgg = document.querySelector("#imgg")
function messageee() {
    result.innerHTML = "I will guess what you are typing🤯...";

    if (message.value === "logarytham" ) {
        result.innerHTML = "Something special for you raisa mah love🥺💝";
        setTimeout(() => {
            result.innerText ="Tumake bisanai niya chudeh dibo raisa😩💦"
        }, 3000);
        setTimeout(() => {
            result.innerText ="Btw eita special jinish na abeg a beshe giyecilam r ki ektu btw aholeo chudmuuuu tore bisanai niya dehisss ah uh koira kul paitina puutki mere dibo puraaaaa🙂🔥🔥🔥!!!!"
        }, 9000); 
        setTimeout(() => {
            result.innerText ="Toh jai hokh eij neo 🙂"
        },18000 );
        setTimeout(() => {
    
            img.style.display = "block";
            result.style.display="none"
        }, 20000);
        
    }else if(message.value === "Logarytham"){
        result.innerHTML = "Something special for you raisa mah love🥺💝";
        setTimeout(() => {
            result.innerText ="Tumake bisanai niya chudeh dibo raisa😩💦"
        }, 3000);
        setTimeout(() => {
            result.innerText ="Btw eita special jinish na abeg a beshe giyecilam r ki ektu btw aholeo chudmuuuu tore bisanai niya dehisss ah uh koira kul paitina puutki mere dibo puraaaaa🙂🔥🔥🔥!!!!"
        }, 9000); 
        setTimeout(() => {
            result.innerText ="Toh jai hokh eij neo 🙂"
        },18000 );
        setTimeout(() => {
    
            img.style.display = "block";
            result.style.display="none"
        }, 20000);
    }else if(message.value === "LogaRytham"){
        result.innerHTML = "Something special for you raisa mah love🥺💝";
        setTimeout(() => {
            result.innerText ="Tumake bisanai niya chudeh dibo raisa😩💦"
        }, 3000);
        setTimeout(() => {
            result.innerText ="Btw eita special jinish na abeg a beshe giyecilam r ki ektu btw aholeo chudmuuuu tore bisanai niya dehisss ah uh koira kul paitina puutki mere dibo puraaaaa🙂🔥🔥🔥!!!!"
        }, 9000); 
        setTimeout(() => {
            result.innerText ="Toh jai hokh eij neo 🙂"
        },18000 );
        setTimeout(() => {
    
            img.style.display = "block";
            result.style.display="none"
        }, 20000);
    }else if(message.value === "Loga Rytham"){
        result.innerHTML = "Something special for you raisa mah love🥺💝";
        setTimeout(() => {
            result.innerText ="Tumake bisanai niya chudeh dibo raisa😩💦"
        }, 3000);
        setTimeout(() => {
            result.innerText ="Btw eita special jinish na abeg a beshe giyecilam r ki ektu btw aholeo chudmuuuu tore bisanai niya dehisss ah uh koira kul paitina puutki mere dibo puraaaaa🙂🔥🔥🔥!!!!"
        }, 9000);
        setTimeout(() => {
            result.innerText ="Toh jai hokh eij neo 🙂"
        },18000 );
        setTimeout(() => {
    
            img.style.display = "block";
            result.style.display="none"
        }, 20000);
    }else if(message.value === "loga rytham"){
        result.innerHTML = "Something special for you raisa mah love🥺💝";
        setTimeout(() => {
            result.innerText ="Tumake bisanai niya chudeh dibo raisa😩💦"
        }, 3000);
        setTimeout(() => {
            result.innerText ="Btw eita special jinish na abeg a beshe giyecilam r ki ektu btw aholeo chudmuuuu tore bisanai niya dehisss ah uh koira kul paitina puutki mere dibo puraaaaa🙂🔥🔥🔥!!!!"
        }, 9000);
        setTimeout(() => {
            result.innerText ="Toh jai hokh eij neo 🙂"
        },18000 ); 
        setTimeout(() => {
    
            img.style.display = "block";
            result.style.display="none"
        }, 20000);
    }
    else {
        setTimeout(() => {
            result.innerHTML =
                "You typed: " +
                message.value +
                "!!!" +
                "    You don't have to say it, I know it's lame 🙂...";
            if (message.value === "") {
                result.innerHTML = "You typed: " + "   Nothing" + " 🙂";
            }
        }, 3000);
    }
}


submit.addEventListener("click", (e) => {
    e.preventDefault();
    
    messageee(); // Call the messageee function after the submit button is clicked
});
