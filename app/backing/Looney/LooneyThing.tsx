import LooneyLoop from "@/app/backing/Looney/LooneyLoop";


export default function LooneyThing() {
    const offsets = Array.from({length: 9}, (_, i) => i )
    return <div className={"loony-container"}>
        {offsets.reverse().map((offset) =>
            <LooneyLoop offset={offset}/>
        )}

    </div>
}