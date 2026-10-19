import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({plugins:[react(),VitePWA({registerType:'prompt',includeAssets:['icons/icon-192.png','icons/icon-512.png'],manifest:{name:'Aplica+ Manaus',short_name:'Aplica+',description:'Acompanhamento integrado de saúde',theme_color:'#627f76',background_color:'#f7f7f4',display:'standalone',start_url:'/',scope:'/',lang:'pt-BR',icons:[{src:'/icons/icon-192.png',sizes:'192x192',type:'image/png',purpose:'any maskable'},{src:'/icons/icon-512.png',sizes:'512x512',type:'image/png',purpose:'any maskable'}]},workbox:{navigateFallback:'/index.html',globIgnores:['**/*.{map}'],runtimeCaching:[],cleanupOutdatedCaches:true}})]});
