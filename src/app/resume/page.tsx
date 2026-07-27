"use client";

import React from "react";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import {
  Download,
  ExternalLink,
  Award,
  BookOpen,
  Users,
} from "lucide-react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import TechnicalSkillsWidget from "@/components/resume/TechnicalSkillsWidget";

// Education Widget
const EducationWidget: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
        <BookOpen size={18} />
        Education
      </h3>
      <div className="space-y-4">
        {/* College */}
        <div>
          <h4 className="font-medium text-gray-900 dark:text-gray-100">
            Indian Institute of Technology, Bhilai
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            B.Tech in Data Science & Artificial Intelligence
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            2023 - 2027 (Expected) | CGPA: 9.18 (so far)
          </p>
          <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
            <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Relevant Coursework
            </h5>
            <div className="flex flex-wrap gap-1">
              {[
                "Data Structures",
                "Algorithms",
                "Database Systems",
                "Machine Learning",
                "System Design",
                "Computer Networks",
              ].map((course, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 12th School */}
        <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-medium text-gray-900 dark:text-gray-100">
            St. Gregorios School
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Higher Secondary (12th) | PCM + CS
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            2023 | Marks: 96%
          </p>
        </div>

        {/* 10th School */}
        <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-medium text-gray-900 dark:text-gray-100">
            St. Gregorios School
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Secondary (10th)
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            2021 | Marks: 98%
          </p>
        </div>
      </div>
    </div>
  );
};

// Achievements Widget
const AchievementsWidget: React.FC = () => {
  const achievements = [
    {
      title: "LFX Mentee — RSTUF, OpenSSF",
      description: "Linux Foundation LFX Mentorship, supply-chain security",
      year: "2026",
    },
    {
      title: "MOSIP C4GT — 3 Selections",
      description: "Sprint '25, DMP '25 (from 4000+ applicants), Project Intern",
      year: "2025",
    },
    {
      title: "FOSSEE Summer Fellow",
      description: "IIT Bombay fellowship for open-source contributions",
      year: "2025",
    },
    {
      title: "OpenLake Coordinator",
      description: "Led IIT Bhilai's open-source club for a year",
      year: "2025-26",
    },
    {
      title: "Captain, AWS Cloud Club",
      description: "Leading the AWS Cloud Club chapter at IIT Bhilai",
      year: "2025-26",
    },
    {
      title: "Winner, Trustathon",
      description: "Hackathon by the de.ci.phe.red lab",
      year: "2025",
    },
    {
      title: "Speaker, DPG Dialogues '25",
      description: "Spoke on contributing to digital public goods",
      year: "2025",
    },
    {
      title: "Codeforces Specialist",
      description: "Peak rating 1432 in competitive programming",
      year: "2025",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
        <Award size={18} />
        Achievements
      </h3>
      <div className="space-y-3">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="pb-3 border-b border-gray-100 dark:border-gray-800 last:border-b-0"
          >
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                {achievement.title}
              </h4>
              <span className="text-xs text-gray-500 dark:text-gray-500">
                {achievement.year}
              </span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Open Source Contributions Widget
const OpenSourceWidget: React.FC = () => {
  const contributionCount = projectsData.stats.contributions;

  const contributions = [
    {
      project: "RSTUF / TUF Metadata Visualizer",
      role: "LFX Mentee",
      description: "Merged PRs: API proxy bridge, health checks, K8s/Helm integration",
      tech: ["TUF", "Kubernetes", "Supply Chain Security"],
    },
    {
      project: "MOSIP Inji Certify",
      role: "Contributor",
      description: "Merged PRs: mDoc issuance, VC revocation & OpenID4VCI pre-auth flow",
      tech: ["Spring Boot", "W3C Standards", "Cryptography"],
    },
    {
      project: "sktime / skpro",
      role: "Contributor",
      description: "Added KernelMixture distribution; fixed GLM estimator bug",
      tech: ["Python", "Statistics"],
    },
    {
      project: "OpenLake Projects",
      role: "Maintainer",
      description: `CI/CD workflows across org repos; ${contributionCount}+ contributions overall`,
      tech: ["Community", "Mentorship", "GitHub Actions"],
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
        <Users size={18} />
        Open Source
      </h3>
      <div className="space-y-4">
        {contributions.map((contrib, index) => (
          <div
            key={index}
            className="pb-3 border-b border-gray-100 dark:border-gray-800 last:border-b-0"
          >
            <div className="mb-2">
              <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                {contrib.project}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {contrib.role}
              </p>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
              {contrib.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {contrib.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs px-1 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
        <div className="pt-2">
          <Link
            href="https://github.com/amaydixit11"
            className="text-xs text-blue-500 hover:text-blue-700 flex items-center gap-1"
          >
            View GitHub Profile <ExternalLink size={10} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Resume: React.FC = () => {
  const allowedIndexes = [1, 2, 4, 6]; // ACORDE, BitTorrent Client, AcadMap, HalfLife
  return (
    <div className="py-8 min-h-screen mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content - Left Side */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  Resume
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
                  Backend Engineer · System Designer · Open Source Enthusiast
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  B.Tech in Data Science & Artificial Intelligence @ IIT Bhilai · Available for
                  opportunities
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-md hover:shadow-lg"
                  download
                >
                  <Download size={16} />
                  Download PDF
                </Link>
                <Link
                  href="mailto:amaydixit11@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium shadow-md hover:shadow-lg"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Professional Summary
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Backend and distributed-systems developer, currently an LFX
              Mentee at RSTUF (OpenSSF, The Linux Foundation) working on
              software supply-chain security. Previously spent a year building
              verifiable-credential infrastructure at MOSIP across three C4GT
              selections, and a summer at FOSSEE, IIT Bombay. Pre-final year
              B.Tech in Data Science &amp; AI at IIT Bhilai (CGPA 9.18), where I
              coordinated OpenLake, the open-source club, and captain the AWS
              Cloud Club.
            </p>
          </div>

          {/* Experience Timeline */}
          <ExperienceTimeline />

          {/* Key Projects */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {projectsData["projects"].map((project, index) => {
                if (allowedIndexes.includes(index))
                  return (
                    <div
                      key={index}
                      className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-800/50"
                    >
                      <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
              })}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <Link
                href="/projects"
                className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
              >
                View all projects <ExternalLink size={12} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Widgets */}
        <div className="space-y-6">
          <EducationWidget />
          <TechnicalSkillsWidget />
          <AchievementsWidget />
          <OpenSourceWidget />

          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Contact Information
            </h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-gray-600 dark:text-gray-400">Email:</span>{" "}
                <Link
                  href="mailto:amaydixit11@gmail.com"
                  className="text-blue-500"
                >
                  amaydixit11@gmail.com
                </Link>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">
                  Location:
                </span>{" "}
                <span className="text-gray-900 dark:text-gray-100">
                  Bhilai, India
                </span>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">
                  GitHub:
                </span>{" "}
                <Link
                  href="https://github.com/amaydixit11"
                  className="text-blue-500"
                >
                  @amaydixit11
                </Link>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">
                  LinkedIn:
                </span>{" "}
                <Link
                  href="https://linkedin.com/in/amaydixit11"
                  className="text-blue-500"
                >
                  @amaydixit11
                </Link>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">
                  X:
                </span>{" "}
                <Link
                  href="https://x.com/AmayDixit11"
                  className="text-blue-500"
                >
                  @AmayDixit11
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
