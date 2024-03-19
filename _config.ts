import lume from "lume/mod.ts";
import attributes from "lume/plugins/attributes.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import date from "lume/plugins/date.ts";
import esbuild from "lume/plugins/esbuild.ts";
import feed from "lume/plugins/feed.ts";
import metas from "lume/plugins/metas.ts";
import nav from "lume/plugins/nav.ts";
import nunjucks from "lume/plugins/nunjucks.ts";
import og_images from "lume/plugins/og_images.ts";
import on_demand from "lume/plugins/on_demand.ts";
import pagefind from "lume/plugins/pagefind.ts";
import redirects from "lume/plugins/redirects.ts";
import robots from "lume/plugins/robots.ts";
import sitemap from "lume/plugins/sitemap.ts";
import slugify_urls from "lume/plugins/slugify_urls.ts";
import source_maps from "lume/plugins/source_maps.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import toml from "lume/plugins/toml.ts";
import expires from "lume/middlewares/expires.ts";
import typography from "npm:@tailwindcss/typography";

const site = lume({
  src: "./src",
  server: {
    port: 8000,
    middlewares: [
      expires(),
    ],
  },
  prettyUrls: false,
});

site.use(attributes());
site.use(code_highlight());
site.use(date());
site.use(esbuild());
site.use(feed());
site.use(metas());
site.use(nav());
site.use(nunjucks());
site.use(og_images());
site.use(on_demand());
site.use(pagefind());
site.use(redirects());
site.use(robots());
site.use(sitemap());
site.use(slugify_urls());
site.use(source_maps());
site.use(tailwindcss({
  extensions: [".html", ".jsx", ".mdx", ".vto"],
  options: {
    theme: {
      colors: {
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
    plugins: [typography]
  },
}));
site.use(postcss());
site.use(toml());

export default site;
