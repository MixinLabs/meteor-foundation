zurb-foundation v0.1.5
======================

**Usage:** `mrt add zurb-foundation`

**Version:** `0.1.5`

**Foundation version:** `4.2.3`


This smart-package is using **jQuery**.

##Load order
* normalize.css
* foundation.min.css
* custom.modernizr.js
* foundation.min.js
* init-foundation.html
* init-foundation.js *-- this will initialize Zurb Foundation*


It initializes the **Foundation** on `document.ready` event.

##v0.1.5
* `Issue #1` code clean up. Still ugly, but less so.

##v0.1.4
* `Issue #1` worked-around, where foundation javascript didn't initialize properly. Thank you, **leonistor**.

##What's coming next?
This is just an initial release. Similar to many already available **foundation** smart-packages on [Atmosphere](http://atmosphere.meteor.com).

Next `0.2.0` release will include configuration options for:

* Choosing **zepto** or **jQuery**
* Customize default look and feel
