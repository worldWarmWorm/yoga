function tabs() {
    //============================ TABS =================================

    let tab = document.querySelectorAll('.info-header-tab'), // клик бар
        info = document.querySelector('.info-header'), // обертка клик бара
        tabContent = document.querySelectorAll('.info-tabcontent'); // коллекция табов

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    } // прячет все табы колме первого

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    } // показывает определенный таб

    info.addEventListener('click', function (event) {
        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    }); // отслеживает клик по клик бару и выводит соответствующий таб

    //============================ TABS =================================
}

module.exports = tabs;