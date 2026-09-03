import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Naing Min Oo — Portfolio',
    short_name: 'NMO',
    description: 'Portfolio of Naing Min Oo, Senior Product Manager and Technical Delivery Manager.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#6366f1',
  }
}
