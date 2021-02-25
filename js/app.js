
// baguetteBox lightbox plugin //
baguetteBox.run('.gallery', {
    captions: true,
    buttons: 'auto',
    fullScreen: false,
    noScrollBars: false,
    bodyClass: 'baguetteBox-open',
    async: false,
    overlayBackgroundColor: 'rgba(0, 0, 0, .8)',
});


// Create my own search function to filter images by key words //
const search = document.getElementById('search');

search.addEventListener('keyup', (e) => { // registers each key stroke //
    const userSearch = e.target.value.toLowerCase(); // search string to lowercase //
    console.log('searchkey', userSearch);
    mySearchFunction(); // calls for loop //
});

function mySearchFunction() {
    var input, filter, gallery, a, data;
    input = document.getElementById('search');
    filter = input.value.toLowerCase();
    gallery = document.getElementsByClassName('gallery');
    a = gallery[0].getElementsByTagName('a');
    
    for (var i = 0; i < a.length; i++) {
        data = a[i].getAttribute('data-caption');
        if (data.indexOf(filter) > -1) {
            a[i].style.display = '';
        } else {
            a[i].style.display = 'none';
        } 
    };
} 
