const tabNav = document.querySelectorAll('.main__btn_tab'),
tabContent = document.querySelectorAll('.tab'),
btn = document.querySelector('.main__btn_continue');

console.log(tabNav)
tabNav.forEach((item, key) => {
    item.addEventListener('click', () => {
        //checkSelectBtn(key);
        //selectTabContent(key);
        //checkTabs();
        console.log('click')
    });
});

/*function checkSelectBtn(key) {
    tabNav.forEach((btn, index) => {
        key === index ? btn.classList.add('is-active', 'checked') : btn.classList.remove('is-active');
    })
}

function selectTabContent(key) {
    tabContent.forEach((item, index) => {
        key === index ? item.classList.add('is-active', 'checked') : item.classList.remove('is-active');
    });
}

function checkTabs() {
    const checked = document.querySelectorAll('.main__btn_tab.checked').length;
    if (tabNav.length === checked){
        btn.disabled = false; 
    }
    
}*/