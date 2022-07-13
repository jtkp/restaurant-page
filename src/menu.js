import Beef from './images/beef.jpg';
import Curry from './images/curry.jpg';
import Hiyashi from './images/hiyashi.jpg';
import Tempura from './images/tempura.png';

function addItem(src) {
    const item = document.createElement('div');
    item.className = 'item';

    const h3 = document.createElement('h3');
    h3.innerHTML = 'Udon Name';
    item.appendChild(h3);
    
    const udon = new Image();
    udon.src = src;
    item.appendChild(udon);

    const p = document.createElement('p');
    p.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis porro ipsam, provident totam quis est nesciunt cum ut vel tempora!';
    item.appendChild(p);

    return item;
}

const generateMenuPage = () => {
    const content = document.querySelector('#content');
    content.replaceChildren();

    const info = document.createElement('div');
    info.id = 'info';

    info.appendChild(addItem(Beef));
    info.appendChild(addItem(Curry));
    info.appendChild(addItem(Hiyashi));
    info.appendChild(addItem(Tempura));


    content.appendChild(info);
};

export {
    generateMenuPage,
};