// 语言切换功能实现
// 定义翻译文本对象
const translations = {
    'zh': {
        'nav.home': '首页',
        'nav.about': '关于我',
        'nav.media': '媒体中心',
        'nav.schedule': '演出日程',
        'nav.contact': '联系我',
        'hero.title': '帅 文 波',
        'hero.subtitle': '假声男高音',
        'hero.button': '了解更多',
        'about.subtitle': '关于我',
        'about.bio1': '他拥有一个被欧洲乐评人赞誉为“富有戏剧张力”的嗓音。<br>' + 
            '他表演了以下角色：蒙特威尔第歌剧《波佩亚的加冕》中的奥托内，古诺德的《浮士德》中的西贝尔，《罗密欧与朱丽叶》中的斯蒂芬诺，以及珀塞尔的歌剧《仙女女王》中的Alto独奏家。<br>' +
            '他的音乐之路开始在上海音乐学院，于2020至2025年间攻读声乐歌剧系学士学位，师从施恒教授，也是上海音乐学院历史上首位假声男高音，之后他选择前往德国学习，并在2025年10月成为斯图加特国立音乐与表演艺术学院声乐歌剧系的硕士研究生，师从克罗地亚籍女中音歌唱家Diana Haller与教授Bernhard Epstein。'
    },
        'about.bio2': '近年来，他的身影活跃在全球各大顶级声乐赛场。他在意大利博洛尼亚国际声乐大赛中获得第五名及鼓励奖，在维罗纳“Vincerò”世界歌剧大赛赢得了第三名和评论家特别奖。他获得了韩国大邱国际声乐大赛的决赛奖及大都会歌剧特别奖，并入围了包括西班牙“Tenor Viñas”、瑞典“Wilhelm Stenhammar”、奥地利“Pietro Antonio Cesti”巴洛克歌剧大赛，韩国首尔国际声乐比赛等…多项国际赛事。\n' +
            '2025年，他的才华获得了国际歌剧界的进一步认可。他成功入选由世界著名男中音托马斯·汉普森和女高音梅拉妮·迪纳在德国魏布林根创办的国际歌剧工作室，并成为该项目年度歌剧奖学金的获得者，并在魏布林根国际歌剧工作室中与专业乐团合作演出。2026年他在斯图加特的威廉玛剧院主演了由Jorg Helubeck指挥和Max Hoehn导演的蒙特威尔第的巴洛克歌剧《波佩亚的加冕》并成功饰演Ottone.\n' +
            '在欧洲求学期间，他有幸跟随Cherly Studer, Melanie Diener, Vivica Genaux, Renate Faltin, Francesca Bruni等老师学习。',
        'about.bio3': '自2019年起，他便成为法国阿尔日莱斯国际艺术节的常驻演员，参演了《浮士德》、《爱之甘醇》等多部歌剧。在上海求学期间，他在上海饰演歌剧《浮士德》中的Siebel和《罗密欧与朱丽叶》的Stepheno。他不仅在意大利博洛尼亚和维罗纳的著名音乐厅成功举办了获奖者音乐会，还在上海音乐学院和斯图加特国立音乐与表演学院的支持下，主导并参演了多场巴洛克风格与艺术歌曲专场音乐会。',
        'about.resumeCn': '下载简历',
        'features.title': '过往活动',
        'features.item1.title': '个人形象',
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
        'schedule.title': '演出日程',
        'schedule.description': '查看我的演出和活动安排',
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
        'schedule.event6': '62nd Tenor Viñas Concurs',
        'schedule.location6': '西班牙, 巴塞罗那',
        'schedule.event6.date': '2025年1月18-26日',
        'schedule.event7': 'Daegu International Vocal music Competition Finalist Concert',
        'schedule.location7': '韩国, 大邱',
        'schedule.event7.date': '2024年8月30日',
        'schedule.event8': '15th International Singing Competition for Baroque Opera《Antonio Cesti》',
        'schedule.location8': '奥地利, 因斯布鲁克',
        'schedule.event8.date': '2024年8月25-30日',
        'schedule.event9': 'Wilhelm Stenhammar International Music Competition',
        'schedule.location9': '瑞典, 诺尔雪平',
        'schedule.event9.date': '2024年6月7-13日',
        'schedule.event10': '3rd Vincerò World Singing Competition Finalist Concert',
        'schedule.location10': '意大利, 维罗纳',
        'schedule.event10.date': '2023年12月11日',
        'schedule.event11': 'Bologna International Vocal Competition Winners\' Performance',
        'schedule.location11': '意大利, 博洛尼亚',
        'schedule.event11.date': '2023年8月1日',
        'schedule.event12': 'Gound Opera_Romeo et Juliette (Stephone)',
        'schedule.location12': '中国, 上海',
        'schedule.event12.date': '2023年6月30日-7月1日',
        'schedule.event13': 'Special concert by Baroque Chamber Orchestra of Shanghai Conservatory of Music',
        'schedule.location13': '中国, 上海',
        'schedule.event13.date': '2023年6月12日',
        'schedule.event14': 'Bright Pearl-Concert of Works from Baroque Period',
        'schedule.location14': '中国, 上海',
        'schedule.event14.date': '2023年5月1日',
        'schedule.event15': '60th Tenor Viñas Concurs',
        'schedule.location15': '西班牙, 巴塞罗那',
        'schedule.event15.date': '2023年1月21-27日',
        'schedule.event16': 'Gound Opera_Faust (Siebel)',
        'schedule.location16': '中国, 上海',
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
        'contact.firstNameLabel': '名',
        'contact.emailLabel': '电子邮箱',
        'contact.subjectLabel': '主题',
        'contact.messageLabel': '消息内容',
        'contact.submitBtn': '发送消息',
        'contact.infoTitle': '联系方式',
        'contact.email': '邮箱: dandancountertenor@gmail.com',
        'contact.phone': '电话: +49 123 4567 8910',
        'contact.address': '地址: 柏林艺术区, 德国',
        'contact.facebook': 'Facebook',
        'contact.instagram': 'Instagram',
        'contact.twitter': 'Twitter',
        'contact.youtube': 'YouTube',
        'contact.form.name': '姓名',
        'contact.form.email': '电子邮箱',
        'contact.form.message': '留言',
        'contact.form.submit': '发送',
        'gallery.personal.title': '个人形象',
        'gallery.personal.caption1': '艺术写真',
        'gallery.personal.caption2': '比赛照片',
        'gallery.personal.caption3': '角色定妆照',
        'gallery.performance.title': '演出记录',
        'gallery.performance.caption1': 'Vincerò世界歌剧大赛',
        'gallery.performance.caption2': 'Romeo et Juliette - Shanghai',
        'gallery.performance.caption3': '音乐会演出'
    },
    'en': {
        'nav.home': 'Home',
        'nav.about': 'About Me',
        'nav.media': 'Media Center',
        'nav.schedule': 'Calendar',
        'nav.contact': 'Contact',
        'hero.title': 'WenBo Shuai',
        'hero.subtitle': 'Countertenor',
        'hero.button': 'Learn More',
        'about.subtitle': 'About Me',
        'about.bio1': 'He possesses a voice praised by European critics as "rich in dramatic tension."<br>' + 
            'He has performed the following roles: Ottone in Monteverdi‘s opera L’incoronazione di Poppea, Siebel in Gounod’s Faust, Stepheno in Roméo et Juliette, and Alto Soloist in Purcell‘s opera The Fairy Queen. <br>' +        
            'His musical journey began at the Shanghai Conservatory of Music, where he pursued a Bachelor‘s degree in Vocal and Opera Studies from 2020 to 2025 under the tutelage of Professor Heng Shi. As the first countertenor in the history of the Shanghai Conservatory of Music, he later chose to continue his studies in Germany. In October 2025, he became a Master’s student in the Opera Department of the Staatliche Hochschule für Musik und Darstellende Kunst Stuttgart, studying under Diana Haller and Professor Bernhard Epstein.' ,
        'about.bio2': 'In recent years, he has been active in top-tier vocal competitions worldwide. He achieved fifth place and the Encouragement Award at the Bologna International Vocal Competition in Italy and won third prize along with the Critics’Special Award at the "Vincerò" World Opera Competition in Verona. He also received the Finalist Award and the Metropolitan Opera Special Prize at the Daegu International Vocal Music Competition in South Korea and was a finalist in several prestigious international competitions, including Spain‘s "Tenor Viñas," Sweden’s "Wilhelm Stenhammar," and Austria‘s "Pietro Antonio Cesti" Baroque Opera Competition.\n' +
            'In 2025, his talent gained further recognition in the international opera community. He was successfully selected for the International Opera Workshop in Waiblingen, Germany, founded by the world-renowned baritone Thomas Hampson and soprano Melanie Diener, where he received the project‘s annual opera scholarship and performed with a professional orchestra. In 2026, he starred as Ottone in Monteverdi’s Baroque opera L‘incoronazione di Poppea at the Wilhelma Theater in Stuttgart, under the baton of conductor Jörg Halubek and directed by Max Hoehn.\n' +
            'During his studies in Europe, he had the privilege of learning from renowned mentors such as Cheryl Studer, Melanie Diener, Vivica Genaux, Renate Faltin, and Francesca Bruni.',
        'about.bio3': 'Since 2019, he has been a resident artist at the Festival International d‘Art Lyrique d’Argeles in France, participating in productions of operas such as Faust and L’Elisir d‘Amore. He has performed the role of Siebel in Gounod‘s opera Faust, Stepheno in Roméo et Juliette, and as an alto soloist in Purcell’s opera The Fairy Queen. In addition to successfully performing in winner‘s concerts at prestigious venues in Bologna and Verona, Italy, he also organized and participated in numerous Baroque and art song recitals with the support of the Shanghai Conservatory of Music and Staatliche Hochschule für Musik und Darstellende Kunst Stuttgart.',
        'about.resumeEn': 'Download Resume',
        'features.title': 'Gallery',
        'features.item1.title': 'Personal image',
        'features.item2.title': 'Performance record',
        'media.title': 'Media Center',
        'media.description': 'Here are my latest performance videos and media content',
        'media.featured': 'Featured Video',
        'media.featuredCaption': 'Latest Music Video "Melody of Art"',
        'media.gallery': 'Video Gallery',
        'media.video1.title': 'Latest Performance',
        'media.video1.description': 'Spring Concert 2025 Live',
        'media.video1.date': 'March 15, 2023',
        'media.video2.title': 'Creative Process Documentary',
        'media.video2.date': 'January 22, 2023',
        'media.video3.title': 'Artist Interview',
        'media.video3.date': 'November 10, 2022',
        'media.video4.title': 'Behind the Scenes - Recording Studio',
        'media.video4.date': 'September 5, 2022',
        'schedule.title': 'Calendar',
        'schedule.description': 'Check out my upcoming performances and events',
        'schedule.dateHeader': 'Date',
        'schedule.eventHeader': 'Event',
        'schedule.locationHeader': 'Location',
        'schedule.ticketHeader': 'Tickets',
        'schedule.event1.date': 'October 15, 2023',
        'schedule.event1.location': 'National Centre for the Performing Arts, Beijing',
        'schedule.event1.description': 'Spring Concert',
        'schedule.event1': 'Classical Music Concert',
        'schedule.location1': 'Berlin Concert Hall',
        'schedule.event2.date': 'November 2, 2024',
        'schedule.event2.location': 'Shanghai Concert Hall',
        'schedule.event2.description': 'Solo Recital',
        'schedule.event2': 'Modern Dance Performance',
        'schedule.location2': 'Paris Opera House',
        'schedule.event3': 'Art Exhibition Opening',
        'schedule.location3': 'National Gallery, London',
        'schedule.event3.date': 'November 20, 2025',
        'schedule.event4': 'New Year Concert',
        'schedule.location4': 'Vienna Golden Hall',
        'schedule.event4.date': 'December 5, 2024',
        'schedule.event5': 'Farinelli Wettbewerb',
        'schedule.location5': 'Karlsruhe, Germany',
        'schedule.event5.date': 'February 27-March 2, 2025',
        'schedule.event6': '62nd Tenor Viñas Concurs',
        'schedule.location6': 'Barcelona, Spain',
        'schedule.event6.date': 'January 18-26, 2025',
        'schedule.event7': 'Daegu International Vocal music Competition Finalist Concert',
        'schedule.location7': 'Daegu, Korea',
        'schedule.event7.date': 'August 30, 2024',
        'schedule.event8': '15th International Singing Competition for Baroque Opera《Antonio Cesti》',
        'schedule.location8': 'Innsbruck, Austria',
        'schedule.event8.date': 'August 25-30, 2024',
        'schedule.event9': 'Wilhelm Stenhammar International Music Competition',
        'schedule.location9': 'Norrköping, Sweden',
        'schedule.event9.date': 'June 7-13, 2024',
        'schedule.event10': '3rd Vincerò World Singing Competition Finalist Concert',
        'schedule.location10': 'Verona, Italy',
        'schedule.event10.date': 'December 11, 2023',
        'schedule.event11': 'Bologna International Vocal Competition Winners\' Performance',
        'schedule.location11': 'Bologna, Italy',
        'schedule.event11.date': 'August 1, 2023',
        'schedule.event12': 'Gound Opera_Romeo et Juliette (Stephone)',
        'schedule.location12': 'Shanghai, China',
        'schedule.event12.date': 'June 30-July 1, 2023',
        'schedule.event13': 'Special concert by Baroque Chamber Orchestra of Shanghai Conservatory of Music',
        'schedule.location13': 'Shanghai, China',
        'schedule.event13.date': 'June 12, 2023',
        'schedule.event14': 'Bright Pearl-Concert of Works from Baroque Period',
        'schedule.location14': 'Shanghai, China',
        'schedule.event14.date': 'May 1, 2023',
        'schedule.event15': '60th Tenor Viñas Concurs',
        'schedule.location15': 'Barcelona, Spain',
        'schedule.event15.date': 'January 21-27, 2023',
        'schedule.event16': 'Gound Opera_Faust (Siebel)',
        'schedule.location16': 'Shanghai, China',
        'schedule.event16.date': 'August 7, 2019',
        'schedule.ticketButton': 'Buy Tickets',
        'schedule.reserveButton': 'Reserve',
        'schedule.comingSoonButton': 'Coming Soon',
        'schedule.detailsButton': 'Event Details',
        'contact.title': 'Contact Me',
        'contact.description': 'If you have any questions or cooperation intentions, please feel free to contact me',
        'contact.formTitle': 'Send a Message',
        'contact.nameLabel': 'Your Name',
        'contact.lastNameLabel': 'Last Name',
        'contact.firstNameLabel': 'First Name',
        'contact.emailLabel': 'Email Address',
        'contact.subjectLabel': 'Subject',
        'contact.messageLabel': 'Message Content',
        'contact.submitBtn': 'Send Message',
        'contact.infoTitle': 'Contact Information',
        'contact.email': 'Email: dandancountertenor@gmail.com',
        'contact.phone': 'Phone: +49 123 4567 8910',
        'contact.address': 'Address: Berlin Art District, Germany',
        'contact.facebook': 'Facebook',
        'contact.instagram': 'Instagram',
        'contact.twitter': 'Twitter',
        'contact.youtube': 'YouTube',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.message': 'Message',
        'contact.form.submit': 'Submit',
        'gallery.personal.title': 'Personal image',
        'gallery.personal.caption1': 'Artistic Portrait',
        'gallery.personal.caption2': 'Competition Photo',
        'gallery.personal.caption3': 'Role Portrait',
        'gallery.performance.title': 'Performance record',
        'gallery.performance.caption1': 'Vincerò World Opera Competition',
        'gallery.performance.caption2': 'Romeo et Juliette - Shanghai',
        'gallery.performance.caption3': 'Concert Performance'
    },
    'de': {
        'nav.home': 'Startseite',
        'nav.about': 'Über mich',
        'nav.media': 'Medienzentrum',
        'nav.schedule': 'Kalender',
        'nav.contact': 'Kontakt',
        'hero.title': 'WenBo Shuai',
        'hero.subtitle': 'Countertenor',
        'hero.button': 'Mehr erfahren',
        'about.subtitle': 'Über mich',
        'about.bio1': 'Seine Stimme wird von europäischen Kritikern als „reich an dramatischer Spannung“ gerühmt.<br>' +
            'Er hat die Rolle des Ottone in Monteverdis Oper L’incoronazione di Poppea, die Rolle des Siebel in Gounods Oper Faust, die Rolle des Stepheno in Roméo et Juliette sowie die Alt-Solopartie in Purcells Oper The Fairy Queen gespielt. <br>' +       
            'Seine musikalische Laufbahn begann am Shanghaier Konservatorium für Musik, wo er von 2020 bis 2025 unter der Anleitung von Professor Shi Heng ein Bachelorstudium im Fach Gesang und Oper absolvierte. Als erster Countertenor in der Geschichte des Shanghaier Konservatoriums für Musik entschied er sich anschließend, sein Studium in Deutschland fortzusetzen. Im Oktober 2025 wurde er als Masterstudent in der Abteilung Opernschule an der Staatlichen Hochschule für Musik und Darstellende Kunst Stuttgart aufgenommen. Er studiert bei Diana Haller und Professor Bernhard Epstein.' ,
        'about.bio2': 'In den vergangenen Jahren war er bei hochrangigen Gesangswettbewerben weltweit aktiv. Er erreichte den fünften Platz sowie den Förderpreis beim Internationalen Gesangswettbewerb von Bologna (Italien) und gewann den dritten Preis sowie den Sonderpreis der Kritiker beim internationalen Opernwettbewerb „Vincerò“ in Verona. Darüber hinaus erhielt er den Finalistenpreis und den Spezialpreis der Metropolitan Opera beim Internationalen Gesangswettbewerb in Daegu (Südkorea). Zudem war er finalist bei mehreren renommierten internationalen Wettbewerben, darunter „Tenor Viñas“ (Spanien), „Wilhelm Stenhammar“ (Schweden) und der Barockopernwettbewerb „Pietro Antonio Cesti“ (Österreich).\n' +
            'Im Jahr 2025 erlangte sein Talent weitere Anerkennung in der internationalen Opernszene. Er wurde erfolgreich für den International Opera Workshop in Waiblingen (Deutschland) ausgewählt, der vom weltweit bekannten Bariton Thomas Hampson und der Sopranistin Melanie Diener gegründet wurde. Dort erhielt er das jährliche Opernstipendium des Projekts und trat mit einem professionellen Orchester auf. Im Jahr 2026 übernahm er die Rolle des Ottone in Claudio Monteverdis Barockoper L’incoronazione di Poppea am Wilhelma Theater Stuttgart unter der musikalischen Leitung von Jörg Halubek und der Regie von Max Hoehn.\n' +
            'Während seiner Studienzeit in Europa hatte er die Möglichkeit, von renommierten Mentoren wie Cheryl Studer, Melanie Diener, Vivica Genaux, Renate Faltin und Francesca Bruni zu lernen.',
        'about.bio3': 'Seit 2019 ist er als Resident Artist beim Festival International d’Art Lyrique d’Argeles in Frankreich tätig und wirkte dort in Opernproduktionen wie Faust und L’Elisir d’Amore mit. Er sang die Rollen von Gound’Oper des Siebel in Faust sowie des Stéphano in Roméo et Juliette, Purcell’ Oper des Alto Solist in The Fairy Queen. Neben erfolgreichen Auftritten in Preisträgerkonzerten an renommierten Spielstätten in Bologna und Verona (Italien) organisierte und gestaltete er zudem zahlreiche Barock- und Kunstliedabende mit Unterstützung des Shanghaier Konservatoriums für Musik sowie der Staatlichen Hochschule für Musik und Darstellende Kunst Stuttgart.',
        'about.resumeDe': 'Lebenslauf herunterladen',
        'features.title': 'Galerie',
        'features.item1.title': 'Persönliches Bild',
        'features.item2.title': 'Aufführung',
        'media.title': 'Medienzentrum',
        'media.description': 'Hier sind meine neuesten Auftrittsvideos und Medieninhalte',
        'media.featured': 'Ausgewähltes Video',
        'media.featuredCaption': 'Neuester Musikvideo "Melodie der Kunst"',
        'media.gallery': 'Videogalerie',
        'media.video1.title': 'Neuester Auftritt',
        'media.video1.description': 'Frühlingskonzert 2025 Live',
        'media.video1.date': '15. März 2023',
        'media.video2.title': 'Dokumentation des Schaffungsprozesses',
        'media.video2.date': '22. Januar 2023',
        'media.video3.title': 'Künstlerinterview',
        'media.video3.date': '10. November 2022',
        'media.video4.title': 'Backstage - Tonstudio',
        'media.video4.date': '5. September 2022',
        'schedule.title': 'Kalender',
        'schedule.description': 'Schauen Sie sich meine bevorstehenden Aufführungen und Veranstaltungen an',
        'schedule.dateHeader': 'Datum',
        'schedule.eventHeader': 'Veranstaltung',
        'schedule.locationHeader': 'Ort',
        'schedule.ticketHeader': 'Tickets',
        'schedule.event1.date': '15. Oktober 2023',
        'schedule.event1.location': 'Nationales Zentrum für Darstellende Künste, Peking',
        'schedule.event1.description': 'Frühlingskonzert',
        'schedule.event1': 'Klassisches Musikkonzert',
        'schedule.location1': 'Berliner Konzerthalle',
        'schedule.event2.date': '2. November 2024',
        'schedule.event2.location': 'Shanghai Konzerthalle',
        'schedule.event2.description': 'Solo-Recital',
        'schedule.event2': 'Moderner Tanzaufführung',
        'schedule.location2': 'Paris Opernhaus',
        'schedule.event3': 'Kunstausstellungsöffnung',
        'schedule.location3': 'Nationalgalerie London',
        'schedule.event3.date': '20. November 2025',
        'schedule.event4': 'Neujahrskonzert',
        'schedule.location4': 'Wiener Goldener Saal',
        'schedule.event4.date': '5. Dezember 2024',
        'schedule.event5': 'Farinelli Wettbewerb',
        'schedule.location5': 'Karlsruhe, Deutschland',
        'schedule.event5.date': '27. Februar-2. März 2025',
        'schedule.event6': '62nd Tenor Viñas Concurs',
        'schedule.location6': 'Barcelona, Spanien',
        'schedule.event6.date': '18.-26. Januar 2025',
        'schedule.event7': 'Daegu International Vocal music Competition Finalist Concert',
        'schedule.location7': 'Daegu, Korea',
        'schedule.event7.date': '30. August 2024',
        'schedule.event8': '15th International Singing Competition for Baroque Opera《Antonio Cesti》',
        'schedule.location8': 'Innsbruck, Österreich',
        'schedule.event8.date': '25.-30. August 2024',
        'schedule.event9': 'Wilhelm Stenhammar International Music Competition',
        'schedule.location9': 'Norrköping, Schweden',
        'schedule.event9.date': '7.-13. Juni 2024',
        'schedule.event10': '3rd Vincerò World Singing Competition Finalist Concert',
        'schedule.location10': 'Verona, Italien',
        'schedule.event10.date': '11. Dezember 2023',
        'schedule.event11': 'Bologna International Vocal Competition Winners\' Performance',
        'schedule.location11': 'Bologna, Italien',
        'schedule.event11.date': '1. August 2023',
        'schedule.event12': 'Gound Opera_Romeo et Juliette (Stephone)',
        'schedule.location12': 'Shanghai, China',
        'schedule.event12.date': '30. Juni-1. Juli 2023',
        'schedule.event13': 'Special concert by Baroque Chamber Orchestra of Shanghai Conservatory of Music',
        'schedule.location13': 'Shanghai, China',
        'schedule.event13.date': 'June 12, 2023',
        'schedule.event14': 'Bright Pearl-Concert of Works from Baroque Period',
        'schedule.location14': 'Shanghai, China',
        'schedule.event14.date': '1. Mai 2023',
        'schedule.event15': '60th Tenor Viñas Concurs',
        'schedule.location15': 'Barcelona, Spanien',
        'schedule.event15.date': 'January 21-27, 2023',
        'schedule.event16': 'Gound Opera_Faust (Siebel)',
        'schedule.location16': 'Shanghai, China',
        'schedule.event16.date': 'July 2019',
        'schedule.ticketButton': 'Tickets kaufen',
        'schedule.reserveButton': 'Reservieren',
        'schedule.comingSoonButton': 'Bald verfügbar',
        'schedule.detailsButton': 'Veranstaltungsdetails',
        'contact.title': 'Kontakt',
        'contact.description': 'Wenn Sie Fragen haben oder Kooperationsabsichten, kontaktieren Sie mich bitte',
        'contact.formTitle': 'Nachricht senden',
        'contact.nameLabel': 'Ihr Name',
        'contact.lastNameLabel': 'Nachname',
        'contact.firstNameLabel': 'Vorname',
        'contact.emailLabel': 'E-Mail-Adresse',
        'contact.subjectLabel': 'Betreff',
        'contact.messageLabel': 'Nachrichtentext',
        'contact.submitBtn': 'Nachricht senden',
        'contact.infoTitle': 'Kontaktinformationen',
        'contact.email': 'E-Mail: dandancountertenor@gmail.com',
        'contact.phone': 'Telefon: +49 123 4567 8910',
        'contact.address': 'Adresse: Berliner Kunstbezirk, Deutschland',
        'contact.facebook': 'Facebook',
        'contact.instagram': 'Instagram',
        'contact.twitter': 'Twitter',
        'contact.youtube': 'YouTube',
        'contact.form.name': 'Name',
        'contact.form.email': 'E-Mail',
        'contact.form.message': 'Nachricht',
        'contact.form.submit': 'Senden',
        'gallery.personal.title': 'Persönliches Bild',
        'gallery.personal.caption1': 'Künstlerisches Portrait',
        'gallery.personal.caption2': 'Wettbewerb Foto',
        'gallery.personal.caption3': 'Rollenportrait',
        'gallery.performance.title': 'Aufführung',
        'gallery.performance.caption1': 'VINCERÒ Welt-Oper-Wettbewerb',
        'gallery.performance.caption2': 'Romeo et Juliette - Shanghai',
        'gallery.performance.caption3': 'Konzertaufführung'
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
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
            
            // 只为英文和德文版本的hero-subtitle添加斜体样式
            if ((lang === 'en' || lang === 'de') && key === 'hero.subtitle') {
                element.style.fontStyle = 'italic';
            } else {
                // 其他情况移除斜体样式
                element.style.fontStyle = 'normal';
            }
        }
    });
    
    // 特殊处理下载简历链接
    const resumeLink = document.querySelector('.resume-link');
    if (resumeLink) {
        if (lang === 'zh') {
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
            changeLanguage(lang);
        });
    });
}

// 页面加载时初始化语言
function initLanguage() {
    // 从localStorage获取首选语言，如果没有则使用英文作为默认语言
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    
    // 检查保存的语言是否在支持的语言列表中
    if (translations[savedLang]) {
        changeLanguage(savedLang);
    } else {
        // 如果保存的语言不支持，则使用英文
        changeLanguage('en');
    }
}

// 处理简历链接文本的函数
function updateResumeLinkText() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    const resumeLink = document.querySelector('.resume-link');
    if (resumeLink) {
        if (savedLang === 'zh') {
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
    // 设置语言切换按钮事件
    setupLanguageButtons();
    
    // 初始化语言
    initLanguage();
    
    // 页面加载后立即处理简历链接文本
    setTimeout(updateResumeLinkText, 100);
});
