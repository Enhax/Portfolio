const tablinks = document.getElementsByClassName('tab-links');
const tabcontents = document.getElementsByClassName('tab-contents');
const sideMenu = document.getElementById('sideMenu');
const msg = document.getElementById('msg');

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove('active-link');
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

function openMenu() {
    sideMenu.style.right = '0';
}

function closeMenu() {
    sideMenu.style.right = '-180px';
}

document.addEventListener('click', (e) => {
    if (e.target != document.getElementById('open') && e.target != document.getElementById('sideMenu')) {
        sideMenu.style.right = '-200px';
    }
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbziJ2V5frbhdQFQ5MmgYs6zPAtcc_89po5FKT7Gna4WImJVg17Di7KGYj5SXToYmL60lA/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = 'Votre message a été envoyé avec succès.';
            setTimeout(function(){
                msg.innerHTML = '';
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})



