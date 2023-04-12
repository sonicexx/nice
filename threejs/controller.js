// ========坐标轴控制器========
const axesHelper = new THREE.AxesHelper(1);
scene.add(axesHelper);
// ========坐标轴控制器========

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
