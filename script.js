/* Data to Show*/
const data = [
  {
    quote: `“Happy Valentine's Day! මගේ සුදු නංගී  ”`,
    emoji: '💗',
    image: `url(assets/3.jpg)`
  },
  {
    quote: `"Even in the vastness of distance, my heart finds solace in the thought of you. Happy Valentine's Day, my love, a beacon of light in my every thought and dream."`,
    emoji: '💓',
    image: `url(assets/2.jpg)`
  },
  {
    quote: `"I love you so much , I love you more than words can say...”`,
    emoji: '💘',
    image: `url(assets/1.jpg)`
  },
  {
    quote: `"In the pages of my dreams, you are the protagonist, painting scenes of love and passion with every stroke.”`,
    emoji: '💖',
    image: `url(assets/4.jpg)`
  },
  {
    quote: `"Among the petals of a rose, lies the secret of my affection, whispered softly to the winds of time.”`,
    emoji: '💕',
    image: `url(assets/6.jpg)`
  },
];

/*
Quote and Emoji
*/
// blockquote
const quote = document.querySelector("blockquote");
// emoji
const emoji = document.querySelector("p");
// background
const bgImage = document.querySelector("body");

// Check-Check: change text
quote.innerHTML = "Will you be my Valentine ?";
// Check-Check: change emoji text
emoji.innerHTML = "💞";
// Check-Check: background image
bgImage.style.backgroundImage = "url(/assets/5.jpg)";

/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
 */
// initialize item number
let itemNumber = 0;
// get next button
const nextButton = document.querySelector("img.next");
// get previous button
const prevButton = document.querySelector("img.prev");
// get random button
const randButton = document.querySelector("img.random");

// listen for clicks on next button
nextButton.addEventListener("click", function () {
  // update, then increase item number with each click
  itemNumber = itemNumber + 1;

  // if at LAST item
  if (itemNumber > data.length - 1) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

// listen for clicks on previous button
prevButton.addEventListener("click", function () {
  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;

  // if at FIRST item
  if (itemNumber < 0) {
    // reset counting to last item
    itemNumber = data.length - 1;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

// listen for clicks on random button
randButton.addEventListener("click", function () {
  // generate random number, for total number, of items (data)
  randomNumber = Math.floor(Math.random() * data.length);

  // display data based random number
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
});

// listen for keypress next
document.addEventListener("keyup", function () {
  // Next Right Arrow
  if (event.keyCode === 39) {
    // update, then increase item number with each click
    itemNumber = itemNumber + 1;

    // if at LAST item
    if (itemNumber > data.length - 1) {
      // reset counting to first item
      itemNumber = 0;
    }

    // display data based on array index
    quote.innerHTML = data[itemNumber].quote;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;
  }

  // Prev Left Arrow
  if (event.keyCode === 37) {
    // update, then DEcrease item number with each click
    itemNumber = itemNumber - 1;

    // if at FIRST item
    if (itemNumber < 0) {
      // reset counting to last item
      itemNumber = data.length - 1;
    }

    // display data based on array index
    quote.innerHTML = data[itemNumber].quote;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;
  }

  // Random Spacebar
  if (event.keyCode === 32) {
    // generate random number, for total number, of items (data)
    randomNumber = Math.floor(Math.random() * data.length);

    // display data based random number
    quote.innerHTML = data[randomNumber].quote;
    emoji.innerHTML = data[randomNumber].emoji;
    bgImage.style.backgroundImage = data[randomNumber].image;
  }
});
