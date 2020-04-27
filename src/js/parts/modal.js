function modal() {
    //============================ MODAL WINDOWS ================================

    function getModalWindow(buttonMore, modalWindow, hide) {
        let more = document.querySelector(buttonMore),
            overlay = document.querySelector(modalWindow),
            close = document.querySelector(hide);

        more.addEventListener('click', function () {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', function () {
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            this.classList.add('more-splash');
            document.body.style.overflow = '';
        });
    }

    getModalWindow('.more', '.overlay', '.popup-close');
    getModalWindow('.description-btn', '.overlay', '.popup-close');

    //============================ MODAL WINDOWS ================================
}

module.exports = modal;