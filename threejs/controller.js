/**
 * 1 坐标轴
 * 2 轨道控制器
 * 3 物体控件: 移动 | 旋转 | 缩放
 * 4 双击全屏
 * 5 响应式布局
 */

// ========坐标轴========
const axesHelper = new THREE.AxesHelper(1);
scene.add(axesHelper);
// ========坐标轴========

// ========轨道控制器========
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const controls = new OrbitControls(camera, renderer.domElement); //指定摄像机 / 渲染器

controls.enableDamping = true; // 开启阻尼
controls.dampingFactor = 0.01; // 设置阻尼值, 越小阻尼感越大, 超过 1 出错

camera.position.set(0, 3, 5); // 设置相机纵深位置
// 轨道控制器创建完毕

// 轨道控制器自动更新
function ani() {
  controls.update(); // 更新控制器
  renderer.render(scene, camera); // 更新渲染器
  requestAnimationFrame(ani); // 动画
}
ani();
// ========轨道控制器========

// ========模型控件========
import { TransformControls } from 'three/addons/controls/TransformControls.js';

function initDragControls() {
  // 创建添加控件
  var transformControls = new TransformControls(camera, renderer.domElement);
  scene.add(transformControls);

  // 控件作用对象
  transformControls.attach(cube);

  // 处理控件操作和轨道控制器的冲突
  transformControls.addEventListener('mouseDown', () => {
    controls.enabled = false;
  });
  transformControls.addEventListener('mouseUp', () => {
    controls.enabled = true;
  });

  // 快捷键切换控件类型: 移动 / 旋转 / 缩放
  window.addEventListener('keydown', e => {
    e = window.event || e;
    if (e.altKey && e.key === 'q') {
      transformControls.mode = 'translate';
      console.log(transformControls.mode);
    }
    if (e.altKey && e.key === 'a') {
      transformControls.mode = 'rotate';
      console.log(transformControls.mode);
    }
    if (e.altKey && e.key === 's') {
      transformControls.mode = 'scale';
      console.log(transformControls.mode);
    }
  });
}
// ========模型控件========

// ========双击全屏========
window.addEventListener('dblclick', () => {
  // 获取当前是否有全屏对象
  const fullScreenEle = document.fullscreenElement;

  // 没有就进全屏, 有就退出全屏
  if (!fullScreenEle) {
    renderer.domElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});
// ========双击全屏========

// ========响应式布局========
window.addEventListener('resize', () => {
  // 更新摄像头
  camera.aspect = window.innerWidth / window.innerHeight;
  // 更新摄像机投影矩阵
  camera.updateProjectionMatrix();

  // 更新渲染器尺寸
  renderer.setSize(window.innerWidth, window.innerHeight);
  // 更新渲染器像素比
  renderer.setPixelRatio(window.devicePixelRatio);
});
// ========响应式布局========

// ========GUI 控制插件========
// npm i dat.gui
// 不错的文档: https://juejin.cn/post/7201521440611532857
import * as dat from 'dat.gui';
const gui = new dat.GUI();
const options = {
  message: 'mydemo',
  number: 0,
};

gui.add(options, 'message');
const ctrl = gui.add(cube.position, 'x', 0, 1, 0.001).name('移动 x 轴');
ctrl.onChange(val => {
  cube.position.x = val;
});
ctrl.onFinishChange(val => {
  console.log('finish', val);
});

// 颜色
gui
  .addColor(cube.material.color, 'r')
  .name('物体颜色r')
  .onChange(val => {
    console.log(val);
    cube.material.color.r = val;
  });
gui
  .addColor(cube.material.color, 'g')
  .name('物体颜色g')
  .onChange(val => {
    console.log(val);
    cube.material.color.g = val;
  });
gui
  .addColor(cube.material.color, 'b')
  .name('物体颜色b')
  .onChange(val => {
    console.log(val);
    cube.material.color.b = val;
  });
// ========GUI 控制插件========
