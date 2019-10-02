const nPage = require('./initPage.js');
nPage.createPage({'name': 'Malik', 'gpa': 3.2});
test('test info was added to web page', () => {
  const element = document.getElementById('usr');
  expect(element).not.toBeNull();
  expect(element.innerHTML).toEqual("Malik:3.2");
});
