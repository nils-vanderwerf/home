
//store all links in a variable
let allLinks= document.querySelectorAll('.clickable-link');

allLinks.forEach(function(link){
    link.addEventListener('click', function(event) {
      
        //Remove active class of previously clicked elements
        const removeActiveClass = document.getElementsByClassName('clickable-link'); 
        const divsToHide = document.getElementsByClassName("all-work"); 

        for(var i = 0; i < removeActiveClass.length; i++){
            removeActiveClass[i].classList.remove("active");
        }

        //Hide all pieces of work before showing again 
        for(var i = 0; i < divsToHide.length; i++){
            divsToHide[i].style.display = "none";
        }

        //Add active class to clicked element 
        this.classList.add("active");

        //Viable holding divs to show lin the following switch statement, using a 'for' loop
        let divsToShow; 

        //Get the id of the element that was clicked on
        switch(this.id) {
            case 'all-links':
                console.log('all-links was selected');
                divsToShow = document.getElementsByClassName("all-work"); //show all pieces of work
                for(var i = 0; i < divsToShow.length; i++) {
                    divsToShow[i].style.display = "block";
                }
                break;
            case 'branding-link':
                console.log('all-links was selected');
                divsToShow = document.getElementsByClassName("branding"); //show all branding pieces of work
                for(var i = 0; i < divsToShow.length; i++) {
                    divsToShow[i].style.display = "block";
                }
                break;

            case 'illustration-link':
                divsToShow = document.getElementsByClassName("illustration"); //show all branding pieces of work
                for(var i = 0; i < divsToShow.length; i++) {
                    divsToShow[i].style.display = "block";
                }
                break;

            case "email-link":
                divsToShow = document.getElementsByClassName("edm"); //collect all work sections in an array
                for(var i = 0; i < divsToShow.length; i++) {
                    divsToShow[i].style.display = "block";
                };
                break;

            case "trade-show-link":
                divsToShow = document.getElementsByClassName("trade-show"); //collect all work sections in an array
                for(var i = 0; i < divsToShow.length; i++) {
                    divsToShow[i].style.display = "block";
                };
                break;
            }
        
            }); 
    });

    
/*allLinks.addEventListener('click', function(event) {
    event.preventDefault();
    alert(this.innerText);
});*/

// Branding is visible and active by default
// 1. Click on one of the clickable links
// 2. Removes "active" status from all the other categories
// 3. Hides all inactive categories
// 4. Applies "active" to new clicked on element

//Enlarges clicked on image - if I have time