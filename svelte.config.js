import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      // включите fallback для SPA
      fallback: 'app.html'
    }),
    paths: {
      // Укажите ваш базовый путь, например "/FWD_Adilia_Saifetdiarova"
      base: process.env.NODE_ENV === 'production' ? '/FWD_Adilia_Saifetdiarova' : '',
    }
  }
};

export default config;
