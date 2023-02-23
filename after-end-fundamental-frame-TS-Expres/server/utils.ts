// 读取文件 API
import { readFileSync, writeFileSync } from 'fs'; //同步操作数据文件：readFileSync(文件地址, 编码格式)、writeFileSync(文件地址, 写入内容: string)
import { resolve } from 'path'; //地址信息拼接：resolve(当前地址, 文件名)、__dirname--当前文件路径
import { ITodo } from './typings';

// 读取文件方法封装
export function readFile(fileName: string): string {
  return readFileSync(resolve(__dirname, fileName), 'utf-8');
}

// 写入文件方法封装
export function writeFile<T>(fileName: string, data: T): void {
  return writeFileSync(resolve(__dirname, fileName), JSON.stringify(data));
}

// 文件处理函数：取文件数据 》修改数据 》写入数据
export function fileOperator(fileName: string, fn?: Function): string | void {
  // 取文件数据
  let data = JSON.parse(readFile(fileName));

  // 修改数据：通过传回来的函数参数
  if (!fn) return data; // 如果没有函数参数，就直接返回数据

  data = fn(data);

  // 写入数据
  writeFile<ITodo>(fileName, data);
}
