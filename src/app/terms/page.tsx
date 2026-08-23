import LegalPage from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of jupitertechnology.tech and any project you engage Jupiter Technology to build.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lead="The terms that govern your use of jupitertechnology.tech and any project you engage us to build."
      image="https://images.pexels.com/photos/261621/pexels-photo-261621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1600"
      intro={
        <p>
          These terms govern your use of jupitertechnology.tech. By using
          this site or engaging Jupiter Technology for services, you agree
          to the terms below.
        </p>
      }
      sections={[
        {
          heading: "Services",
          body: (
            <p>
              Jupiter Technology provides software and web development
              services. The specific scope, timeline, and cost of any
              project are defined in a separate written proposal or
              agreement before work begins — these general terms don&apos;t
              set project-specific commitments.
            </p>
          ),
        },
        {
          heading: "Website use",
          body: (
            <ul>
              <li>Content on this site is for general information and may be updated without notice.</li>
              <li>
                You agree not to misuse the site (e.g., attempting
                unauthorized access, scraping, or disrupting normal
                operation).
              </li>
            </ul>
          ),
        },
        {
          heading: "Intellectual property",
          body: (
            <p>
              Site content, branding, and design are the property of
              Jupiter Technology unless otherwise noted. Client project
              deliverables are governed by the terms of the individual
              project agreement, which take precedence over these general
              terms for that engagement.
            </p>
          ),
        },
        {
          heading: "Payments and project terms",
          body: (
            <p>
              Pricing, payment schedules, and project-specific terms are set
              out in each client&apos;s written proposal or agreement. Where
              a project agreement is silent on a matter these general terms
              cover, these terms apply.
            </p>
          ),
        },
        {
          heading: "Limitation of liability",
          body: (
            <p>
              This website and its content are provided &quot;as is.&quot;
              Jupiter Technology is not liable for any indirect or
              consequential damages arising from use of this site, to the
              extent permitted by law.
            </p>
          ),
        },
        {
          heading: "Changes to these terms",
          body: (
            <p>
              We may update these terms from time to time. Continued use of
              the site after changes constitutes acceptance of the updated
              terms.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: <p>Questions about these terms can be sent to info@jupitertechnology.tech.</p>,
        },
      ]}
    />
  );
}
