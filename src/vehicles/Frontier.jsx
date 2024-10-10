/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/Frontier.glb 
*/
import React, { useRef } from 'react'
import { useSnapshot } from "valtio"

import { Preload, useGLTF } from '@react-three/drei'
import { useCustomization } from '../context/Customization';
import { state } from '../components/ColorPicker';


export function Frontier(props) {
  const { nodes, materials } = useGLTF('models/Frontier.glb')
  const { overlay } = useCustomization()
  const snap1 = useSnapshot(state)

  const canvasRef = useRef(document.createElement("canvas"));
  const textureRef = useRef();
  const context = useRef(canvasRef.current.getContext("2d"));
console.log()

  canvasRef.current.width = 1600;
  canvasRef.current.height = 1600;

  let ctx = context.current;

  ctx.globalCompositeOperation = "hue";

  const img = document.getElementById(`overlay${overlay}`);

  if (img.complete) {
    ctx.drawImage(img, 0, 0);
    if (snap1.base.BaseMtl !== "none") {
      if(overlay!==1){
      ctx.fillStyle = snap1.base.BaseMtl;
      ctx.fillRect(0, 0, 1600, 1600);
      }
    }


    if (textureRef.current) {
      textureRef.current.needsUpdate = true;
    }
  }

  else {
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      if (snap1.base.BaseMtl !== "none") {
        if(overlay!==1){
        ctx.fillStyle = snap1.base.BaseMtl;
        ctx.fillRect(0, 0, 1600, 1600);
        }
      }
      


      if (textureRef.current) {
        textureRef.current.needsUpdate = true;
      }
    }
  }
  <Preload all />
  return (
    
    <group {...props} dispose={null}>
      <group position={[-0.023, 1.975, 1.101]} scale={1.495}>
        <mesh geometry={nodes.body_12_pivot.geometry} material={materials.body} position={[0, 0, 0.003]} />
      </group>
      <group position={[-0.023, 1.955, 1.136]} scale={1.495}>
        <mesh geometry={nodes.black_matt_54_pivot.geometry} material={materials.black_matt} position={[0, 0, 0]} />
      </group>
      <group position={[-0.128, 1.896, 1.756]} scale={1.495}>
        <mesh geometry={nodes.black_matt_51_pivot.geometry} material={materials.black_matt} position={[0.001, -0.001, 0]} />
      </group>
      <group position={[-0.023, 0.714, 2.417]} scale={1.495}>
        <mesh geometry={nodes.black_matt_42_pivot.geometry} material={materials.black_matt} position={[0, 0.002, 0.001]} />
      </group>
      <group position={[-0.023, 1.563, 3.188]} scale={1.495}>
        <mesh geometry={nodes.black_shiny_23_pivot.geometry} material={materials.black_shiny} position={[0, 0, -0.002]} />
      </group>
      <group position={[-0.023, 1.566, 3.202]} scale={1.495}>
        <mesh geometry={nodes.black_matt_02_pivot.geometry} material={materials.black_matt} position={[0, 0, -0.001]} />
      </group>
      <group position={[-0.023, 1.589, 1.003]} scale={1.495}>
      <mesh geometry={nodes.body_01_pivot.geometry}>
        <meshStandardMaterial {...materials.BaseMtl} color={overlay==1 || overlay==13 || overlay==34 ? (snap1.base.BaseMtl!=="none" ? snap1.base.BaseMtl : 0xffffff) : 0xffffff}>
          <canvasTexture
            flipY={false}
            wrapS={1000}
            wrapT={1000}
            colorSpace='srgb'
            ref={textureRef}
            attach="map"
            image={canvasRef.current}
          />
        </meshStandardMaterial>
      </mesh></group>
      <mesh geometry={nodes.chrome_13.geometry} material={materials.chrome} position={[-0.023, 0.884, -4.037]} scale={1.495} />
      <mesh geometry={nodes.glass_08.geometry} material={materials.glass} position={[-0.023, 1.562, -3.97]} scale={1.495} />
      <mesh geometry={nodes.red_13.geometry} material={materials.red} position={[-0.023, 1.322, -3.921]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_18.geometry} material={materials.black_shiny} position={[-0.022, 1.697, -4.085]} scale={1.495} />
      <mesh geometry={nodes.black_matt_27.geometry} material={materials.black_matt} position={[-0.943, 1.468, -4.054]} scale={1.495} />
      <mesh geometry={nodes.glass_12.geometry} material={materials.glass} position={[-0.023, 0.884, -4.038]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_27.geometry} material={materials.black_shiny} position={[-0.023, 0.688, -3.335]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_26.geometry} material={materials.black_shiny} position={[-0.023, 0.823, -3.333]} scale={1.495} />
      <mesh geometry={nodes.silver_13.geometry} material={materials.silver} position={[-0.023, 1.792, -2.819]} scale={1.495} />
      <mesh geometry={nodes.black_10.geometry} material={materials.black} position={[-0.023, 0.992, -2.742]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_22.geometry} material={materials.black_shiny} position={[-0.023, 0.668, -3.336]} scale={1.495} />
      <mesh geometry={nodes.black_matt_39.geometry} material={materials.black_matt} position={[-1.213, 0.631, -2.2]} scale={1.495} />
      <mesh geometry={nodes.black_matt_38.geometry} material={materials.black_matt} position={[1.168, 0.631, -2.2]} scale={1.495} />
      <mesh geometry={nodes.silver_15.geometry} material={materials.silver} position={[-1.213, 0.641, -2.187]} scale={1.495} />
      <mesh geometry={nodes.black_matt_37.geometry} material={materials.black_matt} position={[-1.275, 0.652, -2.128]} scale={1.495} />
      <mesh geometry={nodes.black_matt_36.geometry} material={materials.black_matt} position={[1.23, 0.652, -2.128]} scale={1.495} />
      <mesh geometry={nodes.glass_06.geometry} material={materials.glass} position={[-0.023, 2.588, -1.597]} scale={1.495} />
      <mesh geometry={nodes.r_glass_01.geometry} material={materials.r_glass} position={[-0.023, 2.587, -1.596]} scale={1.495} />
      <mesh geometry={nodes.glass_05.geometry} material={materials.glass} position={[-0.023, 2.59, -1.58]} scale={1.495} />
      <mesh geometry={nodes.silver_07.geometry} material={materials.silver} position={[-0.023, 2.59, -1.576]} scale={1.495} />
      <mesh geometry={nodes.glass_04.geometry} material={materials.glass} position={[-0.023, 2.59, -1.573]} scale={1.495} />
      <mesh geometry={nodes.silver_06.geometry} material={materials.silver} position={[-0.023, 2.59, -1.568]} scale={1.495} />
      <mesh geometry={nodes.black_07.geometry} material={materials.black} position={[-0.023, 0.589, 0.643]} scale={1.495} />
      <mesh geometry={nodes.black_matt_49.geometry} material={materials.black_matt} position={[1.138, 0.652, 2.182]} scale={1.495} />
      <mesh geometry={nodes.black_matt_48.geometry} material={materials.black_matt} position={[-1.183, 0.652, 2.182]} scale={1.495} />
      <mesh geometry={nodes.black_matt_32.geometry} material={materials.black_matt} position={[-1.349, 0.318, -2.529]} scale={1.495} />
      <mesh geometry={nodes.black_matt_31.geometry} material={materials.black_matt} position={[1.303, 0.318, -2.529]} scale={1.495} />
      <mesh geometry={nodes.black_matt_30.geometry} material={materials.black_matt} position={[-1.182, 0.587, -2.39]} scale={1.495} />
      <mesh geometry={nodes.black_matt_26.geometry} material={materials.black_matt} position={[1.137, 0.587, -2.39]} scale={1.495} />
      <mesh geometry={nodes.red_10.geometry} material={materials.red} position={[-1.342, 0.587, -2.374]} scale={1.495} />
      <mesh geometry={nodes.silver_09.geometry} material={materials.silver} position={[-1.323, 0.587, -2.374]} scale={1.495} />
      <mesh geometry={nodes.tire_mat8_01.geometry} material={materials.tire_mat8} position={[1.149, 0.587, -2.374]} scale={1.495} />
      <mesh geometry={nodes.silver_16.geometry} material={materials.silver} position={[1.278, 0.587, -2.374]} scale={1.495} />
      <mesh geometry={nodes.red_16.geometry} material={materials.red} position={[1.297, 0.587, -2.374]} scale={1.495} />
      <mesh geometry={nodes.black_matt_40.geometry} material={materials.black_matt} position={[-0.023, 0.635, -2.357]} scale={1.495} />
      <mesh geometry={nodes.brakes1_03.geometry} material={materials.brakes1} position={[-1.183, 0.587, 2.363]} scale={1.495} />
      <mesh geometry={nodes.brakes1_04.geometry} material={materials.brakes1} position={[1.138, 0.587, 2.363]} scale={1.495} />
      <mesh geometry={nodes.tire_mat8_04.geometry} material={materials.tire_mat8} position={[-1.164, 0.587, 2.363]} scale={1.495} />
      <mesh geometry={nodes.silver_19.geometry} material={materials.silver} position={[-1.293, 0.587, 2.363]} scale={1.495} />
      <mesh geometry={nodes.tire_mat8_03.geometry} material={materials.tire_mat8} position={[1.119, 0.587, 2.363]} scale={1.495} />
      <mesh geometry={nodes.silver_18.geometry} material={materials.silver} position={[1.248, 0.587, 2.363]} scale={1.495} />
      <mesh geometry={nodes.red_18.geometry} material={materials.red} position={[1.267, 0.587, 2.363]} scale={1.495} />
      <mesh geometry={nodes.orange_01.geometry} material={materials.orange} position={[-0.023, 1.169, 2.933]} scale={1.495} />
      <mesh geometry={nodes.red_02.geometry} material={materials.red} position={[-0.023, 0.664, 3.438]} scale={1.495} />
      <mesh geometry={nodes.black_matt_11.geometry} material={materials.black_matt} position={[-0.021, 1.446, 3.451]} scale={1.495} />
      <mesh geometry={nodes.black_matt_12.geometry} material={materials.black_matt} position={[-0.021, 0.991, 3.451]} scale={1.495} />
      <mesh geometry={nodes.black_01.geometry} material={materials.black} position={[-0.023, 1.646, 3.567]} scale={1.495} />
      <mesh geometry={nodes.black_matt_09.geometry} material={materials.black_matt} position={[-0.023, 1.444, 3.626]} scale={1.495} />
      <mesh geometry={nodes.black_matt_15.geometry} material={materials.black_matt} position={[-0.023, 1.497, 3.657]} scale={1.495} />
      <mesh geometry={nodes.black_matt_14.geometry} material={materials.black_matt} position={[-0.023, 1.453, 3.663]} scale={1.495} />
      <mesh geometry={nodes.black_matt_47.geometry} material={materials.black_matt} position={[-1.319, 0.318, 2.208]} scale={1.495} />
      <mesh geometry={nodes.black_matt_46.geometry} material={materials.black_matt} position={[1.273, 0.318, 2.208]} scale={1.495} />
      <mesh geometry={nodes.black_matt_45.geometry} material={materials.black_matt} position={[-0.023, 0.516, 2.243]} scale={1.495} />
      <mesh geometry={nodes.black_matt_44.geometry} material={materials.black_matt} position={[-1.155, 0.59, 2.347]} scale={1.495} />
      <mesh geometry={nodes.black_matt_43.geometry} material={materials.black_matt} position={[1.11, 0.59, 2.347]} scale={1.495} />
      <mesh geometry={nodes.red_21.geometry} material={materials.red} position={[-1.312, 0.587, 2.363]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_07.geometry} material={materials.black_shiny} position={[-0.023, 1.445, 3.683]} scale={1.495} />
      <mesh geometry={nodes.silver_01.geometry} material={materials.silver} position={[1.327, 0.587, -2.374]} scale={1.495} />
      <mesh geometry={nodes.red_05.geometry} material={materials.red} position={[-0.023, 1.57, -3.881]} scale={1.495} />
      <mesh geometry={nodes.silver_03.geometry} material={materials.silver} position={[-1.372, 0.587, -2.374]} scale={1.495} />
      <mesh geometry={nodes.chrome_02.geometry} material={materials.chrome} position={[-0.023, 2.588, -1.576]} scale={1.495} />
      <mesh geometry={nodes.black_matt_05.geometry} material={materials.black_matt} position={[-0.023, 1.242, 3.133]} scale={1.495} />
      <mesh geometry={nodes.silver_04.geometry} material={materials.silver} position={[-1.342, 0.587, 2.363]} scale={1.495} />
      <mesh geometry={nodes.silver_02.geometry} material={materials.silver} position={[1.297, 0.587, 2.363]} scale={1.495} />
      <mesh geometry={nodes.silver_12_pivot.geometry} material={materials.silver} position={[-0.023, 0.884, -4.038]} scale={1.495} />
      <mesh geometry={nodes.glass_11_pivot.geometry} material={materials.glass} position={[-0.023, 0.884, -4.036]} scale={1.495} />
      <mesh geometry={nodes.chrome_12_pivot.geometry} material={materials.chrome} position={[-0.023, 0.884, -4.036]} scale={1.495} />
      <mesh geometry={nodes.bump_01_pivot.geometry} material={materials.bump} position={[-0.023, 1.919, -3.996]} scale={1.495} />
      <mesh geometry={nodes.glass_10_pivot.geometry} material={materials.glass} position={[-0.023, 1.56, -3.986]} scale={1.495} />
      <mesh geometry={nodes.glass_09_pivot.geometry} material={materials.glass} position={[-0.023, 1.363, -3.984]} scale={1.495} />
      <mesh geometry={nodes.chrome_11_pivot.geometry} material={materials.chrome} position={[-0.023, 1.56, -3.984]} scale={1.495} />
      <mesh geometry={nodes.plate_01_pivot.geometry} material={materials.plate} position={[-0.023, 0.896, -3.982]} scale={1.495} />
      <mesh geometry={nodes.silver_11_pivot.geometry} material={materials.silver} position={[-0.023, 1.363, -3.978]} scale={1.495} />
      <mesh geometry={nodes.black_09_pivot.geometry} material={materials.black} position={[-0.023, 1.05, -3.972]} scale={1.495} />
      <mesh geometry={nodes.silver_10_pivot.geometry} material={materials.silver} position={[-0.023, 1.562, -3.964]} scale={1.495} />
      <mesh geometry={nodes.glass_07_pivot.geometry} material={materials.glass} position={[-0.023, 1.362, -3.929]} scale={1.495} />
      <mesh geometry={nodes.chrome_10_pivot.geometry} material={materials.chrome} position={[-0.023, 1.362, -3.928]} scale={1.495} />
      <mesh geometry={nodes.chrome_09_pivot.geometry} material={materials.chrome} position={[-0.023, 1.362, -3.923]} scale={1.495} />
      <mesh geometry={nodes.chrome_14_pivot.geometry} material={materials.chrome} position={[-0.191, 1.731, -4.087]} scale={1.495} />
      <mesh geometry={nodes.red_15_pivot.geometry} material={materials.red} position={[-0.023, 1.547, -4.08]} scale={1.495} />
      <mesh geometry={nodes.black_matt_29_pivot.geometry} material={materials.black_matt} position={[-0.023, 1.782, -4.078]} scale={1.495} />
      <mesh geometry={nodes.black_matt_28_pivot.geometry} material={materials.black_matt} position={[-0.023, 1.757, -4.078]} scale={1.495} />
      <mesh geometry={nodes.red_14_pivot.geometry} material={materials.red} position={[-0.023, 1.545, -4.071]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_17_pivot.geometry} material={materials.black_shiny} position={[-0.023, 1.545, -4.071]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_16_pivot.geometry} material={materials.black_shiny} position={[-0.023, 1.545, -4.068]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_20_pivot.geometry} material={materials.black_shiny} position={[-0.023, 0.671, -3.336]} scale={1.495} />
      <mesh geometry={nodes.silver_22_pivot.geometry} material={materials.silver} position={[-0.865, 0.703, -3.238]} scale={1.495} />
      <mesh geometry={nodes.black_matt_35_pivot.geometry} material={materials.black_matt} position={[-0.023, 1.895, -2.853]} scale={1.495} />
      <mesh geometry={nodes.bump_02_pivot.geometry} material={materials.bump} position={[-0.023, 1.9, -2.797]} scale={1.495} />
      <mesh geometry={nodes.black_matt_34_pivot.geometry} material={materials.black_matt} position={[-0.023, 1.867, -2.774]} scale={1.495} />
      <mesh geometry={nodes.black_matt_33_pivot.geometry} material={materials.black_matt} position={[-0.023, 1.893, -2.734]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_15_pivot.geometry} material={materials.black_shiny} position={[-0.023, 1.344, -3.91]} scale={1.495} />
      <mesh geometry={nodes.red_12_pivot.geometry} material={materials.red} position={[-0.023, 1.565, -3.88]} scale={1.495} />
      <mesh geometry={nodes.r_glass_02_pivot.geometry} material={materials.r_glass} position={[-0.023, 1.559, -3.88]} scale={1.495} />
      <mesh geometry={nodes.red_11_pivot.geometry} material={materials.red} position={[-0.023, 1.559, -3.879]} scale={1.495} />
      <mesh geometry={nodes.body_08_pivot.geometry} material={materials.body} position={[-0.023, 0.907, -3.875]} scale={1.495} />
      <mesh geometry={nodes.glass_13_pivot.geometry} material={materials.glass} position={[-0.023, 1.516, -3.867]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_21_pivot.geometry} material={materials.black_shiny} position={[-0.023, 0.67, -3.336]} scale={1.495} />
      <mesh geometry={nodes.silver_14_pivot.geometry} material={materials.silver} position={[1.167, 0.641, -2.187]} scale={1.495} />
      <mesh geometry={nodes.silver_08_pivot.geometry} material={materials.silver} position={[-0.023, 1.743, -1.664]} scale={1.495} />
      <mesh geometry={nodes.black_matt_25_pivot.geometry} material={materials.black_matt} position={[-0.023, 1.468, -1.654]} scale={1.495} />
      <mesh geometry={nodes.body_07_pivot.geometry} material={materials.body} position={[-0.023, 1.834, -1.651]} scale={1.495} />
      <mesh geometry={nodes.d_glass_02_pivot.geometry} material={materials.d_glass} position={[-0.023, 2.24, -1.61]} scale={1.495} />
      <mesh geometry={nodes.black_matt_24_pivot.geometry} material={materials.black_matt} position={[-0.023, 2.241, -1.609]} scale={1.495} />
      <mesh geometry={nodes.black_08_pivot.geometry} material={materials.black} position={[-0.023, 2.24, -1.608]} scale={1.495} />
      <mesh geometry={nodes.red_08_pivot.geometry} material={materials.red} position={[-0.023, 2.587, -1.595]} scale={1.495} />
      <mesh geometry={nodes.chrome_08_pivot.geometry} material={materials.chrome} position={[-0.023, 2.588, -1.586]} scale={1.495} />
      <mesh geometry={nodes.red_07_pivot.geometry} material={materials.red} position={[-0.023, 2.588, -1.579]} scale={1.495} />
      <mesh geometry={nodes.red_06_pivot.geometry} material={materials.red} position={[-0.023, 2.588, -1.57]} scale={1.495} />
      <mesh geometry={nodes.black_matt_23_pivot.geometry} material={materials.black_matt} position={[-0.023, 2.587, -1.565]} scale={1.495} />
      <mesh geometry={nodes.black_matt_22_pivot.geometry} material={materials.black_matt} position={[-0.023, 2.559, -1.522]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_13_pivot.geometry} material={materials.black_shiny} position={[-0.023, 2.686, -1.369]} scale={1.495} />
      <mesh geometry={nodes.black_matt_21_pivot.geometry} material={materials.black_matt} position={[-0.023, 2.163, -0.671]} scale={1.495} />
      <mesh geometry={nodes.body_06_pivot.geometry} material={materials.body} position={[-0.023, 1.648, -0.542]} scale={1.495} />
      <mesh geometry={nodes.d_glass_01_pivot.geometry} material={materials.d_glass} position={[-0.023, 2.129, -0.05]} scale={1.495} />
      <mesh geometry={nodes.black_matt_20_pivot.geometry} material={materials.black_matt} position={[-0.023, 2.128, -0.05]} scale={1.495} />
      <mesh geometry={nodes.chrome_07_pivot.geometry} material={materials.chrome} position={[-0.023, 1.645, -0.047]} scale={1.495} />
      <mesh geometry={nodes.interior_02_pivot.geometry} material={materials.interior} position={[-0.023, 1.595, 0.056]} scale={1.495} />
      <mesh geometry={nodes.interior_01_pivot.geometry} material={materials.interior} position={[-0.022, 1.578, 0.139]} scale={1.495} />
      <mesh geometry={nodes.black_06_pivot.geometry} material={materials.black} position={[-0.023, 0.951, 0.947]} scale={1.495} />
      <mesh geometry={nodes.chrome_06_pivot.geometry} material={materials.chrome} position={[-0.023, 1.953, 1.006]} scale={1.495} />
      <mesh geometry={nodes.black_matt_53_pivot.geometry} material={materials.black_matt} position={[-0.023, 2.195, 1.278]} scale={1.495} />
      <mesh geometry={nodes.black_13_pivot.geometry} material={materials.black} position={[-0.023, 2.195, 1.278]} scale={1.495} />
      <mesh geometry={nodes.d_glass_03_pivot.geometry} material={materials.d_glass} position={[-0.023, 2.199, 1.278]} scale={1.495} />
      <mesh geometry={nodes.black_matt_52_pivot.geometry} material={materials.black_matt} position={[-0.023, 1.874, 1.751]} scale={1.495} />
      <mesh geometry={nodes.black_matt_50_pivot.geometry} material={materials.black_matt} position={[1.2, 0.679, 2.116]} scale={1.495} />
      <mesh geometry={nodes.silver_21_pivot.geometry} material={materials.silver} position={[-1.183, 0.666, 2.167]} scale={1.495} />
      <mesh geometry={nodes.silver_20_pivot.geometry} material={materials.silver} position={[1.138, 0.666, 2.167]} scale={1.495} />
      <mesh geometry={nodes.brakes1_02_pivot.geometry} material={materials.brakes1} position={[-1.213, 0.587, -2.374]} scale={1.495} />
      <mesh geometry={nodes.brakes1_01_pivot.geometry} material={materials.brakes1} position={[1.168, 0.587, -2.374]} scale={1.495} />
      <mesh geometry={nodes.tire_mat8_02_pivot.geometry} material={materials.tire_mat8} position={[-1.194, 0.587, -2.374]} scale={1.495} />
      <mesh geometry={nodes.red_09_pivot.geometry} material={materials.red} position={[1.294, 0.587, -2.374]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_14_pivot.geometry} material={materials.black_shiny} position={[1.294, 0.587, -2.374]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_19_pivot.geometry} material={materials.black_shiny} position={[-1.339, 0.587, -2.374]} scale={1.495} />
      <mesh geometry={nodes.red_17_pivot.geometry} material={materials.red} position={[-1.339, 0.587, -2.374]} scale={1.495} />
      <mesh geometry={nodes.red_20_pivot.geometry} material={materials.red} position={[1.264, 0.587, 2.363]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_25_pivot.geometry} material={materials.black_shiny} position={[1.264, 0.587, 2.363]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_24_pivot.geometry} material={materials.black_shiny} position={[-1.309, 0.587, 2.363]} scale={1.495} />
      <mesh geometry={nodes.red_19_pivot.geometry} material={materials.red} position={[-1.31, 0.587, 2.363]} scale={1.495} />
      <mesh geometry={nodes.o_glass_01_pivot.geometry} material={materials.o_glass} position={[-0.023, 1.169, 2.931]} scale={1.495} />
      <mesh geometry={nodes.orange_02_pivot.geometry} material={materials.orange} position={[-0.023, 1.169, 2.932]} scale={1.495} />
      <mesh geometry={nodes.black_12_pivot.geometry} material={materials.black} position={[-0.023, 1.234, 3.115]} scale={1.495} />
      <mesh geometry={nodes.black_11_pivot.geometry} material={materials.black} position={[-0.023, 1.565, 3.129]} scale={1.495} />
      <mesh geometry={nodes.black_matt_41_pivot.geometry} material={materials.black_matt} position={[-0.023, 1.233, 3.151]} scale={1.495} />
      <mesh geometry={nodes.silver_17_pivot.geometry} material={materials.silver} position={[-0.023, 0.6, 3.173]} scale={1.495} />
      <mesh geometry={nodes.vd_glass_01_pivot.geometry} material={materials.vd_glass} position={[-0.023, 1.633, 3.191]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_10_pivot.geometry} material={materials.black_shiny} position={[-0.023, 1.633, 3.192]} scale={1.495} />
      <mesh geometry={nodes.glass_02_pivot.geometry} material={materials.glass} position={[-0.023, 1.564, 3.194]} scale={1.495} />
      <mesh geometry={nodes.lights_01_pivot.geometry} material={materials.lights} position={[-0.023, 1.568, 3.205]} scale={1.495} />
      <mesh geometry={nodes.black_matt_13_pivot.geometry} material={materials.black_matt} position={[-0.023, 1.534, 3.267]} scale={1.495} />
      <mesh geometry={nodes.black_matt_01_pivot.geometry} material={materials.black_matt} position={[-0.023, 0.703, 3.269]} scale={1.495} />
      <mesh geometry={nodes.glass_01_pivot.geometry} material={materials.glass} position={[-0.023, 0.951, 3.271]} scale={1.495} />
      <mesh geometry={nodes.chrome_01_pivot.geometry} material={materials.chrome} position={[-0.023, 1.535, 3.306]} scale={1.495} />
      <mesh geometry={nodes.chrome_03_pivot.geometry} material={materials.chrome} position={[-0.023, 1.534, 3.341]} scale={1.495} />
      <mesh geometry={nodes.chrome_04_pivot.geometry} material={materials.chrome} position={[-0.023, 1.102, 3.344]} scale={1.495} />
      <mesh geometry={nodes.chrome_05_pivot.geometry} material={materials.chrome} position={[-0.023, 1.095, 3.351]} scale={1.495} />
      <mesh geometry={nodes.black_matt_10_pivot.geometry} material={materials.black_matt} position={[-0.023, 0.895, 3.362]} scale={1.495} />
      <mesh geometry={nodes.black_03_pivot.geometry} material={materials.black} position={[-0.023, 0.726, 3.371]} scale={1.495} />
      <mesh geometry={nodes.glass_03_pivot.geometry} material={materials.glass} position={[-0.023, 1.102, 3.375]} scale={1.495} />
      <mesh geometry={nodes.black_04_pivot.geometry} material={materials.black} position={[-0.023, 0.951, 3.461]} scale={1.495} />
      <mesh geometry={nodes.silver_05_pivot.geometry} material={materials.silver} position={[-0.023, 0.748, 3.524]} scale={1.495} />
      <mesh geometry={nodes.black_05_pivot.geometry} material={materials.black} position={[-0.023, 1.435, 3.547]} scale={1.495} />
      <mesh geometry={nodes.frontier_bump_black_01_pivot.geometry} material={materials.frontier_bump_black} position={[-0.023, 1.499, 3.563]} scale={1.495} />
      <mesh geometry={nodes.black_02_pivot.geometry} material={materials.black} position={[-0.023, 1.443, 3.566]} scale={1.495} />
      <mesh geometry={nodes.black_matt_07_pivot.geometry} material={materials.black_matt} position={[-0.023, 0.944, 3.588]} scale={1.495} />
      <mesh geometry={nodes.black_matt_08_pivot.geometry} material={materials.black_matt} position={[-0.023, 0.951, 3.592]} scale={1.495} />
      <mesh geometry={nodes.black_matt_16_pivot.geometry} material={materials.black_matt} position={[-0.023, 1.496, 3.645]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_09_pivot.geometry} material={materials.black_shiny} position={[-0.023, 1.497, 3.666]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_08_pivot.geometry} material={materials.black_shiny} position={[-0.023, 1.498, 3.67]} scale={1.495} />
      <mesh geometry={nodes.red_04_pivot.geometry} material={materials.red} position={[-0.023, 1.498, 3.671]} scale={1.495} />
      <mesh geometry={nodes.plate_02_pivot.geometry} material={materials.plate} position={[-0.023, 0.959, 3.673]} rotation={[Math.PI, 0, Math.PI]} scale={1.495} />
      <mesh geometry={nodes.red_03_pivot.geometry} material={materials.red} position={[-0.023, 1.5, 3.681]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_11_pivot.geometry} material={materials.black_shiny} position={[-0.023, 0.822, -3.333]} scale={1.495} />
      <mesh geometry={nodes.black_matt_18_pivot.geometry} material={materials.black_matt} position={[-0.023, 1.019, -4.019]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_04_pivot.geometry} material={materials.black_shiny} position={[-1.195, 0.587, -2.374]} scale={1.495} />
      <mesh geometry={nodes.black_matt_03_pivot.geometry} material={materials.black_matt} position={[-0.023, 1.918, -4.014]} scale={1.495} />
      <mesh geometry={nodes.black_matt_19_pivot.geometry} material={materials.black_matt} position={[-0.023, 0.871, -4.02]} scale={1.495} />
      <mesh geometry={nodes.black_matt_17_pivot.geometry} material={materials.black_matt} position={[-0.023, 1.511, -2.786]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_12_pivot.geometry} material={materials.black_shiny} position={[-0.023, 0.636, -3.336]} scale={1.495} />
      <mesh geometry={nodes.red_01_pivot.geometry} material={materials.red} position={[-0.023, 1.565, -3.881]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_01_pivot.geometry} material={materials.black_shiny} position={[-0.023, 1.516, -3.866]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_03_pivot.geometry} material={materials.black_shiny} position={[1.15, 0.587, -2.374]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_05_pivot.geometry} material={materials.black_shiny} position={[1.12, 0.587, 2.363]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_02_pivot.geometry} material={materials.black_shiny} position={[-0.023, 1.641, 3.186]} scale={1.495} />
      <mesh geometry={nodes.black_shiny_06_pivot.geometry} material={materials.black_shiny} position={[-1.166, 0.587, 2.363]} scale={1.495} />
      <mesh geometry={nodes.black_matt_04_pivot.geometry} material={materials.black_matt} position={[-0.023, 1.455, 3.594]} scale={1.495} />
      <mesh geometry={nodes.black_matt_06_pivot.geometry} material={materials.black_matt} position={[-0.023, 1.017, -0.045]} scale={1.495} />
    </group>
  )
}

useGLTF.preload('/Frontier.glb')

