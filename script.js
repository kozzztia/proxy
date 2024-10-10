
const targetObject = {
    name: 'kos',
    age: 25,
    gender: 'male'
};

const handler = {
    get(target, property, receiver) {
        if (property === 'name') {
            document.querySelector('header').innerHTML = target[property];
        } else if (property === 'age') {
            document.querySelector('footer').innerHTML = target[property];
        } else if (property === 'gender') {
            document.querySelector('main').innerHTML = target[property];
        }
        console.log(property);
        return target[property];
    },
    set(target, property, value, receiver) {
        target[property] = value;
        document.querySelector('footer').innerHTML = target[property];
        return true;
    }

};


const proxyObject = new Proxy(targetObject, handler);

proxyObject.name;
proxyObject.age;
proxyObject.gender;

setInterval(() => {

    proxyObject.age = proxyObject.age + 1;
}, 2000);

