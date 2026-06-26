"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function NeuralBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    } catch {
      return;
    }

    const size = () => ({
      w: canvas.clientWidth || canvas.offsetWidth,
      h: canvas.clientHeight || canvas.offsetHeight,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    let s0 = size();
    renderer.setSize(s0.w, s0.h, false);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, s0.w / s0.h, 0.1, 100);
    camera.position.z = 10;

    const group = new THREE.Group();
    scene.add(group);

    const NODES = 46;
    const nodes: { base: THREE.Vector3; pos: THREE.Vector3; phase: number }[] = [];
    for (let i = 0; i < NODES; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / NODES);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 3.4 + (Math.random() - 0.5) * 0.8;
      const p = new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta),
      );
      nodes.push({ base: p.clone(), pos: p.clone(), phase: Math.random() * Math.PI * 2 });
    }

    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x9fe6ff });
    const nodeMeshes: { m: THREE.Mesh; g: THREE.Mesh; n: (typeof nodes)[0] }[] = [];
    nodes.forEach((n) => {
      const m = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 12), nodeMat);
      const g = new THREE.Mesh(
        new THREE.SphereGeometry(0.16, 12, 12),
        new THREE.MeshBasicMaterial({ color: 0x3fd0ff, transparent: true, opacity: 0.25 }),
      );
      m.position.copy(n.pos);
      g.position.copy(n.pos);
      group.add(m);
      group.add(g);
      nodeMeshes.push({ m, g, n });
    });

    const edges: [number, number][] = [];
    for (let i = 0; i < NODES; i++) {
      for (let j = i + 1; j < NODES; j++) {
        if (nodes[i].base.distanceTo(nodes[j].base) < 2.3) edges.push([i, j]);
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    const linePos = new Float32Array(edges.length * 6);
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePos, 3));
    const lineSeg = new THREE.LineSegments(
      lineGeo,
      new THREE.LineBasicMaterial({ color: 0x3fd0ff, transparent: true, opacity: 0.28 }),
    );
    group.add(lineSeg);

    const pulses: { mesh: THREE.Mesh; edge: [number, number]; t: number; speed: number }[] = [];
    for (let k = 0; k < 10; k++) {
      const e = edges[Math.floor(Math.random() * edges.length)];
      const pm = new THREE.Mesh(
        new THREE.SphereGeometry(0.05, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xffffff }),
      );
      group.add(pm);
      pulses.push({ mesh: pm, edge: e, t: Math.random(), speed: 0.004 + Math.random() * 0.006 });
    }

    const DN = 80;
    const dp = new Float32Array(DN * 3);
    for (let i = 0; i < DN * 3; i++) dp[i] = (Math.random() - 0.5) * 14;
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute("position", new THREE.BufferAttribute(dp, 3));
    group.add(
      new THREE.Points(
        dustGeo,
        new THREE.PointsMaterial({ color: 0x3fd0ff, size: 0.03, transparent: true, opacity: 0.4 }),
      ),
    );

    let tx = 0,
      ty = 0;
    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 0.5;
      ty = (e.clientY / window.innerHeight - 0.5) * 0.5;
    };
    window.addEventListener("mousemove", onMove);

    const clock = new THREE.Clock();
    let raf = 0;
    const loop = () => {
      const t = clock.getElapsedTime();
      group.rotation.y += reduce ? 0 : 0.0025;
      group.rotation.x += (ty - group.rotation.x) * 0.04;

      nodeMeshes.forEach(({ m, g, n }) => {
        const k = 1 + Math.sin(t * 1.3 + n.phase) * 0.04;
        n.pos.copy(n.base).multiplyScalar(k);
        m.position.copy(n.pos);
        g.position.copy(n.pos);
        (g.material as THREE.MeshBasicMaterial).opacity =
          0.18 + Math.abs(Math.sin(t * 1.3 + n.phase)) * 0.25;
      });

      const arr = lineGeo.attributes.position.array as Float32Array;
      edges.forEach((e, idx) => {
        const a = nodes[e[0]].pos,
          b = nodes[e[1]].pos;
        arr[idx * 6] = a.x;
        arr[idx * 6 + 1] = a.y;
        arr[idx * 6 + 2] = a.z;
        arr[idx * 6 + 3] = b.x;
        arr[idx * 6 + 4] = b.y;
        arr[idx * 6 + 5] = b.z;
      });
      lineGeo.attributes.position.needsUpdate = true;

      pulses.forEach((p) => {
        p.t += p.speed;
        if (p.t > 1) {
          p.t = 0;
          p.edge = edges[Math.floor(Math.random() * edges.length)];
        }
        const a = nodes[p.edge[0]].pos,
          b = nodes[p.edge[1]].pos;
        p.mesh.position.lerpVectors(a, b, p.t);
      });

      renderer.render(scene, camera);
      raf = requestAnimationFrame(loop);
    };
    loop();

    const onResize = () => {
      const s = size();
      renderer.setSize(s.w, s.h, false);
      camera.aspect = s.w / s.h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" />;
}
