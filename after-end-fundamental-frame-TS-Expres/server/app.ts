import express, { Application } from 'express'; //搭建服务器，****app类型？
import bodyParser from 'body-parser'; //处理 post 请求，解析请求端传递的值
import { readFile } from './utils'; // 自定义的 readFile 方法

// 创建 app 服务器
const app: Application = express();

// 编译请求信息
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 跨域问题处理
app.all('*', (req, res, next) => {
  // 支持跨域请求
  res.header('Access-Control-Allow-Origin', '*');
  // ****支持跨方法请求？
  res.header('Access-Control-Allow', 'PUT,POST,GET,DELETE,OPTIONS');

  next();
});

// 请求方法
app.get('/todolist', (req, res) => {
  // 读取文件数据信息
  const data = readFile('data.json');

  // 返回给请求端
  res.send(data);

  // 访问地址测试：localhost:8080/todolist
});
app.post('/toggle', (req, res) => {});
app.post('/remove', (req, res) => {});
app.post('/add', (req, res) => {});

// 设置监听
app.listen(8080, () => {
  console.log('welcom to port 8080');
});
