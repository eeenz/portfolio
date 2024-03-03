const menu_info = document.querySelector('.menu_info')
const burger_bar = document.querySelector('.menu_bar a') 
// 메뉴

burger_bar.addEventListener('click',()=>{
    menu_info.classList.remove('display_none')
    menu_info.addEventListener('click',()=>{
        menu_info.classList.add('display_none')
    })
})
/* ---------------------- 구분선 -------------------------- */      
// 토글
const toggle_bg = document.querySelectorAll('.toggle_bg > a')
const intro_front = document.querySelector('.intro_front')
const intro_web = document.querySelector('.intro_web')
intro_web.classList.add('display_none')

toggle_bg[0].addEventListener('click',()=>{
    toggle_bg[0].style.backgroundColor = '#4d5ad6';
    toggle_bg[1].style.backgroundColor = '#fff';
    toggle_bg[1].style.color = '#111';
    intro_front.classList.remove('display_none')
    intro_web.classList.add('display_none')
})

toggle_bg[1].addEventListener('click',()=>{
    toggle_bg[1].style.backgroundColor = '#222';
    toggle_bg[0].style.backgroundColor = '#fff';
    toggle_bg[1].style.color = '#fff';
    intro_front.classList.add('display_none')
    intro_web.classList.remove('display_none')
})


/* ---------------------- 구분선 -------------------------- */      
// 링크 설정되지 않은 a 태그 클릭시 상단으로 올라가는 것 막기
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
        // 링크의 href 속성을 가져옴
        const href = link.getAttribute('href');
        
        // href가 #인 경우에만 preventDefault() 호출
        if (href === '#') {
            event.preventDefault();
        }
    });
});
/* ---------------------- 구분선 -------------------------- */      