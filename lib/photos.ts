/**
 * Joachim Heidel photo paths.
 *
 * Actual files live in /public/joachim/ — three CEO portraits provided
 * by the client, converted from ~1.7MB PNG to ~140KB optimized JPEG.
 * See public/joachim/README.md.
 */

export const JOACHIM = {
  /** Front-facing, suit + open white shirt — primary hero / about-page header. */
  hero: "/joachim/joachim-hero.jpg",
  /** Mid-distance smile, same setting — homepage "Über mich" block. */
  about: "/joachim/joachim-about.jpg",
  /** Looking-to-the-side, three-quarter — testimonial / accent slot. */
  looking: "/joachim/joachim-looking.jpg",
};

// Photo intrinsic dimensions (1200×1500, 4:5 portrait). Used by next/image
// to reserve layout space and avoid CLS.
export const JOACHIM_W = 1200;
export const JOACHIM_H = 1500;
