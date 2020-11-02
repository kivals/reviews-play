/*
Реактивность
Реализуйте «реактивность» на основе defineProperty.
Необходимо, чтобы при написании текста в инпуте,
в текстовое поле сразу подставлялись значения. Слушать нужно событие keyup.
 */

type Nullable<T> = T | null;

const text: Nullable<HTMLDivElement> = document.getElementById(
  "text"
) as HTMLDivElement;
const input: Nullable<HTMLInputElement> = document.getElementById(
  "input"
) as HTMLInputElement;

if (!text || !input) {
  throw new Error("нет полей");
}

interface iObj {
  title: string
}

const data = {
  title: ""
};

defineReactive(data as iObj);

function defineReactive(obj: iObj) {
  let val = obj.title;

  Object.defineProperty(data, 'title', {
    get() {
      return val
    },
    set(newVal) {
      val = newVal
    }
  });
}

input.addEventListener('keyup', (e) => {
  data.title += e.key;
  text.innerHTML = data.title;
})


