
// Lib Data Aos

AOS.init()

// Menu

$('.menu_burguer').click(function(){
    let menu = $('#menu_open')
    let close = $('#menu_close')

    $('#menu_mobile').slideToggle()

    if(menu.css('display') == 'block') {
        menu.fadeOut().css('display','none')
        close.fadeIn().css('display','block')
    }else {
        menu.fadeIn().css('display','block')
        close.fadeOut().css('display','none')
    }
})

// Ano atual

let year = new Date().getFullYear()

$('#year').text(year)