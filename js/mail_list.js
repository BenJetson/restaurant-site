function mail_signup(){
    
        $('#news-signup').slideUp('fast');
        $('#news-thanks').slideDown('slow');
        
        $('#news-thanks-name').append($('#news-signup input[name="name"]').val());
        
}