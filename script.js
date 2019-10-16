(() => {
    let canvas
    let context
    let toggle
    let timer

    const start = document.getElementById('start')
    const stop = document.getElementById('stop')
    stop.style.visibility = 'hidden';

    const init = () =>{
        canvas = document.createElement('canvas')
        canvas.width = 256;
        canvas.height = 256;

        context = canvas.getContext('2d')

        document.body.appendChild(canvas)
    }

    const animate = () => {
        timer = setTimeout(animate, 1000 / 60)
        draw()
    }

    const draw = () => {
        const time = Date.now() * 0.002;
        const x = Math.sin(time) * 100 + 128
        const y = Math.cos(time * 0.42) * 100 + 128;
        toggle = !toggle

        context.fillStyle = toggle ? '#ED6A5A' : '#00798C';
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, true)
        context.closePath()
        context.fill()
    }

    init()

    start.addEventListener('click', () =>{
        animate()
        stop.style.visibility = 'visible'
        start.style.visibility = 'hidden'
    })

    stop.addEventListener('click', () =>{
        clearTimeout(timer)
        context.clearRect(0, 0, canvas.width, canvas.height)
        stop.style.visibility = 'hidden'
        start.style.visibility = 'visible'
    })

})()