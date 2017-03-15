/**
 *  site.js - WadeWooldridge.com portfolio site support code.
 *  Copyright (C) 2017 Wade Wooldridge
 */

$(document).ready(function() {
    console.log('Document ready.');

    // Which album is currently being shown.
    var albumSelected = 0;

    // jQuery selectors for the albums.
    var albumSelectors = [
        $('#album-0'),
        $('#album-1'),
        $('#album-2'),
        $('#album-3')
    ];

    // Helper function to hide everything but the shown album.
    function hideAndShowAlbums() {
        console.log('hideAndShowAlbums: ' + albumSelected);
        for (let i = 0; i < albumSelectors.length; i++){
            let selector = albumSelectors[i];
            if (i === albumSelected) {
                $(selector).show();
            } else {
                $(selector).hide();
            }
        }
    }

    // Start with three albums contents hidden, and music quote up.
    hideAndShowAlbums();

    // For each of the albums, clicking on it removes any other albums, and brings up the contents.
    // Clicking on it again brings down the contents and restores album-0 (the blockquote).
    $('.album-cover img').click(function(event) {
        let albumId = event.target.id;
        let albumClicked = parseInt(albumId.slice(-1));
        console.log('click: ' + albumClicked);

        if (albumSelected === albumClicked) {
            // Already selected this album; turn it off.
            albumSelected = 0;
        } else {
            // Select the album clicked.
            albumSelected = albumClicked;
        }

        hideAndShowAlbums();
    });

});
