
<!--    
<script>
     
    
      function getURL(){
        var a = document.querySelector('.source-url').value;
        WriteCookie(a);
      }

      
      function WriteCookie(a) {
           cookievalue = escape(a) + ";"
           document.cookie = "name=" + cookievalue;
        }
      
      
      // Add event listener to table
const el = document.getElementById("shorten-url");
el.addEventListener("click", getURL);



//check for Navigation Timing API support
if (window.performance) {
   console.info("window.performance works fine on this browser");
}
console.info(performance.navigation.type);
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  ReadCookie();
  //  console.info("This page is reloaded");
} else {
  //  console.info("This page is not reloaded");
}

function ReadCookie() {
               var allcookies = document.cookie;
              //  console.log(allcookies)
               // Get all the cookies pairs in an array
               cookiearray = allcookies.split(';');
               
               // Now take key value pair out of this array
               for(var i=0; i<cookiearray.length; i++) {
                  name = cookiearray[i].split('=')[0];
                  value = cookiearray[i].split('=')[1];
                  document.querySelector('.source-url').value = value;
                  // console.log("Key is: " + name + " and Value is : " + value);
               }
            }
  </script>  -->