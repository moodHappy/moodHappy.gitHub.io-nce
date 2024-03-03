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