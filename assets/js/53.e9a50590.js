(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{520:function(e,v,a){"use strict";a.r(v);var t=a(29),_=Object(t.a)({},(function(){var e=this,v=e.$createElement,a=e._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_1-考虑使用静态工厂方法替代构造方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-考虑使用静态工厂方法替代构造方法"}},[e._v("#")]),e._v(" 1. 考虑使用静态工厂方法替代构造方法")]),e._v(" "),a("p",[e._v("一个类允许客户端获取其实例的传统方式是提供一个公共构造方法。 其实还有另一种技术应该成为每个程序员工具箱的一部分。 一个类可以提供一个公共静态工厂方法，它只是一个返回类实例的静态方法。 下面是一个 "),a("code",[e._v("Boolean")]),e._v(" 简单的例子（"),a("code",[e._v("boolean")]),e._v(" 基本类型的包装类）。 此方法将 "),a("code",[e._v("boolean")]),e._v(" 基本类型转换为 "),a("code",[e._v("Boolean")]),e._v(" 对象引用：")]),e._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Boolean")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("valueOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("boolean")]),e._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("TRUE "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("FALSE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("注意，静态工厂方法与设计模式中的工厂方法模式不同[Gamma95]。本条目中描述的静态工厂方法在设计模式中没有直接的等价。")]),e._v(" "),a("p",[e._v("类可以为其客户端提供静态工厂方法，而不是公共构造方法。提供静态工厂方法而不是公共构造方法有优点也有缺点。")]),e._v(" "),a("p",[a("strong",[e._v("静态工厂方法的一个优点是，与构造方法不同，它们是有名字的。")]),e._v(" 如果构造方法的参数本身并不描述被返回的对象，则具有精心选择名称的静态工厂更易于使用，并且生成的客户端代码更易于阅读。 例如，返回一个可能为素数的 "),a("code",[e._v("BigInteger")]),e._v(" 的构造方法 "),a("code",[e._v("BigInteger(int，int，Random)")]),e._v(" 可以更好地表示为名为 "),a("code",[e._v("BigInteger.probablePrime")]),e._v(" 的静态工厂方法。 （这个方法是在 Java 1.4 中添加的。）")]),e._v(" "),a("p",[e._v("一个类只能有一个给定签名的构造方法。 程序员知道通过提供两个构造方法来解决这个限制，这两个构造方法的参数列表只有它们的参数类型的顺序不同。 这是一个非常糟糕的主意。 这样的 API 用户将永远不会记得哪个构造方法是哪个，最终会错误地调用。 阅读使用这些构造方法的代码的人只有在参考类文档的情况下才知道代码的作用。")]),e._v(" "),a("p",[e._v("因为他们有名字，所以静态工厂方法不会受到上面讨论中的限制。在类中似乎需要具有相同签名的多个构造方法的情况下，用静态工厂方法替换构造方法，并仔细选择名称来突出它们的差异。")]),e._v(" "),a("p",[a("strong",[e._v("静态工厂方法的第二个优点是，与构造方法不同，它们不需要每次调用时都创建一个新对象。")]),e._v(" 这允许不可变类 （详见第 17 条）使用预先构建的实例，或者在构造时缓存实例，并反复分配它们以避免创建不必要的重复对象。"),a("code",[e._v("Boolean.valueof(boolean)")]),e._v(" 方法说明了这种方法：它从不创建对象。这种技术类似于 "),a("code",[e._v("Flyweight")]),e._v(" 模式[Gamma95]。如果经常请求等价对象，那么它可以极大地提高性能，特别是在创建它们的代价非常昂贵的情况下。")]),e._v(" "),a("p",[e._v("静态工厂方法重复调用返回相同实例这个特点可以让类在任何时候都能对实例保持严格的控制。这样做的类被称为实例控制类（ instance-controlled）。有很多理由足以让我们去我们编写实例控制类。实例控制可以保证一个类是单例 的（详见第 3 条） 或不可实例化的 （详见第 4 条）。同时,它允许一个不可变的值类 （详见第 17 条） 保证不存在两个相等但不相同的实例，也就是说当且仅当 "),a("code",[e._v("a == b")]),e._v(" 时才有 "),a("code",[e._v("a.equals(b)")]),e._v("。这是"),a("code",[e._v("Flyweight")]),e._v("模式的基础[Gamma95]。"),a("code",[e._v("Enum")]),e._v(" 类型 （详见第 34 条）可以做到这点。")]),e._v(" "),a("p",[a("strong",[e._v("静态工厂方法的第三个优点是，与构造方法不同，它们可以返回其返回类型的任何子类型的对象。")]),e._v(" 这为你在选择返回对象的类时提供了很大的灵活性。")]),e._v(" "),a("p",[e._v("这种灵活性的一个应用是 API 可以返回对象而不需要公开它的类。 以这种方式隐藏实现类会使 API 非常紧凑。 这种技术适用于基于接口的框架（详见第 20 条），其中接口为静态工厂方法提供自然返回类型。")]),e._v(" "),a("p",[e._v("在 Java 8 之前，接口不能有静态方法。根据约定，一个名为 "),a("code",[e._v("Type")]),e._v(" 的接口的静态工厂方法被放入一个不可实例化的伙伴类（companion class）（详见第 4 条）"),a("code",[e._v("Types")]),e._v(" 类中。例如，Java 集合框架有 45 个接口的实用工具实现，提供不可修改的集合、同步集合等等。几乎所有这些实现都是通过静态工厂方法在一个不可实例化的类 ("),a("code",[e._v("java .util. collections")]),e._v(") 中返回的。返回对象的类都隐藏的。")]),e._v(" "),a("p",[a("code",[e._v("Collections")]),e._v(" 框架 API 的规模要比它之前返回的 45 个单独的公共类要小得多，每个类在集合框架中都有一个便利的实现。不仅是 API 的大部分减少了，还包括概念上的权重：程序员要想使用 API必须掌握的概念的数量和难度。程序员知道返回的对象恰好有其接口指定的 API，因此不需要为实现类读阅读额外的类文档。此外，使用这种静态工厂方法需要客户端通过接口而不是实现类来引用返回的对象，这通常是良好的实践（详见第 64 条）。")]),e._v(" "),a("p",[e._v("从 Java 8 开始，接口不能包含静态方法的限制被取消了，所以通常没有理由为接口提供一个不可实例化的伴随类。 很多公开的静态成员应该放在这个接口本身。 但是，请注意，将这些静态方法的大部分实现代码放在单独的包私有类中仍然是必要的。 这是因为 Java 8 要求所有接口的静态成员都是公共的。 Java 9 允许私有静态方法，但静态字段和静态成员类仍然需要公开。")]),e._v(" "),a("p",[a("strong",[e._v("静态工厂的第四个优点是返回对象的类可以根据输入参数的不同而不同。")]),e._v(" 声明的返回类型的任何子类都是允许的。 返回对象的类也可以随每次发布而不同。")]),e._v(" "),a("p",[a("code",[e._v("EnumSet")]),e._v(" 类（详见第 36 条）没有公共构造方法，只有静态工厂。 在 OpenJDK 实现中，它们根据底层枚举类型的大小返回两个子类中的一个的实例：大多数枚举类型具有 64 个或更少的元素，静态工厂将返回一个 "),a("code",[e._v("RegularEnumSet")]),e._v(" 实例， 底层是"),a("code",[e._v("long")]),e._v(" 类型；如果枚举类型具有六十五个或更多元素，则工厂将返回一个 "),a("code",[e._v("JumboEnumSet")]),e._v(" 实例，底层是"),a("code",[e._v("long")]),e._v(" 类型的数组。")]),e._v(" "),a("p",[e._v("这两个实现类的存在对于客户端而言是不可见的。 如果 "),a("code",[e._v("RegularEnumSet")]),e._v(" 对于小的枚举类型不再具有性能优势，则可以在未来版本中将其淘汰，且不会产生任何不良影响。 同样，如果可以证明添加 "),a("code",[e._v("EnumSet")]),e._v(" 的更多的实现可以提高性能，那么在未来的版本可能就会这样做。 客户既不知道也不关心他们从工厂返回的对象的类别; 他们只需要知道它是 "),a("code",[e._v("EnumSet")]),e._v(" 的子类。")]),e._v(" "),a("p",[a("strong",[e._v("静态工厂的第五个优点是，在编写包含该方法的类时，返回的对象的类不需要存在。")]),e._v(" 这种灵活的静态工厂方法构成了服务提供者框架的基础，比如 Java 数据库连接 API（JDBC）。服务提供者框架是提供者实现服务的系统，并且系统使得实现对客户端可用，从而将客户端从实现中分离出来。")]),e._v(" "),a("p",[e._v("服务提供者框架中有三个基本组：服务接口，它表示实现；提供者注册 API，提供者用来注册实现；以及服务访问 API，客户端使用该 API 获取服务的实例。服务访问 API 允许客户指定选择实现的标准。在缺少这样的标准的情况下，API 返回一个默认实现的实例，或者允许客户通过所有可用的实现进行遍历。服务访问 API 是灵活的静态工厂，它构成了服务提供者框架的基础。")]),e._v(" "),a("p",[e._v("服务提供者框架的一个可选的第四个组件是一个服务提供者接口，它描述了一个生成服务接口实例的工厂对象。在没有服务提供者接口的情况下，必须对实现进行反射实例化（详见第 65 条）。在 JDBC 的情况下，"),a("code",[e._v("Connection")]),e._v(" 扮演服务接口的一部分，"),a("code",[e._v("DriverManager.registerDriver")]),e._v(" 提供程序注册 API、"),a("code",[e._v("DriverManager.getConnection")]),e._v(" 是服务访问 API，"),a("code",[e._v("Driver")]),e._v(" 是服务提供者接口。")]),e._v(" "),a("p",[e._v("服务提供者框架模式有许多变种。 例如，服务访问 API 可以向客户端返回比提供者提供的更丰富的服务接口。 这是桥接模式[Gamma95]。 依赖注入框架（详见第 5 条）可以被看作是强大的服务提供者。 从 Java 6 开始，平台包含一个通用的服务提供者框架 "),a("code",[e._v("java.util.ServiceLoader")]),e._v("，所以你不需要，一般也不应该自己编写（详见第 59 条）。 JDBC 不使用 "),a("code",[e._v("ServiceLoader")]),e._v("，因为前者早于后者。")]),e._v(" "),a("p",[a("strong",[e._v("只提供静态工厂方法的主要限制是，没有公共或受保护构造方法的类不能被子类化。")]),e._v(" 例如，要想将 "),a("code",[e._v("Collections")]),e._v(" 框架中任何遍历的实现类进行子类化，是不可能的。但是这样也会因祸得福，因为它鼓励程序员使用组合（composition）而不是继承（详见第 18 条），并且是不可变类型锁需要的（详见第 17 条）。")]),e._v(" "),a("p",[a("strong",[e._v("静态工厂方法的第二个缺点是，程序员很难找到它们。")]),e._v(" 它们不像构造方法那样在 API 文档中明确的标注出来。因此，对于提供了静态方法而不是构造器的类来说，想要查明如何实例化一个类是十分困难的。Javadoc 工具可能有一天会注意到静态工厂方法。与此同时，通过关注类或者接口的文档中静态方法，并且遵守标准的命名习惯，也可以弥补这一劣势。下面是一些静态工厂方法的常用名称。以下清单这是列出了其中的一小部分：")]),e._v(" "),a("ul",[a("li",[e._v("from ——  类型转换方法，它接受单个参数并返回此类型的相应实例，例如："),a("strong",[e._v("Date d = Date.from(instant)")]),e._v(";")]),e._v(" "),a("li",[e._v("of —— 聚合方法，接受多个参数并返回该类型的实例，并把他们合并在一起，例如："),a("strong",[e._v("Set<Rank> faceCards = EnumSet.of(JACK, QUEEN, KING)")]),e._v(";")]),e._v(" "),a("li",[e._v("valueOf —— from 和 to 更为详细的替代 方式，例如："),a("strong",[e._v("BigInteger prime = BigInteger.valueOf(Integer.MAX_VALUE)")]),e._v(";")]),e._v(" "),a("li",[e._v("instance 或 getinstance —— 返回一个由其参数 (如果有的话) 描述的实例，但不能说它具有相同的值，例如："),a("strong",[e._v("StackWalker luke = StackWalker.getInstance(options)")]),e._v(";")]),e._v(" "),a("li",[e._v("create 或 newInstance —— 与 instance 或 getInstance 类似，除此之外该方法保证每次调用返回一个新的实例，例如："),a("strong",[e._v("Object newArray = Array.newInstance(classObject, arrayLen)")]),e._v(";")]),e._v(" "),a("li",[e._v("getType —— 与 getInstance 类似，但是在工厂方法处于不同的类中的时候使用。"),a("strong",[e._v("getType")]),e._v(" 中的 "),a("strong",[e._v("Type")]),e._v(" 是工厂方法返回的对象类型，例如："),a("strong",[e._v("FileStore fs = Files.getFileStore(path)")]),e._v(";")]),e._v(" "),a("li",[e._v("newType —— 与 newInstance 类似，但是在工厂方法处于不同的类中的时候使用。"),a("strong",[e._v("newType")]),e._v("中的 "),a("strong",[e._v("Type")]),e._v(" 是工厂方法返回的对象类型，例如："),a("strong",[e._v("BufferedReader br = Files.newBufferedReader(path)")]),e._v(";")]),e._v(" "),a("li",[e._v("type —— getType 和 newType 简洁的替代方式，例如："),a("strong",[e._v("List<Complaint> litany = Collections.list(legacyLitany)")]),e._v(";")])]),e._v(" "),a("p",[e._v("总之，静态工厂方法和公共构造方法都有它们的用途，并且了解它们的相对优点是值得的。通常，静态工厂更可取，因此避免在没有考虑静态工厂的情况下直接选择使用公共构造方法。")])])}),[],!1,null,null,null);v.default=_.exports}}]);