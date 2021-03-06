import { Rect, RectShape } from 'zrender'
import { BaseShape } from '../index'

export type IRectOptions = BaseShape<RectShape>

/**
 *  创建矩形
 * @param options
 * @returns
 */
function createRect(options?: IRectOptions): Rect {
  const {
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    zlevel = 0,
    draggable = false,
    ...rest
  } = options || {}
  const shape = new Rect({
    draggable,
    zlevel,
    shape: {
      x,
      y,
      width,
      height
    },
    style: {
      fill: 'none',
      stroke: '#fff',
      ...rest
    }
  })
  return shape
}

export default createRect
