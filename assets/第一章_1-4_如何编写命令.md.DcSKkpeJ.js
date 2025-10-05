import{_ as a,c as n,o as i,ae as p}from"./chunks/framework.CgiyRsxg.js";const c=JSON.parse('{"title":"第一章 第四节 如何编写命令","description":"","frontmatter":{},"headers":[],"relativePath":"第一章/1-4_如何编写命令.md","filePath":"第一章/1-4_如何编写命令.md"}'),e={name:"第一章/1-4_如何编写命令.md"};function l(t,s,h,k,r,d){return i(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="第一章-第四节-如何编写命令" tabindex="-1">第一章 第四节 如何编写命令 <a class="header-anchor" href="#第一章-第四节-如何编写命令" aria-label="Permalink to &quot;第一章 第四节 如何编写命令&quot;">​</a></h1><p>参与编写者: MagicLu550</p><h4 id="建议学习时间-30分钟" tabindex="-1">建议学习时间: 30分钟 <a class="header-anchor" href="#建议学习时间-30分钟" aria-label="Permalink to &quot;建议学习时间: 30分钟&quot;">​</a></h4><h5 id="学习要点-学习自己创建一个简易的命令-了解指令和指令映射-了解simplecommand的使用" tabindex="-1">学习要点: 学习自己创建一个简易的命令,了解指令和指令映射,了解SimpleCommand的使用 <a class="header-anchor" href="#学习要点-学习自己创建一个简易的命令-了解指令和指令映射-了解simplecommand的使用" aria-label="Permalink to &quot;学习要点: 学习自己创建一个简易的命令,了解指令和指令映射,了解SimpleCommand的使用&quot;">​</a></h5><p>其实创建一个简易的命令很简单，我们可以在<code>PluginBase</code>中重写<code>onCommand</code>方法，进行<code>equals</code>识别，比如</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PluginMain</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PluginBase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            //... 其他</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Override</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // args指后面的那一串参数，直接取出即可，注意先检查length，label其实就是指令名称，也可以用command的信息，这个是个人习惯</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> boolean</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onCommand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CommandSender </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">sender</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Command </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">equals</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(command.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())){ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 识别指令名称</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLogger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>nukkit的原生命令也是很多基于Command创建的.很多项目是需求指令 以使得用户和您的项目操作，也就是作为一个 <strong>接口(Interface)</strong> ,接下来我们介绍以下nukkit的命令。</p><p>nukkit的命令的父类是Command，它有很多的构造方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    public Command(String name) {</span></span>
<span class="line"><span>        this(name, &quot;&quot;, null, new String[0]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Command(String name, String description) {</span></span>
<span class="line"><span>        this(name, description, null, new String[0]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Command(String name, String description, String usageMessage) {</span></span>
<span class="line"><span>        this(name, description, usageMessage, new String[0]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Command(String name, String description, String usageMessage, String[] aliases) {</span></span>
<span class="line"><span>        this.commandData = new CommandData();</span></span>
<span class="line"><span>        this.name = name.toLowerCase(); // Uppercase letters crash the client?!?</span></span>
<span class="line"><span>        this.nextLabel = name;</span></span>
<span class="line"><span>        this.label = name;</span></span>
<span class="line"><span>        this.description = description;</span></span>
<span class="line"><span>        this.usageMessage = usageMessage == null ? &quot;/&quot; + name : usageMessage;</span></span>
<span class="line"><span>        this.aliases = aliases;</span></span>
<span class="line"><span>        this.activeAliases = aliases;</span></span>
<span class="line"><span>        this.timing = Timings.getCommandTiming(this);</span></span>
<span class="line"><span>        this.commandParameters.put(&quot;default&quot;, new CommandParameter[]{new CommandParameter(&quot;args&quot;, CommandParamType.RAWTEXT, true)});</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>我们可以知道，nukkit的命令都是toLowerCase的，即小写，也就是说，命令不区分大小写。 对于命令如何存储，服务端如何识别一个命令，我们从源码中找到以下资料:</p><p>--</p><p>命令的区分标识是fallBackPrefix+:+label，默认为指令的名称，一般fallBackPrefix都写&quot;&quot;</p><p>这一块知识缺点将会有其他人补充[1]</p><p>代码依据 - SimpleCommandMap.java</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>159 private boolean registerAlias(Command command, boolean isAlias, String fallbackPrefix, String label) {</span></span>
<span class="line"><span>160      this.knownCommands.put(fallbackPrefix + &quot;:&quot; + label, command);</span></span></code></pre></div><p>--</p><p>存储指令的容器是实现CommandMap接口的，即SimpleCommandMap,我们可以通过</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>        this.getServer().getCommandMap();</span></span></code></pre></div><p>得到CommandMap.</p><p>Command,CommandMap有很多方法</p><ol><li><p>Command</p><ol><li><p>根构造方法的参数为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>String name, String description, String usageMessage, String[] aliases</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        第一个name是指令名称，最终会转换为全小写</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        第二个description是指令介绍，用于给玩家查看使用的</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        第三个usageMessage就是当玩家对命令使用错误，返回的信息</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        第四个aliases就是指令的别名，指令可以有多个别名</span></span></code></pre></div><p>当然，也有简化的构造方法，可以根据你的需求任意调用，这里不多阐述，其他的都是为默认值</p></li><li><p>Command的主要属性 如同command的构造方法一样,command我们需要了解的属性基本也就是这四个。其他属性将会 在nukkit原理解析的时候讲解</p></li><li><p>Command的比较常用的方法</p><ol><li><p>boolean execute(CommandSender commandSender, String label, String[] strings)</p><p>这个方法是需要开发者自行实现的方法，当指令被触发，就会执行execute里的代码 它的参数我们在<a href="./1-2_了解PluginBase.html">第二章</a>提到了</p></li><li><p>String getName()</p><p>这个可以获取指令的名称</p></li></ol><p>其余方法我们将会在后期附件讲解到，如果有想要知悉的其他方法，我们会另外在这里做补充， 或者您认为常用的，也可以pull request添加进去</p></li></ol></li><li><p>CommandMap</p><ol><li>boolean register(String fallbackPrefix, Command command) 可以注册指令，fallbackPrefix是前缀，用于服务端存储命令对象的标识 nukkit的本地命令的fallbackPrefix为nukkit command则为你的自定义命令对象</li><li>void registerAll(String fallbackPrefix, List&lt;? extends Command&gt; commands) 这个可以一次性注册多个指令</li><li>boolean dispatch(CommandSender sender, String cmdLine) 这个调用一个命令，cmdLine就是日常所输入的命令</li><li>void registerSimpleCommands(Object object) 这个是调用简单指令，通过注解实现的指令对象，我们后面将会演示如何使用它。</li></ol></li></ol><p>nukkit官方后来推出一系列简化操作，如SimpleCommand,SimpleConfig等，我们这里解释以下SimpleCommand</p><p>SimpleCommand运用了注解，同样通过 <strong>反射</strong> 实现的,我们可以看到官方的源码来探讨它的使用</p><p>SimpleCommandMap.java</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Override</span></span>
<span class="line"><span>    public void registerSimpleCommands(Object object) {</span></span>
<span class="line"><span>        for (Method method : object.getClass().getDeclaredMethods()) {</span></span>
<span class="line"><span>            cn.nukkit.command.simple.Command def = method.getAnnotation(cn.nukkit.command.simple.Command.class);</span></span>
<span class="line"><span>            if (def != null) {</span></span>
<span class="line"><span>                SimpleCommand sc = new SimpleCommand(object, method, def.name(), def.description(), def.usageMessage(), def.aliases());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                Arguments args = method.getAnnotation(Arguments.class);</span></span>
<span class="line"><span>                if (args != null) {</span></span>
<span class="line"><span>                    sc.setMaxArgs(args.max());</span></span>
<span class="line"><span>                    sc.setMinArgs(args.min());</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                CommandPermission perm = method.getAnnotation(CommandPermission.class);</span></span>
<span class="line"><span>                if (perm != null) {</span></span>
<span class="line"><span>                    sc.setPermission(perm.value());</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                if (method.isAnnotationPresent(ForbidConsole.class)) {</span></span>
<span class="line"><span>                    sc.setForbidConsole(true);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                CommandParameters commandParameters = method.getAnnotation(CommandParameters.class);</span></span>
<span class="line"><span>                if (commandParameters != null) {</span></span>
<span class="line"><span>                    Map&lt;String, CommandParameter[]&gt; map = Arrays.stream(commandParameters.parameters())</span></span>
<span class="line"><span>                            .collect(Collectors.toMap(Parameters::name, parameters -&gt; Arrays.stream(parameters.parameters())</span></span>
<span class="line"><span>                                    .map(parameter -&gt; new CommandParameter(parameter.name(), parameter.type(), parameter.optional()))</span></span>
<span class="line"><span>                                    .distinct()</span></span>
<span class="line"><span>                                    .toArray(CommandParameter[]::new)));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                    sc.commandParameters.putAll(map);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                this.register(def.name(), sc);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>很显然，简易命令必须要有@Command注解在方法上,方法上标记一些内容,当然，最终只是把一个类拆解，分为多个命令 对象注册(SimpleCommand),最终也继承自Command。SimpleCommand提供了对于参数最大和最小的限制。</p><p>SimpleCommand.java</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Override</span></span>
<span class="line"><span>    public boolean execute(CommandSender sender, String commandLabel, String[] args) {</span></span>
<span class="line"><span>        if (this.forbidConsole &amp;&amp; sender instanceof ConsoleCommandSender) {</span></span>
<span class="line"><span>            this.sendInGameMessage(sender);</span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span>        } else if (!this.testPermission(sender)) {</span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span>        } else if (this.maxArgs != 0 &amp;&amp; args.length &gt; this.maxArgs) {</span></span>
<span class="line"><span>            this.sendUsageMessage(sender);</span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span>        } else if (this.minArgs != 0 &amp;&amp; args.length &lt; this.minArgs) {</span></span>
<span class="line"><span>            this.sendUsageMessage(sender);</span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        boolean success = false;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            //这里执行我们的命令</span></span>
<span class="line"><span>            success = (Boolean) this.method.invoke(this.object, sender, commandLabel, args);</span></span>
<span class="line"><span>        } catch (Exception exception) {</span></span>
<span class="line"><span>            Server.getInstance().getLogger().logException(exception);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (!success) {</span></span>
<span class="line"><span>            this.sendUsageMessage(sender);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return success;</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>这段代码我们可以知道方法的参数有规范要求的 Object object,CommandSender sender,String label,String[] args object就是我们的命令对象了,通过registerSimpleCommand注册进去的命令对象 其他显而易见，不再多讲，具体如何使用，其实很简单</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> net.noyark.www;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cn.nukkit.command.CommandSender;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cn.nukkit.command.simple.Arguments;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cn.nukkit.command.simple.Command;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MySimpleCommand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">description</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;233&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">usageMessage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Arguments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">max</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">min</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> boolean</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onHelloCommand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CommandSender </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">sender</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //这里写指令处理代码</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//为布尔类型，否则会发生空指针异常，在先前源码可以分析其返回类型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>最终通过registerSimpleCommand注册即可.事实上是对Command的封装</p><p>command的用户组(这里参考自snake1999的文章)</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">permissions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#这个标签我们只写一次就ok了</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  plugin.hello</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">你好</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">op</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #权限组，后期会讲到</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#这个标签我们只写一次就ok了</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  hello</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">你好</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    usage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/hello&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    permission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">plugin.hello</span></span></code></pre></div><p>这里我们发现了default，这个的选项有以下几种</p><ul><li>op，代表服务器管理员，在ops.txt中规定。</li><li>notop，代表除服务器管理员外的所有玩家。</li><li>true，代表所有玩家。</li><li>false，代表空集。如果某个命令对应这个权限，那就没有人能够使用这个命令（控制台除外）。</li></ul><p>大家可以根据这些选项来控制指令的使用范围了</p><p>参考文献:</p><ul><li><a href="https://www.cnblogs.com/xtypr/p/nukkit_plugin_start_from_0.html" target="_blank" rel="noreferrer">Nukkit插件从0开始</a></li></ul>`,38)])])}const m=a(e,[["render",l]]);export{c as __pageData,m as default};
