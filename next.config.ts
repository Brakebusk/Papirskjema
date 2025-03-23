import type { NextConfig } from 'next';

const commonSecurityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'same-origin',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'clipboard-write=(self)',
  },
];

// Prevent Safari from trying to upgrade HTTP to HTTPS when running on localhost
const upgradeInsecureRequestsPolicy =
  process.env.NODE_ENV === 'production' ? 'upgrade-insecure-requests;' : '';

// NextJS needs unsafe-eval for generating source maps in development
const unsafeEvalPolicy =
  process.env.NODE_ENV === 'production' ? '' : " 'unsafe-eval' 'unsafe-inline'";

// Differences from API: default-src, font-src, prefetch-src, style-src, script-src, frame-src, frame-ancestors, media-src ++
const defaultSecurityHeaders = [
  ...commonSecurityHeaders,
  {
    key: 'Content-Security-Policy',
    value: `\
default-src 'self';\
font-src 'self';\
form-action 'self';\
connect-src 'self';\
img-src * data: blob:;\
object-src 'none';\
media-src 'self';\
child-src 'self';\
frame-src 'self';\
frame-ancestors 'self';\
style-src 'self' 'unsafe-inline';\
script-src 'self'${unsafeEvalPolicy};\
${upgradeInsecureRequestsPolicy}\
report-uri /csp-report`,
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: defaultSecurityHeaders,
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: { removeViewBox: false, removeTitle: false },
                  },
                },
                { name: 'prefixIds' },
                { name: 'removeXMLNS' },
              ],
            },
          },
        },
      ],
    });
    return config;
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
