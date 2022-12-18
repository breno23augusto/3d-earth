import './style.css'
import { Scene, PerspectiveCamera, WebGL1Renderer, AmbientLight } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Sphere } from './Sphere';
import { StarsGenerator } from './StarsGenerator';

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / innerHeight, 0.1, 1000);
const renderer = new WebGL1Renderer({ canvas: document.getElementById('canvas') });
const ambientLight = new AmbientLight(0xffffff, 1)
const controls = new OrbitControls(camera, renderer.domElement);
const earth = new Sphere(10, 'earth.jpg');
const earthNucleo = new Sphere(1);
const moon = new Sphere(2.7, 'moon.jpg');
const stars = new StarsGenerator(200, earth.mesh.position);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, innerHeight);

camera.position.setZ(30);

moon.mesh.position.setX(15);
moon.mesh.position.setY(5);

earthNucleo.mesh.add(moon.mesh);

scene.add(
  ambientLight,
  earthNucleo.mesh,
  earth.mesh,
  ...stars.stars
);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);

  earthNucleo.mesh.rotateY(0.005);
  moon.mesh.rotateX(0.005);
}

animate();


