
//store all links in a variable
let allLinks= document.querySelectorAll('.clickable-link');
console.log(allLinks);

allLinks.forEach(function(link){
    link.addEventListener('click', function(event) {
      
        //If it contains the class of active, remove it, to ensure only one element has the class
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        //
        } 

        //Add class of active to clicked element
        this.classList.add('active');

        //Grab the id of clicked element
        let thisID = this.id;
        console.log(thisID);

        //Use the function to set display to visible/invisible based on link that what what clicked on
        switch(thisID) {
            case "all-links":
                let divsToShow = document.getElementsByClassName("work-category"); //collect all work sections in an array
                for(var i = 0; i < divsToShow.length; i++){
                    divsToShow[i].style.display = "block"; 
                }

                break;
            case "branding-link":
                switchVisibility("branding");
                break;

            case "illustration-link":
                switchVisibility('illustration');
                break;

            case "email-link":
                switchVisibility('edm');
                break;

            case "trade-show-link":
                switchVisibility('trade-show');
                break;
            }
        
            }); 
    });

        function switchVisibility(clickedID) {

            let divsToHide = document.getElementsByClassName("work-category"); //collect all work sections in an array
            for(var i = 0; i < divsToHide.length; i++){
                divsToHide[i].style.display = "none";
            }

            activeElement = document.getElementById(clickedID);
            activeElement.style.display = "block";
            return;
        }
    
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