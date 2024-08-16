/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif']
      },
      backgroundColor: {
        service: 'rgba(255, 255, 255, 0.05)'
      },
      backgroundImage: {
        footer: 'linear-gradient(180deg, #002280 0%, #003ED4 100%)',
        members: "url('/src/assets/images/AboutPage/bg_members.svg')",
        btn: 'linear-gradient(91deg, #E011FF -5.63%, #0C53FF 102.05%)',
        toggle: 'linear-gradient(92deg, #E011FF -5.24%, #0C53FF 105.6%)',
        'register-option':
          'linear-gradient(117deg, rgba(255, 255, 255, 0.00) -3.91%, rgba(255, 255, 255, 0.04) 75.27%)',
        icon: 'linear-gradient(#0C53FF, #E011FF)'
      },
      borderColor: {
        matchTable: 'rgba(5, 5, 24, 0.72)'
      },
      colors: {
        black: '#000000',
        purple: '#E011FF'
      }
    }
  },
  plugins: [],
  mode: 'jit'
}
