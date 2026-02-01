import React from 'react';

const SkillBar = ({ name, level, color }) => {
  // On crée 20 segments pour l'effet "cellule"
  const segments = Array.from({ length: 20 }, (_, i) => i);
  const activeSegments = Math.round((level / 100) * 20);

  return (
    <div className="skill-container" style={{ marginBottom: '25px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontSize: '11px', fontWeight: '900', color: '#3d5d7d', letterSpacing: '1px', textTransform: 'uppercase' }}>
          {name}
        </span>
        <span style={{ fontSize: '10px', fontFamily: 'monospace', color: color }}>
          {level}%
        </span>
      </div>
      
      <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
        {segments.map((seg) => (
          <div
            key={seg}
            style={{
              height: '8px',
              flex: 1,
              backgroundColor: seg < activeSegments ? color : 'rgba(255,255,255,0.05)',
              borderRadius: '2px',
              boxShadow: seg < activeSegments ? `0 0 8px ${color}66` : 'none',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export const SkillsSection = () => (
  <div style={{ marginTop: '20px' }}>
    <div style={{ marginBottom: '35px' }}>
      <h4 style={{ color: '#3b82f6', fontSize: '10px', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '2px' }}>
        // DATA_SCIENCE_&_ML
      </h4>
      <SkillBar name="Python (Pandas, Sklearn)" level={95} color="#3b82f6" />
      <SkillBar name="Deep Learning (PyTorch)" level={85} color="#3b82f6" />
      <SkillBar name="MLOps (MLFlow, CI/CD)" level={75} color="#3b82f6" />
    </div>

    <div>
      <h4 style={{ color: '#10b981', fontSize: '10px', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '2px' }}>
        // ENGINEERING_&_SPORT
      </h4>
      <SkillBar name="MongoDB / NoSQL" level={90} color="#10b981" />
      <SkillBar name="React JS / Web Dev" level={80} color="#10b981" />
      <SkillBar name="Performance Sportive" level={100} color="#10b981" />
    </div>
  </div>
);