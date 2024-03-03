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

        function addEffects() {
            var elements = document.body.getElementsByTagName("*");
            for (var i = 0; i < elements.length; i++) {
                var color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
                elements[i].style.color = color;
            }
        }

        window.addEventListener("load", addEffects);

        function openRandomNewsSite() {
            var newsSites = [
    "www.axios.com",
    "https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B0%A1%E9%AB%94/",
    "https://www.vocabulary.com/"
            ];
            var randomIndex = Math.floor(Math.random() * newsSites.length);
            window.open(newsSites[randomIndex], "_blank");
        }