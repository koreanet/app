const crypto = require('crypto');

// API URL || 你机场网址
var apiurl = "http://163.chinatelecom.cc";
// Login BackgroundIMG || 登陆图片url must be "JPG"
var loginBackgroundImageUrl = 'https://chinatelecom.cc/fkk.jpeg';
// Main BackgroundIMG || 图片url must be "JPG"
var headBackgroundImageUrl = 'https://chinatelecom.cc/bg1.jpg';

var license_key;

// make sha1 func
function sha1(data) {
    return crypto.createHash('sha1').update(data).digest('hex');
}

// calc 1145141919 and change apply save
function calculateLicense() {
    const firstHash = sha1(apiurl);
    const combined = firstHash + "1145141919";
    license_key = sha1(combined); // directly change to umi.js
    console.log('License:', license_key);
}

calculateLicense();

function updateBackgroundImage(elementClass, imageUrl) {
    var elements = document.querySelectorAll(elementClass);
    elements.forEach(function(elem) {
        elem.style.backgroundImage = 'url("' + imageUrl + '")';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // set to css
    updateBackgroundImage('.head___1MReR', headBackgroundImageUrl);
    updateBackgroundImage('.login___SuG13', loginBackgroundImageUrl);
    updateBackground('.head___1MReR', '#2C6A8F');

    // every 5 sec update
    setInterval(function() {
        updateBackgroundImage('.head___1MReR', headBackgroundImageUrl);
        updateBackgroundImage('.login___SuG13', loginBackgroundImageUrl);
        updateBackground('.head___1MReR', '#2C6A8F');
    }, 200); // 5000 ms = 5 sec
});