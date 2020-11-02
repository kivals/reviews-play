/*
Приватный Proxy
Напишите конструктор proxyProps со следующими особенностями:

    В нём запрещён доступ к методам и свойствам, которые начинаются с _.
    В случае ошибки доступа выводится текст «Нет прав».
    Остальные свойства можно получать, изменять и удалять.
 */

const props = {
  name: 'Abby',
  chat: 'the last of us. Part II',
  getChat() {
    this._privateMethod();
  },
  _privateMethod() {
    console.log(this._privateProp);
  },
  __privateMethodToo() {},
  _privateProp: 'Нельзя получить просто так',
};

const proxyProps = new Proxy(props, {
  get(target, p) {
    const value = target[p];
    if (p.startsWith('_')) {
      return new Error('Нет прав')
    }
    return typeof value === "function" ? value.bind(target) : value;
  },
  set(target, p, value) {
    if (p.startsWith('_')) {
      throw new Error('Нет прав');
    } else {
      target[p] = value;
      return true;
    }
  },
  deleteProperty(target, p) {
    if (p.startsWith('_')) {
      throw new Error('Нет прав')
    } else {
      delete target[p];
      return true;
    }
  },
});

proxyProps.getChat();
delete proxyProps.chat;

proxyProps.newProp = 2;
console.log(proxyProps.newProp);

try {
  proxyProps._newPrivateProp = 'Super game';
} catch (error) {
  console.log(error);
}

try {
  delete proxyProps._privateProp;
} catch (error) {
  console.log(error); // Error: Нет прав
}

/*
	* Вывод в консоль следующий:
Нельзя получить просто так
2
Error: Нет прав
Error: Нет прав
*/