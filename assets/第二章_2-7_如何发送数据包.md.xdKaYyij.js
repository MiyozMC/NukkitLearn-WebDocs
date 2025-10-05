import{_ as s,c as n,o as p,ae as e}from"./chunks/framework.CgiyRsxg.js";const d=JSON.parse('{"title":"第二章 第七节 如何发送数据包","description":"","frontmatter":{},"headers":[],"relativePath":"第二章/2-7_如何发送数据包.md","filePath":"第二章/2-7_如何发送数据包.md"}'),i={name:"第二章/2-7_如何发送数据包.md"};function t(l,a,c,k,h,r){return p(),n("div",null,[...a[0]||(a[0]=[e(`<h1 id="第二章-第七节-如何发送数据包" tabindex="-1">第二章 第七节 如何发送数据包 <a class="header-anchor" href="#第二章-第七节-如何发送数据包" aria-label="Permalink to &quot;第二章 第七节 如何发送数据包&quot;">​</a></h1><p>参与编写者: MagicLu550</p><h4 id="建议学习时间-40分钟" tabindex="-1">建议学习时间: 40分钟 <a class="header-anchor" href="#建议学习时间-40分钟" aria-label="Permalink to &quot;建议学习时间: 40分钟&quot;">​</a></h4><h5 id="学习要点-了解数据包和主要的发送形式" tabindex="-1">学习要点: 了解数据包和主要的发送形式 <a class="header-anchor" href="#学习要点-了解数据包和主要的发送形式" aria-label="Permalink to &quot;学习要点: 了解数据包和主要的发送形式&quot;">​</a></h5><p>一. 概述</p><p>Nukkit实现客户端与服务端交互,是通过发送和接收数据包实现的.数据包在nukkit 的工作过程是占有很重的分量,包括玩家的移动等,都是由一个个数据包接连不断的实现这一 功能.实现收发数据包的机制是RakNet,通过UDP实现的这些功能.RakNet实现的基础是 Netty框架,如下文可以看到</p><p>cn/nukkit/raknet/server/UDPServerSocket.java</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package cn.nukkit.raknet.server;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import cn.nukkit.utils.ThreadedLogger;</span></span>
<span class="line"><span>import io.netty.bootstrap.Bootstrap;</span></span>
<span class="line"><span>import io.netty.buffer.PooledByteBufAllocator;</span></span>
<span class="line"><span>import io.netty.buffer.Unpooled;</span></span>
<span class="line"><span>import io.netty.channel.Channel;</span></span>
<span class="line"><span>import io.netty.channel.ChannelHandlerContext;</span></span>
<span class="line"><span>import io.netty.channel.ChannelInboundHandlerAdapter;</span></span>
<span class="line"><span>import io.netty.channel.ChannelOption;</span></span>
<span class="line"><span>import io.netty.channel.epoll.Epoll;</span></span>
<span class="line"><span>import io.netty.channel.epoll.EpollDatagramChannel;</span></span>
<span class="line"><span>import io.netty.channel.epoll.EpollEventLoopGroup;</span></span>
<span class="line"><span>import io.netty.channel.nio.NioEventLoopGroup;</span></span>
<span class="line"><span>import io.netty.channel.socket.DatagramPacket;</span></span>
<span class="line"><span>import io.netty.channel.socket.nio.NioDatagramChannel;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.IOException;</span></span>
<span class="line"><span>import java.net.InetSocketAddress;</span></span>
<span class="line"><span>import java.util.concurrent.ConcurrentLinkedQueue;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * author: MagicDroidX</span></span>
<span class="line"><span> * Nukkit Project</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>public class UDPServerSocket extends ChannelInboundHandlerAdapter {</span></span></code></pre></div><p>RakNetServer.java</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Override</span></span>
<span class="line"><span>    public void run() {</span></span>
<span class="line"><span>        this.setName(&quot;RakNet Thread #&quot; + Thread.currentThread().getId());</span></span>
<span class="line"><span>        Runtime.getRuntime().addShutdownHook(new ShutdownHandler());</span></span>
<span class="line"><span>        UDPServerSocket socket = new UDPServerSocket(this.getLogger(), port, this.interfaz);</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            new SessionManager(this, socket);</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            Server.getInstance().getLogger().logException(e);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>二. Netty框架</p><p><a href="https://github.com/netty/netty" target="_blank" rel="noreferrer">Netty框架</a>是使用最广泛的java-nio框架之一,由JBOSS提供的一个java开源框架。Netty提供异步的、事件驱动的网络应用程序框架和工具， 用以快速开发高性能、高可靠1性的网络服务器和客户端程序。Netty相当于简化和流线化了网络应用的编程开发过程.</p><p>如果你想要更深入研究这个框架可以参见<a href="https://github.com/netty/netty" target="_blank" rel="noreferrer">Netty框架的github</a></p><p>三. Nukkit的发包机制</p><ol><li>Nukkit 数据包的结构</li></ol><p>Nukkit的数据包类的继承结构是</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BinaryStream</span></span>
<span class="line"><span>|------- DataPacket</span></span>
<span class="line"><span>    |-------- 我们主要操作的数据包</span></span></code></pre></div><p>pid() 一般为数据包的NETWORK_ID，在Player,Server,RakNetInterface,DataPacket类中被调用过</p><p>DataPacket的主要方法是decode()和encode(),数据包的传输过程中,通过这两个方法实现解码和 编码,使得数据包在服务端与客户端间相互识别.</p><p>decode() 是解码方法，一般是客户端发来的数据包,解码到对象的具体属性,之后在服务端中使用这些数据,</p><p>即 客户端 -&gt; 服务端</p><p>如代码中这样</p><p>CameraPacket.java</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package cn.nukkit.network.protocol;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import lombok.ToString;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@ToString</span></span>
<span class="line"><span>public class CameraPacket extends DataPacket {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public long cameraUniqueId;</span></span>
<span class="line"><span>    public long playerUniqueId;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public byte pid() {</span></span>
<span class="line"><span>        return ProtocolInfo.CAMERA_PACKET;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void decode() {</span></span>
<span class="line"><span>        this.cameraUniqueId = this.getVarLong();</span></span>
<span class="line"><span>        this.playerUniqueId = this.getVarLong();</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>encode() 是编码方法,会在发包时被调用,将在服务端设置的数据值写入发出到客户端</p><p>即 服务端 -&gt; 客户端</p><p>如代码这样</p><p>CameraPacket.java</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@Override</span></span>
<span class="line"><span>    public void encode() {</span></span>
<span class="line"><span>        this.reset();</span></span>
<span class="line"><span>        this.putEntityUniqueId(this.cameraUniqueId);</span></span>
<span class="line"><span>        this.putEntityUniqueId(this.playerUniqueId);</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>从这里，我们就可以引入接下来的发包环节,事实上,它很简单</p><ol start="2"><li>事件</li></ol><p>发送数据包和接收数据包的时候会触发几种事件，我们可以通过这几种事件进行 抓包 我们比较常用的是这几种 - BatchPacketsEvent: 批处理数据包事件 - DataPacketReceiveEvent: 数据包接收事件 - DataPacketSendEvent: 数据包发送事件 这里我们主要介绍Receive和Send</p><p>DataPacketSendEvent主要触发在服务端向客户端发送数据包的时候</p><p>Player.java</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public int dataPacket(DataPacket packet, boolean needACK) {</span></span>
<span class="line"><span>        if (!this.connected) {</span></span>
<span class="line"><span>            return -1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try (Timing timing = Timings.getSendDataPacketTiming(packet)) {</span></span>
<span class="line"><span>            //There!!!!!</span></span>
<span class="line"><span>            DataPacketSendEvent ev = new DataPacketSendEvent(this, packet);</span></span>
<span class="line"><span>            this.server.getPluginManager().callEvent(ev);</span></span>
<span class="line"><span>            if (ev.isCancelled()) {</span></span>
<span class="line"><span>                return -1;</span></span>
<span class="line"><span>            }</span></span></code></pre></div><p>DataPacketReceiveEvent主要触发在客户端向服务端发送数据包并且服务端接收到的时候.</p><p>Player.java</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public void handleDataPacket(DataPacket packet) {</span></span>
<span class="line"><span>        if (!connected) {</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try (Timing timing = Timings.getReceiveDataPacketTiming(packet)) {</span></span>
<span class="line"><span>            //There!!!!!!!!!</span></span>
<span class="line"><span>            DataPacketReceiveEvent ev = new DataPacketReceiveEvent(this, packet);</span></span>
<span class="line"><span>            this.server.getPluginManager().callEvent(ev);</span></span>
<span class="line"><span>            if (ev.isCancelled()) {</span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>            }</span></span></code></pre></div><ol start="3"><li>发包</li></ol><p>Nukkit提供了友好的数据包机制，我们可以通过需求定义,发送数据包</p><p>Nukkit提供了发送数据包的方法,并允许开发者直接发送数据包和监听数据包的收发 一般的，发送数据包的方式都是使用玩家对象的dataPacket实现 <code>player.dataPacket(DataPacket)</code>,这是一个最常用的方式。</p><p>当然,先前的Server类也提到了批量发包的方法(Server类)</p><ul><li>batchPackets​(Player[], DataPacket[]) 批量发送数据包</li><li>broadcastPacket​(Player[], DataPacket) 向所有玩家广播数据包</li></ul><p>这三个方法就是发包所常使用的方法了。</p><p>这里我们用dataPacket方法做案例</p><p>这里用MovePlayerPacket做一个样例</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> net.noyark.www;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cn.nukkit.event.EventHandler;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cn.nukkit.event.Listener;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cn.nukkit.event.player.PlayerJoinEvent;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cn.nukkit.network.protocol.MovePlayerPacket;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TestListener</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Listener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">EventHandler</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onPlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(PlayerJoinEvent </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //1. 定义数据包对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        MovePlayerPacket packet </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MovePlayerPacket</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //2. 设置数据包数值,这里我随便写了几个值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        packet.x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        packet.y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        packet.z </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //3.发出</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        e.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dataPacket</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(packet);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>四. 常用数据包的解释</p>`,48)])])}const g=s(i,[["render",t]]);export{d as __pageData,g as default};
