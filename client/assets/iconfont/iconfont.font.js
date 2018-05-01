var glob = require("glob").sync;
var loadDir = glob('./client/assets/iconfont/**/*.svg');
var loadDirArr = Array.prototype.slice.apply( loadDir );
var iconsInDir = loadDirArr.map(function(elem) {
  return elem.replace('./client/assets/iconfont/', '');
});

module.exports = {
  "files": iconsInDir,
  "fontName": "iconfont-messageus",
  "classPrefix": "mu-",
  "baseClass": "mu",
  "fixedWidth": false
};