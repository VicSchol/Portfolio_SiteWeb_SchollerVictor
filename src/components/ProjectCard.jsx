import React, { useState } from 'react';
import { 
  ChevronDown, Target, Search, Cpu, BarChart3, 
  Rocket, Brain, Zap, Sprout, FlaskConical, Activity 
} from 'lucide-react';

// Map the string names from data.js to Lucide Components
const iconMap = {
  FlaskConical: FlaskConical,
  Sprout: Sprout,
  Activity: Activity,
  Zap: Zap
};

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Select the icon based on project data, fallback to Zap
  const ProjectIcon = iconMap[project.iconName] || Zap;

  const steps = [
    { label: "1. Besoins & Contexte", text: project.details.needs, icon: Target, color: "#3b82f6" },
    { label: "2. Audit Data", text: project.details.audit, icon: Search, color: "#f59e0b" },
    { label: "3. Solution Technique", text: project.details.solution, icon: Cpu, color: "#10b981" },
    { label: "4. Appui Stratégique", text: project.details.strategy, icon: BarChart3, color: "#8b5cf6" },
  ];

  const formatText = (text) => {
    if (!text) return "";
    return text.split('**').map((part, i) => 
      i % 2 === 1 ? <strong key={i} style={{ color: '#0f172a' }}>{part}</strong> : part
    );
  };

  return (
    <div style={{ 
      background: isOpen ? 'white' : 'rgba(255, 255, 255, 0.6)',
      borderRadius: '24px',
      border: '1px solid #e2e8f0',
      marginBottom: '20px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      boxShadow: isOpen ? '0 20px 40px rgba(0,0,0,0.05)' : 'none'
    }}>
      {/* HEADER SECTION */}
      <div 
        style={{ padding: '30px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ 
            padding: '15px', 
            background: isOpen ? 'var(--neon-blue, #3b82f6)' : '#f1f5f9', 
            color: isOpen ? 'white' : '#3b82f6', 
            borderRadius: '16px',
            transition: 'all 0.3s ease'
          }}>
             <ProjectIcon size={24} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '900', color: '#0f172a', textTransform: 'uppercase', fontStyle: 'italic' }}>
              {project.title}
            </h3>
            <p style={{ margin: 0, fontSize: '11px', color: '#64748b', fontWeight: 'bold', letterSpacing: '2px' }}>
              {project.subtitle}
            </p>
          </div>
        </div>
        <ChevronDown style={{ 
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', 
          transition: '0.4s ease', 
          color: '#cbd5e1' 
        }} />
      </div>

      {/* EXPANDABLE CONTENT */}
      {isOpen && (
        <div style={{ padding: '0 30px 30px 30px' }} className="fade-in">
          
          {/* 4-STEP GRID */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '20px', 
            marginBottom: '30px' 
          }}>
            {steps.map((step, i) => (
              <div key={i} style={{ padding: '20px', background: '#f8fafc', borderRadius: '20px', border: '1px solid #f1f5f9' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <step.icon size={16} color={step.color} />
                  <span style={{ fontSize: '11px', fontWeight: '900', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {step.label}
                  </span>
                </div>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                  {formatText(step.text)}
                </p>
              </div>
            ))}
          </div>

          {/* IMPACT & REFLEXION FOOTER */}
          <div style={{ padding: '2px', background: 'linear-gradient(135deg, #3b82f6, #10b981)', borderRadius: '24px' }}>
            <div style={{ 
              background: 'white', 
              borderRadius: '22px', 
              padding: '25px', 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '30px' 
            }}>
              {/* Deliverables / Performance */}
              <div style={{ flex: '1 1 300px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#10b981', marginBottom: '10px' }}>
                  <Rocket size={18} />
                  <span style={{ fontWeight: '900', fontSize: '12px', textTransform: 'uppercase' }}>Impact & Livrables</span>
                </div>
                <p style={{ fontSize: '14px', color: '#334155', fontWeight: '600', margin: 0 }}>
                  {project.details.performance}
                </p>
              </div>

              {/* Reflexive Analysis */}
              <div style={{ 
                flex: '1 1 300px', 
                borderLeft: window.innerWidth > 768 ? '1px solid #f1f5f9' : 'none', 
                paddingLeft: window.innerWidth > 768 ? '20px' : '0' 
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3b82f6', marginBottom: '10px' }}>
                  <Brain size={18} />
                  <span style={{ fontWeight: '900', fontSize: '12px', textTransform: 'uppercase' }}>Analyse Réflexive</span>
                </div>
                <p style={{ fontSize: '13px', color: '#64748b', fontStyle: 'italic', margin: 0 }}>
                  "{project.details.reflexion || "Analyse en cours de rédaction..."}"
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;