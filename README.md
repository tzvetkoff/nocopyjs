# NoCopy.js

A minimalistic & library-independent anti-copy script.

## How to use?

Load the `nocopy.js` file in your HTML page and drop a piece of JavaScript somewhere in the code:
``` html
<script type="text/javascript" src="nocopy.js"></script>
<script type="text/javascript">
  //<![CDATA[
  nocopy(function(selection) {
    // NOTE: `selection` is a `Selection` object
    // NOTE: We *have* to return HTML here
    // NOTE: Returning `null` will disable copying at all

    return selection.toString().split('\n').join('<br />') + '<br /><br />Read more at <a href="' + location.toString() + '">' + location.toString() + '</a>';
  });
  //]]>
</script>
```
