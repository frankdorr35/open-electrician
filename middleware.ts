import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authHeader = request.headers.get('authorization');

  // Using globalThis to avoid 'process' not found lint error in some environments
  const BASIC_AUTH_USER = (globalThis as any).process?.env?.BASIC_AUTH_USER || 'admin';
  const BASIC_AUTH_PASSWORD = (globalThis as any).process?.env?.BASIC_AUTH_PASSWORD || 'admin';

  if (!authHeader) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  try {
    const auth = authHeader.split(' ')[1];
    const decoded = atob(auth);
    const [user, pwd] = decoded.split(':');

    if (user === BASIC_AUTH_USER && pwd === BASIC_AUTH_PASSWORD) {
      return NextResponse.next();
    }
  } catch (e) {
    // Decoding error
  }

  return new NextResponse('Invalid credentials', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
