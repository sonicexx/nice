// 读取文件 API
import { readFileSync } from 'fs'; //同步读取数据文件：readFileSync(文件地址, 编码格式)
import { resolve } from 'path'; //地址信息拼接：resolve(当前地址, 文件名)、__dirname--当前文件路径

// 读取文件函数封装
export function readFile(fileName: string): string {
  return readFileSync(resolve(__dirname, fileName), 'utf-8');
}
