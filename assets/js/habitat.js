// JavaScript Document
$(document).ready(function () {
    $('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		menu: '#menu',
        loopBottom: true,
        afterRender: function () {
            setInterval(function () {
                $.fn.fullpage.moveSlideRight();
            }, 10000);
        },
		lazyLoad: true
    });
});