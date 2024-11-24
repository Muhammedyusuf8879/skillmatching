import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <div className="bg-gradient-to-r from-accent-600 via-purple-600 to-accent-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to start learning?</span>
          <span className="block text-gray-100 opacity-90">Join SkillSwap today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-accent-600 bg-white hover:bg-gray-50 transition-colors">
              Get started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}