import { motion } from "framer-motion";
import {
  FaGithub,
  FaArrowRight,
  FaSearch,
  FaCode,
  FaBookOpen,
  FaBolt,
  FaCrown,
  FaChevronRight,
  FaMoon,
  FaSun,
  FaHome,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTheme } from "./ThemeContext";
import Hero from "./Hero";
import Footer from "./Footer";
import { buttonsData } from "./buttonsData";
import { langColors } from "./langColors";
import * as progress from "./progress";
import { languageRegistry } from "./languageRegistry";

const features = [
  {
    icon: FaSearch,
    title: "Instant Search",
    desc: "Jump to any language or topic with Ctrl+K fuzzy search.",
    color: "#38BDF8",
  },
  {
    icon: FaCode,
    title: "30+ Languages",
    desc: "From Python to Assembly — syntax-highlighted lessons for all.",
    color: "#A78BFA",
  },
  {
    icon: FaBookOpen,
    title: "Bite-sized Lessons",
    desc: "Structured tutorials that take you from zero to confident.",
    color: "#34D399",
  },
  {
    icon: FaBolt,
    title: "Lightning Fast",
    desc: "A snappy, offline-friendly IDE-style learning environment.",
    color: "#FBBF24",
  },
];

const GITHUB = "https://www.github.com/hernandoabella/coding_king";
const X = "https://www.x.com/hernandoabella/coding_king";

export default function Home({
  onLaunch,
}: {
  onLaunch: (lang?: string) => void;
}) {
  const { isDark, toggleTheme } = useTheme();
  const languages =
    buttonsData.find((c) => c.category === "Programming")?.buttons || [];

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden ${
        isDark ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Background layers */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark ? "bg-grid opacity-30" : "bg-grid-light opacity-50"
        }`}
      />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

      {/* Nav */}
      <header
        className={`relative z-20 sticky top-0 backdrop-blur-xl border-b ${
          isDark
            ? "bg-gray-950/70 border-white/5"
            : "bg-white/70 border-black/5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaCrown className="text-amber-500" />
            <span className="font-bold tracking-wide">Coding King</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:block text-lg transition ${
                isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <FaGithub />
            </a>
            <a
              href={X}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:block text-lg transition ${
                isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <FaXTwitter />
            </a>
            <button
              onClick={toggleTheme}
              title="Toggle theme"
              className={`p-2 rounded-lg transition ${
                isDark ? "hover:bg-white/10 text-gray-300" : "hover:bg-black/5 text-gray-600"
              }`}
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </button>
            <button
              onClick={() => onLaunch()}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition shadow-lg shadow-blue-600/30"
            >
              Launch App <FaArrowRight className="text-xs" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 pt-16 pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs mb-6 border ${
            isDark
              ? "bg-white/5 border-white/10 text-gray-300"
              : "bg-black/5 border-black/10 text-gray-600"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          30+ languages · Free &amp; Open Source
        </motion.div>

        <Hero />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`mt-4 text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}
        >
          Your throne awaits. Master programming languages with interactive,
          syntax-highlighted lessons — all in your browser.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-3 flex-wrap"
        >
          <button
            onClick={() => onLaunch()}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 transition"
          >
            Start Learning Free
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border transition ${
              isDark
                ? "border-white/10 hover:bg-white/5"
                : "border-black/10 hover:bg-black/5"
            }`}
          >
            <FaGithub /> Star on GitHub
          </a>
        </motion.div>
      </section>

      {/* Languages */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Pick your weapon</h2>
          <p
            className={`text-sm mt-1 ${
              isDark ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Click any language to jump straight into its lessons.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {languages.map((lang, i) => {
            const color = langColors[lang.type] || "#6b7280";
            const reg = languageRegistry[lang.type];
            const prog = reg ? progress.getProgress(lang.type, reg.tutorialData) : { done: 0, total: 0, ratio: 0 };
            const pct = Math.round(prog.ratio * 100);
            const R = 14;
            const C = 2 * Math.PI * R;
            return (
              <motion.button
                key={lang.type}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.02, 0.4) }}
                onClick={() => onLaunch(lang.type)}
                className={`group relative flex flex-col items-center justify-center gap-2 py-5 rounded-2xl border transition-all hover:-translate-y-1 ${
                  isDark
                    ? "bg-white/[0.03] border-white/5 hover:border-white/10"
                    : "bg-white border-black/5 hover:border-black/10 shadow-sm"
                }`}
              >
                <span
                  className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: color }}
                />
                <i className={`${lang.icon} text-3xl`} style={{ color }} />
                <span className="text-xs font-medium">{lang.label}</span>
                {prog.total > 0 && (
                  <div className="flex items-center gap-1.5 mt-0.5" title={`${prog.done}/${prog.total} lessons completed`}>
                    <svg width="34" height="34" viewBox="0 0 34 34" className="-rotate-90">
                      <circle cx="17" cy="17" r={R} fill="none" stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} strokeWidth="3" />
                      <circle
                        cx="17" cy="17" r={R} fill="none"
                        stroke={color} strokeWidth="3" strokeLinecap="round"
                        strokeDasharray={C}
                        strokeDashoffset={C * (1 - prog.ratio)}
                        style={{ transition: "stroke-dashoffset 0.4s ease" }}
                      />
                    </svg>
                    <span className={`text-[10px] font-mono ${pct === 100 ? "text-green-500" : isDark ? "text-gray-400" : "text-gray-500"}`}>{pct}%</span>
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className={`p-5 rounded-2xl border ${
                isDark
                  ? "bg-white/[0.03] border-white/5"
                  : "bg-white border-black/5 shadow-sm"
              }`}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: `${f.color}1a`, color: f.color }}
              >
                <f.icon />
              </div>
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`relative overflow-hidden rounded-3xl p-10 text-center border ${
            isDark
              ? "border-white/10 bg-gradient-to-br from-blue-600/10 to-purple-600/10"
              : "border-black/5 bg-gradient-to-br from-blue-50 to-purple-50"
          }`}
        >
          <h2 className="text-3xl font-bold mb-2">Ready to claim your crown?</h2>
          <p className={`mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Start learning in seconds — no sign-up required.
          </p>
          <button
            onClick={() => onLaunch()}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 transition"
          >
            Enter the Kingdom <FaChevronRight />
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
