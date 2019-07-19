
const $overlay = $('<div id="overlay"></div>');
const $wrapper = $('<div class="wrapper"></div>');
const $caption = $("<p></p>");
const $closeBtn = $('<button class="btn-close">&cross;</button>');
const $prevBtn = $('<button class="btn-prev">&larr;</button>');
const $nextBtn = $('<button class="btn-next">&rarr;</button>');

const $container = $('<div class="container"></div>');
const $image = $("<img>");

//Add container(with img) to wrapper
$wrapper.append($container);

//Add wrapper and control buttons to overlay
$overlay.append($closeBtn, $prevBtn, $wrapper, $nextBtn, $caption);

//Add overlay to page
$overlay.insertAfter($('main'));


function lightboxShow(linkToShow) {
    let linkLocation = linkToShow.attr("href");
    $container.empty();

    //Add img to container
    $image.attr("src", linkLocation);
    $container.append($image);

    let captionText = linkToShow.children("img").attr("title");
    $caption.text(captionText);

    //remove 'selected' class from previously selected list item
    $("#gallery li.selected").removeClass("selected");
    //add 'selected' class to the parent list item of current link displayed
    linkToShow.closest("li").addClass("selected");

    setBtnControls();

    $overlay.show();
}


function showPrevious() {
    let prevLink = $("#gallery li.selected").prev().children("a");
    lightboxShow(prevLink);
}


function showNext() {
    let nextLink = $("#gallery li.selected").next().children("a");
    lightboxShow(nextLink);
}


function closeLightbox() {
    $overlay.hide();
}


function setBtnControls() {
    $prevBtn.prop("disabled", false);
    $nextBtn.prop("disabled", false);
    let selectedLi = $("#gallery li.selected");
    //check for first list item and disable prevbtn
    //check for last list item and disable nextbtn
    if ( selectedLi.prev().length === 0 ) {
        $prevBtn.prop("disabled", true);
    } else if ( selectedLi.next().length === 0 ) {
        $nextBtn.prop("disabled", true);
    }
    return;
}


//keyboard controls
$(document).keyup(function(event) {
    if ( $overlay.is(":visible") ) {
        if ( event.which == '37' && $prevBtn.is(":enabled") ) {
            //left arrow will not work on first item, where prevbtn is disabled
            showPrevious();
        } else if ( event.which == '39' && $nextBtn.is(":enabled") ) {
            showNext();
        } else if (event.which == '27') {
            //esc to close
            closeLightbox();
        }
    }
});


//capturing the click event on a link in the gallery list item
$("#gallery a").click(function(event) {
    event.preventDefault();
    let theLinkToShow = $(this);
    lightboxShow(theLinkToShow);
});

//click on overlay buttons
$closeBtn.click(closeLightbox);
$prevBtn.click(showPrevious);
$nextBtn.click(showNext);
















