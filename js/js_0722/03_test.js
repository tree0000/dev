$(document).ready(function () {
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) { // 6자리 색상 코드 생성
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    
    let width = $('[data-role="slider"]').attr('data-width');
    let height = $('[data-role="slider"]').attr('data-height');
    let count = $('[data-role="slider"] div.item').length;

   
    $('[data-role="slider"]').css({
        position: 'relative',
        overflow: 'hidden',
        width: width,
        height: height
    }).find('.container').css({
        position: 'absolute',
        width: count * width,
        overflow: 'hidden'
    }).find('.item').css({
        width: width,
        height: height,
        float: 'left'
    });

   
    let currentPage = 0;
    let changePage = function () {
       
        $('[data-role="slider"] .item').eq(currentPage).css('background', getRandomColor());

        $('[data-role="slider"] > .container').animate({
            left: -currentPage * width
        }, 500);
    };

   
    $('#left-button').click(function () { 
        if (currentPage > 0) {
           
            currentPage = currentPage - 1;
            changePage();
        }
    });

    $('#right-button').click(function () { 
        if (currentPage < count - 1) {
            
            currentPage = currentPage + 1;
            changePage();
        }
    });

  
    setInterval(() => {
        if (currentPage < count - 1) {
            currentPage++;
        } else {
            currentPage = 0;
        }
        changePage();
    }, 2000);
});