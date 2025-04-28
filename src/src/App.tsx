import { Authenticated, Unauthenticated } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { Toaster } from "sonner";
import { useState } from "react";
import { useMutation } from "convex/react";
import { toast } from "sonner";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm p-4 border-b">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Process Design Consulting</h1>
          <div className="flex gap-6">
            <button onClick={() => setActiveSection("home")} className={`${activeSection === "home" ? "text-blue-600" : "text-gray-600"} hover:text-blue-600`}>Home</button>
            <button onClick={() => setActiveSection("expertise")} className={`${activeSection === "expertise" ? "text-blue-600" : "text-gray-600"} hover:text-blue-600`}>Expertise</button>
            <button onClick={() => setActiveSection("about")} className={`${activeSection === "about" ? "text-blue-600" : "text-gray-600"} hover:text-blue-600`}>About</button>
            <button onClick={() => setActiveSection("contact")} className={`${activeSection === "contact" ? "text-blue-600" : "text-gray-600"} hover:text-blue-600`}>Contact</button>
          </div>
          <SignOutButton />
        </nav>
      </header>

      <main className="flex-1">
        {activeSection === "home" && <HomeSection />}
        {activeSection === "expertise" && <ExpertiseSection />}
        {activeSection === "about" && <AboutSection />}
        {activeSection === "contact" && <ContactSection />}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

function HomeSection() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto py-24 px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business Processes
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Expert process redesign and optimization from Big 4 consulting experience. 
            Specializing in Food & Beverage, Supply Chain, Product Lifecycle Management, and cross-industry innovation.
          </p>
          <button onClick={() => window.location.href = '#contact'} className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Schedule a Consultation
          </button>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Supply Chain Excellence</h3>
            <p className="text-gray-600">Optimize your supply chain operations for efficiency and resilience</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Enterprise Solutions</h3>
            <p className="text-gray-600">Transform processes across your organization with proven methodologies</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">F&B Industry</h3>
            <p className="text-gray-600">Streamline product development and lifecycle management with industry-specific expertise</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExpertiseSection() {
  const expertise = [
    {
      title: "Process Redesign",
      description: "End-to-end process optimization leveraging Big 4 consulting methodologies",
      icon: "🔄"
    },
    {
      title: "Supply Chain Management",
      description: "Optimize supply chain operations and enhance resilience",
      icon: "🔗"
    },
    {
      title: "PLM Implementation",
      description: "Specialized in Product Lifecycle Management for F&B industry",
      icon: "🏭"
    },
    {
      title: "Operations Strategy",
      description: "Strategic operational improvements across multiple industries",
      icon: "📈"
    },
    {
      title: "Digital Transformation",
      description: "Modern solutions for streamlining business processes",
      icon: "💻"
    }
  ];

  const industries = [
    "Food & Beverage",
    "Supply Chain",
    "Human Services",
    "Manufacturing",
    "Technology Startups",
    "Enterprise Organizations",
    "Professional Services"
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Core Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {expertise.map((item) => (
          <div key={item.title} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mt-12">
        <h3 className="text-2xl font-bold text-center mb-8">Industries Served</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {industries.map((industry) => (
            <div key={industry} className="bg-white p-4 rounded-lg shadow text-center">
              {industry}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <p className="text-lg text-gray-600 mb-6">
            Our team brings extensive experience from Big 4 consulting and various industries, offering unique perspectives 
            to process optimization and business transformation. Our expertise spans from supply chain optimization 
            to enterprise-level process redesign, with particular depth in Food & Beverage industry PLM implementation.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Currently advising companies on process redesign for product development and supply chain optimization in the Food and Beverage 
            sector, we help organizations streamline their operations and achieve sustainable growth through 
            efficient processes and systems.
          </p>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Our Strengths</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Big 4 consulting methodology and best practices</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>End-to-end supply chain optimization expertise</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Cross-industry experience for innovative solutions</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Specialized F&B industry and PLM expertise</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Proven track record in process optimization</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submitContact = useMutation(api.contacts.submit);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitContact(formData);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Let's Discuss Your Needs</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                How can we help?
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your business and what you're looking to achieve"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Process Design Consulting</h3>
            <p className="text-gray-400">
              Expert process redesign and supply chain optimization for businesses of all sizes
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-400">Schedule a consultation to discuss your business needs</p>
            <button onClick={() => window.location.href = '#contact'} className="mt-4 text-blue-400 hover:text-blue-300">
              Contact Now →
            </button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Process Design Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
