const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/pdfs/");
    eleventyConfig.addWatchTarget("./src/pdfs/");

    eleventyConfig.addFilter('readableDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
          'DDD'
        );
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};