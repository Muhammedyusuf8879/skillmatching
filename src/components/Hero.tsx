import React from 'react';
import { ArrowRight, Users, Book, Star } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-dark-200 pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-500/10 to-dark-200/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <span className="block text-white">Share Your Skills.</span>
            <span className="block gradient-text">Learn from Others.</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Join the peer-to-peer learning revolution. Exchange skills, grow together, and build a community of lifelong learners.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <button className="btn-primary w-full flex items-center justify-center px-8 py-3 text-base md:py-4 md:text-lg md:px-10">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="glass-card p-6 text-center transform hover:scale-105 transition-transform">
            <div className="flex justify-center">
              <Users className="h-10 w-10 text-accent-500" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">10k+ Active Users</h3>
          </div>
          <div className="glass-card p-6 text-center transform hover:scale-105 transition-transform">
            <div className="flex justify-center">
              <Book className="h-10 w-10 text-accent-500" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">500+ Skills</h3>
          </div>
          <div className="glass-card p-6 text-center transform hover:scale-105 transition-transform">
            <div className="flex justify-center">
              <Star className="h-10 w-10 text-accent-500" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">4.9/5 Rating</h3>
          </div>
        </div>
      </div>
    </div>
  );
}