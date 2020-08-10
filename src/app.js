const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const dayOfTheWeek = (date = new Date()) => {
    return days[date.getDay()];
}

try {
    document.getElementById("day").innerText = dayOfTheWeek();
} catch (error) {

}

exports.dayOfTheWeek = dayOfTheWeek;