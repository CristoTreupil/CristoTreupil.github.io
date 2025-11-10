// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://cristotreupil.github.io',
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
