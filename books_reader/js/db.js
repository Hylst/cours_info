// js/db.js
// Gestion de la base de données locale (IndexedDB) via idb-keyval

import * as idb from 'https://cdn.jsdelivr.net/npm/idb-keyval@6/+esm';

const STORE_KEYS = {
    BOOKS: 'hylst-books',
    PROGRESS: 'hylst-progress',
    SETTINGS: 'hylst-settings',
    SIGNETS: 'hylst-signets'
};

// --- Books Management ---
export async function getBooks() {
    const books = await idb.get(STORE_KEYS.BOOKS);
    return books || [];
}

export async function saveBook(book) {
    const books = await getBooks();
    const existingIndex = books.findIndex(b => b.id === book.id);
    if (existingIndex >= 0) {
        books[existingIndex] = book;
    } else {
        books.push(book);
    }
    await idb.set(STORE_KEYS.BOOKS, books);
}

export async function getBook(id) {
    const books = await getBooks();
    return books.find(b => b.id === id);
}

export async function deleteBook(id) {
    const books = await getBooks();
    const newBooks = books.filter(b => b.id !== id);
    await idb.set(STORE_KEYS.BOOKS, newBooks);

    // Cleanup progress
    const progress = await getProgressAll();
    delete progress[id];
    await idb.set(STORE_KEYS.PROGRESS, progress);
}

// --- Progress & Bookmarks ---
export async function getProgressAll() {
    return (await idb.get(STORE_KEYS.PROGRESS)) || {};
}

export async function getProgress(bookId) {
    const all = await getProgressAll();
    return all[bookId] || { chapterIndex: 0, scrollRatio: 0 };
}

export async function saveProgress(bookId, chapterIndex, scrollRatio) {
    const all = await getProgressAll();
    all[bookId] = { chapterIndex, scrollRatio, lastRead: Date.now() };
    await idb.set(STORE_KEYS.PROGRESS, all);
}

// --- Bookmarks (Signets) ---
export async function getSignets(bookId) {
    const all = await idb.get(STORE_KEYS.SIGNETS) || {};
    return all[bookId] || [];
}

export async function saveSignet(bookId, signet) {
    const all = await idb.get(STORE_KEYS.SIGNETS) || {};
    const bookSignets = all[bookId] || [];
    bookSignets.push(signet);
    all[bookId] = bookSignets;
    await idb.set(STORE_KEYS.SIGNETS, all);
}

export async function removeSignet(bookId, signetId) {
    const all = await idb.get(STORE_KEYS.SIGNETS) || {};
    if (all[bookId]) {
        all[bookId] = all[bookId].filter(s => s.id !== signetId);
        await idb.set(STORE_KEYS.SIGNETS, all);
    }
}

// --- Global Settings ---
export async function getSettings() {
    return (await idb.get(STORE_KEYS.SETTINGS)) || {
        theme: 'sepia',
        fontScale: 1.0,
        alignment: 'left',
        focusMode: false,
        contentWidth: 'medium',
        showReadingTime: true,
        showProgressPercent: true,
        backgroundAnimations: {
            sepia: true,
            light: true,
            dark: true
        }
    };
}

export async function saveSettings(settings) {
    await idb.set(STORE_KEYS.SETTINGS, settings);
}
