/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { proxy, useSnapshot } from 'valtio'
import { HexColorPicker } from 'react-colorful'

const state = proxy({
    current: null,
    items: {
        pillow: '#37372f',
        chair: '#2f1f33',
    },
})

export function Picker() {
    const snap = useSnapshot(state)
    return (
        <div>
            <HexColorPicker
                className='picker'
                color={snap.items[snap.current]}
                onChange={(color) => (state.items[snap.current] = color)}
            />
            <h1 className='part'>{snap.current}</h1>
        </div>
    )
}

export default function Armchair(props) {
    const group = useRef()
    const snap = useSnapshot(state)

    const { nodes, materials } = useGLTF('models/armchair.glb')

    return (
        <group
            ref={group}
            {...props}
            dispose={null}
            onPointerDown={(e) => {
                e.stopPropagation()
                state.current = e.object.material.name
            }}
            onPointerMissed={() => (state.current = null)}
        >
            <group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.legs.geometry}
                    material={materials['fabric.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.base.geometry}
                    material={nodes.base.material}
                    material-color={snap.items.chair}
                    material-name='chair'
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.chair.geometry}
                    material={nodes.chair.material}
                    material-color={snap.items.chair}
                    material-name='chair'
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.cushion.geometry}
                    material={nodes.cushion.material}
                    material-color={snap.items.chair}
                    material-name='chair'
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pillow.geometry}
                    material={materials['fabric.003']}
                    material-color={snap.items.pillow}
                    material-name='pillow'
                />
            </group>
        </group>
    )
}

useGLTF.preload('models/armchair.glb')