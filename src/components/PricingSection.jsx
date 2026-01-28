import { motion } from 'framer-motion';
import { Check, Zap, ShieldCheck, Crown } from 'lucide-react';

const plans = [
    {
        name: "Starter",
        desc: "For pilot programs and small training centers.",
        price: { monthly: "$499", yearly: "$399" },
        features: [
            "Up to 2,000 Concurrent Users",
            "Basic AI Proctoring",
            "Email Support (24h)",
            "Standard Analytics"
        ],
        color: "blue",
        icon: Zap
    },
    {
        name: "Growth",
        desc: "For scaling colleges and mid-sized universities.",
        price: { monthly: "$999", yearly: "$799" },
        features: [
            "20,000 Concurrent Users",
            "Advanced Dual-Cam Proctoring",
            "Priority Ops Support",
            "Deep Exam Forensics",
            "LMS Integration (Canvas/Moodle)"
        ],
        color: "indigo",
        icon: Crown,
        popular: true
    },
    {
        name: "Enterprise",
        desc: "For national boards and large-scale deployments.",
        price: { monthly: "Custom", yearly: "Custom" },
        features: [
            "Unlimited Concurrency",
            "Dedicated Infrastructure",
            "Custom Feature Development",
            "SLA: 99.99% Guaranteed",
            "On-Premise Deployment Option"
        ],
        color: "emerald",
        icon: ShieldCheck
    }
];

export default function PricingSection() {
    const [billingCycle, setBillingCycle] = useState("yearly");

    return (
        <section className="py-24 bg-[#0a1a2f] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Transparent Pricing</h2>
                    <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto mb-10">
                        Choose the infrastructure level that matches your institution's scale.
                    </p>

                    {/* Toggle Switch */}
                    <div className="inline-flex items-center gap-4 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm">
                        <button
                            onClick={() => setBillingCycle("monthly")}
                            className={`px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest transition-all ${billingCycle === "monthly" ? "bg-blue-600 text-white shadow-lg" : "text-gray-400 hover:text-white"}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle("yearly")}
                            className={`px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest transition-all flex items-center gap-2 ${billingCycle === "yearly" ? "bg-blue-600 text-white shadow-lg" : "text-gray-400 hover:text-white"}`}
                        >
                            Yearly <span className="text-[10px] bg-emerald-500 text-white px-1.5 py-0.5 rounded shadow-sm">SAVE 20%</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className={`relative p-8 rounded-[2.5rem] border transition-all duration-300 group
                                ${plan.popular
                                    ? "bg-[#0f172a] border-blue-500/50 shadow-2xl shadow-blue-500/10 scale-105 z-10"
                                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"}`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 
                                ${plan.popular ? "bg-blue-600 text-white" : "bg-white/10 text-gray-400"}`}>
                                <plan.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">{plan.name}</h3>
                            <p className="text-gray-400 text-sm font-medium mb-8 h-10">{plan.desc}</p>

                            <div className="flex items-end gap-1 mb-8">
                                <span className="text-4xl md:text-5xl font-black text-white tracking-tight">
                                    {plan.price[billingCycle]}
                                </span>
                                {plan.price[billingCycle] !== "Custom" && (
                                    <span className="text-gray-500 font-bold mb-1">/mo</span>
                                )}
                            </div>

                            <button className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all mb-8
                                ${plan.popular
                                    ? "bg-white text-blue-900 hover:bg-gray-100 hover:scale-105"
                                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"}`}>
                                {plan.price[billingCycle] === "Custom" ? "Contact Sales" : "Get Started"}
                            </button>

                            <ul className="space-y-4">
                                {plan.features.map((feat, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 
                                            ${plan.popular ? "bg-blue-500/20 text-blue-400" : "bg-white/10 text-gray-500"}`}>
                                            <Check className="w-3 h-3" />
                                        </div>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
