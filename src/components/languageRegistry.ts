import { assemblyConfig } from './languageData/AssemblyData';
import { bashConfig } from './languageData/BashData';
import { cConfig } from './languageData/CData';
import { clojureConfig } from './languageData/ClojureData';
import { cppConfig } from './languageData/CppData';
import { csharpConfig } from './languageData/CsharpData';
import { dartConfig } from './languageData/DartData';
import { elixirConfig } from './languageData/ElixirData';
import { elmConfig } from './languageData/ElmData';
import { fSharpConfig } from './languageData/FSharpData';
import { goConfig } from './languageData/GoData';
import { haskellConfig } from './languageData/HaskellData';
import { javaConfig } from './languageData/JavaData';
import { javaScriptConfig } from './languageData/JavaScriptData';
import { juliaConfig } from './languageData/JuliaData';
import { kotlinConfig } from './languageData/KotlinData';
import { luaConfig } from './languageData/LuaData';
import { matlabConfig } from './languageData/MatlabData';
import { objectiveCConfig } from './languageData/ObjectiveCData';
import { perlConfig } from './languageData/PerlData';
import { phpConfig } from './languageData/PHPData';
import { prologConfig } from './languageData/PrologData';
import { pythonConfig } from './languageData/PythonData';
import { rConfig } from './languageData/RData';
import { rubyConfig } from './languageData/RubyData';
import { rustConfig } from './languageData/RustData';
import { scalaConfig } from './languageData/ScalaData';
import { shellConfig } from './languageData/ShellData';
import { sqlConfig } from './languageData/SQLData';
import { swiftConfig } from './languageData/SwiftData';
import { typeScriptConfig } from './languageData/TypeScriptData';

export type LanguageConfig = {
  title: string;
  language: string;
  tutorialData: {
    id: string;
    title: string;
    subtopics: {
      id: string;
      title: string;
      description: string;
      content: string;
      output: string;
    }[];
  }[];
};

export const languageRegistry: Record<string, LanguageConfig> = {
  Assembly: assemblyConfig,
  Bash: bashConfig,
  C: cConfig,
  Clojure: clojureConfig,
  Cpp: cppConfig,
  Csharp: csharpConfig,
  Dart: dartConfig,
  Elixir: elixirConfig,
  Elm: elmConfig,
  FSharp: fSharpConfig,
  Go: goConfig,
  Haskell: haskellConfig,
  Java: javaConfig,
  JavaScript: javaScriptConfig,
  Julia: juliaConfig,
  Kotlin: kotlinConfig,
  Lua: luaConfig,
  Matlab: matlabConfig,
  ObjectiveC: objectiveCConfig,
  Perl: perlConfig,
  PHP: phpConfig,
  Prolog: prologConfig,
  Python: pythonConfig,
  R: rConfig,
  Ruby: rubyConfig,
  Rust: rustConfig,
  Scala: scalaConfig,
  Shell: shellConfig,
  SQL: sqlConfig,
  Swift: swiftConfig,
  TypeScript: typeScriptConfig,
};
