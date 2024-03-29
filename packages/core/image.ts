import { Image as ZRImage, ImageStyleProps } from 'zrender'
import { BaseShape } from '@auto-drawing/types'
import { getCommonParams } from '@auto-drawing/utils'

export type IImageOptions = BaseShape<ImageStyleProps>

/**
 *  创建图片
 * @param options
 * @returns
 */
export function createImage(options?: IImageOptions): ZRImage {
  const { common, other } = getCommonParams(options)
  const { x = 0, y = 0, width = 0, height = 0, image = '', ...rest } = other
  const shape = new ZRImage({
    ...common,
    style: {
      x,
      y,
      width,
      height,
      image,
      ...rest
    }
  })
  return shape
}
