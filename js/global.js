window.onload=function(){
$('.listType1 .list dl dd').click(function(){
	$('.listType1 .list dl dd').removeClass('current')
	$(this).addClass('current')
})



window.setTimeout(function(){
$(".loading").fadeOut(500)
},400)


$('.inforMain2 .infor2 .content').click(function(){
	$('.inforMain2 .infor2 .content').removeClass('current')
	$(this).addClass('current')
})
$('.inforMain4 .list li').click(function(){
	$('.inforMain4 .list li').removeClass('current')
	$(this).addClass('current')
})

$('.switch img,.centerMain .return2').click(function(){
	$('.centerMain').toggle()
})



var inforMain2 = new Swiper('.inforMain2 .swiper-container', {
        pagination: '.inforMain2 .swiper-pagination',
        paginationClickable: '.inforMain2 .swiper-pagination',
        nextButton: '.inforMain2 .swiper-button-next',
        prevButton: '.inforMain2 .swiper-button-prev',
        autoplay:false,
        autoplayDisableOnInteraction: false,
        speed:300,
        slidesPerView: 1.3,
        spaceBetween: 20,
});



$('.toptext2 .return').click(function(){
	window.history.go(-1);
})


$('.inforMain6 .check .chage').click(function(){
	var a=$('#text1').val()
	var b=$('#text2').val()
	$('#text1').val(b)
	$('#text2').val(a)
})







}