import path from 'path';
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    base: '/', // relative URLs to avoid mixed content
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(),
        tailwindcss(),
    ],

    publicDir: 'public', // 👈 THIS LINE FIXES IT
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            //'@images': path.resolve(__dirname, 'resources/assets/images'),
        },
    },
    
});
