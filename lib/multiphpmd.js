var spawn = require('child_process').spawn,
  rules,
  oldData = '',
  checks = 0,
  checked = 0,
  failed = false,
  checkFile = function (file) {
    var phpmd, summary = '';

    file = file.trim();

    if (file.length < 5 || file.substr(-4) != '.php') {
      return;
    }

    checks += 1;

    phpmd = spawn('phpmd', [file, 'text', rules]);
    phpmd.stdout.on('data', function (data) {
      summary += data;
    });
    phpmd.on('exit', function (code) {
      checked += 1;

      if (code) {
        failed = true;
        process.stdout.write('\nPHPMD result for ' + file + ':\n' + summary + '\n');
      }

      if (checked >= checks && failed) {
        setTimeout(function () {
          process.exit(1);
        }, 10);
      }
    });
  };

module.exports.exec = function (argv, stdin) {
  rules = argv[2] ? argv[2] : 'codesize,unusedcode,naming,design';
  stdin.setEncoding('utf8');
  stdin.on('data', function (data) {
    var splitted;

    data = oldData + data;
    splitted = data.split('\n');
    oldData = splitted.pop();

    splitted.forEach(checkFile);
  });
  stdin.resume();
};
