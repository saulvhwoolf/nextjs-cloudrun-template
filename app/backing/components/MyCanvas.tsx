import {Canvas, useFrame} from "@react-three/fiber";
import Box from "@/app/backing/components/Box";
import {Suspense, useRef} from "react";
import {TollBooth} from "@/app/backing/components/Tollbooth";
import {Tollbooth2} from "@/app/backing/components/Tollbooth_v2";

export default function MyCanvas() {

    return <>
        <div className={"scene"}>
            <Canvas shadows className={"scene"} camera={{position: [-15, 15, 0],}}>
                {/*<color attach="background" args={["rgba(0,0,0,0)"]} />*/}
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                {/*<Contraption/>*/}
                <Suspense>
                    {/*<TollBooth></TollBooth>*/}
                    <Tollbooth2></Tollbooth2>
                </Suspense>
            </Canvas>
        </div>
    </>
}
