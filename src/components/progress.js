// Lightweight per-language progress tracking backed by localStorage.
// State shape: { [langKey]: { [sectionId]: { [subtopicId]: true } } }

const KEY = "codingking.progress.v1";

function readAll() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeAll(data) {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    /* ignore quota / private-mode errors */
  }
}

export function getCompleted(langKey) {
  const all = readAll();
  return all[langKey] || {};
}

export function isCompleted(langKey, sectionId, subtopicId) {
  const lang = getCompleted(langKey);
  return !!(lang[sectionId] && lang[sectionId][subtopicId]);
}

export function setCompleted(langKey, sectionId, subtopicId, value) {
  const all = readAll();
  if (!all[langKey]) all[langKey] = {};
  if (!all[langKey][sectionId]) all[langKey][sectionId] = {};
  if (value) {
    all[langKey][sectionId][subtopicId] = true;
  } else {
    delete all[langKey][sectionId][subtopicId];
  }
  writeAll(all);
}

// Returns { done, total } for a language given its tutorial sections.
export function getProgress(langKey, tutorialData) {
  let done = 0;
  let total = 0;
  const lang = getCompleted(langKey);
  for (const section of tutorialData) {
    for (const sub of section.subtopics) {
      total += 1;
      if (lang[section.id] && lang[section.id][sub.id]) done += 1;
    }
  }
  return { done, total, ratio: total ? done / total : 0 };
}

export function clearProgress(langKey) {
  const all = readAll();
  delete all[langKey];
  writeAll(all);
}
