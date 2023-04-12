/**
 * 一些场景基本配置
 * 1 基础场景搭建
 * 2 HDR 配置
 */

// ======== 基础场景搭建 ========
// 导入库
import * as THREE from 'three';

// ----渲染器挂载
const renderer = new THREE.WebGLRenderer(); // 创建渲染器
renderer.setSize(window.innerWidth, window.innerHeight); //渲染器尺寸
document.body.appendChild(renderer.domElement); // 挂载场景
// ----挂载完成

// ----新建场景
const scene = new THREE.Scene();

// ----新建相机
const camera = new THREE.PerspectiveCamera(
  36, // 焦距
  window.innerWidth / window.innerHeight, // 摄像机视锥体长宽比
  0.001, // 近处可视范围
  1000 // 远处可视范围
);

// ----创建物体
const geo = new THREE.BoxGeometry(1, 2, 1, 3, 5, 3); // 模型 x,y,z
const material = new THREE.MeshBasicMaterial({ color: 'green' }); // 材质

// --创建边框
const edges = new THREE.EdgesGeometry(geo, 0); // 边框模型
// 边框材质
const lineMaterial = new THREE.LineBasicMaterial({
  color: 'orange',
  linewidth: 5,
});
const line = new THREE.LineSegments(edges, lineMaterial); // 每条线段的两个节点
line.position.set(0.2, 0.2, 0.2); // 边框位置偏移
// --边框创建完毕

const cube = new THREE.Mesh(geo, material); // 利用现在的模型和材质创建物体对象
cube.add(line); // 将边框对象添加到物体对象身上
scene.add(cube); // 将物体添加到场景中
// ----物体创建完成

// 渲染场景
renderer.render(scene, camera);

// ----创建轨道控制器
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const controls = new OrbitControls(camera, renderer.domElement); //指定摄像机 / 渲染器
camera.position.z = 5; // 设置相机纵深位置
// ----轨道控制器创建完毕

// ----轨道控制器自动更新
function ani() {
  controls.update(); // 更新控制器
  renderer.render(scene, camera); // 更新渲染器
  requestAnimationFrame(ani); // 动画
}
ani();
// ======== 基础场景搭建 ========

// ======== HDR 配置 ========
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
const rgbeLoader = new RGBELoader();
rgbeLoader.loadAsync('./src/solitude_night_4k.hdr').then(tex => {
  console.log(tex);
  tex.mapping = THREE.EquirectangularReflectionMapping;

  scene.background = tex; // 控制是否显示为背景
  scene.environment = tex; // hdr 灯光是否作用于物体
});
// ======== HDR 配置 ========
