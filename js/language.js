// 语言切换功能实现
// 定义翻译文本对象
const translations = {
    'zh': {
        'nav.home': '首页',
        'nav.about': '关于我',
        'nav.media': '媒体中心',
        'nav.schedule': '路线',
        'nav.contact': '联系我',
        'hero.title': '帅文波',
        'hero.subtitle': '假声男高音',
        'hero.button': '了解更多',
        'about.subtitle': '关于我',
        'about.bio1': '他拥有被欧洲乐评人赞誉为“富有戏剧张力”的低音。<br>' + 
            '他表演了以下角色：蒙特威尔第一歌剧《波佩亚的加冕》中的奥托内，古诺德的《浮士德》中的西贝尔，《罗密欧与朱丽叶》中的斯蒂芬诺，以及珀塞尔的歌剧《仙女女王》中的中音独奏家。<br>' + 
            '他的音乐之路始于上海音乐学院，于2020至2025年间攻读声乐歌剧系，师从施恒教授，也是上海音乐学院历史上第一支假声乐高音，之后他选择前往德国学习，并于2025年10月成为斯图加特国立音乐与表演艺术学院声乐复读系的硕士研究生，师从祖国女中音歌唱家戴安娜·哈勒与伯恩哈德·爱泼斯坦教授。',
        'about.bio2': '近年来，他的形象活跃在全球顶级顶级声乐赛场。他在意大利博洛尼亚国际声乐大赛中获得第五名及鼓励奖，在维罗纳“Vincerò”世界歌剧大赛获得第三名评论和家特别奖。他获得韩国大邱国际声乐大赛的焦点奖及大都会文艺复兴特别奖，并入围了西班牙“Tenor Viñas”、德国“Wilhelm Stenhammar”、意大利“Pietro” Antonio Cesti“巴洛克歌剧大赛、韩国首尔国际声乐比赛等…作品国际赛事。<br>' + 
            '2025年，他的才华获得了国际歌剧界的进一步认可。他成功由世界著名男中音托马斯·汉普森和女高音梅拉妮·迪纳德国在魏布林根国际歌剧工作室演出，并成为该项目年度歌剧方案的指挥获得者，并在魏布林根国际歌剧工作室中与专业乐团合作。2026年他在斯图加特的威廉玛剧院演出，由Jorg Helubeck和Max主演Hoehn 导演的蒙特威尔第一部巴洛克歌剧《波佩亚的加冕》并成功演奏了 Ottone。<br>' + 
            '在欧洲求学期间，他有幸跟随Cherly Studer、Melanie Diener、Vivica Genaux、Renate Faltin、Francesca Bruni等老师学习。',        
        'about.bio3':'自2019年起，他便成为法国阿尔日莱斯国际艺术节的常驻演员，参演了《浮士德》、《爱之甘醇》等多部歌剧。在上海求学期间，他在上海歌剧歌剧《浮士德》中的Siebel和《罗密欧与朱丽叶》的Siebel他不仅在意大利博洛尼亚和维罗纳的著名音乐厅成功举办了获奖者音乐会，还在上海音乐学院和斯图加特国立音乐与表演学院的支持下，主持并参演了多场巴洛克风格与艺术歌曲专场音乐会。',
        'about.resumeCn': '下载简历',
        'features.title': '过往活动',
        'features.item1.title': '个人形象​​',
        'features.item2.title': '演出记录',
        'media.title': '媒体中心',
        'media.description': '这里展示我的最新演出视频和媒体内容',
        'media.featured': '精选视频',
        'media.featuredCaption': '最新音乐录影带《艺术的旋律》',
        'media.gallery': '视频库',
        'media.video1.title': '最新演出',
        'media.video1.description': '2025年春季音乐会现场',
        'media.video1.date': '2023年3月15日',
        'media.video2.title': '创作过程纪实',
        'media.video2.date': '2023年1月22日',
        'media.video3.title': '艺术家访谈',
        'media.video3.date': '2022年11月10日',
        'media.video4.title': '幕后花絮 - 录音棚',
        'media.video4.date': '2022年9月5日',
        'schedule.title': '路线',
        'schedule.description': '查看我的演出和安排活动',
        'schedule.dateHeader': '日期',
        'schedule.eventHeader': '活动',
        'schedule.locationHeader': '地点',
        'schedule.ticketHeader': '购票',
        'schedule.event1.date': '2023年10月15日',
        'schedule.event1.location': '北京国家大剧院',
        'schedule.event1.description': '春季音乐会',
        'schedule.event1': '古典音乐会',
        'schedule.location1': '柏林音乐厅',
        'schedule.event2.date': '2024年11月2日',
        'schedule.event2.location': '上海音乐厅',
        'schedule.event2.description': '独奏会',
        'schedule.event2': '现代舞表演',
        'schedule.location2': '巴黎歌剧院',
        'schedule.event3': '艺术展览开幕式',
        'schedule.location3': '伦敦国家美术馆',
        'schedule.event3.date': '2025年11月20日',
        'schedule.event4': '新年音乐会',
        'schedule.location4': '维也纳金色大厅',
        'schedule.event4.date': '2024年12月5日',
        'schedule.event5': 'Farinelli Wettbewerb',
        'schedule.location5': '德国, 卡尔斯鲁厄',
        'schedule.event5.date': '2025年2月27日-3月2日',
        'schedule.event6': '第 62 届男高音维尼亚斯同意',
        'schedule.location6': '西班牙、昏',
        'schedule.event6.date': '2025年1月18-26日',
        'schedule.event7': '大邱国际声乐比赛决赛选手演唱会'
        'schedule.location7': '韩国, 大邱',
        'schedule.event7.date': '2024年8月30日',
        'schedule.event8': '第十五届巴洛克歌剧国际声乐比赛《安东尼奥·切斯蒂》',
        'schedule.location8': '无线电，因斯布鲁克',
        'schedule.event8.date': '2024年8月25-30日',
        'schedule.event9': '威廉·斯滕哈默国际音乐比赛'
        'schedule.location9': '瑞典, 诺尔雪平',
        'schedule.event9.date': '2024年6月7-13日',
        'schedule.event10': '第三届Vincerò世界歌唱比赛决赛选手音乐会',
        'schedule.location10': '意大利, 维罗纳',
        'schedule.event10.date': '2023年12月11日',
        'schedule.event11': '博洛尼亚国际声乐比赛获奖者表演',
        'schedule.location11': '意大利, 博洛尼亚',
        'schedule.event11.date': '2023年8月1日',
        'schedule.event12': '地面歌剧_罗密欧与朱丽叶（斯蒂芬妮）',
        'schedule.location12': '中国、上海',
        'schedule.event12.date': '2023年6月30日-7月1日',
        'schedule.event13': '上海音乐学院巴洛克室内乐团特别音乐会'
        'schedule.location13': '中国、上海',
        'schedule.event13.date': '2023年6月12日',
        'schedule.event14': '明珠——巴洛克时期作品音乐会',
        'schedule.location14': '中国、上海',
        'schedule.event14.date': '2023年5月1日',
        'schedule.event15': '第 60 届男高音维尼亚斯同意',
        'schedule.location15': '西班牙、昏',
        'schedule.event15.date': '2023年1月21-27日',
        'schedule.event16': '地面歌剧_浮士德（Siebel）',
        'schedule.location16': '中国、上海',
        'schedule.event16.date': '2019年8月7日',
        'schedule.ticketButton': '购票',
        'schedule.reserveButton': '预约',
        'schedule.comingSoonButton': '即将开售',
        'schedule.detailsButton': '活动详情',
        'contact.title': '联系我',
        'contact.description': '有任何问题或合作意向，请随时与我联系',
        'contact.formTitle': '发送消息',
        'contact.nameLabel': '您的姓名',
        'contact.lastNameLabel': '姓',
        'contact.firstNameLabel': '姓名',
        'contact.emailLabel': '电子邮箱',
        'contact.subjectLabel': '主题',
        'contact.messageLabel': '消息内容',
        'contact.submitBtn': '发送消息',
        'contact.infoTitle': '联系方式',
        'contact.email': '邮箱:dandancountertenor@gmail.com',
        'contact.phone': '电话: +49 123 4567 8910',
        'contact.address': '地址: 德国柏林艺术区',
        'contact.facebook': 'Facebook',
        'contact.instagram': 'Instagram',
        'contact.twitter': 'Twitter',
        'contact.youtube': 'YouTube',
        'contact.form.name': '姓名',
        'contact.form.email': '电子邮箱',
        'contact.form.message': '留言',
        'contact.form.submit': '发送',
        'gallery.personal.title': '个人形象​​',
        'gallery.personal.caption1': '艺术写真',
        'gallery.personal.caption2': '比赛照片',
        'gallery.personal.caption3': '角色定妆照',
        'gallery.performance.title': '演出记录',
        'gallery.performance.caption1': 'Vicerò世界歌剧大赛',
        'gallery.performance.caption2': '罗密欧与朱丽叶 - 上海',
        'gallery.performance.caption3': '音乐会演出'
    },
    'en': {
        'nav.home': '首页'
        'nav.about': '关于我'
        'nav.media': '媒体中心'
        'nav.schedule': '日历',
        'nav.contact': '联系方式'
        'hero.title': '文博帅',
        'hero.subtitle': '假声男高音',
        'hero.button': '了解更多',
        'about.subtitle': '关于我',
        'about.bio1':'他的嗓音被欧洲评论家誉为“充满戏剧张力”。' +
            他曾扮演以下角色：蒙特威尔第歌剧《波佩亚加冕》中的奥托、古诺歌剧《浮士德》中的西贝尔、《罗密欧与朱丽叶》中的斯蒂芬诺、珀塞尔歌剧《仙后》中的中音独奏者。 \n'+         
            他的音乐之旅始于上海音乐学院，2020年至2025年间，他在史恒教授的指导下攻读声乐与歌剧专业的学士学位。作为上海音乐学院历史上第一位假声男高音，他之后选择前往德国继续深造。2025年10月，他进入斯图加特国立音乐与表演艺术学院歌剧系攻读硕士学位，师从戴安娜·哈勒和伯恩哈德·爱泼斯坦教授。
        'about.bio2':'近年来，他活跃于世界顶级声乐比赛。他在意大利博洛尼亚国际声乐比赛中荣获第五名及鼓励奖，并在维罗纳“Vincerò”世界歌剧比赛中荣获第三名及评论家特别奖。他还在韩国大邱国际声乐比赛中获得决赛入围奖及大都会歌剧院特别奖，并入围多项著名国际比赛的决赛，包括西班牙“Tenor Viñas”、瑞典“Wilhelm Stenhammar”和奥地利“Pietro Antonio Cesti”巴洛克歌剧比赛。\n' +
            2025年，他的才华在国际歌剧界获得了进一步的认可。他成功入选由世界著名男中音歌唱家托马斯·汉普森和女高音歌唱家梅兰妮·迪纳创立的德国瓦伊布林根国际歌剧工作坊，并获得了该项目的年度歌剧奖学金，与专业乐团合作演出。2026年，他在斯图加特威廉剧院主演了蒙特威尔第的巴洛克歌剧《波佩亚的加冕》，饰演奥托内一角，由指挥家约尔格·哈鲁贝克执棒，马克斯·霍恩执导。
            “在欧洲求学期间，他有幸师从谢丽尔·斯图德、梅兰妮·迪纳、维维卡·热诺、雷纳特·法尔廷和弗朗西斯卡·布鲁尼等著名导师。”
        自2019年起，他成为法国阿尔热勒国际歌剧艺术节的驻场艺术家，参与了《浮士德》和《爱情灵药》等歌剧的演出。他曾在古诺的歌剧《浮士德》中饰演西贝尔，在《罗密欧与朱丽叶》中饰演斯蒂芬诺，并在珀塞尔的歌剧《仙后》中担任女低音独唱。除了在意大利博洛尼亚和维罗纳的著名场馆成功举办获奖音乐会外，他还得到了上海音乐学院和斯图加特国立音乐与表演艺术大学的支持，组织并参与了多场巴洛克和艺术歌曲独唱音乐会。
        'about.resumeEn': '下载简历',
        'features.title': '图库',
        'features.item1.title': '个人图片',
        'features.item2.title': '演出记录',
        'media.title': '媒体中心',
        'media.description': '这里是我最新的演出视频和媒体内容',
        'media.featured': '精选视频'
        'media.featuredCaption': '最新音乐视频《艺术旋律》'
        'media.gallery': '视频库'
        'media.video1.title': '最新演出'
        'media.video1.description': '2025年春季音乐会现场直播'
        'media.video1.date': '2023年3月15日'
        'media.video2.title': '创作过程纪录片'
        'media.video2.date': '2023年1月22日'
        'media.video3.title': '艺术家访谈'
        'media.video3.date': '2022年11月10日'
        'media.video4.title': '幕后花絮 - 录音棚',
        'media.video4.date': '2022年9月5日'
        'schedule.title': '日历',
        'schedule.description': '查看我即将举行的演出和活动',
        'schedule.dateHeader': '日期',
        'schedule.eventHeader': '事件',
        'schedule.locationHeader': '地点',
        'schedule.ticketHeader': '门票',
        'schedule.event1.date': '2023年10月15日'
        'schedule.event1.location': '北京国家大剧院',
        'schedule.event1.description': '春季音乐会'
        'schedule.event1': '古典音乐会'
        'schedule.location1': '柏林音乐厅',
        'schedule.event2.date': '2024年11月2日'
        'schedule.event2.location': '上海音乐厅',
        'schedule.event2.description': '独奏音乐会'
        'schedule.event2': '现代舞表演'
        'schedule.location2': '巴黎歌剧院',
        'schedule.event3': '艺术展览开幕式'
        'schedule.location3': '伦敦国家美术馆',
        'schedule.event3.date': '2025年11月20日'
        'schedule.event4': '新年音乐会'
        'schedule.location4': '维也纳金厅',
        'schedule.event4.date': '2024年12月5日'
        'schedule.event5': 'Farinelli Wettbewerb',
        'schedule.location5': '德国卡尔斯鲁厄',
        'schedule.event5.date': '2025年2月27日至3月2日',
        'schedule.event6': '第 62 届男高音维尼亚斯同意',
        'schedule.location6': '西班牙巴塞罗那',
        'schedule.event6.date': '2025年1月18日至26日',
        'schedule.event7': '大邱国际声乐比赛决赛选手演唱会'
        'schedule.location7': '韩国大邱',
        'schedule.event7.date': '2024年8月30日',
        'schedule.event8': '第十五届巴洛克歌剧国际声乐比赛《安东尼奥·切斯蒂》',
        'schedule.location8': '奥地利因斯布鲁克',
        'schedule.event8.date': '2024年8月25日至30日',
        'schedule.event9': '威廉·斯滕哈默国际音乐比赛'
        'schedule.location9': '瑞典诺尔雪平',
        'schedule.event9.date': '2024年6月7日至13日',
        'schedule.event10': '第三届Vincerò世界歌唱比赛决赛选手音乐会',
        'schedule.location10': '意大利维罗纳',
        'schedule.event10.date': '2023年12月11日'
        'schedule.event11': '博洛尼亚国际声乐比赛获奖者表演',
        'schedule.location11': '意大利博洛尼亚',
        'schedule.event11.date': '2023年8月1日'
        'schedule.event12': '地面歌剧_罗密欧与朱丽叶（斯蒂芬妮）',
        'schedule.location12': '中国上海',
        'schedule.event12.date': '2023年6月30日至7月1日',
        'schedule.event13': '上海音乐学院巴洛克室内乐团特别音乐会'
        'schedule.location13': '中国上海',
        'schedule.event13.date': '2023年6月12日'
        'schedule.event14': '明珠——巴洛克时期作品音乐会',
        'schedule.location14': '中国上海',
        'schedule.event14.date': '2023年5月1日'
        'schedule.event15': '第 60 届男高音维尼亚斯同意',
        'schedule.location15': '西班牙巴塞罗那',
        'schedule.event15.date': '2023年1月21日至27日',
        'schedule.event16': '地面歌剧_浮士德（Siebel）',
        'schedule.location16': '中国上海',
        'schedule.event16.date': '2019年8月7日'
        'schedule.ticketButton': '购买门票',
        'schedule.reserveButton': '预订',
        'schedule.comingSoonButton': '即将推出',
        'schedule.detailsButton': '活动详情',
        'contact.title': '联系我',
        'contact.description': '如果您有任何疑问或合作意向，请随时与我联系',
        'contact.formTitle': '发送消息'
        'contact.nameLabel': '您的姓名',
        'contact.lastNameLabel': '姓氏',
        'contact.firstNameLabel': '名字',
        'contact.emailLabel': '电子邮件地址',
        'contact.subjectLabel': '主题',
        'contact.messageLabel': '消息内容',
        'contact.submitBtn': '发送消息'
        'contact.infoTitle': '联系信息',
        'contact.email': '邮箱：dandancountertenor@gmail.com',
        'contact.phone': '电话：+49 123 4567 8910',
        'contact.address': '地址：德国柏林艺术区',
        'contact.facebook': 'Facebook',
        'contact.instagram': 'Instagram',
        'contact.twitter': 'Twitter',
        'contact.youtube': 'YouTube',
        'contact.form.name': '姓名',
        'contact.form.email': '电子邮件',
        'contact.form.message': '留言',
        'contact.form.submit': '提交'
        'gallery.personal.title': '个人图片'
        'gallery.personal.caption1': '艺术肖像'
        'gallery.personal.caption2': '比赛照片'
        'gallery.personal.caption3': '角色肖像'
        'gallery.performance.title': '表演记录',
        'gallery.performance.caption1': '文塞罗世界歌剧大赛',
        'gallery.performance.caption2': '罗密欧与朱丽叶 - 上海',
        'gallery.performance.caption3': '音乐会表演'
    },
    'de': {
        'nav.home': '首页',
        'nav.about': '关于我',
        'nav.media': '媒体中心',
        'nav.schedule': '日历',
        'nav.contact': 'Kontakt',
        'hero.title': '文博帅',
        'hero.subtitle': '假声男高音',
        'hero.button': 'Mehr erfahren',
        'about.subtitle': '超级密歇根',
        'about.bio1': 'Seine Stimme wird von europäischen Kritikern als „reich an Dramatischer Spannung“ gerühmt.\n' +
            蒙特威尔第歌剧院《波佩亚加冕》中的罗尔·德·奥托内，古诺歌剧《浮士德》中的罗尔·德·西贝尔，《罗密欧与朱丽叶》中的罗尔·德·史蒂芬诺，珀塞尔歌剧院《精灵女王》中的另类独奏者。 \n'+         
            塞纳河音乐列车于2020年至2025年在上海音乐学院开学，由施恒教授在格桑和歌剧院本科生授课。此前，上海音乐学院的反男高音已被德国音乐学院录取。我于 2025 年 10 月成为斯图加特音乐与表演艺术学院的硕士生。戴安娜·哈勒和伯恩哈德·爱泼斯坦教授的学生。 ,
        'about.bio2': '在今年的战争中，我们将进行世界活动。博洛尼亚（意大利）的国际 Förderpreis 广场和维罗纳“Vincerò”国际批评家奖的奖项。荣获大邱国际歌剧院入围奖和特别奖。 Zudem War er 决赛入围者包括国际知名歌手“Tenor Viñas”（西班牙）、“Wilhelm Stenhammar”（瑞典）和 der Barockopernwettbewerb“Pietro Antonio Cesti”（奥地利）。\n' +
            “我在 2025 年 2025 年将在国际歌剧中发挥才华。”在此期间，德国魏布林根国际歌剧工作室将与巴里顿·托马斯·汉普森 (Bariton Thomas Hampson) 和女高音歌唱家梅兰妮·迪纳 (Melanie Diener) 进行交流。 Dort erhielt er das jährliche Opernstipendium des Projekts und trat mit einem professionalellen Orchester auf. 2026 年，克劳迪奥·蒙特威尔迪斯·巴洛克歌剧院 (Claudio Monteverdis Barockoper L'incoronazione di Poppea am Wilhelma Theatre Stuttgart unter der der musikalischen Leitung von Jörg Halubek und der Regie von Max Hoehn) 的 2026 年 2 月，罗勒·德·奥托内 (Rolle des Ottone) 即将上演。\n' +
            'Während seiner Studienzeit in Europa hatte er die Möglichkeit, von renommierten Mentoren wie Cheryl Studer, Melanie Diener, Vivica Genaux, Renate Faltin 和 Francesca Bruni zu lernen.',
        'about.bio3': 'Seit 2019 是法兰克福国际艺术抒情艺术节的常驻艺术家，在歌剧制作中以《浮士德》和《爱情灵药》为主题。罗伦在《罗密欧与朱丽叶》中的《浮士德》中的西贝尔歌剧院中演唱了罗伦，在《仙后》中的珀塞尔歌剧院中唱了中音独奏曲。 Neben erfolgreichen Auftritten in Preisträgerkonzerten and renomierten Spielstätten in Bologna und Verona (Italian) Organisierte und gestaltete zudem zahlreiche Barock- und Kunstliedabende mit Unterstützung des Shanghaier Konservatoriums für Music sowie der Staatlichen Hochschule für斯图加特音乐与表演艺术。',
        'about.resumeDe': 'Lebenslauf herunterladen',
        'features.title': '画廊',
        'features.item1.title': '人物图片',
        'features.item2.title': 'Aufführung',
        'media.title': '媒体中心',
        'media.description': 'Hier sind meine neuesten Auftrittsvideos und Medieninhalte',
        'media.featured': 'Ausgewähltes 视频',
        'media.featuredCaption': 'Neuester Musikvideo “Melodie der Kunst”',
        'media.gallery': '视频画廊',
        'media.video1.title': '新奥夫特里特',
        'media.video1.description': 'Frühlingskonzert 2025 Live',
        'media.video1.date': '15。三月 2023',
        'media.video2.title': 'Schaffungsprozesses 文档',
        'media.video2.date': '22。 2023 年 1 月',
        'media.video3.title': 'Künstlerinterview',
        'media.video3.date': '2022年11月10日'
        'media.video4.title': '后台 - Tonstudio',
        'media.video4.date': '2022年9月5日'
        'schedule.title': '日历',
        'schedule.description': 'Schauen Sie sich meine bevorstehenden Aufführungen und Veranstaltungen an',
        'schedule.dateHeader': '日期',
        'schedule.eventHeader': 'Veranstaltung',
        'schedule.locationHeader': 'Ort',
        'schedule.ticketHeader': '门票',
        'schedule.event1.date': '15. 2023 年 10 月',
        'schedule.event1.location': '北京国家艺术中心',
        'schedule.event1.description': 'Frühlingskonzert',
        'schedule.event1': '古典音乐演奏会',
        'schedule.location1': '柏林音乐厅',
        'schedule.event2.date': '2024年11月2日',
        'schedule.event2.location': '上海音乐厅',
        'schedule.event2.description': '独奏音乐会',
        'schedule.event2': '现代 Tanzaufführung',
        'schedule.location2': '巴黎歌剧院',
        'schedule.event3': 'Kunstausstellungsöffnung',
        'schedule.location3': '伦敦国家美术馆',
        'schedule.event3.date': '2025年11月20日'
        'schedule.event4': 'Neujahrskonzert',
        'schedule.location4': '维也纳金色大厅',
        'schedule.event4.date': '5. 2024 年 12 月',
        'schedule.event5': 'Farinelli Wettbewerb',
        'schedule.location5': '德国卡尔斯鲁厄',
        'schedule.event5.date': '27. 2 月 2 日。三月 2025',
        'schedule.event6': '第 62 届男高音维尼亚斯同意',
        'schedule.location6': '西班牙巴塞罗那',
        'schedule.event6.date': '18.-26. 2025 年 1 月',
        'schedule.event7': '大邱国际声乐比赛决赛选手演唱会'
        'schedule.location7': '韩国大邱',
        'schedule.event7.date': '2024年8月30日',
        'schedule.event8': '第十五届巴洛克歌剧国际声乐比赛《安东尼奥·切斯蒂》',
        'schedule.location8': '奥地利因斯布鲁克',
        'schedule.event8.date': '2024年8月25日至30日',
        'schedule.event9': '威廉·斯滕哈默国际音乐比赛'
        'schedule.location9': '瑞典诺尔雪平',
        'schedule.event9.date': '7.-13. 2024 年 6 月',
        'schedule.event10': '第三届Vincerò世界歌唱比赛决赛选手音乐会',
        'schedule.location10': '意大利维罗纳',
        'schedule.event10.date': '11. 2023 年 12 月',
        'schedule.event11': '博洛尼亚国际声乐比赛获奖者表演',
        'schedule.location11': '意大利博洛尼亚',
        'schedule.event11.date': '2023年8月1日',
        'schedule.event12': '地面歌剧_罗密欧与朱丽叶（斯蒂芬妮）',
        'schedule.location12': '中国上海',
        'schedule.event12.date': '30。朱尼-1。 2023 年 7 月',
        'schedule.event13': '上海音乐学院巴洛克室内乐团特别音乐会'
        'schedule.location13': '中国上海',
        'schedule.event13.date': '2023年6月12日'
        'schedule.event14': '明珠——巴洛克时期作品音乐会',
        'schedule.location14': '中国上海',
        'schedule.event14.date': '1. 2023 年 5 月',
        'schedule.event15': '第 60 届男高音维尼亚斯同意',
        'schedule.location15': '西班牙巴塞罗那',
        'schedule.event15.date': '2023年1月21日至27日',
        'schedule.event16': '地面歌剧_浮士德（Siebel）',
        'schedule.location16': '中国上海',
        'schedule.event16.date': '2019年7月',
        'schedule.ticketButton': '考芬门票',
        'schedule.reserveButton': 'Reservieren',
        'schedule.comingSoonButton': '秃头 verfügbar',
        'schedule.detailsButton': 'Veranstaltungsdetails',
        'contact.title': '联系人',
        'contact.description': 'Wenn Sie Fragen haben oder Kooperationsabsichten, kontaktieren Sie mich bitte',
        'contact.formTitle': 'Nachricht senden',
        'contact.nameLabel': 'Ihr 姓名',
        'contact.lastNameLabel': 'Nachname',
        'contact.firstNameLabel': 'Vorname',
        'contact.emailLabel': '电子邮件地址',
        'contact.subjectLabel': 'Betreff',
        'contact.messageLabel': 'Nachrichtentext',
        'contact.submitBtn': 'Nachricht senden',
        'contact.infoTitle': '联系信息',
        'contact.email': '电子邮件：dandancountertenor@gmail.com',
        'contact.phone': '电话: +49 123 4567 8910',
        'contact.address': '地址：德国柏林艺术博物馆',
        'contact.facebook': 'Facebook',
        'contact.instagram': 'Instagram',
        'contact.twitter': 'Twitter',
        'contact.youtube': 'YouTube',
        'contact.form.name': '姓名',
        'contact.form.email': '电子邮件',
        'contact.form.message': 'Nachricht',
        'contact.form.submit': '发送',
        'gallery.personal.title': '个人图片',
        'gallery.personal.caption1': '艺术肖像',
        'gallery.personal.caption2': 'Wettbewerb 照片',
        'gallery.personal.caption3': '滚动肖像',
        'gallery.performance.title': 'Aufführung',
        'gallery.performance.caption1': 'VINCERÒ Welt-Oper-Wettbewerb',
        'gallery.performance.caption2': '罗密欧与朱丽叶 - 上海',
        'gallery.performance.caption3': '音乐厅'
    }
};

/**
 * 切换网站语言函数
 * @param {string} lang - 语言代码（zh, en, de）
 */
function changeLanguage(lang) {
    // 保存语言设置到localStorage
    localStorage.setItem('preferredLanguage', lang);
    
    // 更新按钮激活状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
    
    // 更新页面文本
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        如果 (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
            
            // 只为英文和德文版本的英雄字幕添加斜体样式
            if ((lang === 'en' || lang === 'de') && key === 'hero.subtitle') {
                element.style.fontStyle = 'italic';
            } 别的 {
                // 其他情况删除斜体样式
                element.style.fontStyle = 'normal';
            }
        }
    });
    
    // 特殊处理下载简历链接
    const resumeLink = document.querySelector('.resume-link');
    如果 (resumeLink) {
        如果 (lang === 'zh') {
            resumeLink.textContent = translations['zh']['about.resumeCn'];
        } else if (lang === 'en') {
            resumeLink.textContent = translations['en']['about.resumeEn'];
        } else if (lang === 'de') {
            resumeLink.textContent = translations['de']['about.resumeDe'];
        }
    }
}

// 语言切换按钮事件监听
function setupLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            更改语言(lang);
        });
    });
}

// 页面加载时初始化语言
function initLanguage() {
    // 从localStorage获取首选语言，如果没有则使用中文作为默认语言
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    
    // 检查保存的语言是否在支持的语言列表中
    如果 (translations[savedLang]) {
        更改语言(已保存的语言)；
    } 别的 {
        // 如果保存的语言不支持，则使用中文
        更改语言('en');
    }
}

// 处理简历链接文本的函数
function updateResumeLinkText() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    const resumeLink = document.querySelector('.resume-link');
    如果 (resumeLink) {
        如果 (savedLang === 'zh') {
            resumeLink.textContent = translations['zh']['about.resumeCn'];
        } else if (savedLang === 'en') {
            resumeLink.textContent = translations['en']['about.resumeEn'];
        } else if (savedLang === 'de') {
            resumeLink.textContent = translations['de']['about.resumeDe'];
        }
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 语言设置切换按钮事件
    setupLanguageButtons();
    
    // 初始化语言
    初始化语言();
    
    // 页面加载后立即处理简历链接文本
    setTimeout(updateResumeLinkText, 100);
});
