import NavBar from "@/components/NavBar";
import PricingCard from "@/components/PricingTier";

const tiers = [
  {
    title: "Starter",
    description: "Perfect for small college clubs just getting started.",
    price: "5.99",
    cta: "Get Started",
    features: [
      "Up to 5 team members",
      "1 active event",
      "Basic calendar scheduling",
      "Single admin role",
      "Email support (48h response)",
      "1 GB storage",
    ],
    isHighlighted: false,
  },
  {
    title: "Pro",
    description: "For growing orgs with competitive teams and more structure.",
    price: "7.99",
    cta: "Get Started",
    features: [
      "Up to 15 team members",
      "5 concurrent events",
      "Advanced scheduling & reminders",
      "Role-based access (captain, coach)",
      "Discord + Google Calendar integration",
      "Priority support (24h)",
      "5 GB storage",
    ],
    isHighlighted: true,
  },
  {
    title: "Elite",
    description: "Best for university-backed programs or established teams.",
    price: "10.99",
    cta: "Get Started",
    features: [
      "Unlimited team members",
      "Unlimited events",
      "Shared team calendars",
      "Full branding (logo, color, subdomain)",
      "Slack + Stream + LMS integrations",
      "Dedicated support (same day)",
      "20 GB storage + API access",
    ],
    isHighlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen w-full bg-white text-black">
      <NavBar />
      
      {/* Header Section */}
      <section className="w-full text-center py-20 px-6 bg-white mt-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
            Pricing
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            Simplify Esports Management
          </h1>
          <p className="text-md md:text-lg text-gray-600 mt-4">
            Start today. Trusted by over 250 university esports programs.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="w-full flex flex-col md:flex-row justify-center items-stretch gap-8 px-6 pb-24 max-w-6xl mx-auto">
        {tiers.map((tier, index) => (
          <PricingCard key={index} props={tier} />
        ))}
      </section>
    </div>
  );
}
