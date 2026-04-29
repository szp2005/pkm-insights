export function GET() {
  return new Response(`User-agent: *
Allow: /

Sitemap: https://pkm-insights.pages.dev/sitemap.xml
`);
}
