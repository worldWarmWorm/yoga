function timer() {
    //============================ TIMER ================================

    let deadline = '2020-03-27';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    } // возвращает массив данных с оставшимся временем, часами, минутами, секундами

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000); // берем==- элементы из верстки

        function updateClock() {
            let t = getTimeRemaining(endtime); // получаем разницу между дедлайном и сейчас

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                }
            }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

                document.querySelector('.timer-action').textContent = 'К сожалению акция закончилась :(';
            }
        } // динамически выводим данные времени каждую секунду
    }

    setClock('timer', deadline);

    //============================ TIMER ================================
}

module.exports = timer;