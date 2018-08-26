const seleniumServer = require('selenium-server');
const geckodriver = require('geckodriver');
const chromeDriver = require('chromedriver');

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'step_definitions',
<<<<<<< HEAD
=======
    //'--tags' ,' @services',
>>>>>>> 86a521674fe9da6407ff29b23f68b19d340c463e
    '--format', 'node_modules/cucumber-pretty',
    '--format', 'json:reports/cucumber.json',
    'features']
});

module.exports = {
  output_folder: 'reports',
  custom_assertions_path: '',
  live_output: false,
  disable_colors: false,
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444
  },
  test_settings: {
    default: {
      launch_url: 'https://datagardener.com/#/pages/homePage',
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      selenium: {
        cli_args: {
          'webdriver.geckodriver.driver': chromeDriver.path
        }
      }
    }
  }
};
