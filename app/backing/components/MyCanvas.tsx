import {Canvas, useFrame} from "@react-three/fiber";
import Box from "@/app/backing/components/Box";
import {Suspense, useRef} from "react";
import Contraption from "@/app/backing/components/Contraption";
import {TollBooth} from "@/app/backing/components/Tollbooth";

export default function MyCanvas() {

    return <>
        <div className={"scene"}>
            <Canvas shadows className={"scene"} camera={{position: [-6, 7, 7],}}>
                {/*<color attach="background" args={["rgba(0,0,0,0)"]} />*/}
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                {/*<Contraption/>*/}
                <Suspense>
                    <TollBooth></TollBooth>
                </Suspense>
            </Canvas>
        </div>
    </>
}
