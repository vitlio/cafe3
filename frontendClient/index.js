const btn = document.getElementById('btnCall')

btn.addEventListener('click', async () => {
    console.log('click');
    await fetch('http://localhost:3000/admin/19?ring=true')
    .then(data => data.json())
    .then(res => console.log(res))
})