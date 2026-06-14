import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import FooterColumns from '@/components/blocks/footer-columns';
import ServicesAlternating from '@/components/blocks/services-alternating';
import TrustBadges from '@/components/blocks/trust-badges';
import CtaBanner from '@/components/blocks/cta-banner';

export const metadata: Metadata = {
  title: 'Services | Harris Landscaping & Gardens',
  description:
    'Paving, turf, decking, retaining walls, irrigation and garden maintenance across South-West Sydney.',
};

export default function Page() {
  return (
    <>
      <Navbar
        cta="Get a Free Quote"
        logo="Harris Landscaping & Gardens"
        links={[
          { href: '/', label: 'Home' },
          { href: '/about', label: 'About' },
          { href: '/services', label: 'Services' },
          { href: '/project-gallery', label: 'Project Gallery' },
          { href: '/service-areas', label: 'Service Areas' },
          { href: '/contact', label: 'Contact' },
        ]}
        ctaHref="/contact"
        logoHref="/"
      />
      <ServicesAlternating
        items={[
          'Paving — From driveways to entertaining areas, our paving solutions are crafted for lasting beauty and durability using premium materials suited to the South-West Sydney climate.',
          'Natural & Artificial Turf — Whether you want the feel of real grass or a low-maintenance artificial lawn, we supply and install turf solutions tailored to your lifestyle and budget.',
          'Decking — Custom-designed timber and composite decking that extends your living space outdoors. We handle everything from design through to final finish.',
          'Retaining Walls — Functional and visually striking, our retaining walls are engineered for stability and designed to enhance the look of your landscape.',
          'Irrigation Systems — Save time and water with a professionally designed and installed irrigation system that keeps your garden healthy with minimal effort.',
          'Garden Maintenance — Keep your outdoor space looking its best year-round with our reliable, scheduled garden maintenance services available across South-West Sydney.',
        ]}
        heading="Our Landscaping Services"
      />
      <TrustBadges
        items={[
          '15+ Years Experience',
          'Fully Insured',
          '500+ Projects Completed',
          '5★ Google Rated',
          'Local South-West Sydney Experts',
          'Free No-Obligation Quotes',
        ]}
      />
      <CtaBanner
        cta="Request a Free Quote"
        ctaHref="/contact"
        heading="Ready to Transform Your Outdoor Space?"
        subheading="Get in touch today for a free, no-obligation quote from South-West Sydney's trusted landscaping specialists."
      />
      <FooterColumns
        logo="Harris Landscaping & Gardens"
        blurb="Harris Landscaping & Gardens delivers premium landscaping, paving, decking, turf, and garden solutions across South-West Sydney. Quality craftsmanship, every time."
        email="info@harrislandscaping.com.au"
        phone="02 XXXX XXXX"
        columns={[
          {
            links: [
              { href: '/services#paving', label: 'Paving' },
              { href: '/services#turf', label: 'Turf & Lawn' },
              { href: '/services#decking', label: 'Decking' },
              { href: '/services#retaining-walls', label: 'Retaining Walls' },
              { href: '/services#irrigation', label: 'Irrigation Systems' },
              { href: '/services#maintenance', label: 'Garden Maintenance' },
            ],
            heading: 'Services',
          },
          {
            links: [
              { href: '/service-areas/campbelltown', label: 'Campbelltown' },
              { href: '/service-areas/camden', label: 'Camden' },
              { href: '/service-areas/narellan', label: 'Narellan' },
              { href: '/service-areas/picton', label: 'Picton' },
              { href: '/service-areas/macarthur', label: 'Macarthur Region' },
              { href: '/service-areas/south-west-sydney', label: 'South-West Sydney' },
            ],
            heading: 'Service Areas',
          },
          {
            links: [
              { href: '/about', label: 'About Us' },
              { href: '/project-gallery', label: 'Project Gallery' },
              { href: '/contact', label: 'Contact' },
              { href: '/contact', label: 'Get a Free Quote' },
            ],
            heading: 'Company',
          },
        ]}
        copyright="© 2026 Harris Landscaping & Gardens. All rights reserved."
      />
    </>
  );
}
