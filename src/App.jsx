import React, { useState } from 'react';
import { myProjects } from './data'; 
import { SkillsSection } from './components/SkillsSection';
import ProjectCard from './components/ProjectCard';
import { 
  Layout, FileText, Briefcase, Brain, Activity, 
  Sparkles, Terminal, Target, Users, FileDown,
  Mail, Phone, User, Send 
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('portfolio');

  return (
    <div className="app-wrapper">
      {/* NAVIGATION NAVBAR */}
      <nav className="navbar">
        <div className="logo-section">
          <h1 style={{ margin: 0, fontSize: '22px', color: '#0f172a', fontStyle: 'italic', fontWeight: '900' }}>
            VICTOR <span style={{ color: 'var(--neon-blue)', fontWeight: '300' }}>/</span> SCHOLLER
          </h1>
          <div style={{ fontSize: '12px', color: '#64748b', letterSpacing: '2px', marginTop: '4px', display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
            <Terminal size={12} style={{ marginRight: '6px' }} />
            DATA SCIENTIST / PhD in Sports Science.
          </div>
        </div>

        <div className="nav-buttons">
          <button className={`nav-btn ${activeTab === 'portfolio' ? 'active' : ''}`} onClick={() => setActiveTab('portfolio')}>
            <Briefcase size={14} /> <span>Vision</span>
          </button>
          <button className={`nav-btn ${activeTab === 'mindmap' ? 'active' : ''}`} onClick={() => setActiveTab('mindmap')}>
            <Layout size={14} /> <span>Architecture</span>
          </button>
          <button className={`nav-btn ${activeTab === 'rapport' ? 'active' : ''}`} onClick={() => setActiveTab('rapport')}>
            <FileText size={14} /> <span>Dossier Tech</span>
          </button>
          <button className={`nav-btn ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => setActiveTab('contact')}>
            <Mail size={14} /> <span>Contact</span>
          </button>
        </div>
      </nav>

      <main className="main-container">
        
        {/* CONTENU ONGLET VISION (Réintégré au complet) */}
        {activeTab === 'portfolio' && (
          <div className="bento-grid fade-in">
            <div className="col-8">
              <div className="glass-card vision-card" style={{ position: 'relative', overflow: 'hidden', height: '100%' }}>
                <Brain size={200} style={{ position: 'absolute', right: '-50px', top: '-50px', color: 'rgba(59, 130, 246, 0.03)', transform: 'rotate(-15deg)' }} />
                <h3 style={{ color: 'var(--neon-blue)', fontSize: '11px', letterSpacing: '4px', marginBottom: '20px', fontWeight: '900' }}>
                  <Target size={14} /> POSITIONNEMENT STRATÉGIQUE
                </h3>
                <h2 style={{ fontSize: '42px', margin: '0 0 25px 0', color: '#0f172a', lineHeight: '1.1', fontWeight: '900', fontStyle: 'italic' }}>
                  EXTRAIRE LA <br />
                  <span className="text-gradient">SUBSTANTIELLE MOELLE DE LA DATA</span>
                </h2>
                <div style={{ color: '#475569', fontSize: '17px', lineHeight: '1.6' }}>
                  <p>
                    <strong style={{ color: '#1e40af' }}>"Expert en Sciences du Sport"</strong>, je suis devenu un <strong>Architecte de la Performance</strong>. Mon parcours de PhD m'a appris à poser les bonnes questions ; ma formation de Data Scientist m'a donné les outils pour y répondre de manière objective, industrielle et scalable.
                  </p>
                  <p style={{ marginTop: '15px' }}>
                    Cette rigueur d'ingénierie me permet de transposer ces solutions à tout secteur exigeant : de la précision de l'<strong>imagerie médicale</strong> à l'optimisation des <strong>rendements industriels</strong>.
                  </p>
                  <p style={{ marginTop: '20px', fontSize: '15px', borderLeft: '3px solid var(--neon-blue)', paddingLeft: '15px', fontStyle: 'italic', color: '#64748b' }}>
                    "La performance mesurée ne vaut rien si elle n'est pas interprétée dans son contexte. Ma mission est d'industrialiser l'analyse pour la rendre objective."
                  </p>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="glass-card" style={{ height: '100%' }}>
                <h3 style={{ color: 'var(--neon-emerald)', fontSize: '11px', letterSpacing: '4px', marginBottom: '25px', fontWeight: '900' }}>
                  <Sparkles size={14} /> CORE_CAPABILITIES
                </h3>
                <SkillsSection />
              </div>
            </div>

            <div className="col-12" style={{ marginTop: '20px' }}>
              <div className="glass-card">
                <h3 style={{ color: 'var(--neon-blue)', fontSize: '11px', letterSpacing: '4px', marginBottom: '30px', fontWeight: '900' }}>
                  <Users size={14} /> MA VISION D'UN TRAVAIL BIEN FAIT
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '25px' }}>
                  {[
                    { icon: <Target size={16} color="var(--neon-blue)" />, title: "ANALYSE & RÉSOLUTION", text: "Capacité à livrer des solutions robustes sous contraintes de budgets ou de données manquantes." },
                    { icon: <Sparkles size={16} color="var(--neon-emerald)" />, title: "ADAPTABILITÉ", text: "Polyvalence sectorielle : de l'imagerie médicale au cyclisme pro, en passant par l'agritech." },
                    { icon: <Brain size={16} color="var(--neon-blue)" />, title: "VULGARISATION", text: "Traduire des indicateurs complexes en conseils exploitables directement pour le métier." },
                    { icon: <Activity size={16} color="var(--neon-emerald)" />, title: "HUMILITÉ SCIENTIFIQUE", text: "Interprétation rigoureuse des résultats avec une analyse lucide des métriques d'évaluation." }
                  ].map((asset, i) => (
                    <div key={i} style={{ padding: '20px', borderRadius: '20px', background: '#f8fafc', border: '1px solid #f1f5f9' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1e293b', fontWeight: '800', marginBottom: '10px', fontSize: '13px', textTransform: 'uppercase' }}>
                        {asset.icon} {asset.title}
                      </div>
                      <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>{asset.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONTENU ONGLET ARCHITECTURE */}
        {activeTab === 'mindmap' && (
          <div className="fade-in">
             <h2 style={{ fontSize: '42px', color: '#0f172a', fontStyle: 'italic', fontWeight: '900', margin: '0 0 30px 0' }}>
               MENTAL <span className="text-gradient">MAP</span>
             </h2>
             <div className="mindmap-container" style={{ background: '#f1f5f9', borderRadius: '32px', padding: '20px', border: '1px solid #e2e8f0' }}>
               <img src="/Carte_Mentale.jpg" alt="Architecture" className="mindmap-image" style={{ width: '100%', borderRadius: '12px' }} />
             </div>
          </div>
        )}

        {/* CONTENU ONGLET DOSSIER TECH (Réintégré) */}
        {activeTab === 'rapport' && (
          <div className="fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <h2 style={{ fontSize: '42px', color: '#0f172a', fontStyle: 'italic', fontWeight: '900', margin: 0 }}>
                  DOSSIERS <span className="text-gradient">TECHNIQUES</span>
                </h2>
                <p style={{ color: '#64748b', fontSize: '18px', marginTop: '10px' }}>
                  Méthodologie employée, de l'audit jusqu'à l'appui stratégique.
                </p>
              </div>
              <a href="/Portfolio_OC.pdf" download="Portfolio_Victor_Scholler.pdf" className="nav-btn active" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 28px', textDecoration: 'none' }}>
                <FileDown size={18} /> TÉLÉCHARGER LE DOSSIER (PDF)
              </a>
            </div>
            <div className="projects-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {myProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* NOUVEAU CONTENU : CONTACT */}
        {activeTab === 'contact' && (
          <div className="fade-in">
            <h2 style={{ fontSize: '42px', color: '#0f172a', fontStyle: 'italic', fontWeight: '900', margin: '0 0 30px 0' }}>
              PRENDRE <span className="text-gradient">CONTACT</span>
            </h2>
            <div className="bento-grid">
              <div className="col-4">
                <div className="glass-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ padding: '12px', background: '#f1f5f9', borderRadius: '12px', color: 'var(--neon-blue)' }}><User size={20} /></div>
                    <div>
                      <p style={{ margin: 0, fontSize: '11px', fontWeight: '900', color: '#94a3b8' }}>NOM</p>
                      <p style={{ margin: 0, fontWeight: '700', color: '#1e293b' }}>SCHOLLER Victor</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ padding: '12px', background: '#f1f5f9', borderRadius: '12px', color: 'var(--neon-blue)' }}><Mail size={20} /></div>
                    <div>
                      <p style={{ margin: 0, fontSize: '11px', fontWeight: '900', color: '#94a3b8' }}>EMAIL</p>
                      <a href="mailto:victor.scholler@orange.fr" style={{ fontWeight: '700', color: '#1e293b', textDecoration: 'none' }}>victor.scholler@orange.fr</a>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ padding: '12px', background: '#f1f5f9', borderRadius: '12px', color: 'var(--neon-blue)' }}><Phone size={20} /></div>
                    <div>
                      <p style={{ margin: 0, fontSize: '11px', fontWeight: '900', color: '#94a3b8' }}>TÉLÉPHONE</p>
                      <p style={{ margin: 0, fontWeight: '700', color: '#1e293b' }}>06 81 89 92 52</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="glass-card" style={{ height: '100%', background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
                  <h3 style={{ marginTop: 0, color: '#0f172a' }}>Envoyer un message</h3>
                  <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '30px' }}>
                    Vous avez un projet de Data Science ou une question sur mon parcours ? 
                    N'hésitez pas à me contacter via votre messagerie habituelle.
                  </p>
                  <a 
                    href="mailto:victor.scholler@orange.fr?subject=Contact depuis le Portfolio"
                    className="nav-btn active"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '18px 35px', textDecoration: 'none', borderRadius: '16px' }}
                  >
                    <Send size={18} /> OUVRIR MA BOÎTE MAIL
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;