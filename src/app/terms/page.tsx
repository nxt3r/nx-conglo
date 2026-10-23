import { contactInfo } from "@/data/site";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Terms of Service</h1>
      <p className="text-gray-500 mb-12">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

      <div className="space-y-8 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Acceptance of Terms</h2>
          <p>By accessing the Nx Conglo website, you agree to be bound by these Terms of Service. If you do not agree, please do not use the site.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Intellectual Property</h2>
          <p>All content on this site, including logos, text, and design, is the property of Nx Conglo and is protected by copyright laws. You may not reproduce or distribute our content without permission.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Disclaimer</h2>
          <p>The information on this site is provided "as is" without any warranties. We do not guarantee that the site will be error-free or uninterrupted. Any tools or software we link to are provided at your own risk.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Limitation of Liability</h2>
          <p>Nx Conglo shall not be liable for any damages arising out of the use or inability to use the materials on this website.</p>
        </section>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200">
        <Link
          href="/"
          prefetch={false}
          className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
          >
          ← Back to Nx Conglo
        </Link>
      </div>
    </div>
  );
}