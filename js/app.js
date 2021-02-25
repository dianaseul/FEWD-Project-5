// baguetteBox lightbox plugin //
// --------------------------- //
baguetteBox.run('.gallery', {
    captions: true,
    buttons: 'auto',
});


// Create my own search function to filter images by key words //
// ---------------------------------------------------------- //
const search = document.getElementById('search');

search.addEventListener('keyup', (e) => { // registers each key stroke 
    const userSearch = e.target.value.toLowerCase(); // search keystrokes to lowercase 
    console.log('searchkey', userSearch);
    mySearchFunction(); // calls for loop 
});

function mySearchFunction() {
    var input, filter, gallery, a, data;
    input = document.getElementById('search');
    filter = input.value.toLowerCase(); // search field input string to all lowercase
    gallery = document.getElementsByClassName('gallery');
    a = gallery[0].getElementsByTagName('a');
    //loop if search string filter matches string found in data, display link & if not display none.
    for (var i = 0; i < a.length; i++) {
        data = a[i].getAttribute('data-caption');
        if (data.indexOf(filter) > -1) {
            a[i].style.display = '';
        } else {
            a[i].style.display = 'none';
        } 
    };
} 




