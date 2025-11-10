// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://CristoTreupil.github.io',
    // No necesitas 'base' si tu repositorio es CristoTreupil.github.io
    // Si tu repo es otro, descomenta y ajusta:
    // base: '/nombre-del-repo',
    devToolbar: {
        enabled: false
    },
    image: {
        service: {
            entrypoint: 'astro/assets/services/sharp',
            config: {
                quality: 85,
                format: ['webp', 'avif', 'jpeg'],
                progressive: true,
                mozjpeg: true
            }
        }
    }
});
