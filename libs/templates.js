angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app.html',
    "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <a href=\"#!/\" class=\"navbar-brand\">Simulador Criptográfico</a>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "        <li ng-class=\"{active: $root.isActive('/ecc')}\">\n" +
    "          <a href=\"#!/ecc\">Claves ECC/ECDSA</a>\n" +
    "        </li>\n" +
    "\n" +
    "        <li class=\"dropdown\">\n" +
    "          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\">\n" +
    "            Bitcoin <span class=\"caret\"></span>\n" +
    "          </a>\n" +
    "          <ul class=\"dropdown-menu\">\n" +
    "            <li ng-class=\"{active: $root.isActive('/hd-wallet')}\">\n" +
    "              <a href=\"#!/hd-wallet\">Monedero HD</a>\n" +
    "            </li>\n" +
    "            <li ng-class=\"{active: $root.isActive('/bitcoin-block')}\">\n" +
    "              <a href=\"#!/bitcoin-block\">Bitcoin Block Parser</a>\n" +
    "            </li>\n" +
    "            <li ng-class=\"{active: $root.isActive('/schnorr')}\">\n" +
    "              <a href=\"#!/schnorr\">Firmas Schnorr</a>\n" +
    "            </li>\n" +
    "            <li ng-class=\"{active: $root.isActive('/mu-sig')}\">\n" +
    "              <a href=\"#!/mu-sig\">MuSig: Agregación de claves para Firmas Schnorr</a>\n" +
    "            </li>\n" +
    "            <li ng-class=\"{active: $root.isActive('/transaction-creator')}\">\n" +
    "              <a href=\"#!/transaction-creator\">Creador de Transacciones</a>\n" +
    "            </li>\n" +
    "            <li ng-class=\"{active: $root.isActive('/wallet-import')}\">\n" +
    "              <a href=\"#!/wallet-import\">Importador de Monederos</a>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "        </li>\n" +
    "        <li class=\"dropdown\">\n" +
    "          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\">\n" +
    "            LND <span class=\"caret\"></span>\n" +
    "          </a>\n" +
    "          <ul class=\"dropdown-menu\">\n" +
    "            <li ng-class=\"{active: $root.isActive('/aezeed')}\">\n" +
    "              <a href=\"#!/aezeed\">aezeed Cipher Seed Scheme</a>\n" +
    "            </li>\n" +
    "            <li ng-class=\"{active: $root.isActive('/macaroon')}\">\n" +
    "              <a href=\"#!/macaroon\">Macaroons</a>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "        </li>\n" +
    "        <li class=\"dropdown\">\n" +
    "          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\">\n" +
    "            Otros <span class=\"caret\"></span>\n" +
    "          </a>\n" +
    "          <ul class=\"dropdown-menu\">\n" +
    "            <li ng-class=\"{active: $root.isActive('/shamir-secret-sharing')}\">\n" +
    "              <a href=\"#!/shamir-secret-sharing\">Shamir's Secret Sharing Scheme</a>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div ng-class=\"$root.$route.current.containerClass\" ng-view>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('index.html',
    "<html>\n" +
    "<head>\n" +
    "  <meta charset=\"UTF-8\">\n" +
    "  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "\n" +
    "  <link rel=\"icon\" href=\"favicon.ico\">\n" +
    "\n" +
    "  <!-- fonts -->\n" +
    "  <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Raleway:300,400,700\">\n" +
    "  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\" integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\" crossorigin=\"anonymous\">\n" +
    "\n" +
    "  <!-- bootstrap and theme -->\n" +
    "  <link rel=\"stylesheet\" href=\"libs/css/bootstrap.min.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"libs/css/bootstrap-theme.min.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"libs/css/bootstrap-horizon.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"libs/css/ladda-themeless.min.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"libs/css/ie10-viewport-bug-workaround.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"app.css\">\n" +
    "\n" +
    "  <!-- Latest jQuery, Angular and Bootstrap -->\n" +
    "  <script src=\"libs/js/jquery.min.js\"></script>\n" +
    "  <script src=\"libs/js/angular.min.js\"></script>\n" +
    "  <script src=\"libs/js/angular-route.js\"></script>\n" +
    "\n" +
    "  <!-- other libraries -->\n" +
    "  <script src=\"libs/js/bootstrap.min.js\"></script>\n" +
    "  <script src=\"libs/js/spin.min.js\"></script>\n" +
    "  <script src=\"libs/js/ladda.min.js\"></script>\n" +
    "  <script src=\"libs/js/ie10-viewport-bug-workaround.js\"></script>\n" +
    "  <script src=\"libs/js/ie10-viewport-bug-workaround.js\"></script>\n" +
    "  <script src=\"libs/js/sha256.js\"></script>\n" +
    "\n" +
    "  <!-- Moment.js -->\n" +
    "  <script src=\"libs/js/moment.min.js\"></script>\n" +
    "\n" +
    "  <!-- lodash.js -->\n" +
    "  <script src=\"libs/js/lodash.js\"></script>\n" +
    "\n" +
    "  <!-- bitcoinjs-lib -->\n" +
    "  <script src=\"libs/js/bitcoin.js\"></script>\n" +
    "\n" +
    "  <!-- qrcode -->\n" +
    "  <script src=\"libs/js/qrcode.min.js\"></script>\n" +
    "\n" +
    "  <!-- d3 -->\n" +
    "  <script src=\"libs/js/d3.v3.min.js\"></script>\n" +
    "\n" +
    "  <!-- App -->\n" +
    "  <script src=\"bitcoin-networks.js\"></script>\n" +
    "  <script src=\"app.js\"></script>\n" +
    "\n" +
    "  <!-- HTML templates -->\n" +
    "  <script>\n" +
    "    // don't load HTML templates from pre-compiled file in development mode\n" +
    "    if (location.hostname !== \"localhost\" && location.hostname !== \"127.0.0.1\") {\n" +
    "      document.write('<scr' + 'ipt src=\"libs/templates.js\"></sc' + 'ript>');\n" +
    "    }\n" +
    "  </script>\n" +
    "\n" +
    "  <!-- Pages -->\n" +
    "  <script src=\"pages/intro/intro.js\"></script>\n" +
    "  <script src=\"pages/ecc/ecc.js\"></script>\n" +
    "  <script src=\"pages/hd-wallet/hd-wallet.js\"></script>\n" +
    "  <script src=\"pages/bitcoin-block/bitcoin-block.js\"></script>\n" +
    "  <script src=\"pages/shamir-secret-sharing/shamir-secret-sharing.js\"></script>\n" +
    "  <script src=\"pages/mu-sig/mu-sig.js\"></script>\n" +
    "  <script src=\"pages/schnorr/schnorr.js\"></script>\n" +
    "  <script src=\"pages/transaction-creator/transaction-creator.js\"></script>\n" +
    "  <script src=\"pages/aezeed/aezeed.js\"></script>\n" +
    "  <script src=\"pages/macaroon/macaroon.js\"></script>\n" +
    "  <script src=\"pages/wallet-import/wallet-import.js\"></script>\n" +
    "\n" +
    "  <title>Simulador Criptográfico</title>\n" +
    "</head>\n" +
    "<body>\n" +
    "<app></app>\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('node_modules/browserify/example/multiple_bundles/static/beep.html',
    "<script src=\"common.js\"></script>\n" +
    "<script src=\"beep.js\"></script>\n"
  );


  $templateCache.put('node_modules/browserify/example/multiple_bundles/static/boop.html',
    "<script src=\"common.js\"></script>\n" +
    "<script src=\"boop.js\"></script>\n"
  );


  $templateCache.put('node_modules/browserify/example/source_maps/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <meta charset=utf-8 />\n" +
    "  <title></title>\n" +
    "  <script type=\"text/javascript\" src=\"./js/build/bundle.js\"></script>\n" +
    "</head>\n" +
    "<body>\n" +
    "  <p>Open your dev tools ;)</p>  \n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('node_modules/console-browserify/test/static/index.html',
    "<!doctype html>\n" +
    "<html>\n" +
    "<head>\n" +
    "    <meta http-equiv=\"x-ua-compatible\" content=\"IE=8\" >\n" +
    "    <title>TAPE Example</title>\n" +
    "    <script src=\"/testem.js\"></script>\n" +
    "    <script src=\"test-adapter.js\"></script>\n" +
    "    <script src=\"bundle.js\"></script>\n" +
    "</head>\n" +
    "<body>\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('node_modules/crypto-browserify/example/index.html',
    "<!doctype html>\n" +
    "<html>\n" +
    "<script src=bundle.js></script>\n" +
    "<body>\n" +
    "  <pre>\n" +
    "  require('crypto').createHash('sha1').update('abc').digest('hex') == '<span id=ans></span>'\n" +
    "  </pre>\n" +
    "</body>\n" +
    "<script>\n" +
    "  document.getElementById('ans').innerHTML = require('crypto').createHash('sha1').update('abc').digest('hex')\n" +
    "</script>\n" +
    "</html>\n"
  );


  $templateCache.put('node_modules/grunt-angular-templates/test/expected/usemin.html',
    "<!DOCTYPE html>\n" +
    "    <head>\n" +
    "        <link rel=\"stylesheet\" href=\"styles/main.css\">\n" +
    "        <script src=\"scripts/vendor/modernizr.min.js\"></script>\n" +
    "    </head>\n" +
    "    <body>\n" +
    "\n" +
    "    <script src=\"usemin/foo.js\"></script>\n" +
    "\n" +
    "    <script src=\"usemin/bar.js\"></script>\n" +
    "\n" +
    "    <script src=\"usemin/all.js\"></script>\n" +
    "\n" +
    "    <script src=\"duplicate/usemin/all.js\"></script>\n" +
    "\n" +
    "    <link rel=\"stylesheet\" href=\"usemin/bar.css\">\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('node_modules/grunt-angular-templates/test/expected/useminUgly.html',
    "<!DOCTYPE html>\n" +
    "    <head>\n" +
    "        <link rel=\"stylesheet\" href=\"styles/main.css\">\n" +
    "        <script src=\"scripts/vendor/modernizr.min.js\"></script>\n" +
    "    </head>\n" +
    "    <body>\n" +
    "\n" +
    "    <script src=\"useminUgly/foo.js\"></script>\n" +
    "\n" +
    "    <script src=\"useminUgly/bar.js\"></script>\n" +
    "\n" +
    "    <script src=\"useminUgly/all.js\"></script>\n" +
    "\n" +
    "    <script src=\"duplicate/useminUgly/all.js\"></script>\n" +
    "\n" +
    "    <link rel=\"stylesheet\" href=\"useminUgly/bar.css\">\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('node_modules/grunt-angular-templates/test/fixtures/empty.html',
    ""
  );


  $templateCache.put('node_modules/grunt-angular-templates/test/fixtures/html5.html',
    "<div>\n" +
    "    <span>\n" +
    "        Self-closing, sucka!\n" +
    "        <br>\n" +
    "        <img src='path/to/img'> Howdy\n" +
    "</div>\n" +
    "\n" +
    "<hr>\n" +
    "\n" +
    "<table>\n" +
    "    <tr>\n" +
    "        <td>\n" +
    "            Howdy\n"
  );


  $templateCache.put('node_modules/grunt-angular-templates/test/fixtures/linebreak.html',
    "<textarea placeholder=\"This is a carriage return.\r" +
    "\n" +
    "Also also a newline.\"></textarea>"
  );


  $templateCache.put('node_modules/grunt-angular-templates/test/fixtures/one.html',
    "<h1>One</h1>\n" +
    "\n" +
    "<p class=\"\">I am one.</p>\n" +
    "\n" +
    "<script type=\"text/javascript\">\n" +
    "  // Test\n" +
    "  /* comments */\n" +
    "  var foo = 'bar';\n" +
    "</script>\n"
  );


  $templateCache.put('node_modules/grunt-angular-templates/test/fixtures/regexp.html',
    "<h1>Regexp</h1>\n" +
    "\n" +
    "<script type=\"text/javascript\">\n" +
    "  var reg = new RegExp(/^(((\\+[1-9][0-9])|(00[1-9][0-9]))[0-9]{7,11})|((((01|02|03|04|05|07|08)[0-9])|(06[1-9]))[0-9]{7})$/)\n" +
    "  var reg2 = new RegExp(/^\\+-\\\\--\\|)$/)\n" +
    "</script>\n"
  );


  $templateCache.put('node_modules/grunt-angular-templates/test/fixtures/three/three_two.html',
    "<h2>Three Two</h2>\n" +
    "\n" +
    "<!-- Comment for three two -->\n" +
    "\n" +
    "<textarea readonly=\"readonly\">We are three two.</textarea>\n"
  );


  $templateCache.put('node_modules/grunt-angular-templates/test/fixtures/three/three.html',
    "<h2>Three</h2>\n" +
    "\n" +
    "<!-- Comment for three -->\n" +
    "\n" +
    "<textarea readonly=\"readonly\">We are three.</textarea>\n"
  );


  $templateCache.put('node_modules/grunt-angular-templates/test/fixtures/two/two.html',
    "<h2>Two</h2>\n" +
    "\n" +
    "<!-- Comment for two -->\n" +
    "\n" +
    "<textarea readonly=\"readonly\">We are two.</textarea>\n"
  );


  $templateCache.put('node_modules/grunt-angular-templates/test/fixtures/undefined.html',
    "<h1>Undefined</h1>\n" +
    "\n" +
    "<p class=\"\">I am undefined.</p>\n" +
    "\n" +
    "<script type=\"text/javascript\">\n" +
    "  // Test\n" +
    "  /* comments */\n" +
    "  var foo = 'bar';\n" +
    "</script>\n"
  );


  $templateCache.put('node_modules/grunt-angular-templates/test/fixtures/unmerged/level2/empty.html',
    ""
  );


  $templateCache.put('node_modules/grunt-angular-templates/test/fixtures/unmerged/level2/html5.html',
    "<div>\n" +
    "    <span>\n" +
    "        Self-closing, sucka!\n" +
    "        <br>\n" +
    "        <img src='path/to/img'> Howdy\n" +
    "</div>\n" +
    "\n" +
    "<hr>\n" +
    "\n" +
    "<table>\n" +
    "    <tr>\n" +
    "        <td>\n" +
    "            Howdy\n"
  );


  $templateCache.put('node_modules/grunt-angular-templates/test/fixtures/unmerged/level2/level3/one.html',
    "<h1>One</h1>\n" +
    "\n" +
    "<p class=\"\">I am one.</p>\n" +
    "\n" +
    "<script type=\"text/javascript\">\n" +
    "  // Test\n" +
    "  /* comments */\n" +
    "  var foo = 'bar';\n" +
    "</script>\n"
  );


  $templateCache.put('node_modules/grunt-angular-templates/test/fixtures/unmerged/undefined.html',
    "<h1>Undefined</h1>\n" +
    "\n" +
    "<p class=\"\">I am undefined.</p>\n" +
    "\n" +
    "<script type=\"text/javascript\">\n" +
    "  // Test\n" +
    "  /* comments */\n" +
    "  var foo = 'bar';\n" +
    "</script>\n"
  );


  $templateCache.put('node_modules/grunt-angular-templates/test/fixtures/unmerged/usemin.html',
    "<!DOCTYPE html>\n" +
    "    <head>\n" +
    "        <link rel=\"stylesheet\" href=\"styles/main.css\">\n" +
    "        <script src=\"scripts/vendor/modernizr.min.js\"></script>\n" +
    "    </head>\n" +
    "    <body>\n" +
    "\n" +
    "    <!-- build:js usemin/foo.js -->\n" +
    "    <script src=\"usemin/foo.js\"></script>\n" +
    "    <!-- endbuild -->\n" +
    "\n" +
    "    <!-- build:js usemin/bar.js -->\n" +
    "    <script src=\"usemin/bar.js\"></script>\n" +
    "    <!-- endbuild -->\n" +
    "\n" +
    "    <!-- build:js usemin/all.js -->\n" +
    "    <script src=\"usemin/foo.js\"></script>\n" +
    "    <script src=\"usemin/bar.js\"></script>\n" +
    "    <!-- endbuild -->\n" +
    "\n" +
    "    <!-- build:js duplicate/usemin/all.js -->\n" +
    "    <script src=\"usemin/foo.js\"></script>\n" +
    "    <script src=\"usemin/bar.js\"></script>\n" +
    "    <!-- endbuild -->\n" +
    "\n" +
    "    <!-- build:css usemin/bar.css -->\n" +
    "    <script src=\"usemin/bar.css\"></script>\n" +
    "    <!-- endbuild -->\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('node_modules/grunt-angular-templates/test/fixtures/usemin.html',
    "<!DOCTYPE html>\n" +
    "    <head>\n" +
    "        <link rel=\"stylesheet\" href=\"styles/main.css\">\n" +
    "        <script src=\"scripts/vendor/modernizr.min.js\"></script>\n" +
    "    </head>\n" +
    "    <body>\n" +
    "\n" +
    "    <!-- build:js usemin/foo.js -->\n" +
    "    <script src=\"usemin/foo.js\"></script>\n" +
    "    <!-- endbuild -->\n" +
    "\n" +
    "    <!-- build:js usemin/bar.js -->\n" +
    "    <script src=\"usemin/bar.js\"></script>\n" +
    "    <!-- endbuild -->\n" +
    "\n" +
    "    <!-- build:js usemin/all.js -->\n" +
    "    <script src=\"usemin/foo.js\"></script>\n" +
    "    <script src=\"usemin/bar.js\"></script>\n" +
    "    <!-- endbuild -->\n" +
    "\n" +
    "    <!-- build:js duplicate/usemin/all.js -->\n" +
    "    <script src=\"usemin/foo.js\"></script>\n" +
    "    <script src=\"usemin/bar.js\"></script>\n" +
    "    <!-- endbuild -->\n" +
    "\n" +
    "    <!-- build:css usemin/bar.css -->\n" +
    "    <script src=\"usemin/bar.css\"></script>\n" +
    "    <!-- endbuild -->\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('node_modules/grunt-angular-templates/test/fixtures/useminUgly.html',
    "<!DOCTYPE html>\n" +
    "    <head>\n" +
    "        <link rel=\"stylesheet\" href=\"styles/main.css\">\n" +
    "        <script src=\"scripts/vendor/modernizr.min.js\"></script>\n" +
    "    </head>\n" +
    "    <body>\n" +
    "\n" +
    "    <!-- build:js useminUgly/foo.js -->\n" +
    "    <script src=\"useminUgly/foo.js\"></script>\n" +
    "    <!-- endbuild -->\n" +
    "\n" +
    "    <!-- build:js useminUgly/bar.js -->\n" +
    "    <script src=\"useminUgly/bar.js\"></script>\n" +
    "    <!-- endbuild -->\n" +
    "\n" +
    "    <!-- build:js useminUgly/all.js -->\n" +
    "    <script src=\"useminUgly/foo.js\"></script>\n" +
    "    <script src=\"useminUgly/bar.js\"></script>\n" +
    "    <!-- endbuild -->\n" +
    "\n" +
    "    <!-- build:js duplicate/useminUgly/all.js -->\n" +
    "    <script src=\"useminUgly/foo.js\"></script>\n" +
    "    <script src=\"useminUgly/bar.js\"></script>\n" +
    "    <!-- endbuild -->\n" +
    "\n" +
    "    <!-- build:css useminUgly/bar.css -->\n" +
    "    <script src=\"useminUgly/bar.css\"></script>\n" +
    "    <!-- endbuild -->\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('node_modules/scrypt-js/index.html',
    "<html>\n" +
    "    <head>\n" +
    "        <title>scrypt-js</title>\n" +
    "        <style type=\"text/css\">\n" +
    "            body {\n" +
    "               background: #f8f8f8;\n" +
    "                color: #333;\n" +
    "                margin: 40px 0;\n" +
    "            }\n" +
    "\n" +
    "            body > div {\n" +
    "                font-family: sans-serif;\n" +
    "                margin-left: 50%;\n" +
    "            }\n" +
    "\n" +
    "            body > div > div {\n" +
    "                background: #fff;\n" +
    "                border: 2px solid #888;\n" +
    "                margin-left: -400px;\n" +
    "                padding: 30px 20px 0;\n" +
    "                width: 800px;\n" +
    "            }\n" +
    "\n" +
    "            h1 {\n" +
    "                margin: 0 0 30px 0;\n" +
    "                text-align: center;\n" +
    "            }\n" +
    "\n" +
    "            .forms {\n" +
    "                float: right;\n" +
    "                font-size: 14px;\n" +
    "                padding-right: 10px;\n" +
    "            }\n" +
    "\n" +
    "            .forms a {\n" +
    "                color: #aaa;\n" +
    "                cursor: pointer;\n" +
    "            }\n" +
    "\n" +
    "            .forms b {\n" +
    "                padding: 0 15px;\n" +
    "            }\n" +
    "\n" +
    "            .forms .selected {\n" +
    "                color: #333;\n" +
    "            }\n" +
    "\n" +
    "            input {\n" +
    "                border: 1px solid #aaa;\n" +
    "                border-radius: 5px;\n" +
    "                font-size: 20px;\n" +
    "                padding: 8px 10px;\n" +
    "                width: 100%;\n" +
    "            }\n" +
    "\n" +
    "            input[type=submit] {\n" +
    "                background-color: #dfd;\n" +
    "                cursor: pointer;\n" +
    "                margin-top: 40px;\n" +
    "            }\n" +
    "\n" +
    "            input[type=submit]:active {\n" +
    "                background-color: #cfc;\n" +
    "                color: #040;\n" +
    "            }\n" +
    "\n" +
    "            input[type=submit].cancel {\n" +
    "                background-color: #fdd;\n" +
    "            }\n" +
    "\n" +
    "            input[type=submit]:active.cancel {\n" +
    "                background-color: #fcc;\n" +
    "                color: #400;\n" +
    "            }\n" +
    "\n" +
    "            input {\n" +
    "                margin-bottom: 30px;\n" +
    "            }\n" +
    "\n" +
    "            .param:first-child {\n" +
    "                 margin-left: 0;\n" +
    "            }\n" +
    "\n" +
    "            .param {\n" +
    "                float: left;\n" +
    "                margin-left: 66px;\n" +
    "                width: 150px;\n" +
    "            }\n" +
    "\n" +
    "            .param input {\n" +
    "            }\n" +
    "\n" +
    "            .clearfix {\n" +
    "                clear: both;\n" +
    "            }\n" +
    "\n" +
    "            #result {\n" +
    "                margin: 40px 0;\n" +
    "            }\n" +
    "\n" +
    "            .progress {\n" +
    "                border: 2px solid #666;\n" +
    "                border-radius: 15px;\n" +
    "                height: 30px;\n" +
    "                position: relative;\n" +
    "                width: 100%;\n" +
    "            }\n" +
    "\n" +
    "            #progressBar {\n" +
    "                background: #ccf;\n" +
    "                border-radius: 15px;\n" +
    "                position: absolute;\n" +
    "                left: 0;\n" +
    "                top: 0;\n" +
    "                width: 0;\n" +
    "                height: 30px;\n" +
    "            }\n" +
    "\n" +
    "            #progressAmount {\n" +
    "                position: absolute;\n" +
    "                left: 0;\n" +
    "                top: 0;\n" +
    "                text-align: center;\n" +
    "                line-height: 30px;\n" +
    "                width: 100%;\n" +
    "                height: 30px;\n" +
    "            }\n" +
    "        </style>\n" +
    "    </head>\n" +
    "    <body>\n" +
    "        <div>\n" +
    "            <div>\n" +
    "                <h1>scrypt-js</h1>\n" +
    "                <div>\n" +
    "                    <div><b>Password</b> <span id=\"form-password\" class=\"forms\"><a class=\"form selected\">UTF-8 (NFKC)</a><b>&bull;</b><a class=\"form\">UTF-8 (NFKD)</a><b>&bull;</b><a class=\"form\">hex</a></span></div>\n" +
    "                    <input id=\"pbkdf-password\" type=\"text\" value=\"password\" />\n" +
    "\n" +
    "                    <div><b>Salt</b> <span id=\"form-salt\" class=\"forms\"><a class=\"form selected\">UTF-8 (NFKC)</a><b>&bull;</b><a class=\"form\">UTF-8 (NFKD)</a><b>&bull;</b><a class=\"form\">hex</a></span></div>\n" +
    "                    <input id=\"pbkdf-salt\" type=\"text\" value=\"salt\" />\n" +
    "\n" +
    "                    <div class=\"clearfix\"></div>\n" +
    "                    <div>\n" +
    "                        <div class=\"param\">\n" +
    "                            <div><b>Nlog2</b> [1, 63]</div>\n" +
    "                            <input id=\"pbkdf-Nlog2\" type=\"text\" value=\"10\" />\n" +
    "                        </div>\n" +
    "                        <div class=\"param\">\n" +
    "                            <div><b>r</b></div>\n" +
    "                            <input id=\"pbkdf-r\" type=\"text\" value=\"8\" />\n" +
    "                        </div>\n" +
    "                        <div class=\"param\">\n" +
    "                            <div><b>p</b></div>\n" +
    "                            <input id=\"pbkdf-p\" type=\"text\" value=\"1\" />\n" +
    "                        </div>\n" +
    "                        <div class=\"param\">\n" +
    "                            <div><b>dkLen</b></div>\n" +
    "                            <input id=\"pbkdf-dkLen\" type=\"text\" value=\"32\" />\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"clearfix\"></div>\n" +
    "                    <input id=\"pbkdf-submit\" type=\"submit\" value=\"Compute scrypt\" />\n" +
    "                    <div class=\"progress\"><div id=\"progressBar\"></div><div id=\"progressAmount\">0%</div></div>\n" +
    "                    <div id=\"result\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <script src=\"thirdparty/setImmediate.js\" type=\"text/javascript\"></script>\n" +
    "        <script src=\"thirdparty/unorm.js\" type=\"text/javascript\"></script>\n" +
    "        <script src=\"thirdparty/buffer.js\" type=\"text/javascript\"></script>\n" +
    "\n" +
    "        <script src=\"scrypt.js\" type=\"text/javascript\"></script>\n" +
    "\n" +
    "        <script type=\"text/javascript\">\n" +
    "\n" +
    "            function get(id) { return document.getElementById(id); }\n" +
    "            function getValue(id) {\n" +
    "                var value = get(id).value;\n" +
    "                if (value.match(/^[0-9]+$/)) { return parseInt(value); }\n" +
    "                return null;\n" +
    "            }\n" +
    "            function normalized(field) {\n" +
    "                var value = get('pbkdf-' + field).value;\n" +
    "                var forms = document.getElementById('form-' + field).getElementsByClassName('selected');\n" +
    "                if (forms.length !== 1) { throw new Error('missing form'); }\n" +
    "                var form = forms[0].innerHTML;\n" +
    "\n" +
    "                if (form.indexOf('NFKC') >= 0) {\n" +
    "                    return new buffer.SlowBuffer(value.normalize('NFKC'), 'utf8');\n" +
    "                } else if (form.indexOf('NFKD') >= 0) {\n" +
    "                    return new buffer.SlowBuffer(value.normalize('NFKD'), 'utf8');\n" +
    "                } else if (form.indexOf('hex') >= 0) {\n" +
    "                    if (!value.match(/^([0-9A-F][0-9A-F])*$/i)) {\n" +
    "                        throw new Error(field + ': invalid hex string');\n" +
    "                    }\n" +
    "                    return new buffer.SlowBuffer(value, 'hex');\n" +
    "                }\n" +
    "\n" +
    "                throw new Error('Unknown ');\n" +
    "            }\n" +
    "\n" +
    "            var firstLine = true;\n" +
    "            function clearConsole() {\n" +
    "                firstLine = true;\n" +
    "                get('result').innerHTML = '';\n" +
    "            }\n" +
    "\n" +
    "            function printConsole(message) {\n" +
    "                if (!firstLine) { message = '<br /><br />' + message; }\n" +
    "                firstLine = false;\n" +
    "                get('result').innerHTML += message;\n" +
    "            }\n" +
    "\n" +
    "            (function() {\n" +
    "                var forms = document.getElementsByClassName('form');\n" +
    "                for (var i = 0; i < forms.length; i++) {\n" +
    "                    forms[i].onclick = (function(form) {\n" +
    "                        return function() {\n" +
    "                            console.log(form);\n" +
    "                            var selected = form.parentNode.getElementsByClassName('selected')[0];\n" +
    "                            selected.classList.remove('selected');\n" +
    "                            form.classList.add('selected');\n" +
    "                        };\n" +
    "                    })(forms[i]);\n" +
    "                }\n" +
    "            })();\n" +
    "\n" +
    "            var submit = get('pbkdf-submit');\n" +
    "\n" +
    "            var done = null;\n" +
    "            submit.onclick = function() {\n" +
    "                if (done === null) {\n" +
    "                    clearConsole();\n" +
    "\n" +
    "                    done = false;\n" +
    "\n" +
    "                    try {\n" +
    "                        var password = normalized('password');\n" +
    "                        var salt = normalized('salt');\n" +
    "                        var N = 1 << getValue('pbkdf-Nlog2');\n" +
    "                        var r = getValue('pbkdf-r');\n" +
    "                        var p = getValue('pbkdf-p');\n" +
    "                        var dkLen = getValue('pbkdf-dkLen');\n" +
    "                        console.log(password, salt, N, r, p)\n" +
    "\n" +
    "                    } catch (error) {\n" +
    "                        printConsole(error.message);\n" +
    "\n" +
    "                        done = null;\n" +
    "                        return;\n" +
    "                    }\n" +
    "\n" +
    "                    submit.classList.add('cancel');\n" +
    "                    submit.value = \"Cancel scrypt\";\n" +
    "\n" +
    "                    printConsole('Started: N=' + N + ', r=' + r + ' p=' + p +\n" +
    "                        ', password=0x' + password.toString('hex') + ', salt=0x' + salt.toString('hex'));\n" +
    "\n" +
    "                    var t0 = (new Date()).getTime();\n" +
    "                    scrypt.scrypt(password, salt, N, r, p, dkLen, function(progress) {\n" +
    "                        // Cancelled\n" +
    "                        if (done) { return true; }\n" +
    "\n" +
    "                        // Update the progress bar\n" +
    "                        get('progressBar').style.width = parseInt(100 * progress) + '%';\n" +
    "                        get('progressAmount').innerHTML = parseInt(100 * progress) + '%';\n" +
    "                    }).then(function(key) {\n" +
    "                        key = new buffer.SlowBuffer(key);\n" +
    "                        printConsole(\"Generated: \" + key.toString('hex'));\n" +
    "                        printConsole(\"Complete: \" + (((new Date()).getTime() - t0) / 1000) + 's');\n" +
    "                    }, function(error) {\n" +
    "                        if (error.message === \"cancelled\") {\n" +
    "                            printConsole(\"Cancelled!\");\n" +
    "                        } else {\n" +
    "                            printConsole(\"Error: \" + error.message);\n" +
    "                        }\n" +
    "                    }).then(function() {\n" +
    "                        submit.classList.remove('cancel');\n" +
    "                        submit.value = \"Compute scrypt\";\n" +
    "\n" +
    "                        done = null;\n" +
    "                        get('progressBar').style.width = '0%';\n" +
    "                        get('progressAmount').innerHTML = '0%';\n" +
    "                    });\n" +
    "\n" +
    "                } else if (done === false) {\n" +
    "                    done = true;\n" +
    "                }\n" +
    "            };\n" +
    "        </script>\n" +
    "    </body>\n" +
    "</html>\n"
  );


  $templateCache.put('node_modules/secrets.js-grempe/benchmark/benchmark.html',
    "<html>\n" +
    "  <head>\n" +
    "    <title>benchmark</title>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "\n" +
    "    <script src=\"../node_modules/benchmark/benchmark.js\"></script>\n" +
    "    <script src=\"../secrets.js\"></script>\n" +
    "\n" +
    "    <script charset=\"utf-8\">\n" +
    "      var suite = new Benchmark.Suite;\n" +
    "\n" +
    "      suite.add('share and combine', function() {\n" +
    "        var key, shares, comb, newShare;\n" +
    "        key = secrets.random(512);\n" +
    "        shares = secrets.share(key, 10, 5);\n" +
    "        comb = secrets.combine( shares );\n" +
    "        newShare = secrets.newShare(8, shares);\n" +
    "        comb = secrets.combine( shares.slice(1,5).concat(newShare) );\n" +
    "      })\n" +
    "      // .add('newPadLeft()', function() {\n" +
    "      //   secrets._newPadLeft(padding, 256);\n" +
    "      // })\n" +
    "      // add listeners\n" +
    "      .on('cycle', function(event) {\n" +
    "        console.log(String(event.target));\n" +
    "      })\n" +
    "      .on('complete', function() {\n" +
    "        console.log('Fastest is ' + this.filter('fastest').pluck('name'));\n" +
    "      })\n" +
    "      // run async\n" +
    "      .run({ 'async': false });\n" +
    "    </script>\n" +
    "  </body>\n" +
    "</html>\n"
  );


  $templateCache.put('node_modules/secrets.js-grempe/examples/AMD/www/index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "    <head>\n" +
    "        <script data-main=\"app\" src=\"lib/require.js\"></script>\n" +
    "    </head>\n" +
    "    <body>\n" +
    "        <h1>Hello Secrets!</h1>\n" +
    "\n" +
    "        <script>\n" +
    "          require(['../../../secrets'], function() {\n" +
    "              var key, comb, shares, newShare;\n" +
    "              key = secrets.random(512);\n" +
    "              shares = secrets.share(key, 10, 5);\n" +
    "              comb = secrets.combine( shares );\n" +
    "              newShare = secrets.newShare(8, shares);\n" +
    "              comb = secrets.combine( shares.slice(1,5).concat(newShare) );\n" +
    "              document.write('You should see two identical keys below, with a key both before and after a share and combine operation.\\n\\n' + key + '\\n' + comb);\n" +
    "          });\n" +
    "        </script>\n" +
    "\n" +
    "    </body>\n" +
    "</html>\n"
  );


  $templateCache.put('node_modules/secrets.js-grempe/examples/example_js_global.html',
    "<!-- USAGE : Just open this file in your web browser of choice -->\n" +
    "\n" +
    "<html>\n" +
    "  <head>\n" +
    "    <title>secrets.js - HTML w/ JS Global Test</title>\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "\n" +
    "    <h1>secrets.js</h1>\n" +
    "    <p>You can also open a javascript console to interact directly with the 'secrets' global.</p>\n" +
    "\n" +
    "    <h2>The following code is being run:</h2>\n" +
    "    <pre>\n" +
    "        var key, comb, shares, newShare;\n" +
    "        key = secrets.random(512);\n" +
    "        shares = secrets.share(key, 10, 5);\n" +
    "        comb = secrets.combine( shares );\n" +
    "        newShare = secrets.newShare(8, shares);\n" +
    "        comb = secrets.combine( shares.slice(1,5).concat(newShare) );\n" +
    "        document.write('You should see two identical keys below, with a key both before and after a share and combine operation.\\n\\n' + key + '\\n' + comb);\n" +
    "    </pre>\n" +
    "\n" +
    "    <br />\n" +
    "\n" +
    "    <h2>Code Output:</h2>\n" +
    "    <script src=\"../secrets.js\"></script>\n" +
    "    <script charset=\"utf-8\">\n" +
    "      var key, comb, shares, newShare;\n" +
    "      key = secrets.random(512);\n" +
    "      shares = secrets.share(key, 10, 5);\n" +
    "      comb = secrets.combine( shares );\n" +
    "      newShare = secrets.newShare(8, shares);\n" +
    "      comb = secrets.combine( shares.slice(1,5).concat(newShare) );\n" +
    "      document.write('You should see two identical keys below, with a key both before and after a share and combine operation.\\n\\n' + key + '\\n' + comb);\n" +
    "    </script>\n" +
    "\n" +
    "  </body>\n" +
    "</html>\n"
  );


  $templateCache.put('node_modules/secrets.js-grempe/SpecRunner.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>Jasmine Spec Runner v2.2.0</title>\n" +
    "\n" +
    "    <link rel=\"shortcut icon\" type=\"image/png\" href=\"node_modules/jasmine-core/images/jasmine_favicon.png\">\n" +
    "    <link rel=\"stylesheet\" href=\"node_modules/jasmine-core/lib/jasmine-core/jasmine.css\">\n" +
    "\n" +
    "    <script src=\"node_modules/jasmine-core/lib/jasmine-core/jasmine.js\"></script>\n" +
    "    <script src=\"node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js\"></script>\n" +
    "    <script src=\"node_modules/jasmine-core/lib/jasmine-core/boot.js\"></script>\n" +
    "\n" +
    "    <!-- include source files here... -->\n" +
    "    <script src=\"secrets.js\"></script>\n" +
    "\n" +
    "    <!-- include spec files here... -->\n" +
    "    <script src=\"spec/SpecHelper.js\"></script>\n" +
    "    <script src=\"spec/SecretsSpec.js\"></script>\n" +
    "    <script src=\"spec/SecretsPrivateSpec.js\"></script>\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "  </body>\n" +
    "\n" +
    "</html>\n"
  );


  $templateCache.put('node_modules/secrets.js-grempe/SpecRunnerMinified.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>Jasmine Spec Runner v2.2.0</title>\n" +
    "\n" +
    "    <link rel=\"shortcut icon\" type=\"image/png\" href=\"node_modules/jasmine-core/images/jasmine_favicon.png\">\n" +
    "    <link rel=\"stylesheet\" href=\"node_modules/jasmine-core/lib/jasmine-core/jasmine.css\">\n" +
    "\n" +
    "    <script src=\"node_modules/jasmine-core/lib/jasmine-core/jasmine.js\"></script>\n" +
    "    <script src=\"node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js\"></script>\n" +
    "    <script src=\"node_modules/jasmine-core/lib/jasmine-core/boot.js\"></script>\n" +
    "\n" +
    "    <!-- include source files here... -->\n" +
    "    <script src=\"secrets.min.js\"></script>\n" +
    "\n" +
    "    <!-- include spec files here... -->\n" +
    "    <script src=\"spec/SpecHelper.js\"></script>\n" +
    "    <script src=\"spec/SecretsSpec.js\"></script>\n" +
    "    <script src=\"spec/SecretsPrivateSpec.js\"></script>\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "  </body>\n" +
    "\n" +
    "</html>\n"
  );


  $templateCache.put('node_modules/sjcl/browserTest/browserTest.html',
    "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\"\n" +
    "        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n" +
    "        \n" +
    "<html xmlns=\"http://www.w3.org/1999/xhtml\">\n" +
    "<head>\n" +
    "  <title>SJCL browser test</title>\n" +
    "  <link rel=\"stylesheet\" type=\"text/css\" href=\"test.css\"/>\n" +
    "  <script type=\"text/javascript\" src=\"browserUtil.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"../test/run_tests_browser.js\"></script>\n" +
    "</head>\n" +
    "<body onload=\"testCores(['sjcl.js'])\">\n" +
    "  <h1>SJCL browser test</h1>\n" +
    "  <div id=\"status\">Waiting for tests to begin...</div>\n" +
    "  <div id=\"print\"></div>\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('node_modules/sjcl/browserTest/entropy.html',
    "<html>\n" +
    "<head>\n" +
    "\n" +
    "<title>Entropy Generator Progress</title>\n" +
    "<!-- ProgressBar source: http://stackoverflow.com/questions/7190898/progress-bar-with-html-and-css -->\n" +
    "\n" +
    "<style>\n" +
    "#progressbar {\n" +
    "  background-color: black;\n" +
    "  border-radius: 13px; /* (height of inner div) / 2 + padding */\n" +
    "  padding: 3px;\n" +
    "}\n" +
    "#progressbar > div {\n" +
    "   background-color: orange;\n" +
    "   width: 0%; /* Adjust with JavaScript */\n" +
    "   height: 20px;\n" +
    "   border-radius: 10px;\n" +
    "}\n" +
    "</style>\n" +
    "\n" +
    "<script type=\"text/javascript\" src=\"../sjcl.js\">\n" +
    "</script>\n" +
    "\n" +
    "<script type=\"text/javascript\">\n" +
    "\n" +
    "var busy = 0;\n" +
    "var collecting = 0;\n" +
    "\n" +
    "function showprogress () {\n" +
    "	var barwidth = document.getElementById (\"progresswidth\");\n" +
    "	var paranoia = parseInt (document.getElementById (\"paranoialevel\").value);\n" +
    "	var progress = 100 * sjcl.random.getProgress (paranoia);\n" +
    "	barwidth.style.width = progress+\"%\";\n" +
    "	if (!sjcl.random.isReady (paranoia)) {\n" +
    "		setTimeout (\"showprogress()\", 10, \"JavaScript\");\n" +
    "	} else {\n" +
    "		busy = 0;\n" +
    "		document.getElementById (\"startbutton\").style.disabled = 1;\n" +
    "	}\n" +
    "}\n" +
    "\n" +
    "function startup () {\n" +
    "	if (collecting == 0) {\n" +
    "		sjcl.random.startCollectors ();\n" +
    "		collecting = 1;\n" +
    "	}\n" +
    "	if (busy == 0) {\n" +
    "		busy = 1;\n" +
    "		document.getElementById (\"startbutton\").style.disabled = 1;\n" +
    "		showprogress ();\n" +
    "	}\n" +
    "}\n" +
    "\n" +
    "function consume (numbits) {\n" +
    "	var collector = document.getElementById (\"collector\");\n" +
    "	collector.value = \"retrieving random data\";\n" +
    "	var paranoia = document.getElementById (\"paranoialevel\").value;\n" +
    "	var numwords = Math.ceil (numbits / 32);\n" +
    "	var bits = sjcl.random.randomWords (numwords, paranoia);\n" +
    "	collector.value = '';\n" +
    "	for (var i=0; i<numwords; i++) {\n" +
    "		var hi = (bits [i] >> 16) & 0x0000ffff;\n" +
    "		var lo =  bits [i]        & 0x0000ffff;\n" +
    "		collector.value = collector.value + hi.toString (16) + lo.toString (16);\n" +
    "	}\n" +
    "	startup ();\n" +
    "}\n" +
    "\n" +
    "</script>\n" +
    "\n" +
    "</head>\n" +
    "<body>\n" +
    "<h1>Entropy Generator Progress</h1>\n" +
    "\n" +
    "<p>Target: 192 bits, available at paranoia level 5.</p>\n" +
    "\n" +
    "<p>Corresponding paranoia level from [0,1..10]: <input type=\"text\" value=\"5\" id=\"paranoialevel\"/> <input type=button onclick=\"startup ()\" id=\"startbutton\" value=\" Start &gt;&gt; \"> (the idea being that you can see the progress bar advance gently from empty/black to full/yellow after you press this)</p>\n" +
    "\n" +
    "<p><input type=button onclick=\"consume (192)\" value=\" Consume 192 bits &gt;&gt; \"><input type=text id=collector size=50 value=\"\" onkeypress=\"consume (192)\"> (also consumes 192 bits with every keypress in the text field; use key repeat to consume swiftly)</p>\n" +
    "\n" +
    "<div id=\"progressbar\">\n" +
    "  <div id=\"progresswidth\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<p>Please move your mouse, play around and generally introduce entropy into your environment.</p>\n" +
    "\n" +
    "</body>\n" +
    "</html>"
  );


  $templateCache.put('node_modules/sjcl/browserTest/performance.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <title>SJCL browser performance</title>\n" +
    "  <link rel=\"stylesheet\" type=\"text/css\" href=\"test.css\"/>\n" +
    "</head>\n" +
    "<body>\n" +
    "  <h1>SJCL browser performance</h1>\n" +
    "  <div id=\"status\">Waiting for tests to begin...</div>\n" +
    "  <div id=\"print\"></div>\n" +
    "  <script type=\"text/javascript\" src=\"../sjcl.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"browserUtil.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"performance.js\"></script>\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('node_modules/sjcl/demo/index.html',
    "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\"\n" +
    "        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n" +
    "        \n" +
    "<html xmlns=\"http://www.w3.org/1999/xhtml\">\n" +
    "<head>\n" +
    "  <title>SJCL demo</title>\n" +
    "  <link rel=\"stylesheet\" type=\"text/css\" href=\"example.css\"/>\n" +
    "  <script type=\"text/javascript\" src=\"../sjcl.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"form.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"example.js\"></script>\n" +
    "</head>\n" +
    "<body onload=\"loaded()\">\n" +
    "  <h1>SJCL demo</h1>\n" +
    "\n" +
    "  <div class=\"header\">\n" +
    "  <p>This page is a demo of the Stanford Javascript Crypto Library. To get started, just type in a password in the left pane and a secret message in the middle pane, then click \"encrypt\". Encryption takes place in your browser and we never see the plaintext.</p>\n" +
    "  \n" +
    "  <p>SJCL has lots of other options, many of which are shown in the grey boxes.</p>\n" +
    "  </div>\n" +
    "\n" +
    "  <form id=\"theForm\" onsubmit=\"return false;\">\n" +
    "  <div class=\"column\" id=\"ckey\">\n" +
    "    <!-- Password and pbkdf2 parameters -->\n" +
    "    <div class=\"box\" id=\"ppassword\">\n" +
    "      <h2>Password</h2>\n" +
    "      <div class=\"section\">\n" +
    "        <label for=\"password\">Password:</label>\n" +
    "        <input type=\"password\" class=\"wide\" name=\"password\" id=\"password\" autocomplete=\"off\" tabindex=\"1\"/>\n" +
    "        <p class=\"explanation\">\n" +
    "          Choose a strong, random password.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"box\" id=\"pkey\">\n" +
    "      <h2>Key Derivation</h2>\n" +
    "      <div class=\"section\">\n" +
    "        <div>\n" +
    "          <label for=\"salt\">Salt:</label>\n" +
    "          <a class=\"random floatright\" href=\"javascript:randomize('salt',2,0)\">random</a>\n" +
    "        </div>\n" +
    "        <input type=\"text\" id=\"salt\" class=\"wide hex\" autocomplete=\"off\" size=\"17\" maxlength=\"35\"/>\n" +
    "        <input type=\"checkbox\" name=\"freshsalt\" id=\"freshsalt\" autocomplete=\"off\" checked=\"checked\"/>\n" +
    "        <label for=\"freshsalt\">Use fresh random salt for each new password</label>\n" +
    "        <p class=\"explanation\">\n" +
    "          Salt adds more variability to your key, and prevents attackers\n" +
    "          from using <a href=\"http://en.wikipedia.org/wiki/Rainbow_table\">rainbow tables</a> to attack it.\n" +
    "        </p>     \n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"section\">\n" +
    "        <label for=\"iter\">Strengthen by a factor of:</label>\n" +
    "        <input type=\"text\" name=\"iter\" id=\"iter\" value=\"1000\" class=\"numeric\" size=\"5\" maxlength=\"5\" autocomplete=\"off\"/>\n" +
    "        <p class=\"explanation\">\n" +
    "          Strengthening makes it slower to compute the key corresponding to your\n" +
    "          password.  This makes it take much longer for an attacker to guess it.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"section\">\n" +
    "        Key size:\n" +
    "        <input type=\"radio\" name=\"keysize\" value=\"128\" id=\"key128\" checked=\"checked\" autocomplete=\"off\" onclick=\"extendKey(4)\"/>\n" +
    "        <label for=\"key128\">128</label>\n" +
    "        <input type=\"radio\" name=\"keysize\" value=\"192\" id=\"key192\" autocomplete=\"off\" onclick=\"extendKey(6)\"/>\n" +
    "        <label for=\"key192\">192</label>\n" +
    "        <input type=\"radio\" name=\"keysize\" value=\"256\" id=\"key256\" autocomplete=\"off\" onclick=\"extendKey(8)\"/>\n" +
    "        <label for=\"key256\">256</label>\n" +
    "        <p class=\"explanation\">\n" +
    "          128 bits should be secure enough, but you can generate a longer\n" +
    "          key if you wish.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- cipher key -->\n" +
    "      <div class=\"section\">\n" +
    "        <div>\n" +
    "          <label for=\"key\">Key:</label>\n" +
    "          <!--\n" +
    "          <a class=\"random floatright\" href=\"javascript:randomizeKey()\">random</a>\n" +
    "          -->\n" +
    "        </div>\n" +
    "        <textarea id=\"key\" name=\"key\" class=\"hex\" rows=\"2\" autocomplete=\"off\"></textarea>\n" +
    "        <p class=\"explanation\">\n" +
    "          This key is computed from your password, salt and strengthening factor.  It\n" +
    "          will be used internally by the cipher.  Instead of using a password, you can\n" +
    "          enter a key here directly.  If you do, it should be 32, 48 or 64 hexadecimal\n" +
    "          digits (128, 192 or 256 bits).\n" +
    "        </p>\n" +
    "      </div>\n" +
    "     \n" +
    "    </div>\n" +
    "  </div>\n" +
    "    \n" +
    "    <!-- mode controls -->\n" +
    "  <div class=\"column\" id=\"cmode\">\n" +
    "    <div class=\"box\">\n" +
    "      <h2>Cipher Parameters</h2>\n" +
    "      <p class=\"explanation\">\n" +
    "        SJCL encrypts your data with the <a href=\"http://en.wikipedia.org/wiki/Advanced_Encryption_Standard\"><acronym title=\"Advanced Encryption Standard\">AES</acronym></a> block cipher.\n" +
    "      </p>\n" +
    "      <div class=\"section\">\n" +
    "        Cipher mode:\n" +
    "        <input type=\"radio\" name=\"mode\" value=\"ccm\" id=\"ccm\" checked=\"checked\" autocomplete=\"off\"/>\n" +
    "        <label for=\"ccm\"><acronym title=\"Counter mode with Cipher block chaining Message authentication code\">CCM</acronym></label>\n" +
    "        <input type=\"radio\" name=\"mode\" value=\"ocb2\" id=\"ocb2\" autocomplete=\"off\"/>\n" +
    "        <label for=\"ocb2\"><acronym title=\"Offset CodeBook mode, version 2.0\">OCB2</acronym></label>\n" +
    "        <input type=\"radio\" name=\"mode\" value=\"gcm\" id=\"gcm\" autocomplete=\"off\"/>\n" +
    "        <label for=\"gcm\"><acronym title=\"Galois Counter Mode\">GCM</acronym></label>\n" +
    "        <p class=\"explanation\">\n" +
    "          The cipher mode is a standard for how to use AES and other\n" +
    "          algorithms to encrypt and authenticate your message.\n" +
    "          <a href=\"http://en.wikipedia.org/wiki/OCB_mode\">OCB2 mode</a> (patented) and\n" +
    "          <a href=\"http://en.wikipedia.org/wiki/GCM_mode\">GCM mode</a> (unencumbered)\n" +
    "          are slightly faster and have more features than\n" +
    "          <a href=\"http://en.wikipedia.org/wiki/CCM_mode\">CCM mode</a>.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      \n" +
    "      <div class=\"section\">\n" +
    "        <div>\n" +
    "          <label for=\"iv\">Initialization vector:</label>\n" +
    "          <a class=\"random floatright\" href=\"javascript:randomize('iv',4,0)\">random</a>\n" +
    "        </div>\n" +
    "        <input type=\"text\" name=\"iv\" id=\"iv\" class=\"wide hex\" size=\"32\" maxlength=\"35\" autocomplete=\"off\"/>\n" +
    "        <input type=\"checkbox\" id=\"freshiv\" autocomplete=\"off\" checked=\"checked\"/>\n" +
    "        <label for=\"freshiv\">Choose a new random IV for every message.</label>\n" +
    "        <p class=\"explanation\">\n" +
    "          The IV needs to be different for every message you send.  It adds\n" +
    "          randomness to your message, so that the same message will look\n" +
    "          different each time you send it.\n" +
    "        </p>\n" +
    "        <p class=\"explanation\">\n" +
    "          Be careful: CCM mode and GCM mode don't use\n" +
    "          the whole IV, so changing just part of it isn't enough.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      \n" +
    "      <div class=\"section\">\n" +
    "        Authentication strength:\n" +
    "        <input type=\"radio\" name=\"tag\" value=\"64\" id=\"tag64\" autocomplete=\"off\" checked=\"checked\"/>\n" +
    "        <label for=\"tag64\">64</label>\n" +
    "        <input type=\"radio\" name=\"tag\" value=\"96\" id=\"tag96\" autocomplete=\"off\"/>\n" +
    "        <label for=\"tag96\">96</label>\n" +
    "        <input type=\"radio\" name=\"tag\" value=\"128\" id=\"tag128\" autocomplete=\"off\"/>\n" +
    "        <label for=\"tag128\">128</label>\n" +
    "        <p class=\"explanation\">\n" +
    "          SJCL adds a an authentication tag to your message to make sure\n" +
    "          nobody changes it.  The longer the authentication tag, the harder it is\n" +
    "          for somebody to change your encrypted message without you noticing.  64\n" +
    "          bits is probably enough.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      \n" +
    "      <div class=\"section\">\n" +
    "        <input type=\"checkbox\" name=\"json\" id=\"json\" autocomplete=\"off\" checked=\"checked\"/>\n" +
    "        <label for=\"json\">Send the parameters and authenticated data along\n" +
    "          with the message.</label>\n" +
    "         <p class=\"explanation\">\n" +
    "           These parameters are required to decrypt your message later.  If the\n" +
    "           person you're sending the message to knows them, you don't need to send\n" +
    "           them so your message will be shorter.\n" +
    "         </p>\n" +
    "         <p class=\"explanation\">\n" +
    "           Default parameters won't be sent.  Your password won't be sent, either.\n" +
    "           The salt and iv will be encoded in base64 instead of hex, so they'll\n" +
    "           look different from what's in the box.\n" +
    "         </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "  <div class=\"column\" id=\"ctexts\">\n" +
    "    <div id=\"pplaintext\" class=\"box\">\n" +
    "      <h2>Plaintext</h2>\n" +
    "      <div class=\"section\">\n" +
    "        <label for=\"plaintext\">Secret message:</label>\n" +
    "        <textarea id=\"plaintext\" autocomplete=\"off\" rows=\"5\" tabindex=\"2\"></textarea>\n" +
    "        <div class=\"explanation\">\n" +
    "          This message will be encrypted, so that nobody can read it or change it\n" +
    "          without your password.\n" +
    "        </div>\n" +
    "      </div>  \n" +
    "   \n" +
    "      <div class=\"section\">\n" +
    "        <label for=\"adata\">Authenticated data:</label>\n" +
    "        <textarea id=\"adata\" autocomplete=\"off\" tabindex=\"3\"></textarea>\n" +
    "        <div class=\"explanation\">\n" +
    "          This auxilliary message isn't secret, but its integrity will be checked\n" +
    "          along with the integrity of the message.\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div id=\"buttons\">\n" +
    "      <a href=\"javascript:doEncrypt()\" id=\"encrypt\" tabindex=\"4\"><span class=\"turnDown\">encrypt</span></a>\n" +
    "      <a href=\"javascript:doDecrypt()\" id=\"decrypt\" tabindex=\"6\"><span class=\"turnUp\">decrypt</span></a>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div id=\"pciphertext\" class=\"box\">\n" +
    "      <h2>Ciphertext</h2>\n" +
    "      <label for=\"ciphertext\">Ciphertext:</label>\n" +
    "      <textarea id=\"ciphertext\" autocomplete=\"off\" rows=\"7\" tabindex=\"5\"></textarea>\n" +
    "      <div class=\"explanation\">\n" +
    "        Your message, encrypted and authenticated so that nobody can read it\n" +
    "        or change it without your password.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('node_modules/sprintf-js/demo/angular.html',
    "<!doctype html>\n" +
    "<html ng-app=\"app\">\n" +
    "<head>\n" +
    "    <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-rc.3/angular.min.js\"></script>\n" +
    "    <script src=\"../src/sprintf.js\"></script>\n" +
    "    <script src=\"../src/angular-sprintf.js\"></script>\n" +
    "</head>\n" +
    "<body>\n" +
    "    <pre>{{ \"%+010d\"|sprintf:-123 }}</pre>\n" +
    "    <pre>{{ \"%+010d\"|vsprintf:[-123] }}</pre>\n" +
    "    <pre>{{ \"%+010d\"|fmt:-123 }}</pre>\n" +
    "    <pre>{{ \"%+010d\"|vfmt:[-123] }}</pre>\n" +
    "    <pre>{{ \"I've got %2$d apples and %1$d oranges.\"|fmt:4:2 }}</pre>\n" +
    "    <pre>{{ \"I've got %(apples)d apples and %(oranges)d oranges.\"|fmt:{apples: 2, oranges: 4} }}</pre>\n" +
    "\n" +
    "    <script>\n" +
    "        angular.module(\"app\", [\"sprintf\"])\n" +
    "    </script>\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('node_modules/timers-browserify/example/enroll/index.html',
    "<!doctype html>\n" +
    "<html>\n" +
    "  <head>\n" +
    "    <script type=\"text/javascript\" src=\"/js/browserify.js\"></script>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "  </body>\n" +
    "</html>\n"
  );


  $templateCache.put('node_modules/uglify-js/tools/domprops.html',
    "<!doctype html>\n" +
    "<html>\n" +
    "<body>\n" +
    "    <script>\n" +
    "        !function(G) {\n" +
    "            var domprops = [];\n" +
    "            var objs = [ G ];\n" +
    "            var tagNames = [\n" +
    "                \"a\",\n" +
    "                \"abbr\",\n" +
    "                \"acronym\",\n" +
    "                \"address\",\n" +
    "                \"applet\",\n" +
    "                \"area\",\n" +
    "                \"article\",\n" +
    "                \"aside\",\n" +
    "                \"audio\",\n" +
    "                \"b\",\n" +
    "                \"base\",\n" +
    "                \"basefont\",\n" +
    "                \"bdi\",\n" +
    "                \"bdo\",\n" +
    "                \"bgsound\",\n" +
    "                \"big\",\n" +
    "                \"blink\",\n" +
    "                \"blockquote\",\n" +
    "                \"body\",\n" +
    "                \"br\",\n" +
    "                \"button\",\n" +
    "                \"canvas\",\n" +
    "                \"caption\",\n" +
    "                \"center\",\n" +
    "                \"checked\",\n" +
    "                \"cite\",\n" +
    "                \"code\",\n" +
    "                \"col\",\n" +
    "                \"colgroup\",\n" +
    "                \"command\",\n" +
    "                \"comment\",\n" +
    "                \"compact\",\n" +
    "                \"content\",\n" +
    "                \"data\",\n" +
    "                \"datalist\",\n" +
    "                \"dd\",\n" +
    "                \"declare\",\n" +
    "                \"defer\",\n" +
    "                \"del\",\n" +
    "                \"details\",\n" +
    "                \"dfn\",\n" +
    "                \"dialog\",\n" +
    "                \"dir\",\n" +
    "                \"disabled\",\n" +
    "                \"div\",\n" +
    "                \"dl\",\n" +
    "                \"dt\",\n" +
    "                \"element\",\n" +
    "                \"em\",\n" +
    "                \"embed\",\n" +
    "                \"fieldset\",\n" +
    "                \"figcaption\",\n" +
    "                \"figure\",\n" +
    "                \"font\",\n" +
    "                \"footer\",\n" +
    "                \"form\",\n" +
    "                \"frame\",\n" +
    "                \"frameset\",\n" +
    "                \"h1\",\n" +
    "                \"h2\",\n" +
    "                \"h3\",\n" +
    "                \"h4\",\n" +
    "                \"h5\",\n" +
    "                \"h6\",\n" +
    "                \"head\",\n" +
    "                \"header\",\n" +
    "                \"hgroup\",\n" +
    "                \"hr\",\n" +
    "                \"html\",\n" +
    "                \"i\",\n" +
    "                \"iframe\",\n" +
    "                \"image\",\n" +
    "                \"img\",\n" +
    "                \"input\",\n" +
    "                \"ins\",\n" +
    "                \"isindex\",\n" +
    "                \"ismap\",\n" +
    "                \"kbd\",\n" +
    "                \"keygen\",\n" +
    "                \"label\",\n" +
    "                \"legend\",\n" +
    "                \"li\",\n" +
    "                \"link\",\n" +
    "                \"listing\",\n" +
    "                \"main\",\n" +
    "                \"map\",\n" +
    "                \"mark\",\n" +
    "                \"marquee\",\n" +
    "                \"math\",\n" +
    "                \"menu\",\n" +
    "                \"menuitem\",\n" +
    "                \"meta\",\n" +
    "                \"meter\",\n" +
    "                \"multicol\",\n" +
    "                \"multiple\",\n" +
    "                \"nav\",\n" +
    "                \"nextid\",\n" +
    "                \"nobr\",\n" +
    "                \"noembed\",\n" +
    "                \"noframes\",\n" +
    "                \"nohref\",\n" +
    "                \"noresize\",\n" +
    "                \"noscript\",\n" +
    "                \"noshade\",\n" +
    "                \"nowrap\",\n" +
    "                \"object\",\n" +
    "                \"ol\",\n" +
    "                \"optgroup\",\n" +
    "                \"option\",\n" +
    "                \"output\",\n" +
    "                \"p\",\n" +
    "                \"param\",\n" +
    "                \"picture\",\n" +
    "                \"plaintext\",\n" +
    "                \"pre\",\n" +
    "                \"progress\",\n" +
    "                \"q\",\n" +
    "                \"rb\",\n" +
    "                \"readonly\",\n" +
    "                \"rp\",\n" +
    "                \"rt\",\n" +
    "                \"rtc\",\n" +
    "                \"ruby\",\n" +
    "                \"s\",\n" +
    "                \"samp\",\n" +
    "                \"script\",\n" +
    "                \"section\",\n" +
    "                \"select\",\n" +
    "                \"selected\",\n" +
    "                \"shadow\",\n" +
    "                \"slot\",\n" +
    "                \"small\",\n" +
    "                \"source\",\n" +
    "                \"spacer\",\n" +
    "                \"span\",\n" +
    "                \"strike\",\n" +
    "                \"strong\",\n" +
    "                \"style\",\n" +
    "                \"sub\",\n" +
    "                \"summary\",\n" +
    "                \"sup\",\n" +
    "                \"svg\",\n" +
    "                \"table\",\n" +
    "                \"tbody\",\n" +
    "                \"td\",\n" +
    "                \"template\",\n" +
    "                \"textarea\",\n" +
    "                \"tfoot\",\n" +
    "                \"th\",\n" +
    "                \"thead\",\n" +
    "                \"time\",\n" +
    "                \"title\",\n" +
    "                \"tr\",\n" +
    "                \"track\",\n" +
    "                \"tt\",\n" +
    "                \"u\",\n" +
    "                \"ul\",\n" +
    "                \"var\",\n" +
    "                \"video\",\n" +
    "                \"wbr\",\n" +
    "                \"xmp\",\n" +
    "                \"XXX\",\n" +
    "            ];\n" +
    "            for (var n = 0; n < tagNames.length; n++) {\n" +
    "                add(document.createElement(tagNames[n]));\n" +
    "            }\n" +
    "            var nsNames = {\n" +
    "                \"http://www.w3.org/1998/Math/MathML\": [\n" +
    "                    \"annotation\",\n" +
    "                    \"annotation-xml\",\n" +
    "                    \"maction\",\n" +
    "                    \"maligngroup\",\n" +
    "                    \"malignmark\",\n" +
    "                    \"math\",\n" +
    "                    \"menclose\",\n" +
    "                    \"merror\",\n" +
    "                    \"mfenced\",\n" +
    "                    \"mfrac\",\n" +
    "                    \"mglyph\",\n" +
    "                    \"mi\",\n" +
    "                    \"mlabeledtr\",\n" +
    "                    \"mlongdiv\",\n" +
    "                    \"mmultiscripts\",\n" +
    "                    \"mn\",\n" +
    "                    \"mo\",\n" +
    "                    \"mover\",\n" +
    "                    \"mpadded\",\n" +
    "                    \"mphantom\",\n" +
    "                    \"mprescripts\",\n" +
    "                    \"mroot\",\n" +
    "                    \"mrow\",\n" +
    "                    \"ms\",\n" +
    "                    \"mscarries\",\n" +
    "                    \"mscarry\",\n" +
    "                    \"msgroup\",\n" +
    "                    \"msline\",\n" +
    "                    \"mspace\",\n" +
    "                    \"msqrt\",\n" +
    "                    \"msrow\",\n" +
    "                    \"mstack\",\n" +
    "                    \"mstyle\",\n" +
    "                    \"msub\",\n" +
    "                    \"msubsup\",\n" +
    "                    \"msup\",\n" +
    "                    \"mtable\",\n" +
    "                    \"mtd\",\n" +
    "                    \"mtext\",\n" +
    "                    \"mtr\",\n" +
    "                    \"munder\",\n" +
    "                    \"munderover\",\n" +
    "                    \"none\",\n" +
    "                    \"semantics\",\n" +
    "                ],\n" +
    "                \"http://www.w3.org/2000/svg\": [\n" +
    "                    \"a\",\n" +
    "                    \"altGlyph\",\n" +
    "                    \"altGlyphDef\",\n" +
    "                    \"altGlyphItem\",\n" +
    "                    \"animate\",\n" +
    "                    \"animateColor\",\n" +
    "                    \"animateMotion\",\n" +
    "                    \"animateTransform\",\n" +
    "                    \"circle\",\n" +
    "                    \"clipPath\",\n" +
    "                    \"color-profile\",\n" +
    "                    \"cursor\",\n" +
    "                    \"defs\",\n" +
    "                    \"desc\",\n" +
    "                    \"discard\",\n" +
    "                    \"ellipse\",\n" +
    "                    \"feBlend\",\n" +
    "                    \"feColorMatrix\",\n" +
    "                    \"feComponentTransfer\",\n" +
    "                    \"feComposite\",\n" +
    "                    \"feConvolveMatrix\",\n" +
    "                    \"feDiffuseLighting\",\n" +
    "                    \"feDisplacementMap\",\n" +
    "                    \"feDistantLight\",\n" +
    "                    \"feDropShadow\",\n" +
    "                    \"feFlood\",\n" +
    "                    \"feFuncA\",\n" +
    "                    \"feFuncB\",\n" +
    "                    \"feFuncG\",\n" +
    "                    \"feFuncR\",\n" +
    "                    \"feGaussianBlur\",\n" +
    "                    \"feImage\",\n" +
    "                    \"feMerge\",\n" +
    "                    \"feMergeNode\",\n" +
    "                    \"feMorphology\",\n" +
    "                    \"feOffset\",\n" +
    "                    \"fePointLight\",\n" +
    "                    \"feSpecularLighting\",\n" +
    "                    \"feSpotLight\",\n" +
    "                    \"feTile\",\n" +
    "                    \"feTurbulence\",\n" +
    "                    \"filter\",\n" +
    "                    \"font\",\n" +
    "                    \"font-face\",\n" +
    "                    \"font-face-format\",\n" +
    "                    \"font-face-name\",\n" +
    "                    \"font-face-src\",\n" +
    "                    \"font-face-uri\",\n" +
    "                    \"foreignObject\",\n" +
    "                    \"g\",\n" +
    "                    \"glyph\",\n" +
    "                    \"glyphRef\",\n" +
    "                    \"hatch\",\n" +
    "                    \"hatchpath\",\n" +
    "                    \"hkern\",\n" +
    "                    \"image\",\n" +
    "                    \"line\",\n" +
    "                    \"linearGradient\",\n" +
    "                    \"marker\",\n" +
    "                    \"mask\",\n" +
    "                    \"mesh\",\n" +
    "                    \"meshgradient\",\n" +
    "                    \"meshpatch\",\n" +
    "                    \"meshrow\",\n" +
    "                    \"metadata\",\n" +
    "                    \"missing-glyph\",\n" +
    "                    \"mpath\",\n" +
    "                    \"path\",\n" +
    "                    \"pattern\",\n" +
    "                    \"polygon\",\n" +
    "                    \"polyline\",\n" +
    "                    \"radialGradient\",\n" +
    "                    \"rect\",\n" +
    "                    \"script\",\n" +
    "                    \"set\",\n" +
    "                    \"solidcolor\",\n" +
    "                    \"stop\",\n" +
    "                    \"style\",\n" +
    "                    \"svg\",\n" +
    "                    \"switch\",\n" +
    "                    \"symbol\",\n" +
    "                    \"text\",\n" +
    "                    \"textPath\",\n" +
    "                    \"title\",\n" +
    "                    \"tref\",\n" +
    "                    \"tspan\",\n" +
    "                    \"unknown\",\n" +
    "                    \"use\",\n" +
    "                    \"view\",\n" +
    "                    \"vkern\",\n" +
    "                ],\n" +
    "            };\n" +
    "            if (document.createElementNS) for (var ns in nsNames) {\n" +
    "                for (var n = 0; n < nsNames[ns].length; n++) {\n" +
    "                    add(document.createElementNS(ns, nsNames[ns][n]));\n" +
    "                }\n" +
    "            }\n" +
    "            var skips = [\n" +
    "                G.alert,\n" +
    "                G.back,\n" +
    "                G.blur,\n" +
    "                G.captureEvents,\n" +
    "                G.clearImmediate,\n" +
    "                G.clearInterval,\n" +
    "                G.clearTimeout,\n" +
    "                G.close,\n" +
    "                G.confirm,\n" +
    "                G.console,\n" +
    "                G.dump,\n" +
    "                G.fetch,\n" +
    "                G.find,\n" +
    "                G.focus,\n" +
    "                G.forward,\n" +
    "                G.getAttention,\n" +
    "                G.history,\n" +
    "                G.home,\n" +
    "                G.location,\n" +
    "                G.moveBy,\n" +
    "                G.moveTo,\n" +
    "                G.navigator,\n" +
    "                G.open,\n" +
    "                G.openDialog,\n" +
    "                G.print,\n" +
    "                G.process,\n" +
    "                G.prompt,\n" +
    "                G.resizeBy,\n" +
    "                G.resizeTo,\n" +
    "                G.setImmediate,\n" +
    "                G.setInterval,\n" +
    "                G.setTimeout,\n" +
    "                G.showModalDialog,\n" +
    "                G.sizeToContent,\n" +
    "                G.stop,\n" +
    "            ];\n" +
    "            var types = [];\n" +
    "            var interfaces = [\n" +
    "                \"beforeunloadevent\",\n" +
    "                \"compositionevent\",\n" +
    "                \"customevent\",\n" +
    "                \"devicemotionevent\",\n" +
    "                \"deviceorientationevent\",\n" +
    "                \"dragevent\",\n" +
    "                \"event\",\n" +
    "                \"events\",\n" +
    "                \"focusevent\",\n" +
    "                \"hashchangeevent\",\n" +
    "                \"htmlevents\",\n" +
    "                \"keyboardevent\",\n" +
    "                \"messageevent\",\n" +
    "                \"mouseevent\",\n" +
    "                \"mouseevents\",\n" +
    "                \"storageevent\",\n" +
    "                \"svgevents\",\n" +
    "                \"textevent\",\n" +
    "                \"touchevent\",\n" +
    "                \"uievent\",\n" +
    "                \"uievents\",\n" +
    "            ];\n" +
    "            var i = 0, full = false;\n" +
    "            var addEvent = document.createEvent ? function(type) {\n" +
    "                if (~indexOf(types, type)) return;\n" +
    "                types.push(type);\n" +
    "                for (var j = 0; j < interfaces.length; j++) try {\n" +
    "                    var event = document.createEvent(interfaces[j]);\n" +
    "                    event.initEvent(type, true, true);\n" +
    "                    add(event);\n" +
    "                } catch (e) {}\n" +
    "            } : function() {};\n" +
    "            var scanProperties = Object.getOwnPropertyNames ? function(o, fn) {\n" +
    "                var names = Object.getOwnPropertyNames(o);\n" +
    "                names.forEach(fn);\n" +
    "                for (var k in o) if (!~indexOf(names, k)) fn(k);\n" +
    "            } : function(o, fn) {\n" +
    "                for (var k in o) fn(k);\n" +
    "            };\n" +
    "            setTimeout(function next() {\n" +
    "                for (var j = 10; --j >= 0 && i < objs.length; i++) {\n" +
    "                    var o = objs[i];\n" +
    "                    var skip = ~indexOf(skips, o);\n" +
    "                    try {\n" +
    "                        scanProperties(o, function(k) {\n" +
    "                            if (!~indexOf(domprops, k)) domprops.push(k);\n" +
    "                            if (/^on/.test(k)) addEvent(k.slice(2));\n" +
    "                            if (!full) try {\n" +
    "                                add(o[k]);\n" +
    "                            } catch (e) {}\n" +
    "                        });\n" +
    "                    } catch (e) {}\n" +
    "                    if (skip || full) continue;\n" +
    "                    try {\n" +
    "                        add(o.__proto__);\n" +
    "                    } catch (e) {}\n" +
    "                    try {\n" +
    "                        add(o.prototype);\n" +
    "                    } catch (e) {}\n" +
    "                    try {\n" +
    "                        add(new o());\n" +
    "                    } catch (e) {}\n" +
    "                    try {\n" +
    "                        add(o());\n" +
    "                    } catch (e) {}\n" +
    "                }\n" +
    "                if (!full && objs.length > 20000) {\n" +
    "                    alert(objs.length);\n" +
    "                    full = true;\n" +
    "                }\n" +
    "                if (i < objs.length) {\n" +
    "                    setTimeout(next, 0);\n" +
    "                } else {\n" +
    "                    document.write('<pre>[\\n    \"' + domprops.sort().join('\",\\n    \"').replace(/&/g, \"&amp;\").replace(/</g, \"&lt;\") + '\"\\n]</pre>');\n" +
    "                }\n" +
    "            }, 0);\n" +
    "\n" +
    "            function add(o) {\n" +
    "                if (o) switch (typeof o) {\n" +
    "                case \"function\":\n" +
    "                case \"object\":\n" +
    "                    if (!~indexOf(objs, o)) objs.push(o);\n" +
    "                }\n" +
    "            }\n" +
    "\n" +
    "            function indexOf(list, value) {\n" +
    "                var j = list.length;\n" +
    "                while (--j >= 0) {\n" +
    "                    if (list[j] === value) break;\n" +
    "                }\n" +
    "                return j;\n" +
    "            }\n" +
    "        }(function() {\n" +
    "            return this;\n" +
    "        }());\n" +
    "    </script>\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('node_modules/vm-browserify/example/run/index.html',
    "<html>\n" +
    "  <head>\n" +
    "    <script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js\"></script>\n" +
    "    <script src=\"/bundle.js\"></script>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    result = <span id=\"res\"></span>\n" +
    "  </body>\n" +
    "</html>\n"
  );


  $templateCache.put('pages/aezeed/aezeed.html',
    "<h1>aezeed Cipher Seed Scheme</h1>\n" +
    "\n" +
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <h4 class=\"panel-title\">\n" +
    "      <a ng-click=\"vm.showExplanation = !vm.showExplanation\">Explicación</a>\n" +
    "    </h4>\n" +
    "  </div>\n" +
    "  <div class=\"panel-collapse collapse\" ng-class=\"{in: vm.showExplanation}\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      El esquema de semillas de cifrado aezeed (aezeed Cipher Seed Scheme), es un esquema para crear semillas versionadas para carteras de criptomonedas, basado en\n" +
    "      <a href=\"http://web.cs.ucdavis.edu/~rogaway/aez/\">aez</a>.<br/><br/>\n" +
    "      Este nuevo esquema se introdujo por primera vez con <a href=\"https://github.com/lightningnetwork/lnd\">lnd</a>, una de las implementaciones del software de monedero de la Lightning Network.\n" +
    "\n" +
    "      <h3>Links:</h3>\n" +
    "      <ul>\n" +
    "        <li><a href=\"http://web.cs.ucdavis.edu/~rogaway/aez/\">AEZ: Robust Authenticated Encryption</a></li>\n" +
    "        <li><a href=\"https://github.com/lightningnetwork/lnd\">Lightning Network Daemon</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"alert alert-warning\">\n" +
    "  <strong>ADVERTENCIA</strong>: No use las claves generadas por este simulador en un monedero real, ya que existe el riesgo de que estas puedan romperse, debido a la baja entropía.\n" +
    "</div>\n" +
    "\n" +
    "<h4>Generando mnemonica</h4>\n" +
    "<div class=\"well\">\n" +
    "  <form class=\"form-horizontal\">\n" +
    "\n" +
    "    <!-- aezeed parameter -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Parametro aezeed:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <div class=\"input-group-addon\">Version interna</div>\n" +
    "        <input class=\"form-control\"\n" +
    "               ng-model=\"vm.version\"\n" +
    "               ng-model-options=\"{debounce: 1000}\"\n" +
    "               ng-change=\"vm.generateSeed()\"\n" +
    "               type=\"number\">\n" +
    "        <div class=\"input-group-addon\">Nacimiento (días desde bloque genesis de BTC)</div>\n" +
    "        <input class=\"form-control\"\n" +
    "               ng-model=\"vm.birthday\"\n" +
    "               ng-model-options=\"{debounce: 1000}\"\n" +
    "               ng-change=\"vm.generateSeed()\"\n" +
    "               type=\"number\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- passphrase -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Contraseña:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\"\n" +
    "               ng-model=\"vm.passphrase\"\n" +
    "               ng-model-options=\"{debounce: 1000}\"\n" +
    "               ng-change=\"vm.generateSeed()\"\n" +
    "               type=\"{{vm.asPassword ? 'password' : 'text'}}\">\n" +
    "        <span class=\"input-group-btn\">\n" +
    "            <button class=\"btn btn-primary\" ng-click=\"vm.asPassword = !vm.asPassword\">\n" +
    "                {{vm.asPassword ? 'Mostrar' : 'Ocultar'}} clave\n" +
    "            </button>\n" +
    "        </span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- entropy hex -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Entropía y salto (hex):</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\"\n" +
    "               ng-model=\"vm.entropy\"\n" +
    "               ng-model-options=\"{debounce: 1000}\"\n" +
    "               ng-change=\"vm.generateSeed()\">\n" +
    "        <span class=\"input-group-btn\">\n" +
    "            <button class=\"btn btn-primary\" ng-click=\"vm.generateEntropy(); vm.generateSeed();\">\n" +
    "                Entropía aleatoria\n" +
    "            </button>\n" +
    "        </span>\n" +
    "        <input class=\"form-control\"\n" +
    "               ng-model=\"vm.salt\"\n" +
    "               ng-model-options=\"{debounce: 1000}\"\n" +
    "               ng-change=\"vm.generateSeed()\">\n" +
    "        <span class=\"input-group-btn\">\n" +
    "            <button class=\"btn btn-primary\" ng-click=\"vm.generateSalt(); vm.generateSeed();\">\n" +
    "                Salto aleatorio\n" +
    "            </button>\n" +
    "        </span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- mnemonic -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Mnemonica:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\"\n" +
    "               ng-class=\"{'well-error': vm.error}\"\n" +
    "               value=\"{{vm.mnemonic}}\"\n" +
    "               ng-readonly=\"true\">\n" +
    "        <span class=\"input-group-addon\" ng-if=\"vm.error\" class=\"well-error\"> {{vm.error}}</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- root key base58 -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">HD node root key base58:</label>\n" +
    "      <div class=\"col-sm-9 input-group as-block\">\n" +
    "        <input class=\"form-control\"\n" +
    "               style=\"width: 60%\"\n" +
    "               value=\"{{vm.nodeBase58}}\"\n" +
    "               ng-readonly=\"true\">\n" +
    "        <select ng-model=\"vm.network\"\n" +
    "                style=\"width: 40%\"\n" +
    "                ng-options=\"network.label for network in vm.networks\"\n" +
    "                ng-change=\"vm.formatBase58()\"\n" +
    "                class=\"form-control\">\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </form>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Decodificando mnemonica</h4>\n" +
    "<div class=\"well\">\n" +
    "  <form class=\"form-horizontal\">\n" +
    "\n" +
    "    <!-- mnemonic -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Mnemonica:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\"\n" +
    "               ng-model=\"vm.mnemonic2\"\n" +
    "               ng-model-options=\"{debounce: 1000}\"\n" +
    "               ng-class=\"{'well-error': vm.error2}\"\n" +
    "               ng-change=\"vm.fromMnemonic()\">\n" +
    "        <span class=\"input-group-addon\" ng-if=\"!vm.error2\">&lt;-- pegue su mnemonica aquí para decodificar</span>\n" +
    "        <span class=\"input-group-addon well-error\" ng-if=\"vm.error2\"> {{vm.error2}}</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- passphrase -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Clave:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\"\n" +
    "               ng-model=\"vm.passphrase2\"\n" +
    "               ng-model-options=\"{debounce: 1000}\"\n" +
    "               ng-change=\"vm.fromMnemonic()\"\n" +
    "               type=\"{{vm.asPassword ? 'password' : 'text'}}\">\n" +
    "        <span class=\"input-group-btn\">\n" +
    "            <button class=\"btn btn-primary\" ng-click=\"vm.asPassword = !vm.asPassword\">\n" +
    "                {{vm.asPassword ? 'Mostrar' : 'Ocultar'}} clave\n" +
    "            </button>\n" +
    "        </span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- aezeed parameter -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Parametro aezeed:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <div class=\"input-group-addon\">Versión interna</div>\n" +
    "        <input class=\"form-control\"\n" +
    "               value=\"{{vm.decoded.version}}\"\n" +
    "               ng-readonly=\"true\">\n" +
    "        <div class=\"input-group-addon\">Nacimiento (días desde bloque genesis BTC)</div>\n" +
    "        <input class=\"form-control\"\n" +
    "               value=\"{{vm.decoded.birthday}}\"\n" +
    "               ng-readonly=\"true\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <!-- entropy hex -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\"></label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <div class=\"input-group-addon\">Entropía</div>\n" +
    "        <input class=\"form-control\"\n" +
    "               value=\"{{vm.decoded.entropy}}\"\n" +
    "               ng-readonly=\"true\">\n" +
    "        <div class=\"input-group-addon\">Salto</div>\n" +
    "        <input class=\"form-control\"\n" +
    "               value=\"{{vm.decoded.salt}}\"\n" +
    "               ng-readonly=\"true\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- root key base58 -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">HD node root key base58:</label>\n" +
    "      <div class=\"col-sm-9 input-group as-block\">\n" +
    "        <input class=\"form-control\"\n" +
    "               style=\"width: 60%\"\n" +
    "               value=\"{{vm.decoded.nodeBase58}}\"\n" +
    "               ng-readonly=\"true\">\n" +
    "        <select ng-model=\"vm.network2\"\n" +
    "                style=\"width: 40%\"\n" +
    "                ng-options=\"network.label for network in vm.networks\"\n" +
    "                ng-change=\"vm.fromEntropy()\"\n" +
    "                class=\"form-control\">\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </form>\n" +
    "</div>\n"
  );


  $templateCache.put('pages/bitcoin-block/bitcoin-block.html',
    "<h1>Bitcoin Block Parser</h1>\n" +
    "\n" +
    "<div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "        <h4 class=\"panel-title\">\n" +
    "            <a ng-click=\"vm.showExplanation = !vm.showExplanation\">Explicación</a>\n" +
    "        </h4>\n" +
    "    </div>\n" +
    "    <div class=\"panel-collapse collapse\" ng-class=\"{in: vm.showExplanation}\">\n" +
    "        <div class=\"panel-body\">\n" +
    "            Examina la información de los bloques y transacciones de la red Bitcoin.\n" +
    "\n" +
    "            <h3>Más info:</h3>\n" +
    "            <ul>\n" +
    "                <li><a href=\"https://blockexplorer.com/api-ref\">Blockchain Explorer API reference</a></li>\n" +
    "                <li><a href=\"https://bitcoinjs.org/\">BitcoinJS</a></li>\n" +
    "                <li><a href=\"https://github.com/bitcoinjs/bitcoinjs-lib\">BitcoinJS GitHub repo</a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Block data</h4>\n" +
    "<div class=\"well\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-4 control-label\">API URL:</label>\n" +
    "            <div class=\"col-sm-8 input-group\">\n" +
    "                <select ng-model=\"vm.selectedBlockSource\"\n" +
    "                        ng-change=\"vm.downloadBlock()\"\n" +
    "                        ng-options=\"source.label for source in vm.sources\"\n" +
    "                        class=\"form-control\">\n" +
    "                </select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-4 control-label\" for=\"hash\">Hash del bloque a examinar:</label>\n" +
    "            <div class=\"col-sm-8 input-group\">\n" +
    "                <input id=\"hash\"\n" +
    "                       class=\"form-control\"\n" +
    "                       ng-model=\"vm.hash\"\n" +
    "                       ng-change=\"vm.downloadBlock()\"\n" +
    "                       ng-class=\"{'well-error': vm.error}\">\n" +
    "                <span class=\"input-group-addon\" ng-if=\"!vm.error\">&lt;-- pegar aquí para examinar</span>\n" +
    "                <span class=\"input-group-addon well-error\" ng-if=\"vm.error\"> {{vm.error}}</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"col-sm-8 col-sm-offset-4\">\n" +
    "                Cargar ejemplos (espere un momento a la carga):\n" +
    "                <ul>\n" +
    "                    <li>\n" +
    "                        <a ng-click=\"vm.hash = '000000000000000003d79e6973863cdb24ac6f3ddd526f61a8ff4fb684db1e9f'; vm.downloadBlock();\">\n" +
    "                            Block #371667, 51 transacciones\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                        <a ng-click=\"vm.hash = '000000000000000006a62f827dd0a2caba98c178bebb175ec1fcd250e1a0159c'; vm.downloadBlock();\">\n" +
    "                            Block #371610, 168 transacciones\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                        <a ng-click=\"vm.hash = '0000000000000000009a2160814712117b1f07db54887dbbb5de02173d398db3'; vm.downloadBlock();\">\n" +
    "                            Block #496321, 300 transacciones, SegWit\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-4 control-label\" for=\"raw\">Valor Raw hex:</label>\n" +
    "            <div class=\"col-sm-8 input-group\">\n" +
    "        <textarea id=\"raw\"\n" +
    "                  rows=\"10\"\n" +
    "                  ng-model=\"vm.raw\"\n" +
    "                  ng-trim=\"false\"\n" +
    "                  ng-change=\"vm.parseBlock()\"\n" +
    "                  class=\"form-control\"\n" +
    "                  ng-class=\"{'well-error': vm.error}\">\n" +
    "          </textarea>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-4 control-label\" for=\"json\">\n" +
    "                <a ng-click=\"vm.showDecoded = !vm.showDecoded\">Decodificar como JSON:</a>\n" +
    "            </label>\n" +
    "            <div class=\"col-sm-8 input-group\" ng-if=\"vm.showDecoded\">\n" +
    "                <textarea id=\"json\" rows=\"20\" ng-readonly=\"true\" class=\"form-control\">{{vm.decodedBlock | json}}</textarea>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-8 input-group\" ng-if=\"!vm.showDecoded\">\n" +
    "                <textarea id=\"json\" rows=\"1\" ng-readonly=\"true\"\n" +
    "                          class=\"form-control\">(oculto por razones de rendimiento, clic para mostrar)</textarea>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-4 control-label\" for=\"json\">Tamaño del bloque en nodos pre-SegWit:</label>\n" +
    "            <div class=\"col-sm-8 input-group\">\n" +
    "                <input ng-readonly=\"true\" value=\"{{vm.block.legacySize}}\" class=\"form-control\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-4 control-label\" for=\"json\">Tamaño del bloque con SegWit:</label>\n" +
    "            <div class=\"col-sm-8 input-group\">\n" +
    "                <input ng-readonly=\"true\" value=\"{{vm.block.byteLength()}}\" class=\"form-control\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"col-sm-4 control-label\" for=\"json\">Peso del Block:</label>\n" +
    "            <div class=\"col-sm-8 input-group\">\n" +
    "                <input ng-readonly=\"true\" value=\"{{vm.block.weight}}\" class=\"form-control\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-show=\"!vm.error && vm.decodedBlock && vm.decodedBlock.transactions.length > 0\">\n" +
    "    <h4>Merkle Tree</h4>\n" +
    "    <div id=\"merkleTree\" class=\"row row-horizon\" ng-show=\"vm.decodedBlock.transactions.length <= 200\"></div>\n" +
    "    <div class=\"tooltip\" id=\"tooltip\"></div>\n" +
    "    <span ng-if=\"vm.decodedBlock.transactions.length > 300\">\n" +
    "    Solo se muestran 300 transacciones por razones de rendimiento\n" +
    "  </span>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"!vm.error && vm.decodedBlock && vm.decodedBlock.transactions.length > 0\">\n" +
    "    <div ng-repeat=\"tx in vm.decodedBlock.transactions\">\n" +
    "        <h4 ng-init=\"origTx = vm.block.transactions[$index]\">TX {{$index}}</h4>\n" +
    "        <div class=\"well\">\n" +
    "            <form class=\"form-horizontal\">\n" +
    "                <!-- hash -->\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"col-sm-3 control-label\" for=\"raw\">Hash calculado:</label>\n" +
    "                    <div class=\"col-sm-9 input-group\">\n" +
    "                        <input ng-readonly=\"true\" value=\"{{::origTx.getHash().toString('hex')}}\" class=\"form-control\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <!-- ID -->\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"col-sm-3 control-label\" for=\"raw\">TX ID:</label>\n" +
    "                    <div class=\"col-sm-9 input-group\">\n" +
    "                        <input ng-readonly=\"true\" value=\"{{::origTx.getId().toString('hex')}}\" class=\"form-control\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <!-- misc -->\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"col-sm-3 control-label\" for=\"raw\">Misc:</label>\n" +
    "                    <div class=\"col-sm-9 input-group\">\n" +
    "            <span class=\"form-control\" ng-readonly=\"true\">\n" +
    "                Version: {{::tx.version}}, Locktime: {{::tx.locktime}}, coinbase TX: {{::origTx.isCoinbase()}}, peso: {{::origTx.weight()}}\n" +
    "            </span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <!-- inputs -->\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"col-sm-3 control-label\" for=\"raw\">Entradas:</label>\n" +
    "                    <div class=\"col-sm-9 input-group\">\n" +
    "                        <div class=\"well\" ng-repeat=\"input in ::tx.ins\">\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <div class=\"input-group\">\n" +
    "                                    <span class=\"input-group-addon\">TX ID de Referencia:</span>\n" +
    "                                    <input ng-readonly=\"true\" value=\"{{::vm.getTxId(input.hash)}}\" class=\"form-control\">\n" +
    "                                </div>\n" +
    "                                <div class=\"input-group\">\n" +
    "                                    <span class=\"input-group-addon\">Indice de salidas TX de referencias:</span>\n" +
    "                                    <input ng-readonly=\"true\" value=\"{{::input.index}}\" class=\"form-control\">\n" +
    "                                    <span class=\"input-group-addon\">Secuencia de números:</span>\n" +
    "                                    <input ng-readonly=\"true\" value=\"{{::input.sequence.toString(16)}}\" class=\"form-control\">\n" +
    "                                </div>\n" +
    "                                <div class=\"input-group\" ng-if=\"!origTx.isCoinbase()\">\n" +
    "                                    <span class=\"input-group-addon\">Bitcoin Script:</span>\n" +
    "                                    <input ng-readonly=\"true\" value=\"{{::input.script}}\" class=\"form-control\">\n" +
    "                                </div>\n" +
    "                                <div class=\"input-group\" ng-if=\"origTx.isCoinbase()\">\n" +
    "                                    <span class=\"input-group-addon\">Datos:</span>\n" +
    "                                    <input ng-readonly=\"true\" value=\"{{::vm.getRawString(input.script)}}\" class=\"form-control\">\n" +
    "                                </div>\n" +
    "                                <div class=\"input-group\" ng-if=\"origTx.hasWitnesses()\">\n" +
    "                                    <span class=\"input-group-addon\">Witness:</span>\n" +
    "                                    <input ng-readonly=\"true\" value=\"{{::input.witness}}\" class=\"form-control\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <!-- outputs -->\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"col-sm-3 control-label\" for=\"raw\">Salidas:</label>\n" +
    "                    <div class=\"col-sm-9 input-group\">\n" +
    "                        <div class=\"well\" ng-repeat=\"output in ::tx.outs\">\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <div class=\"input-group\">\n" +
    "                                    <span class=\"input-group-addon\">Valor (Raw/Satoshis):</span>\n" +
    "                                    <input ng-readonly=\"true\" value=\"{{::output.value}}\" class=\"form-control\">\n" +
    "                                    <span class=\"input-group-addon\">Valor (BTCs):</span>\n" +
    "                                    <input ng-readonly=\"true\" value=\"{{::output.value / 100000000}}\" class=\"form-control\">\n" +
    "                                </div>\n" +
    "                                <div class=\"input-group\">\n" +
    "                                    <span class=\"input-group-addon\">Bitcoin Script:</span>\n" +
    "                                    <input ng-readonly=\"true\" value=\"{{::output.script}}\" class=\"form-control\">\n" +
    "                                </div>\n" +
    "                                <div class=\"input-group\" ng-if=\"::vm.isP2PKH(origTx.outs[$index].script)\">\n" +
    "                                    <span class=\"input-group-addon\">Dirección:</span>\n" +
    "                                    <input ng-readonly=\"true\"\n" +
    "                                           value=\"{{::$root.hexPubKeyToBitcoinAddr(vm.getP2PKH(origTx.outs[$index].script))}}\"\n" +
    "                                           class=\"form-control\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('pages/ecc/ecc.html',
    "<h1>Criptografía de Curva Eliptica (ECC) / ECDSA</h1>\n" +
    "\n" +
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <h4 class=\"panel-title\">\n" +
    "      <a ng-click=\"vm.showExplanation = !vm.showExplanation\">Explicación</a>\n" +
    "    </h4>\n" +
    "  </div>\n" +
    "  <div class=\"panel-collapse collapse\" ng-class=\"{in: vm.showExplanation}\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      El algoritmo ECDSA funciona mediante un mecanismo de criptografía llamado, criptografía asimétrica.\n" +
    "      Este sistema de firmado, genera dos claves que reciben el nombre de clave privada y clave pública.\n" +
    "      Ambas claves están relacionadas por una compleja operación matemática realizada sobre una función de curva elíptica.\n" +
    "\n" +
    "      <br><br>Bajo este esquema de funcionamiento, ECDSA garantiza en primera instancia lo siguiente:\n" +
    "      \n" +
    "      <ul>\n" +
    "        <li>Firmas únicas e irrepetibles para cada conjunto de generación de claves privadas y públicas.</li>\n" +
    "        <li>La imposibilidad práctica de falsificar las firmas digitales. Esto es así porque la potencia computacional necesaria para ello, está fuera de los límites actuales.</li>\n" +
    "        <li>Gracias a estas dos características, ECDSA se considera un estándar seguro para desplegar sistemas de firmas digitales. </li>\n" +
    "      </ul>\n" +
    "\n" +
    "      <h3>Más info:</h3>\n" +
    "      <ul>\n" +
    "        <li><a href=\"https://academy.bit2me.com/que-es-ecdsa-curva-eliptica/\"> Bit2Me Academy - ¿Qué es el algoritmo de firma ECDSA?</a></li>\n" +
    "        <li><a href=\"https://bitcoinjs.org/\">BitcoinJS</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"alert alert-warning\">\n" +
    "  <strong>Advertencia</strong>: No use las claves generadas por este simulador en un monedero real, ya que existe el riesgo de que estas puedan romperse, debido a la baja entropía.\n" +
    "</div>\n" +
    "\n" +
    "<h4>Par de claves de Curva Elíptica (ECC)</h4>\n" +
    "<div class=\"well\">\n" +
    "  <form class=\"form-horizontal\">\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-4 control-label\">Clave privada (decimal):</label>\n" +
    "      <div class=\"col-sm-8 input-group\">\n" +
    "        <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.privKeyDecimal.toString('10')}}\">\n" +
    "        <span class=\"input-group-btn\">\n" +
    "          <button class=\"btn btn-primary\" ng-click=\"vm.newPrivateKey()\">Generar nueva</button>\n" +
    "        </span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-4 control-label\">Clave privada (hex):</label>\n" +
    "      <div class=\"col-sm-8 input-group\">\n" +
    "        <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.keyPair.privateKey.toString('hex')}}\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-4 control-label\">Clave pública (decimal):</label>\n" +
    "      <div class=\"col-sm-8 input-group\">\n" +
    "        <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.pubKeyDecimal}}\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-4 control-label\">Clave pública (hex):</label>\n" +
    "      <div class=\"col-sm-8 input-group\">\n" +
    "        <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.pubKey.toString('hex')}}\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-4 control-label\">Formato de clave para la red:</label>\n" +
    "      <div class=\"col-sm-8 input-group\">\n" +
    "        <select ng-model=\"vm.network\"\n" +
    "                ng-change=\"vm.formatKeyForNetwork()\"\n" +
    "                ng-options=\"network.label for network in vm.networks\"\n" +
    "                class=\"form-control\">\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-4 control-label\">\n" +
    "        <a ng-click=\"vm.showWifCompressed = !vm.showWifCompressed\">Clave privada (formato WIF, comprimida):</a>\n" +
    "      </label>\n" +
    "      <div class=\"col-sm-8 input-group\">\n" +
    "        <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.keyPair.wif}}\">\n" +
    "      </div>\n" +
    "      <div ng-show=\"vm.showWifCompressed\" class=\"col-sm-offset-4 col-sm-8 qr-code\" id=\"qrPrivCompressed\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"wifUncompressed\" class=\"col-sm-4 control-label\">\n" +
    "        <a ng-click=\"vm.showWifUncompressed = !vm.showWifUncompressed\">Clave privada (formato WIF, descomprimida):</a>\n" +
    "      </label>\n" +
    "      <div class=\"col-sm-8 input-group\">\n" +
    "        <input id=\"wifUncompressed\"\n" +
    "               ng-model=\"vm.keyPairUncompressed.wif\"\n" +
    "               ng-change=\"vm.importFromWif()\"\n" +
    "               ng-class=\"{'well-error': vm.error}\"\n" +
    "               class=\"form-control\"><br/>\n" +
    "        <span class=\"input-group-addon\" ng-if=\"!vm.error\">&lt;-- pegue aquí la clave en formato WIF</span>\n" +
    "        <span class=\"input-group-addon well-error\" ng-if=\"vm.error\"> {{vm.error}}</span>\n" +
    "      </div>\n" +
    "      <div ng-show=\"vm.showWifUncompressed\" class=\"col-sm-offset-4 col-sm-8 qr-code\" id=\"qrPrivUncompressed\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-4 control-label\">\n" +
    "        <a ng-click=\"vm.showPubkey = !vm.showPubkey\">Dirección (P2PKH) :</a>\n" +
    "      </label>\n" +
    "      <div class=\"col-sm-8 input-group\">\n" +
    "        <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.keyPair.address}}\">\n" +
    "      </div>\n" +
    "      <div ng-show=\"vm.showPubkey\" class=\"col-sm-offset-4 col-sm-8 qr-code\" id=\"qrPubkey\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\" ng-if=\"vm.network.config.bech32\">\n" +
    "      <label class=\"col-sm-4 control-label\">Dirección SegWit v0 P2SH-P2WPKH:</label>\n" +
    "      <div class=\"col-sm-8 input-group\">\n" +
    "        <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.keyPair.nestedP2WPKHAddress}}\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\" ng-if=\"vm.network.config.bech32\">\n" +
    "      <label class=\"col-sm-4 control-label\">Dirección SegWit v0 bech32 P2WPKH:</label>\n" +
    "      <div class=\"col-sm-8 input-group\">\n" +
    "        <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.keyPair.P2WPKHAddress}}\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\" ng-if=\"vm.network.config.bech32\">\n" +
    "      <label class=\"col-sm-4 control-label\">Dirección SegWit v1 bech32m P2TR:</label>\n" +
    "      <div class=\"col-sm-8 input-group\">\n" +
    "        <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.keyPair.P2TRAddress}}\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Algoritmo de Firma Digital de Curva Elíptica (ECDSA): Firmas mensaje</h4>\n" +
    "<div class=\"well\">\n" +
    "  <form class=\"form-horizontal\">\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"message\" class=\"col-sm-4 control-label\">Mensaje a firmar:</label>\n" +
    "      <div class=\"col-sm-8 input-group\">\n" +
    "        <input id=\"message\" ng-model=\"vm.message\" ng-change=\"vm.signMessage()\" class=\"form-control\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-4 control-label\">Hash SHA-256 del mensaje:</label>\n" +
    "      <div class=\"col-sm-8 no-left-padding\">\n" +
    "        <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.messageHash.toString('hex')}}\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-4 control-label\">Firma:</label>\n" +
    "      <div class=\"col-sm-8 no-left-padding\">\n" +
    "        <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.signature}}\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Algoritmo de Firma Digital de Curva Elíptica (ECDSA): Verificar firma</h4>\n" +
    "<div class=\"well\" ng-class=\"{'well-success': vm.signatureValid, 'well-error': !vm.signatureValid}\">\n" +
    "  <form class=\"form-horizontal\">\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"messageHash\" class=\"col-sm-4 control-label\">Hash del mensaje:</label>\n" +
    "      <div class=\"col-sm-8 input-group\">\n" +
    "        <input id=\"messageHash\"\n" +
    "               ng-model=\"vm.messageHashToVerify\"\n" +
    "               ng-change=\"vm.verifySignature()\"\n" +
    "               class=\"form-control\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"signature\" class=\"col-sm-4 control-label\">Firma:</label>\n" +
    "      <div class=\"col-sm-8 no-left-padding\">\n" +
    "        <input id=\"signature\"\n" +
    "               ng-model=\"vm.signatureToVerify\"\n" +
    "               ng-change=\"vm.verifySignature()\"\n" +
    "               class=\"form-control\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Multiplo ECC</h4>\n" +
    "<div class=\"well\">\n" +
    "  <form class=\"form-horizontal\">\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"multiplicand\" class=\"col-sm-4 control-label\">Multiplicando:</label>\n" +
    "      <div class=\"col-sm-8 input-group\">\n" +
    "        <input id=\"multiplicand\"\n" +
    "               ng-model=\"vm.eccMultiplicand\"\n" +
    "               ng-change=\"vm.eccMultiply()\"\n" +
    "               class=\"form-control\">\n" +
    "      </div>\n" +
    "      <div class=\"col-sm-offset-4 input-group\">\n" +
    "        <div class=\"input-group-addon\">Multiplicando de la clave privada:</div>\n" +
    "        <div class=\"input-group-addon\">\n" +
    "          <input type=\"checkbox\"\n" +
    "                 ng-model=\"vm.multiplicandPrivKey\"\n" +
    "                 ng-change=\"vm.eccMultiply()\">\n" +
    "        </div>\n" +
    "        <input class=\"form-control no-border\"\n" +
    "               ng-readonly=\"true\"\n" +
    "               type=\"text\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"multiplier\" class=\"col-sm-4 control-label\">Multiplicador:</label>\n" +
    "      <div class=\"col-sm-8 no-left-padding\">\n" +
    "        <input id=\"multiplier\"\n" +
    "               ng-model=\"vm.eccMultiplier\"\n" +
    "               ng-change=\"vm.eccMultiply()\"\n" +
    "               class=\"form-control\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-4 control-label\">Resultado:</label>\n" +
    "      <div class=\"col-sm-8 no-left-padding\">\n" +
    "        <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.eccResult}}\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n"
  );


  $templateCache.put('pages/hd-wallet/hd-wallet.html',
    "<h1>Monederos HD (BIP32/38/39/44/49/84)</h1>\n" +
    "\n" +
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <h4 class=\"panel-title\">\n" +
    "      <a ng-click=\"vm.showExplanation = !vm.showExplanation\">Explicación</a>\n" +
    "    </h4>\n" +
    "  </div>\n" +
    "  <div class=\"panel-collapse collapse\" ng-class=\"{in: vm.showExplanation}\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      Las Hierarchical Deterministic Wallets o como se conocen comúnmente HD Wallets, son monederos de criptomonedas que emplean una única semilla de 12, 18 o 24 palabras claves, con la que pueden generar un número ilimitado de direcciones. \n" +
    "      <br><br>Esto se realiza de forma automática, jerárquica y secuencial. No obstante, recordar la semilla es un tanto complicado ya que se trata de una cadena de caracteres alfanuméricos ilegibles, por ello, se usan los códigos mnemotécnicos. Que convierten esta semilla en palabras entendibles para nosotros, por lo que realizar una copia de seguridad es mucho más fácil y práctico.\n" +
    "      <br><br>Así, la implementación de este tipo de wallets resuelve la problemática presentada al inicio de tener que realizar tantas copias de seguridad y generar direcciones manualmente. Ahora con las HD Wallets solo es necesario que se haga un respaldo de la semilla, que está basada en un Protocolo de Mejora de Bitcoin (BIP), conocido como el BIP 32.\n" +
    "      Matemáticamente, el BIP 32 le permite a la wallet generar, a partir de la semilla, una estructura jerárquica de claves privadas en forma de árbol. Así, cuando un dispositivo se pierda o dañe, es posible restaurar la wallet con todas las claves privadas del árbol, y por supuesto con todos los fondos, con la copia de seguridad de la semilla. Y esta es la maravilla de implementar esta tecnología.\n" +
    "\n" +
    "      <h3>Más información:</h3>\n" +
    "      <ul>\n" +
    "        <li><a href=\"https://academy.bit2me.com/que-son-las-hd-wallets/\">Bit2Me Academy - ¿Qué son los monederos HD?</a></li>\n" +
    "        <li><a href=\"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki\">Bitcoin - BIP - 0032</a></li>\n" +
    "        <li><a href=\"https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki\">Bitcoin - BIP - 0038</a></li>\n" +
    "        <li><a href=\"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki\">Bitcoin - BIP - 0039</a></li>\n" +
    "        <li><a href=\"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki\">Bitcoin - BIP - 0044</a></li>\n" +
    "        <li><a href=\"https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki\">Bitcoin - BIP - 0049</a></li>\n" +
    "        <li><a href=\"https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki\">Bitcoin - BIP - 0084</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"alert alert-warning\">\n" +
    "  <strong>Advertencia</strong>: No use las claves generadas por este simulador en un monedero real, ya que existe el riesgo de que estas puedan romperse, debido a la baja entropía.\n" +
    "</div>\n" +
    "\n" +
    "<h4>BIP39 mnemonica para BIP32 root key</h4>\n" +
    "<div class=\"well\">\n" +
    "  <form class=\"form-horizontal\">\n" +
    "\n" +
    "    <!-- mnemonic parameter -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Extensión de Seed:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <select class=\"form-control\"\n" +
    "                ng-model=\"vm.mnemonicLength\"\n" +
    "                ng-options=\"l.label for l in vm.seedLengths\"\n" +
    "                ng-change=\"vm.newSeed()\">\n" +
    "        </select>\n" +
    "        <span class=\"input-group-btn\">\n" +
    "          <button class=\"btn btn-primary\" ng-click=\"vm.newSeed()\">Generar nueva</button>\n" +
    "        </span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- mnemonic -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Seed Mnemonica (BIP39):</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\"\n" +
    "               ng-model=\"vm.mnemonic\"\n" +
    "               ng-change=\"vm.fromMnemonic()\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- passphrase -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Clave:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\"\n" +
    "               ng-model=\"vm.passphrase\"\n" +
    "               ng-change=\"vm.fromMnemonic()\"\n" +
    "               type=\"{{vm.asPassword ? 'password' : 'text'}}\">\n" +
    "        <span class=\"input-group-btn\">\n" +
    "            <button class=\"btn btn-primary\" ng-click=\"vm.asPassword = !vm.asPassword\">\n" +
    "                {{vm.asPassword ? ' Mostrar' : 'Ocultar'}} clave\n" +
    "            </button>\n" +
    "        </span>\n" +
    "        <div class=\"input-group-addon\">Método</div>\n" +
    "        <select ng-model=\"vm.strenghtening\"\n" +
    "                ng-change=\"vm.fromMnemonic()\"\n" +
    "                ng-options=\"s.label for s in vm.strenghteningMethods\"\n" +
    "                class=\"form-control\">\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- seed hex -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Seed hex:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\"\n" +
    "               ng-model=\"vm.seedHex\"\n" +
    "               ng-change=\"vm.fromHexSeed()\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- root key base58 -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">HD node root key (base58):</label>\n" +
    "      <div class=\"col-sm-9 input-group as-block\">\n" +
    "        <input class=\"form-control\"\n" +
    "               style=\"width: 60%\"\n" +
    "               ng-model=\"vm.nodeBase58\"\n" +
    "               ng-class=\"{'well-error': vm.error}\"\n" +
    "               ng-change=\"vm.fromBase58Seed()\">\n" +
    "        <span class=\"input-group-addon\" ng-if=\"!vm.error\" style=\"width: 20%\">&lt;-- pegue aquí para importar.</span>\n" +
    "        <span class=\"input-group-addon well-error\" ng-if=\"vm.error\" style=\"width: 20%\"> {{vm.error}}</span>\n" +
    "        <select ng-model=\"vm.network\"\n" +
    "                style=\"width: 20%\"\n" +
    "                ng-options=\"network.label for network in vm.networks\"\n" +
    "                ng-change=\"vm.fromMnemonic()\"\n" +
    "                class=\"form-control\">\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- priv key WIF -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Clave privada (formato WIF, comprimida):</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\"\n" +
    "               value=\"{{vm.node.toWIF()}}\"\n" +
    "               ng-readonly=\"true\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- extended pubkey -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Clave pública extendida (base58):</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\"\n" +
    "               value=\"{{vm.publicKeyWif}}\"\n" +
    "               ng-readonly=\"true\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <!-- address -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Dirección P2PKH:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\"\n" +
    "               value=\"{{vm.address}}\"\n" +
    "               ng-readonly=\"true\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Derivación BIP32/44/49/84/341</h4>\n" +
    "<div class=\"well\">\n" +
    "  <form class=\"form-horizontal\">\n" +
    "\n" +
    "    <!-- BIP selection -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">BIP:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <select ng-model=\"vm.selectedBip\"\n" +
    "                ng-options=\"bip.label for bip in vm.bips\"\n" +
    "                ng-change=\"vm.fromNode()\"\n" +
    "                class=\"form-control\">\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- derive -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">BIP{{vm.selectedBip.bip}} parametros para derivación:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <div class=\"input-group-addon\" ng-if=\"vm.selectedBip.hasCoinType\">Tipo de moneda</div>\n" +
    "        <select ng-if=\"vm.selectedBip.hasCoinType\"\n" +
    "                ng-model=\"vm.coinType\"\n" +
    "                ng-options=\"coin.label for coin in vm.coinTypes\"\n" +
    "                ng-change=\"vm.fromNode()\"\n" +
    "                class=\"form-control\">\n" +
    "        </select>\n" +
    "        <div class=\"input-group-addon\">Cuenta</div>\n" +
    "        <input class=\"form-control\"\n" +
    "               ng-model=\"vm.account\"\n" +
    "               ng-change=\"vm.calculatePath()\"\n" +
    "               min=\"0\"\n" +
    "               max=\"2147483647\"\n" +
    "               type=\"number\">\n" +
    "        <div class=\"input-group-addon\">Cambio</div>\n" +
    "        <input class=\"form-control\"\n" +
    "               ng-model=\"vm.change\"\n" +
    "               ng-change=\"vm.calculatePath()\"\n" +
    "               min=\"0\"\n" +
    "               max=\"2147483647\"\n" +
    "               type=\"number\">\n" +
    "        <div class=\"input-group-addon\">Indice</div>\n" +
    "        <input class=\"form-control\"\n" +
    "               ng-model=\"vm.index\"\n" +
    "               ng-change=\"vm.calculatePath()\"\n" +
    "               min=\"0\"\n" +
    "               max=\"2147483647\"\n" +
    "               type=\"number\">\n" +
    "      </div>\n" +
    "      <div class=\"col-sm-offset-3 col-sm-9 input-group\">\n" +
    "        <div class=\"input-group-addon\">Path</div>\n" +
    "        <input class=\"form-control\"\n" +
    "               ng-model=\"vm.path\"\n" +
    "               ng-change=\"vm.fromPath()\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- derived key base58 -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Clave derivada base58:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\"\n" +
    "               value=\"{{vm.derivedKey.toBase58()}}\"\n" +
    "               ng-readonly=\"true\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- priv key WIF -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Clave privada (formato WIF, comprimida):</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\"\n" +
    "               value=\"{{vm.derivedKey.toWIF()}}\"\n" +
    "               ng-readonly=\"true\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- p2pkh address -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Dirección P2PKH:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\"\n" +
    "               value=\"{{vm.derivedKey.address}}\"\n" +
    "               ng-readonly=\"true\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- SegWit v0 p2wpkh -->\n" +
    "    <div class=\"form-group\" ng-if=\"vm.network.config.bech32\">\n" +
    "      <label class=\"col-sm-3 control-label\">Dirección SegWit v0 P2SH-P2WPKH:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.derivedKey.nestedP2WPKHAddress}}\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- SegWit v0 native p2wpkh -->\n" +
    "    <div class=\"form-group\" ng-if=\"vm.network.config.bech32\">\n" +
    "      <label class=\"col-sm-3 control-label\">Dirección nativa v0 SegWit bech32 P2WPKH:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.derivedKey.P2WPKHAddress}}\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- SegWit v1 native p2tr -->\n" +
    "    <div class=\"form-group\" ng-if=\"vm.network.config.bech32\">\n" +
    "      <label class=\"col-sm-3 control-label\">Dirección nativa v1 SegWit bech32m P2TR:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.derivedKey.P2TRAddress}}\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Derivación personalizada BIP32</h4>\n" +
    "<div class=\"well\">\n" +
    "  <form class=\"form-horizontal\">\n" +
    "\n" +
    "    <!-- parent key -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Clave padre base58:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\"\n" +
    "               ng-model=\"vm.customParentBase58\"\n" +
    "               ng-class=\"{'well-error': vm.customParentError}\"\n" +
    "               ng-change=\"vm.fromCustomParent()\">\n" +
    "        <span class=\"input-group-addon\" ng-if=\"!vm.customParentError\">&lt;-- pegar aquí para importar</span>\n" +
    "        <span class=\"input-group-addon well-error\" ng-if=\"vm.customParentError\"> {{vm.customParentError}}</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- derive -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Path de derivación personalizada:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\"\n" +
    "               ng-model=\"vm.customPath\"\n" +
    "               ng-change=\"vm.fromCustomPath()\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- derived key base58 -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Clave derivada base58:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\"\n" +
    "               value=\"{{vm.customDerivedKey.toBase58()}}\"\n" +
    "               ng-readonly=\"true\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- priv key WIF -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Clave privada (formato WIF, comprimida):</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\"\n" +
    "               value=\"{{vm.customDerivedKey.toWIF()}}\"\n" +
    "               ng-readonly=\"true\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- p2pkh address -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Dirección P2PKH:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\"\n" +
    "               value=\"{{vm.customDerivedKey.address}}\"\n" +
    "               ng-readonly=\"true\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- SegWit p2wpkh -->\n" +
    "    <div class=\"form-group\" ng-if=\"vm.network.config.bech32\">\n" +
    "      <label class=\"col-sm-3 control-label\">Dirección SegWit P2SH-P2WPKH:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.customDerivedKey.nestedP2WPKHAddress}}\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- SegWit native p2wpkh -->\n" +
    "    <div class=\"form-group\" ng-if=\"vm.network.config.bech32\">\n" +
    "      <label class=\"col-sm-3 control-label\">Dirección nativa SegWit bech32 P2WPKH:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.customDerivedKey.P2WPKHAddress}}\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- SegWit v1 native P2TR -->\n" +
    "    <div class=\"form-group\" ng-if=\"vm.network.config.bech32\">\n" +
    "      <label class=\"col-sm-3 control-label\">Dirección SegWit v1 bech32m P2TR:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.customDerivedKey.P2TRAddress}}\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n"
  );


  $templateCache.put('pages/intro/intro.html',
    "<h1>Simulador Criptográfico</h1>\n" +
    "\n" +
    "Este es un sencillo simulador criptográfico capaz de usar las principales primitivas criptográficas de BTC y Lightning Network. \n" +
    "La web ofrece acceso a primitivas como ECDSA, ECC, SHA-256, creación de dirección y claves para monederos y direcciones dentro de la red BTC.<br/><br/>\n" +
    "\n" +
    "<img src=\"https://academy.bit2me.com/wp-content/uploads/2018/08/Que_es_clave_publica_academy_bit2me.png\" alt=\"Simulador criptográfico de Bit2Me\">"
  );


  $templateCache.put('pages/macaroon/macaroon.html',
    "<h1>Macaroons</h1>\n" +
    "\n" +
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <h4 class=\"panel-title\">\n" +
    "      <a ng-click=\"vm.showExplanation = !vm.showExplanation\">Explicación</a>\n" +
    "    </h4>\n" +
    "  </div>\n" +
    "  <div class=\"panel-collapse collapse\" ng-class=\"{in: vm.showExplanation}\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      Los Macaroons (Macarrones), son <strong>cookies con advertencias contextuales para la autorización descentralizada en la nube.</strong> Se utilizan, por ejemplo, en la implementación lnd de la red Lightning Network.\n" +
    "      \n" +
    "      Básicamente son un medio para informar sobre distintas condiciones de acceso y limitación de acceso a una determinada información o transacción dentro de la red Lightning Network.\n" +
    "      Con ello se busca descentralizar y proteger ciertas acciones dentro de LN con el fin de brindar seguridad a sus usuarios.  \n" +
    "    \n" +
    "      <h3>Más información:</h3>\n" +
    "      <ul>\n" +
    "        <li><a href=\"https://research.google.com/pubs/pub41892.html\">Publicación e investigación original</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Crear un macaroon</h4>\n" +
    "<div class=\"well\">\n" +
    "  <form class=\"form-horizontal\">\n" +
    "\n" +
    "    <!-- root key -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\" for=\"rootKey\">Root key (hex):</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input id=\"rootKey\"\n" +
    "               class=\"form-control\"\n" +
    "               ng-model=\"vm.rootKey\"\n" +
    "               ng-change=\"vm.newMacaroon()\"\n" +
    "               ng-class=\"{'well-error': vm.error2}\">\n" +
    "        <span class=\"input-group-addon\" ng-if=\"!vm.error2\">&lt;-- pegar hex</span>\n" +
    "        <span class=\"input-group-addon well-error\" ng-if=\"vm.error2\"> {{vm.error2}}</span>\n" +
    "        <span class=\"input-group-btn\">\n" +
    "          <button class=\"btn btn-primary\" ng-click=\"vm.randomRootKey()\">Aleatorizar</button>\n" +
    "        </span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- identifier -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\" for=\"identifier\">Identificador:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input id=\"identifier\" class=\"form-control\" ng-model=\"vm.identifier\" ng-change=\"vm.newMacaroon()\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- location -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\" for=\"location\">Locación:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input id=\"location\" class=\"form-control\" ng-model=\"vm.location\" ng-change=\"vm.newMacaroon()\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- caveats -->\n" +
    "    <div class=\"form-group\" ng-repeat=\"caveat in vm.caveats track by $index\">\n" +
    "      <label class=\"col-sm-3 control-label\">Precauciones {{$index + 1}}:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\" ng-model=\"vm.caveats[$index]\" ng-change=\"vm.newMacaroon()\">\n" +
    "        <span class=\"input-group-btn\">\n" +
    "          <button class=\"btn btn-primary\" ng-click=\"vm.removeCaveat($index)\"><i class=\"fas fa-trash-alt\"></i></button>\n" +
    "        </span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <div class=\"col-lg-offset-3 col-sm-9 input-group\">\n" +
    "        <div class=\"input-group\" style=\"width: 100%;\">\n" +
    "          <button class=\"btn btn-primary\" ng-click=\"vm.addCaveat()\">Agregar precaución:</button>\n" +
    "          <button class=\"btn btn-secondary pull-right\" ng-if=\"!vm.thirdPartyMac\" ng-click=\"vm.addThirdPartyCaveat()\">\n" +
    "            Agregar precaución de tercera parte\n" +
    "          </button>\n" +
    "          <button class=\"btn btn-secondary pull-right\" ng-if=\"vm.thirdPartyMac\" ng-click=\"vm.removeThirdPartyCaveat()\">\n" +
    "            Remover precaución de tercera parte\n" +
    "          </button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- third party caveat -->\n" +
    "    <div class=\"form-group\" ng-if=\"vm.thirdPartyMac\">\n" +
    "      <label class=\"col-sm-3 control-label\">Precaución de tercera parte</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <div class=\"input-group\">\n" +
    "          <div class=\"input-group-addon\">Shared Root key (hex):</div>\n" +
    "          <input class=\"form-control\"\n" +
    "                 ng-model=\"vm.thirdPartyMac.rootKey\"\n" +
    "                 ng-change=\"vm.newMacaroon()\"\n" +
    "                 ng-class=\"{'well-error': vm.error4}\">\n" +
    "          <span class=\"input-group-addon\" ng-if=\"!vm.error4\">&lt;-- pegar hex</span>\n" +
    "          <span class=\"input-group-addon well-error\" ng-if=\"vm.error4\"> {{vm.error4}}</span>\n" +
    "          <span class=\"input-group-btn\">\n" +
    "            <button class=\"btn btn-primary\" ng-click=\"vm.randomTpmRootKey()\">Aleatorizar</button>\n" +
    "          </span>\n" +
    "        </div>\n" +
    "        <div class=\"input-group\">\n" +
    "          <div class=\"input-group-addon\">Identificador</div>\n" +
    "          <input class=\"form-control\" ng-model=\"vm.thirdPartyMac.identifier\" ng-change=\"vm.newMacaroon()\">\n" +
    "        </div>\n" +
    "        <div class=\"input-group\">\n" +
    "          <div class=\"input-group-addon\">Locación:</div>\n" +
    "          <input class=\"form-control\" ng-model=\"vm.thirdPartyMac.location\" ng-change=\"vm.newMacaroon()\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- discharge macaroon -->\n" +
    "    <div class=\"form-group\" ng-if=\"vm.thirdPartyMac\">\n" +
    "      <label class=\"col-sm-3 control-label\">Descargar macaroon desde <br/>Tercera Parte:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\" value=\"{{ vm.serializeMacaroon(vm.thirdPartyMac.macaroon, false) }}\" ng-readonly=\"true\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\" for=\"json\">{{vm.showJson ? 'JSON' : 'Hex'}}:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <textarea id=\"json2\" rows=\"10\" ng-readonly=\"true\" class=\"form-control\">{{\n" +
    "          vm.serializeMacaroon(vm.macaroon2, vm.showJson)\n" +
    "          }}</textarea>\n" +
    "        <br/>\n" +
    "        <input type=\"checkbox\" ng-model=\"vm.showJson\"> Mostrar JSON\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Decodificar macaroon</h4>\n" +
    "<div class=\"well\">\n" +
    "  <form class=\"form-horizontal\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-4 control-label\" for=\"hash\">Macaroon serializado (HEX):</label>\n" +
    "      <div class=\"col-sm-8 input-group\">\n" +
    "        <input id=\"hash\"\n" +
    "               class=\"form-control\"\n" +
    "               ng-model=\"vm.encodedMacaroon\"\n" +
    "               ng-change=\"vm.decodeMacaroon()\"\n" +
    "               ng-class=\"{'well-error': vm.error}\">\n" +
    "        <span class=\"input-group-addon\" ng-if=\"!vm.error\">&lt;-- pegar aquí para decodificar</span>\n" +
    "        <span class=\"input-group-addon well-error\" ng-if=\"vm.error\"> {{vm.error}}</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-4 control-label\" for=\"json\">Decodificar como JSON:</label>\n" +
    "      <div class=\"col-sm-8 input-group\">\n" +
    "        <textarea id=\"json\" rows=\"30\" ng-readonly=\"true\" class=\"form-control\">{{ vm.serializeMacaroon(vm.macaroon, true) }}</textarea>\n" +
    "        <input type=\"checkbox\" ng-model=\"vm.tryDecodingId\"> Decodificando identificador\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- verify against root key -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-4 control-label\" for=\"verificationRootKey\">Verificando firma con root key:</label>\n" +
    "      <div class=\"col-sm-8 input-group\">\n" +
    "        <input id=\"verificationRootKey\"\n" +
    "               class=\"form-control\"\n" +
    "               ng-model=\"vm.verificationRootKey\"\n" +
    "               ng-change=\"vm.verifyMacaroon()\"\n" +
    "               ng-class=\"{'well-error': vm.error3, 'well-success': vm.valid}\">\n" +
    "        <span class=\"input-group-addon\" ng-if=\"!vm.error3\">&lt;-- pegar hex</span>\n" +
    "        <span class=\"input-group-addon well-error\" ng-if=\"vm.error3\"> {{vm.error3}}</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- verify against root key -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-4 control-label\" for=\"discharge\">Descargando macaroon<br/>(para verificación de Precaución de Tercera Parte):</label>\n" +
    "      <div class=\"col-sm-8 input-group\">\n" +
    "        <input id=\"discharge\"\n" +
    "               class=\"form-control\"\n" +
    "               ng-model=\"vm.verificationDischarge\"\n" +
    "               ng-change=\"vm.verifyMacaroon()\">\n" +
    "        <span class=\"input-group-addon\">&lt;-- pegar hex</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n"
  );


  $templateCache.put('pages/mu-sig/mu-sig.html',
    "<h1>MuSig: Key Aggregation for Schnorr Signatures</h1>\n" +
    "\n" +
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <h4 class=\"panel-title\">\n" +
    "      <a ng-click=\"vm.showExplanation = !vm.showExplanation\">Explicación</a>\n" +
    "    </h4>\n" +
    "  </div>\n" +
    "  <div class=\"panel-collapse collapse\" ng-class=\"{in: vm.showExplanation}\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      MuSig es un esquema de agregación de claves para firmas Schnorr que está asegurado contra ataques de claves falsas.\n" +
    "\n" +
    "      <h3>Más info:</h3>\n" +
    "      <ul>\n" +
    "        <li><a href=\"https://eprint.iacr.org/2018/068\">MuSig por Blockstream</a></li>\n" +
    "        <li><a href=\"https://blockstream.com/2018/01/23/musig-key-aggregation-schnorr-signatures/\">Arículo sobre MuSig</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<h3>Demo interactiva</h3>\n" +
    "\n" +
    "<h4>Mensaje y pares de claves participantes</h4>\n" +
    "<div class=\"well\">\n" +
    "  <form class=\"form-horizontal\">\n" +
    "\n" +
    "    <!-- message -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Mensaje a firmar:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\" ng-model=\"vm.message\" ng-change=\"vm.hashMessage()\">\n" +
    "        <div class=\"input-group\">\n" +
    "          <div class=\"input-group-addon\">Hash</div>\n" +
    "          <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.publicData.message.toString('hex')}}\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- key pairs -->\n" +
    "    <div class=\"form-group\" ng-repeat=\"pair in vm.keyPairs\">\n" +
    "      <label class=\"col-sm-3 control-label\">\n" +
    "        Par de claves {{$index + 1}}:<br/><br/>\n" +
    "        <small ng-if=\"vm.keyPairs.length > 1\">\n" +
    "          <a ng-click=\"vm.removeKeyPair($index)\" ng-if=\"vm.step == 0\"><i class=\"fas fa-trash-alt\"></i></a>\n" +
    "        </small>\n" +
    "      </label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <div class=\"input-group\">\n" +
    "          <div class=\"input-group-addon\">Clave privada</div>\n" +
    "          <input class=\"form-control\" ng-model=\"pair.privateKeyHex\" ng-change=\"vm.updateKeyPair($index)\" ng-readonly=\"vm.step > 0\">\n" +
    "          <span class=\"input-group-addon\">&lt;-- paste hex</span>\n" +
    "          <span class=\"input-group-btn\">\n" +
    "            <button class=\"btn btn-primary\" ng-click=\"vm.randomKeyPair($index)\" ng-disabled=\"vm.step > 0\">Aleatorizar</button>\n" +
    "          </span>\n" +
    "        </div>\n" +
    "        <div class=\"input-group\">\n" +
    "          <div class=\"input-group-addon\">Clave púlica</div>\n" +
    "          <input class=\"form-control\" ng-readonly=\"true\" value=\"{{pair.publicKeyHex}}\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <div class=\"col-lg-offset-3 col-sm-9 input-group\">\n" +
    "        <div class=\"input-group-btn\">\n" +
    "          <button class=\"btn btn-primary\" ng-click=\"vm.newPrivateKey()\" ng-disabled=\"vm.step > 0\">Agregar par de claves</button></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "\n" +
    "<p>\n" +
    "  Una vez que haya configurado los pares de claves, haga clic en el siguiente botón para recorrer el proceso de firma.\n" +
    "  Observe cómo cambian los datos públicos y privados después de cada paso.\n" +
    "  To reset the demo, please reload the page.\n" +
    "</p>\n" +
    "\n" +
    "<button class=\"btn btn-primary\" ng-click=\"vm.nextStep()\" ng-disabled=\"vm.step > 7\">{{vm.steps[vm.step].label}}</button>\n" +
    "\n" +
    "<h4>Data pública</h4>\n" +
    "<small>Esto representa datos que son conocidos por todos los participantes. De hecho, cada participante calculará/almacenará estos valores durante la sesión de firma.</small>\n" +
    "<div class=\"well\">\n" +
    "  <form class=\"form-horizontal\">\n" +
    "    <div class=\"form-group\">\n" +
    "      <div class=\"col-sm-12 input-group\">\n" +
    "        <textarea rows=\"15\" ng-readonly=\"true\" class=\"form-control\">{{vm.hexEncoded(vm.publicData) | json}}</textarea>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Data privada del firmante</h4>\n" +
    "<small>\n" +
    "  Esto representa datos que sólo conoce la parte individual y nunca se comparte entre los firmantes.\n" +
    "  Así, por ejemplo, el propietario del par de claves 2 sólo conoce los datos mostrados aquí en el índice 1.\n" +
    "</small>\n" +
    "<div class=\"well\">\n" +
    "  <form class=\"form-horizontal\">\n" +
    "    <div class=\"form-group\">\n" +
    "      <div class=\"col-sm-12 input-group\">\n" +
    "        <textarea rows=\"15\" ng-readonly=\"true\" class=\"form-control\">{{vm.hexEncoded(vm.signerPrivateData) | json}}</textarea>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n"
  );


  $templateCache.put('pages/schnorr/schnorr.html',
    "<h1>Firmas Schnorr</h1>\n" +
    "\n" +
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <h4 class=\"panel-title\">\n" +
    "      <a ng-click=\"vm.showExplanation = !vm.showExplanation\">Explicación</a>\n" +
    "    </h4>\n" +
    "  </div>\n" +
    "  <div class=\"panel-collapse collapse\" ng-class=\"{in: vm.showExplanation}\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      <p>\n" +
    "        Las Schnorr Signatures o firmas Schnorr, es una solución planteada en la red Bitcoin que busca mejorar la privacidad \n" +
    "        y escalabilidad del sistema. Al permitir que un conjunto de firmas de transacciones con una misma entrada pueda ser sustituida por una única firma.\n" +
    "        Para ello, se busca reducir el espacio de almacenamiento ocupado dentro de un bloque. Lo que, a su vez, permite que las transacciones puedan ser confirmadas \n" +
    "        de forma mucho más rápida, mejorando el rendimiento de la red. La propuesta de mejora fue presentada por Pieter Wuille en julio de 2019.\n" +
    "      </p>\n" +
    "      <h3>Más información:</h3>\n" +
    "      <ul>\n" +
    "        <li><a href=\"https://academy.bit2me.com/que-son-las-firmas-schnorr/\">Bit2Me Academy - ¿Qué son las firmas Schnorr?</a></li>\n" +
    "        <li><a href=\"https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki\">BIP 340 - Firmas Schnorr</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Firmando mensaje</h4>\n" +
    "<div class=\"well\">\n" +
    "  <form class=\"form-horizontal\">\n" +
    "\n" +
    "    <!-- key pairs -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Par de claves:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <div class=\"input-group\">\n" +
    "          <div class=\"input-group-addon\">Clave privada</div>\n" +
    "          <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.privateKey}}\">\n" +
    "        </div>\n" +
    "        <div class=\"input-group\">\n" +
    "          <div class=\"input-group-addon\">Clave pública</div>\n" +
    "          <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.publicKey}}\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- message -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Mensaje:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\" ng-model=\"vm.message\" ng-change=\"vm.signMessage()\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- message sha256 -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Hash SHA-256 del mensaje:</label>\n" +
    "      <div class=\"col-sm-9 no-left-padding\">\n" +
    "        <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.messageHash.toString('hex')}}\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- ECDSA signature -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Firma ECDSA:</label>\n" +
    "      <div class=\"col-sm-9 no-left-padding\">\n" +
    "        <textarea class=\"form-control\" rows=\"2\" ng-readonly=\"true\">{{vm.ecdsaSignature}}</textarea>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- schnorr signature -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Firma Schnorr:</label>\n" +
    "      <div class=\"col-sm-9 no-left-padding\">\n" +
    "        <textarea class=\"form-control\" rows=\"2\" ng-readonly=\"true\">{{vm.signature}}</textarea>\n" +
    "        Mejora en el tamaño: <b>{{$root.round(vm.sizeImprovement, 1)}}%</b>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Verificando firma Schnorr</h4>\n" +
    "<div class=\"well\" ng-class=\"{'well-success': vm.signatureValid, 'well-error': !vm.signatureValid}\">\n" +
    "  <form class=\"form-horizontal\">\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"publicKey\" class=\"col-sm-3 control-label\">Clave pública:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input id=\"publicKey\"\n" +
    "               ng-model=\"vm.publicKeyToVerify\"\n" +
    "               ng-change=\"vm.verifySignature()\"\n" +
    "               class=\"form-control\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"messageHash\" class=\"col-sm-3 control-label\">Hash del mensaje:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input id=\"messageHash\"\n" +
    "               ng-model=\"vm.messageHashToVerify\"\n" +
    "               ng-change=\"vm.verifySignature()\"\n" +
    "               class=\"form-control\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"signature\" class=\"col-sm-3 control-label\">Firma:</label>\n" +
    "      <div class=\"col-sm-9 no-left-padding\">\n" +
    "        <input id=\"signature\"\n" +
    "               ng-model=\"vm.signatureToVerify\"\n" +
    "               ng-change=\"vm.verifySignature()\"\n" +
    "               class=\"form-control\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n"
  );


  $templateCache.put('pages/shamir-secret-sharing/shamir-secret-sharing.html',
    "<h1>Shamir's Secret Sharing Scheme</h1>\n" +
    "\n" +
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <h4 class=\"panel-title\">\n" +
    "      <a ng-click=\"vm.showExplanation = !vm.showExplanation\">Explicación</a>\n" +
    "    </h4>\n" +
    "  </div>\n" +
    "  <div class=\"panel-collapse collapse\" ng-class=\"{in: vm.showExplanation}\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      El esquema de compartición de secretos de Shamir (Shamir's Secret Sharing Scheme - SSSS)  es una forma de dividir un secreto (una contraseña o una clave privada, por ejemplo) en múltiples partes, \n" +
    "      pero sólo algunas partes (por ejemplo 5 de 10) son necesarias para recrear el secreto.\n" +
    "\n" +
    "      <h3>Más info:</h3>\n" +
    "      <ul>\n" +
    "        <li><a href=\"https://es.wikipedia.org/wiki/Esquema_de_Shamir\">Wikipedia - Esquema de Shamir</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Diviendo el secreto</h4>\n" +
    "<div class=\"well\">\n" +
    "  <form class=\"form-horizontal\">\n" +
    "\n" +
    "    <!-- secret -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Secreto:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\" ng-model=\"vm.secret\" ng-change=\"vm.generateShares()\">\n" +
    "        <span class=\"input-group-btn\">\n" +
    "          <button class=\"btn btn-primary\" ng-click=\"vm.newSecret()\">Generar nuevo</button>\n" +
    "        </span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- secrets sharing settings -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Configuración de secrets sharing:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <div class=\"input-group-addon\">Número de shares</div>\n" +
    "        <input class=\"form-control\"\n" +
    "               ng-model=\"vm.numShares\"\n" +
    "               ng-change=\"vm.generateShares()\"\n" +
    "               ng-class=\"{'well-error': vm.error}\"\n" +
    "               type=\"number\">\n" +
    "        <div class=\"input-group-addon\">Shares requeridos para reconstrucción</div>\n" +
    "        <input class=\"form-control\"\n" +
    "               ng-model=\"vm.sharesNeeded\"\n" +
    "               ng-change=\"vm.generateShares()\"\n" +
    "               ng-class=\"{'well-error': vm.error}\"\n" +
    "               type=\"number\">\n" +
    "        <div class=\"input-group-addon\">Longitud de relleno</div>\n" +
    "        <select ng-model=\"vm.minPad\"\n" +
    "                ng-options=\"padding.label for padding in vm.paddingLengths\"\n" +
    "                ng-change=\"vm.generateShares()\"\n" +
    "                class=\"form-control\">\n" +
    "        </select>\n" +
    "      </div>\n" +
    "      <div class=\"col-sm-9 col-sm-offset-3 input-group\" ng-if=\"vm.error\">\n" +
    "        <div class=\"input-group-addon well-error\">{{vm.error}}</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- shares -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Shares:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <div class=\"input-group\" ng-repeat=\"share in vm.shares\">\n" +
    "          <div class=\"input-group-addon\">Share {{$index + 1}}</div>\n" +
    "          <input class=\"form-control\"\n" +
    "                 ng-readonly=\"true\"\n" +
    "                 value=\"{{share}}\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "\n" +
    "<h4>Combinando shares</h4>\n" +
    "<div class=\"well\">\n" +
    "  <form class=\"form-horizontal\">\n" +
    "\n" +
    "    <!-- input shares -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\" for=\"raw\">Combinando shares (uno por línea):</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <textarea id=\"raw\"\n" +
    "                  rows=\"10\"\n" +
    "                  ng-model=\"vm.shareLines\"\n" +
    "                  ng-change=\"vm.parseShares()\"\n" +
    "                  class=\"form-control\"\n" +
    "                  ng-class=\"{'well-error': vm.error2}\">\n" +
    "          </textarea>\n" +
    "      </div>\n" +
    "      <div class=\"input-group\" ng-if=\"vm.error2\">\n" +
    "        <div class=\"input-group-addon well-error\">{{vm.error2}}</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- combined secret -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Secreto combinado:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.combinedSecret}}\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n"
  );


  $templateCache.put('pages/transaction-creator/transaction-creator.html',
    "<h1>Transaction Creator</h1>\n" +
    "\n" +
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <h4 class=\"panel-title\">\n" +
    "      <a ng-click=\"vm.showExplanation = !vm.showExplanation\">Explicación</a>\n" +
    "    </h4>\n" +
    "  </div>\n" +
    "  <div class=\"panel-collapse collapse\" ng-class=\"{in: vm.showExplanation}\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      En esta página puedes crear una transacción para cualquier red/blockchain que esté configurada.\n" +
    "      <br><br>La idea es que usted puede utilizar esta herramienta para crear cualquier transacción válida fuera de línea y luego sólo enviarla a un monedero online. De esta manera su clave privada puede permanecer fuera de línea (sólo si se descarga esta herramienta y se utiliza fuera de línea, por supuesto).\n" +
    "\n" +
    "      <h3>Más info:</h3>\n" +
    "      <ul>\n" +
    "        <li><a href=\"https://bitcoinjs.org/\">BitcoinJS</a></li>\n" +
    "        <li><a href=\"https://github.com/bitcoinjs/bitcoinjs-lib\">BitcoinJS GitHub</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"alert alert-warning\">\n" +
    "  <strong>Advertencia</strong>: No use las claves generadas por este simulador en un monedero real, ya que existe el riesgo de que estas puedan romperse, debido a la baja entropía.\n" +
    "</div>\n" +
    "\n" +
    "<h4>Indique la red red destino y la clave privada</h4>\n" +
    "<div class=\"well\">\n" +
    "  <form class=\"form-horizontal\">\n" +
    "\n" +
    "    <!-- target network -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Red destino:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <select ng-model=\"vm.network\"\n" +
    "                ng-options=\"network.label for network in vm.networks\"\n" +
    "                class=\"form-control\">\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- private key -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"wifUncompressed\" class=\"col-sm-3 control-label\">Pegue su clave privada:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input id=\"wifUncompressed\"\n" +
    "               ng-model=\"vm.keyPair.wif\"\n" +
    "               ng-change=\"vm.importFromWif()\"\n" +
    "               ng-class=\"{'well-error': vm.error}\"\n" +
    "               class=\"form-control\"><br/>\n" +
    "        <span class=\"input-group-addon\" ng-if=\"!vm.error\">&lt;-- pegue su clave privada comprimida/descompimida</span>\n" +
    "        <span class=\"input-group-addon well-error\" ng-if=\"vm.error\"> {{vm.error}}</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Source address -->\n" +
    "    <div class=\"form-group\" ng-if=\"vm.keyValid\">\n" +
    "      <label class=\"col-sm-3 control-label\">Dirección de origen:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <div class=\"input-group\">\n" +
    "          <div class=\"input-group-addon\">P2PKH</div>\n" +
    "          <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.keyPair.address}}\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- SegWit source address -->\n" +
    "    <div class=\"form-group\" ng-if=\"vm.keyValid && vm.network.config.bech32\">\n" +
    "      <label class=\"col-sm-3 control-label\">Direcicón SegWit de origen:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <div class=\"input-group\">\n" +
    "          <div class=\"input-group-addon\">P2SH-P2WPKH</div>\n" +
    "          <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.keyPair.nestedP2WPKHAddress}}\">\n" +
    "          <div class=\"input-group-addon\">bech32 P2WPKH</div>\n" +
    "          <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.keyPair.P2WPKHAddress}}\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"vm.keyValid\">\n" +
    "  <h4>Entrada</h4>\n" +
    "  <div class=\"well\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "\n" +
    "      <!-- input -->\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-3 control-label\">Transacción de Entrada (UTXO):</label>\n" +
    "        <div class=\"col-sm-9\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <div class=\"input-group-addon\">Transaction ID (txId)</div>\n" +
    "            <input class=\"form-control\"\n" +
    "                   ng-model=\"vm.inputTxId\"\n" +
    "                   ng-change=\"vm.createTransaction()\"\n" +
    "                   type=\"text\">\n" +
    "          </div>\n" +
    "          <div class=\"input-group\">\n" +
    "            <div class=\"input-group-addon\">Indice (vout)</div>\n" +
    "            <input class=\"form-control\"\n" +
    "                   ng-model=\"vm.inputTxVout\"\n" +
    "                   ng-change=\"vm.createTransaction()\"\n" +
    "                   type=\"number\">\n" +
    "          </div>\n" +
    "          <div class=\"input-group\">\n" +
    "            <div class=\"input-group-addon\">Entrada transacción SegWit:</div>\n" +
    "            <div class=\"input-group-addon\">\n" +
    "              <input type=\"checkbox\" ng-model=\"vm.inputSegwit\">\n" +
    "            </div>\n" +
    "            <input class=\"form-control no-border\"\n" +
    "                   ng-readonly=\"true\"\n" +
    "                   type=\"text\">\n" +
    "          </div>\n" +
    "          <div class=\"input-group\">\n" +
    "            <div class=\"input-group-addon\">Cantidad prevista no gastada en Satoshi (utilizada para el cálculo de la tasa)</div>\n" +
    "            <input class=\"form-control\"\n" +
    "                   ng-model=\"vm.inputAmount\"\n" +
    "                   ng-change=\"vm.calculateFee()\"\n" +
    "                   type=\"number\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "\n" +
    "  <h4>Salidas</h4>\n" +
    "  <div class=\"well\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "\n" +
    "      <!-- target address -->\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-3 control-label\">Dirección destino:</label>\n" +
    "        <div class=\"col-sm-9\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <div class=\"input-group-addon\">Cualquier dirección</div>\n" +
    "            <input class=\"form-control\"\n" +
    "                   ng-model=\"vm.outputAddress\"\n" +
    "                   ng-change=\"vm.createTransaction()\"\n" +
    "                   type=\"text\">\n" +
    "            <div class=\"input-group-addon\">Monto (satoshi!)</div>\n" +
    "            <input class=\"form-control\"\n" +
    "                   ng-model=\"vm.outputAmount\"\n" +
    "                   ng-change=\"vm.calculateFee()\"\n" +
    "                   type=\"number\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- change address -->\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-3 control-label\">Dirección de cambio:</label>\n" +
    "        <div class=\"col-sm-9\">\n" +
    "          <div class=\"input-group\">\n" +
    "            <div class=\"input-group-addon\">Enviar cambia a la dirección:</div>\n" +
    "            <div class=\"input-group-addon\">\n" +
    "              <input type=\"checkbox\" ng-model=\"vm.useChange\">\n" +
    "            </div>\n" +
    "            <input class=\"form-control no-border\"\n" +
    "                   ng-readonly=\"true\"\n" +
    "                   type=\"text\">\n" +
    "          </div>\n" +
    "          <div class=\"input-group\" ng-if=\"vm.useChange\" >\n" +
    "            <div class=\"input-group-addon\">Dirección de cambio:</div>\n" +
    "            <input class=\"form-control\"\n" +
    "                   ng-model=\"vm.changeAddress\"\n" +
    "                   ng-change=\"vm.createTransaction()\"\n" +
    "                   type=\"text\">\n" +
    "            <div class=\"input-group-addon\">Monto (satoshi!)</div>\n" +
    "            <input class=\"form-control\"\n" +
    "                   ng-model=\"vm.changeAmount\"\n" +
    "                   ng-change=\"vm.calculateFee()\"\n" +
    "                   type=\"number\">\n" +
    "          </div>\n" +
    "          <div class=\"input-group\">\n" +
    "            <div class=\"input-group\">\n" +
    "              <div class=\"input-group-addon\" ng-if=\"!vm.feeError\">Comisión calculada (satoshi)</div>\n" +
    "              <input class=\"form-control\"\n" +
    "                     ng-class=\"{'well-error': vm.feeError}\"\n" +
    "                     ng-readonly=\"true\"\n" +
    "                     value=\"{{vm.feeError || vm.calculatedFee}}\">\n" +
    "              <div class=\"input-group-addon\" ng-if=\"!vm.feeError\">Comisión calculada (satoshi/byte)</div>\n" +
    "              <input class=\"form-control\"\n" +
    "                     ng-class=\"{'well-error': vm.feeError}\"\n" +
    "                     ng-readonly=\"true\"\n" +
    "                     value=\"{{vm.feeError || vm.calculatedFee / (vm.raw.length * 4)}}\">\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "\n" +
    "  <h4>Salidas</h4>\n" +
    "  <div class=\"well\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "\n" +
    "      <!-- transaction raw hex value -->\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-3 control-label\" for=\"raw\">Valor raw de la transacción:</label>\n" +
    "        <div class=\"col-sm-9 input-group\">\n" +
    "          <textarea id=\"raw\"\n" +
    "                    rows=\"10\"\n" +
    "                    ng-readonly=\"true\"\n" +
    "                    class=\"form-control\"\n" +
    "                    ng-class=\"{'well-error': vm.txError}\"\n" +
    "          >{{vm.txError || vm.raw}}</textarea>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <!-- transaction hex -->\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"col-sm-3 control-label\">TX ID:</label>\n" +
    "        <div class=\"col-sm-9 no-left-padding\">\n" +
    "          <input class=\"form-control\" ng-readonly=\"true\" value=\"{{vm.txId}}\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('pages/wallet-import/wallet-import.html',
    "<h1>Importar monedero HD a Bitcoin Core</h1>\n" +
    "\n" +
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <h4 class=\"panel-title\">\n" +
    "      <a ng-click=\"vm.showExplanation = !vm.showExplanation\">Explicación</a>\n" +
    "    </h4>\n" +
    "  </div>\n" +
    "  <div class=\"panel-collapse collapse\" ng-class=\"{in: vm.showExplanation}\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      Esta sección permite transformar tu monedero HD en un monedero compatible con el estándar usado por Bitcoin Core. \n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"alert alert-warning\">\n" +
    "  <strong>Advertencia</strong>: No realice estos cambios para uso en producción, es solo un experimento. \n" +
    "</div>\n" +
    "\n" +
    "<h4>Monedero a importar</h4>\n" +
    "<div class=\"well\">\n" +
    "  <form class=\"form-horizontal\">\n" +
    "\n" +
    "    <!-- mode -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Modo de importación:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <select ng-model=\"vm.mode\"\n" +
    "                ng-options=\"mode.label for mode in vm.modes\"\n" +
    "                ng-change=\"vm.fromSeed()\"\n" +
    "                class=\"form-control\">\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- mnemonic -->\n" +
    "    <div class=\"form-group\" ng-if=\"vm.mode.id === 'mnemonic'\">\n" +
    "      <label class=\"col-sm-3 control-label\">Seed Mnemonica (BIP39):</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\" ng-model=\"vm.mnemonic\" ng-change=\"vm.fromMnemonic()\">\n" +
    "        <span class=\"input-group-addon\">&lt;-- pegue la seed aquí.</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- passphrase -->\n" +
    "    <div class=\"form-group\" ng-if=\"vm.mode.id === 'mnemonic'\">\n" +
    "      <label class=\"col-sm-3 control-label\">Clave:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <input class=\"form-control\"\n" +
    "               ng-model=\"vm.passphrase\"\n" +
    "               ng-change=\"vm.fromMnemonic()\"\n" +
    "               type=\"{{vm.asPassword ? 'password' : 'text'}}\">\n" +
    "        <span class=\"input-group-btn\">\n" +
    "            <button class=\"btn btn-primary\" ng-click=\"vm.asPassword = !vm.asPassword\">\n" +
    "                {{vm.asPassword ? 'Mostrar' : 'Ocultar'}} claves\n" +
    "            </button>\n" +
    "        </span>\n" +
    "        <div class=\"input-group-addon\">Método</div>\n" +
    "        <select ng-model=\"vm.strenghtening\"\n" +
    "                ng-change=\"vm.fromMnemonic()\"\n" +
    "                ng-options=\"s.label for s in vm.strenghteningMethods\"\n" +
    "                class=\"form-control\">\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- derive -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Parámetros para derivar claves:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <select ng-model=\"vm.scheme\"\n" +
    "                ng-options=\"scheme.label for scheme in vm.schemes\"\n" +
    "                ng-change=\"vm.fromSeed()\"\n" +
    "                class=\"form-control\">\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- root key base58 -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Root key HD:</label>\n" +
    "      <div class=\"col-sm-9 input-group as-block\">\n" +
    "        <input class=\"form-control\"\n" +
    "               style=\"width: 80%\"\n" +
    "               ng-model=\"vm.nodeBase58\"\n" +
    "               ng-readonly=\"vm.mode.id === 'mnemonic'\"\n" +
    "               ng-change=\"vm.fromBase58()\"\n" +
    "               ng-class=\"{'well-error': vm.mode.id === 'hdroot' && vm.error}\">\n" +
    "        <span class=\"input-group-addon\" ng-if=\"vm.mode.id === 'hdroot' && !vm.error\" style=\"width: 20%\">&lt;-- pegue aquí para importar.</span>\n" +
    "        <span class=\"input-group-addon well-error\" ng-if=\"vm.mode.id === 'hdroot' && vm.error\" style=\"width: 20%\"> {{vm.error}}</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- import type -->\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-3 control-label\">Parámetros de importación:</label>\n" +
    "      <div class=\"col-sm-9 input-group\">\n" +
    "        <div class=\"input-group-addon\">Tipo de importación</div>\n" +
    "        <select ng-model=\"vm.importType\" ng-options=\"type.label for type in vm.importTypes\" class=\"form-control\">\n" +
    "        </select>\n" +
    "        <div class=\"input-group-addon\">Inicio del Path</div>\n" +
    "        <input class=\"form-control\" ng-model=\"vm.path\">\n" +
    "      </div>\n" +
    "      <div class=\"col-sm-offset-3 col-sm-9 input-group\">\n" +
    "        <div class=\"input-group-addon\">Cambio (_chg_): Valor de inicio</div>\n" +
    "        <input class=\"form-control\" ng-model=\"vm.changeStart\">\n" +
    "        <div class=\"input-group-addon\">Valor final: </div>\n" +
    "        <input class=\"form-control\" ng-model=\"vm.changeEnd\">\n" +
    "      </div>\n" +
    "      <div class=\"col-sm-offset-3 col-sm-9 input-group\">\n" +
    "        <div class=\"input-group-addon\">Índice (_idx_): Valor de inicio</div>\n" +
    "        <input class=\"form-control\" ng-model=\"vm.indexStart\">\n" +
    "        <div class=\"input-group-addon\">Valor final</div>\n" +
    "        <input class=\"form-control\" ng-model=\"vm.indexEnd\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <div class=\"col-sm-offset-3 col-sm-9 input-group\">\n" +
    "        <button class=\"btn btn-primary\" ng-click=\"vm.createExport()\">Crear exportación</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- result -->\n" +
    "    <div class=\"form-group\" ng-if=\"vm.result\">\n" +
    "      <div class=\"col-sm-12 input-group\">\n" +
    "        <textarea rows=\"50\" ng-readonly=\"true\" class=\"form-control\" style=\"white-space: pre\">{{vm.result}}</textarea>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "\n"
  );

}]);
