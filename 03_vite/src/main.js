import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import * as dat from 'lil-gui';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

// // const scene = new THREE.Scene();
// // const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
// // const cube = new THREE.Mesh( geometry, material );
// // scene.add( cube );

// // camera.position.z = 5;

// // const canvas = document.querySelector('canvas');
// // const renderer = new THREE.WebGLRenderer({canvas});
// // renderer.setSize( window.innerWidth, window.innerHeight );

// // window.addEventListener('resize', () => {
// //   renderer.setSize( window.innerWidth, window.innerHeight );
// //   camera.aspect = window.innerWidth / window.innerHeight;
// //   camera.updateProjectionMatrix();
// // });

// // const controls = new OrbitControls( camera, renderer.domElement );
// // controls.enableDamping = true;

// // function animate() {
// //   window.requestAnimationFrame(animate);
// //   controls.update();
// // 	renderer.render( scene, camera );
// //   cube.rotation.x += 0.01;
// // cube.rotation.y += 0.01;
// // }
 
// // animate();






// // Geometry


// // import * as THREE from 'three';
// // import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


// // 




// // cylinder


// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// let loader = new THREE.TextureLoader();
// let color = loader.load("./text/color.jpg");
// let roughness = loader.load("./text/roughness.jpg");
// let normal = loader.load("./text/normal.png");
// let height = loader.load("./text/height.png");

// const geometry = new THREE.BoxGeometry(3,1.8,2,100,100);
// const material = new THREE.MeshStandardMaterial({ map: color,roughnessMap: roughness,normalMap: normal,displacementMap: height,displacementScale: 0.1});
// const cube = new THREE.Mesh(geometry, material);




// scene.add(cube);

// window.addEventListener('resize', () => {
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
// });


// // Create GUI
// const gui = new dat.GUI();

// // Lights folder
// // const lightsFolder = gui.addFolder('Lights');

// // // Bright Light controls
// // const brightLightFolder = lightsFolder.addFolder('Bright Light');
// // brightLightFolder.add(brightLight.position, 'x').min(-10).max(10).step(0.1).name('Position X');
// // brightLightFolder.add(brightLight.position, 'y').min(-10).max(10).step(0.1).name('Position Y'); 
// // brightLightFolder.add(brightLight.position, 'z').min(-10).max(10).step(0.1).name('Position Z');
// // brightLightFolder.add(brightLight, 'intensity').min(0).max(5).step(0.1).name('Intensity');
// // brightLightFolder.addColor(brightLight, 'color').name('Color');

// // // Ambient Light controls
// // const ambientLightFolder = lightsFolder.addFolder('Ambient Light');
// // ambientLightFolder.add(ambientLight, 'intensity').min(0).max(5).step(0.1).name('Intensity');
// // ambientLightFolder.addColor(ambientLight, 'color').name('Color');

// // // Directional Light controls
// // const directionalLightFolder = lightsFolder.addFolder('Directional Light');
// // directionalLightFolder.add(directionalLight.position, 'x').min(-10).max(10).step(0.1).name('Position X');
// // directionalLightFolder.add(directionalLight.position, 'y').min(-10).max(10).step(0.1).name('Position Y');
// // directionalLightFolder.add(directionalLight.position, 'z').min(-10).max(10).step(0.1).name('Position Z');
// // directionalLightFolder.add(directionalLight, 'intensity').min(0).max(5).step(0.1).name('Intensity');
// // directionalLightFolder.addColor(directionalLight, 'color').name('Color');


// // Material folder
// const materialFolder = gui.addFolder('Material');
// materialFolder.add(material, 'wireframe');
// materialFolder.add(material.normalScale, 'x').min(-5).max(5).step(0.01).name('Normal Scale X');
// materialFolder.add(material.normalScale, 'y').min(-5).max(5).step(0.01).name('Normal Scale Y');
// materialFolder.add(material, 'displacementScale').min(0).max(1).step(0.01).name('Displacement Scale');
// materialFolder.addColor(material, 'color').name('Color');
// materialFolder.add(material, 'roughness').min(0).max(1).step(0.01);
// materialFolder.add(material, 'metalness').min(0).max(1).step(0.01);

// // Mesh folder
// const meshFolder = gui.addFolder('Mesh');
// meshFolder.add(cube.rotation, 'x').min(0).max(Math.PI * 2).step(0.01).name('Rotation X');
// meshFolder.add(cube.rotation, 'y').min(0).max(Math.PI * 2).step(0.01).name('Rotation Y');
// meshFolder.add(cube.rotation, 'z').min(0).max(Math.PI * 2).step(0.01).name('Rotation Z');
// meshFolder.add(cube.position, 'x').min(-5).max(5).step(0.01).name('Position X');
// meshFolder.add(cube.position, 'y').min(-5).max(5).step(0.01).name('Position Y');
// meshFolder.add(cube.position, 'z').min(-5).max(5).step(0.01).name('Position Z');
// meshFolder.add(cube.scale, 'x').min(0.1).max(5).step(0.01).name('Scale X');
// meshFolder.add(cube.scale, 'y').min(0.1).max(5).step(0.01).name('Scale Y');
// meshFolder.add(cube.scale, 'z').min(0.1).max(5).step(0.01).name('Scale Z');



// camera.position.z = 5;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);



// const brightLight = new THREE.DirectionalLight(0xffffff, 2.5);
// brightLight.position.set(-2, 5, 3);
// scene.add(brightLight);


// const ambientLight = new THREE.AmbientLight(0xffffff, 1);
// scene.add(ambientLight);

// const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// directionalLight.position.set(2, 2, 2);
// scene.add(directionalLight);



// const brightLightHelper = new THREE.DirectionalLightHelper(brightLight, 1);
// scene.add(brightLightHelper);

// const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 1);
// scene.add(directionalLightHelper);

// // Note: AmbientLight doesn't have a helper since it's omnidirectional and doesn't have a specific direction to visualize


// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;


// function animate() {
//   requestAnimationFrame(animate);
  
//   // cube.rotation.x += 0.01;
//   // cube.rotation.y += 0.01;
//   controls.update();
  
//   renderer.render(scene, camera);
// }

// animate();


// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5);

// Renderer setup
const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas:canvas});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
document.body.appendChild(renderer.domElement);

// HDRI Environment
const rgbeLoader = new THREE.RGBELoader();
rgbeLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/qwantani_patio_1k.hdr', function(texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture;
    scene.environment = texture;
});

// Add a mesh to visualize the scene
const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
const material = new THREE.MeshStandardMaterial({ 
    metalness: 0.7,
    roughness: 0.2
});
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    controls.update();
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

animate();
