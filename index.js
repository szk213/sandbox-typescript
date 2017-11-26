var fs = require('fs'),
path = require('path'),
mkdirp = require('mkdirp');
var log = console.log.bind(console);

// var reportPath = "./report";
var reportPath = "C:\\\\Users\\szk\\github\\szk213\\sandbox-typescript\\report";
try {
    log(reportPath);
    if (fs.existsSync(reportPath)) {
      var isDirectory = fs.statSync(reportPath).isDirectory();
      if (isDirectory) reportPath = path.join(reportPath, new Date().getTime() + ".xml");
      log('a');
    } else {
        log('b');
        log('path:' + reportPath);
    //   mkdirp.sync(path.dirname(reportPath));
    }
    fd = fs.openSync(reportPath, 'w');
  } catch (err) {
    // Not much we can do except logging this
    log(err)
    log('WARNING: Could not open report file ' + reportPath + ', running without report');
  }
