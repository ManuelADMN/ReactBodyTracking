<<<<<<< HEAD
import * as THREE from 'three';

export function setupThreeJS(glCanvas, video) {
  const width = video.videoWidth || 640;
  const height = video.videoHeight || 480;

  const renderer = new THREE.WebGLRenderer({ canvas: glCanvas, alpha: true });
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000, 0);

  const camera = new THREE.OrthographicCamera(
    -width / 2,
    width / 2,
    height / 2,
    -height / 2,
    0.1,
    1000
  );
  camera.position.z = 10;

  const scene = new THREE.Scene();

  return { renderer, camera, scene };
=======
import * as THREE from 'three';

export function setupThreeJS(glCanvas, video) {
  const width = video.videoWidth || 640;
  const height = video.videoHeight || 480;

  const renderer = new THREE.WebGLRenderer({ canvas: glCanvas, alpha: true });
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000, 0);

  const camera = new THREE.OrthographicCamera(
    -width / 2,
    width / 2,
    height / 2,
    -height / 2,
    0.1,
    1000
  );
  camera.position.z = 10;

  const scene = new THREE.Scene();

  return { renderer, camera, scene };
>>>>>>> 5c680b5e07d49dbd861379bf154fcd410a4aa991
}