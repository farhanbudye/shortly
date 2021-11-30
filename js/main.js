'use strict';

window.getURL = function() {
    var enteredURL = document.querySelector('.source-url').value;
    let searchParams = ['.com', '.org', 'co.in', '.in', '.me', '.biz'];
    //  let searchParams = '.com';
    //  console.log(enteredURL)
    var checkParam;


    if (enteredURL) {
        // console.log("dfh")
        // let eURL = ``;
        // let shorCodeString = 'shrt';

        $.getJSON(`https://api.shrtco.de/v2/shorten?url=${enteredURL}`, function(data) {
            // console.log(data);
            $.each(data, function(key, value) {
                let urlApiValue = value.short_link;
                document.querySelector('.source-url').value = value.short_link;
                let shortenedInputValue = document.querySelector('.source-url').value;

                if (urlApiValue == shortenedInputValue) {
                    $("#copy_button").removeClass("d-none");
                    // $("#shorten-url").addClass("d-none");
                    window.WriteCookie(shortenedInputValue);
                    // window.copyUrlToClip();
                }
                // else{

                // if(enteredURL)
                // console.log("includes");
                // else console.log("not includes");
                // }
                // else if(shortenedInputValue.substring('shrt'(0,5))){
                //   console.log("afraewr")
                // }
                // console.log(value)
            });
        });

        // window.WriteCookie(enteredURL);
    } else {

        var toastLiveExample = document.getElementById('liveToast');
        document.querySelector('.toast-body').innerHTML = "Please enter correct URL to be shortened.";
        document.querySelector('.message-header').innerHTML = "Incorrect";
        var toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
    }

}

window.WriteCookie = function(url) {
    // alert("Copied the text: " );
    let cookievalue = escape(url) + ";"
    document.cookie = "name=" + cookievalue;
    //  alert(document.cookie);

    //    console.log("WC")
}

window.copyUrlToClip = function() {
    var copyText = document.querySelector(".source-url");
    // /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    document.querySelector('.toast-body').innerHTML = "Copied Shortened URL: " + copyText.value;
    document.querySelector('.message-header').innerHTML = "Success";
    /* Alert the copied text */
    // alert("Copied Shortened URL: " + copyText.value);

}




// Add event listener to table
const el = document.getElementById("shorten-url");
el.addEventListener("click", window.getURL);

const copyURL = document.getElementById("copy_button");
if (copyURL != null) {
    copyURL.addEventListener("click", window.copyUrlToClip);
    var toastLiveExample = document.getElementById('liveToast')
    if (copyURL) {
        copyURL.addEventListener('click', function() {
            var toast = new bootstrap.Toast(toastLiveExample)
            toast.show()
        })
    }

} else console.log("Nothing to be copied...")



// window.checkRefresh = function()
// {
//    let aa = window.performance;

//    let b= aa.PerformanceTiming;
//    console.log(aa);
//    console.log(b);

// 	if( document.refreshForm.visited.value == "" )
// 	{
// 		// This is a fresh page load
// 		document.refreshForm.visited.value = "1";
//         console.log("This page is fresh");
// 		// You may want to add code here special for
// 		// fresh page loads
// 	}
// 	else
// 	{
// 		// This is a page refresh
// console.log("This page is reloaded");
// 		// Insert code here representing what to do on
// 		// a refresh
// 	}
// } 




// //check for Navigation Timing API support
// if (window.performance) {
// console.info("window.performance works fine on this browser");
// }
// console.info(performance.entryType);
// if (performance.entryType == performance.navigation.TYPE_RELOAD) {
// ReadCookie();
// //  console.info("This page is reloaded");
// } else {
// //  console.info("This page is not reloaded");
// }

window.ReadCookie = function() {
    var allcookies = document.cookie;
    //    console.log(allcookies)
    // Get all the cookies pairs in an array
    let cookiearray = allcookies.split(';');
    //   console.log(cookiearray.length);
    if (cookiearray.length != 0 && allcookies != "") {
        // alert(cookiearray.length);
        $("#copy_button").removeClass("d-none");
        // Now take key value pair out of this array
        for (var i = 0; i < cookiearray.length; i++) {
            let name = cookiearray[i].split('=')[0];
            let value = cookiearray[i].split('=')[1];
            document.querySelector('.source-url').value = value;
            // console.log("Key is: " + name + " and Value is : " + value);
        }
    }
    //  else alert("No cookie available");
    else console.log("No cookie available");
}