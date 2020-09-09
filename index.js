const clockTime = () => {
    let date = new Date();
    //day
    let daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = date.getDay();
    let today = daysArray[day];
    let todate = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();

    //time
    let hour = date.getHours();
    let minute =date.getMinutes();
    let second = date.getSeconds();
    let session = "AM";

    if (hour === 0){
        hour = 12;
    }
    if (hour > 12){
        hour = hour -12;
        session = "PM";
    }
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    document.getElementById("date").innerHTML = `${today} ${todate}`;
    document.getElementById("time").innerHTML = `${hour} : ${minute} : ${second}  ${session}`;

    //setTimeOut - Executes a function, after waiting a specified number of milliseconds.
    //setInterval - Same as setTimeout(), but repeats the execution of the function continuously.
    setTimeout(clockTime, 1000);
}

clockTime();