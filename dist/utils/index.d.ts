import { ZRenderType, ZRenderGroup, CallbackType } from '../index';
/**
 * 鼠标键的映射
 */
export declare enum mouseMap {
    left = 0,
    middle = 1,
    right = 2
}
/**
 * 缩放ZRender Group
 * @param  zr  ZRender 实例
 * @param  group  Group 实例
 * @param options  `{scaleMin:number, scaleMax:number}`  scaleMin：缩放最小值 scaleMax：缩放最大值
 * @default options = {scaleMin:0.5,scaleMax:100}
 */
export declare function scaleGroup(zr: ZRenderType, group: ZRenderGroup, options?: Partial<{
    scaleMin: number;
    scaleMax: number;
    callback: CallbackType;
}>): void;
/**
 * 平移ZRender Group
 * @param zr  ZRender 实例
 * @param group  Group 实例
 */
export declare function translateGroup(zr: ZRenderType, group: ZRenderGroup, options?: {
    callback?: CallbackType;
    mouse?: keyof typeof mouseMap;
}): void;
/**
 * 求两点之间的中点坐标
 * @param param0
 * @param param1
 * @returns
 */
export declare const getMiddle: ([x1, y1]: [number, number], [x2, y2]: [number, number]) => [x0: number, y0: number];
/**
 * 复制数组元素几遍
 * @param {array} arr 原数组
 * @param {number} count 复制遍数 默认1
 * @returns
 */
export declare function copyArrayByCount<T>(arr: T[], count?: number): T[];
/**
 * canvas转成图片
 */
export declare const canvasToImage: (zr: ZRenderType) => Promise<{
    blob: Blob;
    base64: string;
}>;
