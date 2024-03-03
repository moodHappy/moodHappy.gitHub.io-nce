function updateClock() {
var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
if (hour < 10) {
hour = "0" + hour;
}
if (minute < 10) {
minute = "0" + minute;
}
if (second < 10) {
second = "0" + second;
}
var time = hour + ":" + minute + ":" + second;
var clock = document.getElementById("clock");
clock.textContent = time;
}
window.onload = updateClock;
window.setInterval(updateClock, 1000);

// 添加随机颜色效果的函数
function addEffects() {
// 获取页面中的所有元素
var elements = document.body.getElementsByTagName("*");
// 遍历所有元素
for (var i = 0; i < elements.length; i++) {
// 生成随机的 RGB 颜色值
var color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
// 将随机颜色应用到当前元素的 color 样式属性上
elements[i].style.color = color;
}
}

// 页面加载完成时，调用 addEffects 函数添加随机颜色效果
window.addEventListener("load", addEffects);
