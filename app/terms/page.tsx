import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: January 2024</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Terms and Conditions of Use</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <p className="text-gray-700 leading-relaxed">
              Welcome to Konnecting Dots. These Terms of Service ("Terms") govern your use of our website, services, and
              training programs. By accessing or using our services, you agree to be bound by these Terms. Please read
              them carefully before using our services.
            </p>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing, browsing, or using our website and services, you acknowledge that you have read,
                understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these
                Terms, please do not use our services.
              </p>
              <p className="text-gray-700">
                These Terms apply to all users of our services, including visitors, registered users, training
                participants, and corporate clients.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
              <p className="text-gray-700 mb-4">Konnecting Dots provides:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Neuro-Linguistic Programming (NLP) training and certification</li>
                <li>Hypnosis training and therapeutic services</li>
                <li>Corporate training programs and workshops</li>
                <li>Personal development coaching and consulting</li>
                <li>Online learning platforms and resources</li>
                <li>Educational content and materials</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Accounts and Registration</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Account Creation</h3>
                  <p className="text-gray-700">
                    To access certain services, you may need to create an account. You must provide accurate, current,
                    and complete information during registration and keep your account information updated.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Account Security</h3>
                  <p className="text-gray-700">
                    You are responsible for maintaining the confidentiality of your account credentials and for all
                    activities that occur under your account. You must notify us immediately of any unauthorized use of
                    your account.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Account Termination</h3>
                  <p className="text-gray-700">
                    We reserve the right to suspend or terminate your account at any time for violation of these Terms
                    or for any other reason at our sole discretion.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Payment Terms and Refund Policy</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Payment</h3>
                  <p className="text-gray-700">
                    Payment is required in advance for all training programs and services. We accept major credit cards,
                    bank transfers, and other payment methods as specified during checkout.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Refund Policy</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Full refund available up to 14 days before program start date</li>
                    <li>50% refund available 7-14 days before program start date</li>
                    <li>No refund available within 7 days of program start date</li>
                    <li>Refunds processed within 5-10 business days</li>
                    <li>Corporate training programs may have different refund terms as specified in contracts</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Price Changes</h3>
                  <p className="text-gray-700">
                    We reserve the right to modify our pricing at any time. Price changes will not affect services
                    already purchased.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property Rights</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Our Content</h3>
                  <p className="text-gray-700">
                    All content, materials, and resources provided through our services, including but not limited to
                    text, graphics, logos, images, audio clips, video clips, and software, are the property of
                    Konnecting Dots or our licensors and are protected by copyright and other intellectual property
                    laws.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Limited License</h3>
                  <p className="text-gray-700">
                    We grant you a limited, non-exclusive, non-transferable license to access and use our materials
                    solely for your personal or internal business purposes in connection with the services you have
                    purchased.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Restrictions</h3>
                  <p className="text-gray-700 mb-2">You may not:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Reproduce, distribute, or publicly display our content without permission</li>
                    <li>Create derivative works based on our materials</li>
                    <li>Use our content for commercial purposes without authorization</li>
                    <li>Remove or alter any copyright or proprietary notices</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. User Conduct and Prohibited Activities</h2>
              <p className="text-gray-700 mb-4">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Use our services for any unlawful purpose or in violation of applicable laws</li>
                <li>Harass, abuse, or harm other users or our staff</li>
                <li>Transmit any harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                <li>Interfere with or disrupt our services or servers</li>
                <li>Use automated systems to access our services without permission</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Privacy and Data Protection</h2>
              <p className="text-gray-700">
                Your privacy is important to us. Our collection, use, and protection of your personal information is
                governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our
                services, you consent to the collection and use of your information as described in our Privacy Policy.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Disclaimers and Limitations of Liability</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Service Disclaimer</h3>
                  <p className="text-gray-700">
                    Our services are provided "as is" and "as available" without warranties of any kind, either express
                    or implied. We do not guarantee that our services will be uninterrupted, error-free, or completely
                    secure.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Results Disclaimer</h3>
                  <p className="text-gray-700">
                    While we strive to provide high-quality training and services, individual results may vary. We make
                    no guarantees about specific outcomes or results from participating in our programs.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Limitation of Liability</h3>
                  <p className="text-gray-700">
                    To the maximum extent permitted by law, Konnecting Dots shall not be liable for any indirect,
                    incidental, special, consequential, or punitive damages, including but not limited to loss of
                    profits, data, or business opportunities.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
              <p className="text-gray-700">
                You agree to indemnify, defend, and hold harmless Konnecting Dots, its officers, directors, employees,
                and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in
                any way connected with your use of our services or violation of these Terms.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
              <p className="text-gray-700 mb-4">
                Either party may terminate these Terms at any time. Upon termination:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Your right to use our services will cease immediately</li>
                <li>You must stop using all our materials and content</li>
                <li>
                  Provisions regarding intellectual property, disclaimers, and limitations of liability will survive
                </li>
                <li>Any outstanding payment obligations will remain in effect</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any
                disputes arising from these Terms or your use of our services will be resolved through binding
                arbitration in accordance with the rules of [Arbitration Organization].
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. We will notify users of material changes by
                posting the updated Terms on our website and updating the "Last updated" date. Your continued use of our
                services after such changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Severability</h2>
              <p className="text-gray-700">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited
                or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force
                and effect.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Konnecting Dots</strong>
                </p>
                <p className="text-gray-700">Email: legal@konnectingdots.com</p>
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
