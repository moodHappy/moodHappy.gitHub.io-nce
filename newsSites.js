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
    "https://www.bbc.com/",
    "https://www.cnn.com/",
    "https://www.reuters.com/",
    "https://www.nytimes.com/",
    "https://www.theguardian.com/international",
    "https://edition.cnn.com/",
    "https://www.buzzfeednews.com/",
    "https://www.bloomberg.com/",
    "https://www.washingtonpost.com/",
    "https://www.economist.com/",
    "https://www.wsj.com/",
    "https://www.apnews.com/",
    "https://time.com/",
    "https://www.aljazeera.com/",
    "https://www.forbes.com/",
    "https://www.nationalgeographic.com/",
    "https://www.newyorker.com/",
    "https://www.usatoday.com/",
    "https://www.latimes.com/",
    "https://www.telegraph.co.uk/",
    "https://www.independent.co.uk/",
    "https://www.ft.com/",
    "https://www.newsweek.com/",
    "https://www.dailymail.co.uk/home/index.html",
    "https://www.thesun.co.uk/",
    "https://abcnews.go.com/",
    "https://www.nbcnews.com/",
    "https://www.cbsnews.com/",
    "https://www.foxnews.com/",
    "https://www.msnbc.com/",
    "https://www.npr.org/",
    "https://thehill.com/",
    "https://www.politico.com/",
    "https://www.vox.com/",
    "https://slate.com/",
    "https://qz.com/",
    "https://www.theverge.com/",
    "https://www.wired.com/",
    "https://techcrunch.com/",
    "https://mashable.com/",
    "https://www.buzzfeed.com/",
    "https://www.vice.com/en",
    "https://www.theonion.com/",
    "https://www.thedailyshow.com/",
    "https://www.hbo.com/last-week-tonight-with-john-oliver",
    "https://www.ted.com/",
    "https://medium.com/",
    "https://theconversation.com/",
    "https://www.scientificamerican.com/",
    "https://www.nature.com/",
    "https://www.thetimes.co.uk/",
    "https://www.newscientist.com/",
    "https://www.rollingstone.com/",
    "https://www.espn.com/",
    "https://www.vanityfair.com/",
    "https://www.hollywoodreporter.com/",
    "https://www.people.com/",
    "https://www.tmz.com/",
    "https://www.elle.com/",
    "https://www.cosmopolitan.com/",
    "https://www.vogue.com/", 
    "https://pageviews.wmcloud.org/topviews/?project=en.wikipedia.org&platform=all-access&date=2023-12-29&excludes=",
    "https://www.taicishe.com/",
    "https://www.lyricsmode.com/",
    "https://bigthink.com/",
    "https://www.themoscowtimes.com/"
            ];
            var randomIndex = Math.floor(Math.random() * newsSites.length);
            window.open(newsSites[randomIndex], "_blank");
        }