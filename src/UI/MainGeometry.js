import React,{Suspense, useRef, useEffect, useState, useMemo, useLayoutEffect } from "react";
import {Canvas,renderer,useFrame,useThree} from '@react-three/fiber';
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

const Donuttop = () => {
    const donutRef=useRef();
    const [hovered, hover] = useState(false)
    useFrame(() => {
        donutRef.current.rotation.y-=0.01;
        donutRef.current.rotation.x+=0.01;
    })
    return(
            <mesh ref={donutRef}
            onPointerOver={() => {
                hover(true);
            }}
            onPointerOut={() => {
                hover(false);
            }}
            >
                <torusGeometry
                args={[2.2, 0.58, 31, 100]}
                attach="geometry"
                />
                <meshStandardMaterial color={hovered ? '#E75D3E' : '#DC8DDA'}
                />
            </mesh>
            
    )
}
const DonutTop = () => {
    
    return(
            <Canvas
            style={{
                width:"100%", height:"100%"
            }}
            >
                <ambientLight intensity={0.5}/>
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10,-10,-10]}/>
                <Donuttop position={[50, 50, 0]}/>
                <OrbitControls/>
            </Canvas>

    )
};
const Donutbottom = () => {
    const donutbottomRef=useRef();
    const [hovered, hover] = useState(false)
    useFrame(() => {
         donutbottomRef.current.rotation.y+=0.02;
         donutbottomRef.current.rotation.x-=0.01;
    })
    return(
            <mesh ref={donutbottomRef}
            onPointerOver={() => {
                hover(true);
            }}
            onPointerOut={() => {
                hover(false);
            }}
            >
                <torusGeometry
                args={[1.8, 0.56, 31, 100]}
                attach="geometry"
                />
                <meshStandardMaterial color={hovered ? '#DC8DDA' : '#E75D3E'}
                />
            </mesh>
            
    )
}
const DonutBottom = () => {
    return(
            <Canvas
            style={{
                width:"100%", height:"100%"
            }}
            >
                <ambientLight intensity={0.5}/>
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10,-10,-10]}/>
                <Donutbottom position={[50, 50, 0]}/>
            </Canvas>

    )
};
const Cornorbottom = () => {
    const cornorbottomRef=useRef();
    const [hovered, hover] = useState(false)
    useFrame(() => {
         cornorbottomRef.current.rotation.y+=0.02;
         cornorbottomRef.current.rotation.x-=0.01;
    })
    return(
            <mesh ref={cornorbottomRef}
            onPointerOver={() => {
                hover(true);
            }}
            onPointerOut={() => {
                hover(false);
            }}
            >
                <octahedronGeometry 
                args={[1.8, 0.56, 31, 100]}
                attach="geometry"
                />
                <meshStandardMaterial  attach="material" color={hovered ? '#DC8DDA' : '#E75D3E'}/>
            </mesh>
            
    )
}
const CornorBottom = () => {
    return(
            <Canvas
            style={{
                width:"100%", height:"100%"
            }}
            >
                <ambientLight intensity={0.5}/>
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10,-10,-10]}/>
                <Cornorbottom position={[50, 50, 0]}/>
                <OrbitControls/>
            </Canvas>

    )
};
// function Octahedron() {
//     const [active, setActive] = useState(false)
//     const [hovered, setHover] = useState(false)
//     const vertices = [[-1, 0, 0], [0, 1, 0], [1, 0, 0], [0, -1, 0], [-1, 0, 0]]
//     const { color, pos, ...props } = useSpring({
//      color: active ? 'hotpink' : 'white',
//      pos: active ? [0, 0, 2] : [0, 0, 0],
//      'material-opacity': hovered ? 0.6 : 0.25,
//      scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
//      rotation: active ? [THREE.Math.degToRad(180), 0, THREE.Math.degToRad(45)] : [0, 0, 0],
//      config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 }
//     })
//     return (
//      <group>
//       <animated.line position={pos}>
//        <geometry attach="geometry" vertices={vertices.map(v => new THREE.Vector3(...v))} />
//        <animated.lineBasicMaterial attach="material" color={color} />
//       </animated.line>
//       <animated.mesh onClick={e => setActive(!active)} onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} {...props}>
//        <octahedronGeometry attach="geometry" />
//        <meshStandardMaterial attach="material" color="grey" transparent />
//       </animated.mesh>
//      </group>
//     )
//    }








export  {DonutTop, DonutBottom, CornorBottom};