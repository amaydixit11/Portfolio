"use client";

import React, { useState } from "react";
import { HeatMapGrid } from "@/components/pixels/HeatMapGrid";
import { DataSourceSelector } from "@/components/pixels/DataSourceSelector";
import { dataSourceRegistry } from "@/lib/pixels/dataSourceRegistry";
import {
  Activity,
  TrendingUp,
  Zap,
} from "lucide-react";

const Life = () => {
  const [activeSource, setActiveSource] = useState("github");
  const dataSources = dataSourceRegistry.getAllSources();
  const currentSource = dataSourceRegistry.getSource(activeSource);

  return (
    <div className="py-8 min-h-screen mt-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Life in Pixels
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Visualizing my daily activities and contributions across different
              platforms. Each pixel represents a day of work, learning, and
              growth.
            </p>
          </div>

          {/* Data Source Selector */}
          <DataSourceSelector
            sources={dataSources}
            activeSource={activeSource}
            onSourceChange={setActiveSource}
          />

          {/* Heat Map Display */}
          {currentSource && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {currentSource.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {currentSource.description}
                </p>
              </div>
              <HeatMapGrid dataSource={currentSource} />
            </div>
          )}

          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              About This Visualization
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              These heatmaps are pulled live from the GitHub and Codeforces
              APIs&mdash;real contributions and real submissions, not
              placeholder data. Each cell is one day, and the darker the
              color, the more I got done that day.
            </p>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-6">
          <ConsistencyWidget />
          <PhilosophyCard />
        </div>
      </div>
    </div>
  );
};
// Consistency Widget
const ConsistencyWidget = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Zap size={20} className="text-orange-600 dark:text-orange-400" />
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            Consistency Matters
          </h3>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          The goal isn&apos;t perfection&mdash;it&apos;s showing up. Every
          GitHub commit and every Codeforces submission lands as a pixel here,
          and the streaks add up over time.
        </p>
        <div className="flex items-center gap-2 pt-2">
          <div className="flex-1 bg-orange-200 dark:bg-orange-900 rounded-full h-1.5">
            <div className="bg-orange-500 h-1.5 rounded-full w-3/4 animate-pulse" />
          </div>
          <TrendingUp
            size={16}
            className="text-orange-600 dark:text-orange-400"
          />
        </div>
      </div>
    </div>
  );
};

// Philosophy Card
const PhilosophyCard = () => {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Activity size={20} className="text-green-600 dark:text-green-400" />
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            Why Track?
          </h3>
        </div>

        <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <p>
            <span className="font-medium text-gray-900 dark:text-gray-100">
              Visibility:
            </span>{" "}
            You can&apos;t improve what you can&apos;t see. The grid makes a
            slow week impossible to ignore.
          </p>
          <p>
            <span className="font-medium text-gray-900 dark:text-gray-100">
              Motivation:
            </span>{" "}
            An unbroken run of green squares is surprisingly hard to walk away
            from.
          </p>
          <p>
            <span className="font-medium text-gray-900 dark:text-gray-100">
              Reflection:
            </span>{" "}
            A year of commits and contest submissions in one view shows
            patterns I&apos;d never notice day to day.
          </p>
        </div>

        <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-500 italic">
            &ldquo;Small daily improvements compound into remarkable
            results.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Life;
