// 实用网站列表
const utilityWebsite = [
    {
        // | 分类 |
        "官方网站 (©Mojang/©微软)": [
            // | 网站名称 |  网站地址 URL  |
            ["Minecraft", "https://www.minecraft.net"],
            ["Minecraft教育版", "https://education.minecraft.net"],
            ["去Xbox购买正版", "https://www.xbox.com/zh-CN/games/store/minecraft-java-bedrock-edition-for-pc/9NXP44L49SHJ/0010"],
            ["漏洞追踪器(反馈Bug)", "https://bugs.mojang.com"],
            ["基岩版开发者文档", "https://learn.microsoft.com/minecraft/creator/"],
            ["Feedback", "https://feedback.minecraft.net"],
            ["知识库", "https://feedback.minecraft.net/hc/categories/115000410252-Knowledge-Base"],
            ["远古版网页MC", "https://classic.minecraft.net"],
            ["Forge模组加载器", "https://www.minecraftforge.net"],
            ["基岩版专用服务端", "https://www.minecraft.net/zh-hans/download/server/bedrock"]
        ]
    },
    {
        // | 默认展开的分类[open] |
        "祝MC十五周年快乐！[open]": [
            // | 网站名称 |  网站地址 URL  |
            ["15周年庆典", "https://www.minecraft.net/15th-anniversary"],
            ["领取苦力怕披风", "https://www.minecraft.net/15th-anniversary?mcRef=redeemCape"],
            ["去Xbox半价购买正版", "https://www.xbox.com/games/store/minecraft-java-bedrock-edition-for-pc/9NXP44L49SHJ/0010"],
            ["去App Store三折购买正版" ,"https://apps.apple.com/us/app/minecraft/id479516143"],
            ["去Google Play三折购买正版" ,"https://play.google.com/store/apps/details/Minecraft?id=com.mojang.minecraftpe"]
        ]
    },
    {
        "无类别 (暂未分类)": [
            ["导航网", "https://www.mcnav.net"],
            ["IMC.RE", "https://imc.re"],
            ["Inner Core基岩版模组引擎", "https://icmods.mineprogramming.org"],
            ["MCPEDL资源下载站", "https://mcpedl.com"],
            ["LittleSkin皮肤站", "https://littleskin.cn"],
            ["筛选皮肤", "https://mcskinsearch.com"],
            ["地球资源社区", "https://www.planetminecraft.com"],
            ["基岩版地球资源社区", "https://mcpe-planet.com"],
            ["资源包列表", "https://resourcepack.net"],
            ["服务器列表(大陆)Ⅰ", "https://www.mclists.cn"],
            ["服务器列表(大陆)Ⅱ", "https://www.fwqlist.com"],
            ["找服网", "https://www.fansmc.com"],
            ["最好的服务器", "https://minecraft-mp.com"],
            ["服务器列表", "https://mcl.ist"],
            ["服务器列表(台湾)", "https://www.mc-list.xyz"],
            ["服务器列表(日本)", "https://minecraft.jp"],
            ["网易我的世界官网", "https://mc.163.com"]
        ]
    },
    {
        "工具箱": [
            ["通过名称查询皮肤", "https://namemc.com"],
            ["MC风格艺术字", "https://textcraft.net"],
            ["渐变颜色生成器", "https://mcg.tuanzi.ink"],
            ["指令生成器(MC百科)", "https://www.mcmod.cn/tools/cbcreator/"],
            ["指令工具(台湾)", "https://new.kukuo.tw/tools/"],
            ["SMCFcper", "https://smcfcper.off.gs"],
            ["命令自动补全", "https://mact.mcisee.top"],
            ["地图转换器", "https://chunker.app"],
            ["地图查看网站", "https://www.chunkbase.com"],
            ["史莱姆区块查找", "https://mclt.cn"],
            ["图片生成地图", "https://mc-map.djfun.de"],
            ["像素画生成器", "https://rebane2001.com/mapartcraft/zh-Hans"],
            ["地图种子查询", "https://www.mcseeder.com"],
            ["建筑辅助", "https://minecraftshapes.com"],
            ["超多工具(GamerGeeks)", "https://www.gamergeeks.net"],
            ["工具网站", "https://minecraft.tools"],
            ["在线工具(元魔幻界)", "https://mc.metamo.cn/tool/"],
            ["皮肤改色器", "https://www.mcskinrecolor.com"],
            ["Nova Skin皮肤编辑器", "https://minecraft.novaskin.me"],
            ["正版玩家信息查询", "https://mcuuid.net"],
            ["Aternos免费开服", "https://aternos.org"],
            ["简幻欢公益面板服", "https://simpfun.cn"],
            ["3D模型编辑器BlockBench", "https://www.blockbench.net"],
            ["数据包生成器", "https://misode.github.io/"],
            ["Midi音乐转换为播放音乐的bdump v3结构文件", "https://dislink.github.io/midi2bdx/"],
            ["Midi音乐转换为播放音乐的mcpack行为包", "https://dislink.github.io/midi2mcfunction/"],
            ["Midi音乐转换为可视化音符瀑布流mcpack行为包", "https://dislink.github.io/midi2tiles/"],
            ["各种图片转换为放置方块的mcpack行为包", "https://dislink.github.io/img2mcfunction/"],
            ["文字转换为粒子画的mcpack行为包", "https://dislink.github.io/text2mcfunction/"],
            ["mcfunction文件转换为bdump v3结构文件", "https://dislink.github.io/mcfunction2bdx/"],
            ["MCPack清单生成器", "https://mcpack.mcisee.top"],
            ["装饰性头颅", "https://www.minecraft-heads.com"],
            ["预览盔甲纹饰", "https://armortrims.com"],
            ["多彩文字生成器", "https://colorize.fun/minecraft"]
        ]
    },
    {
        "百科全书": [
            // ["开发者开发百科", "https://minewiki.net"],
            ["官方基岩版开发者文档", "https://learn.microsoft.com/minecraft/creator/"],
            ["基岩版开发Wiki", "https://wiki.mcbe-dev.net"],
            ["基岩版文档", "https://bedrock.dev"],
            ["基岩版维基百科", "https://wiki.bedrock.dev"],
            ["插件百科", "https://mineplugin.org"],
            ["维基百科: 原站", "https://zh.minecraft.wiki"],
            ["维基百科: 镜像站", "https://wiki.biligame.com/mc/"],
            ["MC百科", "https://mcmod.cn"],
            ["DigMinecraft教程", "https://www.digminecraft.com"],
            ["MC开发者中文指南", "https://mouse0w0.github.io/MinecraftDeveloperGuide/"],
            ["基岩版JSONUI文档", "https://mcbeui.netlify.app/"],
            ["基岩版Script API文档", "https://projectxero.top/sapi/"],
            // ["网易我的世界开发者官网", "https://mc.163.com/dev/]
        ]
    },
    {
        "国际基岩版版本库": [
            ["mcapks (KLPBBS)", "https://mcapks.net"],
            ["mcdl版本库 (MineBBS)", "https://mc.minebbs.com"],
            // ["甘泉版本库 (原像素科技)":" https://mcbbk.blmcpia.com"], // 貌似似了(全国ping不通),不要问我 -- 屑xs留
            ["mcfa版本库 (@zihao_il)", "https://bbk.endyun.ltd/main"],
            ["mcfw版本库 (MCAppx)", "https://www.mcappx.com"],
            ["mcarc版本库 (@Hottampist)", "https://mcarc.github.io"],
            ["星月Minecraft版本库", "https://spectrollay.github.io/minecraft_repository/"],
            // ["星月Minecraft版本库测试版", "https://spectrollay.github.io/minecraft_repository_test/"],
            // -- 以下需要魔法才能访问 --
            // ["Alpha版本库 (存档)", "https://archive.org/details/MCPEAlpha"]
        ]
    },
    {
        "服务端 (无特殊说明均为Java版)": [
            ["官方基岩版专用服务端", "https://www.minecraft.net/zh-hans/download/server/bedrock"],
            ["(MineBBS收集)基岩版专用服务端", "https://www.minebbs.com/bds/history"],
            ["(MineBBS收集)基岩版专用预览版服务端", "https://www.minebbs.com/resources/bedrock-dedicated-server-preview.4934/history"],
            ["FastMirror (无极镜像)", "https://www.fastmirror.net"],
            ["极星镜像", "https://mirror.polars.cc"],
            ["MCVersions", "https://mcversions.net"],
            ["Akarin", "https://github.com/Akarin-project/Akarin"],
            ["Arclight", "https://github.com/IzzelAliz/Arclight"],
            ["CatServer", "https://catmc.org"],
            ["CraftBukkit", "https://getbukkit.org"],
            ["Fabric Server", "https://fabricmc.net/use/server/"],
            ["MohistMC", "https://mohistmc.com"],
            ["Nukkit (基岩版)", "https://cloudburstmc.org"],
            ["PaperMC", "https://papermc.io"],
            ["PocketMine (基岩版)", "https://pmmp.io"],
            ["Purpur", "https://purpurmc.org"],
            ["SpigotMC", "https://www.spigotmc.org"],
            ["Sponge", "https://spongepowered.org"],
            ["Tuinity", "https://github.com/Tuinity/Tuinity"]
        ]
    },
    {
        "快查网站 (可供快速查询的网站)": [
            ["维基百科: 原站", "https://zh.minecraft.wiki"],
            ["维基百科: 镜像站", "https://wiki.biligame.com/mc/"],
            ["CurseForge", "https://www.curseforge.com/minecraft/"],
            ["Modrinth", "https://modrinth.com"],
            ["MC百科", "https://mcmod.cn"],
            ["基岩版ID表", "https://ca.projectxero.top/idlist/#release-vanilla/global/"],
            ["Java版ID表", "http://mcid.lingningyu.cn"],
            ["基岩版开发Wiki", "https://wiki.mcbe-dev.net"],
            ["插件百科", "https://mineplugin.org"]
        ]
    },
    {
        "加载器 (模组/光影)": [
            ["Forge", "https://www.minecraftforge.net"],
            ["NeoForge", "https://neoforged.net"],
            ["Fabric", "https://fabricmc.net"],
            ["Quilt", "https://quiltmc.org"],
            ["LiteLoader", "http://www.liteloader.com"],
            ["Rift", "https://www.curseforge.com/minecraft/mc-mods/rift"],
            ["Iris", "https://www.irisshaders.dev"],
            ["OptiFine", "https://www.optifine.net"],
            ["OptiFine(中文)", "https://optifine.cn"],
            ["Canvas", "https://modrinth.com/mod/canvas"]
        ]
    },
    {
        "友情链接[open]": [
            ["FreeDayO", "https://butian103.github.io/FreeDayO-NetWork/"],
            ["FDS", "https://fds.moe"],
            ["饼盒", "https://mc.xzwmc.com"],
            ["PMINE工具箱", "https://pmine.org"],
            ["FreeDayO工具箱", "https://love-kogasa.github.io/FJST/"],
            ["命令自动补全", "https://mact.mcisee.top"],
            ["MCPack清单生成器", "https://mcpack.mcisee.top"]
        ]
    }
];


// 论坛列表 (不含 简体中文论坛)
const otherForum = [
    {
        "其它论坛": [
            ["香港社区", "https://www.minecraft-hk.com"],
            ["台湾论坛", "https://forum.gamer.com.tw/A.php?bsn=18673"],
            ["基岩版台湾中文网", "https://forum.mcpe.tw"],
            ["韩国论坛", "https://www.koreaminecraft.net"],
            ["日本论坛", "https://minecraftforum.jp"]
        ]
    },
    {
        "友情链接[open]": [
            ["新兴我的世界论坛晋级赛", "https://mcbbs.rip"]
        ]
    }
];
