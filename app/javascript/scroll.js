document.addEventListener("turbo:load", function() {

    const ofs = 100; // offset якщо проскролено 100 то кнопка має зявитися
    const scrollUp = document.querySelector('.scroll_up');
    const scrollUpSvgPath = document.querySelector('.scroll_up_svg_path');
    const pathLength = scrollUpSvgPath.getTotalLength();

    scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    scrollUpSvgPath.style.transition = 'stroke-dashOffset 20ms';

    const getTop = () => window.pageYOffset || document.documentElement.scrollTop;


    // function #1: updateDashoffset
    const updateDashoffset = () => {
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const dashoffset = pathLength - (getTop() * pathLength / height);

        scrollUpSvgPath.style.strokeDashoffset = dashoffset;
    };

    // function #2: onScroll
    window.addEventListener('scroll', () => {
        updateDashoffset();

        if (getTop() > ofs) {
            scrollUp.classList.add('scroll_up_active');
        } else {		scrollUp.classList.remove('scroll_up_active');
        };
    });

    // function #3: click
    scrollUp.addEventListener('click', () => {
        window.scrollTo({
            top: 0, // до початку
            behavior: 'smooth' // плавно
        });
    });
});
