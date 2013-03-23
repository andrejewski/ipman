ipman
=====

a lorem ipsum tool for jQuery/Zepto

## about
ipman simplifies the use of ipsum text with a simple API that generates highly customizable ipsum and allow you to even choose your favorite type of ipsum or roll your own ipsum generator recipe for your ipsum.

ipman was not made for use in production. This tool is intended to serve web developers and designers that need to fake text content on their website, even if they lack knowledge of advanced JavaScript. ipman however can be extended dramatically for those who do know advanced JavaScript, have fun.

## usage
To use ipman just add it to the bottom of your webpage after the jQuery and/or Zepto you are using. 

    <script type='text/javascript' src='ipman.js'><script>

The script automatically generates ipsum and injects it into all elements with the class `ipman`. This means you actually don't have to touch the JavaScript to get ipman to do its job.

But say you like touching things, then you can call ipman on any jQuery/Zepto object by simply writing:

    $('#el').ipman(); // #el's content is now ipsum

That's all you need to get started.

