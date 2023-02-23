import express, { Application } from 'express'; //搭建服务器，****app类型？
import bodyParser from 'body-parser'; //处理 post 请求，解析请求端传递的值
import { fileOperator } from './utils'; // 自定义的 操作文件 的方法
import { ITodo } from './typings';

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
  // const data = readFile('data.json');
  const data = fileOperator('data.json');

  // 返回给请求端
  res.send(data);

  // 访问地址测试：localhost:8080/todolist
});

// 修改complete
app.post('/toggle', (req, res) => {
  const id: number = +req.body.id;

  fileOperator('data.json', function (data: ITodo[]) {
    return data.map((item: ITodo) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
  });

  res.send({
    msg: 'toggle done',
    status: 200,
  });
});

// 删除
app.post('/remove', (req, res) => {
  const id: number = +req.body.id; //接受请求端传来的 id 数据

  fileOperator('data.json', function (data: ITodo[]) {
    // 函数操作：删除指定 id 的数据 》过滤出不等于 id 的数据
    return data.filter((item: ITodo) => item.id !== id);
  });

  res.send({
    msg: 'remove done',
    status: 200,
  });
});

// 增加
app.post('/add', (req, res) => {
  // 保存请求端传回的值
  const myData: ITodo = JSON.parse(req.body.data);

  // 已发送值标记
  let i = 0;

  fileOperator('data.json', function (data: ITodo[]) {
    const _data: ITodo | undefined = data.find(
      (item: ITodo) => item.content === myData.content
    );

    if (_data) {
      res.send({
        msg: 'add false',
        status: 404,
      });

      i = 1;
      return;
    }

    data.push(myData);
    return data;
  });

  // 如果已发送错误信息，返回
  if (i) return;

  // 如果成功添加了内容，发送
  res.send({
    msg: 'add done',
    status: 200,
  });
});

// 设置监听
app.listen(8080, () => {
  console.log('welcom to port 8080');
});
