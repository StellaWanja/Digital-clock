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

const setAlarm = () => {
    let alarmClock = document.getElementById("alarm-clock");
    let alarmHour = document.getElementById("alarm-hour");
    let alarmMin = document.getElementById("alarm-min");
    let alarmSec = document.getElementById("alarm-sec");
    let alarmSession = document.getElementById("alarm-session");
    let alarmBtn = document.getElementById("alarm-btn");

    let alarmElement;
    let activeAlarm = false;
    let alarmAudio = new Audio("Journey.mp3");
    alarmAudio.loop = true;

    const alarmMinSec = (id) => {
        let select = id;
        let maxMinSec = 59;

        for (let i=0; i<=maxMinSec; i++){
            select.options[select.options.length] = new Option(i<10 ? "0" + i: i);
        }
    }
    const alarmHr = (id) => {
        let select = id;
        let maxHr = 12;

        for (let i=0; i<=maxHr; i++){
            select.options[select.options.length] = new Option(i<10 ? "0" + i: i);
        }
    }

    alarmBtn.onclick = () => {
        if (activeAlarm === false){
            alarmHour.disabled = true;
            alarmMin.disabled = true;
            alarmSec.disabled = true;
            alarmSession.disabled = true;

            alarmElement = alarmHour.value + ":" + alarmMin.value + ":" + alarmSec.value + "" + alarmSession.value;
            this.textContent = "Clear Alarm";
            activeAlarm = true;
        }
    }

    alarmMinSec(alarmSec);
    alarmMinSec(alarmMin);
    alarmHr(alarmHour);
}

setAlarm();
clockTime();
