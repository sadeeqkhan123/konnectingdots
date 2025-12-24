import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-gray-600">Last updated: January 2024</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>How We Use Cookies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <p className="text-gray-700 leading-relaxed">
              This Cookie Policy explains how Konnecting Dots uses cookies and similar technologies when you visit our
              website. It explains what these technologies are, why we use them, and your rights to control our use of
              them.
            </p>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website.
                They are widely used to make websites work more efficiently and to provide information to website
                owners.
              </p>
              <p className="text-gray-700">
                Cookies allow websites to recognize your device and store some information about your preferences or
                past actions. This helps improve your browsing experience by remembering your settings and providing
                personalized content.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>

              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-2 text-blue-800">Essential Cookies</h3>
                  <p className="text-gray-700 mb-2">
                    These cookies are necessary for the website to function properly and cannot be disabled.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Authentication and security cookies</li>
                    <li>Shopping cart and session management</li>
                    <li>Load balancing and performance optimization</li>
                    <li>CSRF protection and form submission</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-2 text-green-800">Analytics Cookies</h3>
                  <p className="text-gray-700 mb-2">
                    These cookies help us understand how visitors interact with our website by collecting anonymous
                    information.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Google Analytics for website traffic analysis</li>
                    <li>Page view and user behavior tracking</li>
                    <li>Performance monitoring and error reporting</li>
                    <li>A/B testing and optimization</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-2 text-purple-800">Functional Cookies</h3>
                  <p className="text-gray-700 mb-2">
                    These cookies enable enhanced functionality and personalization features.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Language and region preferences</li>
                    <li>Theme and display settings</li>
                    <li>Form auto-fill and saved preferences</li>
                    <li>Chat widget and support features</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-2 text-orange-800">Marketing Cookies</h3>
                  <p className="text-gray-700 mb-2">
                    These cookies are used to deliver relevant advertisements and track marketing campaign
                    effectiveness.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Social media integration and sharing</li>
                    <li>Targeted advertising and retargeting</li>
                    <li>Email marketing campaign tracking</li>
                    <li>Conversion tracking and attribution</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                We may also use third-party services that place cookies on your device. These include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Google Analytics</h4>
                  <p className="text-sm text-gray-600">Website traffic and user behavior analysis</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Facebook Pixel</h4>
                  <p className="text-sm text-gray-600">Social media advertising and conversion tracking</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">LinkedIn Insight Tag</h4>
                  <p className="text-sm text-gray-600">Professional network advertising and analytics</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">YouTube</h4>
                  <p className="text-sm text-gray-600">Video content delivery and engagement tracking</p>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">How Long Do Cookies Last?</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Session Cookies</h3>
                  <p className="text-gray-700">
                    These are temporary cookies that are deleted when you close your browser. They are used for
                    essential website functionality and security.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Persistent Cookies</h3>
                  <p className="text-gray-700">
                    These cookies remain on your device for a specified period or until you delete them. They typically
                    last from 30 days to 2 years, depending on their purpose.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Managing Your Cookie Preferences</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Browser Settings</h3>
                  <p className="text-gray-700 mb-4">
                    You can control and manage cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>View and delete existing cookies</li>
                    <li>Block cookies from specific websites</li>
                    <li>Block third-party cookies</li>
                    <li>Clear all cookies when you close the browser</li>
                    <li>Set up notifications when cookies are being set</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Cookie Consent Management</h3>
                  <p className="text-gray-700 mb-4">
                    When you first visit our website, you'll see a cookie consent banner that allows you to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Accept all cookies</li>
                    <li>Reject non-essential cookies</li>
                    <li>Customize your cookie preferences</li>
                    <li>Learn more about each cookie category</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2 text-yellow-800">Important Note</h4>
                  <p className="text-sm text-gray-700">
                    Disabling certain cookies may affect the functionality of our website and your user experience.
                    Essential cookies cannot be disabled as they are necessary for the website to function properly.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Browser-Specific Instructions</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Google Chrome</h4>
                  <p className="text-sm text-gray-600">Settings → Privacy and Security → Cookies and other site data</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Mozilla Firefox</h4>
                  <p className="text-sm text-gray-600">Options → Privacy & Security → Cookies and Site Data</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Safari</h4>
                  <p className="text-sm text-gray-600">Preferences → Privacy → Manage Website Data</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Microsoft Edge</h4>
                  <p className="text-sm text-gray-600">
                    Settings → Cookies and site permissions → Cookies and site data
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Opt-Out Options</h2>
              <p className="text-gray-700 mb-4">
                You can opt out of certain third-party cookies and tracking technologies:
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Google Analytics</h4>
                    <p className="text-sm text-gray-600">Opt out of Google Analytics tracking</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Opt Out
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Facebook Advertising</h4>
                    <p className="text-sm text-gray-600">Manage Facebook ad preferences</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">LinkedIn Advertising</h4>
                    <p className="text-sm text-gray-600">Control LinkedIn ad targeting</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Control
                  </Button>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Updates to This Cookie Policy</h2>
              <p className="text-gray-700">
                We may update this Cookie Policy from time to time to reflect changes in our practices or applicable
                laws. We will notify you of any material changes by posting the updated policy on our website and
                updating the "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium mb-2 text-blue-800">Cookie Preferences</h3>
              <p className="text-sm text-gray-700 mb-3">
                You can update your cookie preferences at any time by clicking the button below.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">Manage Cookie Preferences</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
