/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Génère un site statique dans le dossier 'out'
  trailingSlash: true, // Ajoute / à la fin des URLs pour compatibilité Nginx
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Requis pour l'export statique
  },
  basePath: '/greenit',
}

export default nextConfig
