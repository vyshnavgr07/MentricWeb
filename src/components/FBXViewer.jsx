"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";
import { FBXLoader } from "three-stdlib";

const FBXViewer = () => {
  const mountRef = useRef();
  const modelRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(5, 10, 7.5);
    scene.add(light);

    const ambient = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambient);

    // Track mouse position
    let mouseX = 0;
    let mouseY = 0;
    let isMouseInside = false;

    const handleMouseMove = (event) => {
      const bounds = mount.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;

      // Map mouse to rotation range
      mouseX = (x - 0.5) * Math.PI;
      mouseY = (y - 0.5) * Math.PI;
      isMouseInside = true;
    };

    const handleMouseLeave = () => {
      isMouseInside = false;
    };

    mount.addEventListener("mousemove", handleMouseMove);
    mount.addEventListener("mouseleave", handleMouseLeave);

    // Load FBX model
    const loader = new FBXLoader();
    loader.load(
      "/men.fbx",
      (object) => {
        object.scale.set(0.01, 0.01, 0.01);
        object.position.set(0, 0, 0);
        scene.add(object);
        modelRef.current = object;
      },
      undefined,
      (err) => {
        console.error("Failed to load FBX model:", err);
      }
    );

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);

      if (modelRef.current) {
        const targetX = isMouseInside ? mouseX : 0;
        const targetY = isMouseInside ? mouseY : 0;

        modelRef.current.rotation.y += (targetX - modelRef.current.rotation.y) * 0.1;
        modelRef.current.rotation.x += (targetY - modelRef.current.rotation.x) * 0.1;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      mount.removeEventListener("mousemove", handleMouseMove);
      mount.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      if (renderer && renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full h-full rounded-full shadow-xl backdrop-blur-sm flex items-center justify-center">
      <div
        ref={mountRef}
        className="w-full h-full rounded-full overflow-hidden shadow-lg border border-white/10 backdrop-blur-md"
      />
    </div>
  );
};

export default FBXViewer;
