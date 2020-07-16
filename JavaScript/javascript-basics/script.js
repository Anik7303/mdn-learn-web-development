const image = document.querySelector('.container .image');
const heading = document.querySelector('h1');

image.addEventListener('click', (event) => {
    // const name = prompt('please enter your name: ');
    // localStorage.setItem('user_name', name);
    const img = image.querySelector('img');
    if(img.getAttribute('src') === 'mozilla.png') {
        img.setAttribute('src', 'mozilla-2.png')
    } else {
        img.setAttribute('src', 'mozilla.png')
    }
});

function saveName() {
    const name = prompt('Please enter your name');
    localStorage.setItem('user-name', name);
    setName(name);
}

function setName(name) {
    heading.textContent = heading.textContent + ' : ' + name;
}

if(localStorage.getItem('user-name')) {
    const name = localStorage.getItem('user-name');
    setName(name);
} else {
    saveName();
}

/*
image.onclick = () => {
    const img = image.querySelector('img');
    if(img.getAttribute('src') === 'mozilla.png') {
        img.setAttribute('src', 'mozilla-2.png')
    } else {
        img.setAttribute('src', 'mozilla.png')
    }
}
*/