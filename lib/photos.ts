/**
 * Joachim Heidel photo paths.
 *
 * Source files in /public/joachim/ are full-resolution WebP encoded
 * at quality 90 (sharp, effort 6). Resolution preserved at the
 * 1086×1448 original — enough for crisp 2× DPR rendering at the
 * 520-px hero display size, with next/image handling AVIF/WebP
 * delivery + responsive srcset.
 */

export const JOACHIM = {
  /** Front-facing, suit + open white shirt — primary hero / about-page header. */
  hero: "/joachim/joachim-hero.webp",
  /** Mid-distance smile, same setting — homepage "Über mich" block. */
  about: "/joachim/joachim-about.webp",
  /** Looking-to-the-side, three-quarter — accent / testimonial slot. */
  looking: "/joachim/joachim-looking.webp",
};

/** Photo intrinsic dimensions — pass to next/image to reserve layout space and avoid CLS. */
export const JOACHIM_W = 1086;
export const JOACHIM_H = 1448;
