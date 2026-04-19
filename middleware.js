import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host');

  // If the request is coming from the 'doe' subdomain
  if (hostname && (hostname === 'doe.medaffection.com' || hostname.startsWith('doe-'))) {
    // If the path is the root, rewrite to /doe (the bundled doe.html)
    if (url.pathname === '/') {
      return NextResponse.rewrite(new URL('/doe', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
