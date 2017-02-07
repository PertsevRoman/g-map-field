/**
 * Created by joker on 16.12.16.
 */

/**
 * AJAX объект
 */
let dropdownResolver = function (term, cb) {
    if(term == '') {
        return;
    }

    $.ajax({
        method: 'POST',
        url: 'http://localhost:8000/api/type',
        data: JSON.stringify({
            type: 'post',
            transform: 'place-list',
            content: {
                place: {
                    name: {
                        like: term
                    }
                }
            }
        }),
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        success: function (posts) {
            console.log(posts);

            cb(posts);
        },
        error: function (error) {
            console.log(error);
        },
        dataType: 'json',
        cache: true
    });
};

/**
 * Точка входа в приложение
 */
document.addEventListener('DOMContentLoaded', function () {
    let post = new Vue({
        el: '#app'
    });
});