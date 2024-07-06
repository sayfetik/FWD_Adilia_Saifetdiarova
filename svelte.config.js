import adapter from '@sveltejs/adapter-static';

const config = {
    kit: {
        adapter: adapter({
            // Включите 'fallback' если используете SPA
            fallback: 'index.html'
        }),
        paths: {
            // Укажите ваш базовый путь, например "/FWD_Adilia_Saifetdiarova"
            base: process.env.NODE_ENV === 'production' ? '/FWD_Adilia_Saifetdiarova' : '',
        }
    }
};

export default config;
