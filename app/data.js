const industries = [
    {
      id: "family-law",
      title: "Family Law",
      img: "/family.jpg",
      description:
        "Providing legal support for family-related matters, including divorce, custody, and inheritance issues.",
      services: [
        {
          title: "Divorce and Legal Separation",
          description:
            "Navigating the complexities of divorce, we provide skilled representation to address property division, " +
            "spousal support, and custody arrangements, ensuring clients’ rights are protected.",
        },
        {
          title: "Child Custody and Support",
          description:
            "We assist clients in creating custody and visitation agreements that prioritize the child’s best " +
            "interests while ensuring fair and sustainable child support arrangements.",
        },
        {
          title: "Adoption Services",
          description:
            "Our team guides families through the adoption process, handling all legal aspects to ensure a smooth " +
            "and joyful transition for parents and children.",
        },
        {
          title: "Prenuptial and Postnuptial Agreements",
          description:
            "We draft and negotiate agreements that protect clients' assets and clarify " +
            "financial arrangements, providing peace of mind for both parties.",
        },
      ],
    },
    {
        id: "real-estate-law",
        title: "Real Estate Law",
        img: '/real-estate.jpg',
        description:
          "Handling property transactions, leasing agreements, and land disputes.",
        services: [
          {
            title: "Property Transactions",
            description:
              "Our attorneys assist clients in navigating the intricacies of buying or selling real estate. From drafting and reviewing purchase agreements to conducting due diligence, we ensure a smooth and legally sound transaction.",
          },
          {
            title: "Contract drafting and negotiation",
            description:
              "Crafting solid and fair contracts is crucial in real estate transactions. We specialize in drafting and negotiating contracts that protect our clients' interests, addressing terms such as price, contingencies, and timelines.",
          },
          {
            title: "Closing services",
            description:
              "Our firm oversees the closing process, coordinating with all parties involved, ensuring documents are properly executed, and facilitating a smooth transfer of ownership. We strive to make the closing experience efficient and stress-free for our clients.",
          },
          {
            title: "Real estate financing",
            description:
              "For clients seeking financing options, we provide guidance on mortgage agreements, refinancing, and other financial aspects of real estate transactions. Our goal is to secure favorable terms that align with our clients' needs.",
          },
          {
            title: "Lease agreements and landlord-tenant matters",
            description:
              "Whether you are a landlord or tenant, we assist in drafting and negotiating lease agreements that protect your rights. In the event of disputes, we provide legal counsel and representation to resolve issues efficiently.",
          },
          {
            title: "Property development and zoning",
            description:
              "Our team is well-versed in zoning laws and regulations. We provide guidance to property developers, ensuring compliance with zoning requirements and navigating the complexities of land use planning.",
          },
          {
            title: "Real estate litigation",
            description:
              "In cases of disputes or legal challenges related to real estate, our litigation team is prepared to provide vigorous representation. This includes matters such as boundary disputes, breach of contract, and other real estate litigation issues.",
          },
          {
            title: "Condominium and homeowners' association matters",
            description:
              "We offer legal counsel on matters related to condominium and homeowners' associations, including governance, dispute resolution, and compliance with association bylaws.",
          },
          {
            title: "Real estate investment strategies",
            description:
              "For clients looking to invest in real estate, our attorneys provide strategic advice on investment structures, financing options, and risk mitigation, helping clients make informed and profitable decisions."+
  
              "Our real estate transaction services are designed to meet the diverse needs of our clients. We are committed to delivering exceptional legal representation with a focus on efficiency, transparency, and client satisfaction.",
          },
        ],
      },
    {
      id: "litigation",
      title: "Litigation",
      img: "/litigation.jpg",
      description:
        "Representing clients in civil and commercial disputes, including mediation and arbitration.",
      services: [
        {
          title: "Civil Litigation",
          description:
            "We represent clients in civil disputes, ensuring their rights are upheld in negotiations, mediations, and court trials.",
        },
        {
          title: "Commercial Disputes",
          description:
            "Providing legal support for businesses in contract disputes, financial claims, and other business-related conflicts.",
        },
        {
          title: "Alternative Dispute Resolution (ADR)",
          description:
            "We offer mediation and arbitration services to resolve disputes efficiently, avoiding lengthy court proceedings.",
        },
        {
          title: "Personal Injury Claims",
          description:
            "Our team helps individuals seek compensation for injuries caused by negligence, workplace accidents, and medical malpractice.",
        },
      ],
    },
    {
      id: "employment-law",
      title: "Employment Law",
      img: "/employment.jpg",
      description:
        "Assisting with employment contracts, labor disputes, and workplace policies.",
      services: [
        {
          title: "Employment Contracts",
          description:
            "We draft and review employment contracts to ensure clarity and compliance with labor laws.",
        },
        {
          title: "Workplace Discrimination & Harassment",
          description:
            "Providing legal support to employees facing workplace discrimination or harassment claims.",
        },
        {
          title: "Wrongful Termination",
          description:
            "Representing employees in cases of unfair dismissal and negotiating severance agreements.",
        },
        {
          title: "Employee Benefits & Compensation",
          description:
            "Advising businesses on wage laws, employee benefits, and compensation policies.",
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      img: "/intelligent.jpg",
      description:
        "Protecting intellectual property rights, including trademarks, copyrights, and patents.",
      services: [
        {
          title: "Trademark Registration",
          description:
            "Assisting businesses in registering, protecting, and enforcing their trademarks.",
        },
        {
          title: "Copyright Protection",
          description:
            "Helping artists, authors, and businesses secure their creative works from unauthorized use.",
        },
        {
          title: "Patent Applications",
          description:
            "Guiding inventors through the process of patent registration and protection.",
        },
        {
          title: "Intellectual Property Disputes",
          description:
            "Representing clients in cases of IP infringement, licensing conflicts, and ownership disputes.",
        },
      ],
    },
    {
      id: "commercial-law",
      title: "Commercial Law",
      img: "/commercial.jpg",
      description:
        "Advising on commercial contracts, trade regulations, and business disputes.",
      services: [
        {
          title: "Business Contracts & Agreements",
          description:
            "Drafting and reviewing contracts to ensure compliance with legal and commercial standards.",
        },
        {
          title: "Consumer Protection Laws",
          description:
            "Advising businesses on fair trading practices, advertising laws, and consumer rights.",
        },
        {
          title: "Banking & Finance Law",
          description:
            "Providing legal guidance on loans, debt recovery, and financial transactions.",
        },
        {
          title: "International Trade Law",
          description:
            "Helping businesses navigate the complexities of cross-border trade, import/export regulations, and international contracts.",
        },
      ],
    },
    {
      id: "corporate-law",
      title: "Corporate Law",
      img: "/corporate.jpg",
      description:
        "Advising businesses on legal matters, including mergers and acquisitions, corporate governance, and compliance.",
      services: [
        {
          title: "Business Formation",
          description:
            "We assist startups and corporations in choosing the right business structure and handling all legal formalities.",
        },
        {
          title: "Contract Drafting & Review",
          description:
            "Our team drafts and reviews contracts, ensuring legal protection and clarity for business agreements.",
        },
        {
          title: "Mergers and Acquisitions",
          description:
            "We handle business mergers, acquisitions, and restructuring while ensuring legal compliance and due diligence.",
        },
        {
          title: "Corporate Governance",
          description:
            "We provide guidance on corporate policies, shareholder agreements, and regulatory compliance to help businesses operate smoothly.",
        },
      ],
    },
  ];
  
  export default industries;
  