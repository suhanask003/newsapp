import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
  articles = [
    {
      "status": "ok",
      "totalResults": 2,
      "articles": [
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "NBC Sports",
          "title": "Jerod Mayo sounded mostly positive about Jacoby Brissett’s shoulder injury - NBC Sports",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNU2tIYjlKMDZ1RDViTFFuTEdGMkpRZGN1U3V4RW5jd0trWHhwVmxEV2JhRl9uUGZRX2NVUXhQZWRfdVl1akdxOXJ3dnlZdzd5bTljRUJmOW15dzYyMDM2aGxaWW1FZUV3RzdJU3BERGtiMWJYQ3k1TUQwTDFHaHQzaU5NZWZRM2ZXemhSUmRlZDBDeDhpenpldUpEcG9KWkg2NFJNUURNYkF5X2trY3M3S1VEdkNEeGNkcnN4ZExKUjhialZIS2U0d01pd0ZKMzNS?oc=5",
          "urlToImage": null,
          "publishedAt": "2024-08-26T09:25:56Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": "Sports Illustrated",
          "title": "Keegan Bradley Continues Surprise FedEx Cup Playoff Run With Win at BMW Championship - Sports Illustrated",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxQaG1DSC1ydXgxTk92NTdtODB3dDBZQ2MwdDRNaHRpdVN5RXpPcFNvRW1Vem9tVUoyY2ZsNEx4eVQ1RnJtMGlxVEJybXpWQnZEZ09QQ0RJUzN3QlN4VUpaMkNIbFQ4QjA0RkxMVXdrQXpzYi1uR0lMc1JWUTJHNkJvdjdFdi0?oc=5",
          "urlToImage": null,
          "publishedAt": "2024-08-26T02:40:42Z",
          "content": null
        }
      ]
    }
  ]
  constructor() {
    super();
    console.log("Hello I am a constructor from News Componenent");
    this.state = {
      articles: this.articles,
      loadng: false
    }
  }

  render() {
    return (
      <div className="container my-3" >
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key = {element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News
