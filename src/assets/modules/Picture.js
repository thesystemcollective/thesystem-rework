export const View = (props = {}) => {
  CHECK_PROPS(props, propTypes, 'Picture')

  const { name, extension = 'jpg', sources = ['webp'], class: cl, ...args } = props

  if (!args.alt) {
    args.role = 'presentation'
    args.alt = ''
  }

  const p = {
    class: 'Picture'
  }

  if (cl) {
    if (!props.class.includes('Picture')) {
      p.class += ` ${cl}`
    } else {
      p.class = cl
    }
  }

  return picture(p, [
    ...sources.map(ext =>
      source({
        type: `image/${ext}`,
        srcset: lib.replaceSlashSlash(`${name}.${ext}`),
      }),
    ),

    img({
      ...args,
      loading: 'lazy',
      src: lib.replaceSlashSlash(`${name}.${extension}`),
    }),
  ])
}

export const propTypes = {
  Picture: [
    { key: 'name', type: 'string', required: true },
    { key: 'ext', type: 'string' },
    { key: 'class', type: 'string' },
    { key: 'width', type: ['number', 'string'] },
    { key: 'height', type: ['number', 'string'] },
    { key: 'alt', type: 'string' },
    { key: 'sources', type: 'array' },
  ],
}
