// src/components/dashboard/StudyToday/StudyToday.tsx
import { useNavigate } from 'react-router-dom';
import { HelpCircle, FileText, FileQuestion, ChevronRight } from 'lucide-react';
import styles from './StudyToday.module.css';

export function StudyToday() {
  const navigate = useNavigate();

  const suggestions = [
    {
      id: 'sug-fc',
      title: 'Repasar Flashcards de Hoy',
      desc: '17 tarjetas listas para revisión espaciada (SRS)',
      icon: <HelpCircle size={18} />,
      iconClass: styles.iconFC,
      action: () => navigate('/ramos/adc?tab=flashcards'),
    },
    {
      id: 'sug-read',
      title: 'Lectura: Sesión 1 - Introducción a la Estadística',
      desc: 'Unidad 1 · 20 min de lectura estimada',
      icon: <FileText size={18} />,
      iconClass: styles.iconPDF,
      action: () => navigate('/ramos/adc/pdf/mat_adc_u1_s1'),
    },
    {
      id: 'sug-quiz',
      title: 'Autoevaluación Unidad 1',
      desc: 'Prueba tu conocimiento en conceptos básicos y descriptiva',
      icon: <FileQuestion size={18} />,
      iconClass: styles.iconQuiz,
      action: () => navigate('/ramos/adc?tab=quizzes'),
    },
  ];

  return (
    <div className={styles.panel} id="study-today-panel">
      <h3 className={styles.title}>Para Estudiar Hoy</h3>
      <div className={styles.list}>
        {suggestions.map((sug) => (
          <div
            key={sug.id}
            className={styles.suggestion}
            onClick={sug.action}
          >
            <div className={[styles.iconWrapper, sug.iconClass].join(' ')}>
              {sug.icon}
            </div>
            <div className={styles.info}>
              <span className={styles.sugTitle}>{sug.title}</span>
              <span className={styles.sugDesc}>{sug.desc}</span>
            </div>
            <ChevronRight size={16} className={styles.arrow} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudyToday;
