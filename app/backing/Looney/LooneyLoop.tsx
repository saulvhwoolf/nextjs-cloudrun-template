

type Props = {
    offset : number
}

export default function LooneyLoop(props:Props) {
    const initalScale = 2.0
    const scaleOffset = .88

    const size = initalScale * (scaleOffset ** props.offset)
    const pct = Math.round(100.0*(1-size))

    const animationDelay = (-props.offset*100)

    const style = {left : pct+"%", top : pct+"%", right : pct+"%", bottom : pct+"%", animationDelay : animationDelay+"ms"}

    return <div className={"loony-loop animateBounce"} style={style}  >
        <img src="/LooneyLoop.png" alt=""/>
    </div>
}