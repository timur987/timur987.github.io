export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("_certs");
    eleventyConfig.addPassthroughCopy("_img");
};