import React from 'react';
import { MessageSquare, Star, Award } from 'lucide-react';

interface MatchCardProps {
  match: {
    id: string;
    name: string;
    avatar: string;
    matchScore: number;
    teachingSkills: string[];
    learningSkills: string[];
    rating: number;
    timezone: string;
  };
}

export default function MatchCard({ match }: MatchCardProps) {
  return (
    <div className="glass-card p-6 transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={match.avatar}
          alt={match.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-accent-500/50"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-white truncate">{match.name}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>{match.rating.toFixed(1)}</span>
            <span className="mx-2">•</span>
            <span>{match.timezone}</span>
          </div>
        </div>
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent-500/10 border border-accent-500/20">
          <div className="text-accent-400 font-bold">
            {match.matchScore}%
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="text-sm font-medium text-accent-400 mb-3">Can Teach:</div>
          <div className="flex flex-wrap gap-2">
            {match.teachingSkills.map((skill) => (
              <span
                key={skill}
                className="bg-dark-300/70 px-3 py-1 rounded-lg text-sm text-white border border-gray-700/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-medium text-accent-400 mb-3">Wants to Learn:</div>
          <div className="flex flex-wrap gap-2">
            {match.learningSkills.map((skill) => (
              <span
                key={skill}
                className="bg-dark-300/70 px-3 py-1 rounded-lg text-sm text-white border border-gray-700/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button className="btn-primary w-full justify-center py-2.5 group">
          <MessageSquare className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
          Connect
        </button>
      </div>
    </div>
  );
}