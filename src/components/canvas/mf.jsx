import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function MFModel() {
	const Mf = useGLTF("./millenium_falcon/Mf.gltf");
	return (
		<Canvas>
			<Suspense fallback={null}>
				<Mf />
				<OrbitControls />
			</Suspense>
		</Canvas>
	);
}

export default MFModel;
