#skwSlider 0.1.0
##Another jQuery slider. 

###This is a simple library made from codepen: http://codepen.io/suez/pen/gadLre
###Why it's cool? See example to find out

###License
Released under the MIT license - http://opensource.org/licenses/MIT

##Installation

###Step 1: Link required files

```html
<!-- jQuery library (served from Google) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!-- skwSlider Javascript file -->
<script src="/dist/jquery.skwslider.min.js"></script>
<!-- skwSlider CSS file -->
<link href="/dist/jquery.skwslider.min.css" rel="stylesheet" />
```

###Step 2: Create HTML markup

```html
<ul class="skwslider">
        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/mousover-img-1.jpg" alt="">
            <div>1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, tempora.</div>
        </li>
        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/slider-2.jpg" alt="">
            <div>2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ab.</div>
        </li>
        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg" alt="">
            <div>3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, laboriosam.</div>
        </li>
        <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/img-test.jpg" alt="">
            <div>4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, eius.</div>
        </li>
</ul>
```

###Step 3: Call the skwSlider

Call .skwSlider() on `<ul class="skwslider">`. Note that the call must be made inside of a $(document).ready() call, or the plugin will not work!

```javascript
$(document).ready(function(){
  $('.skwslider').skwSlider();
});
```

##Configuration options

###General

**speed**
timeout for slides
```
default: 1000
options: integer
```

**pagination**
```
default: false
options: boolean
```