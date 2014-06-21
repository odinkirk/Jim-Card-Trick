#Jim-Card-Trick

This app is intended to perform a magic trick using a virtual (or real) deck of cards. Logic for the trick provided by Jim Schwegerl. Code and design by John Allison.

Originally written (somewhat unsuccessfully) using jQuery and jQueryUI, now re-writtten/converted to Angular.js. Also incorporating Bootstrap.

### Configuration info
The images are scaled to match the size specified in the HTML and with the quality scaled down to produce good visuals with a minimal footprint. Changing the cards to a new deck is as easy as replacing the images with new images using the same name. The code will automatically scale any new images to fit in the assigned space while keeping dimensional ratio (no stretching/distorion). 

For optimal results, however, image dimensions would be 103 x 150 pixels with compression as noted above.

##CURRENT STATUS
**Functionality**:

Functionality is working at present and there are no known issues.

### Immediate roadmap:
* Re-arrange controls to second column to the right for computer track
* Add explanatory wording in the "computer" track.
  * Perhaps on a wide column below the deck/control row.


**Aesthetics**:

Aesthetics are good for now.

##WISH LIST
After a successful version 1.02, this is what's next (in no particular order).

* Animations
* Would be cool to set up a form on the user-has-deck track where they can put in the cut and then the value will be saved. Then use it on the next page to remind the user where to find the magic card.
  * Perhaps with a green boostrap alert showing that it's been saved.
  * Also maybe a red one if the cut isn't even enough.
  * Alternately, might do this with a drop-down. Don't need to worry about validation or Little Bobby Tables that way.
* Pretty much anything Jim wants that's within my capability. He's waited long enough for it.

##Version History
* Version 1.02:
  * Added configuration info above.
  * Improved documentation both in the README and in the code.
  * Fixed glitch in reset function held over from earlier testing.
  * Adjusted wording in "deck" track to make it more easily usable.
* Version 1.01:
  * Shrank images so resize isn't necessary.
  * Added image preload section to HTML to improve response times.
* Version 1.0:
  * Full essential functionality achieved.