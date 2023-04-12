document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');

    burger.addEventListener('click', function() {
        this.classList.toggle('active_menu');
        document.querySelector('.navigation').classList.toggle('open');
    })

});
