const h1 = document.querySelector('h1');

document.body.addEventListener('mousemove', (event) => {
    // console.log(e.clientX, e.clientY);
    const x = event.clientX + 1;
    const y = event.clientY + 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    h1.textContent = x + "," + y;

    const red = x / width * 100;
    const green = y / height * 100;
    const blue = ((x / width * 100) + (y / height * 100)) / 2;

    document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;

    if ( red < 10) {
        h1.style.color = "white";
    }
    else {
        h1.style.color = "black";
    }

    // document.body.style.backgroundColor = `rgb(${event.clientX}, ${event.clientY}, ${event.clientX / event.clientY * 20})`;


});