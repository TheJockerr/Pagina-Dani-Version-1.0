// src/components/dashboard/WelcomeHero/WelcomeHero.tsx
import { useEffect, useState } from 'react';
import { daniela } from '../../../data/daniela';
import { evaluaciones } from '../../../data/evaluaciones';
import { getFechaHoy, getSubtituloSaludo } from '../../../utils/fechas';
import { useTimeOfDay } from '../../../hooks/useTimeOfDay';
import styles from './WelcomeHero.module.css';

export function WelcomeHero() {
  const theme = useTimeOfDay();
  const [fecha, setFecha] = useState('');
  const [subtitulo, setSubtitulo] = useState('');

  useEffect(() => {
    setFecha(getFechaHoy());
    const proxima = evaluaciones.find(e => !e.completada && e.tipo === 'prueba') || null;
    const nextPrueba = proxima ? { titulo: proxima.titulo, fecha: proxima.fecha } : null;
    setSubtitulo(getSubtituloSaludo(nextPrueba));
  }, []);

  return (
    <div className={styles.hero}>
      <h1 className={styles.saludo}>
        {theme.greeting}, <span className={styles.saludoName}>{daniela.nombre}</span>.
      </h1>
      <p className={styles.subtitulo}>{subtitulo}</p>
      <div className={styles.meta}>
        <span>{theme.emoji} {fecha}</span>
        <span className={styles.dot} />
        <span>Semestre {daniela.semestre}</span>
        <span className={styles.dot} />
        <span>{daniela.universidad}</span>
      </div>
    </div>
  );
}

export default WelcomeHero;
