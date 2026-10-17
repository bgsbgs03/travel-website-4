# MM Holidays website

Responsive static website. No build tools or dependencies required.

## View and deploy
Open index.html in a browser, or serve this folder with `python3 -m http.server 8000`. Upload index.html, css/, js/ and assets/ to your web host. The existing CNAME for mmholidays.net is preserved. No changes have been made to the live custom domain.

## Social links and Google feedback
The official Facebook, Instagram and YouTube links are configured in js/config.js and directly in the HTML, so they work without JavaScript. WhatsApp is +91 9618181413.

The Google feedback button uses https://share.google/Lggm1jb3CJWSWkY63, extracted from the earlier GoogleReview_QR_Image.png supplied for MM Holidays. It opens the shared Google destination; visitors may need to choose “Write a review” and sign in. This is not a verified direct review-composer URL. Update googleReview in js/config.js and both HTML links if you later obtain a direct review link.

## Enquiry form
Required fields and consent are validated in the browser. Continue to WhatsApp opens a prefilled message to MM Holidays; the visitor must press Send in WhatsApp. The website does not claim the enquiry is already sent and does not store visitor data or send email. It requires JavaScript. No backend setup is needed.

## Destination photographs
Local images in assets/destinations were downloaded from Unsplash:
Agra: https://unsplash.com/photos/photo-1564507592333-c60657eea523
Jaipur: https://unsplash.com/photos/photo-1599661046289-e31897846e41
Kerala: https://unsplash.com/photos/photo-1602216056096-3b40cc0c9944
Dubai: https://unsplash.com/photos/photo-1512453979798-5ea266f8880c
Paris: https://unsplash.com/photos/photo-1502602898657-3e91760cbb34
Singapore and the business logo are retained from the supplied website. Fonts have system fallbacks. Destination cards are travel inspiration; no price, availability or inclusion is promised.

## Responsive layout
Fluid layout for phones, tablets, laptops and large displays. Navigation collapses below 901px; destinations use three, two or one columns; enquiry fields stack on smaller screens. Inputs use 16px text to avoid mobile focus zoom, interactive controls have touch-friendly sizing, and landscape and safe-area adjustments are included.

The ZIP contains the complete HTML, CSS, JavaScript, images, README and custom-domain CNAME. Extract it and open index.html. No installation or compilation is required.

## Social icon images
Facebook, Instagram, YouTube, Google and WhatsApp buttons use local SVG files in assets/social/. No icon CDN or additional installation is needed. Each icon has an accessible link label and hover/focus tooltip. The Google feedback call to action also includes its icon.
