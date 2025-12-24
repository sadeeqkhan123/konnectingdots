import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: January 2024</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Your Privacy Matters to Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <p className="text-gray-700 leading-relaxed">
              At Konnecting Dots, we are committed to protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website, use our services, or participate in our training programs.
            </p>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Personal Information</h3>
                  <p className="text-gray-700 mb-2">We may collect the following personal information:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Name, email address, phone number, and mailing address</li>
                    <li>Professional information such as job title, company name, and industry</li>
                    <li>Payment information for course registrations and services</li>
                    <li>Training preferences and learning objectives</li>
                    <li>Communication preferences and feedback</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Automatically Collected Information</h3>
                  <p className="text-gray-700 mb-2">When you visit our website, we automatically collect:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>IP address and browser information</li>
                    <li>Device type and operating system</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website and search terms used</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use your information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Providing and delivering our training services and programs</li>
                <li>Processing payments and managing your account</li>
                <li>Communicating with you about our services, updates, and promotional offers</li>
                <li>Customizing your learning experience and providing personalized recommendations</li>
                <li>Improving our website, services, and customer experience</li>
                <li>Conducting research and analysis to enhance our training programs</li>
                <li>Complying with legal obligations and protecting our rights</li>
                <li>Preventing fraud and ensuring the security of our services</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                in the following circumstances:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Service Providers</h3>
                  <p className="text-gray-700">
                    We may share information with trusted third-party service providers who assist us in operating our
                    website, conducting business, or serving you, provided they agree to keep this information
                    confidential.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Business Transfers</h3>
                  <p className="text-gray-700">
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred as
                    part of the business transaction.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Legal Requirements</h3>
                  <p className="text-gray-700">
                    We may disclose your information when required by law, court order, or government regulation, or to
                    protect our rights, property, or safety.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication procedures</li>
                <li>Employee training on data protection practices</li>
                <li>Secure payment processing systems</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to enhance your browsing experience, analyze website traffic,
                and personalize content. You can control cookie settings through your browser preferences.
              </p>

              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Essential Cookies:</strong> Required for basic website functionality
                </p>
                <p className="text-gray-700">
                  <strong>Analytics Cookies:</strong> Help us understand how visitors use our website
                </p>
                <p className="text-gray-700">
                  <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign
                  effectiveness
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Access:</strong> Request a copy of the personal information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information, subject to legal
                  requirements
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your data to another service provider
                </li>
                <li>
                  <strong>Opt-out:</strong> Unsubscribe from marketing communications at any time
                </li>
                <li>
                  <strong>Restriction:</strong> Request limitation of processing in certain circumstances
                </li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
              <p className="text-gray-700">
                We retain your personal information only as long as necessary to fulfill the purposes outlined in this
                Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Specific
                retention periods vary based on the type of information and applicable legal requirements.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
              <p className="text-gray-700">
                If you are located outside of our primary operating jurisdiction, please note that your information may
                be transferred to and processed in countries with different data protection laws. We ensure appropriate
                safeguards are in place to protect your information during such transfers.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
              <p className="text-gray-700">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
                information from children. If we become aware that we have collected information from a child, we will
                take steps to delete such information promptly.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable
                laws. We will notify you of any material changes by posting the updated policy on our website and
                updating the "Last updated" date. Your continued use of our services after such changes constitutes
                acceptance of the updated policy.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Konnecting Dots</strong>
                </p>
                <p className="text-gray-700">Email: privacy@konnectingdots.com</p>
                <p className="text-gray-700">Phone: (555) 123-4567</p>
                <p className="text-gray-700">Address: 123 Training Way, Learning City, LC 12345</p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
