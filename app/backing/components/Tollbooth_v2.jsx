/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.7 tollboot_cleanup.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useFrame} from "@react-three/fiber";

export function Tollbooth2(props) {
  const { nodes, materials } = useGLTF('/tollbooth2/tollboot_cleanup.gltf')

    const groupRef = useRef(null)
    useFrame((state, delta) => {
        // @ts-ignore
        groupRef.current.rotation.z -= delta/3
    })

  return (
    <group {...props} dispose={null}>
      <group ref={groupRef} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.model_tex_u1_v1_0008.geometry} material={materials.tex_u1_v1} scale={40} />
      </group>
    </group>
  )
}

useGLTF.preload('/tollbooth2/tollboot_cleanup.gltf')
