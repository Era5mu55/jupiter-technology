import LegalPage from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Jupiter Technology collects, uses, and protects your information when you visit www.jupitertechnology.tech or work with us.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lead="How we collect, use, and protect your information when you visit www.jupitertechnology.tech or work with us."
      image="https://images.pexels.com/photos/11391947/pexels-photo-11391947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1600"
      intro={
        <p>
          Jupiter Technology (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;)
          respects your privacy. This policy explains what information we
          collect through www.jupitertechnology.tech, how we use it, and the
          choices you have.
        </p>
      }
      sections={[
        {
          heading: "Information we collect",
          body: (
            <ul>
              <li>
                Contact details you submit through our forms or WhatsApp —
                name, email, phone number, and any project details you
                share.
              </li>
              <li>
                Basic usage data collected automatically (pages visited,
                browser type, general location, referring site) via
                standard analytics tools.
              </li>
              <li>
                Cookies used to remember your preferences and understand how
                visitors use the site. You can disable cookies in your
                browser settings at any time.
              </li>
            </ul>
          ),
        },
        {
          heading: "How we use it",
          body: (
            <ul>
              <li>To respond to inquiries and provide quotes for requested services.</li>
              <li>To improve our website and understand how visitors use it.</li>
              <li>To send project-related updates to clients we&apos;re actively working with.</li>
              <li>We do not sell or rent your personal information to third parties.</li>
            </ul>
          ),
        },
        {
          heading: "How we share it",
          body: (
            <p>
              We only share information with service providers who help us
              operate — email delivery, hosting, and analytics providers —
              and only as needed to provide our services. We do not share
              your information for advertising purposes.
            </p>
          ),
        },
        {
          heading: "How long we keep it",
          body: (
            <p>
              We keep contact and project information for as long as needed
              to respond to your inquiry or deliver a project, and for a
              reasonable period afterward for our own records. You can
              request deletion at any time using the contact details below.
            </p>
          ),
        },
        {
          heading: "Your choices",
          body: (
            <p>
              You can request a copy of the information we hold about you,
              ask us to correct it, or request that we delete it at any time
              by emailing us. We&apos;ll respond within a reasonable
              timeframe.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: <p>Questions about this policy can be sent to info@jupitertechnology.tech.</p>,
        },
      ]}
    />
  );
}
