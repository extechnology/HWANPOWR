import React from "react";

/**
 * TermsAndConditions Component
 * Renders the full Terms and Conditions for Hwan Power using Tailwind CSS.
 * Date: April 10, 2026 [cite: 2]
 */
const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12  text-gray-800 leading-relaxed">
      <header className="border-b pb-8 mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
          Terms and Conditions [cite: 1]
        </h1>
        <p className="text-sm text-gray-500 italic">
          Last updated: April 10, 2026 [cite: 2]
        </p>
      </header>

      <section className="mb-8">
        <p className="mb-4 font-medium text-lg">
          Please read these terms and conditions carefully before using Our
          Service. [cite: 3]
        </p>
      </section>

      {/* Interpretation and Definitions */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold  pl-4 mb-4 uppercase tracking-wide">
          Interpretation and Definitions [cite: 4]
        </h2>

        <div className="ml-4">
          <h3 className="text-xl font-semibold mb-2">
            Interpretation [cite: 5]
          </h3>
          <p className="mb-4">
            The words whose initial letters are capitalized have meanings
            defined under the following conditions. [cite: 6] The following
            definitions shall have the same meaning regardless of whether they
            appear in singular or in plural. [cite: 7]
          </p>

          <h3 className="text-xl font-semibold mb-2">Definitions [cite: 8]</h3>
          <p className="mb-4">
            For the purposes of these Terms and Conditions: [cite: 9]
          </p>
          <ul className="space-y-4 list-none">
            <li>
              <strong className="text-gray-900">Affiliate</strong> [cite: 10]
              means an entity that controls, is controlled by, or is under
              common control with a party, where "control" means ownership of
              50% or more of the shares, equity interest or other securities
              entitled to vote for election of directors or other managing
              authority. [cite: 10]
            </li>
            <li>
              <strong className="text-gray-900">Country</strong> [cite: 11]
              refers to: Kerala, India [cite: 11]
            </li>
            <li>
              <strong className="text-gray-900">Company</strong> [cite: 12]
              (referred to as either "the Company", "We", "Us" or "Our" in these
              Terms and Conditions) refers to Hwan Power, KINFRA Advanced
              Technology Park Ramanattukara. [cite: 12]
            </li>
            <li>
              <strong className="text-gray-900">Device</strong> [cite: 13] means
              any device that can access the Service such as a computer, a cell
              phone or a digital tablet. [cite: 13]
            </li>
            <li>
              <strong className="text-gray-900">Service</strong> [cite: 14]
              refers to the Website. [cite: 14]
            </li>
            <li>
              <strong className="text-gray-900">Terms and Conditions</strong>{" "}
              [cite: 15] (also referred to as "Terms") means these Terms and
              Conditions, including any documents expressly incorporated by
              reference, which govern Your access to and use of the Service and
              form the entire agreement between You and the Company regarding
              the Service. [cite: 15]
            </li>
            <li>
              These Terms and Conditions have been created with the help of the{" "}
              <span className="underline italic text-yellow-700">
                TermsFeed Terms and Conditions Generator
              </span>
              . [cite: 16]
            </li>
            <li>
              <strong className="text-gray-900">
                Third-Party Social Media Service
              </strong>{" "}
              [cite: 17] means any services or content (including data,
              information, products or services) provided by a third party that
              is displayed, included, made available, or linked to through the
              Service. [cite: 17]
            </li>
            <li>
              <strong className="text-gray-900">Website</strong> [cite: 18]
              refers to www.hwanpower.com, accessible from{" "}
              <a
                href="https://www.hwanpower.com/"
                className="text-yellow-600 hover:underline"
              >
                https://www.hwanpower.com/
              </a>{" "}
              [cite: 18]
            </li>
            <li>
              <strong className="text-gray-900">You</strong> [cite: 19] means
              the individual accessing or using the Service, or the company, or
              other legal entity on behalf of which such individual is accessing
              or using the Service, as applicable. [cite: 19]
            </li>
          </ul>
        </div>
      </section>

      {/* Acknowledgment */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold  pl-4 mb-4 uppercase tracking-wide">
          Acknowledgment [cite: 20]
        </h2>
        <div className="space-y-4 ml-4 text-gray-700">
          <p>
            These are the Terms and Conditions governing the use of this Service
            and the agreement between You and the Company. [cite: 21]
          </p>
          <p>
            These Terms and Conditions set out the rights and obligations of all
            users regarding the use of the Service. [cite: 22]
          </p>
          <p>
            Your access to and use of the Service is conditioned on Your
            acceptance of and compliance with these Terms and Conditions. [cite:
            23]
          </p>
          <p>
            These Terms and Conditions apply to all visitors, users and others
            who access or use the Service. [cite: 24]
          </p>
          <p>
            By accessing or using the Service You agree to be bound by these
            Terms and Conditions. [cite: 25]
          </p>
          <p>
            If You disagree with any part of these Terms and Conditions then You
            may not access the Service. [cite: 26]
          </p>
          <p>
            You represent that you are over the age of 18. The Company does not
            permit those under 18 to use the Service. [cite: 27]
          </p>
          <p>
            Your access to and use of the Service is also subject to Our Privacy
            Policy, which describes how We collect, use, and disclose personal
            information. [cite: 28]
          </p>
          <p>
            Please read Our Privacy Policy carefully before using Our Service.
            [cite: 29]
          </p>
        </div>
      </section>

      {/* Links to Other Websites */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold  pl-4 mb-4 uppercase tracking-wide">
          Links to Other Websites [cite: 30]
        </h2>
        <div className="space-y-4 ml-4">
          <p>
            Our Service may contain links to third-party websites or services
            that are not owned or controlled by the Company. [cite: 31]
          </p>
          <p>
            The Company has no control over, and assumes no responsibility for,
            the content, privacy policies, or practices of any third-party
            websites or services. [cite: 32]
          </p>
          <p>
            You further acknowledge and agree that the Company shall not be
            responsible or liable, directly or indirectly, for any damage or
            loss caused or alleged to be caused by or in connection with the use
            of or reliance on any such content, goods or services available on
            or through any such websites or services. [cite: 33]
          </p>
          <p className="font-semibold italic">
            We strongly advise You to read the terms and conditions and privacy
            policies of any third-party websites or services that You visit.
            [cite: 34]
          </p>
        </div>
      </section>

      {/* Third Party Social Media */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold  pl-4 mb-4 uppercase tracking-wide">
          Links from a Third-Party Social Media Service [cite: 35]
        </h2>
        <div className="space-y-4 ml-4">
          <p>
            The Service may display, include, make available, or link to content
            or services provided by a Third-Party Social Media Service. [cite:
            36]
          </p>
          <p>
            A Third-Party Social Media Service is not owned or controlled by the
            Company, and the Company does not endorse or assume responsibility
            for any Third-Party Social Media Service. [cite: 37]
          </p>
          <p>
            You acknowledge and agree that the Company shall not be responsible
            or liable, directly or indirectly, for any damage or loss caused or
            alleged to be caused by or in connection with Your access to or use
            of any Third-Party Social Media Service, including any content,
            goods, or services made available through them. [cite: 38]
          </p>
          <p>
            Your use of any Third-Party Social Media Service is governed by that
            Third-Party Social Media Service's terms and privacy policies.
            [cite: 39]
          </p>
        </div>
      </section>

      {/* Termination */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold  pl-4 mb-4 uppercase tracking-wide">
          Termination [cite: 40]
        </h2>
        <div className="space-y-4 ml-4">
          <p>
            We may terminate or suspend Your access immediately, without prior
            notice or liability, for any reason whatsoever, including without
            limitation if You breach these Terms and Conditions. [cite: 41]
          </p>
          <p>
            Upon termination, Your right to use the Service will cease
            immediately. [cite: 42]
          </p>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold  pl-4 mb-4 uppercase tracking-wide">
          Limitation of Liability [cite: 43]
        </h2>
        <div className="space-y-4 ml-4">
          <p>
            Notwithstanding any damages that You might incur, the entire
            liability of the Company and any of its suppliers under any
            provision of these Terms and Your exclusive remedy for all of the
            foregoing shall be limited to the amount actually paid by You
            through the Service or 100 USD if You haven't purchased anything
            through the Service. [cite: 44]
          </p>
          <p>
            To the maximum extent permitted by applicable law, in no event shall
            the Company or its suppliers be liable for any special, incidental,
            indirect, or consequential damages whatsoever (including, but not
            limited to, damages for loss of profits, loss of data or other
            information, for business interruption, for personal injury, loss of
            privacy arising out of or in any way related to the use of or
            inability to use the Service, third-party software and/or
            third-party hardware used with the Service, or otherwise in
            connection with any provision of these Terms), even if the Company
            or any supplier has been advised [cite: 45] of the possibility of
            such damages and even if the remedy fails of its essential purpose.
            [cite: 46]
          </p>
          <p>
            Some states do not allow the exclusion of implied warranties or
            limitation of liability for incidental or consequential damages,
            which means that some of the above limitations may not apply. [cite:
            47]
          </p>
          <p>
            In these states, each party's liability will be limited to the
            greatest extent permitted by law. [cite: 48]
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold  pl-4 mb-4 uppercase tracking-wide">
          "AS IS" and "AS AVAILABLE" Disclaimer [cite: 49]
        </h2>
        <div className="space-y-4 ml-4">
          <p>
            The Service is provided to You "AS IS" and "AS AVAILABLE" and with
            all faults and defects without warranty of any kind. [cite: 50]
          </p>
          <p>
            To the maximum extent permitted under applicable law, the Company,
            on its own behalf and on behalf of its Affiliates and its and their
            respective licensors and service providers, expressly disclaims all
            warranties, whether express, implied, statutory or otherwise, with
            respect to the Service, including all implied warranties of
            merchantability, fitness for a particular purpose, title and
            non-infringement, and warranties that may arise out of course of
            dealing, course of performance, usage or trade practice. [cite: 51]
          </p>
          <p>
            Without limitation to the foregoing, the Company provides no
            warranty or undertaking, and makes no representation of any kind
            that the Service will meet Your requirements, achieve any intended
            results, be compatible or work with any other software,
            applications, systems or services, operate without interruption,
            meet any performance or reliability standards or be error free or
            that any errors or defects can or will be corrected. [cite: 52]
          </p>
          <p>
            Without limiting the foregoing, neither the Company nor any of the
            company's provider makes any representation or warranty of any kind,
            express or implied: (i) as to the operation or availability of the
            Service, or the information, content, and materials or products
            included thereon; [cite: 53]
          </p>
          <p>
            (ii) that the Service will be uninterrupted or error-free; (iii) as
            to the accuracy, reliability, or currency of any information or
            content provided through the Service; [cite: 54]
          </p>
          <p>
            or (iv) that the Service, its servers, the content, or e-mails sent
            from or on behalf of the Company are free of viruses, scripts,
            trojan horses, worms, malware, timebombs or other harmful
            components. [cite: 55]
          </p>
          <p>
            Some jurisdictions do not allow the exclusion of certain types of
            warranties or limitations on applicable statutory rights of a
            consumer, so some or all of the above exclusions and limitations may
            not apply to You. [cite: 56]
          </p>
          <p>
            But in such a case the exclusions and limitations set forth in this
            section shall be applied to the greatest extent enforceable under
            applicable law. [cite: 57]
          </p>
        </div>
      </section>

      {/* Governing Law and Disputes */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold  pl-4 mb-4 uppercase tracking-wide">
          Governing Law [cite: 58]
        </h2>
        <div className="space-y-4 ml-4">
          <p>
            The laws of the Country, excluding its conflicts of law rules, shall
            govern these Terms and Your use of the Service. [cite: 59]
          </p>
          <p>
            Your use of the Application may also be subject to other local,
            state, national, or international laws. [cite: 60]
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Disputes Resolution [cite: 61]
          </h3>
          <p>
            If You have any concern or dispute about the Service, You agree to
            first try to resolve the dispute informally by contacting the
            Company. [cite: 62]
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            For European Union (EU) Users [cite: 63]
          </h3>
          <p>
            If You are a European Union consumer, you will benefit from any
            mandatory provisions of the law of the country in which You are
            resident. [cite: 64]
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            United States Legal Compliance [cite: 65]
          </h3>
          <p>
            You represent and warrant that (i) You are not located in a country
            that is subject to the United States government embargo, or that has
            been designated by the United States government as a "terrorist
            supporting" country, and (ii) You are not listed on any United
            States government list of prohibited or restricted parties. [cite:
            66]
          </p>
        </div>
      </section>

      {/* Severability and Waiver */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold  pl-4 mb-4 uppercase tracking-wide">
          Severability and Waiver [cite: 67]
        </h2>
        <div className="ml-4">
          <h3 className="text-xl font-semibold mb-2">
            Severability [cite: 68]
          </h3>
          <p className="mb-4">
            If any provision of these Terms is held to be unenforceable or
            invalid, such provision will be changed and interpreted to
            accomplish the objectives of such provision to the greatest extent
            possible under applicable law and the remaining provisions will
            continue in full force and effect. [cite: 69]
          </p>

          <h3 className="text-xl font-semibold mb-2">Waiver [cite: 70]</h3>
          <p>
            Except as provided herein, the failure to exercise a right or to
            require performance of an obligation under these Terms shall not
            affect a party's ability to exercise such right or require such
            performance at any time thereafter nor shall the waiver of a breach
            constitute a waiver of any subsequent breach. [cite: 71]
          </p>
        </div>
      </section>

      {/* Translation and Changes */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold  pl-4 mb-4 uppercase tracking-wide">
          Translation Interpretation [cite: 72]
        </h2>
        <p className="ml-4 mb-6">
          These Terms and Conditions may have been translated if We have made
          them available to You on our Service. [cite: 73] You agree that the
          original English text shall prevail in the case of a dispute. [cite:
          74]
        </p>

        <h2 className="text-2xl font-bold  pl-4 mb-4 uppercase tracking-wide">
          Changes to These Terms and Conditions [cite: 75]
        </h2>
        <div className="space-y-4 ml-4">
          <p>
            We reserve the right, at Our sole discretion, to modify or replace
            these Terms at any time. [cite: 76]
          </p>
          <p>
            If a revision is material We will make reasonable efforts to provide
            at least 30 days' notice prior to any new terms taking effect.
            [cite: 77]
          </p>
          <p>
            What constitutes a material change will be determined at Our sole
            discretion. [cite: 78]
          </p>
          <p>
            By continuing to access or use Our Service after those revisions
            become effective, You agree to be bound by the revised terms. [cite:
            79]
          </p>
          <p>
            If You do not agree to the new terms, in whole or in part, please
            stop using the Service. [cite: 80]
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Contact Us [cite: 81]
        </h2>
        <p className="mb-4">
          If you have any questions about these Terms and Conditions, You can
          contact us: [cite: 82]
        </p>
        <p className="font-medium">
          By email:{" "}
          <a
            href="mailto:hwanpowerr@gmail.com"
            className="text-yellow-600 hover:underline"
          >
            hwanpowerr@gmail.com
          </a>{" "}
          [cite: 83]
        </p>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
