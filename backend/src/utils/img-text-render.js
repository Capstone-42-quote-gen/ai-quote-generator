// Define variables for PRIMARY QUOTE block text-related properties
const text = "Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations. — Steve Jobs";
const textSize = 60;
const textColor = "fff";
const textFont = "avenir-black";
const textLeading = 0;
const textPadding = 60;
const backgroundColor = "55002228";
const imageWidth = 800;

// Construct the imgix URL with the variables
const imgUrl = `https://assets.imgix.net/~text?w=${imageWidth}&txtclr=${textColor}&txt=${encodeURIComponent(text)}&txtsize=${textSize}&txtlead=${textLeading}&txtpad=${textPadding}&bg=${backgroundColor}&txtfont=${textFont}`;

// Encode the imgUrl to base64
const base64Url = btoa(imgUrl);

// Print the constructed URL and the base64-encoded URL for preview
console.log("Constructed URL:", imgUrl);
console.log("Base64-encoded URL:", base64Url);
