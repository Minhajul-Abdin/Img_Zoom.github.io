const con = document.getElementById('con');

const img = document.querySelector('img');

con.addEventListener('mousemove',(e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    console.log(x,y);

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(3)";
})

con.addEventListener('mouseleave',(e) => {
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
})