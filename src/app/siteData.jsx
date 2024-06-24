import { TbBrandShopee } from "react-icons/tb";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { PiStrategy } from "react-icons/pi";
import helen from "@/images/helen.jpg";
import sashnee from "@/images/sashnee.jpg";
import rochelle from "@/images/rochelle.jpg";

export const people = [
  {
    name: `Helen Hulett`,
    role: `The Ecologist and Strategist`,
    bio: `As the intellectual powerhouse behind Waterstrider’s solutions, Helen Hulett brings over two decades of unmatched expertise in industrial water stewardship and security. Helen's visionary leadership has seen her partner with major industrial players in Africa to bolster water security. As a former Executive Director at a leading water engineering firm, she orchestrated the development of innovative strategies and one of the world's only digital platforms designed to optimize industrial water use. A recognized authority in strategic industrial water management, Helen’s global influence is underscored by her roles as a subject matter expert at Bluefield Research and a strategic partner at Anthesis, where she devises water stewardship strategies for some of the world’s largest companies.`,
    image: helen,
  },
  {
    name: `Sashnee Kistan`,
    role: `The Engineer and Data Scientist`,
    bio: `Sashnee is the technical dynamo at Waterstrider, where her dual expertise as a mechanical engineer and data scientist drives the operational and analytical capabilities of the platform. With a robust background in designing water treatment and recovery plants, Sashnee’s engineering acumen is complemented by her advanced data science training from MIT. Her recent role as Global Markets Lead Analyst at Quantium demonstrates her ability to provide key insights to top global brands, ensuring Waterstrider’s solutions are both innovative and highly effective.`,
    image: sashnee,
  },
  {
    name: `Rochelle Mountany`,
    role: `The Psychologist and Business Leader`,
    bio: `Rochelle Mountany is the market-facing force of Waterstrider, expertly guiding the company’s business and technology strategies across global markets. With a 20-year track record that spans significant roles at Microsoft and as CIO of AXA ICAS International, Rochelle’s strategic initiatives have consistently driven growth and expansion, particularly in the African and Asia Pacific regions. Her unique perspective as a Clinical and Neuro Psychologist, combined with an MBA, enables her to adeptly navigate the complex interplay between technology, business, and user engagement, making Waterstrider’s solutions resonate on a global scale.`,
    image: rochelle,
  },
];

export const services = [
  {
    name: "Brands",
    features: [
      {
        title: "Supply Chain Water Footprinting & Analytics",
        desc: "Gain a comprehensive understanding of which commodities and products within your supply chain pose the highest water-related risks. Use advanced analytics to prioritize areas needing immediate attention.",
      },
      {
        title: "Supply Chain Engagement",
        desc: "Streamline the collection and analysis of data to enhance your supply chain mapping and strategy implementation. Utilize these data-driven insights to engage with key suppliers, manage risks, and achieve your water management targets more effectively.",
      },
      {
        title: "Supply Chain Programs",
        desc: "Develop and optimize collaborative strategies with your supply chains to reduce operational risks and minimize the environmental impact of your supply chain activities. Implement initiatives that promote sustainable practices and resilience across the entire supply chain.",
      },
    ],
    icon: <TbBrandShopee className="h-6 w-6 flex-none text-gray-500" />,
  },
  {
    name: "Corporate Head Office",
    features: [
      {
        title:
          "Company-wide Water Risk Profiling and Financial Exposure Analysis",
        desc: `Assess the water risks and financial exposure across your operations. Develop a strategic roadmap to mitigate these risks and enhance financial benefits through targeted initiatives.`,
      },
      {
        title: "Water Stewardship Program Implementation",
        desc: `Ensure alignment of all operations with the Group’s water stewardship program. Seamlessly implement, monitor, and report on progress and targets, integrating with your existing ESG data tools.`,
      },
      {
        title: "Water Stewardship Project Management Tool",
        desc: `Keep all operations informed and compliant with required tasks, ensuring targets are met and progress is effectively tracked.`,
      },
      {
        title: "Comprehensive Water Stewardship Reporting",
        desc: `Consolidate data for corporate reporting requirements, including CDP, CSRD, AWS, and SPTN standards. Save time while maintaining high-quality, auditable reporting.`,
      },
    ],
    icon: (
      <HiOutlineOfficeBuilding className="h-6 w-6 flex-none text-gray-500" />
    ),
  },
  {
    name: "Operation",
    features: [
      {
        title: "Real-time Water Volume and Quality Monitoring ",
        desc: `Develop a live water balance for your operations, providing continuous insights into water consumption and quality impacts.`,
      },
      {
        title: "Product Safety and Quality Monitoring ",
        desc: `Ensure product safety with live monitoring of incoming and treated water streams, maintaining high-quality standards.`,
      },
      {
        title: "Continuous Compliance Monitoring ",
        desc: `Stay ahead of compliance requirements with live monitoring. Receive immediate reports on any non-compliance issues, with detailed information on their sources.`,
      },
      {
        title: "Demand Side Management and Optimization ",
        desc: ` Improve water efficiency, reduce leakages and wastage, and maintain water quality across processes. Optimize water reuse, decrease demand, and reduce treatment needs.`,
      },
      {
        title: "Water Recovery Optimization ",
        desc: `Maintain water quality to ensure maximum water recovery, thereby reducing overall demand and improving efficiency.`,
      },
      {
        title: "In-depth Operational Water Risk Profiling",
        desc: `Understand the drivers, timing, and financial impact of operational water risks, allowing for better risk management and planning.`,
      },
      {
        title: "Water Strategy Optimization",
        desc: `Evaluate potential initiatives to reduce risk exposure, considering cost-benefit dynamics and identifying the optimal timing for implementation.`,
      },
      {
        title: "Internal Water Pricing ",
        desc: `Incorporate financial water risk exposure into a $/kl water price. This approach facilitates effective capital investment decisions, ensuring timely and appropriate investments.`,
      },
    ],
    icon: <PiStrategy className="h-6 w-6 flex-none text-gray-500" />,
  },
];
