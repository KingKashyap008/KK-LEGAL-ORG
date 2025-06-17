import { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Home, Heart, FileText, Gavel, Briefcase, Landmark, Rocket, User, Computer, Scale, Building } from 'lucide-react';

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      title: "Criminal Law",
      icon: <Shield className="w-6 h-6 text-black" />,
      description: "Comprehensive defense across all criminal matters with strategic advocacy.",
      details: "Bail applications (anticipatory/regular), trial representation, appeals, quashing of FIRs, criminal revisions, pre-arrest legal counsel, white-collar crime defense, economic offenses, cybercrime defense, POCSO cases, drug-related offenses, murder and attempt cases."
    },
    {
      title: "Property & Civil Disputes", 
      icon: <Home className="w-6 h-6 text-black" />,
      description: "Expert resolution of property conflicts and civil litigation matters.",
      details: "Title verification, drafting/vetting of sale deeds, partition suits, injunctions, specific performance, recovery suits (money, property), eviction proceedings, property registration disputes, joint development agreements, property tax matters, land acquisition cases."
    },
    {
      title: "Family Law",
      icon: <Heart className="w-6 h-6 text-black" />,
      description: "Sensitive guidance through family legal matters with compassionate advocacy.",
      details: "Divorce petitions (mutual consent/contested), child custody and visitation rights, alimony and maintenance claims, domestic violence cases, adoption proceedings, guardianship matters, matrimonial property disputes, dowry harassment cases, elder abuse protection."
    },
    {
      title: "Debt Recovery",
      icon: <FileText className="w-6 h-6 text-black" />,
      description: "Efficient recovery solutions for outstanding debts and financial disputes.",
      details: "Money recovery suits, cheque bounce cases (Negotiable Instruments Act), insolvency and bankruptcy petitions, civil recovery through legal notices, loan recovery, credit card disputes, corporate debt restructuring, SARFAESI proceedings."
    },
    {
      title: "Arbitration & Mediation",
      icon: <Gavel className="w-6 h-6 text-black" />,
      description: "Alternative dispute resolution for faster, cost-effective settlements.",
      details: "Domestic arbitration (commercial, construction, etc.), international arbitration, court-annexed mediation, private mediation, conciliation services, enforcement of arbitral awards, setting aside arbitral awards, emergency arbitration."
    },
    {
      title: "Intellectual Property Law",
      icon: <Briefcase className="w-6 h-6 text-black" />,
      description: "Protection and enforcement of intellectual property rights and assets.",
      details: "Trademark registration, copyright registration, patent filing, intellectual property infringement litigation, cease and desist notices, trade secret protection, licensing agreements, domain name disputes, geographical indications."
    },
    {
      title: "Environmental Law",
      icon: <Landmark className="w-6 h-6 text-black" />,
      description: "Comprehensive environmental compliance and litigation support.",
      details: "Environmental clearances, pollution control board compliance, environmental impact assessments (EIA) advisory, environmental litigation, waste management compliance, air and water pollution cases, forest clearances, coastal regulation zone matters."
    },
    {
      title: "Startup & Business Advisory",
      icon: <Rocket className="w-6 h-6 text-black" />,
      description: "Legal foundation and growth support for emerging businesses.",
      details: "Company/LLP registration, contract drafting (NDAs, service agreements), legal due diligence, compliance (corporate, labor), fundraising advisory, mergers & acquisitions, blockchain and cryptocurrency legal advisory, fintech compliance, digital asset regulations, smart contract legal frameworks."
    },
    {
      title: "Consumer Protection",
      icon: <User className="w-6 h-6 text-black" />,
      description: "Advocacy for consumer rights and protection against unfair practices.",
      details: "Consumer complaints, unfair trade practices litigation, product liability claims, redressal before consumer forums, e-commerce disputes, service deficiency cases, insurance claim disputes, banking ombudsman matters."
    },
    {
      title: "Cyber Law",
      icon: <Computer className="w-6 h-6 text-black" />,
      description: "Digital age legal protection and cybercrime defense strategies.",
      details: "Cybercrime investigation support, data privacy and protection advisory, online fraud cases, digital defamation litigation, cryptocurrency fraud cases, NFT legal disputes, metaverse legal issues, AI and machine learning compliance, drone regulations, IoT legal frameworks."
    },
    {
      title: "Constitutional Law",
      icon: <Scale className="w-6 h-6 text-black" />,
      description: "Fundamental rights protection and constitutional remedy enforcement.",
      details: "Writ petitions (Habeas Corpus, Mandamus, Prohibition, Quo Warranto, Certiorari), fundamental rights enforcement, judicial review, public interest litigation, constitutional challenges to legislation, election petition matters, right to information cases."
    },
    {
      title: "Real Estate (RERA) Law",
      icon: <Building className="w-6 h-6 text-black" />,
      description: "RERA compliance and real estate dispute resolution expertise.",
      details: "RERA compliance for developers, RERA complaints for homebuyers, legal advisory for real estate projects, dispute resolution under RERA, project registration under RERA, real estate agent registration, possession delays, construction quality issues."
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-6">
            Legal <span className="bg-gold-text bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 font-source max-w-3xl mx-auto">
            Comprehensive legal solutions across diverse practice areas, guiding you from complexity to clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-playfair font-semibold text-black mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 font-source mb-4">
                  {service.description}
                </p>
                
                <button
                  onClick={() => toggleExpanded(index)}
                  className="flex items-center text-gold hover:text-yellow-600 font-source font-medium transition-colors"
                >
                  {expandedService === index ? 'Less Details' : 'More Details'}
                  {expandedService === index ? 
                    <ChevronUp className="ml-2 w-4 h-4" /> : 
                    <ChevronDown className="ml-2 w-4 h-4" />
                  }
                </button>
                
                {expandedService === index && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg animate-fade-in">
                    <p className="text-gray-700 font-source text-sm">
                      {service.details}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
