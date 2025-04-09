export const versionData: Record<string, {
  version: string;
  releaseDate: string;
  summary: string;
  keyFeatures: string[];
  apiPackages: string[];
  importantNotes: string[];
  image: string;
}> = {
  "1": {
    version: "Java 1.0",
    releaseDate: "January 23, 1996",
    summary: "Java 1.0 was the first official release of the Java programming language by Sun Microsystems.",
    keyFeatures: [
      "Write Once, Run Anywhere (WORA) capability",
      "Automatic memory management (Garbage Collection)",
      "Basic platform-independent app development",
      "Support for applets in web browsers",
      "Core packages like java.lang, java.io, java.util"
    ],
    apiPackages: [
      "java.lang",
      "java.util",
      "java.io",
      "java.net",
      "java.awt",
      "java.applet"
    ],
    importantNotes: [
      "Initially designed for interactive television, but too advanced for the digital cable TV industry at the time.",
      "Gained popularity through its applet model in web browsers.",
      "Security and performance were the biggest concerns at launch."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  },

  "2": {
    version: "Java 1.2 (Java 2)",
    releaseDate: "December 8, 1998",
    summary: "Java 1.2 was a major release and marked the beginning of the Java 2 Platform. It introduced the Collections Framework and many performance and architectural improvements.",
    keyFeatures: [
      "Introduction of the Collections Framework",
      "Swing GUI library for better UI design",
      "Java Plug-in for web browsers",
      "Just-In-Time (JIT) compiler improvements",
      "Java Foundation Classes (JFC)"
    ],
    apiPackages: [
      "java.util (with Collections Framework)",
      "javax.swing",
      "java.awt",
      "java.security",
      "java.beans"
    ],
    importantNotes: [
      "Java 2 marked a branding change and the beginning of the Java 2 Platform.",
      "Performance and scalability significantly improved.",
      "Swing replaced AWT as the primary GUI library."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  },
  "3": {
    version: "Java 1.3",
    releaseDate: "May 8, 2000",
    summary: "Java 1.3, also known as 'Kestrel', brought important performance enhancements, new APIs, and better integration with the Java platform.",
    keyFeatures: [
      "HotSpot JVM became the default virtual machine",
      "Improved performance and garbage collection",
      "New APIs like Timer and Proxy",
      "RMI over IIOP (Remote Method Invocation over CORBA)",
      "JavaSound API introduced"
    ],
    apiPackages: [
      "java.util.Timer",
      "java.lang.reflect.Proxy",
      "javax.sound.sampled",
      "javax.sound.midi",
      "javax.naming"
    ],
    importantNotes: [
      "HotSpot JVM provided significant runtime optimizations and became the standard.",
      "Enhanced sound and multimedia support through JavaSound.",
      "RMI over IIOP allowed better integration with CORBA systems."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  },
  "4": {
    version: "Java 1.4",
    releaseDate: "February 6, 2002",
    summary: "Java 1.4, codename 'Merlin', was a significant release that introduced key language and API enhancements, especially for networking, IO, and exception handling.",
    keyFeatures: [
      "Assertions (assert keyword)",
      "Exception chaining",
      "New I/O (NIO) APIs for scalable I/O operations",
      "Logging API (java.util.logging)",
      "Image I/O API for reading/writing images"
    ],
    apiPackages: [
      "java.nio.*",
      "java.util.logging",
      "java.net",
      "javax.imageio",
      "java.lang (with assert keyword)"
    ],
    importantNotes: [
      "Assertions were added to support better debugging and testing.",
      "The NIO package enabled high-performance file and socket operations.",
      "Logging API provided built-in logging without third-party libraries."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  },
  "5": {
    version: "Java 5.0 (1.5)",
    releaseDate: "September 30, 2004",
    summary: "Java 5.0, codenamed 'Tiger', was one of the most revolutionary updates with new language features that modernized Java development significantly.",
    keyFeatures: [
      "Generics",
      "Enhanced for-loop (foreach)",
      "Autoboxing/unboxing",
      "Typesafe enums",
      "Varargs (variable-length arguments)",
      "Annotations (metadata)"
    ],
    apiPackages: [
      "java.lang.annotation",
      "java.util.concurrent",
      "java.lang.Enum",
      "java.util.* (updated with generics)"
    ],
    importantNotes: [
      "Java 5 brought Java closer to modern programming languages with generics and annotations.",
      "Concurrent utilities (java.util.concurrent) improved multi-threaded programming.",
      "This release greatly improved code readability and type safety."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  },
  "6": {
    version: "Java SE 6",
    releaseDate: "December 11, 2006",
    summary: "Java SE 6, code-named 'Mustang', focused on performance improvements, scripting support, and enhanced APIs for web services and desktop development.",
    keyFeatures: [
      "Scripting support via javax.script (JSR 223)",
      "Improved GUI (Swing) performance",
      "JDBC 4.0",
      "Pluggable annotations processing (APT tool)",
      "Integrated Java Compiler API"
    ],
    apiPackages: [
      "javax.script",
      "javax.annotation.processing",
      "java.sql (JDBC 4.0)",
      "javax.swing",
      "javax.xml.ws"
    ],
    importantNotes: [
      "Java SE 6 dropped the '1.x' naming convention.",
      "Focused on developer productivity and dynamic languages integration.",
      "Included bundled support for scripting languages like JavaScript."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  }
  ,
  "7": {
    version: "Java SE 7",
    releaseDate: "July 28, 2011",
    summary: "Java SE 7, code-named 'Dolphin', introduced several language enhancements and new APIs, improving developer productivity and platform performance.",
    keyFeatures: [
      "Try-with-resources statement",
      "Diamond operator",
      "Strings in switch",
      "Binary literals and underscores in numeric literals",
      "Fork/Join framework"
    ],
    apiPackages: [
      "java.nio.file (NIO.2)",
      "java.util.concurrent (ForkJoinPool)",
      "java.lang.invoke",
      "java.util.Objects"
    ],
    importantNotes: [
      "Improved file system support with NIO.2.",
      "Enhanced JVM support for dynamic languages.",
      "First major release under Oracle's stewardship after acquiring Sun Microsystems."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  }
  ,
  "8": {
    version: "Java SE 8",
    releaseDate: "March 18, 2014",
    summary: "Java SE 8 is one of the most significant releases, introducing functional programming features and the new Date and Time API.",
    keyFeatures: [
      "Lambda expressions",
      "Streams API",
      "Functional interfaces and default methods",
      "New Date and Time API (java.time)",
      "Nashorn JavaScript Engine"
    ],
    apiPackages: [
      "java.util.stream",
      "java.time",
      "java.util.function",
      "javax.script (Nashorn)"
    ],
    importantNotes: [
      "Enabled functional-style programming in Java.",
      "Greatly improved collection processing with Streams.",
      "Nashorn provided lightweight JavaScript integration (now deprecated in later versions)."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  },
  "9": {
    version: "Java SE 9",
    releaseDate: "September 21, 2017",
    summary: "Java 9 introduced the module system to improve scalability, security, and maintainability. It also added several API enhancements and performance improvements.",
    keyFeatures: [
      "Java Platform Module System (Project Jigsaw)",
      "JShell (Interactive REPL for Java)",
      "Improved Javadoc with search support",
      "Stream API enhancements (takeWhile, dropWhile, iterate)",
      "Private interface methods",
      "Compact Strings",
      "Multi-Release JARs"
    ],
    apiPackages: [
      "java.lang.Module",
      "java.util.stream",
      "jdk.jshell",
      "java.net.http (incubator)",
      "java.lang.invoke"
    ],
    importantNotes: [
      "The module system split the JDK into interoperable modules.",
      "JShell provides an interactive tool for learning and testing Java code.",
      "Performance improved with Compact Strings (UTF-16 replaced by optimized Latin-1)."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  }
  ,
  "10": {
    version: "Java SE 10",
    releaseDate: "March 20, 2018",
    summary: "Java 10 was a short-term release introducing local variable type inference and laying the groundwork for container-aware JVM behavior.",
    keyFeatures: [
      "Local-variable type inference using `var`",
      "Application Class-Data Sharing (AppCDS)",
      "Garbage-Collector Interface",
      "Root Certificates included in OpenJDK",
      "Thread-local handshakes",
      "Container-awareness for JVM memory limits"
    ],
    apiPackages: [
      "java.lang (with `var` inference)",
      "java.security.cert",
      "jdk.internal.vm",
      "jdk.packager.services.userjvmoptions"
    ],
    importantNotes: [
      "`var` improves readability for local variables but maintains strong typing.",
      "Java became more cloud/container-friendly with memory and CPU awareness.",
      "AppCDS improved startup performance by sharing class metadata across applications."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  }
  ,
  "11": {
    version: "Java SE 11 (LTS)",
    releaseDate: "September 25, 2018",
    summary: "Java 11 is a long-term support (LTS) release that continued modularization, removed deprecated features, and added powerful new APIs for HTTP, strings, and file operations.",
    keyFeatures: [
      "HTTP Client API (standardized)",
      "Local variable syntax for lambda parameters",
      "String methods: `isBlank`, `lines`, `strip`, `repeat`",
      "Files.readString() and writeString()",
      "Nest-based access control",
      "Flight Recorder and Mission Control (JDK tools)",
      "Launch single-file Java source-code programs"
    ],
    apiPackages: [
      "java.net.http",
      "java.lang.String",
      "java.nio.file.Files",
      "jdk.jfr (Java Flight Recorder)"
    ],
    importantNotes: [
      "Marked a significant shift in Oracle's support model (LTS every 3 years).",
      "Several deprecated features and modules were removed (e.g., Java EE, CORBA).",
      "The HTTP client introduced in Java 9 was finalized.",
      "Improved performance, monitoring, and diagnostics for production systems."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  },
  "12": {
    version: "Java SE 12",
    releaseDate: "March 19, 2019",
    summary: "Java 12 was a feature-focused release with new syntax previews and performance improvements.",
    keyFeatures: [
      "Switch Expressions (Preview)",
      "JVM Constants API",
      "Shenandoah: A Low-Pause-Time Garbage Collector (Experimental)",
      "Microbenchmark Suite",
      "Default CDS Archives"
    ],
    apiPackages: [
      "java.lang.invoke.ConstantDesc",
      "java.lang.runtime",
      "jdk.jfr",
      "java.util (Switch Expression updates)"
    ],
    importantNotes: [
      "Switch expressions introduced a more concise and safer alternative to traditional switch.",
      "Shenandoah GC reduced pause times for large heaps.",
      "Introduced infrastructure for better benchmarking and profiling tools."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  },
  "13": {
    version: "Java SE 13",
    releaseDate: "September 17, 2019",
    summary: "Java 13 introduced text blocks and enhancements to performance and memory handling.",
    keyFeatures: [
      "Text Blocks (Preview)",
      "Reimplement the Legacy Socket API",
      "Dynamic CDS Archives",
      "FileSystems.newFileSystem() improvements"
    ],
    apiPackages: [
      "java.lang.String (Text Blocks)",
      "java.net",
      "java.nio.file",
      "jdk.internal.misc"
    ],
    importantNotes: [
      "Text blocks improve multi-line string readability and avoid excessive escape sequences.",
      "Performance improvements across file I/O and memory usage.",
      "Continued refinement of class data sharing."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  },
  "14": {
    version: "Java SE 14",
    releaseDate: "March 17, 2020",
    summary: "Java 14 added more preview features, new records, and JVM diagnostics capabilities.",
    keyFeatures: [
      "Records (Preview)",
      "Pattern Matching for instanceof (Preview)",
      "Helpful NullPointerExceptions",
      "NVM support for Java Heap",
      "Foreign-Memory Access API (Incubator)"
    ],
    apiPackages: [
      "java.lang.Record",
      "java.lang.String",
      "jdk.incubator.foreign",
      "java.util (pattern matching support)"
    ],
    importantNotes: [
      "Records provide a compact syntax for immutable data carriers.",
      "Helpful NPEs display the exact variable causing a null pointer.",
      "Marked step toward cleaner and more expressive Java code."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  },
  "15": {
    version: "Java SE 15",
    releaseDate: "September 15, 2020",
    summary: "Java 15 introduced sealed classes, finalized text blocks, and included new garbage collectors.",
    keyFeatures: [
      "Text Blocks (Finalized)",
      "Sealed Classes (Preview)",
      "Hidden Classes",
      "Edwards-Curve Digital Signature Algorithm (EdDSA)",
      "ZGC becomes production-ready"
    ],
    apiPackages: [
      "java.lang.String",
      "java.lang.Class",
      "java.security",
      "jdk.internal.classloader"
    ],
    importantNotes: [
      "Sealed classes provide control over inheritance hierarchies.",
      "ZGC offers low-latency garbage collection for large heaps.",
      "Better security with new cryptographic signature algorithm (EdDSA)."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  }
  ,
  "16": {
    version: "Java SE 16",
    releaseDate: "March 16, 2021",
    summary: "Java 16 completed pattern matching for instanceof and added foreign memory access APIs.",
    keyFeatures: [
      "Pattern Matching for instanceof (Standard)",
      "Records (Standard)",
      "Foreign Linker API (Incubator)",
      "Unix-Domain Socket Channels",
      "JDK Internal APIs Encapsulation (Strong encapsulation by default)"
    ],
    apiPackages: [
      "java.lang",
      "java.net",
      "jdk.incubator.foreign",
      "java.nio.channels"
    ],
    importantNotes: [
      "Pattern matching streamlines instanceof checks and casting.",
      "Encapsulation of internal APIs enforces module boundaries.",
      "Major step toward making Java better for native interop."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  }
  ,
  "17": {
    version: "Java SE 17 (LTS)",
    releaseDate: "September 14, 2021",
    summary: "Java 17 is an LTS release that stabilized several modern features and improved performance and language expressiveness.",
    keyFeatures: [
      "Sealed Classes (Standard)",
      "Pattern Matching for switch (Preview)",
      "New macOS rendering pipeline",
      "Enhanced pseudo-random number generators",
      "Foreign Function & Memory API (Incubator)"
    ],
    apiPackages: [
      "java.lang",
      "java.util.random",
      "jdk.incubator.foreign",
      "java.lang.runtime"
    ],
    importantNotes: [
      "Java 17 is a major LTS release, recommended for production.",
      "Switch expressions and sealed classes enhance readability and structure.",
      "Better support for native code and external memory through incubator APIs."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  },
  "18": {
    version: "Java SE 18",
    releaseDate: "March 22, 2022",
    summary: "Java 18 was a smaller release focusing on preview features and cleanup of deprecated APIs.",
    keyFeatures: [
      "UTF-8 by Default",
      "Simple Web Server (Incubator)",
      "Code Snippets in JavaDoc",
      "Vector API (Third Incubator)",
      "Deprecate Finalization for Removal"
    ],
    apiPackages: [
      "jdk.httpserver",
      "jdk.incubator.vector",
      "java.nio.charset",
      "java.lang.ref"
    ],
    importantNotes: [
      "UTF-8 became the default charset for standard Java APIs.",
      "Simple web server is useful for prototyping and testing.",
      "Moved closer to removing finalization for memory safety."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  },
  "19": {
    version: "Java SE 19",
    releaseDate: "September 20, 2022",
    summary: "Java 19 continued previewing Project Loom, Panama, and Amber features.",
    keyFeatures: [
      "Virtual Threads (Preview)",
      "Structured Concurrency (Incubator)",
      "Pattern Matching for Switch (Second Preview)",
      "Record Patterns (Preview)",
      "Foreign Function & Memory API (Preview)"
    ],
    apiPackages: [
      "java.lang.Thread (Virtual Threads)",
      "jdk.incubator.concurrent",
      "jdk.incubator.foreign",
      "java.util.concurrent"
    ],
    importantNotes: [
      "Virtual threads aim to greatly improve scalability for concurrent applications.",
      "Structured concurrency simplifies multithreaded programming.",
      "Switch pattern matching continues evolving."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  }
  ,
  "20": {
    version: "Java SE 20",
    releaseDate: "March 21, 2023",
    summary: "Java 20 focused heavily on incubator and preview features related to concurrency and native interop.",
    keyFeatures: [
      "Scoped Values (Incubator)",
      "Record Patterns (Second Preview)",
      "Pattern Matching for Switch (Third Preview)",
      "Virtual Threads (Second Preview)",
      "Structured Concurrency (Second Incubator)",
      "Foreign Function & Memory API (Second Preview)"
    ],
    apiPackages: [
      "java.lang",
      "jdk.incubator.concurrent",
      "jdk.incubator.foreign",
      "java.util.concurrent"
    ],
    importantNotes: [
      "Project Loom features became more refined.",
      "Better modeling of data with pattern matching and record patterns.",
      "Continued expansion of Java into systems programming space."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  }
  ,
  "21": {
    version: "Java SE 21 (LTS)",
    releaseDate: "September 19, 2023",
    summary: "Java 21 is a major LTS release that finalized many features and added powerful language constructs.",
    keyFeatures: [
      "Virtual Threads (Final)",
      "Pattern Matching for Switch (Final)",
      "Record Patterns (Final)",
      "String Templates (Preview)",
      "Sequenced Collections",
      "Unnamed Patterns and Variables (Preview)",
      "Foreign Function & Memory API (Final)",
      "Structured Concurrency (Preview)"
    ],
    apiPackages: [
      "java.lang",
      "java.util",
      "jdk.incubator.vector",
      "jdk.incubator.concurrent",
      "jdk.internal.foreign"
    ],
    importantNotes: [
      "Virtual threads revolutionize concurrency in Java.",
      "Record patterns and pattern matching enable cleaner, declarative code.",
      "First major LTS with Project Loom and Panama stable features."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  },
  "22": {
    version: "Java SE 22",
    releaseDate: "March 19, 2024",
    summary: "Java 22 introduced finalized and preview features focused on productivity and performance.",
    keyFeatures: [
      "Unnamed Variables and Patterns (Second Preview)",
      "Statements before super() (Preview)",
      "Stream Gatherers (Preview)",
      "Scoped Values (Preview)",
      "String Templates (Second Preview)",
      "Foreign Function & Memory API (Final)",
      "Shenandoah and ZGC Enhancements"
    ],
    apiPackages: [
      "java.util.stream",
      "java.lang",
      "jdk.internal.foreign",
      "jdk.incubator.concurrent"
    ],
    importantNotes: [
      "Continued focus on Project Loom and Panama.",
      "String Templates enhance readability and safety of embedded expressions.",
      "Scoped Values improve thread-local alternatives in virtual thread world."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  }
  ,
  "23": {
    version: "Java SE 23 (Expected)",
    releaseDate: "September 2024 (Planned)",
    summary: "Java 23 is expected to polish Project Amber features and continue incubating enhancements from Loom and Panama.",
    keyFeatures: [
      "Potential finalization of String Templates",
      "More pattern matching features",
      "Further Stream API enhancements",
      "Performance improvements in ZGC/Shenandoah",
      "JDK unified logging updates"
    ],
    apiPackages: [
      "java.lang",
      "java.util",
      "jdk.internal.vm",
      "jdk.incubator.concurrent"
    ],
    importantNotes: [
      "May become the base for large-scale string processing improvements.",
      "Heavy performance tuning expected for cloud-native applications.",
      "No LTS planned; interim enhancements release."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  }
  , "24": {
    version: "Java SE 24 (Planned)",
    releaseDate: "March 2025 (Expected)",
    summary: "Java 24 will likely continue refining virtual threads, memory APIs, and developer productivity tools.",
    keyFeatures: [
      "Predicted improvements in concurrency APIs",
      "Enhancements in class-data sharing and startup time",
      "Further foreign-memory and FFI performance boosts",
      "New syntax sugar and developer experience features"
    ],
    apiPackages: [
      "java.lang",
      "java.util",
      "jdk.incubator.foreign",
      "jdk.incubator.vector"
    ],
    importantNotes: [
      "Speculated to refine the Java ecosystem for better cloud-native and microservice support.",
      "Will likely serve as a stepping stone to the next LTS (Java 25)."
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Java_logo.png"
  }


};
