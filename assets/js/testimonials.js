/*************************************************
 The following code will shuffle the testimonials
 and will show only the first several testimonials.
 For best performance, load this script right after
 the HTML code for the testimonials so that the DOM
 changes and displays happen right after the 
 testimonials are added to the DOM. 
***************************************************/

/* return integer in range [min,max] */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

/* maximum number of testimonials to show */ 
var N_TO_SHOW = 6;

/* shuffling code */
var testimonialsContainer = document.getElementById('testimonials');
var $testimonials = document.querySelectorAll('.testimonial');
var nTotal = $testimonials.length;i
/* in case there are fewer testimonials than we want to show */
var maxDraws = Math.min(N_TO_SHOW, nTotal);
for(var i=0; i<maxDraws; i++) {
   /* basic idea of the shuffle: 
      1. pick a number x from 1 to n, place testimonial x at the front.
      2. pick a number x from 2 to n, place testimonial x at the front.
      3. and so on...
   */     
   var x = getRndInteger(1 + i, nTotal);
   testimonialsContainer.insertBefore( $testimonials[x - 1], testimonialsContainer.firstChild )
}

/* change CSS toshow up to the first 6 testimonial divs */
/* grab the testimonials again to get their new ordering */
$testimonials = document.querySelectorAll('.testimonial');
for(var i=0; i<maxDraws; i++) {
   $testimonials[i].style.display = "block";
}
