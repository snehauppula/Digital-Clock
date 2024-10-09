const inner=document.getElementById("inner");
function updateclock()
{
    const date=new Date();
    let hour=date.getHours();
    const med=hour>=12?"PM":"AM";
    hour=hour%12 || 12;
    hour=hour.toString().padStart(2,0);
    const minutes=date.getMinutes().toString().padStart(2,0);
    const seconds=date.getSeconds().toString().padStart(2,0);
    inner.textContent=`${hour}:${minutes}:${seconds} ${med}`;

}
setInterval(updateclock,1000);
updateclock();