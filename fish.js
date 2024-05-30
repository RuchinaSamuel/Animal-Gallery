

document.addEventListener('DOMContentLoaded', function() {
    // Get all load more buttons
    let loadMoreButtons = document.querySelectorAll('.load-more-button');
    
    // Loop through each load more button
    loadMoreButtons.forEach((loadMoreBtn, index) => {
        let boxesToShow = 4;
        let currentItem = 0;
        let section = loadMoreBtn.closest('.box-content');
        let boxes = section.querySelectorAll('.box');
        
        // Initially hide all boxes except the first 4
        for (let i = boxesToShow; i < boxes.length; i++) {
            boxes[i].style.display = 'none';
        }
        
        // Load more button click event
        loadMoreBtn.addEventListener('click', function() {
            for (let i = currentItem; i < currentItem + boxesToShow; i++) {
                if (i < boxes.length) {
                    boxes[i].style.display = 'inline-block';
                }
            }
            currentItem += boxesToShow;
            
            if (currentItem >= boxes.length) {
                loadMoreBtn.style.display = 'none';
            }
        });
    });
    });
    
    