import {http, HttpResponse} from 'msw';

export const handlers = [
  http.get('https://api.github.com/repos/mswjs/msw', () => {
    return HttpResponse.json({
      name: 'msw from MSW',
    });
  }),
];
