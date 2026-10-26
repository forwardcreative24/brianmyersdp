// One address for search engines: anything that isn't www.brianmyersdp.com
// (the bare domain) gets a 301 to the same path there.
const HOME = 'www.brianmyersdp.com';
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = url.hostname;
    if (host !== HOME && !host.endsWith('.workers.dev') && host !== 'localhost' && host !== '127.0.0.1') {
      return Response.redirect(`https://${HOME}${url.pathname}${url.search}`, 301);
    }
    return env.ASSETS.fetch(request);
  },
};
