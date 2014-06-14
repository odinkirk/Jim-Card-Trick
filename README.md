#Jim-Card-Trick


This app is intended to perform a magic trick using a virtual (or real) deck of cards. Logic for the trick provided by Jim Schwegerl. Code and design by John Allison.

Originally written (somewhat unsuccessfully) using jQuery and jQueryUI, now being re-writtten/converted to Angular.js. Also incorporating Bootstrap.

##CURRENT STATUS
--------------

**Functionality**:

The path where the user has their own deck is fully functional, as is the reset function (as of this writing). Functionality still to be completed:

* The functions for shuffling the deck need to be ported.
* The functions and controls for the deck cut.
* The functions and controls for when the card is presented

**Aesthetics**:

There is some Bootstrap  UI template stuff that needs to be cleared out and there's some testing stuff still to be cleared out. I also want to pretty up the buttons.

##WISH LIST
After a successful version 1.0, this is what's next.

* Show the deck once the shuffle is done.
* Would be cool to set up a form on the user-has-deck track where they can put in the cut and then the value will be saved. Then use it on the next page to remind the user where to find the magic card.
  * Perhaps with a green boostrap alert showing that it's been saved.
  * Also maybe a red one if the cut isn't even enough.
* Want to optimize the images. They're larger than they need to be.
* Pretty much anything Jim wants that's within my capability. He's waited long enough for it.