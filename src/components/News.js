import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Kris Holt",
      title:
        "EA Sports' dormant College Football will reemerge, cicada-like, on July 19",
      description:
        "It's been a long time coming but we finally know when College Football 25, EA Sports' revival of the long-dormant football sim series, will hit consoles. The game will land on PlayStation 5 and Xbox Series X/S on July 19, living up to EA's promise that it wou…",
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_dafd99bb-75ec-41f1-961a-04666bd3f5ce",
      urlToImage: null,
      publishedAt: "2024-05-16T17:51:36Z",
      content:
        "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Andrew J. Hawkins",
      title:
        "Jeep’s Wagoneer S Trailhawk concept teases a fully electric off-roader",
      description:
        "Jeep’s Wagoneer S electric SUV could be getting a Trailhawk trim based on a new concept released today. The EV sports tow hooks, 31.5-inch tires, and a host of rugged details.",
      url: "https://www.theverge.com/2024/5/30/24168099/jeep-wagoneer-s-trailhawk-concept-ev-off-road",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/iEAA2ZD42LotvMbkIGsLfBBfEfo=/0x0:4032x3024/1200x628/filters:focal(2016x1512:2017x1513)/cdn.vox-cdn.com/uploads/chorus_asset/file/25471369/IMG_7799.jpg",
      publishedAt: "2024-05-30T23:00:00Z",
      content:
        "Jeeps Wagoneer S Trailhawk concept teases a fully electric off-roader\r\nJeeps Wagoneer S Trailhawk concept teases a fully electric off-roader\r\n / Sitting pretty on 31.5-inch tires.\r\nByAndrew J. Hawkin… [+2840 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title: "Women better at sport during period, study suggests",
      description:
        "It could explain why women playing contact sports appear injury prone between ovulation and menstruation.",
      url: "https://www.bbc.com/news/articles/cl446z20mvjo",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/0aae/live/162c92f0-233a-11ef-94ce-2524c2e905df.jpg",
      publishedAt: "2024-06-05T15:54:46Z",
      content:
        "Aurelia Foster,Health reporter, BBC News\r\nSports injuries could be linked with fluctuating hormones during the menstrual cycle, researchers say\r\nSportswomen make fewer mistakes and have quicker react… [+2326 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: null,
      title: "Emilia Romagna Grand Prix third practice before qualifying",
      description:
        "Follow live text updates and BBC Radio 5 Sports Extra commentary from third practice at the Emilia Romagna Grand Prix.",
      url: "https://www.bbc.co.uk/sport/live/formula1/69020346",
      urlToImage:
        "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
      publishedAt: "2024-05-17T16:32:01Z",
      content:
        "Hello, folks. It's nice to have some early morning F1 action back on the agenda. \r\nThe weather was sunny but gusty during yesterday's two practice sessions and today's fight for pole position looks t… [+432 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Bharat Bulletin</h2>
        <div className="row">
          {this.state.articles.map((item) => {
            return (
              <div className="col-md-4" key={item?.url}>
                <NewsItem
                  title={item?.title?.slice(0, 45)}
                  description={item?.description?.slice(0, 88)}
                  imageUrl={item?.urlToImage}
                  newsUrl={item?.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
