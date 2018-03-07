var phantomjs = require('phantomjs-prebuilt');
module.exports = {
  beforeEach : function(browser, done) {
    phantomjs.run('--webdriver=4445').then(p => this.process = p);
    setTimeout(() => {
      console.log('phantom is starting...');
      done();
    }, 4000);
  },

  afterEach : function() {
    if(this.process){
      this.process.kill();
    };
  },

  'Demo test Bing' : function (browser) {
    browser
      .url('http://www.bing.com')
      .waitForElementVisible('body', 1000)
      .setValue('#sb_form_q', 'nightwatch')
      .click('#sb_form_go')
      .pause(1000)
      .assert.containsText('#b_content #b_results', 'NightxWatch')
      .end();
  }
};