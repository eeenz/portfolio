
/* ---------------------- 구분선 -------------------------- */  
//스킬에 팝업
const skill_pop = document.querySelector('.skill_pop')
const skill_pop_bg = document.querySelector('.skill_box_bg')
const skill = document.querySelectorAll('.skill_box > a')
const skill_contents = document.querySelectorAll('[class^=skill_con_]')
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
// 프로젝트 소개에 버튼 클릭시 준비중입니다 팝업
const btn_homep = document.querySelector('.homepage_thumb .home_alr')
console.log(btn_homep)
btn_homep[4].addEventListener('click',()=>{
    alert('준비중 입니다. 조금만 기다려주세요 😊🙏')
})
// btn_virens_intro.addEventListener('click',()=>{
//     alert('준비중입니다. 조금만 기다려주세요 😊🙏')
// })