import {expect} from 'chai'; // pass message
import jsdom from 'jsdom'; // test in dom
import fs from 'fs';

// describe pass test
describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

// describe sync index.htm file
describe('index.html', () => {
  it('should h1 say Users', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Users");
      done();
      window.close();
    });
  });
});
