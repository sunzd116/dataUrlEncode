var jpeg = require("jpeg-js");
var fs = require("fs");
var width = 320,
  height = 180;
var frameData = new Buffer(width * height * 4);
var i = 0;
while (i < frameData.length) {
  frameData[i++] = 0xff; // red
  frameData[i++] = 0x00; // green
  frameData[i++] = 0x00; // blue
  frameData[i++] = 0xff; // alpha - ignored in JPEGs}
}
var rawImageData = {
  data: frameData,
  width: width,
  height: height
};

var jpegImageData = jpeg.encode(rawImageData, 50);
console.log(jpegImageData);

fs.writeFile("./message.jpeg", jpegImageData, function(err) {
  if (err) console.log("写文件操作失败");
  else console.log("写文件操作成功");
});
