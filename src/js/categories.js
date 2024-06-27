// Select all elements with the class 'content__category'
const categories = document.querySelectorAll('.content__category');
// Select all elements with the class 'content__lists'
const lists = document.querySelectorAll('.content__lists');

// Iterate over each category element
categories.forEach((category, index) => {
    // Get the corresponding list element by index
    const list = lists[index];
    // Get the unique class name of the list
    const listId = list.classList[0];

    // Assign the unique class name to the data-list-id attribute of the category
    category.dataset.listId = listId;

    // Add an event listener for when the mouse is over the category
    category.addEventListener('mouseover', () => {
        // Add the 'show' class to the list to make it visible
        list.classList.add('show');
    });

    // Add an event listener for when the mouse leaves the category
    category.addEventListener('mouseout', () => {
        // Remove the 'show' class from the list to hide it
        list.classList.remove('show');
    });

    /* Same as for first category.addEventListener because list have to be visible
    * when mouse on list*/
    list.addEventListener('mouseover', () => {
        // Add the 'show' class to the list to keep it visible
        list.classList.add('show');
        // Add the 'underlined' class to the category to underline it
        category.classList.add('underlined');
    });

    /* Same as for second category.addEventListener because list have to be hidden
     * when mouse out of list*/
    list.addEventListener('mouseout', () => {
        // Remove the 'show' class from the list to hide it
        list.classList.remove('show');
        // Remove the 'underlined' class from the category
        category.classList.remove('underlined');
    });
});
