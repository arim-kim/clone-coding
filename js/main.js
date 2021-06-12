
// 햄버거 바 아이콘 선택자 
const menuOpenEl = document.getElementById('btn--open')
// 닫는 아이콘 선택자
const menuCloseEl = document.getElementById('btn--closed')
// 메뉴 선택자 
const menuEl = document.getElementById('down-menu')
// const $menuEl = document.querySelector('#down-menu')
// 헤더 선택자
const headerEl = document.getElementById('header--main')
// 로고 선택자 
const logoEl = document.getElementById('logo')
// wrapper 선택자
const wrapperEl = document.getElementById('wrapper')
// scrollToTop 선택자
const $scrollToTop = document.querySelector(".scrollToTop")
// darkMode 선택자 
const $checkbox = document.querySelector('.darkMode')
// darkModetext 선택자
const $darkModetext = document.querySelector('.darkModeText')
// lightModetext 선택자 
const $lightModetext = document.querySelector('.lightModeText')
// modal-container 선택자 
const $modalContainer = document.querySelector(".modal-container")
// modal 선택자 
const $modal = document.querySelector(".modal")


// 햄버거 바 아이콘에 클릭 이벤트가 발생하면,
menuOpenEl.addEventListener("click", function() {
    // 햄버거 바 아이콘을 보이지 않게 처리하고,
    menuOpenEl.style.display = 'none'
    // 닫는 아이콘은 보이게 처리합니다
    menuCloseEl.style.display = 'inline-block'
    //헤더 요소의 높이를 52.8px로 줄입니다
    headerEl.style.height = '52.8px'
    // 로고 요소의 높이 및 너비를 125px로 줄입니다
    logoEl.style.height = '30.09px'
    logoEl.style.width = '125px'

    // 스크롤이 100px 이하일때, 메뉴 화면이 나타나고, wrapper 가 내려갑니다.
    if (window.scrollY <= 100) {
        wrapperEl.style.transform = 'translateY(100%)'; //밑으로 사라짐
       
    }
    

})


// 닫는 아이콘에 클릭 이벤트가 발생하면,
menuCloseEl.addEventListener("click", function() {
    // 햄버거 바 아이콘을 보이게 처리하고,
    menuOpenEl.style.display = 'inline-block'
    // 닫는 아이콘은 보이지 않게 처리합니다
    menuCloseEl.style.display = 'none'
    


    // 스크롤이 가장 위일때, wrapper가 위로 올라오면서 메뉴화면이 사라집니다. 
    if (window.scrollY <= 100){
        // 스크롤 위치가 100px 미만이면, 무조건 
        // 헤더 요소의 높이를 원래대로 152.8px로 돌립니다
        headerEl.style.height = '152.8px'
        // 로고 요소의 높이 및 너비를 원래대로 540px로 돌립니다
        logoEl.style.height = '130px'
        logoEl.style.width = '540px'
        wrapperEl.style.transform = 'translateY(0%)' // 원래자리 
  

    }
    
})

// toggle 입니다 - 햄버거 메뉴를 클릭하면 메뉴가 아래로 내려오게 하였습니다. 
// 투명도 조절문제와 로고 겹침문제가 발생하는데 해결법을 몰라 완성하지 못했습니다. 

$( document ).ready( function() {
    
    $('#btn--open' ).click( function() {
      $( '#down-menu' ).slideDown();
      // 홈페이지를 보면, 메뉴창이 열려도 스크롤은 가능합니다. 그래서 여기는 따로 스크롤을 막는 css class를 추가하지 않았습니다. 
    } );
    $('#btn--closed' ).click( function() {
        $( '#down-menu' ).slideUp();
      } );
    
} );


window.addEventListener("scroll",function() {

   
    // y축으로 스크롤 위치가 100px보다 크면 
    if(window.scrollY >= 100|| menuOpenEl.style.display == 'none'){
        // 헤더 요소의 높이를 52.8px로 줄입니다
        headerEl.style.height = '52.8px'
        // 로고 요소의 높이 및 너비를 125px로 줄입니다
        logoEl.style.height = '30.09px'
        logoEl.style.width = '125px'
        $scrollToTop.classList.add("scroll-active");


    }
    
    if(window.scrollY <100 && menuOpenEl.style.display != 'none'){
        // 스크롤 위치가 100보다 작으면, 무조건 
        // 헤더 요소의 높이를 원래대로 152.8px로 돌립니다
        headerEl.style.height = '152.8px'
        // 로고 요소의 높이 및 너비를 원래대로 540px로 돌립니다
        logoEl.style.height = '130px'
        logoEl.style.width = '540px'
        $scrollToTop.classList.remove("scroll-active");


    }

})

// scrollToTop입니다. 클릭하면, top과 left를 0으로 만듭니다. 
$scrollToTop.addEventListener("click", function() {
    window.scroll({
        top : 0,
        left : 0,
        behavior: "smooth",

    });
})


// 다크모드에 관한 javascript code ============================================================================
// 다크모드 설정을 추가하니, 브라우저를 새로고침했을때 어떤 모드로 화면을 보여줘야 하는지 웹이 모름 


// 다크보드 체크박스 체크시 함수 
$checkbox.addEventListener('click',e => {
    if(e.target.checked) {
        document.documentElement.setAttribute('color-all', 'dark');
        $modalContainer.style.display = "block";
        // 체크되어 모달이 발생되어있는 동안은 스크롤을 움직이지 못하게 만들었습니다.  
        $('html, body').addClass('hidden');
        // 글자 바꾸기 
        $darkModetext.style.display = "none";
        $lightModetext.style.display = "block";
        
    
    }else {
        document.documentElement.setAttribute('color-all', 'light');
        $darkModetext.style.display = "block";
        $lightModetext.style.display = "none";
        
    };

   
});

// 모달을 클릭하면 모달창이 사라지도록 하였습니다. 다크모드는 계속 지속 
$modal.addEventListener('click',e => {
    
    $modalContainer.style.display = "none";

    // 모달창이 꺼지면, 스크롤이 정상적으로 작동되도록 removeClass해주었습니다. 
    if($modalContainer.style.display = "none"){
        $('html, body').removeClass('hidden');
    }
});

