import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
	const { scene } = useGLTF("/planet/scene.gltf");
	const modelRef = useRef();

	useEffect(() => {
		scene.traverse((node) => {
			if (node.isMesh) {
				node.castShadow = true;
				node.receiveShadow = true;
			}
		});
	}, [scene]);

	useFrame(({ clock }) => {
		if (modelRef.current) {
			const elapsedTime = clock.getElapsedTime();
			// modelRef.current.rotation.y = elapsedTime * 0.5; // Rotate around Y axis
			modelRef.current.position.y = Math.sin(elapsedTime) * 0.5; // Up and down motion
		}
	});

	return (
		<primitive
			ref={modelRef}
			object={scene}
			scale={1}
			position={[1, 0, -3]}
			rotation={[0.1, -0.75, -0.5]}
		/>
	);
};

const EarthCanvas = () => {
	return (
		<Canvas>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enablePan={false}
					enableZoom={false}
					enableRotate={false}
				/>
				<ambientLight intensity={0.5} />
				<directionalLight position={[5, 5, 5]} intensity={1} />
				<Earth />
				<Preload all />
			</Suspense>
		</Canvas>
	);
};

export default EarthCanvas;
