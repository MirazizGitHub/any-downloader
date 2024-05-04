
let language_button = document.querySelector('button.language_button') || null;
let circle_progress_svg = document.querySelector('.circle-progress-svg') || null;


if (language_button !== null && language_button !== undefined) {
    let language_ul = language_button.querySelector('.language_ul') || null;
    let language_item = language_button.querySelectorAll('.language_ul .language_item') || null;

    language_button.onclick = function () {
        language_ul.classList.toggle('active_ul');
    }


    language_item.forEach(function (lang) {
        lang.onclick = function () {
            language_item.forEach(function (a) { a.classList.remove('active_language'); });
            lang.classList.add('active_language');
        }
    });
}

if (circle_progress_svg !== null && circle_progress_svg !== undefined) {
    let circle_progress = document.querySelector('.circle-progress');

    let time_download_btn = document.querySelector('.time-download-btn');
    let time_numb_text = document.querySelector('.time_numb');

    let count_max = Number(time_numb_text.attributes['data-max-time'].value);
    let count = count_max;
    let transition_time = (count_max - 1);
    let percentage = 100;

    circle_progress.style.cssText = `stroke-dashoffset: calc(500 - (500 * 100) / 100);`;

    let time_numb = setInterval(function () {
        count--;
        time_numb_text.innerText = `${count}`;
        /* (count / count_max) * 100 */
        circle_progress.style.cssText = `stroke-dashoffset: calc(500 - (500 * 0) / 100); transition: ${transition_time}s linear;`;
        time_function();
    }, 1000);

    time_function();
    function time_function() {
        if (count <= 0) {

            setTimeout(function () {
                circle_progress_svg.classList.add('d_none');
                time_numb_text.classList.add('d_none');
                time_download_btn.classList.remove('d_none');
            }, 20);

            count--;
            clearInterval(time_numb, 1000);
        }
    }
}
