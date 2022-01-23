
// function myHome(){ 
//     var homePage = document.getElementById('home');
//     homePage.scrollIntoView(); 
// }
// function aboutUs(){     
//     var aboutPage = document.getElementById('about');
//     aboutPage.scrollIntoView(); 
// }
// function myProcess(){ 
// var processPage = document.getElementById(process);
//         processPage.scrollIntoView();
// }
// function myClient(){ 
//     var clientsPage = document.getElementById('clients');
//     clientsPage.scrollIntoView(); 
// }
// function myContact(){ 
//     var contactPage = document.getElementById('contact');
//     contactPage.scrollIntoView(); 
// }



function pageScroller(scrollingPages) {
    if(scrollingPages == 'homeValue') {
        var homePage = document.getElementById('home');
        homePage.scrollIntoView(); 
    }
    else if (scrollingPages == 'aboutValue') {
        var aboutPage = document.getElementById('about');
        aboutPage.scrollIntoView();    
    }
    else if (scrollingPages == 'processValue') {
        var processPage = document.getElementById('process');
        processPage.scrollIntoView();    
    }
    else if (scrollingPages == 'clientValue') {
        var clientPage = document.getElementById('clients');
        clientPage.scrollIntoView();    
    }
    else {
        var contactPage = document.getElementById('contact');
        contactPage.scrollIntoView();    
    }
}

function moveToTop(){
    var homePage = document.getElementById('backToTop');
    homePage.scrollIntoView();    
    }
    // console.log("Go on")
