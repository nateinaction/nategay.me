/**
 * This file converts images to webp
 * https://css-tricks.com/using-webp-images/
 */
const imagemin = require("imagemin");
const webp = require("imagemin-webp");
const imageDir = "src/assets/images";

(async () => {
	const pngConverted = await imagemin([`${imageDir}/*.png`], {
        destination: imageDir,
        plugins: [webp({
            lossless: true
        })]
    });
    console.log(pngConverted);
    
    const jpegConverted = imagemin([`${imageDir}/*.jpg`], {
        destination: imageDir,
        plugins: [webp({
            quality: 65
        })]
    });
    console.log(jpegConverted);
})();
