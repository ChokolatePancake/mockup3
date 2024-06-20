const categories = document.querySelectorAll('.content__category');
const lists = document.querySelectorAll('.content__lists');

categories.forEach((category, index) => {
    const list = lists[index];
    const listId = list.classList[0]; // Get the unique class name of the list

    category.dataset.listId = listId;

    category.addEventListener('mouseover', () => {
        list.classList.add('show');
    });

    category.addEventListener('mouseout', () => {
        list.classList.remove('show');
    });

    list.addEventListener('mouseover', () => {
        list.classList.add('show');
        category.classList.add('underlined');
    });

    list.addEventListener('mouseout', () => {
        list.classList.remove('show');
        category.classList.remove('underlined');
    });
});