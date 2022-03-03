(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{538:function(s,t,a){"use strict";a.r(t);var e=a(29),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_19-要么设计继承并提供文档说明-要么禁用继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_19-要么设计继承并提供文档说明-要么禁用继承"}},[s._v("#")]),s._v(" 19.  要么设计继承并提供文档说明，要么禁用继承")]),s._v(" "),a("p",[s._v("条目 18 中提醒你注意继承没有设计和文档说明的「外来」类的子类化的危险。 那么对于专门为了继承而设计并且具有良好文档说明的类而言，这又意味着什么呢？")]),s._v(" "),a("p",[s._v("首先，这个类必须准确地描述重写每个方法带来的影响。 换句话说，该类必须文档说明可重写方法的自用性（self-use）。 对于每个 public 或者 protected 的方法，文档必须指明方法调用哪些可重写方法，以何种顺序调用的，以及每次调用的结果又是如何影响后续处理。 （重写方法，这里是指非 "),a("code",[s._v("final")]),s._v(" 修饰的方法，无论是公开还是保护的。）更一般地说，一个类必须文档说明任何可能调用可重写方法的情况。 例如，后台线程或者静态初始化代码块可能会调用这样的方法。")]),s._v(" "),a("p",[s._v("调用可重写方法的方法在文档注释结束时包含对这些调用的描述。 这些描述在规范中特定部分，标记为「Implementation Requirements」，由 Javadoc 标签 "),a("code",[s._v("@implSpec")]),s._v(" 生成。 这段话介绍该方法的内部工作原理。 下面是从 "),a("code",[s._v("java.util.AbstractCollection")]),s._v(" 类的规范中拷贝的例子：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Removes")]),s._v(" a single instance of the specified element from "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" collection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" it is present "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("optional operation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("More")]),s._v(" formally"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" removes an element e such that "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Objects")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" collection contains one or more such "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("elements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v(" Returns")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" collection contained the specified element "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("or equivalently"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" collection changed as a result of the call"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Implementation")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Requirements")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("This")]),s._v(" implementation iterates over the collection looking "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the specified "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v(" If")]),s._v(" it finds the element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" it removes the element from the collection using the iterator’s remove "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v(" Note")]),s._v(" that "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" implementation "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" an "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UnsupportedOperationException")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" the iterator returned by "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" collection’s iterator method does not implement the remove method and "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" collection contains the specified object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("从该集合中删除指定元素的单个实例（如果存在，optional 实例操作）。 更广义地说，如果这个集合包含一个或多个这样的元素 e，就删除其中的一个满足 "),a("code",[s._v("Objects.equals(o, e)")]),s._v(" 的元素 e。 如果此集合包含指定的元素（或者等同于此集合因调用而发生了更改），则返回 true。")]),s._v(" "),a("p",[a("strong",[s._v("实现要求：")]),s._v(" 这个实现迭代遍历集合查找指定元素。 如果找到元素，则使用迭代器的 "),a("code",[s._v("remove")]),s._v(" 方法从集合中删除元素。 请注意，如果此集合的 "),a("code",[s._v("iterator")]),s._v(" 方法返回的迭代器未实现 "),a("code",[s._v("remove")]),s._v(" 方法，并且此集合包含指定的对象，则该实现将引发 "),a("code",[s._v("UnsupportedOperationException")]),s._v(" 异常。")]),s._v(" "),a("p",[s._v("这个文档清楚地说明，重写 "),a("code",[s._v("iterator")]),s._v(" 方法将会影响 "),a("code",[s._v("remove")]),s._v(" 方法的行为。 它还描述了 "),a("code",[s._v("iterator")]),s._v(" 方法返回的 "),a("code",[s._v("Iterator")]),s._v(" 行为将如何影响 "),a("code",[s._v("remove")]),s._v(" 方法的行为。 与条目 18 中的情况相反，在这种情况下，程序员继承 "),a("code",[s._v("HashSet")]),s._v(" 并不能说明重写 "),a("code",[s._v("add")]),s._v(" 方法是否会影响 "),a("code",[s._v("addAll")]),s._v(" 方法的行为。")]),s._v(" "),a("p",[s._v("关于程序文档有句格言：好的 API 文档应该描述一个给定的方法做了什么工作，而不是描述它是如何做到的。那么，上面这种做法是否违背了这句格言呢？是的，它确实违背了！这正是继承破坏了封装性所带来的不幸后果。所以，为了设计一个类的文档，以便它能够被安全地子类化，你必须描述清楚那些有可能未定义的实现细节。")]),s._v(" "),a("p",[a("code",[s._v("@implSpec")]),s._v(" 标签是在 Java 8 中添加的，并且在 Java 9 中被大量使用。这个标签应该默认启用，但是从 Java 9 开始，除非通过命令行开关"),a("code",[s._v('-tag "apiNote:a:API Note:"')]),s._v("，否则 Javadoc 工具仍然会忽略它。")]),s._v(" "),a("p",[s._v("为了继承而进行的设计不仅仅涉及自用模式的文档设计。为了使程序员能够编写出更加有效的子类，而无须承受不必要的痛苦，"),a("strong",[s._v("类必须以精心挑选的 protected 方法的形式，提供适当的钩子（hook），以便进入其内部工作中")]),s._v("。或者在罕见的情况下，提供受保护的属性。 例如，考虑 "),a("code",[s._v("java.util.AbstractList")]),s._v(" 中的 "),a("code",[s._v("removeRange")]),s._v(" 方法：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("removeRange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" fromIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" toIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Removes")]),s._v(" from "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" list all of the elements whose index is between fromIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" inclusive"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" and toIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("exclusive"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v(" Shifts")]),s._v(" any succeeding elements "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("the")]),s._v(" left "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("reduces their index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("This")]),s._v(" call shortens the list by "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("toIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" fromIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" elements"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("If")]),s._v(" toIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" fromIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" operation has no effect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("This")]),s._v(" method is called by the clear operation on "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" list and its "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("sublists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v(" Overriding")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" method "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("take")]),s._v(" advantage of the internals of the list implementation can substantially improve the performance of the clear operation on "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" list and its "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("sublists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("\n    \nImplementation")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Requirements")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("This")]),s._v(" implementation gets a list iterator positioned before fromIndex and repeatedly calls "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ListIterator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nextfollowed by "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ListIterator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("remove"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" until the entire range has been "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("removed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v(" Note")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("If")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ListIterator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("remove "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("requires")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("linear")]),s._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" implementation "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("requires")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("quadratic")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("\n    \nParameters")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    fromIndex    index of first element "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("be")]),s._v(" removed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    toIndex      index after last element "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("be")]),s._v(" removed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("从此列表中删除索引介于 "),a("code",[s._v("fromIndex")]),s._v("（包含）和 "),a("code",[s._v("inclusive")]),s._v("（不含）之间的所有元素。 将任何后续元素向左移（减少索引）。 这个调用通过（"),a("code",[s._v("toIndex - fromIndex")]),s._v("）元素来缩短列表。 （如果 "),a("code",[s._v("toIndex == fromIndex")]),s._v("，则此操作无效。）")]),s._v(" "),a("p",[s._v("这个方法是通过列表及其子类的 "),a("code",[s._v("clear")]),s._v(" 操作来调用的。重写这个方法利用列表内部实现的优势，可以大大提高列表和子类的 "),a("code",[s._v("clear")]),s._v(" 操作性能。")]),s._v(" "),a("p",[a("strong",[s._v("实现要求：")]),s._v(" 这个实现获取一个列表迭代器，它位于 "),a("code",[s._v("fromIndex")]),s._v(" 之前，并重复调用 "),a("code",[s._v("ListIterator.remove")]),s._v(" 和 "),a("code",[s._v("ListIterator.next")]),s._v(" 方法，直到整个范围被删除。 "),a("strong",[s._v("注意：如果 "),a("code",[s._v("ListIterator.remove")]),s._v(" 需要线性时间，则此实现需要平方级时间。")])]),s._v(" "),a("p",[s._v("参数："),a("br"),s._v("\n　　fromIndex 要移除的第一个元素的索引"),a("br"),s._v("\n　　toIndex 要移除的最后一个元素之后的索引")]),s._v(" "),a("p",[s._v("这个方法对 "),a("code",[s._v("List")]),s._v(" 实现的最终用户来说是没有意义的。 它仅仅是为了使子类很容易提供一个快速 "),a("code",[s._v("clear")]),s._v(" 方法。 在没有 "),a("code",[s._v("removeRange")]),s._v(" 方法的情况下，当在子列表上调用 "),a("code",[s._v("clear")]),s._v(" 方法，子类将不得不使用平方级的时间，否则，或从头重写整个 "),a("code",[s._v("subList")]),s._v(" 机制——这不是一件容易的事情！")]),s._v(" "),a("p",[s._v("那么当你设计一个继承类的时候，你如何决定暴露哪些的受保护的成员呢？ 不幸的是，没有灵丹妙药。 所能做的最好的就是努力思考，做出最好的测试，然后通过编写子类来进行测试。 应该尽可能少地暴露受保护的成员，因为每个成员都表示对实现细节的承诺。 另一方面，你不能暴露太少，因为失去了保护的成员会导致一个类几乎不能用于继承。")]),s._v(" "),a("p",[a("strong",[s._v("测试为继承而设计的类的唯一方法是编写子类。")]),s._v(" 如果你忽略了一个关键的受保护的成员，试图编写一个子类将会使得遗漏痛苦地变得明显。 相反，如果编写的几个子类，而且没有一个使用受保护的成员，那么应该将其设为私有。 经验表明，三个子类通常足以测试一个可继承的类。 这些子类应该由父类作者以外的人编写。")]),s._v(" "),a("p",[s._v("当你为继承设计一个可能被广泛使用的类的时候，要意识到你永远承诺你文档说明的自用模式以及隐含在其保护的方法和属性中的实现决定。 这些承诺可能会使后续版本中改善类的性能或功能变得困难或不可能。 因此， "),a("strong",[s._v("在发布它之前，你必须通过编写子类来测试你的类。")])]),s._v(" "),a("p",[s._v("另外，请注意，继承所需的特殊文档混乱了正常的文档，这是为创建类的实例并在其上调用方法的程序员设计的。 在撰写本文时，几乎没有工具将普通的 API 文档从和仅仅针对子类实现的信息，分离出来。")]),s._v(" "),a("p",[s._v("还有一些类必须遵守允许继承的限制。 "),a("strong",[s._v("构造方法绝不能直接或间接调用可重写的方法。")]),s._v(" 如果违反这个规则，将导致程序失败。 父类构造方法在子类构造方法之前运行，所以在子类构造方法运行之前，子类中的重写方法被调用。 如果重写方法依赖于子类构造方法执行的任何初始化，则此方法将不会按预期运行。 为了具体说明，这是一个违反这个规则的类：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Super")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Broken - constructor invokes an overridable method")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("overrideMe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("overrideMe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("以下是一个重写 "),a("code",[s._v("overrideMe")]),s._v(" 方法的子类，"),a("code",[s._v("Super")]),s._v(" 类的唯一构造方法会错误地调用它：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sub")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Super")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Blank final, set by constructor")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Instant")]),s._v(" instant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        instant "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Instant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Overriding method invoked by superclass constructor")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("overrideMe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("instant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sub")]),s._v(" sub "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("overrideMe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("你可能期望这个程序打印两次 "),a("code",[s._v("instant")]),s._v(" 实例，但是它第一次打印出 "),a("code",[s._v("null")]),s._v("，因为在 "),a("code",[s._v("Sub")]),s._v(" 构造方法有机会初始化 "),a("code",[s._v("instant")]),s._v(" 属性之前，"),a("code",[s._v("overrideMe")]),s._v(" 被 "),a("code",[s._v("Super")]),s._v(" 构造方法调用。 请注意，这个程序观察两个不同状态的 "),a("code",[s._v("final")]),s._v(" 属性！ 还要注意的是，如果 "),a("code",[s._v("overrideMe")]),s._v(" 方法调用了 instant 实例中任何方法，那么当父类构造方法调用 "),a("code",[s._v("overrideMe")]),s._v(" 时，它将抛出一个 "),a("code",[s._v("NullPointerException")]),s._v(" 异常。 这个程序不会抛出 "),a("code",[s._v("NullPointerException")]),s._v(" 的唯一原因是 "),a("code",[s._v("println")]),s._v(" 方法容忍 "),a("code",[s._v("null")]),s._v(" 参数。")]),s._v(" "),a("p",[s._v("请注意，从构造方法中调用私有方法，其中任何一个方法都不可重写的，那么 "),a("code",[s._v("final")]),s._v(" 方法和静态方法是安全的。")]),s._v(" "),a("p",[a("code",[s._v("Cloneable")]),s._v(" 和 "),a("code",[s._v("Serializable")]),s._v(" 接口在设计继承时会带来特殊的困难。 对于为继承而设计的类来说，实现这些接口通常不是一个好主意，因为这会给继承类的程序员带来很大的负担。 然而，可以采取特殊的行动来允许子类实现这些接口，而不需要强制这样做。 这些操作在条目 13 和条目 86 中有描述。")]),s._v(" "),a("p",[s._v("如果你决定在为继承而设计的类中实现 "),a("code",[s._v("Cloneable")]),s._v(" 或 "),a("code",[s._v("Serializable")]),s._v(" 接口，那么应该知道，由于 "),a("code",[s._v("clone")]),s._v(" 和 "),a("code",[s._v("readObject")]),s._v(" 方法与构造方法相似，所以也有类似的限制： "),a("strong",[a("code",[s._v("clone")]),s._v(" 和 "),a("code",[s._v("readObject")]),s._v(" 都不会直接或间接调用可重写的方法。")]),s._v(" 在 "),a("code",[s._v("readObject")]),s._v(" 的情况下，重写方法将在子类的状态被反序列化之前运行。 在 "),a("code",[s._v("clone")]),s._v(" 的情况下，重写方法将在子类的 "),a("code",[s._v("clone")]),s._v(" 方法有机会修复克隆的状态之前运行。 在任何一种情况下，都可能会出现程序故障。 在 "),a("code",[s._v("clone")]),s._v(" 的情况下，故障可能会损坏原始对象以及被克隆对象本身。 例如，如果重写方法假定它正在修改对象的深层结构的拷贝，但是尚未创建拷贝，则可能发生这种情况。")]),s._v(" "),a("p",[s._v("最后，如果你决定在为继承设计的类中实现 "),a("code",[s._v("Serializable")]),s._v(" 接口，并且该类有一个 "),a("code",[s._v("readResolve")]),s._v(" 或 "),a("code",[s._v("writeReplace")]),s._v(" 方法，则必须使 "),a("code",[s._v("readResolve")]),s._v(" 或 "),a("code",[s._v("writeReplace")]),s._v(" 方法设置为受保护而不是私有。 如果这些方法是私有的，它们将被子类无声地忽略。 这是另一种情况，把实现细节成为类的 API 的一部分，以允许继承。")]),s._v(" "),a("p",[s._v("到目前为止，"),a("strong",[s._v("设计一个继承类需要很大的努力，并且对这个类有很大的限制。")]),s._v(" 这不是一个轻率的决定。 有些情况显然是正确的，比如抽象类，包括接口的骨架实现（skeletal implementations）（详见第 20  条）。 还有其他的情况显然是错误的，比如不可变的类（详见第 17 条）。")]),s._v(" "),a("p",[s._v("但是普通的具体类呢？ 传统上，它们既不是 "),a("code",[s._v("final")]),s._v(" 的，也不是为了子类化而设计和文档说明的，但是这种情况是危险的。每次修改这样的类，则继承此类的子类将被破坏。 这不仅仅是一个理论问题。 在修改非 "),a("code",[s._v("final")]),s._v(" 的具体类的内部之后，接收与子类相关的错误报告并不少见，这些类没有为继承而设计和文档说明。")]),s._v(" "),a("p",[a("strong",[s._v("解决这个问题的最佳方法是禁止对在设计上和文档说明中都不支持安全子类化的类进行子类化。")]),s._v(" 这有两种方法禁止子类化。 两者中较容易的是声明类为 "),a("code",[s._v("final")]),s._v("。 另一种方法是使所有的构造方法都是私有的或包级私有的，并且添加公共静态工厂来代替构造方法。 这个方案在内部提供了使用子类的灵活性，在条目 17 中讨论过。两种方法都是可以接受的。")]),s._v(" "),a("p",[s._v("这个建议可能有些争议，因为许多程序员已经习惯于继承普通的具体类来增加功能，例如通知和同步等功能，或限制原有类的功能。 如果一个类实现了捕获其本质的一些接口，比如 "),a("code",[s._v("Set")]),s._v("，"),a("code",[s._v("List")]),s._v(" 或 "),a("code",[s._v("Map")]),s._v("，那么不应该为了禁止子类化而感到愧疚。 在条目 18 中描述的包装类模式为增强功能提供了继承的优越选择。")]),s._v(" "),a("p",[s._v("如果一个具体的类没有实现一个标准的接口，那么你禁止继承可能给一些程序员带来不便。 如果你觉得你必须允许从这样的类继承，一个合理的方法是确保类从不调用任何可重写的方法，并文档说明这个事实。 换句话说，完全消除类的自用（self-use）的可重写的方法。 这样做，你将创建一个合理安全的子类。 重写一个方法不会影响任何其他方法的行为。")]),s._v(" "),a("p",[s._v("你可以机械地消除类的自我使用的重写方法，而不会改变其行为。 将每个可重写的方法的主体移动到一个私有的“帮助器方法”，并让每个可重写的方法调用其私有的帮助器方法。 然后用直接调用可重写方法的专用帮助器方法来替换每个自用的可重写方法。")]),s._v(" "),a("p",[s._v("简而言之，专门为了继承而设计类是一件很辛苦的工作。你必须建立文档说明其所有的自用模式，并且一旦建立了文档，在这个类的整个生命周期中都必须遵守。如果没有做到，子类就会依赖父类的实现细节，如果父类的实现发生了变化，它就有可能遭到破坏。为了允许其他人能编写出高效的子类，你还必须暴露一个或者多个受保护的方法。除非意识到真的需要子类，否则最好通过将类声明为 "),a("code",[s._v("final")]),s._v("，或者确保没有可访问的构造器来禁止类被继承。")])])}),[],!1,null,null,null);t.default=n.exports}}]);