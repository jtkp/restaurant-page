import Beef from './images/beef.jpg';

const generateHomePage = () => {
    const content = document.querySelector('#content');
    content.replaceChildren();


    const container = document.createElement('div');
    container.id = 'container';

    const h1 = document.createElement('h1');
    h1.innerHTML = 'Udon Know How Good!';
    container.appendChild(h1);
    
    const beefUdon = new Image();
    beefUdon.src = Beef;
    container.appendChild(beefUdon);

    const p = document.createElement('p');
    p.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis porro ipsam, provident totam quis est nesciunt cum ut vel tempora!';
    container.appendChild(p);

    content.appendChild(container);
};

export {
    generateHomePage,
};