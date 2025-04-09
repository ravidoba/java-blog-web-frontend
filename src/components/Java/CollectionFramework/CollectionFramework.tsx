import React from 'react';
import './CollectionFramework.css';

const CollectionFramework: React.FC = () => {
  return (
    <div className="collection-container">
      <h1>Java Collection Framework</h1>
      <p>
        The Java Collection Framework provides a unified architecture for representing and manipulating collections, enabling developers to manage data efficiently using reusable data structures.
      </p>

      <h2>🧩 Core Interfaces</h2>
      <ul>
        <li><strong>Iterable</strong></li>
        <li><strong>Collection</strong></li>
        <li><strong>List</strong></li>
        <li><strong>Set</strong></li>
        <li><strong>SortedSet</strong></li>
        <li><strong>NavigableSet</strong></li>
        <li><strong>Queue</strong></li>
        <li><strong>Deque</strong></li>
        <li><strong>Map</strong></li>
        <li><strong>SortedMap</strong></li>
        <li><strong>NavigableMap</strong></li>
      </ul>

      <h2>🏗️ Important Classes</h2>
      <ul>
        <li><strong>ArrayList</strong></li>
        <li><strong>LinkedList</strong></li>
        <li><strong>HashSet</strong></li>
        <li><strong>TreeSet</strong></li>
        <li><strong>LinkedHashSet</strong></li>
        <li><strong>HashMap</strong></li>
        <li><strong>TreeMap</strong></li>
        <li><strong>LinkedHashMap</strong></li>
        <li><strong>PriorityQueue</strong></li>
        <li><strong>ArrayDeque</strong></li>
        <li><strong>EnumSet</strong></li>
        <li><strong>EnumMap</strong></li>
        <li><strong>WeakHashMap</strong></li>
        <li><strong>IdentityHashMap</strong></li>
        <li><strong>Stack</strong></li>
        <li><strong>Vector</strong></li>
        <li><strong>Hashtable</strong></li>
        <li><strong>Properties</strong></li>
      </ul>

      <h2>🔒 Thread-Safe Classes</h2>
      <ul>
        <li><strong>Vector</strong> – Thread-safe version of ArrayList</li>
        <li><strong>Stack</strong> – LIFO stack backed by Vector</li>
        <li><strong>Hashtable</strong> – Thread-safe key-value store</li>
        <li><strong>Properties</strong> – Used for configuration files</li>
        <li><strong>Collections.synchronizedList()</strong>, <strong>synchronizedMap()</strong>, etc. – Wrappers</li>
        <li><strong>ConcurrentHashMap</strong></li>
        <li><strong>CopyOnWriteArrayList</strong></li>
        <li><strong>CopyOnWriteArraySet</strong></li>
        <li><strong>ConcurrentLinkedQueue</strong></li>
        <li><strong>ConcurrentSkipListMap</strong></li>
        <li><strong>ConcurrentSkipListSet</strong></li>
      </ul>

      <h2>📘 Code Example</h2>
      <pre>
{`import java.util.*;

public class CollectionExample {
  public static void main(String[] args) {
    List<String> list = new ArrayList<>();
    list.add("Java");
    list.add("Python");
    list.add("C++");

    for (String lang : list) {
      System.out.println(lang);
    }

    Map<Integer, String> map = new HashMap<>();
    map.put(1, "One");
    map.put(2, "Two");
    System.out.println(map.get(1));
  }
}`}
      </pre>

      <h2>🧬 Collection Hierarchy</h2>
      <pre className="hierarchy">
{`                Iterable
                    |
               Collection
      _____________|__________
     |        |         |     |
    List     Set      Queue  Deque
     |        |         |
ArrayList  HashSet   PriorityQueue
LinkedList TreeSet   LinkedList
Vector     LinkedHashSet
Stack

              Map
               |
       ---------------------
       |        |         |
   HashMap   TreeMap   LinkedHashMap
     |
  Hashtable
     |
Properties
`}
      </pre>

      <h2>✨ Benefits</h2>
      <ul>
        <li>Reduces development effort with standard data structures.</li>
        <li>Improves performance using efficient algorithms.</li>
        <li>Enhances code reusability and maintainability.</li>
        <li>Supports concurrent and synchronized access options.</li>
      </ul>
    </div>
  );
};

export default CollectionFramework;
