"use client";
import * as THREE from "three";
import React, { Suspense, useEffect, useRef } from "react";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Canvas } from "@react-three/fiber";
type Props = {};
type GLTFResult = GLTF & {
  nodes: {
    ["default001fg_15_-_Default_0"]: THREE.Mesh;
    ["Plane001_Material_#13_0"]: THREE.Mesh;
    Object_7: THREE.SkinnedMesh;
    Object_8: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    ["15_-_Default"]: THREE.MeshStandardMaterial;
    Material_13: THREE.MeshStandardMaterial;
    Material_15: THREE.MeshStandardMaterial;
    Material_16: THREE.MeshStandardMaterial;
  };
};
function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/models/phoenix.glb"
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions["Take 001"]?.reset().play();
  });

  return (
    // @ts-expect-error
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="7e80fc465c1c41fc9f1895b4afce70a6fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Material_15}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.Material_16}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <group
                    name="Object_6"
                    position={[0, 0.994, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="PhysCamera001"
                    position={[9.513, 1.183, 8.693]}
                    rotation={[-0.028, 0.805, 0.02]}
                  />
                  <group
                    name="PhysCamera001Target"
                    position={[0.545, 0.94, 0.08]}
                    rotation={[-3.088, -0.541, -3.114]}
                  />
                  <group
                    name="phoenix"
                    position={[0, 0.994, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="Character001"
                    rotation={[Math.PI / 2, 1.571, 0]}
                  />
                  <group
                    name="CATRigHub001Gizmo"
                    position={[0, 0.695, 0.052]}
                    rotation={[2.168, Math.PI / 2, 0]}
                  />
                  <group
                    name="CATRigHub002Gizmo"
                    position={[0, 0.878, 0.542]}
                    rotation={[2.641, Math.PI / 2, 0]}
                  />
                  <group
                    name="VRaySun001"
                    position={[11.444, 17.792, 15.299]}
                    rotation={[-0.981, 0.51, 0.629]}
                  />
                  <group
                    name="VRaySun001Target"
                    position={[-0.521, 0, 3.383]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

function HomePage({}: Props) {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Canvas camera={{ position: [-7, 0, 0] }}>
        <ambientLight />
        <Suspense>
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            maxPolarAngle={Math.PI}
            minPolarAngle={0} // Allow rotation above and below the horizon
          />
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default HomePage;
