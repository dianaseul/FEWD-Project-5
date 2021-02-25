baguetteBox.run('.gallery', {
    captions: true,
    buttons: 'auto',
    fullScreen: false,
    noScrollBars: false,
    bodyClass: 'baguetteBox-open',
    async: false,
    overlayBackgroundColor: 'rgba(0, 0, 0, .8)',
});

const search = document.getElementById('search');

search.addEventListener('keyup', (e) => {
    const userSearch = e.target.value.toLowerCase();
    console.log(userSearch);

});

/*function mySearchFunction() {
    var input, filter, gallery, a, data;
    input = document.getElementById('search');
    filter = input.value.toLowerCase();
    gallery = document.getElementByClassName('gallery');
    a = gallery.getElementByTagName('a');
}
*/

