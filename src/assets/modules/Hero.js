export const View = () =>
  h1({ class: 'Hero' }, [
    p('Hello World.'),
    p('We are the SystemKollektiv'),
  ])

export const style = vars => ({
  fontWeight: 'bold',
  position: 'relative',
  width: '100%',
  margin: '0 0 2em',

  p: {
    fontSize: '2em',
    lineHeight: 1,

    '&:last-child': {
      fontSize: '1.2em',
    },
  },

  [`@media screen and (min-width: ${vars.widths.laptop})`]: {
    width: 'auto',
    margin: 0,

    p: {
      fontSize: '5vw',

      '&:last-child': {
        fontSize: '2.7vw',
      },
    },
  },
})
