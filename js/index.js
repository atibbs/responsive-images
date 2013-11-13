/*  
 *  Load 2x images on high DPR displays 
 *  by Andrew Tibbs
 *  http://andrewtibbs.org
 *
 */



$(function() {

  /* Adds '-2x' to Image Source if DPR is greater than 1.5 */
  if (window.devicePixelRatio >= 1.5) {

    var images = $("img");
    
    for(var i = 0; i < images.length; i++) {
      
      // split source into array
      var imageSegments = images[i].src.split('.');

      // grab file extension
      var imageFormat = imageSegments.pop();

      // rejoin existing segments into string
      var imageJoin = imageSegments.join(".");

      // append source string with 2x and add file extension
      var imageSrc = imageJoin + "-2x" + "." + imageFormat;

      // change source to 2x
      images[i].src = imageSrc;
    }
  }






/* What's Missing? 

Does not check for valid file extensions
Does not prevent initial image resource request - it still loads both images
Can be turned into a plugin; settings for DPR, and appended string

*/





}) // Closes anonymous function
