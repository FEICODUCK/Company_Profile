const UNSPLASH = "https://images.unsplash.com";

const photos = {
  "about-img.jpg": `${UNSPLASH}/photo-1620912189868-30778f884588?auto=format&fit=crop&q=80&w=1000`,
  "contact-img.jpg": `${UNSPLASH}/photo-1573621045568-c255407a9264?auto=format&fit=crop&q=80&w=1000`,
  "about-gallery-img-1.jpg": `${UNSPLASH}/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=1400`,
  "about-gallery-img-2.jpg": `${UNSPLASH}/photo-1498075702571-ecb018f3752d?auto=format&fit=crop&q=80&w=900`,
  "about-gallery-img-3.jpg": `${UNSPLASH}/photo-1613759612065-d5971d32ca49?auto=format&fit=crop&q=80&w=900`,
  "about-gallery-img-4.jpg": `${UNSPLASH}/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1400`,
  "team-img-1.jpg": `${UNSPLASH}/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800`,
  "team-img-2.jpg": `${UNSPLASH}/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800`,
  "team-img-3.jpg": `${UNSPLASH}/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800`,
  "team-img-4.jpg": `${UNSPLASH}/photo-1629425733761-caae3b5f2e50?auto=format&fit=crop&q=80&w=800`,
  "team-img-5.jpg": `${UNSPLASH}/photo-1642257859842-c95f9fa8121d?auto=format&fit=crop&q=80&w=800`,
  "team-img-6.jpg": `${UNSPLASH}/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800`,
  "team-img-7.jpg": `${UNSPLASH}/photo-1573496358961-3c82861ab8f4?auto=format&fit=crop&q=80&w=800`,
  "team-img-8.jpg": `${UNSPLASH}/photo-1652471943570-f3590a4e52ed?auto=format&fit=crop&q=80&w=800`,
};

export const img = (name) => photos[name] ?? `/images/${name}`;
