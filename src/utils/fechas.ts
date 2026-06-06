// src/utils/fechas.ts
import { format, formatDistanceToNow, differenceInDays, parseISO } from 'date-fns';

import { es } from 'date-fns/locale';

export function formatFechaLarga(dateStr: string): string {
  return format(parseISO(dateStr), "EEEE, d 'de' MMMM 'de' yyyy", { locale: es });
}

export function formatFechaCorta(dateStr: string): string {
  return format(parseISO(dateStr), "d MMM", { locale: es });
}

export function diasHasta(dateStr: string): number {
  return differenceInDays(parseISO(dateStr), new Date());
}

export function diasHastaLabel(dateStr: string): string {
  const dias = diasHasta(dateStr);
  if (dias < 0) return 'Pasada';
  if (dias === 0) return 'Hoy';
  if (dias === 1) return 'Mañana';
  if (dias <= 7) return `En ${dias} días`;
  return formatFechaCorta(dateStr);
}

export function getSaludo(): string {
  const hora = new Date().getHours();
  if (hora < 12) return 'Buenos días';
  if (hora < 19) return 'Buenas tardes';
  return 'Buenas noches';
}

export function getFechaHoy(): string {
  return format(new Date(), "EEEE, d 'de' MMMM 'de' yyyy", { locale: es });
}

export function getSubtituloSaludo(proximaPrueba: { titulo: string; fecha: string } | null): string {
  if (proximaPrueba) {
    const dias = diasHasta(proximaPrueba.fecha);
    if (dias <= 3) return `Tienes una prueba en ${dias} días. ¿Repasamos?`;
    if (dias <= 7) return `La prueba de ${proximaPrueba.titulo.split('—')[0].trim()} está cerca.`;
  }
  const hora = new Date().getHours();
  if (hora < 12) return '¿Continuamos con Distribuciones de Probabilidad?';
  if (hora < 19) return 'Un buen momento para repasar flashcards.';
  return 'Las noches son buenas para repasar fórmulas.';
}

export function formatTiempoRelativo(dateStr: string): string {
  return formatDistanceToNow(parseISO(dateStr), { addSuffix: true, locale: es });
}

export function esFechaReciente(dateStr: string, dias = 7): boolean {
  return Math.abs(differenceInDays(parseISO(dateStr), new Date())) <= dias;
}
