/*
Реактивность
Реализуйте «реактивность» на основе defineProperty.
Необходимо, чтобы при написании текста в инпуте,
в текстовое поле сразу подставлялись значения. Слушать нужно событие keyup.
 */
var text = document.getElementById("text");
var input = document.getElementById("input");
if (!text || !input) {
    throw new Error("нет полей");
}
var data = {
    title: ""
};
defineReactive(data);
function defineReactive(obj) {
    var val = obj.title;
    Object.defineProperty(data, 'title', {
        get: function () {
            return val;
        },
        set: function (newVal) {
            val = newVal;
        }
    });
}
input.addEventListener('keyup', function (e) {
    data.title += e.key;
    text.innerHTML = data.title;
    console.log(data.title);
});
