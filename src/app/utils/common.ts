export const headerBtnList = [
  { name: "Home", href: "/", target: "_self" },
  { name: "About Us", href: "/aboutUs", target: "_self" },
  {},
  {
    name: "Docs",
    href: "https://docs.enreach.network",
    target: "_blank",
  },
  {
    name: "Sign In",
    // href: "http://dashboard.enreach.network",
    target: "_blank",
  },
];

export const showCaseList = [
  {
    title: "P2P CDN",
    content: "Real-time delivery of internet content, static & dynamic.",
    icon: "IconTeam",
  },
  {
    title: "AI Agent Hosting",
    content: "Decentralized hosting, with secure & verifiable executions.",
    icon: "IconEfficiency",
  },
  {
    title: "Media Streaming",
    content: "Immersice content. Live media. Near-zero latency fulfilled.",
    icon: "IconStack",
  },
  // {
  //   title: "Cloud Gaming",
  //   content: "Games hosted by EnReach nodes, scalable with player demand.",
  //   icon: "IconMatch",
  // },
  // {
  //   title: "Autonomous Systems",
  //   content:
  //     "Supporting auto-drive vehicles and IoT devices with edge resilience.",
  //   icon: "IconReliability",
  // },
];

export const openEdgeList = [
  {
    title: "Openness for the Infinite Edge",
  },
  {
    title: "Open Protocol ",
    subTitle: "Connecting Edge Nodes",
    content:
      "A decentralized protocol enabling robust data storage and transmission functions through a vast network of connected edge nodes. ",
    icon: "IconProtocol",
    gif: "./box1.gif",
  },
  {
    title: "Open Platform",
    subTitle: "Enabling Edge Intelligence",
    content:
      "A complete cloud enabling AI model/computation functions deployment, execution, and context data management across the network. ",
    icon: "IconCloud",
    gif: "./box2.gif",
  },
  {
    title: "Open App Ecosystem",
    subTitle: "Forstering Edge Innovation",
    content:
      "An open ecosystem fostering innovation, incentivizing application growth, and guided by community-driven governance.",
    gif: "./box3.gif",
    icon: "IconEcosystem",
  },
];

export const list = [
  { name: "Media Kit", link: "https://enreach.network/Enreach Media kit.zip" },
  {
    name: "Privacy Policy",
    link: "privacy",
  },
  {
    name: "Terms & Conditions",
    link: "terms",
  },
];

export const doingItList = [
  {
    title: "Leveraging Blockchain for Distributed Efficiency",
    contnet: `We utilize blockchain to enable decentralized coordination and transparency across edge nodes, ensuring optimal resource allocation, data security, and seamless scalability.`,
  },
  {
    title: "Establishing a Complete Edge Intelligence Tech Stack",
    contnet: `Our comprehensive stack standardizes resources, orchestrates workflows, and provides developer-friendly tools, supporting the entire lifecycle of edge and AI applications from creation to scaling.`,
  },
  {
    title: "Building the Core Competency of Smart Orchestration",
    contnet: `We develop state-of-the-art technologies to sense, optimize, and schedule heterogeneous, massive-scale resources. This enables precise orchestration tailored to complex, real-world demands.`,
  },
  {
    title: "Providing Industry-Ready Solutions",
    contnet:
      "Leveraging our robust infrastructure, we deliver practical and scalable solutions tailored to real-world industries, enabling meaningful adoption and bridging the gap between Web3 technology and industry applications.",
  },
];

export const fabricList = [
  {
    title: "Application Layer",
    icon: "./application.svg",
    moIcon: "./mo-applicaiton.svg",
    content:
      "Provide developer SDKs and user interfaces that expose the network’s capabilities, allowing for easy development, deployment, management, and scaling of edge applications and AI solutions.",
  },
  {
    title: "Orchestration Layer",
    icon: "./open.svg",
    default: "./default-open.svg",
    moIcon: "./mo-orchestration.svg",
    content:
      "Coordinate network consensus, data, computation flows, and task management across nodes to meet the dynamic demands of edge computing, data transmission & processing with high precision and reliability.",
  },
  {
    title: "Resource Layer",
    icon: "./resource.svg",
    default: " default-resource.svg",
    moIcon: "./mo-resource.svg",
    content:
      "Standardize, virtualize, and containerize heterogeneous node resources to create a scalable, flexible digital infrastructure that can be verified, quantified, and optimized for efficient utilization.",
  },
];

export const titleList = [
  { title: "Real-time" },
  { title: "Cost-effective" },
  { title: "Verifiable" },
];
export const baseUrl = "https://email.enreach.network";

// export const getCurrentCategorie = (
//   currentNames: ArticleInfo.Post | ArticleInfo.Post[],
//   categoriesArr: ArticleInfo.Category[]
// ) => {
//   const result = (
//     currentNames && Array.isArray(currentNames) ? currentNames : [currentNames]
//   ).map((item) => {
//     const { categories = [] } = item;
//     item

//     if (categories && categories.length > 0) {
//       const validCategories = categories
//         .filter((categoryId) => categoryId !== 1)
//         .map((categoryId) => {
//           const matchedCategory = categoriesArr.find(
//             (category) => category.id === categoryId
//           );
//           return matchedCategory ? matchedCategory.name : null;
//         })
//         .filter(Boolean);

//       return {
//         ...item,
//         names: validCategories,
//       };
//     }

//     return item;
//   });

//   return result;
// };

export const convertDate = (date?: Date) => {
  if (!date) return "";
  const result = new Date(date);
  const year = result.getFullYear();
  const month = String(result.getMonth() + 1).padStart(2, "0");
  const day = String(result.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const getCurrentArticleTags = (data?: ArticleInfo.Post) => {
  if (!data) return [];
  const tags = data.tags;
  const terms = data._embedded["wp:term"].flat();

  return terms
    .filter((term) => tags.includes(term.id))
    .map((term) => {
      return { name: term.name, id: term.id };
    });
};
