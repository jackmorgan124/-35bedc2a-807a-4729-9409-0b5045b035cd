import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import FooterColumns from '@/components/blocks/footer-columns';
import ServiceAreaGrid from '@/components/blocks/service-area-grid';
import ImageTextSplit from '@/components/blocks/image-text-split';
import CtaSplit from '@/components/blocks/cta-split';

export const metadata: Metadata = {
  title: 'Service Areas | Harris Landscaping & Gardens',
  description:
    'Landscaping services across Campbelltown, Camden, Narellan, Picton, Macarthur and South-West Sydney.',
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
      <ServiceAreaGrid
        areas={[
          { href: '/service-areas/campbelltown', name: 'Campbelltown' },
          { href: '/service-areas/camden', name: 'Camden' },
          { href: '/service-areas/narellan', name: 'Narellan' },
          { href: '/service-areas/picton', name: 'Picton' },
          { href: '/service-areas/macarthur', name: 'Macarthur Region' },
          { href: '/service-areas/south-west-sydney', name: 'South-West Sydney' },
        ]}
        heading="Landscaping Services Across South-West Sydney"
        subheading="Harris Landscaping & Gardens proudly services homeowners, new home builders, and property owners across the South-West Sydney region. Find your area below."
      />
      <ImageTextSplit
        cta="Check Your Area & Get a Quote"
        body="We understand the unique conditions of South-West Sydney — from the soils and slopes to local council requirements. Our team brings local knowledge and premium craftsmanship to every project, no matter the size or suburb. If you're not sure whether we cover your area, get in touch and we'll be happy to help."
        image="/images/service-areas.jpg"
        ctaHref="/contact"
        heading="Your Local Landscaping Experts"
        imageAlt="Harris Landscaping team servicing a South-West Sydney property"
        imagePosition="right"
      />
      <CtaSplit
        cta="Check Your Area & Get a Quote"
        image="/images/cta-service-areas.jpg"
        ctaHref="/contact"
        heading="Not Sure If We Cover Your Suburb?"
        imageAlt="Beautifully landscaped South-West Sydney backyard by Harris Landscaping & Gardens"
        subheading="Get in touch and our team will confirm your area and provide a free, no-obligation quote for your landscaping project."
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
