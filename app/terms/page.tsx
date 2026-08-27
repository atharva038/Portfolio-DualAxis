import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, ArrowLeft, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions — Dual Axis',
  description:
    'Terms and Conditions for Dual-Axis software development, website development, application development, and related services.',
  alternates: {
    canonical: '/terms',
  },
};

const sections = [
  {
    id: 'project-agreement',
    title: '1. Project Agreement',
    paragraphs: [
      'All projects will be carried out according to the requirements, features, deliverables, timeline, and pricing mutually agreed upon between Dual-Axis and the client.',
      'Any requirements not included in the agreed project scope may be treated as additional work.',
    ],
  },
  {
    id: 'payment-terms',
    title: '2. Payment Terms',
    paragraphs: ['Our standard payment structure is:'],
    highlight: '50% Advance + 50% Before Final Delivery',
    list: [
      '50% advance payment is required before project development begins.',
      'The remaining 50% payment must be cleared before final delivery, deployment, source-code handover, or transfer of project access, as applicable.',
      'Development will generally begin only after the advance payment has been received.',
      'Dual-Axis may withhold final delivery or project access until all outstanding payments are cleared.',
    ],
  },
  {
    id: 'additional-requirements',
    title: '3. Additional Requirements',
    paragraphs: [
      'Any feature, modification, integration, redesign, or functionality requested outside the originally agreed scope may incur additional charges.',
      'Additional work will be undertaken after the client approves the applicable additional cost.',
      'Changes to requirements during development may also affect the estimated delivery timeline.',
    ],
  },
  {
    id: 'project-timeline',
    title: '4. Project Timeline',
    paragraphs: [
      'Dual-Axis will make reasonable efforts to complete the project within the agreed timeline.',
      'The timeline may be extended due to:',
    ],
    list: [
      'Delayed payments',
      'Delayed client feedback or approvals',
      'Delayed submission of required content or information',
      'Changes in project requirements',
      'Additional features',
      'Third-party service issues',
      'Hosting, server, domain, or API-related issues',
      'Other circumstances outside the reasonable control of Dual-Axis',
    ],
  },
  {
    id: 'client-responsibilities',
    title: '5. Client Responsibilities',
    paragraphs: [
      'The client must provide required content, information, credentials, access, approvals, and feedback within a reasonable time.',
      'Dual-Axis will not be responsible for delays caused by the client\'s failure to provide the required information or approvals.',
    ],
  },
  {
    id: 'revisions',
    title: '6. Revisions',
    paragraphs: [
      'Revisions related to the originally agreed requirements may be provided according to the project agreement.',
      'Requests that change the original scope, design direction, functionality, or technical requirements may be considered additional work and may incur additional charges.',
    ],
  },
  {
    id: 'testing-approval',
    title: '7. Testing and Approval',
    paragraphs: [
      'The client is responsible for reviewing the completed project and providing feedback during the agreed review period.',
      'Once the project has been approved or accepted by the client, subsequent changes or new requirements may be treated as additional work.',
    ],
  },
  {
    id: 'cancellation',
    title: '8. Cancellation',
    paragraphs: [
      'If a client cancels a project after development has started, the advance payment is generally non-refundable, as it covers project planning, resource allocation, design, development, and work already performed.',
      'If additional work has been completed beyond the amount covered by the advance payment, the client may be required to pay for the completed work.',
    ],
  },
  {
    id: 'final-delivery',
    title: '9. Final Delivery',
    paragraphs: [
      'Final project files, source code, credentials, deployment access, or other agreed deliverables will be provided after the full project payment has been received.',
      'Dual-Axis reserves the right to temporarily withhold final deliverables where any outstanding payment remains unpaid.',
    ],
  },
  {
    id: 'intellectual-property',
    title: '10. Intellectual Property',
    paragraphs: [
      'After full payment has been received, the client will receive the agreed rights to the custom project deliverables as specified in the project agreement.',
      'Dual-Axis retains ownership of its pre-existing code, frameworks, libraries, reusable components, development tools, templates, and internal methodologies unless otherwise agreed in writing.',
      'Third-party software, libraries, APIs, fonts, plugins, and other licensed materials remain subject to their respective licenses.',
    ],
  },
  {
    id: 'third-party-services',
    title: '11. Third-Party Services',
    paragraphs: [
      'Projects may depend on third-party services, APIs, hosting providers, payment gateways, plugins, software, or other external services.',
      'Dual-Axis is not responsible for changes in pricing, availability, limitations, suspension, downtime, or failure of third-party services.',
      'Any third-party subscription, license, hosting, domain, API, or other recurring charges are the client\'s responsibility unless explicitly included in the project quotation.',
    ],
  },
  {
    id: 'maintenance-support',
    title: '12. Maintenance and Support',
    paragraphs: [
      'Unless specifically included in the project agreement, ongoing maintenance, updates, modifications, server management, and technical support after project delivery are not included in the development cost.',
      'Such services may be provided separately based on the applicable support or maintenance charges.',
    ],
  },
  {
    id: 'security-data',
    title: '13. Security and Data',
    paragraphs: [
      'Dual-Axis will take reasonable measures to develop and maintain secure software.',
      'However, no software, server, network, or online service can be guaranteed to be completely secure.',
      'The client is responsible for maintaining the security of credentials, accounts, hosting access, and other information under their control.',
    ],
  },
  {
    id: 'limitation-liability',
    title: '14. Limitation of Liability',
    paragraphs: [
      'Dual-Axis will make reasonable efforts to provide reliable services but will not be responsible for indirect or consequential losses resulting from circumstances outside its reasonable control, including third-party service failures, hosting failures, cyberattacks, infrastructure failures, or unauthorized modifications.',
      'Where liability is legally applicable, Dual-Axis\'s liability shall generally be limited to the amount paid by the client for the specific service giving rise to the claim.',
    ],
  },
  {
    id: 'force-majeure',
    title: '15. Force Majeure',
    paragraphs: [
      'Dual-Axis shall not be held responsible for delays or failure to perform caused by circumstances beyond its reasonable control, including natural disasters, government actions, infrastructure failures, major service outages, cyber incidents, or other unforeseen circumstances.',
    ],
  },
  {
    id: 'changes-terms',
    title: '16. Changes to Terms',
    paragraphs: [
      'Dual-Axis reserves the right to update these Terms & Conditions when necessary.',
      'The latest version published on the website will apply to future engagements unless otherwise agreed in writing.',
    ],
  },
  {
    id: 'acceptance',
    title: '17. Acceptance',
    paragraphs: [
      'By making an advance payment, approving a quotation or proposal, signing an agreement, or otherwise engaging Dual-Axis for services, the client confirms that they have read, understood, and agreed to these Terms & Conditions.',
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAF7F2] transition-colors duration-300 dark:bg-[#0E0E10]">
        {/* Hero */}
        <div className="border-b border-[#E6DED3] bg-[#F5EFE6] pt-28 dark:border-[#2A2A2E] dark:bg-[#18181B] md:pt-32">
          <div className="container max-w-5xl pb-10 md:pb-14">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#C07A3D] transition-colors hover:text-[#A86930] dark:text-[#C6A75E] dark:hover:text-[#D4B86A]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>

            <div className="flex items-start gap-4">
              <div className="hidden rounded-xl border border-[#C07A3D]/20 bg-[#C07A3D]/10 p-3 dark:border-[#C6A75E]/20 dark:bg-[#C6A75E]/10 sm:block">
                <FileText className="h-7 w-7 text-[#C07A3D] dark:text-[#C6A75E]" />
              </div>
              <div>
                <h1 className="mb-2 text-3xl font-medium tracking-tight text-[#3F3A34] dark:text-white md:text-4xl lg:text-5xl">
                  Terms & Conditions
                </h1>
                <p className="text-sm text-[#9A948C] dark:text-[#6B6B6B]">
                  Last updated: 27 August 2026
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#6B645C] dark:text-[#B3B3B3] md:text-lg">
              By engaging <strong className="font-medium text-[#3F3A34] dark:text-white">Dual-Axis</strong> for software
              development, website development, application development, design, deployment, maintenance, or related
              services, the client agrees to the following terms.
            </p>
          </div>
        </div>

        <div className="container max-w-5xl py-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">
            {/* Table of contents — desktop */}
            <aside className="hidden lg:block">
              <nav className="sticky top-28 rounded-2xl border border-[#E6DED3] bg-white/60 p-5 dark:border-[#2A2A2E] dark:bg-[#18181B]/60">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#9A948C] dark:text-[#6B6B6B]">
                  Contents
                </p>
                <ol className="space-y-1.5 text-sm">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block rounded-md px-2 py-1 text-[#6B645C] transition-colors hover:bg-[#C07A3D]/8 hover:text-[#C07A3D] dark:text-[#B3B3B3] dark:hover:bg-[#C6A75E]/10 dark:hover:text-[#C6A75E]"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* Sections */}
            <div className="space-y-6">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 rounded-2xl border border-[#E6DED3] bg-white/70 p-6 shadow-sm dark:border-[#2A2A2E] dark:bg-[#18181B]/70 md:p-8"
                >
                  <h2 className="mb-4 text-lg font-medium text-[#3F3A34] dark:text-white md:text-xl">
                    {section.title}
                  </h2>

                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mb-3 text-[15px] leading-relaxed text-[#6B645C] dark:text-[#B3B3B3]"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.highlight && (
                    <div className="my-4 rounded-xl border border-[#C07A3D]/25 bg-gradient-to-r from-[#C07A3D]/10 to-transparent px-5 py-4 dark:border-[#C6A75E]/25 dark:from-[#C6A75E]/10">
                      <p className="text-base font-semibold text-[#3F3A34] dark:text-white">
                        {section.highlight}
                      </p>
                    </div>
                  )}

                  {section.list && (
                    <ul className="mt-3 space-y-2 border-l-2 border-[#C07A3D]/30 pl-4 dark:border-[#C6A75E]/30">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="text-[15px] leading-relaxed text-[#6B645C] dark:text-[#B3B3B3]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {/* Contact CTA */}
              <div className="rounded-2xl border border-[#C07A3D]/20 bg-gradient-to-br from-[#C07A3D]/10 via-transparent to-[#C6A75E]/5 p-6 dark:border-[#C6A75E]/20 md:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="mb-1 text-lg font-medium text-[#3F3A34] dark:text-white">
                      Questions about these terms?
                    </h3>
                    <p className="text-sm text-[#6B645C] dark:text-[#B3B3B3]">
                      Reach out before starting your project — we&apos;re happy to clarify.
                    </p>
                  </div>
                  <Link
                    href="/#contact"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#C07A3D] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#A86930] dark:bg-[#C6A75E] dark:hover:bg-[#D4B86A]"
                  >
                    <Mail className="h-4 w-4" />
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
