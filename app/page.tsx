import React from "react";

import { Navigation } from "@/components/auth/Navigation";
import HeroSection from "@/components/landing/hero-section";
import ServicesSection from "@/components/landing/services-section";
import WhyIkookSection from "@/components/landing/why-ikook-section";
import TestimonialsSection from "@/components/landing/testimonials-section";
import BlogSection from "@/components/landing/blog-section";
import ExperienceSection from "@/components/landing/experience-section";
import TopMenuSection from "@/components/landing/top-menu-section";
import { TrustedOrganizationsSection } from "@/components/landing/trusted-organizations-section";
import { Footer } from "@/components/footer/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <HeroSection />

      <ExperienceSection />

      <ServicesSection />

      <TopMenuSection />

      <WhyIkookSection />

      <TestimonialsSection />

      <BlogSection />

      <TrustedOrganizationsSection />

      <Footer />
    </div>
  );
};

export default Index;
