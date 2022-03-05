module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
          mammoth:'2rem'
      },
      colors:{
          primary:'#ff6363',
          secondary:{
            100: '#E2E2ED',
            200:'#888883'
          }
      },
      fontFamily:{
        body:['Nunito']
      }
    },
  },
  plugins: [],
}
