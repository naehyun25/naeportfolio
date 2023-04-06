import React,{useState, useRef} from "react";
import {Canvas,renderer,useFrame} from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
// OctahedronGeometry
//hover 주려면 z-index 올리기
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
                <OrbitControls/>
            </Canvas>

    )
};








export  {DonutTop, DonutBottom};