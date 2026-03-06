// js/app.jsx
import { getBooks, saveBook, deleteBook, getProgress, getProgressAll, saveProgress, getSettings, saveSettings, getSignets, getSignetsAll, saveSignet, removeSignet } from '/js/db.js';
import { importBookFromDirectory } from '/js/importAPI.js';
import { MUSIC_LIBRARY } from '/js/music_data.js';

const { useState, useEffect, useMemo, useRef, useCallback } = React;

// ── SVG Icon Components ─────────────────────────────────────────────────────
const Icon = {
    ArrowLeft: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
    ),
    ArrowRight: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    ),
    Upload: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
        </svg>
    ),
    List: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
    ),
    Settings: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
    ),
    Bookmark: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
    ),
    BookmarkFilled: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
    ),
    Search: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
    ),
    Sun: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
    ),
    Moon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    ),
    Book: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
    ),
    X: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    ),
    Eye: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
        </svg>
    ),
    Clock: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
    ),
    ChevronUp: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
        </svg>
    ),
    ChevronDown: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
        </svg>
    ),
    Info: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
    ),
    Lock: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    ),
    Mail: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
        </svg>
    ),
    Zap: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
    ),
    User: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
        </svg>
    ),
    Help: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
    ),
    Download: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
        </svg>
    ),
    Shield: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    ),
    Type: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 7 4 4 20 4 20 7" /><line x1="9" y1="20" x2="15" y2="20" /><line x1="12" y1="4" x2="12" y2="20" />
        </svg>
    ),
    Cpu: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="15" x2="23" y2="15" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="15" x2="4" y2="15" />
        </svg>
    ),
    Globe: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    ),
    Mouse: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="7" /><line x1="12" y1="6" x2="12" y2="10" />
        </svg>
    ),
    Music: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
        </svg>
    ),
    Play: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
    ),
    Pause: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" />
        </svg>
    ),
    Repeat: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
    ),
    RepeatOff: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h8" /><polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H9" /><line x1="3" y1="3" x2="21" y2="21" />
        </svg>
    ),
    Square: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        </svg>
    ),
    SkipForward: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 4 15 12 5 20 5 4" /><line x1="19" y1="5" x2="19" y2="19" />
        </svg>
    ),
    Maximize: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
        </svg>
    ),
    Minimize: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
        </svg>
    ),
    Plus: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
        </svg>
    ),
    Headphones: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
    ),
    Mic: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />
        </svg>
    ),
    Image: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
        </svg>
    ),
    Youtube: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
    ),
};

const FUTURE_BOOKS = [
    { id: 'f1', title: "L'Odyssée de l'Énergie", subtitle: "Le Carburant Invisible de l'IA", genre: 'Essai SF', cover: 'covers/cover_odyssee_energie.webp' },
    { id: 'f2', title: "Les Chroniques d'Étheria", subtitle: "Roman d'Heroic Fantasy", genre: 'Fantasy', cover: 'covers/cover_etheria.webp' },
    { id: 'f3', title: 'Scénarios et campagnes pour Nightprowler', subtitle: 'JDR MédFan', genre: 'JDR', cover: 'covers/cover_nightprowler.webp' },
    { id: 'f4', title: 'Recueils de proses et poésies fantasques', subtitle: 'Littérature', genre: 'Poésie', cover: 'covers/cover_proses_poesies.webp' },
    { id: 'f5', title: 'Considérations existentielles', subtitle: 'Réflexions philosophiques', genre: 'Philosophie', cover: 'covers/cover_existentiel.webp' },
    { id: 'f6', title: "Quinte ou Les Harmoniques de l'âme", subtitle: 'Roman', genre: 'Roman', cover: 'covers/cover_quinte.webp' },
    { id: 'f7', title: "L'Autre en moi", subtitle: 'Thriller psychologique', genre: 'Thriller', cover: 'covers/cover_autre_en_moi.webp' },
    { id: 'f8', title: "L'Élu d'Astrakan", subtitle: "Livre dont vous êtes le héros · Fantasy", genre: 'LDVELH', cover: 'covers/cover_astrakan.webp' },
    { id: 'f9', title: '12 Scénarios soirées enquêtes & murder', subtitle: 'Jeu de rôle soirée', genre: 'Jeu', cover: 'covers/cover_murder.webp' },
    { id: 'f10', title: 'Approche de la Neurodiversité', subtitle: "Vision d'un non-professionnel", genre: 'Essai', cover: 'covers/cover_neuro.webp' },
    { id: 'f11', title: 'Essentiels en Mathématiques', subtitle: 'Apprentissage', genre: 'Éducation', cover: 'covers/cover_maths.webp' },
    { id: 'f12', title: 'Essentiels en Physique', subtitle: 'Apprentissage', genre: 'Éducation', cover: 'covers/cover_physique.webp' },
    { id: 'f12b', title: 'Essentiels en Optique', subtitle: 'Apprentissage', genre: 'Éducation', cover: 'covers/cover_optique.webp' },
    { id: 'f13', title: 'Essentiels en Électronique', subtitle: 'Apprentissage', genre: 'Éducation', cover: 'covers/cover_electronique.webp' },
    { id: 'f13b', title: 'Essentiels en Informatique', subtitle: 'Apprentissage', genre: 'Éducation', cover: 'covers/cover_informatique.webp' },
    { id: 'f15', title: 'Algorithm for Love', subtitle: 'Recueil de nouvelles SF', genre: 'Nouvelles', cover: 'covers/cover_algorithm_love.webp' },
    { id: 'f16', title: 'Chroniques de Godefroi', subtitle: 'Livre de règles · JDR Médiéval', genre: 'JDR', cover: 'covers/cover_godefroi.webp' },
    { id: 'f17', title: "Chroniques d'une atrophie programmée", subtitle: 'Roman de Science-Fiction', genre: 'SF', cover: 'covers/cover_atrophie.webp' },
    { id: 'f18', title: 'Nouvelles satiriques alsaciennes', subtitle: 'Humour & terroir alsacien', genre: 'Nouvelles', cover: 'covers/cover_nouvelles_alsaciennes.webp' },
    { id: 'f19', title: "Solutions d'Automatisation par IA", subtitle: 'Guide pratique entreprise', genre: 'Guide', cover: 'covers/cover_automatisation_ia.webp' },
    { id: 'f20', title: "Les Éclats du Corbeau", subtitle: "Livre dont vous êtes le héros · Mystère & Étrange", genre: 'LDVELH', cover: 'covers/cover_eclats_corbeau.webp' },
];




const THEME_KEYS = ['sepia', 'light', 'dark'];
const DEFAULT_BACKGROUND_ANIMATIONS = { sepia: true, light: true, dark: true };
const DEFAULT_SETTINGS = {
    theme: 'dark',
    fontScale: 1.0,
    alignment: 'left',
    focusMode: false,
    contentWidth: 'medium',
    showReadingTime: true,
    showProgressPercent: true,
    backgroundAnimations: DEFAULT_BACKGROUND_ANIMATIONS
};

const normalizeBackgroundAnimations = (value) => ({
    ...DEFAULT_BACKGROUND_ANIMATIONS,
    ...(value || {})
});

function Ambience({ theme, enabledByTheme, inReader = false }) {
    const enabled = normalizeBackgroundAnimations(enabledByTheme)[theme];
    const particles = useMemo(() => {
        const count = theme === 'dark' ? 24 : theme === 'sepia' ? 18 : 16;
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: theme === 'dark' ? 2 + Math.random() * 3 : 2.5 + Math.random() * 4,
            duration: 12 + Math.random() * 20,
            delay: -Math.random() * 20,
            drift: (Math.random() - 0.5) * 40,
            opacity: theme === 'dark' ? 0.3 + Math.random() * 0.4 : theme === 'sepia' ? 0.2 + Math.random() * 0.3 : 0.2 + Math.random() * 0.4
        }));
    }, [theme]);

    if (!enabled) return null;

    return (
        <div className={`ambience-overlay ambience-${theme}${inReader ? ' ambience-reader' : ' ambience-app'}`} aria-hidden="true">
            <div className="ambience-grain" />
            <div className="ambience-gradient" />
            {theme === 'sepia' && <div className="ambience-sepia-wave" />}
            {theme === 'dark' && <div className="ambience-dark-aura" />}
            {theme === 'light' && <div className="ambience-light-haze" />}
            <div className={`ambience-particles ${theme}-particles`}>
                {particles.map(particle => (
                    <span
                        key={particle.id}
                        className={`ambience-particle ${theme}-particle`}
                        style={{
                            '--x': `${particle.x}%`,
                            '--y': `${particle.y}%`,
                            '--size': `${particle.size}px`,
                            '--duration': `${particle.duration}s`,
                            '--delay': `${particle.delay}s`,
                            '--drift': `${particle.drift}px`,
                            '--opacity': particle.opacity
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

// ── App Component ────────────────────────────────────────────────────────────
function App() {
    const [books, setBooks] = useState([]);
    const [currentView, setCurrentView] = useState('library');
    const [activeBookId, setActiveBookId] = useState(null);
    const [settings, setSettingsState] = useState(() => {
        try {
            const saved = localStorage.getItem('hylst_settings');
            if (saved) {
                return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
            }
        } catch (e) {
            console.error("Failed to parse settings from localStorage", e);
        }
        return DEFAULT_SETTINGS;
    });

    useEffect(() => {
        localStorage.setItem('hylst_settings', JSON.stringify(settings));
    }, [settings]);

    const [lastReadSession, setLastReadSession] = useState(null);
    const [showAbout, setShowAbout] = useState(false);
    const [showMusic, setShowMusic] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    // ── Global Audio State ──────────────────────────────────────────────────
    const audioRef = useRef(new Audio());
    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoop, setIsLoop] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else {
            document.exitFullscreen().then(() => setIsFullscreen(false));
        }
    }, []);

    useEffect(() => {
        const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement);
        document.addEventListener('fullscreenchange', handleFsChange);
        return () => document.removeEventListener('fullscreenchange', handleFsChange);
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        audio.loop = isLoop;
    }, [isLoop]);

    useEffect(() => {
        const audio = audioRef.current;
        const handleError = () => {
            setIsPlaying(false);
            setCurrentTrack(null);
        };
        audio.addEventListener('error', handleError);
        return () => audio.removeEventListener('error', handleError);
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        const handleEnded = () => { if (!isLoop) setIsPlaying(false); };
        audio.addEventListener('ended', handleEnded);
        return () => audio.removeEventListener('ended', handleEnded);
    }, [isLoop]);

    // Keep audio alive through orientation change / tab visibility change
    // On iOS, the AudioContext may be suspended when the page is hidden.
    useEffect(() => {
        let wasPlayingBeforeHide = false;
        const handleVisibility = () => {
            if (document.hidden) {
                // Page becoming hidden: remember if we were playing
                wasPlayingBeforeHide = isPlaying;
            } else {
                // Page becoming visible again: resume if we were playing
                if (wasPlayingBeforeHide && currentTrack && audioRef.current) {
                    audioRef.current.play().catch(() => { });
                    setIsPlaying(true);
                }
            }
        };
        document.addEventListener('visibilitychange', handleVisibility);
        return () => document.removeEventListener('visibilitychange', handleVisibility);
    }, [isPlaying, currentTrack]);

    const playTrack = useCallback((track) => {
        if (currentTrack?.id === track.id) {
            if (isPlaying) { audioRef.current.pause(); setIsPlaying(false); }
            else { audioRef.current.play(); setIsPlaying(true); }
            return;
        }
        audioRef.current.src = track.src;
        setCurrentTrack(track);
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }, [currentTrack, isPlaying]);

    const togglePlay = useCallback(() => {
        if (!currentTrack) return;
        if (isPlaying) { audioRef.current.pause(); setIsPlaying(false); }
        else {
            audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
        }
    }, [currentTrack, isPlaying]);

    const stopPlay = useCallback(() => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
        setCurrentTrack(null);
    }, []);

    const toggleLoop = useCallback(() => setIsLoop(v => !v), []);

    useEffect(() => {
        const loadData = async () => {
            const loader = document.querySelector('.initial-loader');
            if (loader) loader.style.display = 'none';

            const savedSettings = await getSettings();
            const merged = {
                ...DEFAULT_SETTINGS,
                ...savedSettings,
                theme: THEME_KEYS.includes(savedSettings?.theme) ? savedSettings.theme : 'sepia',
                backgroundAnimations: normalizeBackgroundAnimations(savedSettings?.backgroundAnimations)
            };
            setSettingsState(merged);

            let localBooks = [];
            try { localBooks = await getBooks(); } catch (e) { console.error(e); }

            try {
                const res = await window.fetch(`public/books.json?t=${Date.now()}`);
                if (res.ok) {
                    const publicBooks = await res.json();
                    const localIds = localBooks.map(b => b.id);
                    for (const pb of publicBooks) {
                        if (!localIds.includes(pb.id)) localBooks.push(pb);
                    }
                }
            } catch (e) { console.error('Could not fetch public/books.json', e); }

            setBooks(localBooks);

            // Find most recent session from SIGNETS instead of auto-saved PROGRESS
            const allSignets = await getSignetsAll();
            let latest = null;
            let latestTime = 0;
            for (const [bid, signetsList] of Object.entries(allSignets)) {
                if (!signetsList || signetsList.length === 0) continue;
                for (const s of signetsList) {
                    if (s.addedAt > latestTime) {
                        latestTime = s.addedAt;
                        const b = localBooks.find(x => x.id === bid);
                        if (b) {
                            latest = {
                                bookId: bid,
                                bookTitle: b.title,
                                chapterIndex: s.chapterIdx || 0,
                                addedAt: s.addedAt
                            };
                        }
                    }
                }
            }
            setLastReadSession(latest);
        };
        loadData();
    }, []);

    const setSettings = useCallback(async (newSettings) => {
        const normalized = {
            ...DEFAULT_SETTINGS,
            ...newSettings,
            theme: THEME_KEYS.includes(newSettings?.theme) ? newSettings.theme : 'sepia',
            backgroundAnimations: normalizeBackgroundAnimations(newSettings?.backgroundAnimations)
        };
        setSettingsState(normalized);
        await saveSettings(normalized);
    }, []);

    // Book CSS variable keys managed by the app
    const BOOK_VAR_KEYS = ['--book-bg', '--book-text', '--book-accent', '--book-accent-dark', '--book-surface', '--book-border', '--book-font-body', '--book-font-heading', '--book-font-title'];

    // Apply global theme + font settings
    // KEY FIX: When switching away from 'sepia', remove inline book vars so [data-theme] wins
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', settings.theme);
        document.documentElement.style.setProperty('--font-size-multiplier', settings.fontScale);
        document.documentElement.style.setProperty('--text-alignment', settings.alignment);
        const widthMap = { small: '640px', medium: '760px', large: '980px' };
        document.documentElement.style.setProperty('--book-content-max', widthMap[settings.contentWidth] || widthMap.medium);
        // Clear book-specific inline vars unless we are in sepia (the book's native palette)
        if (settings.theme !== 'sepia') {
            BOOK_VAR_KEYS.forEach(k => document.documentElement.style.removeProperty(k));
        }
    }, [settings]);

    const activeBook = useMemo(() => books.find(b => b.id === activeBookId), [books, activeBookId]);

    // Apply book-specific CSS variables (only in sepia/default mode)
    useEffect(() => {
        if (settings.theme !== 'sepia') return; // let the theme take over
        if (activeBook?.design?.variables) {
            for (const [k, v] of Object.entries(activeBook.design.variables)) {
                document.documentElement.style.setProperty(k, v);
            }
            const gf = activeBook.design?.fonts?.googleFonts;
            if (gf) {
                const id = 'book-google-fonts';
                let el = document.getElementById(id);
                if (!el) { el = document.createElement('link'); el.id = id; el.rel = 'stylesheet'; document.head.appendChild(el); }
                el.href = `https://fonts.googleapis.com/css2?${gf}&display=swap`;
            }
        } else {
            BOOK_VAR_KEYS.forEach(k => document.documentElement.style.removeProperty(k));
        }
    }, [activeBook, settings.theme]);

    const handleImport = async () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json,.txt,.md,.epub';

        input.onchange = async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const isEpub = file.name.endsWith('.epub');
            const reader = new FileReader();

            reader.onload = async (event) => {
                const content = event.target.result;
                let book = null;

                if (file.name.endsWith('.json')) {
                    try {
                        book = JSON.parse(content);
                        book.isImported = true;
                    } catch (err) {
                        alert("Erreur de lecture du JSON: " + err.message);
                        return;
                    }
                } else if (isEpub) {
                    try {
                        // EPUB parsing using epub.js (CDN)
                        const epub = ePub(content);
                        const metadata = await epub.loaded.metadata;
                        const spine = await epub.loaded.spine;

                        const chapters = [];
                        // spine.items is the array of sections
                        const requestFn = epub.load.bind(epub);
                        for (const item of spine.items) {
                            try {
                                const section = epub.spine.get(item.idref);
                                if (!section) continue;
                                const doc = await section.load(requestFn);
                                const body = doc.querySelector("body");
                                let html = body ? body.innerHTML : "";
                                // Clean up scripts to be safe
                                html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

                                chapters.push({
                                    id: item.idref,
                                    title: section.label || item.idref,
                                    html: html
                                });
                                section.unload();
                            } catch (e) {
                                console.warn(`Could not load section ${item.idref}`, e);
                            }
                        }

                        book = {
                            id: 'epub-' + Date.now(),
                            title: metadata.title || file.name,
                            author: metadata.creator || "Auteur inconnu",
                            year: new Date().getFullYear(),
                            isImported: true,
                            design: { variables: { "--book-font-size": "1.05rem", "--book-line-height": "1.7" } },
                            introHtml: `<h1>${metadata.title || file.name}</h1><p class="dropcap">EPUB importé : ${file.name}</p>`,
                            chapters: chapters.length > 0 ? chapters : [{
                                id: 'ch-error',
                                title: 'Erreur',
                                html: '<p>Impossible d\'extraire les chapitres de cet EPUB.</p>'
                            }]
                        };
                    } catch (err) {
                        alert("Erreur de lecture de l'EPUB: " + err.message);
                        console.error(err);
                        return;
                    }
                } else {
                    // TXT or MD parsing
                    const title = file.name.replace(/\.[^/.]+$/, "").replace(/[_-]/g, " ");
                    book = {
                        id: 'import-' + Date.now(),
                        title: title.charAt(0).toUpperCase() + title.slice(1),
                        author: "Import Local",
                        year: new Date().getFullYear(),
                        isImported: true,
                        design: { variables: { "--book-font-size": "1.05rem", "--book-line-height": "1.8" } },
                        introHtml: `<h1>${title}</h1><p class="dropcap">Fichier importé : ${file.name}</p>`,
                        chapters: [{
                            id: 'ch-1',
                            title: 'Texte complet',
                            html: parseImportedText(content)
                        }]
                    };
                }

                if (book) {
                    await saveBook(book);
                    setBooks(prev => {
                        const idx = prev.findIndex(b => b.id === book.id);
                        if (idx >= 0) { const n = [...prev]; n[idx] = book; return n; }
                        return [...prev, book];
                    });
                    alert(`"${book.title}" a été ajouté à votre bibliothèque !`);
                }
            };

            if (isEpub) {
                reader.readAsArrayBuffer(file);
            } else {
                reader.readAsText(file);
            }
        };
        input.click();
    };

    // Helper to parse TXT/MD to HTML (JS version of the Python logic)
    const parseImportedText = (text) => {
        const lines = text.split(/\r?\n/);
        let html = '';
        let firstPara = true;

        lines.forEach(line => {
            const trimmed = line.trim();
            if (!trimmed) {
                html += '<br/>';
                return;
            }

            let content = trimmed;
            let className = 'chapter-paragraph';

            if (firstPara && trimmed.length > 50) {
                className = 'dropcap';
                firstPara = false;
            }

            // Basic Markdown
            content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            content = content.replace(/\*(.*?)\*/g, '<em>$1</em>');

            if (trimmed.startsWith('# ')) {
                html += `<h1 class="chapter-main-title">${content.replace('# ', '')}</h1>`;
            } else if (trimmed.startsWith('## ')) {
                html += `<h2 class="chapter-subtitle">${content.replace('## ', '')}</h2>`;
            } else {
                html += `<p class="${className}">${content}</p>`;
            }
        });
        return html;
    };

    const handleImportDirectory = async () => {
        if (!window.showDirectoryPicker) {
            alert("L'API File System Access n'est pas supportée par ce navigateur.");
            return;
        }
        try {
            const dirHandle = await window.showDirectoryPicker();
            const book = await importBookFromDirectory(dirHandle);
            await saveBook(book);
            setBooks(prev => {
                const idx = prev.findIndex(b => b.id === book.id);
                if (idx >= 0) { const n = [...prev]; n[idx] = book; return n; }
                return [...prev, book];
            });
        } catch (err) {
            if (err.name !== 'AbortError') alert("Erreur lors de l'import: " + err.message);
        }
    };

    const openBook = (id) => { setActiveBookId(id); setCurrentView('bookHome'); };
    const startReading = () => setCurrentView('reader');
    const resumeReading = (session) => {
        setActiveBookId(session.bookId);
        setCurrentView('reader');
    };
    const goBack = (to = 'library') => setCurrentView(to);

    const renderView = () => {
        if (currentView === 'library') {
            return (
                <LibraryView
                    books={books}
                    onImport={handleImport}
                    onImportDirectory={handleImportDirectory}
                    onOpenBook={openBook}
                    settings={settings}
                    onUpdateSettings={setSettings}
                    lastSession={lastReadSession}
                    onResume={(session) => {
                        saveProgress(session.bookId, session.chapterIndex || 0, 0).then(() => {
                            handleOpenBook(session.bookId);
                        });
                    }}
                    onShowAbout={() => setShowAbout(true)}
                    onShowMusic={() => setShowMusic(true)}
                    onShowSettings={() => setShowSettings(true)}
                    currentTrack={currentTrack}
                    isPlaying={isPlaying}
                    isLoop={isLoop}
                    onTogglePlay={togglePlay}
                    onToggleLoop={toggleLoop}
                    onStop={stopPlay}
                />
            );
        }
        if (currentView === 'bookHome' && activeBook) {
            return (
                <BookHomeView book={activeBook} onBack={() => goBack('library')} onStartReading={startReading} />
            );
        }
        if (currentView === 'reader' && activeBook) {
            return (
                <ReaderView
                    book={activeBook}
                    onBack={() => goBack('bookHome')}
                    settings={settings}
                    onUpdateSettings={setSettings}
                    backgroundAnimations={settings.backgroundAnimations}
                    currentTrack={currentTrack}
                    isPlaying={isPlaying}
                    isLoop={isLoop}
                    onTogglePlay={togglePlay}
                    onToggleLoop={toggleLoop}
                    onShowMusic={() => setShowMusic(true)}
                    onStop={stopPlay}
                    onToggleFullscreen={toggleFullscreen}
                    isFullscreen={isFullscreen}
                />
            );
        }
        return null;
    };

    return (
        <div className={`app-root theme-${settings.theme}`}>
            {currentView !== 'reader' && <Ambience theme={settings.theme} enabledByTheme={settings.backgroundAnimations} />}
            {renderView()}
            {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}
            {showSettings && (
                <GlobalSettingsModal
                    settings={settings}
                    onUpdateSettings={setSettings}
                    onClose={() => setShowSettings(false)}
                />
            )}
            <MusicPlayerModal
                isOpen={showMusic}
                onClose={() => setShowMusic(false)}
                currentTrack={currentTrack}
                isPlaying={isPlaying}
                isLoop={isLoop}
                onPlayTrack={playTrack}
                onTogglePlay={togglePlay}
                onToggleLoop={toggleLoop}
            />
        </div>
    );
}

// ── About Modal ─────────────────────────────────────────────────────────────
function AboutModal({ onClose }) {
    const [activeTab, setActiveTab] = useState('about');

    const tabs = [
        { id: 'about', label: 'À propos', icon: <Icon.Info /> },
        { id: 'features', label: 'Fonctions', icon: <Icon.Zap /> },
        { id: 'creator', label: 'Créateur', icon: <Icon.User /> },
        { id: 'tips', label: 'Astuces', icon: <Icon.Help /> },
    ];

    return (
        <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
            <div className="modal-content about-modal-v2">
                <div className="about-modal-glass-header">
                    <div className="about-modal-topbar">
                        <div className="about-header-title">
                            <div className="about-logo">H</div>
                            <div>
                                <h3>Hylst Books &amp; Reader</h3>
                                <span className="about-version">Version 1.1.28 &middot; 2026</span>
                            </div>
                        </div>
                        <button className="btn btn-ghost btn-icon" onClick={onClose}><Icon.X /></button>
                    </div>
                </div>

                <div className="about-tabs">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`about-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.icon}
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                <div className="about-scroll-content">
                    {activeTab === 'about' && (
                        <div className="about-tab-content animate-fade-in">
                            <p className="about-hero-text">
                                <strong>Hylst Books & Reader</strong> est plus qu'une simple liseuse, c'est un petit havre numérique intimiste pensé pour l'immersion littéraire, graphique et sonore. Un cocon personnalisé façonné avec soin pour s'évader du bruit du web.
                            </p>
                            <div className="about-grid">
                                <div className="about-card">
                                    <Icon.Book />
                                    <h4>La Bibliothèque Légendaire</h4>
                                    <p>Parcourez les écrits de <strong className="highlight-text">Geoffroy Streit</strong> (alias Hylst) : romans ambitieux, nouvelles singulières, poésies mélancoliques, guides techniques et jeux de rôles... Un univers artistique protéiforme, imparfait mais résolument unique, à portée de clic.</p>
                                </div>
                                <div className="about-card">
                                    <Icon.Download />
                                    <h4>Importation Universelle</h4>
                                    <p>Propulsez vos propres récits au cœur de la liseuse ! Importez vos fichiers <code>.EPUB</code>, <code>.TXT</code>, <code>.JSON</code> ou des dossiers d'œuvres complexes. Votre collection vous suit partout, stockée en toute sécurité au sein de votre navigateur.</p>
                                </div>
                                <div className="about-card">
                                    <Icon.Shield />
                                    <h4>Souveraineté Accrue</h4>
                                    <p>Zéro pistage, zéro backend, pas de cloud imposé. Une architecture <strong>"Pure Frontend"</strong> pour préserver votre confidentialité, vous laissant seul maître de vos lectures et de vos données.</p>
                                </div>
                                <div className="about-card">
                                    <Icon.Music />
                                    <h4>Symphonies Immersives</h4>
                                    <p>Plongez dans l'expérience d'une lecture graphique accompagnée de musique ambiante grâce à une musicothèque intégrée de plus de <strong>280 titres</strong> ! La majorité de ces ambiances sonores ont été composées et co-produites (avec l'assistance minutieuse de l'IA par Hylst) pour augmenter les émotions de vos lectures.</p>
                                </div>
                                <div className="about-card">
                                    <Icon.Shield />
                                    <h4>Des améliorations prévues</h4>
                                    <p>- <strong>Personnalisation :</strong> À chaque écrit proposé, une sélection de musiques d'ambiances adéquates, mais aussi un environnement graphique spécifique.<br />- Mes écrits que j'importerai et activerai progressivement.<br />- Correction de coquilles & bugs, améliorations UX/UI progressives...</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'features' && (
                        <div className="about-tab-content animate-fade-in">
                            <h4>Une plateforme conçue pour l'évasion</h4>
                            <div className="features-list">
                                <div className="feature-item">
                                    <div className="feature-icon"><Icon.Type /></div>
                                    <div className="feature-details">
                                        <strong>Typographie Noble & Confort</strong>
                                        <p>L'interface sublime le texte en utilisant des polices à empattements organiques telles que <em>Cormorant Garamond</em> et <em>Libre Baskerville</em>, garantissant une lisibilité optimale digne des ouvrages imprimés traditionnels.</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon"><Icon.Moon /></div>
                                    <div className="feature-details">
                                        <strong>Thèmes Adaptatifs Magiques</strong>
                                        <p>Alternez entre les modes <strong>Sépia</strong>, <strong>Clair</strong> et <strong>Sombre</strong>. Égayez votre lecture avec des animations ambiantes (particules) subtiles. La taille des polices, l'alignement et les gouttières sont finement paramétrables.</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon"><Icon.Cpu /></div>
                                    <div className="feature-details">
                                        <strong>Technologie PWA "Offline First"</strong>
                                        <p>Votre bibliothèque ne craint pas les coupures réseau. En installant l'application sur votre appareil (PC, Tablette, Smartphone), le Service Worker sauvegarde vos lectures. Lisez n'importe où, même au fin fond d'une forêt sans connexion internet.</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon"><Icon.Music /></div>
                                    <div className="feature-details">
                                        <strong>Lecteur Audio Intégré "Gapless"</strong>
                                        <p>Un baladeur minimaliste avec contrôles avancés pour vous accompagner : lecture aléatoire, mode boucle (sur une piste ou toute la bibliothèque) et mini-player flottant persistant lors du changement de chapitre.</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon"><Icon.BookmarkFilled /></div>
                                    <div className="feature-details">
                                        <strong>Mémoire et Signets Intelligents</strong>
                                        <p>Ne perdez jamais le fil. L'application mémorise discrètement votre progression en temps réel pour l'autofocus, et vous permet d'épingler manuellement vos chapitres favoris via le système de <strong>Signets</strong>. La page d'accueil vous proposera instantanément de <em>Continuer la lecture</em> à partir de votre dernier signet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'creator' && (
                        <div className="about-tab-content animate-fade-in">
                            <div className="creator-profile">
                                <div className="creator-header">
                                    <div className="creator-avatar-large">G</div>
                                    <div className="creator-info">
                                        <h4>Geoffroy Streit</h4>
                                        <p className="creator-titles">Écrivain · Compositeur · Développeur</p>
                                    </div>
                                </div>
                                <p className="creator-bio">
                                    Au cœur de ce projet se trouve une volonté d'offrir un cadre à la hauteur des récits.
                                    Écrivain occasionnel et créateur de musiques d'ambiances, Geoffroy Streit (Hylst) a conçu ce lecteur personnalisé pour que la musique
                                    et les mots s'entremêlent harmonieusement.
                                </p>
                                <div className="creator-links">
                                    <a href="https://hylst.fr" target="_blank" className="creator-link-btn" title="Site web Hylst">
                                        <Icon.Globe /> <span>Visiter mon site hylst.fr</span>
                                    </a>
                                    <a href="https://hylst.bandcamp.com/" target="_blank" className="creator-link-btn" title="Bandcamp">
                                        <Icon.Music /> <span>Musiques composées (sans IA) (Bandcamp)</span>
                                    </a>
                                    <a href="https://soundcloud.com/hhhylst" target="_blank" className="creator-link-btn" title="Soundcloud (Musique)">
                                        <Icon.Headphones /> <span>Musiques composées (sans IA) (SoundCloud)</span>
                                    </a>
                                    <a href="https://www.wattpad.com/user/GeoffroyStreit" target="_blank" className="creator-link-btn" title="Wattpad (Proses)">
                                        <Icon.Book /> <span>Anciennes proses et poésies (sans IA) (Wattpad)</span>
                                    </a>
                                    <a href="https://www.deviantart.com/hhylst" target="_blank" className="creator-link-btn" title="DeviantArt">
                                        <Icon.Image /> <span>Dessins, Pixel Art & Digital Painting (sans IA) (DeviantArt)</span>
                                    </a>
                                    <a href="https://www.youtube.com/@HyLsT16" target="_blank" className="creator-link-btn" title="YouTube">
                                        <Icon.Youtube /> <span>Vidéos & Clips (sans IA sauf mention) (YouTube)</span>
                                    </a>
                                    <a href="https://demozoo.org/sceners/2341/" target="_blank" className="creator-link-btn" title="Demozoo">
                                        <Icon.Cpu /> <span>Contributions Demoscene &mdash; code, musique, gfx (Demozoo)</span>
                                    </a>
                                    <a href="mailto:geoffroy.streit@gmail.com" className="creator-link-btn" title="Email">
                                        <Icon.Mail /> <span>Me contacter</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'tips' && (
                        <div className="about-tab-content animate-fade-in">
                            <div className="tips-grid">
                                <div className="tip-box">
                                    <h5><Icon.Zap /> Raccourcis Clavier</h5>
                                    <ul>
                                        <li><code>Espace</code> ou <code>Page Down</code> : Défilement fluide vers le bas d'environ 80% de la hauteur de l'écran. Parfait pour lire de longues tirades.</li>
                                        <li><code>Flèche Droite</code> &rarr; / <code>Gauche</code> &larr; : Navigation rapide et silencieuse entre les chapitres d'un livre.</li>
                                        <li><code>Touche Début</code> / <code>Fin</code> :  Aller directement tout en haut ou tout en bas de la page.</li>
                                        <li><code>Échap</code> : Ferme instinctivement les barres latérales, modales de menu et d'informations.</li>
                                        <li><code>Ctrl + F</code> : Utilisez la recherche native du navigateur (recommandé pour sa fiabilité).</li>
                                    </ul>
                                </div>
                                <div className="tip-box">
                                    <h5><Icon.Mouse /> Tactile, Stylus & Souris</h5>
                                    <ul>
                                        <li><strong>Geste (Swipe) Latéral</strong> : Sur mobile, glissez vers la gauche ou la droite pour tourner les pages virtuelles (changer de chapitre).</li>
                                        <li><strong>Double Tap (ou Clic)</strong> n'importe où dans le texte : Fait apparaître ou disparaître instantanément toutes les barres d'interfaces (Mode Focus absolu).</li>
                                        <li><strong>Barre de Progression Intelligente</strong> : Utilisez la barre en pointillés en haut du lecteur ; un clic n'importe où fait défiler le texte de manière fluide (utile pour s'y retrouver dans un long chapitre) </li>
                                        <li><strong>En-tête Interactif</strong> : Cliquez sur le titre du livre dans l'en-tête (en mode sombre ou lecteur) pour déployer discrètement la barre de la bibliothèque musicale.</li>
                                    </ul>
                                </div>
                                <div className="tip-box full-width">
                                    <h5><Icon.Settings /> Secret & Astuce d'importation avancée</h5>
                                    <p>Vous souhaitez intégrer un tome entier avec sa structure originale ? Vous pouvez glisser-déposer tout le dossier d'un livre (s'il suit l'architecture Hylst HTML), mais pour une expérience sur mesure : assurez-vous de concevoir <strong>un fichier <code>config.json</code> racine</strong>.</p>
                                    <p className="tip-hint">L'application se chargera alors de construire automatiquement l'interface narrative, avec les chapitres ordonnés, la couverture, l'auteur, et le résumé officiel !</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="modal-footer about-footer">
                    <p>Hylst &mdash; Lire, Écouter, Ressentir.</p>
                    <button className="btn btn-primary" onClick={onClose}>Commencer la lecture</button>
                </div>
            </div>
        </div>
    );
}



// ── Global Settings Modal ───────────────────────────────────────────────────
function GlobalSettingsModal({ settings, onUpdateSettings, onClose }) {
    return (
        <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
            <div className="modal-content settings-modal">
                <div className="modal-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Icon.Settings />
                        <h3>Paramètres</h3>
                    </div>
                    <button className="btn btn-ghost btn-icon" onClick={onClose}><Icon.X /></button>
                </div>
                <div className="settings-body">
                    <div className="setting-group">
                        <label>Thème</label>
                        <div className="setting-options">
                            {THEME_KEYS.map(t => (
                                <button key={t} className={`btn${settings.theme === t ? ' btn-primary' : ''}`}
                                    onClick={() => onUpdateSettings({ ...settings, theme: t })}>
                                    {t === 'sepia' ? <Icon.Book /> : t === 'light' ? <Icon.Sun /> : <Icon.Moon />}
                                    {t === 'sepia' ? 'Sépia' : t === 'light' ? 'Clair' : 'Sombre'}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="setting-group">
                        <label>Animations de fond par thème</label>
                        <div className="theme-animation-grid">
                            {THEME_KEYS.map(t => {
                                const label = t === 'sepia' ? 'Sépia' : t === 'light' ? 'Clair' : 'Sombre';
                                const active = !!normalizeBackgroundAnimations(settings.backgroundAnimations)[t];
                                return (
                                    <div className="theme-animation-item" key={`global-anim-${t}`}>
                                        <span className="theme-animation-label">{label}</span>
                                        <button
                                            className={`btn${active ? ' btn-primary' : ''}`}
                                            onClick={() => onUpdateSettings({
                                                ...settings,
                                                backgroundAnimations: {
                                                    ...normalizeBackgroundAnimations(settings.backgroundAnimations),
                                                    [t]: !active
                                                }
                                            })}
                                        >
                                            {active ? 'Animé' : 'Statique'}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="setting-group">
                        <label>Taille du texte</label>
                        <div className="setting-options">
                            <button className="btn" onClick={() => onUpdateSettings({ ...settings, fontScale: Math.max(0.7, settings.fontScale - 0.1) })}>A−</button>
                            <span style={{ minWidth: '3rem', textAlign: 'center' }}>{Math.round(settings.fontScale * 100)}%</span>
                            <button className="btn" onClick={() => onUpdateSettings({ ...settings, fontScale: Math.min(1.7, settings.fontScale + 0.1) })}>A+</button>
                        </div>
                    </div>
                    <div className="setting-group">
                        <label>Largeur du texte</label>
                        <div className="setting-options">
                            {['small', 'medium', 'large'].map(w => (
                                <button key={w} className={`btn${settings.contentWidth === w ? ' btn-primary' : ''}`}
                                    onClick={() => onUpdateSettings({ ...settings, contentWidth: w })}>
                                    {w === 'small' ? 'Étroit' : w === 'medium' ? 'Moyen' : 'Large'}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="setting-group">
                        <label>Alignement</label>
                        <div className="setting-options">
                            {['left', 'justify'].map(a => (
                                <button key={a} className={`btn${settings.alignment === a ? ' btn-primary' : ''}`}
                                    onClick={() => onUpdateSettings({ ...settings, alignment: a })}>
                                    {a === 'left' ? '⬅ Gauche' : '⬛ Justifié'}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="setting-group">
                        <label>Mode Concentration</label>
                        <div className="setting-options">
                            <button className={`btn${settings.focusMode ? ' btn-primary' : ''}`}
                                onClick={() => onUpdateSettings({ ...settings, focusMode: !settings.focusMode })}>
                                <Icon.Eye /> {settings.focusMode ? 'Actif' : 'Inactif'}
                            </button>
                        </div>
                    </div>
                    <div className="setting-group">
                        <label>Indicateurs</label>
                        <div className="setting-options">
                            <button className={`btn${settings.showReadingTime ? ' btn-primary' : ''}`}
                                onClick={() => onUpdateSettings({ ...settings, showReadingTime: !settings.showReadingTime })}>
                                Temps
                            </button>
                            <button className={`btn${settings.showProgressPercent ? ' btn-primary' : ''}`}
                                onClick={() => onUpdateSettings({ ...settings, showProgressPercent: !settings.showProgressPercent })}>
                                % Slider
                            </button>
                        </div>
                    </div>
                    <div className="setting-group">
                        <label>Affichage</label>
                        <div className="setting-options">
                            <button className="btn" onClick={() => {
                                const el = document.documentElement;
                                if (!document.fullscreenElement) {
                                    el.requestFullscreen?.();
                                } else {
                                    document.exitFullscreen?.();
                                }
                            }}>Plein écran</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ── Music Player Modal ──────────────────────────────────────────────────────
function MusicPlayerModal({ isOpen, onClose, currentTrack, isPlaying, isLoop, onPlayTrack, onTogglePlay, onToggleLoop }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTracks = useMemo(() => {
        if (!searchTerm) return MUSIC_LIBRARY;
        const low = searchTerm.toLowerCase();
        return MUSIC_LIBRARY.filter(t =>
            t.title.toLowerCase().includes(low) ||
            t.genre.toLowerCase().includes(low) ||
            t.tags.some(tag => tag.toLowerCase().includes(low))
        );
    }, [searchTerm]);

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
            <div className="modal-content music-modal" onClick={e => e.stopPropagation()}>
                <div className="music-modal-glass-header">
                    <div className="music-modal-topbar">
                        <div className="music-modal-brand">
                            <Icon.Music />
                            <h3>Bibliothèque Musicale</h3>
                            <span className="music-track-count">{MUSIC_LIBRARY.length} titres</span>
                        </div>
                        <button className="btn btn-ghost btn-icon" onClick={onClose}><Icon.X /></button>
                    </div>

                    <div className="music-search-bar">
                        <Icon.Search />
                        <input
                            type="text"
                            placeholder="Rechercher une musique, un genre, un mood..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                            <button className="clear-search-btn" onClick={() => setSearchTerm('')}><Icon.X /></button>
                        )}
                    </div>
                </div>

                <div className="music-player-layout">
                    <div className="music-list-side">
                        <div className="music-grid">
                            {filteredTracks.map(track => (
                                <div key={track.id}
                                    className={`music-item ${currentTrack?.id === track.id ? 'active' : ''}`}
                                    onClick={() => onPlayTrack(track)}>
                                    <div className="music-item-cover">
                                        <img src={track.cover} alt={track.title} loading="lazy" />
                                        {currentTrack?.id === track.id && isPlaying && (
                                            <div className="playing-overlay">
                                                <div className="wave-container">
                                                    <div className="wave-bar"></div>
                                                    <div className="wave-bar"></div>
                                                    <div className="wave-bar"></div>
                                                </div>
                                            </div>
                                        )}
                                        {currentTrack?.id === track.id && !isPlaying && (
                                            <div className="playing-overlay paused-overlay">
                                                <Icon.Pause />
                                            </div>
                                        )}
                                    </div>
                                    <div className="music-item-info">
                                        <div className="music-item-title">{track.title}</div>
                                        <div className="music-item-genre">{track.genre}</div>
                                        {track.duration && <div className="music-item-duration">{track.duration}</div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {filteredTracks.length === 0 && (
                            <div className="music-empty">Aucun résultat pour « {searchTerm} »</div>
                        )}
                    </div>

                    {currentTrack && (
                        <div className="music-controls-side">
                            <div className="current-track-card">
                                <div className="current-track-cover-container">
                                    <img src={currentTrack.cover} alt={currentTrack.title} className="current-track-cover" />
                                    <div className="cover-overlay-controls">
                                        <button className="cover-control-btn" onClick={onTogglePlay} title={isPlaying ? 'Pause' : 'Lecture'}>
                                            {isPlaying ? <Icon.Pause /> : <Icon.Play />}
                                        </button>
                                    </div>
                                </div>
                                <div className="current-track-details">
                                    <h4>{currentTrack.title}</h4>
                                    <p className="artist">{currentTrack.artist}</p>
                                    <div className="track-meta">
                                        {currentTrack.year && <span className="meta-tag">{currentTrack.year}</span>}
                                        {currentTrack.genre && <span className="meta-tag">{currentTrack.genre}</span>}
                                        {currentTrack.bpm && <span className="meta-tag">{currentTrack.bpm} BPM</span>}
                                        {currentTrack.duration && <span className="meta-tag">⏱ {currentTrack.duration}</span>}
                                        {currentTrack.mood && <span className="meta-tag mood-tag">{currentTrack.mood}</span>}
                                    </div>
                                    {currentTrack.tags && currentTrack.tags.length > 0 && (
                                        <div className="track-tags">
                                            {currentTrack.tags.map(t => <span key={t} className="tag">#{t}</span>)}
                                        </div>
                                    )}
                                </div>
                                <div className="player-controls">
                                    <button className={`control-btn ${isLoop ? 'active' : ''}`} onClick={onToggleLoop} title={isLoop ? 'Boucle active' : 'Boucle inactive'}>
                                        {isLoop ? <Icon.Repeat /> : <Icon.RepeatOff />}
                                    </button>
                                    <button className="control-btn play-btn" onClick={onTogglePlay}>
                                        {isPlaying ? <Icon.Pause /> : <Icon.Play />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// ── Animated Title Component ───────────────────────────────────────────────────
function AnimatedAppTitle({ className = "", style = {} }) {
    const text = "Hylst Books & Reader";
    return (
        <span className={`app-title animated-title ${className}`.trim()} style={style} aria-label={text} title={text}>
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    className="wave-char"
                    style={{ '--char-index': index }}
                    aria-hidden="true"
                >
                    {char}
                </span>
            ))}
        </span>
    );
}

// ── Library View ─────────────────────────────────────────────────────────────
function LibraryView({ books, onImport, onImportDirectory, onOpenBook, settings, onUpdateSettings, lastSession, onResume, onShowAbout, onShowMusic, onShowSettings, currentTrack, isPlaying, isLoop, onTogglePlay, onToggleLoop, onStop }) {
    // Séparer les livres intégrés des imports utilisateur (isImported vient de importAPI.js)
    const hylstBooks = books.filter(b => !b.isImported);
    const userBooks = books.filter(b => b.isImported);


    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }} className="view-enter">
            <header className="app-header">
                <AnimatedAppTitle />
                <div className="header-actions">
                    <button className="btn btn-ghost btn-icon" title="À propos" onClick={onShowAbout}>
                        <Icon.Info />
                    </button>
                    <button className="btn btn-ghost btn-icon" title="Paramètres" onClick={onShowSettings}>
                        <Icon.Settings />
                    </button>
                    <button className="btn btn-ghost btn-icon btn-theme-toggle" title="Changer le thème"
                        onClick={() => {
                            const themes = ['sepia', 'light', 'dark'];
                            const next = themes[(themes.indexOf(settings.theme) + 1) % themes.length];
                            onUpdateSettings({ ...settings, theme: next });
                        }}
                    >
                        {settings.theme === 'dark' ? <Icon.Sun /> : settings.theme === 'light' ? <Icon.Moon /> : <Icon.Book />}
                    </button>
                    {/* Mini-contrôles audio inline : visibles quand une piste est active */}
                    {currentTrack && (
                        <div className="music-mini-bar" title={currentTrack.title}>
                            <button className="mini-open" onClick={onShowMusic} title="Ouvrir la bibliothèque musicale" type="button">
                                <img src={currentTrack.cover} alt="" className="mini-cover" />
                                <span className="mini-title">{currentTrack.title}</span>
                            </button>
                            <button className="btn btn-ghost btn-icon mini-ctrl" onClick={onTogglePlay} title={isPlaying ? 'Pause' : 'Lecture'}>
                                {isPlaying ? <Icon.Pause /> : <Icon.Play />}
                            </button>
                            <button className={`btn btn-ghost btn-icon mini-ctrl${isLoop ? ' active-loop' : ''}`} onClick={onToggleLoop} title={isLoop ? 'Boucle : active' : 'Boucle : inactive'}>
                                {isLoop ? <Icon.Repeat /> : <Icon.RepeatOff />}
                            </button>
                            <button className="btn btn-ghost btn-icon mini-ctrl" onClick={onStop} title="Arrêter">
                                <Icon.Square />
                            </button>
                            <div className="mini-preview" aria-hidden="true">
                                <div className="mini-preview-cover">
                                    <img src={currentTrack.cover} alt="" />
                                </div>
                                <div className="mini-preview-info">
                                    <div className="mini-preview-title">{currentTrack.title}</div>
                                    <div className="mini-preview-artist">{currentTrack.artist}</div>
                                    <div className="mini-preview-meta">
                                        {currentTrack.year && <span>{currentTrack.year}</span>}
                                        {currentTrack.genre && <span>{currentTrack.genre}</span>}
                                        {currentTrack.bpm && <span>{currentTrack.bpm} BPM</span>}
                                        {currentTrack.duration && <span>{currentTrack.duration}</span>}
                                        {currentTrack.mood && <span>{currentTrack.mood}</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <button className={`btn btn-ghost btn-icon${currentTrack ? ' music-active' : ''}`} title="Bibliothèque musicale" onClick={onShowMusic}>
                        <Icon.Music />
                    </button>
                    <button className="btn btn-primary" style={{ gap: '0.4rem', paddingLeft: '0.75rem', paddingRight: '0.9rem', fontSize: '0.82rem' }} onClick={onImport} title="Importer un fichier (TXT, JSON, MD)">
                        <Icon.Plus /> <span className="btn-new-label">Nouveau</span>
                    </button>
                </div>
            </header>
            <main className="library-container">
                {lastSession && (
                    <div className="resume-banner">
                        <div className="resume-banner-icon">
                            <Icon.Book />
                        </div>
                        <div className="resume-banner-content">
                            <span className="resume-banner-label">Continuer la lecture</span>
                            <strong className="resume-banner-title">{lastSession.bookTitle}</strong>
                            <span className="resume-banner-meta">Chapitre {lastSession.chapterIndex + 1}</span>
                        </div>
                        <button className="resume-btn" onClick={() => onResume(lastSession)}>
                            Reprendre <Icon.ArrowRight />
                        </button>
                    </div>
                )}

                {/* ── Section : Bibliothèque de Hylst ── */}
                <div className="library-section-label">Bibliothèque de Hylst</div>
                <p className="library-section-desc">
                    Œuvres intégrées &mdash; romans, nouvelles, essais, JDR et poésie de Geoffroy Streit (alias Hylst).
                </p>
                {hylstBooks.length === 0 ? (
                    <div className="empty-state" style={{ padding: '2rem' }}>
                        <p>Aucun livre intégré trouvé.</p>
                    </div>
                ) : (
                    <div className="library-grid">
                        {hylstBooks.map((book, i) => (
                            <BookCard key={book.id} book={book} onClick={() => onOpenBook(book.id)} delay={i * 60} />
                        ))}
                    </div>
                )}

                {/* ── Section : À venir ── */}
                <div className="library-section-label future-label">
                    À venir &mdash; Contenus en préparation <span className="wip-badge">En cours</span>
                </div>
                <div className="future-intro">
                    <div className="future-block">
                        <p>De mes anciens blogs et sites webs, des tiroirs numériques encombrés qui n'ont reçu d'autres visites que les miennes, j'aurai matière à réunir bon nombre de mes écrits passés en ce lieu, parfois inachevés ou à revoir, rangés dans cette bibliothèque numérique que je travaille à concevoir pour y présenter, ouverts à la consultation libre, mes anciennes nouvelles, récits d'aventures HF et SF, livres dont vous êtes le héros, scénarios et campagnes de jeux de rôles, histoires fantasques, réflexions existentielles, recueils de proses et poésies, analyses pseudo-scientifiques ou plus sérieuses, recherche de sens et vérité, guides pédagogiques, frustrastions & passions, divagations & claivoyances, ... issus des méandres de mon cerveau bancal et de mes idées vagabondes au fil des années.</p>
                    </div>
                    <div className="future-block">
                        <p>Avec le recul & l'expérience, j'aimerais reprendre bon nombre d'entre eux pour les améliorer, corriger ou compléter avant de les partager, mais en aurais-je la motivation continue ? En prendrai-je le temps ? Ne finirais-je pas encore une fois par les laisser choir au fond de mes disques dans l'obscurité, si imparfaits soient-ils ?</p>
                    </div>
                </div>
                <div className="library-grid">
                    {FUTURE_BOOKS.map((fb, i) => (
                        <FutureBookCard key={fb.id} book={fb} delay={i * 40} />
                    ))}
                </div>

                {/* ── Section : Vos autres lectures ── */}
                <div className="library-section-label user-library-label">
                    Vos autres lectures
                    <div style={{ display: 'flex', gap: '0.5rem', marginLeft: 'auto' }}>
                        <button className="btn" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }} onClick={onImport} title="Importer .txt, .md ou .json">
                            <Icon.Plus /> Fichier
                        </button>
                        <button className="btn" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }} onClick={onImportDirectory} title="Importer un dossier HML complet">
                            <Icon.Upload /> Dossier HML
                        </button>
                    </div>
                </div>
                <p className="library-section-desc">
                    Contenus que vous avez importés &mdash; stockés localement sur votre appareil.
                </p>
                {userBooks.length === 0 ? (
                    <div className="import-zone-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="import-zone" onClick={onImport}>
                            <Icon.Plus />
                            <p style={{ marginTop: '0.75rem', fontWeight: 500 }}>Importer un fichier</p>
                            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.7 }}>JSON, TXT ou Markdown</p>
                        </div>
                        <div className="import-zone" onClick={onImportDirectory}>
                            <Icon.Upload />
                            <p style={{ marginTop: '0.75rem', fontWeight: 500 }}>Importer un dossier</p>
                            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.7 }}>Format HML (dossier complet)</p>
                        </div>
                    </div>
                ) : (
                    <div className="library-grid">
                        {userBooks.map((book, i) => (
                            <BookCard key={book.id} book={book} onClick={() => onOpenBook(book.id)} delay={i * 60} />
                        ))}
                    </div>
                )}

            </main>
            <footer className="app-footer">
                <div className="footer-content">
                    <div className="footer-brand">
                        <span className="app-title" style={{ fontSize: '1.1rem' }}>Hylst Books &amp; Reader</span>
                        <span className="footer-wip">En cours de développement</span>
                    </div>
                    <div className="footer-creator">
                        Créé par <strong>Geoffroy Streit</strong> alias <em>Hylst</em>
                        &nbsp;&middot;&nbsp; Artiste &eacute;clectique, développeur bancal, &eacute;crivain &agrave; ses heures
                        &nbsp;&middot;&nbsp;
                        <a href="mailto:geoffroy.streit@gmail.com" className="footer-mail">
                            <Icon.Mail /> geoffroy.streit@gmail.com
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// ── Future Book Card ─────────────────────────────────────────────────────────────
function FutureBookCard({ book, delay = 0 }) {
    return (
        <div className="book-card future-card" style={{ animationDelay: `${delay}ms` }} title="Bientot disponible" role="img">
            <div className="book-cover-container">
                {book.cover
                    ? <img src={`public/${book.cover}`} alt={book.title} loading="lazy" className="book-cover" />
                    : <div className="future-cover-placeholder"><Icon.Lock /><span>{book.genre}</span></div>
                }
                <div className="future-badge">Bientot</div>
            </div>
            <div className="book-info">
                <div className="book-title">{book.title}</div>
                <div className="book-author">{book.subtitle}</div>
                <div className="book-genre-tag">{book.genre}</div>
            </div>
        </div>
    );
}

// ── Book Card ─────────────────────────────────────────────────────────────────
function BookCard({ book, onClick, delay = 0 }) {
    const [coverUrl, setCoverUrl] = useState(null);
    const [progress, setProgress] = useState(null);

    useEffect(() => {
        if (book.coverBlob) {
            const url = URL.createObjectURL(book.coverBlob);
            setCoverUrl(url);
            return () => URL.revokeObjectURL(url);
        } else if (book.coverPath) {
            setCoverUrl(`public/${book.coverPath}?t=${Date.now()}`);
        }
    }, [book.coverBlob, book.coverPath]);

    useEffect(() => {
        getProgress(book.id).then(p => { if (p) setProgress(p.scrollRatio || 0); });
    }, [book.id]);

    return (
        <div className="book-card" style={{ animationDelay: `${delay}ms` }} onClick={onClick} role="button" tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && onClick()}>
            <div className="book-cover-container">
                {coverUrl
                    ? <img src={coverUrl} alt={book.title} loading="lazy" className="book-cover" />
                    : <span style={{ opacity: 0.4, fontSize: '0.8rem' }}>Pas de couverture</span>
                }
            </div>
            <div className="book-info">
                <div className="book-title">{book.title}</div>
                <div className="book-author">{book.author}</div>
            </div>
            {progress !== null && progress > 0 && (
                <div className="book-progress-bar" title={`${Math.round(progress * 100)}% lu`}>
                    <div className="book-progress-fill" style={{ width: `${progress * 100}%` }} />
                </div>
            )}
        </div>
    );
}

// ── Book Home View ─────────────────────────────────────────────────────────────
function BookHomeView({ book, onBack, onStartReading }) {
    const [coverUrl, setCoverUrl] = useState(null);
    const [introHtml, setIntroHtml] = useState('');

    useEffect(() => {
        if (book.coverBlob) {
            const url = URL.createObjectURL(book.coverBlob);
            setCoverUrl(url);
            return () => URL.revokeObjectURL(url);
        } else if (book.coverPath) {
            setCoverUrl(`public/${book.coverPath}?t=${Date.now()}`);
        }
    }, [book.coverBlob, book.coverPath]);

    useEffect(() => {
        if (!book.introHtml && book.introPath) {
            window.fetch(`public/${book.introPath}?t=${Date.now()}`)
                .then(r => r.text())
                .then(html => setIntroHtml(html))
                .catch(() => setIntroHtml('<p>Introduction non disponible.</p>'));
        } else {
            setIntroHtml(book.introHtml || '');
        }
    }, [book.id, book.introHtml, book.introPath]);

    return (
        <div className="book-home view-enter">
            <div className="book-home-header">
                <button className="btn btn-ghost" onClick={onBack}><Icon.ArrowLeft /> Bibliothèque</button>
            </div>
            <div className="book-home-content">
                <div className="book-home-cover">
                    {coverUrl && <img src={coverUrl} alt={`Couverture – ${book.title}`} />}
                </div>
                <div className="book-home-meta">
                    <h1 className="book-home-title">{book.title}</h1>
                    <p className="book-home-author">{book.author} {book.year ? `· ${book.year}` : ''}</p>
                    <button className="btn btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '1rem', marginBottom: '2rem' }} onClick={onStartReading}>
                        Commencer la lecture <Icon.ArrowRight />
                    </button>
                    <div className="book-home-intro reader-article" dangerouslySetInnerHTML={{ __html: introHtml }} />
                </div>
            </div>
        </div>
    );
}

// ── Reader View ────────────────────────────────────────────────────────────────
function ReaderView({ book, onBack, settings, onUpdateSettings, backgroundAnimations, currentTrack, isPlaying, isLoop, onTogglePlay, onToggleLoop, onShowMusic, onStop, onToggleFullscreen, isFullscreen }) {
    const [currentChapterIdx, setCurrentChapterIdx] = useState(0);
    const [chapterHtml, setChapterHtml] = useState('');
    const [showUI, setShowUI] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [signets, setSignets] = useState([]);

    const containerRef = useRef(null);
    const touchStartRef = useRef(null);
    const uiTimeoutRef = useRef(null);
    const chapter = book.chapters?.[currentChapterIdx];

    const transformChapterHTML = useCallback((html) => {
        if (!html) return html;
        let out = html;

        // --- Rewrite relative images to full path ---
        // Note: book.id is the directory name in public/books/
        const basePath = `public/books/${book.id}/`;
        out = out.replace(/<img\s+src="([^"]+)"/g, (match, src) => {
            // Skip absolute, root, or data URLs
            if (src.startsWith('http') || src.startsWith('/') || src.startsWith('data:')) return match;
            return `<img src="${basePath}${src}"`;
        });

        out = out.replace(/<p>\s*PARTIE\s*II\s*<\/p>/i, '<h1>Partie 1 :</h1>');
        out = out.replace(/<p>\s*La\s+Capitulation\s+Silencieuse\s*<\/p>/i, '<h2>La Capitulation Silencieuse</h2>');
        out = out.replace(/<p>\s*Partie\s*I\s*<\/p>/i, '<h1>Partie I</h1>');
        out = out.replace(/<p>\s*Le\s+grand\s+point d'inflexion\s*<\/p>/i, '<h2>Le grand point d\'inflexion</h2>');
        return out;
    }, [book.id]);

    // Load signets
    useEffect(() => {
        getSignets(book.id).then(s => setSignets(s || []));
    }, [book.id]);

    // Restore progress
    useEffect(() => {
        getProgress(book.id).then(prog => {
            if (prog) setCurrentChapterIdx(prog.chapterIndex || 0);
        });
    }, [book.id]);

    // Load chapter HTML
    useEffect(() => {
        if (!chapter) return;
        if (chapter.html) {
            setChapterHtml(transformChapterHTML(chapter.html));
        } else if (chapter.path) {
            setChapterHtml('');
            window.fetch(`public/${chapter.path}?t=${Date.now()}`)
                .then(r => r.text())
                .then(html => setChapterHtml(transformChapterHTML(html)))
                .catch(() => setChapterHtml('<p>Erreur lors du chargement.</p>'));
        }
        if (containerRef.current) containerRef.current.scrollTop = 0;
        setScrollProgress(0);

        // Auto-restore scroll position after HTML is rendered
        const timer = setTimeout(async () => {
            const prog = await getProgress(book.id);
            if (prog && prog.chapterIndex === currentChapterIdx && prog.scrollRatio > 0 && containerRef.current) {
                const { scrollHeight, clientHeight } = containerRef.current;
                containerRef.current.scrollTop = prog.scrollRatio * (scrollHeight - clientHeight);
                setScrollProgress(prog.scrollRatio);
            }
        }, 200);
        return () => clearTimeout(timer);
    }, [chapter, transformChapterHTML]);

    // Auto show UI on chapter change, then hide it
    useEffect(() => {
        setShowUI(true);
        clearTimeout(uiTimeoutRef.current);
        uiTimeoutRef.current = setTimeout(() => setShowUI(false), 3000);
        return () => clearTimeout(uiTimeoutRef.current);
    }, [currentChapterIdx]);

    const handleContainerClick = () => {
        setShowUI(v => {
            const next = !v;
            if (next) {
                clearTimeout(uiTimeoutRef.current);
                uiTimeoutRef.current = setTimeout(() => setShowUI(false), 3000);
            }
            return next;
        });
    };

    const handleScroll = useCallback(() => {
        if (!containerRef.current) return;
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const ratio = scrollTop / Math.max(scrollHeight - clientHeight, 1);
        setScrollProgress(ratio);
        saveProgress(book.id, currentChapterIdx, ratio);
    }, [book.id, currentChapterIdx]);

    // Touch swipe
    const handleTouchStart = (e) => { touchStartRef.current = e.changedTouches[0].clientX; };
    const handleTouchEnd = (e) => {
        if (touchStartRef.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartRef.current;
        touchStartRef.current = null;
        if (Math.abs(dx) < 50) return;
        if (dx < 0) nextChapter();
        else prevChapter();
    };

    const nextChapter = () => {
        if (currentChapterIdx < book.chapters.length - 1) setCurrentChapterIdx(i => i + 1);
    };
    const prevChapter = () => {
        if (currentChapterIdx > 0) setCurrentChapterIdx(i => i - 1);
    };

    const { readingTime, remainingTime } = useMemo(() => {
        if (!chapterHtml) return { readingTime: '', remainingTime: '' };
        const text = chapterHtml.replace(/<[^>]+>/g, ' ');
        const words = text.split(/\s+/).filter(w => w.length > 0).length;
        const mins = Math.ceil(words / 220);

        const remWords = Math.ceil(words * (1 - scrollProgress));
        const remMins = Math.ceil(remWords / 220);

        return {
            readingTime: mins > 0 ? `${mins} min de lecture` : "Moins d'une minute",
            remainingTime: remMins > 0 ? `${remMins} min restantes` : ""
        };
    }, [chapterHtml, scrollProgress]);

    const handleSliderClick = (e) => {
        if (!containerRef.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const ratio = Math.max(0, Math.min(1, y / rect.height));
        const { scrollHeight, clientHeight } = containerRef.current;
        containerRef.current.scrollTop = ratio * (scrollHeight - clientHeight);
    };

    const scrollTo = (target) => {
        if (!containerRef.current) return;
        if (target === 'top') containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        else if (target === 'bottom') containerRef.current.scrollTo({ top: containerRef.current.scrollHeight, behavior: 'smooth' });
    };

    const isBookmarked = signets.some(s => s.chapterIdx === currentChapterIdx);

    const toggleBookmark = async () => {
        if (isBookmarked) {
            const updated = signets.filter(s => s.chapterIdx !== currentChapterIdx);
            await removeSignet(book.id, currentChapterIdx);
            setSignets(updated);
        } else {
            const s = { chapterIdx: currentChapterIdx, chapterTitle: chapter?.title || `Chapitre ${currentChapterIdx + 1}`, addedAt: Date.now() };
            await saveSignet(book.id, s);
            setSignets(prev => [...prev, s]);
        }
    };

    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Ignore if in input or text area
            if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

            if (e.key === 'ArrowRight') nextChapter();
            if (e.key === 'ArrowLeft') prevChapter();
            if (e.key === ' ') {
                e.preventDefault();
                if (containerRef.current) {
                    containerRef.current.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
                }
            }
            if (e.key === 'Home') scrollTo('top');
            if (e.key === 'End') scrollTo('bottom');

            if (e.key === 'Escape') {
                if (showSidebar) setShowSidebar(false);
                else if (showSettings) setShowSettings(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentChapterIdx, showSidebar, showSettings, nextChapter, prevChapter, scrollTo]);

    const containerClass = `reader-container${showUI ? ' show-ui' : ''}${settings.focusMode ? ' focus-mode' : ''}`;

    return (
        <div className="reader-wrapper view-enter">
            <Ambience theme={settings.theme} enabledByTheme={settings.backgroundAnimations} inReader />
            {/* Progress bar */}
            <div className="reader-progress-bar" style={{ width: `${scrollProgress * 100}%` }} />

            {/* Sidebar */}
            <div className={`sidebar-overlay${showSidebar ? ' open' : ''}`} onClick={() => setShowSidebar(false)} />
            <aside className={`sidebar${showSidebar ? ' open' : ''}`}>
                <div className="sidebar-header">
                    <h3>{book.title}</h3>
                    <button className="btn btn-ghost btn-icon" onClick={() => setShowSidebar(false)}><Icon.X /></button>
                </div>
                <div className="sidebar-body">
                    <div className="toc-section-label">Chapitres</div>
                    {book.chapters.map((ch, i) => (
                        <div key={ch.id} className={`toc-item${i === currentChapterIdx ? ' active' : ''}`}
                            onClick={() => { setCurrentChapterIdx(i); setShowSidebar(false); }}>
                            <span className="toc-num">{i + 1}</span>
                            <span>{ch.title}</span>
                        </div>
                    ))}
                    {signets.length > 0 && (
                        <>
                            <div className="toc-section-label" style={{ marginTop: '1rem' }}>Signets</div>
                            {signets.map(s => (
                                <div key={s.chapterIdx} className="toc-item"
                                    onClick={() => { setCurrentChapterIdx(s.chapterIdx); setShowSidebar(false); }}>
                                    <Icon.BookmarkFilled />
                                    <span>{s.chapterTitle}</span>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </aside>

            {/* Settings Modal */}
            {showSettings && (
                <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && setShowSettings(false)}>
                    <div className="modal-content settings-modal">
                        <div className="modal-header">
                            <h3>Paramètres de lecture</h3>
                            <button className="btn btn-ghost btn-icon" onClick={() => setShowSettings(false)}><Icon.X /></button>
                        </div>
                        <div className="settings-body">
                            <div className="setting-group">
                                <label>Thème</label>
                                <div className="setting-options">
                                    {THEME_KEYS.map(t => (
                                        <button key={t} className={`btn${settings.theme === t ? ' btn-primary' : ''}`}
                                            onClick={() => onUpdateSettings({ ...settings, theme: t })}>
                                            {t === 'sepia' ? <Icon.Book /> : t === 'light' ? <Icon.Sun /> : <Icon.Moon />}
                                            {t === 'sepia' ? 'Sépia' : t === 'light' ? 'Clair' : 'Sombre'}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="setting-group">
                                <label>Animations de fond par thème</label>
                                <div className="theme-animation-grid">
                                    {THEME_KEYS.map(t => {
                                        const label = t === 'sepia' ? 'Sépia' : t === 'light' ? 'Clair' : 'Sombre';
                                        const active = !!normalizeBackgroundAnimations(settings.backgroundAnimations)[t];
                                        return (
                                            <div className="theme-animation-item" key={`reader-anim-${t}`}>
                                                <span className="theme-animation-label">{label}</span>
                                                <button
                                                    className={`btn${active ? ' btn-primary' : ''}`}
                                                    onClick={() => onUpdateSettings({
                                                        ...settings,
                                                        backgroundAnimations: {
                                                            ...normalizeBackgroundAnimations(settings.backgroundAnimations),
                                                            [t]: !active
                                                        }
                                                    })}
                                                >
                                                    {active ? 'Animé' : 'Statique'}
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="setting-group">
                                <label>Taille du texte</label>
                                <div className="setting-options">
                                    <button className="btn" onClick={() => onUpdateSettings({ ...settings, fontScale: Math.max(0.7, settings.fontScale - 0.1) })}>A−</button>
                                    <span>{Math.round(settings.fontScale * 100)}%</span>
                                    <button className="btn" onClick={() => onUpdateSettings({ ...settings, fontScale: Math.min(1.7, settings.fontScale + 0.1) })}>A+</button>
                                </div>
                            </div>
                            <div className="setting-group">
                                <label>Alignement</label>
                                <div className="setting-options">
                                    {['left', 'justify'].map(a => (
                                        <button key={a} className={`btn${settings.alignment === a ? ' btn-primary' : ''}`}
                                            onClick={() => onUpdateSettings({ ...settings, alignment: a })}>
                                            {a === 'left' ? 'Gauche' : 'Justifié'}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="setting-group">
                                <label>Mode Concentration</label>
                                <div className="setting-options">
                                    <button className={`btn${settings.focusMode ? ' btn-primary' : ''}`}
                                        onClick={() => onUpdateSettings({ ...settings, focusMode: !settings.focusMode })}>
                                        <Icon.Eye /> {settings.focusMode ? 'Actif' : 'Inactif'}
                                    </button>
                                </div>
                            </div>
                            <div className="setting-group">
                                <label>Indicateurs</label>
                                <div className="setting-options">
                                    <button className={`btn${settings.showReadingTime ? ' btn-primary' : ''}`}
                                        onClick={() => onUpdateSettings({ ...settings, showReadingTime: !settings.showReadingTime })}>
                                        Temps
                                    </button>
                                    <button className={`btn${settings.showProgressPercent ? ' btn-primary' : ''}`}
                                        onClick={() => onUpdateSettings({ ...settings, showProgressPercent: !settings.showProgressPercent })}>
                                        % Slider
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Scroll Slider */}
            <div className="reader-slider" onClick={handleSliderClick}>
                <div className="reader-slider-handle" style={{ top: `${scrollProgress * 100}%`, height: '20px' }}>
                    {settings.showProgressPercent && (
                        <div className="reader-slider-tooltip">{Math.round(scrollProgress * 100)}%</div>
                    )}
                </div>
            </div>

            {/* Bottom Status Bar - Reading Time (Removed, moved to nav) */}
            {/* 
            {settings.showReadingTime && (remainingTime || readingTime) && (
                <div className={`reader-status-bar${showUI ? ' visible' : ''}`}>
                    {remainingTime || readingTime}
                </div>
            )}
            */}

            {/* Main reader area */}
            <div
                ref={containerRef}
                className={containerClass}
                onClick={handleContainerClick}
                onScroll={handleScroll}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {/* Toolbar */}
                <div className="reader-toolbar">
                    <button className="btn btn-icon" onClick={e => { e.stopPropagation(); onBack(); }} title="Retour">
                        <Icon.ArrowLeft />
                    </button>
                    <span className="reader-toolbar-center">{chapter?.title || book.title}</span>
                    <div className="reader-toolbar-actions">
                        <button className="btn btn-icon" title={isBookmarked ? 'Retirer le signet' : 'Ajouter un signet'}
                            onClick={e => { e.stopPropagation(); toggleBookmark(); }}>
                            {isBookmarked ? <Icon.BookmarkFilled /> : <Icon.Bookmark />}
                        </button>
                        <button className="btn btn-icon" title="Table des matières" onClick={e => { e.stopPropagation(); setShowSidebar(true); }}>
                            <Icon.List />
                        </button>
                        <button className="btn btn-icon" title="Paramètres" onClick={e => { e.stopPropagation(); setShowSettings(true); }}>
                            <Icon.Settings />
                        </button>
                        <button className="btn btn-icon" title="Musique" onClick={e => { e.stopPropagation(); onShowMusic(); }}>
                            <Icon.Music />
                        </button>
                        <button className="btn btn-icon" title={isPlaying ? 'Pause' : 'Lecture'} onClick={e => { e.stopPropagation(); onTogglePlay(); }}>
                            {isPlaying ? <Icon.Pause /> : <Icon.Play />}
                        </button>
                        <button className={`btn btn-icon${isLoop ? ' active-loop' : ''}`} title={isLoop ? 'Boucle active' : 'Boucle inactive'} onClick={e => { e.stopPropagation(); onToggleLoop(); }}>
                            {isLoop ? <Icon.Repeat /> : <Icon.RepeatOff />}
                        </button>
                        <button className="btn btn-icon" title="Arrêter" onClick={e => { e.stopPropagation(); onStop(); }}>
                            <Icon.Square />
                        </button>
                        <button className="btn btn-icon" title="Immersion (Plein écran)" onClick={e => { e.stopPropagation(); onToggleFullscreen(); }}>
                            {isFullscreen ? <Icon.Minimize /> : <Icon.Maximize />}
                        </button>
                    </div>
                </div>

                {/* Content */}
                <article className="reader-content">
                    {chapterHtml
                        ? <div className="reader-article" dangerouslySetInnerHTML={{ __html: chapterHtml }} />
                        : <div style={{ textAlign: 'center', padding: '4rem 0', opacity: 0.4 }}>
                            <div className="spinner" style={{ margin: '0 auto' }} />
                        </div>
                    }
                </article>

                {/* Bottom nav combined with jump buttons */}
                <div className="chapter-nav">
                    <div className="chapter-nav-left">
                        <button className="nav-btn" onClick={e => { e.stopPropagation(); prevChapter(); }}
                            disabled={currentChapterIdx === 0}>
                            <Icon.ArrowLeft /> <span>Précédent</span>
                        </button>
                    </div>

                    <div className="chapter-nav-center">
                        {settings.showReadingTime && (remainingTime || readingTime) && (
                            <span className="reading-time-inline" style={{ fontSize: '0.8rem', opacity: 0.8, marginRight: '1rem', fontStyle: 'italic' }}>
                                {remainingTime || readingTime}
                            </span>
                        )}
                        <span className="chapter-counter">{currentChapterIdx + 1} / {book.chapters.length}</span>
                    </div>

                    <div className="chapter-nav-right">
                        <button className="nav-btn" onClick={e => { e.stopPropagation(); nextChapter(); }}
                            disabled={currentChapterIdx === book.chapters.length - 1}>
                            <span>Suivant</span> <Icon.ArrowRight />
                        </button>

                        <div className="jump-controls-inline">
                            <button className="jump-btn-small" onClick={e => { e.stopPropagation(); scrollTo('top'); }} title="Haut"><Icon.ChevronUp /></button>
                            <button className="jump-btn-small" onClick={e => { e.stopPropagation(); scrollTo('bottom'); }} title="Bas"><Icon.ChevronDown /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
