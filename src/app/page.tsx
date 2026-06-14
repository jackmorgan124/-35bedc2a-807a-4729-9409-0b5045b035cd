import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import FooterColumns from '@/components/blocks/footer-columns';
import HeroSplit from '@/components/blocks/hero-split';
import ServicesGrid from '@/components/blocks/services-grid';
import GalleryBeforeAfter from '@/components/blocks/gallery-before-after';
import ReviewsCarousel from '@/components/blocks/reviews-carousel';

export const metadata: Metadata = {
  title: 'Harris Landscaping & Gardens',
  description:
    'Premium landscaping for South-West Sydney homes. Serving Campbelltown, Camden, Narellan, Picton and beyond.',
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
      <HeroSplit
        cta="Get a Free Quote"
        image="/images/hero.jpg"
        ctaHref="/contact"
        headline="Premium Landscaping for South-West Sydney Homes"
        imageAlt="Premium landscaping transformation by Harris Landscaping & Gardens in South-West Sydney"
        trustBadge="Trusted by 500+ homeowners across South-West Sydney"
        subheadline="From concept to completion, Harris Landscaping & Gardens delivers stunning outdoor transformations built to last. Serving Campbelltown, Camden, Narellan, Picton and beyond."
      />
      <ServicesGrid
        items={[
          'Paving — Durable, beautifully finished paving for driveways, paths and entertaining areas',
          'Turf & Lawn — Natural and artificial turf solutions for lush, low-maintenance lawns',
          'Decking — Custom timber and composite decking designed to complement your home',
          'Retaining Walls — Structural and decorative retaining walls built to stand the test of time',
          'Irrigation Systems — Efficient, automated irrigation to keep your garden thriving year-round',
          'Garden Maintenance — Ongoing care and maintenance to keep your outdoor space at its best',
        ]}
        heading="Everything Your Outdoor Space Needs"
        subheading="We offer a complete range of landscaping and outdoor renovation services tailored to your lifestyle and budget."
      />
      <GalleryBeforeAfter
        pairs={[
          '/images/before-after-1-before.jpg|/images/before-after-1-after.jpg|Driveway paving transformation in Campbelltown',
          '/images/before-after-2-before.jpg|/images/before-after-2-after.jpg|Backyard turf and decking makeover in Camden',
          '/images/before-after-3-before.jpg|/images/before-after-3-after.jpg|Retaining wall and garden renovation in Narellan',
        ]}
        heading="Our Work Speaks for Itself"
        subheading="Browse our before-and-after showcase of completed landscaping projects across South-West Sydney. See the Harris difference for yourself."
      />
      <ReviewsCarousel
        items={[
          'Harris Landscaping transformed our backyard completely — professional, on time, and the results are stunning. Highly recommend! — Sarah M., Campbelltown',
          'Excellent work on our driveway paving. The team was reliable, tidy, and the finish is absolutely beautiful. — James T., Narellan',
          'We had retaining walls and turf installed. The whole process was seamless and the quality is outstanding. — Lisa R., Camden',
          'Five stars without hesitation. Harris Landscaping delivered exactly what we envisioned and more. — Mark D., Picton',
          'Incredible attention to detail. Our garden has never looked better. Will definitely use Harris again. — Karen B., Macarthur',
        ]}
        heading="What Our Clients Are Saying"
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
