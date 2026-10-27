# brianmyersdp.com

Brian Myers, DP & Director. An [Astro](https://astro.build) site, built and served by the Cloudflare Worker `brianmyersdp` on every push to main. Other branches get a preview link.

- `npm install` then `npm run dev` to work locally. `npm run build` makes `dist/`.
- **Your name, title and how the header shows them** (`wordmark`), the home line, reel loop, clients, contact details and the sort buttons on the work page all live in `src/site.ts`.
- **Each project is one file** in `src/content/projects/`. Copy one to add a project. Fields: client, title, format, role, as many credit lines as you want, the Vimeo ID, the card still, an optional silent loop (plays on hover), stills for the gallery, and `order`. `featured: true` puts it on the home page.
- The gear list is `src/gear.ts`.
- Photos go in `public/images/<project>/`, loops (silent .mp4, 16:9, under ~3MB) in `public/video/`.
- `public/_redirects` keeps the old Squarespace and Netlify addresses working. `worker.js` sends www.brianmyersdp.com to brianmyersdp.com.
