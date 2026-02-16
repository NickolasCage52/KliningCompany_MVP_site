import { site } from '@/data/site';
import { services } from '@/data/services';

const baseUrl = 'https://bigyborka.ru';

export function LocalBusinessJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    description: site.description,
    telephone: site.phone,
    email: site.email,
    areaServed: site.region,
    openingHours: 'Mo-Su 00:00-23:59',
    url: baseUrl,
    priceRange: '₽₽',
    sameAs: [site.social.whatsapp, site.social.vk, site.social.telegram].filter(Boolean),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Услуги клининга',
      itemListElement: services.slice(0, 10).map((s, i) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
        },
        position: i + 1,
      })),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** Service JSON-LD for service detail pages (SEO РФ). */
export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'LocalBusiness',
      name: site.name,
    },
    areaServed: site.region,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
