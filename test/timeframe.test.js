const {timeFrame} = require('../src/timeframe');

test('get date format', () => {
    const date = new timeFrame('2020-05-17T03:24:00');
    date.startingDate('2020-01-10T04:04:05');
    const text = date.moment();
    expect(text).toBe('in 4 months');
});