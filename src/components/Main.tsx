import { useState, useEffect, useRef, useCallback } from "react";
import {
  FaSearch,
  FaCrown,
  FaGithub,
  FaChevronRight,
  FaChevronLeft,
  FaTimes,
  FaList,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeContext";
import TutorialViewer from "./TutorialViewer";
import { languageRegistry } from "./languageRegistry";
import { buttonsData } from "./buttonsData";
import { FaHome } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import * as progress from "./progress";

type LanguageButton = {
  label: string;
  icon: string;
  type: string;
};

const langColors: Record<string, string> = {
  Python: "#3776AB", JavaScript: "#F7DF1E", TypeScript: "#3178C6", Java: "#ED8B00",
  Go: "#00ADD8", Kotlin: "#7F52FF", C: "#A8B9CC", Cpp: "#00599C", Csharp: "#239120",
  PHP: "#777BB4", Rust: "#DEA584", Haskell: "#5E5086", Ruby: "#CC342D", Elixir: "#4B275F",
  Clojure: "#5881D8", Scala: "#DC322F", Swift: "#F05138", Bash: "#4EAA25", Lua: "#000080",
  Perl: "#39457E", R: "#276DC3", Dart: "#0175C2", Elm: "#60B5CC", FSharp: "#378BBA",
  Julia: "#9558B2", Prolog: "#74283C", Matlab: "#0076A8", Assembly: "#6E4A70",
  SQL: "#E38C00", Shell: "#4EAA25", ObjectiveC: "#438EFF",
};

function Main({
  initialLang,
  onHome,
}: {
  initialLang?: string;
  onHome?: () => void;
}) {
  const [activeLang, setActiveLang] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);
  const searchRef = useRef<HTMLInputElement>(null);
  const { isDark, theme, toggleTheme } = useTheme();

  const [activeSection, setActiveSection] = useState<any>(null);
  const [activeSubtopic, setActiveSubtopic] = useState<any>(null);

  const allButtons: LanguageButton[] =
    buttonsData.find((cat) => cat.category === "Programming")?.buttons || [];

  const filteredButtons = searchTerm
    ? allButtons.filter(
        (b) =>
          b.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
          b.type.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allButtons;

  const config = languageRegistry[activeLang];

  const selectLanguage = useCallback((type: string) => {
    const cfg = languageRegistry[type];
    if (cfg) {
      setActiveLang(type);
      setActiveSection(cfg.tutorialData[0]);
      setActiveSubtopic(cfg.tutorialData[0].subtopics[0]);
    }
  }, []);

  const handleSubtopicChange = (section: any, subtopic: any) => {
    setActiveSection(section);
    setActiveSubtopic(subtopic);
  };

  useEffect(() => { selectLanguage(initialLang || "Python"); }, [selectLanguage, initialLang]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        if (e.key === "k") { e.preventDefault(); searchRef.current?.focus(); }
        if (e.key === "b") { e.preventDefault(); setLeftOpen((v) => !v); }
        if (e.key === "j") { e.preventDefault(); setRightOpen((v) => !v); }
        return;
      }
      if (!config) return;
      const idx = allButtons.findIndex((b) => b.type === activeLang);
      if (e.key === "ArrowDown" && idx < allButtons.length - 1) {
        e.preventDefault(); selectLanguage(allButtons[idx + 1].type);
      }
      if (e.key === "ArrowUp" && idx > 0) {
        e.preventDefault(); selectLanguage(allButtons[idx - 1].type);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [config, activeLang, allButtons, selectLanguage]);

  const accentColor = langColors[activeLang] || "#3B82F6";

  return (
    <div className={`h-screen flex flex-col overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      {isDark && <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />}

      {/* === TOP BAR === */}
      <header className={`relative flex items-center justify-between px-3 h-10 border-b z-10 flex-shrink-0 gap-2 ${
        isDark ? 'bg-gray-900/80 border-white/5 backdrop-blur-md' : 'bg-white/80 border-black/5 backdrop-blur-md'
      }`}>
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center gap-0.5">
            {onHome && (
              <button onClick={onHome}
                className={`p-1 rounded text-xs transition-colors ${isDark ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-black/5 text-gray-500'}`}
                title="Back to home">
                <FaHome />
              </button>
            )}
            <button onClick={() => setLeftOpen(!leftOpen)}
              className={`p-1 rounded text-xs transition-colors ${isDark ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-black/5 text-gray-500'}`}
              title="Toggle languages (Ctrl+B)">
              <FaChevronLeft className={`transition-transform duration-200 ${leftOpen ? '' : 'rotate-180'}`} />
            </button>
            {config && (
              <button onClick={() => setRightOpen(!rightOpen)}
                className={`p-1 rounded text-xs transition-colors ${isDark ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-black/5 text-gray-500'}`}
                title="Toggle topics (Ctrl+J)">
                <FaList className={`transition-transform duration-200 ${rightOpen ? '' : 'rotate-180'}`} />
              </button>
            )}
          </div>
          <FaCrown className="text-amber-500 text-sm flex-shrink-0" />
          <span className={`font-bold text-xs tracking-wide hidden sm:inline ${isDark ? 'text-white/90' : 'text-gray-700'}`}>
            Coding King
          </span>
          {config && (
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full hidden sm:inline"
              style={{ backgroundColor: `${accentColor}15`, color: accentColor, border: `1px solid ${accentColor}30` }}>
              {activeLang}
            </span>
          )}
        </div>

        {/* Compact lang tabs when left sidebar is closed */}
        {!leftOpen && config && (
          <div className="flex-1 flex items-center gap-1 overflow-x-auto mx-2 custom-scroll">
            {allButtons.slice(0, 12).map((btn) => (
              <button key={btn.type} onClick={() => selectLanguage(btn.type)}
                className={`flex items-center gap-1 px-1.5 py-1 rounded text-[10px] whitespace-nowrap transition-colors flex-shrink-0 ${
                  activeLang === btn.type
                    ? 'bg-blue-600/20 text-blue-400'
                    : isDark ? 'text-gray-500 hover:text-gray-300 hover:bg-white/5' : 'text-gray-500 hover:text-gray-700 hover:bg-black/5'
                }`}>
                <i className={`${btn.icon} text-xs`}></i>
                {btn.label}
              </button>
            ))}
            <button onClick={() => setLeftOpen(true)} className="text-[10px] text-gray-500 hover:text-gray-300 px-1">+{allButtons.length - 12}</button>
          </div>
        )}

        <div className="flex items-center gap-2 flex-shrink-0">
          <kbd className={`hidden sm:inline text-[9px] px-1.5 py-0.5 rounded font-mono ${isDark ? 'bg-white/5 text-gray-500 border border-white/10' : 'bg-black/5 text-gray-400 border border-black/10'}`}>Ctrl+K</kbd>
          <a href="https://www.github.com/hernandoabella/coding_king" target="_blank" rel="noopener noreferrer" className={`text-sm hover:text-blue-500 transition ${isDark ? 'text-gray-400' : 'text-gray-500'}`}><FaGithub /></a>
          <a href="https://www.x.com/hernandoabella/coding_king" target="_blank" rel="noopener noreferrer" className={`text-sm hover:text-blue-500 transition ${isDark ? 'text-gray-400' : 'text-gray-500'}`}><FaXTwitter /></a>
          <input title="Toggle Theme" type="checkbox"
            className="toggle toggle-xs theme-controller border-sky-400 bg-amber-300 checked:border-blue-800 checked:bg-blue-300"
            checked={theme === "night"} onChange={toggleTheme} />
        </div>
      </header>

      {/* === BODY: 3-column layout === */}
      <div className="flex flex-1 overflow-hidden relative z-10">
        {/* === LEFT SIDEBAR: Languages === */}
        <AnimatePresence>
          {leftOpen && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }} animate={{ width: 220, opacity: 1 }} exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className={`flex-shrink-0 border-r flex flex-col overflow-hidden ${
                isDark ? 'bg-gray-900/60 border-white/5 backdrop-blur-xl' : 'bg-white/80 border-black/5 backdrop-blur-xl'
              }`}>
              <div className="p-2 flex-shrink-0">
                <div className="relative">
                  <FaSearch className={`absolute left-2.5 top-1/2 -translate-y-1/2 text-[11px] ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                  <input ref={searchRef} type="text" placeholder="Search... (Ctrl+K)" value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`w-full pl-7 pr-7 py-1.5 rounded-lg text-xs border outline-none transition-all ${
                      isDark ? 'bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-blue-500/50 focus:bg-white/10'
                        : 'bg-black/5 border-black/10 text-gray-800 placeholder-gray-400 focus:border-blue-400 focus:bg-white'}`} />
                  {searchTerm && (
                    <button onClick={() => setSearchTerm("")} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300">
                      <FaTimes className="text-[9px]" />
                    </button>
                  )}
                </div>
              </div>

              <div className="flex-1 overflow-y-auto custom-scroll">
                <AnimatePresence>
                  {filteredButtons.map((btn, i) => {
                    const isActive = activeLang === btn.type;
                    const color = langColors[btn.type] || "#6b7280";
                    return (
                      <motion.button key={btn.type} layout
                        initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }}
                        transition={{ duration: 0.15, delay: i * 0.008 }}
                        onClick={() => selectLanguage(btn.type)}
                        className={`w-full flex items-center gap-2.5 px-3 py-1.5 text-xs transition-all duration-150 group relative ${
                          isActive ? 'bg-blue-600/10 text-blue-400 font-medium' : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                        }`}>
                        {isActive && (
                          <motion.div layoutId="activeLang" className="absolute left-0 top-0 bottom-0 w-0.5 rounded-r-full"
                            style={{ backgroundColor: color }} transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                        )}
                        <i className={`${btn.icon} text-base flex-shrink-0 transition-opacity ${isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-80'}`}></i>
                        <span className="truncate">{btn.label}</span>
                        {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />}
                      </motion.button>
                    );
                  })}
                </AnimatePresence>
                {filteredButtons.length === 0 && <p className="px-4 py-8 text-xs text-gray-500 text-center">No matches</p>}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* === CENTER: Code content === */}
        <main className="flex-1 overflow-hidden flex flex-col">
          {config && activeSubtopic ? (
            <TutorialViewer
              tutorialTitle={config.title}
              tutorialData={config.tutorialData}
              language={config.language}
              langKey={activeLang}
              activeSection={activeSection}
              activeSubtopic={activeSubtopic}
              onSubtopicChange={handleSubtopicChange}
              accentColor={accentColor}
            />
          ) : (
            <div className="flex flex-col items-center justify-center flex-1 gap-4">
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <FaCrown className="text-5xl text-amber-500/30" />
              </motion.div>
              <p className={`text-sm ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                Select a language or press <kbd className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} border`}>Ctrl+K</kbd> to search
              </p>
            </div>
          )}
        </main>

        {/* === RIGHT SIDEBAR: Topics === */}
        <AnimatePresence>
          {rightOpen && config && activeSection && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }} animate={{ width: 200, opacity: 1 }} exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className={`flex-shrink-0 border-l flex flex-col overflow-hidden ${
                isDark ? 'bg-gray-900/60 border-white/5 backdrop-blur-xl' : 'bg-white/80 border-black/5 backdrop-blur-xl'
              }`}>
              <div className="px-3 py-2.5 flex-shrink-0 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-500">Topics</span>
                <span className="text-[9px] text-gray-600">{config.tutorialData.length} sections</span>
              </div>
              <div className="flex-1 overflow-y-auto custom-scroll">
                {config.tutorialData.map((section: any) => (
                  <div key={section.id}>
                    <button
                      onClick={() => { setActiveSection(section); setActiveSubtopic(section.subtopics[0]); }}
                      className={`w-full flex items-center gap-1.5 px-3 py-1.5 text-[11px] transition-colors text-left ${
                        activeSection.id === section.id
                          ? 'text-blue-400 font-medium'
                          : isDark ? 'text-gray-500 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
                      }`}>
                      <motion.span
                        animate={{ rotate: activeSection.id === section.id ? 90 : 0 }}
                        transition={{ duration: 0.15 }}
                        className="text-[7px] flex-shrink-0">
                        <FaChevronRight />
                      </motion.span>
                      <span className="truncate">{section.title}</span>
                      <span className="ml-auto text-[9px] opacity-50">{section.subtopics.length}</span>
                    </button>
                    <AnimatePresence>
                      {activeSection.id === section.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.15 }}>
                          {section.subtopics.map((sub: any, si: number) => {
                            const done = progress.isCompleted(activeLang, section.id, sub.id);
                            return (
                            <motion.button
                              key={sub.id}
                              initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: si * 0.03 }}
                              onClick={() => setActiveSubtopic(sub)}
                              className={`w-full text-left pl-7 pr-3 py-1 text-[10px] transition-colors truncate flex items-center gap-1.5 ${
                                activeSubtopic && activeSubtopic.id === sub.id
                                  ? 'bg-blue-600/15 text-blue-400 font-medium'
                                  : isDark ? 'text-gray-600 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
                              }`}>
                              {done ? (
                                <FaCheck className="text-[8px] text-green-500 flex-shrink-0" />
                              ) : (
                                <span className={`w-1 h-1 rounded-full flex-shrink-0 ${activeSubtopic && activeSubtopic.id === sub.id ? 'bg-blue-400' : 'bg-gray-600'}`} />
                              )}
                              {sub.title}
                            </motion.button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Topic progress */}
              {activeSection && (
                <div className={`flex-shrink-0 px-3 py-2 border-t text-[10px] ${isDark ? 'border-white/5 text-gray-600' : 'border-black/5 text-gray-400'}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span>{activeSection.title}</span>
                    <span>
                      {activeSection.subtopics.findIndex((s: any) => s.id === activeSubtopic?.id) + 1}/{activeSection.subtopics.length}
                    </span>
                  </div>
                  <div className={`h-0.5 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
                    <div className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${((activeSection.subtopics.findIndex((s: any) => s.id === activeSubtopic?.id) + 1) / activeSection.subtopics.length) * 100}%`,
                        backgroundColor: accentColor,
                      }} />
                  </div>
                </div>
              )}
            </motion.aside>
          )}
        </AnimatePresence>
      </div>

      {/* === STATUS BAR === */}
      <footer className={`relative z-10 flex items-center justify-between px-4 h-6 text-[10px] border-t flex-shrink-0 ${
        isDark ? 'bg-gray-900/80 border-white/5 text-gray-600 backdrop-blur-md' : 'bg-white/80 border-black/5 text-gray-400 backdrop-blur-md'
      }`}>
        <div className="flex items-center gap-3">
          <span>&copy; {new Date().getFullYear()} codingking.net</span>
          {config && <><span className="opacity-40">|</span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />{activeLang}
            </span></>
          }
        </div>
        <span className="hidden sm:inline opacity-50">
          <kbd className="text-[9px]">Ctrl+B</kbd> langs &middot; <kbd className="text-[9px]">Ctrl+J</kbd> topics &middot; <kbd className="text-[9px]">&#8593;&#8595;</kbd> nav
        </span>
      </footer>
    </div>
  );
}

export default Main;
