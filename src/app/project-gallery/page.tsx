import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import FooterColumns from '@/components/blocks/footer-columns';
import GalleryBeforeAfter from '@/components/blocks/gallery-before-after';
import Gallery from '@/components/blocks/gallery';
import CtaBanner from '@/components/blocks/cta-banner';

export const metadata: Metadata = {
  title: 'Project Gallery | Harris Landscaping & Gardens',
  description:
    'Browse completed landscaping projects across Campbelltown, Camden, Narellan, Picton and South-West Sydney.',
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
      <GalleryBeforeAfter
        pairs={[
          '/images/before-after-1-before.jpg|/images/before-after-1-after.jpg|Driveway paving transformation in Campbelltown',
          '/images/before-after-2-before.jpg|/images/before-after-2-after.jpg|Backyard turf and decking makeover in Camden',
          '/images/before-after-3-before.jpg|/images/before-after-3-after.jpg|Retaining wall and garden renovation in Narellan',
          '/images/before-after-4-before.jpg|/images/before-after-4-after.jpg|Full backyard landscaping transformation in Picton',
          '/images/before-after-5-before.jpg|/images/before-after-5-after.jpg|Outdoor entertaining area with decking in Macarthur',
        ]}
        heading="Our Work Speaks for Itself"
        subheading="Browse our before-and-after showcase of completed landscaping projects across Campbelltown, Camden, Narellan, Picton and South-West Sydney. See the Harris difference for yourself."
      />
      <Gallery
        images={[
          '/images/gallery-1.jpg',
          '/images/gallery-2.jpg',
          '/images/gallery-3.jpg',
          '/images/gallery-4.jpg',
          '/images/gallery-5.jpg',
          '/images/gallery-6.jpg',
          '/images/gallery-7.jpg',
          '/images/gallery-8.jpg',
          '/images/gallery-9.jpg',
        ]}
        heading="More Completed Projects"
        subheading="Explore our full portfolio of landscaping, paving, turf, decking, and garden projects across South-West Sydney."
      />
      <CtaBanner
        cta="Start Your Transformation"
        ctaHref="/contact"
        heading="Love What You See?"
        subheading="Let's create your dream outdoor space. Contact Harris Landscaping & Gardens today for a free, no-obligation quote."
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
