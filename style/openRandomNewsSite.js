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
"https://pageviews.wmcloud.org/topviews/?project=en.wikipedia.org&platform=all-access&date=yesterday&excludes=",
"https://www.taicishe.com/",
"https://www.lyricsmode.com/",
"https://bigthink.com/",
"https://www.themoscowtimes.com/",
"https://www.miamiherald.com/",
"www.axios.com",
"https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B0%A1%E9%AB%94/",
"https://www.vocabulary.com/"
];
var randomIndex = Math.floor(Math.random() * newsSites.length);
window.open(newsSites[randomIndex], "_blank");
}