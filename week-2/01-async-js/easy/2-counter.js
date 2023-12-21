let cnt=1;
function timer(duration){
     setTimeout(()=>{
        console.log("counter: ",cnt);
        cnt++;
        if(cnt<=duration)timer(duration);
     },1000)
}
let duration=5;
timer(duration);