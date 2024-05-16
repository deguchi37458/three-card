import './style.css'

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import GUI from 'lil-gui'; 

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Lenis from "lenis"

const lenis = new Lenis()
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// shaderを使用するのであれば下記をコメントアウト
// import vertexShader from "./shader/vertexShader";
// import fragmentShader from "./shader/fragmentShader";

//　Cursor
const cursor = document.createElement('div');
cursor.id = 'cursor';
document.body.appendChild(cursor);

// マウスが動いたときにカーソルを追従させるイベントリスナーを追加
document.addEventListener('mousemove', (event) => {
    cursor.style.left = `${event.pageX}px`;
    cursor.style.top = `${event.pageY}px`;
});

// Debug
const dat = new GUI();

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Canvas
const canvas = document.querySelector("#canvas");

// Scene
const scene = new THREE.Scene();

// Textures
const textureLoader = new THREE.TextureLoader();

// Camera
const fov = 60; // 任意の数値
const fovRad = (fov / 2) * (Math.PI / 180);
let dist = (window.innerHeight / 2) / Math.tan(fovRad);
const camera = new THREE.PerspectiveCamera(
  fov,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
);
camera.position.z = dist;

scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enableZoom = false; // ズームを無効化
controls.enablePan = false; // ドラッグ移動を無効化
controls.enableRotate = false; // 回転を無効化

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Light
const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.0);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
directionalLight.position.set(0, 1, 1).normalize();
scene.add(directionalLight);

// Mesh
let meshes = [];
for ( let i = 1; i <= 7; i ++ ) {
  const geometry = new THREE.BoxGeometry(200, 300, 5);
  const materialArray = [
    new THREE.MeshBasicMaterial({color:"gray"}),
    new THREE.MeshBasicMaterial({color:"gray"}),
    new THREE.MeshBasicMaterial({color:"gray"}),
    new THREE.MeshBasicMaterial({color:"gray"}),
    new THREE.MeshBasicMaterial({map: textureLoader.load(`img0${i}.jpg`)}),
    new THREE.MeshBasicMaterial({map: textureLoader.load(`img0${i}.jpg`)}),
  ];
  const mesh = new THREE.Mesh( geometry, materialArray );
  // 座標をランダムで決定
  mesh.position.x = (-sizes.width / 2 ) + (sizes.width * i / 7);
  mesh.position.y = sizes.height * 0.75;
  mesh.position.z = Math.random() * 500 - 250;
  // サイズをランダムで決定
  mesh.scale.setScalar( Math.random() * 0.2 + 0.7 );
  // 角度をランダムで生成
  mesh.rotation.x = Math.random() * Math.PI;
  mesh.rotation.y = Math.random() * Math.PI;
  mesh.rotation.z = Math.random() * Math.PI;
  meshes.push(mesh);
  scene.add(mesh)
}

// Animate
const mouse = new THREE.Vector2();
canvas.addEventListener('mousemove', handleMouseMove);

// マウスを動かしたときのイベント
function handleMouseMove(event) {
  const element = event.currentTarget;
  // canvas要素上のXY座標
  const x = event.clientX - element.offsetLeft;
  const y = event.clientY - element.offsetTop;
  // canvas要素の幅・高さ
  const w = element.offsetWidth;
  const h = element.offsetHeight;

  // -1〜+1の範囲で現在のマウス座標を登録する
  mouse.x = ( x / w ) * 2 - 1;
  mouse.y = -( y / h ) * 2 + 1;
}

const raycaster = new THREE.Raycaster();
const animate = () => {
  // Update controls
  controls.update();

  // ホバーしたオブジェクトを配列で得る。
  // オブジェクトを回転する
  meshes.forEach(mesh => {
    mesh.rotation.y += 0.01;
    mesh.rotation.x += 0.01;
    mesh.rotation.z += 0.01;
    mesh.position.y += 1.8;

    if(mesh.position.y > sizes.height * 0.8) {
      mesh.position.y  = -( sizes.height + (Math.random() * 1000)) 
      mesh.position.z = Math.random() * 500 - 250;
    }
  });

  raycaster.setFromCamera(mouse, camera);
  // その光線とぶつかったオブジェクトを得る
  const intersects = raycaster.intersectObjects(scene.children);

  if(intersects.length > 0){

    canvas.style.cursor = 'pointer';
    cursor.classList.add('is-on')
  } else {
    canvas.style.cursor = 'initial';
    cursor.classList.remove('is-on')
  }

  // Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(animate);
};

window.addEventListener('load', ()=> {
  meshes.forEach(mesh => {
    gsap.to(mesh.position, {
      y: Math.random() * 500 - 250,
      duration : 1.5
    });
  })
  // setTimeout(() => {
    // }, "1500");
})
animate();

// Resize
window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// const axesHelper = new THREE.AxesHelper( 300 );
// scene.add( axesHelper );

// const lightHelper = new THREE.SpotLightHelper(directionalLight);
// scene.add(lightHelper);
