import React from 'react';
import { Brain, Sparkles } from 'lucide-react';
import SkillSelector from './SkillSelector';
import MatchCard from './MatchCard';

interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

// Mock data for demonstration
const MOCK_MATCHES = [
  {
    id: '1',
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    matchScore: 95,
    teachingSkills: ['UI Design', 'Figma', 'User Research'],
    learningSkills: ['JavaScript', 'React', 'TypeScript'],
    rating: 4.9,
    timezone: 'GMT+8'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    matchScore: 88,
    teachingSkills: ['Python', 'Data Science', 'Machine Learning'],
    learningSkills: ['Public Speaking', 'Business Strategy'],
    rating: 4.7,
    timezone: 'GMT-5'
  },
  {
    id: '3',
    name: 'Emma Wilson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    matchScore: 82,
    teachingSkills: ['Digital Marketing', 'SEO', 'Content Strategy'],
    learningSkills: ['Graphic Design', 'Adobe Photoshop'],
    rating: 4.8,
    timezone: 'GMT+1'
  }
];

export default function SmartMatching() {
  const [teachingSkills, setTeachingSkills] = React.useState<Skill[]>([]);
  const [learningSkills, setLearningSkills] = React.useState<Skill[]>([]);
  const [matches, setMatches] = React.useState(MOCK_MATCHES);

  const handleAddTeachingSkill = (skill: Skill) => {
    setTeachingSkills([...teachingSkills, skill]);
  };

  const handleRemoveTeachingSkill = (skillId: string) => {
    setTeachingSkills(teachingSkills.filter(skill => skill.id !== skillId));
  };

  const handleAddLearningSkill = (skill: Skill) => {
    setLearningSkills([...learningSkills, skill]);
  };

  const handleRemoveLearningSkill = (skillId: string) => {
    setLearningSkills(learningSkills.filter(skill => skill.id !== skillId));
  };

  return (
    <div className="py-24 bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-accent-500/10 rounded-2xl mb-6">
            <Brain className="h-12 w-12 text-accent-500" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">Smart Matching System</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our AI-powered matching system connects you with the perfect learning partners
            based on your skills and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <SkillSelector
            title="Skills You Can Teach"
            skills={teachingSkills}
            onAddSkill={handleAddTeachingSkill}
            onRemoveSkill={handleRemoveTeachingSkill}
          />
          <SkillSelector
            title="Skills You Want to Learn"
            skills={learningSkills}
            onAddSkill={handleAddLearningSkill}
            onRemoveSkill={handleRemoveLearningSkill}
          />
        </div>

        {matches.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="h-6 w-6 text-accent-500" />
              <h3 className="text-2xl font-semibold text-white">Your Best Matches</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {matches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}