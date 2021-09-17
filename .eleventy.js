const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
const algoliasearch = require("algoliasearch");

const client = algoliasearch("DM3RZH4ZSK", "36fc36bcb1cc6c88b3c5c1689ec57250");
const index = client.initIndex("blog_search");


module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "search", // The serverless function name from your permalink object
    functionsDir: "./netlify/functions/",
  });

  eleventyConfig.addFilter("getResults", function(query) {
      console.log(query);
    const results = index.search(query, {
        attributesToRetrieve: ["title", "url", "date", "description"],

    }).then(res => {
        return res.hits;
    })
    return results
   });

};