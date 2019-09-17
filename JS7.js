'use strict';
/*
 * davis.js
 */
let empty = function (target) {
    let foo = target;
    // Removing all children from an element
    while (foo.firstChild) {
        foo.removeChild(foo.firstChild);
    }
}

let fillLeft = function (target) {
    let art = target;

    let img = document.createElement('img'); // create element
    img.setAttribute('src', 'book-icon.png');
    img.setAttribute('alt', 'book icon');
    img.setAttribute('width', '64');

    let h1 = document.createElement('h1'); // create element
    let txt = document.createTextNode('Always'); // create text
    h1.appendChild(txt); // put on tree

    let par = document.createElement('p'); // create element
    txt = document.createTextNode("You could have four columns here but you won't. You'll have three like everyone else."); // create text
    par.appendChild(txt); // put onto tree

    art.appendChild(img);
    art.appendChild(h1);
    art.appendChild(par);
}


let t1 = function (ev) {
    let target = ev.target || ev.srcElement;
    let id = target.id;
    // alert(id);
    let elm = $(id);
    if (target.innerHTML !== '') {
        empty(elm);
    } else {
        switch (id) {
            case 'left': fillLeft(elm); break;
        }
    }
}


let fillCenter = function (targetCenter) {
    let art = targetCenter;

    let img = document.createElement('img'); // create element
    img.setAttribute('src', 'book-icon.png');
    img.setAttribute('alt', 'book icon');
    img.setAttribute('width', '64');

    let h1 = document.createElement('h1'); // create element
    let txt = document.createTextNode('Always'); // create text
    h1.appendChild(txt); // put on tree

    let par = document.createElement('p'); // create element
    txt = document.createTextNode("You could have four columns here but you won't. You'll have three like everyone else."); // create text
    par.style.color = 'yellow';
    par.appendChild(txt); // put onto tree

    art.appendChild(img);
    art.appendChild(h1);
    art.appendChild(par);
}

let t2 = function (ev1) {
    let targetCenter = ev1.targetCenter || ev1.srcElement;
    let id = targetCenter.id;
    // alert(id);
    let elm = $(id);
    if (targetCenter.innerHTML !== '') {
        empty(elm);
    } else {
        switch (id) {
            case 'center': fillCenter(elm); break;
        }
    }
}

let fillRight = function (targetRight) {
    let art = targetRight;

    let img = document.createElement('img'); // create element
    img.setAttribute('src', 'book-icon.png');
    img.setAttribute('alt', 'book icon');
    img.setAttribute('width', '64');

    let h1 = document.createElement('h1'); // create element
    let txt = document.createTextNode('Always'); // create text
    h1.appendChild(txt); // put on tree

    let par = document.createElement('p'); // create element
    txt = document.createTextNode("You could have four columns here but you won't. You'll have three like everyone else."); // create text
    par.appendChild(txt); // put onto tree

    art.appendChild(img);
    art.appendChild(h1);
    art.appendChild(par);
}

let t3 = function (ev2) {
    let targetRight = ev2.targetRight || ev2.srcElement;
    let id = targetRight.id;
    // alert(id);
    let elm = $(id);
    if (targetRight.innerHTML !== '') {
        empty(elm);
    } else {
        switch (id) {
            case 'right': fillRight(elm); break;
        }
    }
}

let initialize = function () {
    let left = $('left');
    let center = $('center');
    let right = $('right');
    fillLeft(left);
    fillCenter(center);
    fillRight(right);
    left.addEventListener('click', t1, false);
    center.addEventListener('click', t2, false);
    right.addEventListener('click', t3, false);
}

window.addEventListener('load', initialize);