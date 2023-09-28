

import cors from "cors";
import  express from "express";


import RSSParser from "rss-parser";

const feedURL = "https://sujanadk.substack.com/feed";


const parser = new RSSParser();

let articles = [];

const parse =async url =>{

const feed  = await parser.parseURL(url);




feed.items.forEach(item =>{

   articles.push({item})
    
})

}

parse(feedURL);
let app = express();
app.use(cors());
app.get('/', (req, res)=>{

    res.send(articles);
})

const server = app.listen("4000",()=>{

    console.log("App is listening at 4000 port");
})

export default server;