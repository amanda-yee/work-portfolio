
const fontLoop = () => {

    const heading = document.querySelector('.intro-text h1');

    const fonts = ['DotGothic16', 'VT323', 'Handjet', 'Nova Square', 'Zen Dots', 'Orbitron', 'WDXL Lubrifont SC', 'Silkscreen']

    if (heading) {

        let index = 0;

        const interval = setInterval(() => {
            heading.style.fontFamily = fonts[index];
            index++;

            if (index >= fonts.length) {
                clearInterval(interval); // stop the loop at the end
            }
        }, 150); 
    };

    console.log('clicked')

}

export default fontLoop;