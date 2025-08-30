// src/components/Orb3D.jsx  (replace previous file)
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Orb3D() {
  const mountRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene / Camera / Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 10, 28);

    const camera = new THREE.PerspectiveCamera(
      40,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0.6, 9);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.pointerEvents = "none";
    mount.appendChild(renderer.domElement);

    // Lights (tuned for glossy/glass + metallic)
    const hemi = new THREE.HemisphereLight(0xb8b8ff, 0x151219, 0.6);
    scene.add(hemi);

    const key = new THREE.DirectionalLight(0xffffff, 1.6);
    key.position.set(3, 6, 6);
    key.castShadow = false;
    scene.add(key);

    const rim = new THREE.PointLight(0x9f7fff, 1.2, 40);
    rim.position.set(-5, -2, 4);
    scene.add(rim);

    // Holder for model
    const rig = new THREE.Group();
    scene.add(rig);

    // Optional: subtle floor fade (no geometry border)
    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(16, 64),
      new THREE.MeshBasicMaterial({
        color: 0x30204a,
        transparent: true,
        opacity: 0.16,
      })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -2.3;
    rig.add(floor);

    // Load GLB
    const loader = new GLTFLoader();
    let mixer = null;

    loader.load(
      "/models/metalicOrb.glb",
      (gltf) => {
        const model = gltf.scene || gltf.scenes[0];
        model.traverse((o) => {
          if (o.isMesh) {
            o.castShadow = false;
            o.receiveShadow = false;
            // Make PBR a bit shinier by default (unless you already have materials set)
            if (o.material && "metalness" in o.material) {
              o.material.metalness = Math.min(1, (o.material.metalness ?? 0.6) + 0.2);
              o.material.roughness = Math.max(0, (o.material.roughness ?? 0.4) - 0.15);
              o.material.envMapIntensity = 1.2;
            }
          }
        });

        // Auto center + scale to fit nicely in camera
        const box = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        box.getSize(size);
        const center = new THREE.Vector3();
        box.getCenter(center);
        model.position.sub(center); // center at origin

        // Scale so largest dimension ~ 4.5 units
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 4.5 / (maxDim || 1);
        model.scale.setScalar(scale);

        // Slight vertical offset so it sits visually centered
        model.position.y -= 0.2;

        rig.add(model);

        // Play first animation if present
        if (gltf.animations && gltf.animations.length) {
          mixer = new THREE.AnimationMixer(model);
          const clip = gltf.animations[0];
          const action = mixer.clipAction(clip);
          action.play();
        }
      },
      undefined,
      (err) => {
        console.error("GLB load error:", err);
      }
    );

    // Interactions: mouse rotation + scroll parallax
    let targetX = 0, targetY = 0;

    const onMouse = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      targetX = x * 0.5;
      targetY = y * 0.3;
    };
    window.addEventListener("mousemove", onMouse);

    const onScroll = () => {
      const t = window.scrollY || document.documentElement.scrollTop;
      rig.position.y = -t * 0.0008; // subtle parallax
    };
    window.addEventListener("scroll", onScroll);

    // Resize
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    // Loop
    const clock = new THREE.Clock();
    const tick = () => {
      const dt = clock.getDelta();

      // Smoothly follow mouse
      rig.rotation.y += (targetX - rig.rotation.y) * 0.06;
      rig.rotation.x += (targetY - rig.rotation.x) * 0.06;

      if (mixer) mixer.update(dt);
      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(tick);
    };
    tick();

    // Cleanup
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
      ro.disconnect();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="orb3d-mount" ref={mountRef} aria-hidden="true" />;
}
