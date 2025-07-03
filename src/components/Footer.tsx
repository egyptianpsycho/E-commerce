import {
  ArrowRight,
  ArrowUp,
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  Code,
  DiscIcon,
  Github,
  Globe,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Twitter,
  Users,
  Youtube,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Button from "./UI/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const footerRef = useRef<HTMLElement>(null);
  const backToTopRef = useRef<HTMLButtonElement>(null);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer animation with stagger
      gsap.fromTo(
        ".footer-section",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            end: "bottom 5%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stats counter animation
      gsap.fromTo(
        ".stat-number",
        { textContent: 0 },
        {
          textContent: (_:number, target:Element) => target.getAttribute("data-value"),
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: ".stats-section",
            start: "top 80%",
          },
        }
      );

      // 
      // Back to top button
      if (backToTopRef.current) {
        gsap.set(backToTopRef.current, { scale: 0, opacity: 0 });

        ScrollTrigger.create({
          trigger: document.body,
          start: 0,
          end: "bottom bottom",
          onUpdate: () => {
            if (window.scrollY > 300) {
              gsap.to(backToTopRef.current, { scale: 1, opacity: 1, duration: 0.3 })
            } else {
              gsap.to(backToTopRef.current, { scale: 0, opacity: 0, duration: 0.3 })
            }
          }
        })
      }

      gsap.to(".floating-element", {
        y: -15,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <button
        ref={backToTopRef}
        onClick={scrollToTop}
        className="opacity-0 transform origin-center
 cursor-pointer fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full flex items-center justify-center shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 group"
      >
        <ArrowUp className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
      </button>
      <footer ref={footerRef} className="relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
          <div className="absolute  inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl"></div>
          <div className="floating-element absolute top-40 right-20 w-48 h-48 bg-pink-500/5 rounded-full blur-3xl"></div>
          <div className="floating-element absolute bottom-32 left-1/3 w-24 h-24 bg-blue-500/5 rounded-full blur-xl"></div>
        </div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
            {/* Top Section - Brand & Newsletter */}
            <div className="footer-section grid sm:grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Brand Section */}
              <div className="space-y-8">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Sparkles className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-lg opacity-50"></div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      ReactMentoring
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Empowering React Developers
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed w-96 sm:max-w-md">
                  Join thousands of developers who have accelerated their React
                  journey through personalized mentoring sessions with industry
                  experts.
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-sm:w-xs">
                  <div className="flex items-center space-x-3 p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 ">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300 text-sm">100% Secure</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300 text-sm">24/7 Support</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300 text-sm">Certified</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <Globe className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300 text-sm">Global Access</span>
                  </div>
                </div>
              </div>

              {/* Newsletter Section */}
              <div className="space-y-6 max-sm:w-fit">
                <div className="text-center lg:text-left ">
                  <h4 className="text-2xl font-bold text-white mb-3 text-center">
                    Stay Ahead of the Curve
                  </h4>
                  <p className="text-gray-300 mb-6 max-sm:w-80 max-sm:mx-auto">
                    Get exclusive React tips, early access to new sessions, and
                    special discounts delivered to your inbox.
                  </p>
                </div>

                <form onSubmit={handleSubscribe} className="space-y-4 ">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className=" max-sm:w-fit relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-1 group-hover:border-white/30 transition-all duration-300">
                      <div className=" flex items-center  ">
                        <Mail className="w-5 h-5 text-purple-400 ml-4" />
                        <input
                          type="email"
                          placeholder="Enter your email address..."
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="sm:flex-1 bg-transparent text-white placeholder-gray-400 border-0 outline-none px-4 py-4 md:text-lg sm:text-base text-sm  "
                          required
                        />
                        <Button
                          type="submit"
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 m-1 px-2 py-1 sm:px-4 sm:py-2 cursor-pointer rounded-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base "
                        >
                          {isSubscribed ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2 " />
                              Subscribe
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                  {isSubscribed && (
                    <div className="flex items-center space-x-2 text-green-400 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>
                        Successfully subscribed! Check your email for
                        confirmation.
                      </span>
                    </div>
                  )}
                </form>

                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>Join 50,000+ developers</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>4.9/5 rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="footer-section stats-section mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center group">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  <div
                    className="stat-number text-3xl font-bold text-white mb-2"
                    data-value="15000"
                  >
                    0
                  </div>
                  <div className="text-gray-400 text-sm">Students Mentored</div>
                  <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-black/75  border mt-2 bg-green-500/20 text-green-300 border-green-500/30">
                    +2.5k this month
                  </div>
                </div>

                <div className="text-center group">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  <div
                    className="stat-number text-3xl font-bold text-white mb-2"
                    data-value="75"
                  >
                    0
                  </div>
                  <div className="text-gray-400 text-sm">Expert Mentors</div>
                  <div className="mt-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-black/75  border bg-blue-500/20 text-blue-300 border-blue-500/30">
                    Top 1% developers
                  </div>
                </div>

                <div className="text-center group">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  <div
                    className="stat-number text-3xl font-bold text-white mb-2"
                    data-value="350"
                  >
                    0
                  </div>
                  <div className="text-gray-400 text-sm">
                    Sessions Available
                  </div>
                  <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-black/75  border mt-2 bg-purple-500/20 text-purple-300 border-purple-500/30">
                    All skill levels
                  </div>
                </div>

                <div className="text-center group">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  <div
                    className="stat-number text-3xl font-bold text-white mb-2"
                    data-value="98"
                  >
                    0
                  </div>
                  <div className="text-gray-400 text-sm">Success Rate</div>
                  <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-black/75  border mt-2 bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                    Industry leading
                  </div>
                </div>
              </div>
            </div>

            {/* Links Section */}
            <div className="footer-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-purple-400" />
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: "Home", href: "/" },
                    { name: "Browse Sessions", href: "/sessions" },
                    { name: "About Us", href: "/mission" },
                    { name: "Become a Mentor", href: "/" },
                    { name: "Success Stories", href: "/" },
                    { name: "Pricing", href: "/pricing" },
                  ].map((link) => (
                    <li key={link.name}>
                      <Button
                        to={link.href}
                        className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:translate-x-2 inline-flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {link.name}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-purple-400" />
                  Categories
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: "React Fundamentals", count: "45 sessions" },
                    { name: "Advanced Patterns", count: "32 sessions" },
                    { name: "State Management", count: "28 sessions" },
                    { name: "Performance", count: "22 sessions" },
                    { name: "Testing", count: "18 sessions" },
                    { name: "TypeScript", count: "15 sessions" },
                  ].map((category) => (
                    <li key={category.name}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:translate-x-2 inline-flex items-center justify-between w-full group"
                      >
                        <span className="flex items-center">
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          {category.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {category.count}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-purple-400" />
                  Support
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: "Help Center", href: "/" },
                    { name: "Contact Us", href: "/" },
                    { name: "FAQ", href: "/" },
                    { name: "Community", href: "/" },
                    { name: "Documentation", href: "/" },
                    { name: "Status", href: "/" },
                  ].map((link) => (
                    <li key={link.name}>
                      <Button
                        to={link.href}
                        className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:translate-x-2 inline-flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {link.name}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-purple-400" />
                  Contact
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-purple-400 mt-0.5" />
                    <div>
                      <div className="text-gray-300 text-sm">Email</div>
                      <div className="text-white font-medium">
                        tt933825@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-purple-400 mt-0.5" />
                    <div>
                      <div className="text-gray-300 text-sm">Phone</div>
                      <div className="text-white font-medium">
                        +20 1013 670 303
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-purple-400 mt-0.5" />
                    <div>
                      <div className="text-gray-300 text-sm">Location</div>
                      <div className="text-white font-medium">
                        San Francisco, CA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="footer-section text-center mb-12">
              <h4 className="text-xl font-semibold text-white mb-6">
                Connect With Our Community
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
              {[
                  {
                    icon: Github,
                    href: "#",
                    color: "hover:bg-gray-700",
                    name: "GitHub",
                  },
                  {
                    icon: Twitter,
                    href: "#",
                    color: "hover:bg-blue-500",
                    name: "Twitter",
                  },
                  {
                    icon: Linkedin,
                    href: "#",
                    color: "hover:bg-blue-600",
                    name: "LinkedIn",
                  },
                  {
                    icon: Youtube,
                    href: "#",
                    color: "hover:bg-red-600",
                    name: "YouTube",
                  },
                  {
                    icon: Instagram,
                    href: "#",
                    color: "hover:bg-pink-500",
                    name: "Instagram",
                  },
                  {
                    icon: DiscIcon,
                    href: "#",
                    color: "hover:bg-indigo-500",
                    name: "Discord",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`group relative w-12 h-12 bg-white/10 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  >
                    <social.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {social.name}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-section border-t border-white/10 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center space-x-2 text-gray-400">
                  <span>© 2025 Ziad Abbas. Made with</span>
                  <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                  <span>for the React community.</span>
                </div>

                <div className="flex flex-wrap items-center justify-center space-x-6 text-sm">
                  {[
                    "Privacy Policy",
                    "Terms of Service",
                    "Cookie Policy",
                    "Security",
                    "Accessibility",
                  ].map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:underline"
                    >
                      {link}
                    </a>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-black/75  border bg-green-500/20 text-green-300 border-green-500/30">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    All systems operational
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
