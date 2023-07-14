"use client";

import MyCanvas from "@/app/backing/components/MyCanvas";
import LooneyThing from "@/app/backing/Looney/LooneyThing";

export default function Home() {
    return (
        <main>
            <LooneyThing/>
            <MyCanvas/>
        </main>
    );
}