//Removes HotJar links
setInterval(function(){
    var foo = $('a').html();
    foo = foo.replace('https://www.hotjar.com/incoming-feedback', 'https://bit.ly/3vFlaqp');
    $('a').html(foo);
},100);
