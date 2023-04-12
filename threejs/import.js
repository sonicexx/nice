/**
 * 1 各种文件导入: glTF | dae | FBX
 */

// ======== 各种文件导入 ========
// 注意导出时的模型 尺寸单位和比例
import { ColladaLoader } from 'three/addons/loaders/ColladaLoader.js'; //Dae
const daeLoader = new ColladaLoader();

import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'; //FBX
const FBXloader = new FBXLoader();

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'; //glTF
const glTFloader = new GLTFLoader();
// loader.load(文件地址, 回调函数, undefined, 错误回调)
glTFloader.load(
  './src/Figure.gltf',
  gltf => {
    gltf.scene.traverse(child => {
      //   console.log(child);
    });
    gltf.scene.position.set(0, 0, 0);
    scene.add(gltf.scene);
  },
  undefined,
  err => {
    console.log(err);
  }
);

// 灯光
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 0.5);
scene.add(directionalLight);
// ======== 各种文件导入 ========
