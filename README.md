#Jim-Card-Trick


This app is intended to perform a magic trick using a virtual (or real) deck of cards. Logic for the trick provided by Jim Schwegerl. Code and design by John Allison.

Originally written (somewhat unsuccessfully) using jQuery and jQueryUI, now re-writtten/converted to Angular.js. Also incorporating Bootstrap.

##CURRENT STATUS
--------------
**Functtionality**:

Headlines for the individual files 

**Aesthetics**:

There is some Bootstrap  UI template stuff that needs to be cleared out and there's some testing stuff still to be cleared out. I also want to pretty up the buttons.

##WISH LIST
After a successful version 1.01, this is what's next.

* Animations
* Would be cool to set up a form on the user-has-deck track where they can put in the cut and then the value will be saved. Then use it on the next page to remind the user where to find the magic card.
  * Perhaps with a green boostrap alert showing that it's been saved.
  * Also maybe a red one if the cut isn't even enough.
* Pretty much anything Jim wants that's within my capability. He's waited long enough for it.
* Testing has revealed that someone unfamiliar with the trick needs text guidance/explanation as to how the trick works and what each step is/what it means. Will probably adapt the text from the "user has their own deck" section and put it as flavor text below the interactive section.

##Version History
* Version 1.01:
  * Shrank images so resize isn't necessary.
  * Added image preload section to HTML to improve response times.
* Version 1.0: