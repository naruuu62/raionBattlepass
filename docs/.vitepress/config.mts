import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mobile Engineer Battlepass",
  description: "Live API documentation powered by FastAPI & OpenAPI",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/overview/' },
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/naruuu62/raion-battlepass-2026.git' }
    ]
  }
})
