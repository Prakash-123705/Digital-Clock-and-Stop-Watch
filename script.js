function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2,'0');
    document.getElementById('clock').textContent = `${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();

let timer = null;
let elapsed = 0;
function start() {
    if(!timer){
        timer = setInterval(() => {
            elapsed +=10;
            const ms = String(elapsed %1000).padStart(3,"0");
            const s = String(Math.floor(elapsed/1000)%60).padStart(2,"0");
            const m = String(Math.floor(elapsed/60000)).padStart(2,"0");
            document.getElementById('stopwatch').textContent = `${m}:${s}.${ms}`;
        },10);
    }
}
function stop() {
    clearInterval(timer);
    timer = null;
}
function reset() {
    stop();
    elapsed = 0;
    document.getElementById('stopwatch').textContent = "00:00.000";
}