const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
const js = require('./custom.js')
jest
    .dontMock('fs');

test('showDiv makes element visible', () => {
    
    document.documentElement.innerHTML = html.toString();

    var x = js('myDiv');

    expect(x.style.display).toMatch("block");

  });