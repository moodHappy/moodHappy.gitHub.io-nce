// 更新时钟显示的函数
function updateClock() {
// 获取当前时间
var now = new Date();
// 获取当前小时、分钟和秒
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();

// 如果小时小于 10，前面补零
if (hour < 10) {
hour = "0" + hour;
}
// 如果分钟小于 10，前面补零
if (minute < 10) {
minute = "0" + minute;
}
// 如果秒钟小于 10，前面补零
if (second < 10) {
second = "0" + second;
}

// 将时、分、秒拼接成时间字符串
var time = hour + ":" + minute + ":" + second;
// 获取页面中 id 为 "clock" 的元素
var clock = document.getElementById("clock");
// 更新时钟显示内容为当前时间
clock.textContent = time;
}

// 页面加载完成时，调用 updateClock 函数更新时钟显示
window.onload = updateClock;
// 每隔一秒钟，调用 updateClock 函数更新时钟显示
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