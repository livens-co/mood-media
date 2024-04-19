/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/qn8g0u6e/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/sead",
        destination: "/kreatori/sead-hrustanovic",
      },
      {
        source: "/marco",
        destination: "/kreatori/marco-cuccurin",
      },
      {
        source: "/mirsad",
        destination: "/kreatori/mirsad-kadic",
      },
      {
        source: "/nika",
        destination: "/kreatori/nika-pavicic",
      },
      {
        source: "/rafaela",
        destination: "/kreatori/rafaela-seba",
      },
      {
        source: "/andrea",
        destination: "/kreatori/andrea-pacadi",
      },
      {
        source: "/pave",
        destination: "/kreatori/pave-elez",
      },
      {
        source: "/monika",
        destination: "/kreatori/monika-zilavi",
      },
      {
        source: "/josip-p",
        destination: "/kreatori/josip-prepelic",
      },
      {
        source: "/mia",
        destination: "/kreatori/mia-negovetic",
      },
      {
        source: "/josip",
        destination: "/kreatori/josip-bacic",
      },
      {
        source: "/mateo",
        destination: "/kreatori/mateo-elez",
      },
      {
        source: "/tibor",
        destination: "/kreatori/tibor-cubrilo",
      },
      {
        source: "/vedran",
        destination: "/kreatori/vedran-kantar",
      },
      {
        source: "/zoe",
        destination: "/kreatori/zoe-bakalov",
      },
      {
        source: "/magdalena",
        destination: "/kreatori/magdalena-folnozic",
      },
      {
        source: "/tara",
        destination: "/kreatori/tara-thaller",
      },
    ];
  },
};

module.exports = nextConfig;
