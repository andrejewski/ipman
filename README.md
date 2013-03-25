ipman
=====

a lorem ipsum tool for jQuery/Zepto

## about
ipman simplifies the use of ipsum text with a simple API that generates highly customizable ipsum and allow you to even choose your favorite type of ipsum or roll your own ipsum generator recipe to generate ipsum.

ipman was not made for use in production. This tool is intended to serve web developers and designers that need to fake text content on their website, even if they lack knowledge of advanced JavaScript. ipman however can be extended dramatically for those who do know advanced JavaScript, have fun.

## changelog

- **Not Even Unstable**
- 0.0.1 (ipman begins) 22/3/2013

## usage
To use ipman just add it to the bottom of your webpage after the jQuery and/or Zepto you are using. 

``` html
<script type='text/javascript' src='ipman.js'></script>
```

The script automatically generates ipsum and injects it into all elements with the class `ipman`. This means you actually don't have to touch the JavaScript to get ipman to do its job.

But say you like touching things, then you can call ipman on any jQuery/Zepto object by simply writing:

``` javascript
$('#el').ipman(); // #el's content is now ipsum
```

That's all you need to get started.

## functions
ipman only exposes two functions:

``` javascript  
$.ipman([ipsum string] [,options object])           // which is used to actually generate ipsum
$('#el').ipman()                                    // ipsum
$('#el').ipman({ paragraph: 2 })                    // two paragraphs of ipsum
$('#el').ipman('bacon')                             // bacon ipsum
$('#el').ipman('bacon',{ paragraph: 2 })            // two paragraphs of bacon ipsum

$.ipman_([ipsum string] [,options object])          // which is used to manage defaults and recipes
$.ipman_('bacon')                                   // bacon ipsum is now default
$.ipman_({ paragraph: 2 })                          // number of default paragraphs is 2
$.ipman_('clock', ClockRecipe)                      // clock ipsum is now available
$.ipman_('clock', NewClockRecipe)                   // clock ipsum is now updated
``` 

## customizing
ipman is very flexible and has two ways to ways to customize ipsum.

**Data-attribute parameters**: Parameters specific to a single element. For example: 

``` html
<p id='custom' data-paragraph='2' data-ipsum='bacon'></p>
<p id='normal'></p>
```
``` javascript
$('p').ipman();
```
    
This will fill the \<p\>#custom element with 2 paragraphs that are bacon ipsum (if supplied, otherwise just the default ipsum is used). The \<p\>#normal element will have the default single paragraph and use the default ipsum.
    
**ipman() parameters**: Parameters that are set for the call to `$().ipman()`.

``` javascript
$('p').ipman({
    paragraph: 3
})
```
    
This will fill \<p\>#normal with 3 paragraphs. #custom remains the same. This is because, **like inline css, ipman prioritizes data-* attributes over `ipman()` parameters.**

## defaults
ipman's only included recipe for ipsum is called 'plain' and it is used by default. 

## recipes
Lorem Ipsum has so many different themes and genres, it would be pointless to try to stuff them all into this simple tool. Thus ipman allows you to use your prefered ipsum in the form of recipes. All you have to do is place a ipman recipe after ipman.js, but before you actually use ipman:

``` html
<script type='text/javascript' src='jquery.min.js'></script>
<script type='text/javascript' src='ipman.js'></script>
<script type='text/javascript' src='recipes/bacon.js'></script>
<script type='text/javascript'>
    // have fun with $.ipman!
</script>
```

### making recipes
ipman recipes have a very flexible and dead-simple API for rolling your own (I love that phrase) recipes. A recipe is just a JavaScript object that follows this general pattern:

``` javascript
var Recipe = {
    src: 'http://ipsum-generator.some/api/',
    pre: function(params, next) {
        ...
        next(this.src, params, this.res)
        // aka
        // next($path string, params object, $render fucntion)
    },
    res: function(ipsum, next) {
        ...
        next(html)
    }
}
// then add it to ipman
$.ipman_('stdout', Recipe)
// and you can use it now!
```
    
NOTE: only the `pre` function must be explicitly named, all other values and functions can be named differently. All callback parameters are required however.

To see a curated collection of ipman recipes just look over at the /recipes/ directory.

## contributing
If you find a bug or browser limitation with ipman, please open an issue or bug and we can fix them together with team work and a healthy diet. If you have a disdain for git or github, try my [email](mailto:chrisishereladies@gmail.com) or heck try [Twitter][1]. 

If you have made your own ipman recipe, I love you. And it would be fanastic if you could fork this repo and your recipe and send a pull request. **BUT!** Please, please, please look at other recipes in /recipes/ first! ipman has a certain level of class that needs to be maintained. This includes a standard set of namespacing and naming practices. It's not data-p or data-para, it is data-paragraph. I can't accept a recipe that does not comply to these general standards. (see /recipes/rules.md)

## gracias

This is my first OSS project. Ipsum has always killed my development/design cycle and I thought it needed to be addressed if only for myself. If you use ipman, I sincerely thank you.

If you would like to complain or make a personal attack, tweet me [@compooter][1].

## legal(ize it!)

Disclaimer: I am not a lawyer.
I am not responsible for any use of any website that hosts any form of API that is used by ipman and/or its modules (recipes). If you don't want your API listed with its recipe and endpoint, [email][2], [twitter][1].

And about the licencing, there is no licence (in fact I hate the word). This software is free, I won't come after you for using it ever. 

[1]: http://twitter.com/compooter
[2]: mailto:chrisishereladies.chris@gmail.com
