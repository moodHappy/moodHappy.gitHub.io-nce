// ==UserScript==
// @name         Highlight English Keywords
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Highlight English keywords
// @author       Your name
// @match        *://*/*
// @exclude      *google.*/*
// @exclude      *bing.*/*
// @exclude      *baidu.*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Load keywords from external JavaScript file
    var script = document.createElement('script');
    script.src = 'https://moodhappy.github.io/moodHappy.gitHub.io-nce/style/Keywords.js'; // 将此处替换为实际的关键词文件的 URL
    script.onload = function() {
        var keywords = window.keywords;

        // Function to highlight keywords
        function highlightKeywords(node) {
            if (node.nodeType === 3) {
                // Text node
                var text = node.textContent;
                keywords.forEach(function(keyword) {
                    var re = new RegExp('\\b' + keyword + '\\b', 'gi');
                    text = text.replace(re, function(match) {
                        return '<span style="background-color: red;">' + match + '</span>';
                    });
                });
                var newNode = document.createElement('span');
                newNode.innerHTML = text;
                node.parentNode.replaceChild(newNode, node);
            }
        }

        // Recursive function to traverse DOM and highlight keywords
        function traverse(node) {
            var child,
            next;
            switch (node.nodeType) {
                case 1: // Element
                    case 9: // Document
                        case 11: // Document fragment
                            child = node.firstChild;
                            while (child) {
                                next = child.nextSibling;
                                traverse(child);
                                child = next;
                            }
                            break;
                        case 3: // Text node
                            highlightKeywords(node);
                            break;
                }
            }

            // Start traversal from the document body
            traverse(document.body);
        };
        document.head.appendChild(script);
    })();