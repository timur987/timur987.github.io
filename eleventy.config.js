export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("_certs");
    eleventyConfig.addPassthroughCopy("_img");
    
    eleventyConfig.addFilter("getYear", (dateObj) => {
        return new Date(dateObj).getFullYear();
    });
};
