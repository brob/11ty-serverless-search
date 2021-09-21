# 11ty Serverless Search with Algolia

[Demo Site](https://11ty-search.netlify.app/)

Algolia has a ton of great front-end tools for creating real-time search in JavaScript, but if you're a Jamstacker and want (need) to fall back to a server-side search and render, what do you do?

11ty Serverless rescues us by rendering a search page on the fly with the same templates as our build-generated pages.

## Running the site

The site requires an [Algolia account](https://www.algolia.com/?utm_source=social&utm_medium=github&utm_campaign=devrel&utm_id=11ty-serverless) with an Index that has records that have a `title`, `url`, and `description`.

Clone the repository and run `npm install`.

From there, convert the .env.test file to just `.env` and replace the variables with your App ID, Search-only API key and index name.

Run `npm start` to locally run the project.
