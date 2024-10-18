import { serve } from '@hono/node-server';
import externalLink from './api/actions/route';
import { cors } from 'hono/cors';
import { Hono } from 'hono';

const app = new Hono();
app.use(
  cors({
    origin: '*',
    allowHeaders: ['Content-Type', 'Authorization', 'Accept-Encoding'],
    allowMethods: ['GET', 'POST', 'PUT', 'OPTIONS'],
  }),
);

// <--Actions-->
app.route('/api/actions/memo', externalLink);
// </--Actions-->

const port = 3000;
console.log(
  `Server is running on port ${port}
Visit https://dial.to to unfurl action into a Blink
`,
);

serve({
  fetch: app.fetch,
  port,
});