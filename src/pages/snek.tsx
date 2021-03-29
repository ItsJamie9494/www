import React from "react"
import Layout from '../components/Layout'
import { Landing, Head, Subheader } from "../components/Landing"

export default function SnekGame() {
    const snekCanvasRef = React.createRef<HTMLCanvasElement>()


    React.useEffect(() => {
        const ctx = snekCanvasRef.current.getContext('2d')
        snekCanvasRef.current.width = 300
        snekCanvasRef.current.height = 300
        ctx.font = "20px 'Inter'"

        // start message
        ctx.textAlign = "center"
        ctx.fillStyle = "green"
        ctx.fillText("click here to start", snekCanvasRef.current.width/2, snekCanvasRef.current.height/2)

        // play game
        let interval
        snekCanvasRef.current.onclick = () => {
            if (interval) return
            interval = setInterval(gameLoop, 200)
        }

        // game loop
        let direction = 0
        let food = null
        let grow = false
        const snek = [
            { x: 10, y: 12 },
            { x: 10, y: 11 },
            { x: 10, y: 10 },
        ]
        const gameLoop = () => {
            const color = props => props.theme.colors.primary;
            // move snek
            const oldHead = snek[snek.length -1]
            snek.push({
                x: direction === 1 ? oldHead.x + 1 : direction === 3 ? oldHead.x - 1 : oldHead.x,
                y: direction === 0 ? oldHead.y - 1 : direction === 2 ? oldHead.y + 1 : oldHead.y
            })
            if (!grow) snek.shift()
            else grow = false
            const head = snek[snek.length - 1]

            // loop area
            if (head.x > 19) head.x = 0
            if (head.y > 19) head.y = 0
            if (head.x < 0) head.x = 19
            if (head.y < 0) head.y = 19

            // check overlap
            const bodyPos = snek.map(({x, y}) => `${x}-${y}`)
            bodyPos.pop()
            if (bodyPos.includes(`${head.x}-${head.y}`)) return clearInterval(interval)

            // eat food
            if (food && head.x === food.x && head.y === food.y) {
                food = null
                grow = true
            }

            // spawn food
            if (!food) food = {
                x: Math.floor(Math.random() * 20),
                y: Math.floor(Math.random() * 20)
            }

            // draw screen
            ctx.clearRect(0, 0, 300, 300)
            snek.forEach(({x, y}) => ctx.fillRect(15 * x, 15 * y, 15, 15))
            if (food) ctx.fillRect(15 * food.x, 15 * food.y, 15, 15)
            ctx.fillText(String(snek.length), 10, 25)

            // direction controls
            document.body.onkeydown = e => {
                const directions = [
                    "ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft",
                    "w", "d", "s", "a",
                    "k", "l", "j", "h"
                ]
                e.preventDefault();
                e.stopPropagation();

                const d = directions.indexOf(e.key) % 4
                if (
                    d >= 0 &&
                    interval &&
                    !(
                        (direction === 0 && d === 2) ||
                        (direction === 1 && d === 3) ||
                        (direction === 2 && d === 0) ||
                        (direction === 3 && d === 1)
                    )
                ) direction = d
            }
        }
    })

    return (
        <Layout title={"snek"}>
            <Landing>
                <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Head>;)</Head>
                    <Subheader>you found one of many easter eggs! now enjoy this snake game that I wrote because i'm bored</Subheader>
                    <canvas ref={snekCanvasRef}/>
                </div>
            </Landing>
        </Layout>
    )
}
