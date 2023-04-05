import React,{useState, useRef} from "react";
import {Canvas,renderer,useFrame} from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
// OctahedronGeometry
//hover 주려면 z-index 올리기
const Donut = () => {
    const donutRef=useRef();
    const [hovered, hover] = useState(false)
    useFrame(() => {
         donutRef.current.rotation.y-=0.01;
         donutRef.current.rotation.x+=0.02;
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
                args={[1, 0.34, 32, 100]}
                attach="geometry"
                />
                <meshStandardMaterial color={hovered ? '#E75D3E' : '#DC8DDA'}
                />
            </mesh>
    )
}


const DonutThree = () => {
    return(

            <Canvas
            style={{
                width:"100%", height:"100%"
            }}
            >
                <ambientLight intensity={0.5}/>
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10,-10,-10]}/>
                <Donut position={[40, 10, 0]}/>
                <OrbitControls/>
            </Canvas>

    )
};

export  {DonutThree};