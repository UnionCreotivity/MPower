<template>
  <div class="wave-image-wrapper" @mouseenter="startWave" @mouseleave="stopWave">
    <img :src="imagePath" alt="" class="static-image" />
    <canvas ref="canvas" class="wave-canvas" v-show="isWaveActive"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount, nextTick } from 'vue'
import * as THREE from 'three'

const props = defineProps<{ imagePath: string }>()

const isWaveActive = ref(false)
const canvas = ref<HTMLCanvasElement | null>(null)

let renderer: THREE.WebGLRenderer
let scene: THREE.Scene
let camera: THREE.OrthographicCamera
let material: THREE.ShaderMaterial
let mesh: THREE.Mesh
let animationId: number
let startTime = 0

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
uniform float uTime;
uniform sampler2D uTexture;
varying vec2 vUv;

void main() {
  float wave = sin(vUv.y * 10.0 + uTime * 1.0) * 0.008; // 幅度小很多
  vec2 uv = vec2(vUv.x + wave, vUv.y);
  vec4 color = texture2D(uTexture, uv);
  gl_FragColor = color;
}
`

const initThree = () => {
  if (!canvas.value) return

  // 初始化渲染器
  renderer = new THREE.WebGLRenderer({ canvas: canvas.value, alpha: true, antialias: true })
  resize()

  // 場景
  scene = new THREE.Scene()

  // 相機 (正交)
  const width = canvas.value.clientWidth
  const height = canvas.value.clientHeight
  camera = new THREE.OrthographicCamera(0, width, height, 0, -1000, 1000)
  camera.position.z = 1

  // 貼圖讀取
  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load(props.imagePath, () => {
    renderer.render(scene, camera) // 初次渲染
  })

  // Shader材質
  material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uTexture: { value: texture },
    },
    vertexShader,
    fragmentShader,
    transparent: true,
  })

  // 幾何體：矩形平面
  const geometry = new THREE.PlaneGeometry(width, height)

  // 建立 Mesh
  mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(width / 2, height / 2, 0)
  scene.add(mesh)
}

const resize = () => {
  if (!canvas.value || !camera || !renderer) return

  const dpr = window.devicePixelRatio || 1
  const width = canvas.value.clientWidth * dpr
  const height = canvas.value.clientHeight * dpr
  renderer.setSize(width, height, false)
  camera.left = 0
  camera.right = canvas.value.clientWidth
  camera.top = 0
  camera.bottom = canvas.value.clientHeight
  camera.updateProjectionMatrix()
}

const animate = (time: number) => {
  animationId = requestAnimationFrame(animate)
  if (!material) return
  if (startTime === 0) startTime = time
  material.uniforms.uTime.value = (time - startTime) / 1000
  renderer.render(scene, camera)
}

const startWave = async () => {
  isWaveActive.value = true
  await nextTick()
  initThree()
  animate(0)
  window.addEventListener('resize', resize)
}

const stopWave = () => {
  isWaveActive.value = false
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resize)
  if (scene && mesh) {
    scene.remove(mesh)
    mesh.geometry.dispose()
    material.dispose()
    renderer.dispose()
  }
  startTime = 0
}

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resize)
  if (scene && mesh) {
    scene.remove(mesh)
    mesh.geometry.dispose()
    material.dispose()
    renderer.dispose()
  }
})
</script>

<style scoped>
.wave-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
}

.static-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wave-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* 不阻擋滑鼠事件 */
  z-index: 10;
}
</style>
