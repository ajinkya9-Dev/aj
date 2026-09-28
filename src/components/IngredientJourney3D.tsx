import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Sparkles, Compass, ShieldCheck, Thermometer, ChevronRight, ChevronLeft, Play, Pause } from 'lucide-react';

interface Stage {
  id: string;
  step: string;
  title: string;
  location: string;
  timeframe: string;
  headline: string;
  description: string;
  scientificDetail: string;
  metricLabel: string;
  metricValue: string;
  color: string;
}

const STAGES: Stage[] = [
  {
    id: 'farm',
    step: '01',
    title: 'The Farm',
    location: 'Jaintia Hills, Meghalaya (1,200m)',
    timeframe: 'Month 0 — Planting',
    headline: 'Native Volcanic Soil & Monsoon Clouds',
    description: 'Indigenous seed rhizomes are planted in pristine, unpolluted red loam by the women farmers of Shangpung and Ummulong. No synthetic fertilizers or chemical amendments touch this earth.',
    scientificDetail: 'High rainfall and mineral-dense humus trigger genetic expression of maximum curcuminoids without bio-stimulation.',
    metricLabel: 'Soil Purity',
    metricValue: '100% Organic',
    color: '#16352B'
  },
  {
    id: 'harvest',
    step: '02',
    title: 'The Harvest',
    location: 'Winter Harvest in Meghalaya',
    timeframe: 'Month 9 — Maturation',
    headline: 'Hand-Lifted at Peak Volatile Oil Maturity',
    description: 'After 9 full months, the golden rhizomes reach physiological maturity. Farmers gently lift them using traditional wooden spades to prevent skin bruising and preserve ar-turmerone oils.',
    scientificDetail: 'Only mature secondary and primary fingers are selected; immature shoots are returned to seed banks.',
    metricLabel: 'Harvest Yield',
    metricValue: 'Grade-A Rhizome',
    color: '#D89B28'
  },
  {
    id: 'processing',
    step: '03',
    title: 'Stone Grinding',
    location: 'Aaranya Clean Facility, Pune',
    timeframe: 'Within 72 hrs of Curing',
    headline: 'Sub-40°C Low-Heat Granite Chakki Mills',
    description: 'Commercial mills run at 80°C+, scorching delicate essential oils. Aaranya uses heritage slow-rotation stone ghanis and chill-jacketed pulverizers keeping temperatures under 38°C.',
    scientificDetail: 'Sub-40°C processing retains 98.4% of volatile turmerones, ensuring the haldi smells sweet, earthy, and floral.',
    metricLabel: 'Milling Temp',
    metricValue: '< 38°C Cold-Milled',
    color: '#B95F3B'
  },
  {
    id: 'packaging',
    step: '04',
    title: 'Airtight Packaging',
    location: 'Pune Heritage Facility',
    timeframe: 'UV Shielded Bottling',
    headline: 'Zero-Plastic Amber Glass & Nitrogen Flushed',
    description: 'Curcumin rapidly degrades when exposed to UV light and air. We pack immediately into apothecary-grade amber glass jars and sealed recycled metal caddies with zero plastic liner contact.',
    scientificDetail: 'Hermetic nitrogen barrier stops oxidation, ensuring maximum antioxidant potency for 24 months.',
    metricLabel: 'Curcumin Retention',
    metricValue: '7.8% Potency Locked',
    color: '#89977B'
  },
  {
    id: 'home',
    step: '05',
    title: 'Your Home',
    location: 'Your Kitchen & Daily Ritual',
    timeframe: 'Direct Pan-India Dispatch',
    headline: 'Golden Wellness In Its Purest Form',
    description: 'From ceremonial golden lattes and restorative immunity shots to everyday dal tadkas. You receive unadulterated healing roots with batch QR transparency linking to third-party lab tests.',
    scientificDetail: 'Pair with cracked black pepper (piperine) and wood-pressed coconut or groundnut oil to multiply bioavailability by 2000%.',
    metricLabel: 'Batch Test',
    metricValue: 'Lab QR on Box',
    color: '#16352B'
  }
];

export const IngredientJourney3D: React.FC = () => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const stage = STAGES[currentStageIndex];

  // Three.js 3D Turmeric Rhizome Scene
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.clientWidth || 400;
    const height = canvas.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Group for the organic turmeric rhizome
    const rhizomeGroup = new THREE.Group();
    scene.add(rhizomeGroup);

    // Procedural organic material mimicking golden knobby turmeric root
    const rootMaterial = new THREE.MeshStandardMaterial({
      color: 0xD89B28,
      roughness: 0.75,
      metalness: 0.1,
      bumpScale: 0.08
    });

    const innerCoreMaterial = new THREE.MeshStandardMaterial({
      color: 0xE8981D,
      roughness: 0.6,
      metalness: 0.05
    });

    // Create central rhizome body
    const mainBodyGeo = new THREE.CylinderGeometry(0.7, 0.9, 3.2, 24, 16);
    // Deform vertices organically
    const pos = mainBodyGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const vx = pos.getX(i);
      const vy = pos.getY(i);
      const vz = pos.getZ(i);
      const bump = Math.sin(vy * 4) * 0.15 + Math.cos(vx * 6) * 0.08;
      pos.setX(i, vx * (1 + bump));
      pos.setZ(i, vz * (1 + bump));
    }
    mainBodyGeo.computeVertexNormals();
    const mainRhizome = new THREE.Mesh(mainBodyGeo, rootMaterial);
    mainRhizome.rotation.z = 0.2;
    rhizomeGroup.add(mainRhizome);

    // Add 4 knobby finger offshoots characteristic of Curcuma longa root
    const fingers = [
      { x: 0.9, y: 0.6, z: 0.2, rz: -0.6, rx: 0.3, len: 1.4, rad: 0.4 },
      { x: -0.8, y: -0.4, z: -0.3, rz: 0.8, rx: -0.2, len: 1.6, rad: 0.45 },
      { x: 0.4, y: -1.0, z: 0.5, rz: -0.4, rx: 0.8, len: 1.2, rad: 0.38 },
      { x: -0.5, y: 0.9, z: 0.4, rz: 0.5, rx: 0.5, len: 1.3, rad: 0.35 }
    ];

    fingers.forEach((f) => {
      const fingerGeo = new THREE.CapsuleGeometry(f.rad, f.len, 12, 16);
      const fingerMesh = new THREE.Mesh(fingerGeo, innerCoreMaterial);
      fingerMesh.position.set(f.x, f.y, f.z);
      fingerMesh.rotation.z = f.rz;
      fingerMesh.rotation.x = f.rx;
      rhizomeGroup.add(fingerMesh);
    });

    // Curcumin Golden Dust Particle System
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 6;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      particleScales[i] = Math.random();
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xEBC168,
      size: 0.08,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0xFFF8EE, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xFDF1D6, 2.5);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xB95F3B, 1.8);
    rimLight.position.set(-5, -3, -3);
    scene.add(rimLight);

    // Interactive Drag / Orbit rotation
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let rotSpeedX = 0.003;
    let rotSpeedY = 0.003;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      rhizomeGroup.rotation.y += deltaX * 0.01;
      rhizomeGroup.rotation.x += deltaY * 0.01;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    canvas.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Idle natural breathing rotation
      if (!isDragging) {
        rhizomeGroup.rotation.y += rotSpeedY;
        rhizomeGroup.rotation.x = Math.sin(elapsedTime * 0.5) * 0.15;
      }

      // Orbit particles around the rhizome
      particles.rotation.y = elapsedTime * 0.08;
      particles.rotation.x = Math.cos(elapsedTime * 0.05) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      renderer.dispose();
    };
  }, []);

  // Auto-play timeline timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStageIndex((prev) => (prev + 1) % STAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section id="process" className="py-24 bg-[#16352B] text-[#F7F1E5] relative overflow-hidden">
      {/* Background glow and subtle terrain grid */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D89B28]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#B95F3B]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D89B28] mb-2">
            <Compass className="w-3.5 h-3.5 text-[#D89B28]" />
            <span>Interactive Botanical Journey</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF6EE] [text-wrap:balance]">
            From Soil to Sip: The Lakadong Journey
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#FAF6EE]/75 max-w-xl mx-auto">
            Interact with the 3D organic rhizome below to discover how we preserve up to 7.8% active curcumin from Meghalaya to your kitchen.
          </p>
        </div>

        {/* 5-Stage Stepper Buttons (Functional button controls) */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 mb-12 border-b border-[#FAF6EE]/15 scrollbar-none">
          {STAGES.map((s, idx) => {
            const isActive = idx === currentStageIndex;
            return (
              <button
                key={s.id}
                onClick={() => {
                  setCurrentStageIndex(idx);
                  setIsPlaying(false);
                }}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-lg text-left transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#D89B28] text-[#16352B] font-bold shadow-lg scale-102'
                    : 'text-[#FAF6EE]/70 hover:text-[#FAF6EE] hover:bg-white/5'
                }`}
              >
                <span className="font-mono text-xs tabular-nums opacity-80">
                  {s.step}.
                </span>
                <span className="text-xs sm:text-sm font-semibold">
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Centerpiece: 3D Turmeric Root + Detail Stage Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF6EE]/5 rounded-2xl border border-white/10 p-6 sm:p-10 backdrop-blur-md">
          
          {/* Left: 3D WebGL Turmeric Root Canvas */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            
            {/* 3D Canvas Container */}
            <div className="relative w-full aspect-square max-w-[420px] rounded-xl overflow-hidden border border-white/10 bg-radial from-white/5 to-transparent flex items-center justify-center cursor-grab active:cursor-grabbing">
              <canvas
                ref={canvasRef}
                className="w-full h-full block"
              />

              {/* 3D Orbit hint overlay */}
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-[11px] text-[#FAF6EE]/90 px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 pointer-events-none">
                <Sparkles className="w-3.5 h-3.5 text-[#D89B28]" />
                <span>Drag to rotate 3D rhizome</span>
              </div>

              {/* Curcumin Potency Hologram Tag */}
              <div className="absolute top-3 right-3 bg-[#D89B28]/20 border border-[#D89B28]/40 text-[#EBC168] text-[11px] font-mono font-semibold px-2.5 py-1 rounded">
                7.8% CURCUMIN
              </div>
            </div>

            {/* Stepper Controls Bar under 3D Canvas */}
            <div className="mt-4 flex items-center gap-3 w-full max-w-[420px] justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setCurrentStageIndex((prev) => (prev > 0 ? prev - 1 : STAGES.length - 1));
                    setIsPlaying(false);
                  }}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#FAF6EE] transition-colors"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-[#FAF6EE] flex items-center gap-1.5 transition-colors"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-[#D89B28]" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-[#D89B28]" />
                      <span>Play Walkthrough</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => {
                    setCurrentStageIndex((prev) => (prev + 1) % STAGES.length);
                    setIsPlaying(false);
                  }}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#FAF6EE] transition-colors"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <span className="text-xs font-mono text-[#FAF6EE]/60 tabular-nums">
                Stage {currentStageIndex + 1} of 5
              </span>
            </div>

          </div>

          {/* Right: Stage Narrative & Scientific Parameters */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Stage header info */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D89B28] mb-1">
                <span>{stage.location}</span>
                <span aria-hidden="true">·</span>
                <span>{stage.timeframe}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#FAF6EE] leading-tight">
                {stage.headline}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#FAF6EE]/85 leading-relaxed">
              {stage.description}
            </p>

            {/* Botanical & Agronomic Detail Box */}
            <div className="p-4 rounded-xl bg-black/30 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#EBC168] uppercase tracking-wide">
                <Thermometer className="w-4 h-4 text-[#D89B28]" />
                <span>Bio-Preservation Science</span>
              </div>
              <p className="text-xs sm:text-sm text-[#FAF6EE]/80 leading-relaxed">
                {stage.scientificDetail}
              </p>
            </div>

            {/* Key Stage Metric */}
            <div className="pt-2 flex items-center justify-between border-t border-white/10">
              <div>
                <p className="text-xs text-[#FAF6EE]/60">{stage.metricLabel}</p>
                <p className="font-display text-xl font-bold text-[#D89B28]">{stage.metricValue}</p>
              </div>
              
              <div className="flex items-center gap-1.5 text-xs text-[#FAF6EE]/80">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Irradiation</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
