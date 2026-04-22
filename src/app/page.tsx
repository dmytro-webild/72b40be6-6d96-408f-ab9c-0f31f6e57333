"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { GraduationCap, Scissors, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="largeSmallSizeLargeTitles"
        background="none"
        cardStyle="subtle-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "pricing",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="International Barbers"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "gradient-bars",
      }}
      title="Exeter’s Top-Rated Barbers – 4.9★ from 160+ Reviews"
      description="Fresh cuts, great prices, and a welcoming atmosphere. Your local favorite barbershop in the heart of Exeter."
      buttons={[
        {
          text: "Call Now",
          href: "tel:+447720846695",
        },
        {
          text: "Book Appointment",
          href: "#",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/master-hairdresser-prepares-face-shaving-barber-shop_613910-4252.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-blond-bearded-male-dressed-black-leather-jacket_613910-11927.jpg",
          alt: "Portrait of client one",
        },
        {
          src: "http://img.b2bpic.net/free-photo/indian-stylish-man-black-traditional-clothes-with-white-scarf-posed-outdoor-sitting-bench_627829-12682.jpg",
          alt: "Portrait of client two",
        },
        {
          src: "http://img.b2bpic.net/free-photo/closeup-confident-young-man-with-blue-eyes_171337-20035.jpg",
          alt: "Portrait of client three",
        },
        {
          src: "http://img.b2bpic.net/free-photo/closeup-shot-fashionable-handsome-male-blue-classic-shirt_181624-29628.jpg",
          alt: "Portrait of client four",
        },
        {
          src: "http://img.b2bpic.net/free-photo/glad-topless-male-with-trendy-hairstyle-bristle-having-strong-body-builduing-posing-against-grey-wall-with-happy-expression-attractive-male-model-with-muscules-isolated-concrete-wall_176532-6405.jpg",
          alt: "Portrait of client five",
        },
      ]}
      avatarText="Join 160+ happy locals"
      marqueeItems={[
        {
          type: "text",
          text: "Precision Fades",
        },
        {
          type: "text",
          text: "Hot Towel Shaves",
        },
        {
          type: "text",
          text: "Student Discounts",
        },
        {
          type: "text",
          text: "Expert Styling",
        },
        {
          type: "text",
          text: "Community Focused",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Precision Cuts",
          description: "Classic and modern styling by our expert team.",
          icon: Scissors,
        },
        {
          title: "Beard Grooming",
          description: "Expert beard shaping and hot towel treatments.",
          icon: Scissors,
        },
        {
          title: "Student Offers",
          description: "Great value haircuts for students in Exeter.",
          icon: GraduationCap,
        },
      ]}
      title="Why International Barbers?"
      description="Exeter’s go-to spot for precision grooming and friendly service."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          handle: "@exeterstudent",
          testimonial: "Top service, great atmosphere, and a perfect haircut.",
          imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-blue-eyed-bearded-hipster-male-grey-background_613910-13829.jpg",
        },
        {
          id: "2",
          name: "Michael Chen",
          handle: "@localpro",
          testimonial: "Great staff and great prices. Highly recommend!",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-hairdresser-washing-man-s-hair_23-2150665396.jpg",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          handle: "@exeterlocal",
          testimonial: "Friendly barbers and amazing quality. My new regular spot.",
          imageSrc: "http://img.b2bpic.net/free-photo/glad-bodybuilder-with-biceps-posing-topless-with-pleasant-smile-being-happy-spend-free-time-gym_176532-9327.jpg",
        },
        {
          id: "4",
          name: "David Kim",
          handle: "@studentlife",
          testimonial: "Best fade I've had in Exeter. Quick and affordable.",
          imageSrc: "http://img.b2bpic.net/free-photo/european-brutal-man-with-beard-cut-barbershop_343596-4697.jpg",
        },
        {
          id: "5",
          name: "James Wilson",
          handle: "@regularcustomer",
          testimonial: "Always a warm welcome. Neco and the team are fantastic.",
          imageSrc: "http://img.b2bpic.net/free-photo/hairdresser-grooming-their-client_23-2149205876.jpg",
        },
      ]}
      title="What Our Customers Say"
      description="Rated 4.9★ with over 162 happy customers."
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Story"
      title="Friendly, Community-Focused Barbers"
      description="At International Barbers, we believe in providing a welcoming atmosphere for everyone in Exeter. Whether you need a fresh look or a simple trim, we're here to help."
      subdescription="Inclusive service provided for all, including children and those who need extra care."
      icon={Users}
      imageSrc="http://img.b2bpic.net/free-photo/barber-equipment-working-surface-by-mirror-barbershop_627829-8282.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "standard",
          badge: "Popular",
          price: "£18",
          subtitle: "Precision Haircut",
          features: [
            "Classic Style",
            "Consultation",
            "Hot Towel Finish",
          ],
        },
        {
          id: "beard",
          badge: "Essential",
          price: "£12",
          subtitle: "Beard Trim",
          features: [
            "Beard Line-up",
            "Moisturizing",
            "Tapering",
          ],
        },
        {
          id: "student",
          badge: "Value",
          price: "£15",
          subtitle: "Student Cut",
          features: [
            "Valid ID Required",
            "Expert Styling",
            "Standard Cut",
          ],
        },
      ]}
      title="Transparent Pricing"
      description="Top-quality cuts, no fuss, just how it should be."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "162+",
          title: "Customer Reviews",
          items: [
            "Verified Ratings",
            "4.9 Average Score",
          ],
        },
        {
          id: "m2",
          value: "5+",
          title: "Professional Barbers",
          items: [
            "Expert Team",
            "Years Experience",
          ],
        },
        {
          id: "m3",
          value: "7days",
          title: "Availability",
          items: [
            "Open Daily",
            "Flexible Booking",
          ],
        },
      ]}
      title="Our Impact in Exeter"
      description="Serving the local community with pride."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do you accept walk-ins?",
          content: "Yes, we always welcome walk-ins! Feel free to stop by.",
        },
        {
          id: "q2",
          title: "Can I book in advance?",
          content: "Yes, you can book online or via phone.",
        },
        {
          id: "q3",
          title: "Is your shop accessible?",
          content: "Yes, we are wheelchair accessible and offer autism-friendly service.",
        },
      ]}
      sideTitle="Common Questions"
      sideDescription="Everything you need to know about International Barbers."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      text="Walk in today or book your next fresh trim."
      buttons={[
        {
          text: "Call Now",
          href: "tel:+447720846695",
        },
        {
          text: "Book Online",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="International Barbers"
      columns={[
        {
          title: "Visit Us",
          items: [
            {
              label: "16 Blackboy Rd, Exeter EX4 6SW",
              href: "#",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "+44 7720 846695",
              href: "tel:+447720846695",
            },
          ],
        },
        {
          title: "Opening Hours",
          items: [
            {
              label: "Mon-Sat: 9am-6pm",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 International Barbers Exeter."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
