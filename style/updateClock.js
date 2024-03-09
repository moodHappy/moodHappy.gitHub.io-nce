// openRandomNewsSite.js 的内容
// performSearch() 函数以及相关的事件处理程序

// 点击放大镜图标时触发搜索操作
function performSearch() {
    const searchInput = document.querySelector('.search-input');
    const selectedEngine = document.querySelector('input[name="search-engine"]:checked').value;
    const query = searchInput.value;
    // 根据选定的搜索引擎执行搜索操作
    switch (selectedEngine) {
        case 'google':
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            break;
        case 'wikipedia':
            window.location.href = `https://zh.wikipedia.org/wiki/${encodeURIComponent(query)}`;
            break;
        case 'bing':
            window.location.href = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
            break;
        case 'baidu':
            window.location.href = `https://www.baidu.com/s?wd=${encodeURIComponent(query)}`;
            break;
        default:
            alert('请选择一个搜索引擎！');
    }
}


// 添加桃花特效
function createSnowflake() {
const snowflake = document.createElement('div');
snowflake.classList.add('snowflake');
snowflake.innerHTML = '🌸';
snowflake.style.fontSize = Math.random() * 20 + 'px';
snowflake.style.left = Math.random() * window.innerWidth + 'px';
document.body.appendChild(snowflake);
const animation = snowflake.animate([
{ top: '-10px' },
{ top: window.innerHeight + 'px' }
], {
duration: Math.random() * 5000 + 5000, // 随机速度
iterations: Infinity,
easing: 'linear'
});
animation.onfinish = () => {
snowflake.remove();
};
}
setInterval(createSnowflake, 100);

// 添加太阳特效
/*
function createSnowflake() {
const snowflake = document.createElement('div');
snowflake.classList.add('snowflake');
snowflake.innerHTML = '☀️';
snowflake.style.fontSize = Math.random() * 20 + 'px';
snowflake.style.left = Math.random() * window.innerWidth + 'px';
document.body.appendChild(snowflake);
const animation = snowflake.animate([
{ top: '-10px' },
{ top: window.innerHeight + 'px' }
], {
duration: Math.random() * 5000 + 5000, // 随机速度
iterations: Infinity,
easing: 'linear'
});
animation.onfinish = () => {
snowflake.remove();
};
}
setInterval(createSnowflake, 100);

//添加秋叶特效
function createSnowflake() {
const snowflake = document.createElement('div');
snowflake.classList.add('snowflake');
snowflake.innerHTML = '🍁';
snowflake.style.fontSize = Math.random() * 20 + 'px';
snowflake.style.left = Math.random() * window.innerWidth + 'px';
document.body.appendChild(snowflake);
const animation = snowflake.animate([
{ top: '-10px' },
{ top: window.innerHeight + 'px' }
], {
duration: Math.random() * 5000 + 5000, // 随机速度
iterations: Infinity,
easing: 'linear'
});
animation.onfinish = () => {
snowflake.remove();
};
}
setInterval(createSnowflake, 100);

// 添加雪花特效
function createSnowflake() {
const snowflake = document.createElement('div');
snowflake.classList.add('snowflake');
snowflake.innerHTML = '❄';
snowflake.style.fontSize = Math.random() * 20 + 'px';
snowflake.style.left = Math.random() * window.innerWidth + 'px';
document.body.appendChild(snowflake);
const animation = snowflake.animate([
{ top: '-10px' },
{ top: window.innerHeight + 'px' }
], {
duration: Math.random() * 5000 + 5000, // 随机速度
iterations: Infinity,
easing: 'linear'
});
animation.onfinish = () => {
snowflake.remove();
};
}
setInterval(createSnowflake, 100);
*/

// 获取实时新闻
// Your news API key
const apiKey = 'dac6abc0634b4de08429b2580628dba8';
// Function to fetch news and display them in the newsContainer div
async function displayNews() {
const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
const data = await response.json();
const newsContainer = document.getElementById('newsContainer');
newsContainer.innerHTML = ''; // Clear previous news
data.articles.forEach(article => {
const newsItem = document.createElement('div');
newsItem.innerHTML = `
<h3>${article.title}</h3>
<p>${article.description}</p>
<a href="${article.url}" target="_blank">Read more</a>
`;
newsContainer.appendChild(newsItem);
});
}
window.onload = displayNews;

// 双击左下角进入Google
document.addEventListener('dblclick', function(event) {
var x = event.clientX;
var y = event.clientY;
if (window.innerWidth <= 768) { // Check if it's a mobile device
var bottomMargin = window.innerHeight - y;
var leftMargin = x;
if (bottomMargin < 50 && leftMargin < 50) { // Check if double click is within the bottom-left corner
window.location.href = 'https://moodhappy.github.io/moodHappy.gitHub.io-nce/style/search.html';
}
}
});

// 双击右下角进入LOL英雄秀
var clickCount = 0;
var lastClickTime = 0;
document.addEventListener('touchstart', function(event) {
var touch = event.touches[0];
var x = touch.clientX;
var y = touch.clientY;
if (window.innerWidth <= 768) { // Check if it's a mobile device
var bottomMargin = window.innerHeight - y;
var rightMargin = window.innerWidth - x;
if (bottomMargin < 50 && rightMargin < 50) { // Check if touch is within the bottom-right corner
var currentTime = new Date().getTime();
if (currentTime - lastClickTime < 300) { // Check if it's a double tap
clickCount++;
if (clickCount == 3) {
window.location.href = 'https://moodhappy.github.io/moodHappy.gitHub.io-nce/image/LOL_hero_show.html';
}
} else {
clickCount = 1;
}
lastClickTime = currentTime;
} else {
clickCount = 0; // Reset click count if touch is not within the bottom-right corner
}
}
});