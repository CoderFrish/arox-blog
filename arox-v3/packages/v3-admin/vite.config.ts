import {defineConfig, loadEnv} from "vite";
import vuePlugin from "@vitejs/plugin-vue";
import path from "node:path";
import {createHtmlPlugin} from "vite-plugin-html";
import pagesPlugin from "vite-plugin-pages";

const htmlPlugin = (env: Record<string, string>) => {
    return createHtmlPlugin({
        entry: "/src/main.ts",
        inject: {
            data: {
                title: env.ADMIN_PAGE_TITLE
            }
        }
    })
}

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd())

    return {
        plugins: [vuePlugin(), htmlPlugin(env), pagesPlugin({
            dirs: path.resolve(__dirname, "src/pages")
        })],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            }
        }
    }
})
