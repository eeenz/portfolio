/* header */
const m_hd_gnb = document.querySelector(".m_hd_gnb");
const m_hd_menu = document.querySelector(".m_hd_menu > h2 > img");
console.log(m_hd_menu);

m_hd_gnb.classList.add(m_hd_gnb);

m_hd_menu.addEventListener("click", function () {
  m_hd_gnb.classList.remove(m_hd_gnb);
});
