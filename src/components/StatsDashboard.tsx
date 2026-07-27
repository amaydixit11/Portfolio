import React from 'react';
import {
  Code2,
  GitBranch,
  TrendingUp,
  BookOpen,
} from 'lucide-react';
import { getAllPosts } from '@/lib/blog';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  subtitle?: string;
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, subtitle, color = 'text-primary' }) => (
  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
    <div className="flex items-start justify-between mb-4">
      <div className={`p-3 rounded-lg bg-gray-50 dark:bg-gray-800 ${color}`}>
        {icon}
      </div>
      {subtitle && (
        <span className="text-xs text-gray-500 dark:text-gray-500 flex items-center gap-1">
          <TrendingUp size={12} />
          {subtitle}
        </span>
      )}
    </div>
    <div className="space-y-1">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
        {value}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {label}
      </p>
    </div>
  </div>
);

export const StatsDashboard: React.FC = () => {
  const postCount = getAllPosts().length;

  const stats = [
    {
      icon: <GitBranch size={24} />,
      label: 'Internship Selections',
      value: '5',
      subtitle: 'LFX · MOSIP ×3 · FOSSEE',
      color: 'text-purple-600',
    },
    {
      icon: <Code2 size={24} />,
      label: 'Codeforces Rating',
      value: '1432',
      subtitle: 'Specialist',
      color: 'text-green-600',
    },
    {
      icon: <BookOpen size={24} />,
      label: 'Blog Posts Published',
      value: String(postCount),
      subtitle: 'More coming',
      color: 'text-indigo-600',
    },
    {
      icon: <TrendingUp size={24} />,
      label: 'CGPA',
      value: '9.18',
      subtitle: 'IIT Bhilai',
      color: 'text-teal-600',
    },
  ];

  return (
    <section className="py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Stats & Impact
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            A snapshot of where things stand right now
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
              subtitle={stat.subtitle}
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
