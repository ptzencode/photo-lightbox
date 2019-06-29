
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






















