// ==UserScript==
// @name         Highlight English Keywords
// @namespace    https://greasyfork.org/zh-TW
// @version      1.0
// @description  给网页关键词改变成统一红色，完整匹配
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 引入外部js文件，包含关键词
    var script = document.createElement('script');
    script.src = 'https://moodhappy.github.io/moodHappy.gitHub.io-nce/style/Keywords.js'; // 替换为你的关键词js文件路径
    script.onload = function() {
        // 引入成功后执行替换操作
        replaceKeywords();
    };
    document.head.appendChild(script);

    // 遍历所有的文本节点，查找并替换关键词
    function replaceKeywords() {
        // 获取所有的文本节点
        var nodes = getTextNodes();
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            var text = node.textContent;
            var parent = node.parentNode;
            for (var j = 0; j < keywords.length; j++) {
                var keyword = keywords[j];
                var regex = new RegExp("\\b" + keyword + "\\b", "g"); // 使用正则表达式，完整匹配关键词
                var match;
                while (match = regex.exec(text)) {
                    var index = match.index;
                    var span = document.createElement("span");
                    span.style.color = "red"; // 统一设置红色
                    span.textContent = text.slice(index, index + keyword.length);
                    var after = node.splitText(index);
                    after.textContent = after.textContent.slice(keyword.length);
                    parent.insertBefore(span, after);
                }
            }
        }
    }

    // 获取所有的文本节点
    function getTextNodes() {
        var nodes = [];
        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
        var node;
        while (node = walker.nextNode()) {
            nodes.push(node);
        }
        return nodes;
    }

})();