const theAPI = require('./api-me'); 

document.body.innerHTML = 
        '<header>' +
	'<h1 id="loc"></h1>' +
        '</header>';


describe('testing api', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
 
  it('calls our API and returns data to me', () => {
    //fake/expected fetch response
    fetch.mockResponseOnce(JSON.stringify({"name": "Philadelphia","temp" : 78.4 }))
 
    //assert on the response
    //will not be included in the output if passed!
    theAPI.getWeather('city1').then(res => {
      theAPI.displayData(res);      
      expect(res.name).toEqual('Philadelphia');
      expect(res.temp).toEqual(78.4);
      expect(document.getElementById('loc').innerHTML).toEqual("Philadelphia : 78.4");
    })
 
    //assert on the times called and arguments given to fetch
    //Test suites results
    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toEqual('http://localhost:8000/data.json')
  })
})
