setInterval(() => {
    const date = new Date();
    var hour_time = date.getHours();
    var mins_time = date.getMinutes();
    var sec_time = date.getSeconds();

    var hour_rotation = 30 * hour_time + mins_time / 2;
    var min_rotation = 6 * mins_time;
    var sec_rotation = 6 * sec_time;

    hour.style.transform = `rotate(${hour_rotation}deg)`
    minute.style.transform = `rotate(${min_rotation}deg)`
    second.style.transform = `rotate(${sec_rotation}deg)`
}, 1000);