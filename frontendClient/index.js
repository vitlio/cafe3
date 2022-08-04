const btn = document.getElementById('btnCall')

btn.addEventListener('click', () => {
    fetch('http://localhost:3000/admin?ring=true')

})