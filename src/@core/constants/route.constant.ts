import { lazy } from "react";

export const AboutPage = lazy(() => import("src/pages/About/about.page"));

export const BlogPage = lazy(() => import("src/pages/Blog/blog.page"));

export const ContactPage = lazy(() => import("src/pages/Contact/contact.page"));

export const PortfolioPage = lazy(
  () => import("src/pages/Portfolio/portfolio.page")
);

export const LandingPage = lazy(() => import("src/pages/Landing/landing.page"));
