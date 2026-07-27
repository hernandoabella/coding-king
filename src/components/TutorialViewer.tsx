import { useState, useCallback, useEffect } from 'react';
import {
  FaChevronRight,
  FaChevronLeft,
  FaClipboard,
  FaCheck,
  FaPlay,
  FaTerminal,
  FaCheckCircle,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useTheme } from './ThemeContext';
import * as progress from './progress';

const runPythonCode = async (code: string): Promise<string> => {
  const Sk = await import('skulpt');
  return new Promise((resolve) => {
    let output = '';
    Sk.configure({
      output: (text: string) => { output += text; },
      read: (x: string) => {
        if (Sk.builtinFiles && Sk.builtinFiles.files[x] !== undefined) {
          return Sk.builtinFiles.files[x];
        }
        throw new Error('File not found: ' + x);
      },
    });
    Sk.misceval
      .asyncToPromise(() => Sk.importMainWithBody('<stdin>', false, code, true))
      .then(
        () => resolve(output || 'Program completed successfully.'),
        (err: Error) => resolve(output + '\nError: ' + err.toString())
      );
  });
};

type Subtopic = {
  id: string;
  title: string;
  description: string;
  content: string;
  output: string;
};

type Section = {
  id: string;
  title: string;
  subtopics: Subtopic[];
};

type TutorialViewerProps = {
  tutorialTitle: string;
  tutorialData: Section[];
  language: string;
  langKey: string;
  activeSubtopic: Subtopic;
  activeSection: Section;
  onSubtopicChange: (section: Section, subtopic: Subtopic) => void;
  accentColor: string;
};

function TutorialViewer({ tutorialTitle, tutorialData, language, langKey, activeSubtopic, activeSection, onSubtopicChange, accentColor }: TutorialViewerProps) {
  const { isDark } = useTheme();
  const [copied, setCopied] = useState(false);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(progress.isCompleted(langKey, activeSection.id, activeSubtopic.id));
  }, [langKey, activeSection.id, activeSubtopic.id]);

  const toggleComplete = () => {
    const next = !completed;
    progress.setCompleted(langKey, activeSection.id, activeSubtopic.id, next);
    setCompleted(next);
    if (next) {
      const { done, total } = progress.getProgress(langKey, tutorialData);
      if (done === total) {
        import('canvas-confetti').then(({ default: confetti }) => {
          confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 }, disableForReducedMotion: true });
        });
      }
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(activeSubtopic.content)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error('Failed to copy: ', err));
  };

  const handleRunCode = useCallback(async () => {
    setIsRunning(true);
    setOutput('');
    if (language === 'python') {
      try {
        const result = await runPythonCode(activeSubtopic.content);
        setOutput(result);
      } catch (err) {
        setOutput((activeSubtopic.output ? activeSubtopic.output + '\n' : '') + 'Error: ' + (err?.toString?.() || String(err)));
      }
    } else {
      // simulate delay for realism
      await new Promise((r) => setTimeout(r, 300));
      setOutput(activeSubtopic.output || '');
    }
    setIsRunning(false);
  }, [language, activeSubtopic]);

  const idx = activeSection.subtopics.findIndex((sub) => sub.id === activeSubtopic.id);
  const total = activeSection.subtopics.length;
  const progress = ((idx + 1) / total) * 100;

  const goToNextSubtopic = () => {
    if (idx < total - 1) {
      onSubtopicChange(activeSection, activeSection.subtopics[idx + 1]);
      setOutput('');
    }
  };

  const goToPrevSubtopic = () => {
    if (idx > 0) {
      onSubtopicChange(activeSection, activeSection.subtopics[idx - 1]);
      setOutput('');
    }
  };

  // Keyboard navigation for subtopics
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' && !e.ctrlKey && !e.metaKey) {
      goToNextSubtopic();
    }
    if (e.key === 'ArrowLeft' && !e.ctrlKey && !e.metaKey) {
      goToPrevSubtopic();
    }
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      handleRunCode();
    }
  }, [idx, total]);

  return (
    <div className="flex flex-col h-full" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Progress bar */}
      <div className={`h-0.5 flex-shrink-0 ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
        <motion.div
          className="h-full rounded-r-full"
          style={{ backgroundColor: accentColor }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      <div className="flex-1 overflow-y-auto custom-scroll">
        <div className="max-w-3xl mx-auto p-5">
          <motion.div
            key={activeSubtopic.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Topic header */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-[10px] font-mono px-2 py-0.5 rounded-full tracking-wide"
                  style={{
                    backgroundColor: isDark ? `${accentColor}15` : `${accentColor}10`,
                    color: accentColor,
                    border: `1px solid ${accentColor}30`,
                  }}
                >
                  {tutorialTitle}
                </span>
                <span className={`text-[10px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                  {activeSection.title}
                </span>
              </div>
              <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                {activeSubtopic.title}
              </h3>
              <p className={`text-sm mt-1.5 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {activeSubtopic.description}
              </p>
            </div>

            {/* Code block */}
            <div
              className={`relative rounded-xl overflow-hidden border transition-shadow duration-300 ${
                isDark ? 'border-white/10 bg-[#1a1a2e]' : 'border-black/10 bg-gray-50'
              } hover:shadow-lg`}
              style={{ boxShadow: copied ? `0 0 20px ${accentColor}20` : undefined }}
            >
              {/* Window dots */}
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* Copy button */}
              <button
                onClick={handleCopyToClipboard}
                className={`absolute top-2.5 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-medium transition-all ${
                  copied
                    ? 'bg-green-500/20 text-green-400'
                    : isDark
                      ? 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                      : 'bg-black/5 text-gray-500 hover:bg-black/10 hover:text-gray-700'
                }`}
              >
                {copied ? (
                  <><FaCheck className="text-[9px]" /> Copied!</>
                ) : (
                  <><FaClipboard className="text-[9px]" /> Copy</>
                )}
              </button>

              <SyntaxHighlighter
                language={language}
                style={anOldHope}
                showLineNumbers
                lineNumberStyle={{
                  color: isDark ? '#4a4a6a' : '#a1a1aa',
                  minWidth: '2.2em',
                  fontSize: '11px',
                  paddingRight: '1em',
                  userSelect: 'none',
                }}
                customStyle={{
                  borderRadius: '0.75rem',
                  padding: '1.25rem',
                  paddingTop: '2.5rem',
                  fontSize: '0.8rem',
                  lineHeight: '1.6',
                  backgroundColor: isDark ? '#1a1a2e' : '#f9fafb',
                  border: 'none',
                }}
                wrapLines
                wrapLongLines
              >
                {activeSubtopic.content}
              </SyntaxHighlighter>
            </div>

            {/* Run + nav row */}
            <div className="flex items-center gap-3 mt-3">
              <button
                onClick={handleRunCode}
                disabled={isRunning}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
                style={{
                  backgroundColor: isRunning ? undefined : `${accentColor}20`,
                  color: isRunning ? undefined : accentColor,
                  border: `1px solid ${accentColor}30`,
                }}
              >
                <FaPlay className="text-[9px]" />
                {isRunning ? 'Running...' : 'Run'}
                <kbd className="text-[8px] opacity-50 ml-0.5 hidden sm:inline">Ctrl+Enter</kbd>
              </button>

              <button
                onClick={toggleComplete}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border ${
                  completed
                    ? 'bg-green-500/15 text-green-400 border-green-500/30'
                    : isDark
                      ? 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
                      : 'bg-black/5 text-gray-500 border-black/10 hover:bg-black/10 hover:text-gray-700'
                }`}
                title={completed ? 'Mark as not done' : 'Mark as done'}
              >
                {completed ? <FaCheckCircle className="text-[9px]" /> : <FaCheck className="text-[9px]" />}
                {completed ? 'Done' : 'Mark done'}
              </button>

              <div className="flex items-center gap-1 ml-auto text-[10px]">
                <button
                  onClick={goToPrevSubtopic}
                  disabled={idx === 0}
                  className={`flex items-center gap-1 px-2 py-1 rounded-md transition-colors ${
                    idx === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/5'
                  } ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                >
                  <FaChevronLeft className="text-[8px]" /> Prev
                </button>
                <span className={`tabular-nums min-w-[3em] text-center ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  {idx + 1} / {total}
                </span>
                <button
                  onClick={goToNextSubtopic}
                  disabled={idx === total - 1}
                  className={`flex items-center gap-1 px-2 py-1 rounded-md transition-colors ${
                    idx === total - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/5'
                  } ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                >
                  Next <FaChevronRight className="text-[8px]" />
                </button>
              </div>
            </div>

            {/* Output */}
            <AnimatePresence>
              {output && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="mt-3 overflow-hidden"
                >
                  <div
                    className={`rounded-xl overflow-hidden border ${
                      isDark ? 'border-white/10' : 'border-black/10'
                    }`}
                  >
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 border-b text-[10px] ${
                      isDark ? 'bg-white/5 border-white/5 text-gray-500' : 'bg-black/5 border-black/5 text-gray-400'
                    }`}>
                      <FaTerminal className="text-[9px]" />
                      Output
                    </div>
                    <div
                      className={`p-3 font-mono text-xs ${
                        isDark ? 'bg-black/30 text-green-400' : 'bg-gray-900 text-green-300'
                      }`}
                      style={{ whiteSpace: 'pre-wrap', maxHeight: '200px', overflowY: 'auto' }}
                    >
                      <span className="select-none text-gray-600 mr-1">$</span>
                      {output}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TutorialViewer;
