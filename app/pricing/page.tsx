"use client"

import { useState } from "react"
import { Wallet, Check, X, Star, Zap, Crown, ArrowRight, CreditCard, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")
  const [showCheckout, setShowCheckout] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const plans = [
    {
      id: "starter",
      name: "Starter",
      description: "Perfect for individuals getting started with personal finance",
      icon: Star,
      color: "#10b981",
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      features: [
        "Up to 3 bank accounts",
        "Basic transaction categorization",
        "Simple budgeting tools",
        "Goal tracking (up to 3 goals)",
        "Monthly reports",
        "Email support",
        "Mobile app access",
        "Basic gamification",
      ],
      limitations: ["No AI insights", "No investment tracking", "No multi-user access", "Limited integrations"],
      popular: false,
    },
    {
      id: "pro",
      name: "Pro",
      description: "Advanced features for serious financial planning",
      icon: Zap,
      color: "#00355f",
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      features: [
        "Unlimited bank accounts",
        "AI-powered insights & recommendations",
        "Advanced budgeting & forecasting",
        "Unlimited goals & challenges",
        "Investment portfolio tracking",
        "Weekly & monthly reports",
        "Priority email support",
        "Full gamification suite",
        "Multi-currency support",
        "Data export capabilities",
      ],
      limitations: ["Single user account", "No white-label options"],
      popular: true,
    },
    {
      id: "family",
      name: "Family",
      description: "Comprehensive solution for families and couples",
      icon: Crown,
      color: "#8b5cf6",
      monthlyPrice: 29.99,
      yearlyPrice: 299.99,
      features: [
        "Everything in Pro",
        "Up to 5 family members",
        "Shared budgets & goals",
        "Family financial dashboard",
        "Individual privacy controls",
        "Advanced reporting & analytics",
        "Phone & chat support",
        "Custom categories & tags",
        "API access",
        "Priority feature requests",
      ],
      limitations: [],
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "What's included in the 7-day free trial?",
      answer:
        "You get full access to all Pro features during your 7-day trial. No credit card required to start, and you can cancel anytime.",
    },
    {
      question: "Can I change plans later?",
      answer:
        "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
    },
    {
      question: "Is my financial data secure?",
      answer:
        "Absolutely. We use bank-level 256-bit SSL encryption and never store your banking credentials. Your data is encrypted both in transit and at rest.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.",
    },
    {
      question: "Can I use SmartWealth in multiple currencies?",
      answer:
        "Yes! We support USD, HKD, TWD, AUD, JPY, KRW, and many other currencies. You can track accounts in different currencies simultaneously.",
    },
  ]

  const CheckoutModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <CardTitle>Complete Your Subscription</CardTitle>
          <CardDescription>
            {selectedPlan && `Subscribe to ${plans.find((p) => p.id === selectedPlan)?.name} plan`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Plan Summary */}
            {selectedPlan && (
              <div className="p-4 rounded-lg bg-gray-50 border">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{plans.find((p) => p.id === selectedPlan)?.name} Plan</p>
                    <p className="text-sm text-gray-500">
                      {billingCycle === "monthly" ? "Monthly billing" : "Yearly billing"}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">
                      $
                      {billingCycle === "monthly"
                        ? plans.find((p) => p.id === selectedPlan)?.monthlyPrice
                        : plans.find((p) => p.id === selectedPlan)?.yearlyPrice}
                    </p>
                    <p className="text-sm text-gray-500">{billingCycle === "monthly" ? "/month" : "/year"}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Payment Method */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 p-3 border rounded-md">
                  <CreditCard className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">Credit or Debit Card</span>
                </div>
              </div>
            </div>

            {/* Card Details */}
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
              </div>
            </div>

            {/* Security Notice */}
            <div className="flex items-start space-x-2 p-3 bg-blue-50 rounded-md">
              <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-blue-800">Secure Payment</p>
                <p className="text-xs text-blue-600">
                  Your payment information is encrypted and processed securely by Stripe.
                </p>
              </div>
            </div>

            <Button className="w-full" style={{ backgroundColor: "#00355f" }}>
              Start 7-Day Free Trial
            </Button>

            <p className="text-xs text-gray-500 text-center">
              You won't be charged until your trial ends. Cancel anytime during the trial period.
            </p>
          </div>
        </CardContent>
        <div className="p-4 border-t">
          <Button variant="outline" className="w-full bg-transparent" onClick={() => setShowCheckout(false)}>
            Cancel
          </Button>
        </div>
      </Card>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: "#00355f" }}>
                <Wallet className="w-5 h-5 text-white m-1.5" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">SmartWealth Global</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/landing" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <Button variant="outline">Sign In</Button>
              <Button style={{ backgroundColor: "#00355f" }}>Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4" style={{ backgroundColor: "#00355f" }}>
            🎉 7-Day Free Trial • No Credit Card Required
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="block" style={{ color: "#00355f" }}>
              Financial Journey
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Start with our free trial and upgrade to unlock advanced features. Cancel anytime, no questions asked.
          </p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4 p-1 bg-gray-100 rounded-lg">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === "monthly" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === "yearly" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Yearly
                <Badge className="ml-2 bg-green-100 text-green-800">Save 17%</Badge>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const Icon = plan.icon
              const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
              const savings = billingCycle === "yearly" ? (plan.monthlyPrice * 12 - plan.yearlyPrice).toFixed(0) : 0

              return (
                <Card
                  key={plan.id}
                  className={`relative ${plan.popular ? "border-2 ring-2 ring-blue-500 ring-opacity-50" : ""}`}
                  style={{ borderColor: plan.popular ? plan.color : undefined }}
                >
                  {plan.popular && (
                    <div
                      className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-medium"
                      style={{ backgroundColor: plan.color }}
                    >
                      Most Popular
                    </div>
                  )}

                  <CardHeader className="text-center">
                    <div
                      className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: plan.color }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>

                    <div className="mt-4">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900">${price}</span>
                        <span className="text-gray-500 ml-1">/{billingCycle === "monthly" ? "month" : "year"}</span>
                      </div>
                      {billingCycle === "yearly" && savings > 0 && (
                        <p className="text-sm text-green-600 mt-1">Save ${savings} per year</p>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <Button
                      className="w-full mb-6"
                      style={{
                        backgroundColor: plan.popular ? plan.color : "transparent",
                        color: plan.popular ? "white" : plan.color,
                        borderColor: plan.color,
                      }}
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => {
                        setSelectedPlan(plan.id)
                        setShowCheckout(true)
                      }}
                    >
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>

                    <div className="space-y-3">
                      <p className="font-medium text-gray-900">What's included:</p>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {plan.limitations.length > 0 && (
                        <>
                          <p className="font-medium text-gray-900 mt-4">Not included:</p>
                          <ul className="space-y-2">
                            {plan.limitations.map((limitation, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-500">{limitation}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare All Features</h2>
            <p className="text-xl text-gray-600">See exactly what's included in each plan</p>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Starter</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Pro</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Family</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: "Bank Accounts", starter: "3", pro: "Unlimited", family: "Unlimited" },
                    { feature: "AI Insights", starter: false, pro: true, family: true },
                    { feature: "Investment Tracking", starter: false, pro: true, family: true },
                    { feature: "Multi-Currency", starter: false, pro: true, family: true },
                    { feature: "Family Members", starter: "1", pro: "1", family: "5" },
                    { feature: "Goals & Challenges", starter: "3", pro: "Unlimited", family: "Unlimited" },
                    { feature: "API Access", starter: false, pro: false, family: true },
                    { feature: "Priority Support", starter: false, pro: true, family: true },
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">
                        {typeof row.starter === "boolean" ? (
                          row.starter ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-400 mx-auto" />
                          )
                        ) : (
                          row.starter
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">
                        {typeof row.pro === "boolean" ? (
                          row.pro ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-400 mx-auto" />
                          )
                        ) : (
                          row.pro
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">
                        {typeof row.family === "boolean" ? (
                          row.family ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-400 mx-auto" />
                          )
                        ) : (
                          row.family
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about SmartWealth pricing</p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: "#00355f" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Financial Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">Try SmartWealth free for 7 days. No credit card required.</p>
          <Button
            size="lg"
            className="bg-white text-blue-900 hover:bg-gray-100"
            onClick={() => {
              setSelectedPlan("pro")
              setShowCheckout(true)
            }}
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: "#00355f" }}>
                  <Wallet className="w-5 h-5 text-white m-1.5" />
                </div>
                <h3 className="text-lg font-bold">SmartWealth Global</h3>
              </div>
              <p className="text-gray-400">Empowering individuals to take control of their financial future.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SmartWealth Global. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Checkout Modal */}
      {showCheckout && <CheckoutModal />}
    </div>
  )
}
