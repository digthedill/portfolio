module.exports = function (eleventyConfig) {



    eleventyConfig.addPassthroughCopy({
        "./src/admin/config.yml": "./admin/config.yml",
        // "./node_modules/alpinejs/dist/cdn.min.js": "./static/js/alpine.js",
        // "./node_modules/prismjs/themes/prism-tomorrow.css":
        //     "./static/css/prism-tomorrow.css",
        });
    

    // Let Eleventy transform HTML files as nunjucks
    // So that we can use .html instead of .njk
    return {
        dir: {
        input: "src",
        },
        htmlTemplateEngine: "njk",
    };
}