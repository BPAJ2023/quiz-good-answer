const btn = document.querySelector('button');

const div1 = document.querySelector('.q1')
const div2 = document.querySelector('.q2')
const div3 = document.querySelector('.q3')
const div4 = document.querySelector('.victory')

const firstQuestion = document.querySelector('.firstQuestion');
const secondQuestion = document.querySelector('.secondQuestion');
const thirdQuestion = document.querySelector('.thirdQuestion');

const enterPassword1 = document.getElementById('pass1');
const enterPassword2 = document.getElementById('pass2');
const enterPassword3 = document.getElementById('pass3');

const goodPassword1 = document.querySelector('.good1');
const goodPassword2 = document.querySelector('.good2');
const goodPassword3 = document.querySelector('.good3');

const badPassword1 = document.querySelector('.bad1');
const badPassword2 = document.querySelector('.bad2');
const badPassword3 = document.querySelector('.bad3');

btn.addEventListener('click',()=>{
    btn.classList.toggle('click');
    div1.style.display = 'block';
})

enterPassword1.addEventListener('input', (e)=> {
    if (e.target.value == 'jutro') {
        goodPassword1.style.display = 'inline';
        goodPassword1.style.color = 'green';
        badPassword1.style.display = 'none';
        div2.style.display = 'block'
    } else if (e.target.value !== '') {
        badPassword1.style.display = 'inline';
        badPassword1.style.color = 'red'
        goodPassword1.style.display = 'none';
    } else if (e.target.value == '') {
        badPassword1.style.display = 'none';
        goodPassword1.style.display = 'none';
    }
})

enterPassword1.addEventListener('focus',()=> {
    enterPassword1.style.backgroundColor = 'black';
    enterPassword1.style.color = 'white';
});

enterPassword1.addEventListener('blur',()=> {
    enterPassword1.style.backgroundColor = 'white';
    enterPassword1.style.color = 'black';
});

enterPassword2.addEventListener('input', (e)=> {
    if (e.target.value == 'trzy') {
        goodPassword2.style.display = 'inline-block';
        goodPassword2.style.color = 'green';
        badPassword2.style.display = 'none';
        div3.style.display = 'block'
    } else if (e.target.value !== '') {
        badPassword2.style.display = 'inline-block';
        badPassword2.style.color = 'red';
        goodPassword2.style.display = 'none';
    } else if (e.target.value == '') {
        badPassword2.style.display = 'none';
        goodPassword2.style.display = 'none';
    }
})

enterPassword2.addEventListener('focus',()=> {
    enterPassword2.style.backgroundColor = 'black';
    enterPassword2.style.color = 'white';
});

enterPassword2.addEventListener('blur',()=> {
    enterPassword2.style.backgroundColor = 'white';
    enterPassword2.style.color = 'black';
});

enterPassword3.addEventListener('input', (e)=> {
    if (e.target.value == 'mróz') {
        goodPassword3.style.display = 'inline-block';
        goodPassword3.style.color = 'green';
        badPassword3.style.display = 'none';
        div4.style.display = 'block'
    } else if (e.target.value !== '') {
        badPassword3.style.display = 'inline-block';
        badPassword3.style.color = 'red';
        goodPassword3.style.display = 'none';
    } else if (e.target.value == '') {
        badPassword3.style.display = 'none';
        goodPassword3.style.display = 'none';
    }
})

enterPassword3.addEventListener('focus',()=> {
    enterPassword3.style.backgroundColor = 'black';
    enterPassword3.style.color = 'white';
});

enterPassword3.addEventListener('blur',()=> {
    enterPassword3.style.backgroundColor = 'white';
    enterPassword3.style.color = 'black';
});

