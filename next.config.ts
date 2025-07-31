import type { NextConfig } from 'next';

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://maps.googleapis.com;
  script-src-elem 'self' 'unsafe-inline' https://js.stripe.com https://maps.googleapis.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: https: https://maps.googleapis.com https://maps.gstatic.com;
  font-src 'self' https://fonts.gstatic.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  connect-src 'self' ws: wss: https://api.stripe.com https://maps.googleapis.com https://www.gstatic.com data:;
  worker-src 'self' blob:;
  frame-src 'self' https://js.stripe.com;
  frame-ancestors 'none';
`;

const nextConfig: NextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	output: 'standalone',
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
			},
			{
				protocol: 'https',
				hostname: 'develop.d1crepc7qarqjt.amplifyapp.com',
			},
			{
				protocol: 'https',
				hostname: 's3-us-west-2.amazonaws.com',
			},
			{
				protocol: 'https',
				hostname: process.env.NEXT_PUBLIC_HOST || 'localhost',
			},
			{
				protocol: 'https',
				hostname: 's3.amazonaws.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'profile.static.thegrint.com',
				pathname: '/**',
			},
		],
	},
	headers: async () => [
		{
			source: '/(.*)',
			headers: [
				{
					key: 'Content-Security-Policy',
					value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
				},
				{
					key: 'X-XSS-Protection',
					value: '1; mode=block',
				},
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
					value: 'strict-origin-when-cross-origin',
				},
				{
					key: 'Permissions-Policy',
					value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
				},
				{
					key: 'Strict-Transport-Security',
					value: 'max-age=63072000; includeSubDomains; preload',
				},
			],
		},
	],
};

export default nextConfig;
