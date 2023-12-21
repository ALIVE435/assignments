let fun=(duration)=>{
    let cnt=1;
    let counter=setInterval(function(){
        if(cnt<=duration){
            console.log(`counter :${cnt}`);
            cnt++;
        }
        else clearInterval(counter);
    },1000);
}
fun(6);
console.log("hi");
