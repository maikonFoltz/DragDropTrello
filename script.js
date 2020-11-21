$(function(){

    $('#obs').bind('mousedown', function(){

        $('#obj').bind('mousemove', function(e){
            var x = e.originalEvent.pageX;
            var y = e.originalEvent.pageY;

            $(this).css('left', x+'px')
            $(this).css('top', y+'px')
        })

    })
    $('#obj').bind('mouseup', function(){

        $('#obj').unbind('mousemove');
    })
})