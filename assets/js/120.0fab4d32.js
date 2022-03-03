(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{585:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_69-只针对异常的情况下才使用异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_69-只针对异常的情况下才使用异常"}},[t._v("#")]),t._v(" 69. 只针对异常的情况下才使用异常")]),t._v(" "),a("p",[t._v("假如你某一天不走运的话，可能遇到如下代码：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Horrible abuse of exceptions. Don't ever do this! */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        range"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("climb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayIndexOutOfBoundsException")]),t._v(" e "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("这段代码有什用，看起来根本不明显，这正是它没有真正被使用的原因（详见 67 条）。事实证明，作为一个要对数组元素进行遍历的实现方式，它的构想是十分拙劣的。当这个循环企图访问数组边界之外的第一个数组元素的时候，使用 try-catch 并且忽略 "),a("code",[t._v("ArrayIndexOutOfBoundsException")]),t._v(" 异常的手段来达到终止无限循环的目的。假定它与数组循环的标准模式是等价的，对于它的标准模式每个 Java 程序员都可以一眼辨认出来：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mountain")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" range "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("climb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("那么为什么有人会企图使用基于异常的循环，而不是使用行之有效的模式呢？这是他们误以为可以使用 Java 的错误判断机制来提高程序性能，因为 VM 对每次数组访问都要检查越界情况，所以他们认为正常的循环终止测试被编译器隐藏了，但是在 for-each 中仍然可见，这是多余的并且应当避免。这种想法有三个错误：")]),t._v(" "),a("ul",[a("li",[t._v("因为异常设计的初衷适用于不正常的情形，所有几乎没有 JVM 实现试图对他们进行优化，使它们与显式的测试一样快。")]),t._v(" "),a("li",[t._v("把代码放在 try-catch 块中反而阻止了现代 JVM 实现本可能执行的某些特定优化。")]),t._v(" "),a("li",[t._v("对数据进行遍历的标准模式并不会导致冗余的检查。有些 JVM 实现会将它们优化掉。")])]),t._v(" "),a("p",[t._v("实际上基于异常的模式比标准模式要慢得多。在我本地的机器上，对于一个有 100 个元素的数组进行遍历，标准模式比基于异常的模式快了 2 倍。")]),t._v(" "),a("p",[t._v("基于异常的循环模式不仅模糊了代码的意图，降低了它的性能，而且它还不能保证正常工作！如果出现了不相关的 bug，这个模式会悄悄的消失从而掩盖了这个 Bug，极大地增加了调试过程的复杂性。假设循环体的计算过程中调用了一个方法，这个方法执行了对某个不相关数组的越界访问。如果使用合理的循环模式，这个 Bug 会产生未被捕捉的异常，从而导致线程立即结束，并产生完整的堆栈轨迹。如果使用这个被误导的基于异常的循环模式，与这个 Bug 相关的异常将会被捕捉到，并且被错误的解释为正常的循环终止条件。")]),t._v(" "),a("p",[t._v("这个例子的教训很简单：顾名思义，"),a("strong",[t._v("异常应该只用于异常的情况下；他们永远不应该用于正常的程序控制流程。")]),t._v(" 一般的，应该优先使用标准的、容易理解的模式，而不是那些声称可以提供更好性能的、弄巧成拙的方法。即使真的能够改进性能，面对平台的不断改进，这种模型的性能优势也不可能一直保持。然而这种过度聪明的模式带来的微妙 Bug 和维护的痛苦将依旧存在。")]),t._v(" "),a("p",[t._v("这条原则对于 API 设计也有启发**。设计良好的 API 不应该强迫它的客户端为了正常的控制流程而使用异常。**如果类中具有「状态相关」（state-dependent）的方法，即只有在特定的不可预知的条件下才可以被调用的方法，这个类往往也应该具有一个单独的「状态测试」（state-testing）方法，即表明是否可以调用这个状态相关的方法。比如 Iterator 接口含有状态相关的 next 方法，以及相应的状态测试方法 hasNext。这使得利用传统的 for 循环（以及 for-each 循环，在内部使用了 hasNext 方法）对集合进行迭代的标准模式成为可能。")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Iterator")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" collection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("iterator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasNext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("如果 Iterator 缺少 hasNext 方法，客户端将被迫改用下面的做法：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Do not use this hideous code for iteration over a collection! */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Iterator")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" collection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("iterator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NoSuchElementException")]),t._v(" e "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("这应该非常类似于本条目刚开始时对数据进行迭代的例子。除了代码繁琐令人误解之外，这个基于异常的模式可能执行起来也比标准模式更差，并且还可能掩盖系统中其他不相关部分的 Bug。")]),t._v(" "),a("p",[t._v("另外一种提供单独状态测试的做法是，如果「状态相关」方法无法执行想要的计算，就可以让它返回一个零长度的 optional 值（详见第 55 条），或者返回一个可被识别的返回值，比如 null。")]),t._v(" "),a("p",[t._v("对于「状态测试方法」和「optional 返回值或者可识别的返回值」这两种做法，有些指导原则可以帮助你在两者之间做出选择。如果对象将在缺少外部同步的情况下被并发访问，或者可被外界改变状态，就必须使用「optional 返回值或者可识别的返回值」，因为在调用「状态测试」方法和调用对应的「状态相关」方法的时间间隔之中，对象的状态有可能发生变化。如果单独的「状态测试」方法必须重复「状态相关」方法的工作，从性能的角度考虑，就必须使用可被识别的返回值。如果其他方面都是等同的，那么「状态测试」方法则优于可被识别的返回值。他提供了相对更高的可读性，对于使用不当的情形可能更加易于检测和改正：如果忘了去调用状态测试方法，状态相关的方法就会抛出异常，使得这个 Bug 变得很明显；如果忘了去检查可识别的返回值，这个 Bug 就很难被发现。optional 返回值不会有这方面的问题。")]),t._v(" "),a("p",[t._v("总而言之，异常是为了在异常情况下被设计和使用的。不要将它们勇于普通的控制流程，也不要编写迫使它们这么做的 API。")])])}),[],!1,null,null,null);s.default=e.exports}}]);