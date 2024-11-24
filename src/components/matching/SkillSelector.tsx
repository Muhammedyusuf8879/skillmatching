import React from 'react';
import { Plus, X } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

interface SkillSelectorProps {
  title: string;
  skills: Skill[];
  onAddSkill: (skill: Skill) => void;
  onRemoveSkill: (skillId: string) => void;
}

export default function SkillSelector({ title, skills, onAddSkill, onRemoveSkill }: SkillSelectorProps) {
  const [newSkill, setNewSkill] = React.useState('');
  const [skillLevel, setSkillLevel] = React.useState<'Beginner' | 'Intermediate' | 'Advanced'>('Beginner');

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill.trim()) {
      onAddSkill({
        id: Date.now().toString(),
        name: newSkill.trim(),
        level: skillLevel
      });
      setNewSkill('');
    }
  };

  return (
    <div className="glass-card p-8">
      <h3 className="text-xl font-semibold text-white mb-6">{title}</h3>
      
      <form onSubmit={handleAddSkill} className="space-y-6">
        <div className="space-y-4">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="input-field"
            placeholder="Enter a skill..."
          />
          <select
            value={skillLevel}
            onChange={(e) => setSkillLevel(e.target.value as any)}
            className="select-field w-full"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn-primary w-full justify-center py-2.5"
          disabled={!newSkill.trim()}
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Skill
        </button>
      </form>

      {skills.length > 0 && (
        <div className="mt-8">
          <div className="text-sm font-medium text-gray-400 mb-4">Added Skills:</div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div key={skill.id} className="skill-tag group">
                <span className="text-white">{skill.name}</span>
                <span className="text-xs text-accent-400">({skill.level})</span>
                <button
                  onClick={() => onRemoveSkill(skill.id)}
                  className="text-gray-400 hover:text-white transition-colors ml-1"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}