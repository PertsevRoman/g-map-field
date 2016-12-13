/**
 * Created by joker on 13.12.16.
 */

export function initGui(data) {
    $('create-path').click(function () {
        data.createPath()
    });
}