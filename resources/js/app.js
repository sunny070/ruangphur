import '../css/app.css';
import './bootstrap';
import { Dialog, Loading, Notify, LocalStorage } from "quasar";
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { createPinia } from 'pinia';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { Quasar } from "quasar";
import "@quasar/extras/roboto-font/roboto-font.css"
import "@quasar/extras/material-icons/material-icons.css"
import "quasar/src/css/index.sass"

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) });
        const pinia = createPinia(); // Create Pinia instance

        return app
            .use(plugin)
            .use(Quasar, {
                plugins: { Notify, Dialog, Loading, LocalStorage },
            })
            .use(ZiggyVue)
            .use(pinia) // Register Pinia globally
            .mount(el);
    },
    progress: {
        color: '#00AEFF',
    },
});
