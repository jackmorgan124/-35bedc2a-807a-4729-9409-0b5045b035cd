import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import FooterColumns from '@/components/blocks/footer-columns';
import AboutSplit from '@/components/blocks/about-split';
import AboutValues from '@/components/blocks/about-values';
import StatsCounter from '@/components/blocks/stats-counter';

export const metadata: Metadata = {
  title: 'About | Harris Landscaping & Gardens',
  description:
    "South-West Sydney's trusted landscaping specialists with over 15 years of experience.",
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
      <AboutSplit
        body="With over 15 years of hands-on experience, Harris Landscaping & Gardens has built a reputation for quality craftsmanship, honest communication, and results that exceed expectations. Our fully insured, detail-focused team works closely with homeowners and builders across Campbelltown, Camden, Narellan, Picton and the wider South-West Sydney region to bring outdoor visions to life. Every project, large or small, is completed with the same level of care and precision."
        image="/images/about-team.jpg"
        stats={[
          '15+ Years Experience',
          '500+ Projects Completed',
          '100% Fully Insured',
          '5★ Google Rating',
        ]}
        heading="South-West Sydney's Trusted Landscaping Specialists"
        imageAlt="Harris Landscaping & Gardens team working on a South-West Sydney property"
      />
      <AboutValues
        items={[
          "Local Expertise — We know South-West Sydney's soil, climate, and council requirements inside out — so your project is done right the first time.",
          'Quality You Can See — We use only premium materials and proven techniques, ensuring every finish is clean, durable, and built to last.',
          'Reliable & Professional — We show up on time, communicate clearly, and see every project through to completion — no shortcuts, no surprises.',
        ]}
        heading="Why Homeowners Choose Harris"
        subheading="We combine local knowledge, premium materials, and genuine craftsmanship to deliver outdoor spaces you'll love for years to come."
      />
      <StatsCounter
        items={[
          { label: 'Years Experience', value: '15', suffix: '+' },
          { label: 'Projects Completed', value: '500', suffix: '+' },
          { label: 'Fully Insured', value: '100', suffix: '%' },
          { label: 'Star Google Rating', value: '5', suffix: '★' },
        ]}
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
