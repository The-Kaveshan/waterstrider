function DeviceUserIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
        fill="#A3A3A3"
      />
    </svg>
  );
}

function DeviceNotificationIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#A3A3A3"
      />
      <path
        d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
        fill="#737373"
      />
    </svg>
  );
}

function DeviceTouchIcon(props) {
  let id = "test";

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={14}
          y1={14.5}
          x2={7}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#D4D4D4" stopOpacity={0} />
        </linearGradient>
      </defs>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
        fill="#A3A3A3"
      />
      <path
        d="M7 22c0-4.694 3.5-8 8-8"
        stroke={`url(#${id}-gradient)`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
        fill="#A3A3A3"
      />
    </svg>
  );
}
export const features = [
  {
    name: "Brands",
    items: [
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
    icon: DeviceUserIcon,
  },
  {
    name: "Corporate Head Office",
    items: [
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
    icon: DeviceNotificationIcon,
  },
  {
    name: "Operation",
    items: [
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
    icon: DeviceTouchIcon,
  },
];
