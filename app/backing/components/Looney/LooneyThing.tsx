import LooneyLoop from "@/app/backing/components/Looney/LooneyLoop";


export default function LooneyThing() {
    const offsets = Array.from({length: 9}, (_, i) => i )
    return <div className={"loony-container"}>
        {offsets.reverse().map((offset) =>
            <LooneyLoop key={"loop_"+offset}  offset={offset}/>
        )}

    </div>
}