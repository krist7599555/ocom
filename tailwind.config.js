/** @type {import('tailwindcss').Config} */
export default {
  content: ['src/**/*.{svelte,ts}', 'docs/**/*.{svelte,ts,md}'],
  theme: {
    extend: {
      // https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
      typography: theme => ({
        DEFAULT: {
          css: {
            // https://tailwindcss.com/docs/typography-plugin
            // '--tw-prose-quotes': theme('colors.slate[500]'),
            maxWidth: 'min(65ch, 100% - 2rem)',
            marginLeft: 'auto',
            marginRight: 'auto',
            img: {
              marginLeft: 'auto',
              marginRight: 'auto',
            },
            blockquote: {
              backgroundColor: '#e5e7eb45',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
            },
            'code::before': {
              content: 'none', // don’t generate the pseudo-element
              //                content: '""', // this is an alternative: generate pseudo element using an empty string
            },
            'code::after': {
              content: 'none',
            },
            'code, a > code': {
              // color: 'red',
              backgroundColor: theme('colors.slate[200]'),
              borderRadius: '5px',
              padding: `2px 8px`,
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
