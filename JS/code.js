$(()=>
{
    let endDate=new Date().getTime() + 1000500000;
    let x=setInterval(()=>
    {
        let now=new Date().getTime();
        let timeRemaining=endDate-now;
        let daysRemaining=Math.floor(timeRemaining/(1000*60*60*24));
        let hoursRemaining=Math.floor(timeRemaining%(1000*60*60*24)/(1000*60*60));
        let minutesRemaining=Math.floor(timeRemaining%(1000*60*60)/(1000*60));
        let secondsRemaining=Math.floor(timeRemaining%(1000*60)/(1000));
        $("#days").html(daysRemaining);
        $("#hours").html(hoursRemaining);
        $("#minutes").html(minutesRemaining);
        $("#seconds").html(secondsRemaining);
        if(timeRemaining<0)
        {
            clearInterval(x);
            $("#days").html("0");
            $("#hours").html("0");
            $("#minutes").html("0");
            $("#seconds").html("0");
        }
    },1000)
});