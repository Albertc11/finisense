// Mock Stripe configuration
// In a real implementation, you would install and configure the Stripe SDK

export const stripeConfig = {
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_mock_key",
  secretKey: process.env.STRIPE_SECRET_KEY || "sk_test_mock_key",
  webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || "whsec_mock_secret",
}

// Mock price IDs - these would be real Stripe price IDs in production
export const stripePrices = {
  starter: {
    monthly: "price_mock_starter_monthly",
    yearly: "price_mock_starter_yearly",
  },
  pro: {
    monthly: "price_mock_pro_monthly",
    yearly: "price_mock_pro_yearly",
  },
  family: {
    monthly: "price_mock_family_monthly",
    yearly: "price_mock_family_yearly",
  },
}

// Mock Stripe client
export const createCheckoutSession = async (priceId: string, planId: string) => {
  // In a real implementation, this would use the Stripe SDK
  const response = await fetch("/api/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ priceId, planId }),
  })

  if (!response.ok) {
    throw new Error("Failed to create checkout session")
  }

  return response.json()
}
