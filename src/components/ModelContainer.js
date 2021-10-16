import React, { Suspense } from 'react'
import Armchair, { Picker } from './models/Armchair'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import { Environment, Html, OrbitControls } from '@react-three/drei'

const ModelContainer = () => {
    return (
        <Container>
            <Canvas
                shadows
                dpr={[1, 2]}
                camera={{ position: [0, 3, 4], fov: 50 }}
            >
                <ambientLight intensity={0.5} />
                <spotLight
                    intensity={0.5}
                    angle={0.1}
                    penumbra={1}
                    position={[10, 15, 10]}
                    castShadow
                />
                <Suspense
                    fallback={
                        <Html>
                            <h1>loading...</h1>
                        </Html>
                    }
                >
                    <Armchair
                        scale={2}
                        rotation={[0, 0, 0]}
                        position={[0, -1, 0]}
                    />
                    <Environment preset='city' />
                </Suspense>
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    minPolarAngle={Math.PI / 2 - 0.2}
                    maxPolarAngle={Math.PI / 2 + 0.2}
                />
            </Canvas>
            <Picker />
        </Container>
    )
}

export default ModelContainer

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 140px);
`
