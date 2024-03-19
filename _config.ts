import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import date from "lume/plugins/date.ts";
import metas from "lume/plugins/metas.ts";
import nunjucks from "lume/plugins/nunjucks.ts";
import pagefind from "lume/plugins/pagefind.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import redirects from "lume/plugins/redirects.ts";
import robots from "lume/plugins/robots.ts";
import sitemap from "lume/plugins/sitemap.ts";
import slugify_urls from "lume/plugins/slugify_urls.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume();

site.use(code_highlight());
site.use(date());
site.use(metas());
site.use(nunjucks());
site.use(pagefind());
site.use(tailwindcss());
site.use(redirects());
site.use(robots());
site.use(sitemap());
site.use(slugify_urls());
site.use(postcss());

export default site;
