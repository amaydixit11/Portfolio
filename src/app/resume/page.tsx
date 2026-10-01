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
            2023 - 2027 (Expected) | CGPA: 9.16 (so far)
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
      title: "Polaris Fellow",
      description: "One of 10 fellows, six-month placement at Emergent",
      year: "2026",
    },
    {
      title: "LFX Mentee, OpenSSF",
      description: "Linux Foundation mentorship on Repository Service for TUF",
      year: "2026",
    },
    {
      title: "MOSIP C4GT Intern",
      description: "Selected for three consecutive Code for GovTech cohorts",
      year: "2025",
    },
    {
      title: "FOSSEE Summer Fellow",
      description: "IIT Bombay fellowship for open-source contributions",
      year: "2025",
    },
    {
      title: "OpenLake Coordinator",
      description: "Leading IIT Bhilai's premier open-source club",
      year: "2025",
    },
    {
      title: "Codeforces",
      description: "Rating: 1320+ in competitive programming",
      year: "2024",
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
      project: "MOSIP Inji Certify",
      role: "Contributor, C4GT",
      description: "11 merged PRs, +9,963 / -1,185: VC revocation, mDoc issuance, OpenID4VCI pre-auth flow",
      tech: ["Java", "Spring Boot", "W3C VC", "CBOR/COSE"],
    },
    {
      project: "RSTUF (LFX / OpenSSF)",
      role: "Mentee",
      description: "Role-specific online keys for TUF delegations across worker, API and CLI, in review",
      tech: ["Python", "TUF", "Supply-chain Security"],
    },
    {
      project: "GoFr, Nirmata, sktime/skpro",
      role: "Contributor",
      description: "Supabase driver for GoFr, 7 merged PRs at Nirmata, KernelMixture distribution in skpro",
      tech: ["Go", "Kubernetes", "Python"],
    },
    {
      project: "OpenLake Projects",
      role: "Maintainer",
      description: "Leading multiple community initiatives",
      tech: ["Community", "Mentorship", "Events"],
    },
    {
      project: "Personal Projects",
      role: "Creator",
      description: `${projectsData.stats.publicRepos} public repositories with ${contributionCount}+ contributions`,
      tech: ["Various Tech Stacks"],
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
            href="https://github.com/amaydixit11/amaydixit11/blob/main/CONTRIBUTIONS.md"
            className="text-xs text-blue-500 hover:text-blue-700 flex items-center gap-1"
          >
            Every merged PR, linked <ExternalLink size={10} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Resume: React.FC = () => {
  const resumeProjects = ["Kudos", "ACORDE", "AcadMap", "MetaIndex"]; // Projects to show on resume
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
                  href="mailto:amayd@iitbhilai.ac.in"
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
              Backend and systems engineer in the final year of a B.Tech at IIT
              Bhilai, currently a Software Engineer Intern at Emergent as a
              Polaris Fellow, working on agent infrastructure. 39 merged PRs
              into external open-source projects, including 11 into MOSIP Inji
              Certify across three C4GT cohorts. LFX Mentee at RSTUF (OpenSSF),
              FOSSEE Summer Fellow at IIT Bombay, intern at HSBC Technology
              India, and former OpenLake Coordinator.
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
                if (resumeProjects.includes(project.name))
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
                  href="mailto:amayd@iitbhilai.ac.in"
                  className="text-blue-500"
                >
                  amayd@iitbhilai.ac.in
                </Link>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">
                  Location:
                </span>{" "}
                <span className="text-gray-900 dark:text-gray-100">
                  Durg, India
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
                  href="https://linkedin.com/in/amay-dixit-462113284"
                  className="text-blue-500"
                >
                  @amay-dixit
                </Link>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">
                  X:
                </span>{" "}
                <Link
                  href="https://X.com/AmayDixit11"
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
