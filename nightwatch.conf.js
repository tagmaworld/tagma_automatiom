const seleniumServer = require('selenium-server');
const geckodriver = require('geckodriver');
const chromeDriver = require('chromedriver');

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'step_definitions',
    '--tags' , '@homepage',
    '--format', 'node_modules/cucumber-pretty',
    '--format', 'json:reports/cucumber.json',
    'features']
});

module.exports = {
  output_folder: 'reports',
  custom_assertions_path: '',
  page_objects_path: 'dataGardenerPages',
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
        javascriptEnabled: true,
        elementScrollBehavior: 1
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
