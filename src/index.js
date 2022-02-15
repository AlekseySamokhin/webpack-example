import Post from "@models/Post";
import json from "./assets/json.json";
import xml from "./assets/data.xml";
import WebpackLogo from "./assets/webpack-logo.png";
import "./styles/style.css";

const post = new Post("Webpack Post Title", WebpackLogo);
console.log("Post to String:", post.toString());

console.log("JSON: ", json);
console.log("LOGO: ", WebpackLogo);
console.log("XML: ", xml);
