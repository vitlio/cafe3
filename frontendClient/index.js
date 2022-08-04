const btn = document.getElementById('btnCall')

btn.addEventListener('click', async () => {
    console.log('click');
    let a = await fetch('http://localhost:3000/admin/19?ring=true')
    console.log(await a);
})