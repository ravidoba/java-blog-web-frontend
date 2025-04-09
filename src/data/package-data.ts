export interface PackageInfo {
  name: string;
  description: string;
  classes: {
    name: string;
    description: string;
    methods: string[];
  }[];
}

export const packageData: PackageInfo[] = [
  {
    name: "java.lang",
    description: "Provides classes that are fundamental to the design of the Java programming language.",
    classes: [
      {
        name: "Object",
        description: "The root class from which all classes in Java inherit.",
        methods: ["equals()", "hashCode()", "toString()", "notify()", "wait()"]
      },
      {
        name: "String",
        description: "Represents a sequence of characters.",
        methods: ["charAt()", "compareTo()", "concat()", "contains()", "equalsIgnoreCase()", "indexOf()", "length()", "replace()", "split()", "substring()", "toLowerCase()", "toUpperCase()", "trim()"]
      },
      {
        name: "Math",
        description: "Provides mathematical functions such as exponentiation, logarithms, and trigonometric operations.",
        methods: ["abs()", "acos()", "asin()", "atan()", "cbrt()", "ceil()", "cos()", "exp()", "floor()", "log()", "max()", "min()", "pow()", "random()", "round()", "sin()", "sqrt()", "tan()"]
      },
      {
        name: "System",
        description: "Provides access to system-related resources and utilities.",
        methods: ["arraycopy()", "currentTimeMillis()", "exit()", "gc()", "getProperty()", "setProperty()"]
      }
    ]
  },
  {
    name: "java.util",
    description: "Contains the collections framework, legacy collection classes, event model, date and time facilities, and miscellaneous utility classes.",
    classes: [
      {
        name: "ArrayList",
        description: "Resizable-array implementation of the List interface.",
        methods: ["add()", "remove()", "get()", "set()", "size()", "contains()"]
      },
      {
        name: "HashMap",
        description: "Hash table-based implementation of the Map interface.",
        methods: ["put()", "get()", "remove()", "containsKey()", "keySet()", "values()"]
      },
      {
        name: "HashSet",
        description: "Hash table-based implementation of the Set interface.",
        methods: ["add()", "remove()", "contains()", "size()"]
      },
      {
        name: "Collections",
        description: "Consists exclusively of static methods that operate on or return collections.",
        methods: ["sort()", "reverse()", "shuffle()", "binarySearch()", "max()", "min()"]
      }
    ]
  },
  {
    name: "java.io",
    description: "Provides for system input and output through data streams, serialization, and the file system.",
    classes: [
      {
        name: "File",
        description: "Represents file and directory pathnames in an abstract manner.",
        methods: ["createNewFile()", "delete()", "exists()", "getName()", "getPath()", "length()", "list()"]
      },
      {
        name: "FileInputStream",
        description: "Obtains input bytes from a file in a file system.",
        methods: ["read()", "close()", "available()", "skip()"]
      },
      {
        name: "FileOutputStream",
        description: "Writes bytes to a file in a file system.",
        methods: ["write()", "close()", "flush()"]
      },
      {
        name: "BufferedReader",
        description: "Reads text from a character-input stream, buffering characters to provide efficient reading.",
        methods: ["read()", "readLine()", "close()"]
      }
    ]
  },
  {
    name: "java.net",
    description: "Provides the classes for implementing networking applications.",
    classes: [
      {
        name: "URL",
        description: "Represents a Uniform Resource Locator, a pointer to a resource on the World Wide Web.",
        methods: ["openConnection()", "getHost()", "getPath()", "getProtocol()", "toString()"]
      },
      {
        name: "HttpURLConnection",
        description: "A subclass of URLConnection with support for HTTP-specific features.",
        methods: ["connect()", "disconnect()", "getResponseCode()", "getInputStream()", "setRequestMethod()"]
      },
      {
        name: "Socket",
        description: "Implements client sockets (also called just 'sockets').",
        methods: ["connect()", "close()", "getInputStream()", "getOutputStream()", "isConnected()"]
      },
      {
        name: "InetAddress",
        description: "Represents an Internet Protocol (IP) address.",
        methods: ["getByName()", "getHostAddress()", "getHostName()", "isReachable()"]
      }
    ]
  },
  {
    name: "java.sql",
    description: "Provides the API for accessing and processing data stored in a data source using the Java programming language.",
    classes: [
      {
        name: "Connection",
        description: "A connection (session) with a specific database.",
        methods: ["createStatement()", "prepareStatement()", "close()", "commit()", "rollback()"]
      },
      {
        name: "Statement",
        description: "The object used for executing a static SQL statement and returning the results it produces.",
        methods: ["executeQuery()", "executeUpdate()", "close()", "getResultSet()"]
      },
      {
        name: "ResultSet",
        description: "A table of data representing a database result set, which is usually generated by executing a statement that queries the database.",
        methods: ["next()", "getString()", "getInt()", "close()", "wasNull()"]
      },
      {
        name: "DriverManager",
        description: "Manages a list of database drivers.",
        methods: ["getConnection()", "registerDriver()", "getDriver()"]
      }
    ]
  },
  {
    name: "java.security",
    description: "Provides the classes and interfaces for the security framework.",
    classes: [
      {
        name: "MessageDigest",
        description: "Provides applications the functionality of a message digest algorithm, such as SHA-1 or SHA-256.",
        methods: ["getInstance()", "update()", "digest()", "reset()"]
      },
      {
        name: "SecureRandom",
        description: "Provides a cryptographically strong random number generator (RNG).",
        methods: ["nextBytes()", "setSeed()", "generateSeed()"]
      },
      {
        name: "KeyPairGenerator",
        description: "Used to generate pairs of public and private keys.",
        methods: ["getInstance()", "initialize()", "generateKeyPair()"]
      }
    ]
  },
  {
    name: "java.time",
    description: "Provides the date and time classes introduced in Java 8.",
    classes: [
      {
        name: "LocalDate",
        description: "A date without time or time-zone in ISO-8601 format.",
        methods: ["now()", "of()", "parse()", "plusDays()", "getYear()", "isBefore()"]
      },
      {
        name: "LocalTime",
        description: "A time without a date or time-zone in ISO-8601 format.",
        methods: ["now()", "of()", "parse()", "getHour()", "getMinute()", "isAfter()"]
      },
      {
        name: "LocalDateTime",
        description: "A date-time without a time-zone in the ISO-8601 calendar system.",
        methods: ["now()", "of()", "parse()", "plusHours()", "toLocalDate()", "toLocalTime()"]
      },
      {
        name: "Duration",
        description: "A time-based amount of time, such as '34.5 seconds'.",
        methods: ["ofSeconds()", "ofMinutes()", "getSeconds()", "plus()", "minus()"]
      }
    ]
  },
  {
    name: "java.math",
    description: "Provides classes for performing arbitrary-precision integer arithmetic (BigInteger) and arbitrary-precision decimal arithmetic (BigDecimal).",
    classes: [
      {
        name: "BigInteger",
        description: "Immutable arbitrary-precision integers.",
        methods: ["add()", "subtract()", "multiply()", "divide()", "mod()", "pow()"]
      },
      {
        name: "BigDecimal",
        description: "Immutable, arbitrary-precision signed decimal numbers.",
        methods: ["add()", "subtract()", "multiply()", "divide()", "scale()", "setScale()"]
      }
    ]
  },
  {
    name: "java.text",
    description: "Provides classes and interfaces for handling text, dates, numbers, and messages.",
    classes: [
      {
        name: "SimpleDateFormat",
        description: "A concrete class for formatting and parsing dates in a locale-sensitive manner.",
        methods: ["format()", "parse()", "applyPattern()", "toPattern()"]
      },
      {
        name: "DecimalFormat",
        description: "A concrete subclass of NumberFormat that formats decimal numbers.",
        methods: ["format()", "parse()", "applyPattern()", "toPattern()"]
      },
      {
        name: "MessageFormat",
        description: "Provides a means to produce concatenated messages in a language-neutral way.",
        methods: ["format()", "applyPattern()", "toPattern()"]
      }
    ]
  },
  {
    name: "java.nio",
    description: "Defines buffers, which are containers for data, and provides classes for various I/O operations.",
    classes: [
      {
        name: "ByteBuffer",
        description: "A buffer for bytes.",
        methods: ["allocate()", "put()", "get()", "flip()", "clear()", "limit()"]
      },
      {
        name: "CharBuffer",
        description: "A buffer for chars.",
        methods: ["allocate()", "put()", "get()", "flip()", "clear()", "length()"]
      },
      {
        name: "FileChannel",
        description: "A channel for reading, writing, mapping, and manipulating a file.",
        methods: ["open()", "read()", "write()", "position()", "size()", "truncate()"]
      }
    ]
  },
  {
    name: "java.util.concurrent",
    description: "Provides a framework for dealing with concurrency, including thread pools, synchronizers, and concurrent data structures.",
    classes: [
      {
        name: "ConcurrentHashMap",
        description: "A hash table supporting full concurrency of retrievals and high expected concurrency for updates.",
        methods: ["put()", "get()", "remove()", "containsKey()", "compute()", "forEach()"]
      },
      {
        name: "ExecutorService",
        description: "An interface for asynchronously executing tasks.",
        methods: ["submit()", "shutdown()", "invokeAll()", "invokeAny()", "awaitTermination()"]
      },
      {
        name: "CountDownLatch",
        description: "A synchronization aid that allows one or more threads to wait until a set of operations complete.",
        methods: ["await()", "countDown()", "getCount()"]
      },
      {
        name: "ReentrantLock",
        description: "An implementation of the Lock interface with the same basic behavior and semantics as the implicit monitor lock.",
        methods: ["lock()", "unlock()", "tryLock()", "isHeldByCurrentThread()", "getHoldCount()"]
      }
    ]
  },
  {
    name: "java.util.function",
    description: "Provides functional interfaces that support functional-style operations in Java.",
    classes: [
      {
        name: "Function",
        description: "Represents a function that accepts one argument and produces a result.",
        methods: ["apply()", "andThen()", "compose()", "identity()"]
      },
      {
        name: "Predicate",
        description: "Represents a predicate (boolean-valued function) of one argument.",
        methods: ["test()", "and()", "or()", "negate()"]
      },
      {
        name: "Supplier",
        description: "Represents a supplier of results.",
        methods: ["get()"]
      },
      {
        name: "Consumer",
        description: "Represents an operation that accepts a single input argument and returns no result.",
        methods: ["accept()", "andThen()"]
      }
    ]
  },
  {
    name: "java.util.stream",
    description: "Supports functional-style operations on streams of elements.",
    classes: [
      {
        name: "Stream",
        description: "Represents a sequence of elements supporting sequential and parallel aggregate operations.",
        methods: ["filter()", "map()", "reduce()", "collect()", "forEach()", "sorted()"]
      },
      {
        name: "Collectors",
        description: "Implements various useful reduction operations, such as accumulating elements into collections.",
        methods: ["toList()", "toSet()", "toMap()", "joining()", "groupingBy()", "partitioningBy()"]
      },
      {
        name: "IntStream",
        description: "A specialized stream for int values.",
        methods: ["sum()", "average()", "min()", "max()", "range()", "rangeClosed()"]
      }
    ]
  },
  {
    name: "java.lang.module",
    description: "Defines classes and interfaces to support modules in the Java Platform Module System.",
    classes: [
      {
        name: "Module",
        description: "Represents a runtime module, either named or unnamed.",
        methods: ["getName()", "isNamed()", "getDescriptor()", "getLayer()", "getPackages()"]
      },
      {
        name: "ModuleDescriptor",
        description: "Describes the properties of a module.",
        methods: ["name()", "exports()", "requires()", "provides()", "uses()"]
      },
      {
        name: "ModuleFinder",
        description: "Finds modules from a set of paths.",
        methods: ["find()", "of()", "ofSystem()"]
      }
    ]
  },
  {
    name: "java.net.http",
    description: "Provides an HTTP Client API to access resources via the HTTP and WebSocket protocols.",
    classes: [
      {
        name: "HttpClient",
        description: "An HTTP client for sending requests and receiving responses.",
        methods: ["send()", "sendAsync()", "newBuilder()", "connectTimeout()", "followRedirects()"]
      },
      {
        name: "HttpRequest",
        description: "Represents an HTTP request.",
        methods: ["uri()", "method()", "headers()", "timeout()", "build()"]
      },
      {
        name: "HttpResponse",
        description: "Represents an HTTP response.",
        methods: ["statusCode()", "body()", "headers()", "uri()", "request()"]
      },
      {
        name: "WebSocket",
        description: "A WebSocket client for full-duplex communication.",
        methods: ["sendText()", "sendBinary()", "sendPing()", "sendPong()", "abort()"]
      }
    ]
  },
  {
    name: "java.util.regex",
    description: "Provides classes for matching character sequences against patterns specified by regular expressions.",
    classes: [
      {
        name: "Pattern",
        description: "A compiled representation of a regular expression.",
        methods: ["compile()", "matcher()", "split()", "pattern()"]
      },
      {
        name: "Matcher",
        description: "An engine that performs match operations on a character sequence using a pattern.",
        methods: ["matches()", "find()", "group()", "replaceAll()", "start()", "end()"]
      }
    ]
  },
  {
    name: "java.util.prefs",
    description: "Provides a persistent backing store for preferences and configuration data.",
    classes: [
      {
        name: "Preferences",
        description: "This class allows applications to store and retrieve user and system preference data.",
        methods: ["put()", "get()", "remove()", "clear()", "flush()", "sync()"]
      }
    ]
  },
  {
    name: "java.lang.ref",
    description: "Provides reference-object classes, which support a limited degree of interaction with the garbage collector.",
    classes: [
      {
        name: "WeakReference",
        description: "Reference objects that do not prevent their referents from being made reclaimable.",
        methods: ["get()", "clear()", "enqueue()", "isEnqueued()"]
      },
      {
        name: "SoftReference",
        description: "Soft references are cleared at the discretion of the garbage collector in response to memory demand.",
        methods: ["get()", "clear()", "enqueue()", "isEnqueued()"]
      },
      {
        name: "PhantomReference",
        description: "Phantom references are the weakest type of reference, used for more flexible pre-mortem cleanup.",
        methods: ["get()", "enqueue()", "isEnqueued()"]
      },
      {
        name: "ReferenceQueue",
        description: "Queues used to hold references to objects that have been cleared by the garbage collector.",
        methods: ["poll()", "remove()"]
      }
    ]
  },
  {
    name: "java.util.spi",
    description: "Provides service provider classes for the java.util package.",
    classes: [
      {
        name: "LocaleServiceProvider",
        description: "An abstract class for locale sensitive service providers.",
        methods: ["getAvailableLocales()", "isSupportedLocale()"]
      },
      {
        name: "CurrencyNameProvider",
        description: "An abstract class for service providers that provide localized currency symbols and names.",
        methods: ["getSymbol()", "getDisplayName()"]
      }
    ]
  },
  {
    name: "java.text.spi",
    description: "Service provider classes for the java.text package.",
    classes: [
      {
        name: "DateFormatProvider",
        description: "An abstract class for service providers that provide localized date/time formatting.",
        methods: ["getDateInstance()", "getTimeInstance()", "getDateTimeInstance()"]
      },
      {
        name: "NumberFormatProvider",
        description: "An abstract class for service providers that provide localized number formatting.",
        methods: ["getCurrencyInstance()", "getNumberInstance()", "getPercentInstance()"]
      },
      {
        name: "CollatorProvider",
        description: "An abstract class for service providers that provide locale-specific collators.",
        methods: ["getInstance()"]
      }
    ]
  },
  {
    name: "java.time.chrono",
    description: "Provides general calendar systems and related functionality.",
    classes: [
      {
        name: "Chronology",
        description: "Defines a calendar system.",
        methods: ["date()", "dateNow()", "isLeapYear()", "eraOf()", "getCalendarType()"]
      },
      {
        name: "ChronoLocalDate",
        description: "Represents a date in an arbitrary chronology.",
        methods: ["getChronology()", "isBefore()", "isAfter()", "plus()", "minus()"]
      }
    ]
  },
  {
    name: "java.time.format",
    description: "Provides classes for printing and parsing dates and times.",
    classes: [
      {
        name: "DateTimeFormatter",
        description: "Formatter for printing and parsing date-time objects.",
        methods: ["format()", "parse()", "ofPattern()", "withLocale()", "withZone()"]
      },
      {
        name: "DateTimeFormatterBuilder",
        description: "Builder to create complex formatters.",
        methods: ["append()", "appendPattern()", "toFormatter()", "padNext()"]
      }
    ]
  },
  {
    name: "java.time.temporal",
    description: "Access to date and time using fields and units, plus date-time adjusters.",
    classes: [
      {
        name: "Temporal",
        description: "Framework-level interface for date/time types.",
        methods: ["plus()", "minus()", "with()", "isSupported()", "get()"]
      },
      {
        name: "TemporalAdjusters",
        description: "Common and useful TemporalAdjuster implementations.",
        methods: ["firstDayOfMonth()", "lastDayOfMonth()", "next()", "previous()"]
      },
      {
        name: "ChronoUnit",
        description: "A standard set of date periods units.",
        methods: ["between()", "isDurationEstimated()", "isDateBased()", "isTimeBased()"]
      }
    ]
  },
  {
    name: "java.time.zone",
    description: "Support for time-zones and rules for determining the offset for a specific instant.",
    classes: [
      {
        name: "ZoneRules",
        description: "Defines the rules for determining the offset for a given point in time.",
        methods: ["getOffset()", "getTransitionRules()", "isFixedOffset()"]
      },
      {
        name: "ZoneOffsetTransition",
        description: "A transition between two offsets caused by a daylight savings cutover.",
        methods: ["getInstant()", "getOffsetBefore()", "getOffsetAfter()", "isGap()", "isOverlap()"]
      }
    ]
  },
  {
    name: "java.util.jar",
    description: "Provides classes for reading and writing the JAR (Java ARchive) file format.",
    classes: [
      {
        name: "JarFile",
        description: "Represents a JAR file.",
        methods: ["getManifest()", "getJarEntry()", "entries()", "stream()", "getInputStream()"]
      },
      {
        name: "JarEntry",
        description: "Represents a JAR file entry.",
        methods: ["getName()", "getAttributes()", "getCertificates()", "getCodeSigners()"]
      },
      {
        name: "Manifest",
        description: "Represents the manifest of a JAR file.",
        methods: ["getMainAttributes()", "getEntries()", "write()"]
      }
    ]
  }
  ,
  {
    name: "java.util.zip",
    description: "Provides classes for reading and writing the standard ZIP and GZIP file formats.",
    classes: [
      {
        name: "ZipFile",
        description: "Represents a ZIP file for reading entries.",
        methods: ["entries()", "getEntry()", "getInputStream()", "close()"]
      },
      {
        name: "ZipEntry",
        description: "Represents an entry in a ZIP file.",
        methods: ["getName()", "getSize()", "getTime()", "getCompressedSize()"]
      },
      {
        name: "GZIPOutputStream",
        description: "Writes compressed data to an output stream using GZIP format.",
        methods: ["write()", "finish()", "close()"]
      }
    ]
  },
  {
    name: "java.beans",
    description: "Contains classes related to developing JavaBeans components.",
    classes: [
      {
        name: "PropertyChangeListener",
        description: "Receives notification of changes to a property.",
        methods: ["propertyChange()"]
      },
      {
        name: "PropertyChangeEvent",
        description: "Encapsulates a property change event.",
        methods: ["getPropertyName()", "getOldValue()", "getNewValue()", "getSource()"]
      },
      {
        name: "Introspector",
        description: "Provides introspection services for JavaBeans.",
        methods: ["getBeanInfo()"]
      }
    ]
  },
  {
    name: "java.rmi",
    description: "Provides the classes and interfaces for remote method invocation.",
    classes: [
      {
        name: "Remote",
        description: "Marker interface for remote objects.",
        methods: []
      },
      {
        name: "Naming",
        description: "Provides methods for storing and obtaining references to remote objects.",
        methods: ["bind()", "rebind()", "lookup()", "unbind()", "list()"]
      },
      {
        name: "UnicastRemoteObject",
        description: "Used to export a remote object with JRMP.",
        methods: ["exportObject()", "unexportObject()"]
      }
    ]
  },
  {
    name: "java.logging",
    description: "Provides the classes and interfaces of the Java platform's core logging facilities.",
    classes: [
      {
        name: "Logger",
        description: "Used to log messages for a specific system or application component.",
        methods: ["info()", "warning()", "severe()", "fine()", "finer()", "finest()"]
      },
      {
        name: "Level",
        description: "Defines the different logging levels.",
        methods: ["parse()", "intValue()", "getName()"]
      },
      {
        name: "LogManager",
        description: "Maintains the logging configuration of the logging framework.",
        methods: ["getLogManager()", "readConfiguration()", "getLogger()"]
      }
    ]
  },
  {
    name: "java.management",
    description: "Provides the management interfaces for monitoring and managing the Java VM.",
    classes: [
      {
        name: "ManagementFactory",
        description: "Factory class for getting managed beans for the Java platform.",
        methods: ["getRuntimeMXBean()", "getMemoryMXBean()", "getThreadMXBean()", "getOperatingSystemMXBean()"]
      },
      {
        name: "MemoryMXBean",
        description: "Provides the management interface for the memory system of the Java virtual machine.",
        methods: ["getHeapMemoryUsage()", "getNonHeapMemoryUsage()", "gc()"]
      },
      {
        name: "ThreadMXBean",
        description: "Management interface for the thread system of the Java virtual machine.",
        methods: ["getThreadCount()", "getThreadInfo()", "isThreadCpuTimeSupported()"]
      }
    ]
  }
  ,
  {
    name: "java.instrument",
    description: "Provides services that allow Java programming language agents to instrument programs running on the JVM.",
    classes: [
      {
        name: "Instrumentation",
        description: "Provides services needed to instrument Java programming language code.",
        methods: ["addTransformer()", "redefineClasses()", "getAllLoadedClasses()", "isRetransformClassesSupported()"]
      },
      {
        name: "ClassDefinition",
        description: "Represents a class and its new class file bytes.",
        methods: ["getDefinitionClass()", "getDefinitionClassFile()"]
      }
    ]
  },
  {
    name: "java.naming",
    description: "Provides classes and interfaces for accessing naming and directory services.",
    classes: [
      {
        name: "InitialContext",
        description: "Provides the starting context for performing naming operations.",
        methods: ["lookup()", "bind()", "rebind()", "unbind()", "close()"]
      },
      {
        name: "Context",
        description: "Defines methods for binding, unbinding, renaming objects, and creating subcontexts.",
        methods: ["lookup()", "bind()", "rebind()", "unbind()", "createSubcontext()"]
      },
      {
        name: "NameClassPair",
        description: "Represents the name and class of a bound object.",
        methods: ["getName()", "getClassName()"]
      }
    ]
  },
  {
    name: "java.desktop",
    description: "Contains classes for building GUI applications, images, printing, and accessibility features.",
    classes: [
      {
        name: "Desktop",
        description: "Represents the desktop integration API for launching associated applications.",
        methods: ["browse()", "mail()", "open()", "edit()", "print()"]
      },
      {
        name: "SystemTray",
        description: "Represents the system tray on the desktop.",
        methods: ["getSystemTray()", "add()", "remove()"]
      },
      {
        name: "TrayIcon",
        description: "Represents a tray icon that can be added to the system tray.",
        methods: ["setImage()", "setToolTip()", "displayMessage()"]
      }
    ]
  },
  {
    name: "javax.swing",
    description: "Provides a set of 'lightweight' (all-Java language) components that work the same on all platforms.",
    classes: [
      {
        name: "JFrame",
        description: "Represents a window with title, border, and buttons.",
        methods: ["setTitle()", "setSize()", "setVisible()", "add()", "setDefaultCloseOperation()"]
      },
      {
        name: "JPanel",
        description: "Generic container for lightweight components.",
        methods: ["add()", "removeAll()", "setLayout()", "repaint()"]
      },
      {
        name: "JButton",
        description: "A button component.",
        methods: ["setText()", "addActionListener()", "setEnabled()"]
      }
    ]
  },
  {
    name: "javax.sql",
    description: "Provides the API for server-side data source access and connection pooling.",
    classes: [
      {
        name: "DataSource",
        description: "Interface for getting database connections.",
        methods: ["getConnection()", "setLoginTimeout()", "getLogWriter()"]
      },
      {
        name: "RowSet",
        description: "Represents a set of rows from a relational database.",
        methods: ["execute()", "setCommand()", "setUrl()", "setUsername()", "setPassword()"]
      },
      {
        name: "ConnectionEvent",
        description: "Event that indicates that a connection has been closed or has an error.",
        methods: ["getSource()", "getSQLException()"]
      }
    ]
  },
  {
    name: "javax.crypto",
    description: "Provides the classes and interfaces for cryptographic operations such as encryption, key generation, and secure random number generation.",
    classes: [
      {
        name: "Cipher",
        description: "Provides the functionality of a cryptographic cipher for encryption and decryption.",
        methods: ["getInstance()", "init()", "doFinal()", "update()"]
      },
      {
        name: "KeyGenerator",
        description: "Generates secret keys for symmetric algorithms.",
        methods: ["getInstance()", "init()", "generateKey()"]
      },
      {
        name: "SecretKeySpec",
        description: "A key specification for a secret (symmetric) key.",
        methods: ["getEncoded()", "getAlgorithm()", "getFormat()"]
      }
    ]
  },
  {
    name: "javax.imageio",
    description: "Provides classes for reading and writing images in various formats.",
    classes: [
      {
        name: "ImageIO",
        description: "Contains static methods for locating ImageReaders and ImageWriters.",
        methods: ["read()", "write()", "getImageReaders()", "getImageWriters()"]
      },
      {
        name: "ImageReader",
        description: "An abstract superclass for reading images.",
        methods: ["setInput()", "read()", "getFormatName()", "getNumImages()"]
      },
      {
        name: "ImageWriter",
        description: "An abstract superclass for writing images.",
        methods: ["setOutput()", "write()", "getDefaultWriteParam()"]
      }
    ]
  },
  {
    name: "javax.naming",
    description: "Extends java.naming with additional classes and interfaces for directory access.",
    classes: [
      {
        name: "InitialDirContext",
        description: "Provides a starting context for directory operations.",
        methods: ["search()", "bind()", "rebind()", "modifyAttributes()", "lookup()"]
      },
      {
        name: "DirContext",
        description: "Extends the Context interface to provide directory operations.",
        methods: ["search()", "getAttributes()", "bind()", "rebind()", "modifyAttributes()"]
      }
    ]
  },
  {
    name: "javax.print",
    description: "Provides the principal classes and interfaces for the Java Print Service API.",
    classes: [
      {
        name: "PrintService",
        description: "Represents a print service that can handle a particular type of document.",
        methods: ["getName()", "getSupportedDocFlavors()", "createPrintJob()"]
      },
      {
        name: "DocPrintJob",
        description: "Represents a print job.",
        methods: ["print()", "addPrintJobListener()", "addPrintJobAttributeListener()"]
      },
      {
        name: "DocFlavor",
        description: "Describes the format of print data.",
        methods: ["getMimeType()", "getRepresentationClassName()"]
      }
    ]
  },
  {
    name: "javax.accessibility",
    description: "Defines a contract between user-interface components and assistive technologies.",
    classes: [
      {
        name: "AccessibleContext",
        description: "Defines the minimum information that assistive technologies require.",
        methods: ["getAccessibleName()", "getAccessibleRole()", "getAccessibleChildrenCount()"]
      },
      {
        name: "AccessibleState",
        description: "Describes a state of a component accessible to assistive technologies.",
        methods: ["toDisplayString()", "hashCode()", "equals()"]
      },
      {
        name: "AccessibleRole",
        description: "Describes the role of a component.",
        methods: ["toDisplayString()", "hashCode()", "equals()"]
      }
    ]
  }
  ,
  {
    name: "javax.sound.sampled",
    description: "Provides interfaces and classes for capture, processing, and playback of sampled audio data.",
    classes: [
      {
        name: "AudioSystem",
        description: "Acts as the entry point to the sampled-audio system.",
        methods: ["getMixerInfo()", "getLine()", "getAudioInputStream()", "write()"]
      },
      {
        name: "Clip",
        description: "A special kind of data line whose audio data can be loaded prior to playback.",
        methods: ["open()", "start()", "stop()", "close()", "setFramePosition()"]
      },
      {
        name: "TargetDataLine",
        description: "A type of DataLine from which audio data can be read.",
        methods: ["open()", "start()", "stop()", "read()", "close()"]
      }
    ]
  },
  {
    name: "javax.tools",
    description: "Provides interfaces for tools which can be invoked from a program, for example, compilers.",
    classes: [
      {
        name: "JavaCompiler",
        description: "Interface for Java programming language compilers.",
        methods: ["getStandardFileManager()", "getTask()", "run()"]
      },
      {
        name: "ToolProvider",
        description: "Provides access to tools such as compilers.",
        methods: ["getSystemJavaCompiler()", "getSystemToolClassLoader()"]
      },
      {
        name: "DiagnosticCollector",
        description: "Used to collect diagnostics from tools.",
        methods: ["getDiagnostics()", "report()"]
      }
    ]
  },
  {
    name: "jdk.httpserver",
    description: "Provides a simple high-level HTTP server API.",
    classes: [
      {
        name: "HttpServer",
        description: "Creates an HTTP server that listens on a specific port.",
        methods: ["create()", "start()", "stop()", "bind()", "createContext()"]
      },
      {
        name: "HttpHandler",
        description: "An interface that handles HTTP requests.",
        methods: ["handle()"]
      },
      {
        name: "HttpExchange",
        description: "Encapsulates an HTTP request and response pair.",
        methods: ["getRequestMethod()", "getRequestURI()", "getResponseBody()", "sendResponseHeaders()"]
      }
    ]
  },
  {
    name: "jdk.jfr",
    description: "Provides the API for Java Flight Recorder for profiling and diagnostics.",
    classes: [
      {
        name: "Event",
        description: "Base class for events that can be recorded by Java Flight Recorder.",
        methods: ["begin()", "commit()", "end()", "shouldCommit()"]
      },
      {
        name: "Recording",
        description: "Represents a recording session.",
        methods: ["start()", "stop()", "dump()", "close()", "getStream()"]
      },
      {
        name: "FlightRecorder",
        description: "Manages recordings and configuration.",
        methods: ["getFlightRecorder()", "getRecordings()", "register()"]
      }
    ]
  },
  {
    name: "jdk.crypto.ec",
    description: "Provides elliptic curve cryptography (ECC) algorithms.",
    classes: [
      {
        name: "ECKeyPairGenerator",
        description: "Generates elliptic curve key pairs.",
        methods: ["initialize()", "generateKeyPair()"]
      },
      {
        name: "ECPrivateKeyImpl",
        description: "Implementation of elliptic curve private key.",
        methods: ["getEncoded()", "getParams()", "getS()"]
      },
      {
        name: "ECPublicKeyImpl",
        description: "Implementation of elliptic curve public key.",
        methods: ["getEncoded()", "getParams()", "getW()"]
      }
    ]
  },
  {
    name: "jdk.internal.vm.ci",
    description: "Provides the JVM Compiler Interface (JVMCI) for advanced compiler and runtime support.",
    classes: [
      {
        name: "HotSpotCompiledCode",
        description: "Represents compiled code in the HotSpot JVM.",
        methods: ["getCode()", "getEntryPoint()", "getTargetCode()"]
      },
      {
        name: "VMField",
        description: "Represents a field in a Java class used by the compiler.",
        methods: ["getName()", "getOffset()", "getType()"]
      },
      {
        name: "VMConfig",
        description: "Holds VM-specific configuration used by compilers.",
        methods: ["getFlag()", "getConstants()", "getCPUFeatures()"]
      }
    ]
  },
  {
    name: "jdk.incubator.vector",
    description: "Provides an API to express vector computations that reliably compile at runtime to optimal vector instructions.",
    classes: [
      {
        name: "FloatVector",
        description: "A vector of float values used for SIMD operations.",
        methods: ["add()", "sub()", "mul()", "div()", "lanewise()"]
      },
      {
        name: "IntVector",
        description: "A vector of int values used for SIMD operations.",
        methods: ["add()", "sub()", "mul()", "div()", "compare()"]
      },
      {
        name: "VectorSpecies",
        description: "Describes a species of vector with specific element type and length.",
        methods: ["length()", "elementSize()", "vectorShape()", "fromArray()"]
      }
    ]
  },
  {
    name: "jdk.incubator.foreign",
    description: "Provides an API to interoperate with code and data outside of the Java runtime.",
    classes: [
      {
        name: "MemorySegment",
        description: "Represents a memory segment outside of the Java heap.",
        methods: ["address()", "asByteBuffer()", "close()", "isAlive()"]
      },
      {
        name: "CLinker",
        description: "Provides linking of native symbols with Java.",
        methods: ["downcallHandle()", "upcallStub()", "symbolLookup()"]
      },
      {
        name: "MemoryLayout",
        description: "Describes memory layouts and alignment constraints.",
        methods: ["bitSize()", "byteSize()", "withName()", "withByteAlignment()"]
      }
    ]
  },
  {
    name: "jdk.incubator.concurrent",
    description: "Provides structured concurrency API to simplify multithreaded programming.",
    classes: [
      {
        name: "StructuredTaskScope",
        description: "Facilitates structured concurrency by scoping the lifetime of tasks.",
        methods: ["fork()", "join()", "close()", "shutdown()", "joinUntil()"]
      },
      {
        name: "ScopedValue",
        description: "Holds values scoped to the execution of a task.",
        methods: ["where()", "get()", "isBound()"]
      },
      {
        name: "StructuredTaskScope.Subtask",
        description: "Represents a subtask forked within a StructuredTaskScope.",
        methods: ["resultNow()", "exceptionNow()", "state()"]
      }
    ]
  }
];
