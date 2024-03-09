const menu_info = document.querySelector('.menu_info')
const burger_bar = document.querySelector('.menu_bar a') 
// 메뉴 햄버거 창

burger_bar.addEventListener('click',()=>{
    menu_info.classList.remove('display_none')
    menu_info.addEventListener('click',()=>{
        menu_info.classList.add('display_none')
    })
})
/* ---------------------- 구분선 -------------------------- */      
// 프로젝트 소개에 버튼 클릭시 준비중입니다 팝업
const btn_etude_intro = document.querySelectorAll('.box3 > .project_left > .icon_go > a')
const btn_virens_intro = document.querySelector('.box2 > .project_left > .icon_go > a')

/* btn_etude_intro[1].addEventListener('click',()=>{
    alert('준비중입니다. 조금만 기다려주세요 😊🙏')
}) */
// btn_virens_intro.addEventListener('click',()=>{
//     alert('준비중입니다. 조금만 기다려주세요 😊🙏')
// })
/* ---------------------- 구분선 -------------------------- */  
const mouse_circle = document.querySelector('main .mouse_circle')

//동그란원 마우스 따라다니게 하기
/* window.addEventListener('mousemove',(e)=>{
    circle_active.style.left = `${e.clientX}px`
    circle_active.style.top = `${e.clientY}px`
    mouse_circle.classList.add('circle_active')
}) */
/* ---------------------- 구분선 -------------------------- */  
// 시간 날짜
/* const dateTimeBox = document.getElementById("current_date_time");
const dateTime = getCurrentDateTime();
dateTimeBox.innerHTML = dateTime;

setInterval(() => {
    const dateTime = getCurrentDateTime();
    dateTimeBox.innerHTML = dateTime;
}, 1000); // 1초마다 현재 날짜 및 시간 업데이트 

function getCurrentDateTime() {
    const now = new Date();
    // const year = now.getFullYear();
    const month = now.getMonth() + 1; // 0부터 시작하기 때문에 1을 더해줌
    const date = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return `2024년 ${month}월 ${date}일 ${hours}:${minutes}:${seconds}`;
} */
/* ---------------------- 구분선 -------------------------- */  
// 상단으로 이동 up버튼
const go_to_top = document.querySelector('#go_to_top')
console.log(go_to_top)

go_to_top.addEventListener('click',(e)=>{
    e.stopPropagation();
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})
/* ---------------------- 구분선 -------------------------- */  
const project_thumb = document.querySelectorAll('.project_right > a')
console.log(project_thumb)
for(let a of project_thumb){
    a.addEventListener('click',()=>{
        alert('아래 설명에 "보러가기" 버튼을 클릭해 주세요.😊🙏')
    })
}
/* ---------------------- 구분선 -------------------------- */  
// nav 탭
const nav_a = document.querySelectorAll('nav a')
const nav_tab = document.querySelectorAll('.nav_tab')
const text_box = document.querySelectorAll('.text_box a')
const menu_tab = document.querySelectorAll('.wrap > .menu_tab')
// header nav
console.log(nav_a,nav_tab,menu_tab)
nav_a.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        window.scrollTo(0, nav_tab[i].offsetTop)
    })
})
// bugerbar menu tab
text_box.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        window.scrollTo(0, menu_tab[i].offsetTop)
    })
})
/* ---------------------- 구분선 -------------------------- */  
//스킬에 팝업
const skill_pop = document.querySelector('.skill_pop')
const skill_pop_bg = document.querySelector('.skill_box_bg')
const skill = document.querySelectorAll('.skill_box > a')
const skill_contents = document.querySelectorAll('[class^=skill_con_]')
console.log(skill,skill_pop,skill_contents,'-----')
let contents_hide = ()=>{
    for(let a of skill_contents){a.classList.add('display_none')}
}
skill.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        skill_pop.classList.remove('display_none')
        contents_hide()
        skill_contents[i].classList.remove('display_none')
        skill_pop_bg.addEventListener('click',()=>{
            skill_pop.classList.add('display_none')
        })
    })
})

/* ---------------------- 구분선 -------------------------- */      
// 토글
const toggle_bg = document.querySelectorAll('.toggle_bg > a')
const intro_front = document.querySelector('.intro_front')
const intro_web = document.querySelector('.intro_web')
// intro_web.classList.add('display_none')

/* toggle_bg[0].addEventListener('click',()=>{
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
 */

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