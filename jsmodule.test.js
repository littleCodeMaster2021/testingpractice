const wdata = require('./jsmodule');
  
test('test fetched location is philadelphia', () => {
  return wdata.getWeather().then(response => JSON.parse(response)).then(data => {
    expect(data.name).toBe('Philadelphia');
  });
});


test('test fetched temperature is correct (291.78)', () => {
  return wdata.getWeather().then(response => JSON.parse(response)).then(data => {
    expect(data.main.temp).toBeCloseTo(291.78, 0);
  });
});
