const isProd = process.env.NODE_ENV === "production";

module.exports = {
  /**
   * Tell Next.js where the `public` folder is.
   * Replace `nextjs-github-pages` with your Github repo project name.
   */
  assetPrefix: isProd ? "/NextJSPortfolio/" : "",
    env: {
      NEXT_PUBLIC_TOKEN : 'Bearer eyJhcGlfa2V5IjoiSXdOZmJZR1JDUVk5TGhBRHl0a3dYbXEzV2RRVHA5MnQ2ZTJQZlpRekRscz0ifQ=='
    }
};