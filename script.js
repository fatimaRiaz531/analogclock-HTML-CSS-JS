let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

    //  how to calculate our hands

    // 12 hours = 360 degree
    // 1 hour  = 360/12
    // h hours = 30h   + m/2

    // 60 min =30
    // 1 min = 30/60 =1/2
    // m mins =(1/2)m

    // 60min =360deg
    // 1min = 360/60 =6deg
    // m min =6m

    // 60 sec = 360deg
    // 1 sec = 360/60= 6 deg
    // s secs = 6s



    function displayTime() {
        let date = new Date();



    
   // getting hour, mins,sec from date
   let hh = date.getHours();
   let mm = date.getMinutes();
   let ss = date.getSeconds();

   //    get rotate
   let hRotation = 30*hh + mm/2;
   let mRotation =6*mm;
   let sRotation =6 *ss;

   hr.style.transform = `rotate(${hRotation}deg)`;
   min.style.transform = `rotate(${mRotation}deg)`;
   sec.style.transform = `rotate(${sRotation}deg)`;

}
setInterval(displayTime, 1000);




