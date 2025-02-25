import "../styles/fonts.css";
import "../styles/global.css";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>Ayotomcs | A Portfolio Project</title>

          {/* SEO Meta Tags */}
          <meta name="description" content="A portfolio showcasing Ayotomcs' work and projects." />
          <meta name="robots" content="index, follow" />
          <meta name="generator" content="Next.js" />

          {/* Open Graph Meta Tags (for social media sharing) */}
          <meta property="og:title" content="Ayotomcs | A Portfolio Project" />
          <meta property="og:description" content="A portfolio showcasing Ayotomcs' work and projects." />
          {/* <meta property="og:image" content="/path/to/your-image.jpg" /> */}
          <meta property="og:type" content="website" />
          {/* <meta property="og:url" content="https://yourwebsite.com" /> */}

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="Ayotomcs" />
          <meta name="twitter:title" content="Ayotomcs | A Portfolio Project" />
          <meta name="twitter:description" content="A portfolio showcasing Ayotomcs' work and projects." />
          {/* <meta name="twitter:image" content="/path/to/your-image.jpg" /> */}

          {/* Favicon Links */}
          <link rel="apple-touch-icon" sizes="180x180" href="/images/myicon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/myicon.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/myicon.png" />
          <link rel="manifest" href="/site.webmanifest" />


        </head>
        <body>{children}</body>
      </html>
    );
}
