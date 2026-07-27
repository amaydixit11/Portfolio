import React from "react";
import Image from "next/image";

interface Role {
  title: string;
  period: string;
  description: string;
}

interface TimelineItem {
  organization: string;
  roles: Role[];
  logoUrl?: string;
}

const experienceData: TimelineItem[] = [
  {
    organization: "RSTUF · OpenSSF, The Linux Foundation",
    roles: [
      {
        title: "LFX Mentee",
        period: "May, 2026 - August, 2026",
        description:
          "Selected for the Linux Foundation's LFX Mentorship Program through OpenSSF. Working on Repository Service for TUF (RSTUF): implementing custom signing-key support and delegation for secure software distribution, containerizing the TUF Metadata Visualizer and integrating it into Kubernetes-based RSTUF deployments with Helm, and expanding test coverage and documentation.",
      },
    ],
    logoUrl: "https://avatars.githubusercontent.com/repository-service-tuf",
  },
  {
    organization: "MOSIP via C4GT",
    roles: [
      {
        title: "Project Intern",
        period: "October, 2025 - February, 2026",
        description:
          "Implemented OpenID4VCI Pre-Authorized Code Flow in MOSIP Inji Certify, enabling seamless issuance of Verifiable Credentials without real-time authentication. Developed credential offer generation, pre-authorized code validation, token exchange workflows, multiple authorization server support, metadata discovery, caching, and OID4VCI-compliant credential issuance APIs.",
      },
      {
        title: "Summer Intern, C4GT DMP'25",
        period: "June, 2025 - September, 2025",
        description:
          "Worked on MOSIP Inji Stack, enabling Inji Certify to issue Verifiable Credentials (VCs) in the mDoc (ISO/IEC 18013-5) format. Implemented data element and namespace mapping, digest calculation, Mobile Security Object (MSO) construction, CBOR encoding, and OpenID4VCI integration for standards-compliant credential issuance.",
      },
      {
        title: "Project Intern, C4GT Sprint'25",
        period: "March, 2025 - May, 2025",
        description:
          "Implemented a Revocation Mechanism for Verifiable Credentials compliant with W3C Verifiable Credentials Data Model 2.0 and BitString StatusList v1.0. Developed APIs for credential status updates, cryptographic proofs, and decentralized revocation workflows.",
      },
    ],
    logoUrl: "https://avatars.githubusercontent.com/u/39733477?s=280&v=4",
  },
  {
    organization: "AWS Cloud Club, IIT Bhilai",
    roles: [
      {
        title: "Captain",
        period: "April, 2025 - April, 2026",
        description:
          "Leading the AWS Cloud Club chapter at IIT Bhilai — running cloud-computing workshops, hands-on AWS sessions, and community events to get students building on cloud infrastructure.",
      },
    ],
    logoUrl: "https://avatars.githubusercontent.com/aws",
  },
  {
    organization: "OpenLake Club, IIT Bhilai",
    roles: [
      {
        title: "Coordinator",
        period: "April, 2025 - April, 2026",
        description:
          "Leading IIT Bhilai's open-source community by defining technical roadmaps, mentoring contributors, organizing workshops and hackathons, and driving collaborative software projects across the institute.",
      },
      {
        title: "Core Member",
        period: "April, 2024 - March, 2025",
        description:
          "Contributed to open-source projects, organized technical events, mentored junior members, and helped expand participation in the institute's developer ecosystem.",
      },
    ],
    logoUrl: "https://avatars.githubusercontent.com/u/61535687?s=280&v=4",
  },
  {
    organization: "OSDAG, IIT Bombay",
    roles: [
      {
        title: "FOSSEE Summer Fellow",
        period: "May, 2025 - July, 2025",
        description:
          "Selected for the FOSSEE Summer Fellowship at IIT Bombay. Contributed full-stack work (React, Django) to Osdag, an open-source structural steel design platform — profiled and reworked API data flow, cutting redundant data transfer by ~40%.",
      },
    ],
    logoUrl: "https://avatars.githubusercontent.com/u/19796505?v=4",
  },
];

export const ExperienceTimeline: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-8">
        Experience
      </h2>

      <div className="relative">
        {/* Main vertical line - positioned to align with company logos */}
        <div className="absolute left-6 top-0 bottom-0 w-0.25 bg-gray-200 dark:bg-gray-700" />

        <div className="space-y-12">
          {experienceData.map((company, companyIndex) => (
            <div key={companyIndex} className="relative">
              <div className="flex gap-6">
                {/* Company logo with proper positioning */}
                <div className="relative z-10 flex-shrink-0">
                  <Image
                    src={company.logoUrl || "/placeholder.png"}
                    alt={`${company.organization} logo`}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded object-cover border-2 border-gray-200 dark:border-gray-700 bg-white"
                  />
                </div>

                {/* Company content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {company.organization}
                  </h3>

                  {/* Roles container with proper bounds */}
                  <div className="space-y-6">
                    {company.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className="relative">
                        <div className="pl-6">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                            <h4 className="font-medium text-gray-900 dark:text-white pr-4">
                              {role.title}
                            </h4>
                            <span className="text-sm font-medium text-gray-500 flex-shrink-0">
                              {role.period}
                            </span>
                          </div>

                          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                            {role.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
