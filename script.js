let workCategories = document.getElementsByClassName('work-wrapper');
let activeCategory = document.getElementsByClassName('active');
console.log('activeCategory[0]');

function hideAllCategories() {
    for (var i = 0; i < workCategories.length; i++){
        workCategories[i].style.display = "none";
    }
}

function showActiveCategory() {
hideAllCategories();
activeCategory[0].style.display="block";
}

