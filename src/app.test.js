const { dayOfTheWeek } = require("./app");

test('get day returns day', () => {

    const day = dayOfTheWeek(new Date('08/10/2020'));
    console.log(day);
    expect(day).toBe('Monday');
})