import React from 'react';
import { Users, Brain, Calendar, MessageSquare, Award, Search } from 'lucide-react';

const features = [
  {
    name: 'Smart Matching',
    description: 'AI-powered system connects you with the perfect learning partners based on skills and goals.',
    icon: Brain
  },
  {
    name: 'Skill Marketplace',
    description: 'Browse and search through hundreds of skills across various categories and difficulty levels.',
    icon: Search
  },
  {
    name: 'Learning Management',
    description: 'Schedule sessions, share resources, and track your progress all in one place.',
    icon: Calendar
  },
  {
    name: 'Community Features',
    description: 'Join discussion forums, participate in group sessions, and share success stories.',
    icon: Users
  },
  {
    name: 'Real-time Chat',
    description: 'Connect with peers through integrated messaging and video conferencing.',
    icon: MessageSquare
  },
  {
    name: 'Achievements',
    description: 'Earn badges and certificates as you progress in your learning journey.',
    icon: Award
  }
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-accent-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Everything you need to learn and teach
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            A comprehensive platform designed to make skill exchange seamless and effective.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="glass-card p-6 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-accent-500" />
                  <h3 className="ml-4 text-lg font-medium text-white">{feature.name}</h3>
                </div>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}