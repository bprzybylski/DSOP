$(document).ready(function(){
    $("a[rel='question'], a[rel='answer'], a[rel='video']").click(function(e){
        e.preventDefault();
        $(this).parent().siblings("."+$(this).attr('rel')).slideDown();
        $(this).css('transition-property', 'none');
        $(this).addClass('disabled');
        return false;
    });

    $("a[rel='testcheck']").click(function(e){
        e.preventDefault();
        $(this).closest('.question').find('li').removeClass('correct').removeClass('incorrect');
        $(this).closest('.question').find('input:checked').parent().addClass('incorrect');
        $(this).closest('.question').find('input.correct').parent().addClass('correct');
        return false;
    });
});
