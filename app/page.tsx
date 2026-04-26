import Image from "next/image";

const phoneDisplay = "(817) 548-0680";
const phoneHref = "tel:+18175480680";
const address = "1238 W Arkansas Ln, Arlington, TX 76013";
const logoSrc = "/images/mp-auto-logo-white.png";
const mapHref =
  "https://www.google.com/maps/search/?api=1&query=1238%20W%20Arkansas%20Ln%2C%20Arlington%2C%20TX%2076013";

const services = [
  "Computer diagnostics",
  "Brake repair",
  "Oil changes",
  "AC and heating repair",
  "Alternators and starters",
  "Electrical repair",
  "Battery service",
  "Tire and general maintenance",
];

const reputation = [
  {
    metric: "Family-owned",
    detail: "A local Arlington shop neighbors describe as honest and personable.",
  },
  {
    metric: "Fair pricing",
    detail: "Public reviews consistently mention reasonable rates and clear estimates.",
  },
  {
    metric: "Fast turnaround",
    detail: "Many customers note same-day help and quick, dependable repairs.",
  },
];

const reviewLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/MP.Mechanics/",
  },
  {
    label: "Yelp",
    href: "https://www.yelp.com/biz/mp-auto-repair-arlington?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)",
  },
  {
    label: "Nextdoor",
    href: "https://nextdoor.com/pages/mp-auto-repair-arlington-tx/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/explore/locations/103300633/mp-auto-repair/",
  },
];

const hours = [
  ["Monday", "8:30 AM - 5:30 PM"],
  ["Tuesday", "8:30 AM - 5:30 PM"],
  ["Wednesday", "8:30 AM - 5:30 PM"],
  ["Thursday", "8:30 AM - 5:30 PM"],
  ["Friday", "8:30 AM - 5:30 PM"],
  ["Saturday", "Morning hours, call to confirm"],
  ["Sunday", "Closed"],
];

const shopPhotos = [
  {
    src: "/images/mp-auto-facebook-1.jpg",
    alt: "MP Auto Repair shop photo from the business Facebook page",
  },
  {
    src: "/images/mp-auto-facebook-2.jpg",
    alt: "MP Auto Repair team or shop photo from the Facebook page",
  },
  {
    src: "/images/mp-auto-facebook-3.jpg",
    alt: "Vehicle service photo from MP Auto Repair's Facebook page",
  },
  {
    src: "/images/mp-auto-facebook-4.jpg",
    alt: "Automotive work photo from MP Auto Repair's Facebook page",
  },
];

const dadHatPhotos = [
  {
    src: "/images/dad-hat-1.png",
    alt: "MP Auto Repair dad hat side angle",
  },
  {
    src: "/images/dad-hat-2.png",
    alt: "MP Auto Repair dad hat back view",
  },
  {
    src: "/images/dad-hat-3.png",
    alt: "MP Auto Repair dad hat side profile",
  },
  {
    src: "/images/dad-hat-4.png",
    alt: "MP Auto Repair dad hat front angle",
  },
  {
    src: "/images/dad-hat-5.png",
    alt: "MP Auto Repair dad hat angled front view",
  },
  {
    src: "/images/dad-hat-6.png",
    alt: "MP Auto Repair dad hat straight-on front view",
  },
];

const underArmourPoloPhotos = [
  {
    src: "/images/under-armour-polo-1.png",
    alt: "MP Auto Repair Under Armour polo side view",
  },
  {
    src: "/images/under-armour-polo-2.png",
    alt: "MP Auto Repair Under Armour polo opposite side view",
  },
  {
    src: "/images/under-armour-polo-3.png",
    alt: "MP Auto Repair Under Armour polo modeled front view",
  },
  {
    src: "/images/under-armour-polo-4.png",
    alt: "MP Auto Repair Under Armour polo front product view",
  },
  {
    src: "/images/under-armour-polo-5.png",
    alt: "MP Auto Repair Under Armour polo modeled standing view",
  },
  {
    src: "/images/under-armour-polo-6.png",
    alt: "MP Auto Repair Under Armour polo modeled back view",
  },
];

const customVanityPlatePhotos = [
  {
    src: "/images/custom-vanity-plate-1.png",
    alt: "MP Auto Repair custom vanity plate mounted on a blue car",
  },
  {
    src: "/images/custom-vanity-plate-2.png",
    alt: "MP Auto Repair custom vanity plate product photo",
  },
];

const galleryPhotos = [...shopPhotos, ...dadHatPhotos];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "MP Auto Repair",
  telephone: "+18175480680",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1238 W Arkansas Ln",
    addressLocality: "Arlington",
    addressRegion: "TX",
    postalCode: "76013",
    addressCountry: "US",
  },
  areaServed: "Arlington, TX",
  priceRange: "$$",
  sameAs: reviewLinks.map((link) => link.href),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:30",
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <section className="hero">
        <nav className="topbar" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="MP Auto Repair home">
            <Image src={logoSrc} alt="MP Auto Repair" width={500} height={170} priority />
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
            <a href="#visit">Visit</a>
          </div>
          <a className="nav-call" href={phoneHref}>
            Call {phoneDisplay}
          </a>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <div className="hero-logo">
              <Image src={logoSrc} alt="MP Auto Repair" width={500} height={170} priority />
            </div>
            <p className="eyebrow">Family-owned auto repair in Arlington</p>
            <h1>Honest repairs, fair pricing, and mechanics who explain the work.</h1>
            <p className="hero-lede">
              MP Auto Repair is a trusted local shop on W Arkansas Ln serving drivers with diagnostics,
              maintenance, and repairs done with care.
            </p>
            <div className="hero-actions" aria-label="Contact options">
              <a className="button primary" href={phoneHref}>
                Call Now
              </a>
              <a className="button secondary" href={mapHref} target="_blank" rel="noreferrer">
                Get Directions
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Business summary">
            <p className="card-label">Open weekdays</p>
            <strong>8:30 AM - 5:30 PM</strong>
            <span>Saturday morning hours. Call ahead for availability.</span>
            <hr />
            <p>{address}</p>
            <a href={phoneHref}>{phoneDisplay}</a>
          </aside>
        </div>
      </section>

      <section className="section reputation" id="reviews">
        <div className="section-heading">
          <p className="eyebrow">Why neighbors recommend MP Auto</p>
          <h2>Known for trustworthy service without the runaround.</h2>
        </div>
        <div className="reputation-grid">
          {reputation.map((item) => (
            <article className="info-card" key={item.metric}>
              <h3>{item.metric}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="review-strip">
          <p>
            Public listings highlight 100+ Nextdoor faves and hundreds of positive reviews, with
            repeated praise for honesty, affordability, and helpful explanations.
          </p>
          <div className="review-links" aria-label="Review and social links">
            {reviewLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Everyday auto repair and maintenance for Arlington drivers.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <div className="service-item" key={service}>
              <span aria-hidden="true" />
              {service}
            </div>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="about-panel">
          <p className="eyebrow">About the shop</p>
          <h2>A dependable, hole-in-the-wall mechanic neighbors keep coming back to.</h2>
          <p>
            Reviewers describe MP Auto Repair as friendly, affordable, and straightforward. The shop is
            known for explaining repairs clearly so customers understand what needs to be done before
            work begins.
          </p>
        </div>
        <div className="quote-panel">
          <p>
            &quot;Honest, dependable, personable, and very affordable&quot; are the themes that show up
            again and again across local recommendations.
          </p>
        </div>
      </section>

      <section className="section visit" id="visit">
        <div className="visit-card">
          <div>
            <p className="eyebrow">Visit MP Auto Repair</p>
            <h2>Call or stop by the shop on W Arkansas Ln.</h2>
            <p>
              Need help with a repair, inspection, strange noise, warning light, or routine maintenance?
              Call ahead and the team will let you know the best time to come by.
            </p>
            <div className="hero-actions">
              <a className="button primary" href={phoneHref}>
                {phoneDisplay}
              </a>
              <a className="button secondary dark" href={mapHref} target="_blank" rel="noreferrer">
                Directions
              </a>
            </div>
          </div>

          <div className="details-panel">
            <h3>Hours</h3>
            <dl className="hours-list">
              {hours.map(([day, time]) => (
                <div key={day}>
                  <dt>{day}</dt>
                  <dd>{time}</dd>
                </div>
              ))}
            </dl>
            <h3>Address</h3>
            <p>{address}</p>
          </div>
        </div>
      </section>

      <section className="section product-spotlight" aria-labelledby="product-heading">
        <div className="product-copy">
          <p className="eyebrow">Product spotlight</p>
          <h2 id="product-heading">Dad Hat</h2>
          <p>
            A clean black cap with the MP Auto Repair mark embroidered up front. Swipe through the
            gallery to see the fit from every angle.
          </p>
        </div>
        <div className="product-slider" aria-label="Dad Hat image carousel">
          {dadHatPhotos.map((photo) => (
            <div className="product-slide" key={photo.src}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 82vw, 360px"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section product-spotlight" aria-labelledby="polo-heading">
        <div className="product-copy">
          <p className="eyebrow">Product gallery</p>
          <h2 id="polo-heading">Under Armour Polo</h2>
          <p>
            A black performance polo with the MP Auto Repair mark on the chest. Swipe through the
            gallery to see the product and modeled views.
          </p>
        </div>
        <div className="product-slider" aria-label="Under Armour Polo image carousel">
          {underArmourPoloPhotos.map((photo) => (
            <div className="product-slide" key={photo.src}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 82vw, 360px"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section product-spotlight" aria-labelledby="vanity-plate-heading">
        <div className="product-copy">
          <p className="eyebrow">Product gallery</p>
          <h2 id="vanity-plate-heading">Custom Vanity Plate</h2>
          <p>
            A crisp MP Auto Repair vanity plate design for domestic and import builds, shown both
            mounted and as a standalone product.
          </p>
        </div>
        <div className="product-slider" aria-label="Custom Vanity Plate image carousel">
          {customVanityPlatePhotos.map((photo) => (
            <div className="product-slide" key={photo.src}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 82vw, 360px"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section gallery" aria-labelledby="gallery-heading">
        <div className="section-heading">
          <p className="eyebrow">Gallery</p>
          <h2 id="gallery-heading">Shop and merch photos</h2>
        </div>
        <div className="gallery-grid">
          {galleryPhotos.map((photo) => (
            <div className="gallery-card" key={photo.src}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>MP Auto Repair - {address}</p>
        <a href={phoneHref}>{phoneDisplay}</a>
      </footer>
    </main>
  );
}
