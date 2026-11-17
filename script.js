// 诗词拾光 · Little Poetry
// 原有诗词数据库与收藏/历史存储键均保留。
const poems = [

{
    id: 1,
    type: "唐诗",
    title: "登鹳雀楼",
    author: "王之涣",
    source: "《全唐诗》",
    category: "人生哲理",
    text: "白日依山尽，\n黄河入海流。\n欲穷千里目，\n更上一层楼。",
    translations: [
        ["白日依山尽", "夕阳依傍着西山慢慢落下。"],
        ["黄河入海流", "黄河奔腾向前，最终流入大海。"],
        ["欲穷千里目", "如果想要看到更遥远的地方。"],
        ["更上一层楼", "就需要再登上一层高楼。"]
    ],
    background: "王之涣是盛唐著名诗人。这首诗描写诗人登楼远眺时的壮阔景象。诗中既有对自然景色的描绘，也蕴含着积极向上的人生思考。",
    appreciation: "前两句写景，展现夕阳与黄河交织的壮丽画面。后两句由景入理，将登高望远的实际体验提升为人生哲理。诗句语言简洁，意境开阔，表达了不断进取、追求更高境界的精神。"
},

{
    id: 2,
    type: "宋词",
    title: "定风波·莫听穿林打叶声",
    author: "苏轼",
    source: "《东坡乐府》",
    category: "人生哲理",
    text: "莫听穿林打叶声，\n何妨吟啸且徐行。\n竹杖芒鞋轻胜马，\n谁怕？一蓑烟雨任平生。",
    translations: [
        ["莫听穿林打叶声", "不必在意雨点穿过树林、敲打树叶的声音。"],
        ["何妨吟啸且徐行", "不妨一边吟诗一边悠然前行。"],
        ["竹杖芒鞋轻胜马", "拄着竹杖、穿着草鞋，反而觉得比骑马还轻快。"],
        ["谁怕？一蓑烟雨任平生", "又有什么可怕的？披着蓑衣，在风雨中度过一生又何妨。"]
    ],
    background: "这首词作于宋神宗元丰五年（1082年），苏轼因乌台诗案被贬黄州期间。词中记录了一次春日出游遇雨的经历。",
    appreciation: "词的上片描写途中遇雨的情景，下片则转向内心感受。苏轼没有被风雨困扰，而是以从容的态度面对人生中的挫折。自然界的风雨也因此成为人生磨难的象征。"
},

{
    id: 3,
    type: "唐诗",
    title: "春江花月夜",
    author: "张若虚",
    source: "《全唐诗》",
    category: "山水自然",
    text: "春江潮水连海平，\n海上明月共潮生。\n滟滟随波千万里，\n何处春江无月明？",
    translations: [
        ["春江潮水连海平", "春天江潮浩荡，与大海相连，水面一望无际。"],
        ["海上明月共潮生", "一轮明月仿佛伴随着潮水，从海上升起。"],
        ["滟滟随波千万里", "月光随着波浪闪耀，洒向千万里的江面。"],
        ["何处春江无月明", "春天的江水流经之处，哪里没有明亮的月光呢？"]
    ],
    background: "张若虚是初唐诗人。这首诗以春江、花林、明月为主要意象，将自然景色、宇宙思考与人生感悟融为一体。",
    appreciation: "诗歌开篇营造出宏大而清丽的月夜景象。诗人由眼前的江月想到宇宙与人生，使自然之美具有了深远的哲学意味。"
},

{
    id: 4,
    type: "宋词",
    title: "临江仙·送钱穆父",
    author: "苏轼",
    source: "《东坡乐府》",
    category: "离别思念",
    text: "人生如逆旅，\n我亦是行人。",
    translations: [
        ["人生如逆旅", "人生就像一场漫长的旅途，处处都是暂时的停留。"],
        ["我亦是行人", "而我也不过是这旅途中的一个匆匆过客。"]
    ],
    background: "这首词是苏轼送别友人钱穆父时所作。作品写于宋哲宗元祐年间，表达了诗人对离别和人生聚散的理解。",
    appreciation: "将人生比作旅店，将人比作过客，短短两句便写出了人生漂泊无定的感慨。它并非单纯的悲观，而是一种看透聚散之后的豁达。"
},

{
    id: 5,
    type: "宋词",
    title: "声声慢·寻寻觅觅",
    author: "李清照",
    source: "《漱玉词》",
    category: "离别思念",
    text: "寻寻觅觅，冷冷清清，\n凄凄惨惨戚戚。\n乍暖还寒时候，最难将息。",
    translations: [
        ["寻寻觅觅，冷冷清清", "反复寻找，却只感到四周冷清寂寥。"],
        ["凄凄惨惨戚戚", "内心充满凄凉、悲伤和忧愁。"],
        ["乍暖还寒时候", "天气时暖时寒，变化无常。"],
        ["最难将息", "这样的时节最难调养身心。"]
    ],
    background: "李清照南渡以后，经历了国破、家亡和丧偶等人生变故。这首词通常被认为创作于其晚年，表达了深沉的身世之痛。",
    appreciation: "开篇连续使用叠词，形成独特的音韵节奏，将孤独与愁绪层层推进。词人通过天气、环境和内心感受的交织，展现了极为细腻的情感世界。"
},

{
    id: 6,
    type: "唐诗",
    title: "送元二使安西",
    author: "王维",
    source: "《王右丞集》",
    category: "离别思念",
    text: "渭城朝雨浥轻尘，\n客舍青青柳色新。\n劝君更尽一杯酒，\n西出阳关无故人。",
    translations: [
        ["渭城朝雨浥轻尘", "渭城早晨的一场春雨，润湿了道路上的尘土。"],
        ["客舍青青柳色新", "旅舍周围的柳树经过雨水洗涤，显得格外青翠。"],
        ["劝君更尽一杯酒", "请你再饮尽这一杯送别的酒。"],
        ["西出阳关无故人", "因为向西离开阳关之后，就很难再遇到熟悉的老朋友了。"]
    ],
    background: "王维送别友人元二前往安西都护府。诗歌描写了渭城清晨的景色，也表现出送别时依依不舍的情感。",
    appreciation: "前两句以清新的春景衬托离别氛围，后两句则将情感集中于一杯酒中。语言朴素，却写出了深厚真挚的友情。"
},

{
    id: 7,
    type: "古文",
    title: "岳阳楼记",
    author: "范仲淹",
    source: "《范文正公集》",
    category: "家国情怀",
    text: "不以物喜，\n不以己悲。\n先天下之忧而忧，\n后天下之乐而乐。",
    translations: [
        ["不以物喜", "不因为外界环境的好坏而过分欢喜。"],
        ["不以己悲", "不因为个人境遇的得失而悲伤。"],
        ["先天下之忧而忧", "在天下人忧虑之前先承担忧虑。"],
        ["后天下之乐而乐", "在天下人快乐之后才享受快乐。"]
    ],
    background: "范仲淹于北宋庆历六年（1046年）应好友滕子京之请，为重修后的岳阳楼作记。文章借景抒情，表达了作者的政治理想。",
    appreciation: "这段文字是全文思想的集中体现。作者将个人情感与天下苍生联系起来，强调士人应当具有超越个人得失的责任意识。"
},

{
    id: 8,
    type: "先秦经典",
    title: "论语·雍也",
    author: "孔子",
    source: "《论语》",
    category: "人生哲理",
    text: "知之者不如好之者，\n好之者不如乐之者。",
    translations: [
        ["知之者不如好之者", "懂得某种知识的人，不如真正喜爱它的人。"],
        ["好之者不如乐之者", "喜爱它的人，又不如以它为乐的人。"]
    ],
    background: "《论语》记录了孔子及其弟子的言行，是儒家重要经典。这句话讨论的是学习和求知的态度。",
    appreciation: "这句话强调兴趣和热爱在学习中的重要作用。从知道，到喜欢，再到以之为乐，体现了由被动接受向主动投入的转变。"
},

{
    id: 9,
    type: "古文",
    title: "醉翁亭记",
    author: "欧阳修",
    source: "《欧阳文忠公集》",
    category: "山水自然",
    text: "醉翁之意不在酒，\n在乎山水之间也。",
    translations: [
        ["醉翁之意不在酒", "醉翁真正的乐趣并不在于饮酒。"],
        ["在乎山水之间也", "而是在于欣赏山水之间的自然美景。"]
    ],
    background: "欧阳修在被贬滁州期间写下《醉翁亭记》。文章记录了他与百姓同游山水的经历。",
    appreciation: "表面上写饮酒游乐，实际上表现出作者寄情山水、与民同乐的生活情趣。文字轻松自然，却蕴含着深厚的人生态度。"
},

{
    id: 10,
    type: "古文",
    title: "兰亭集序",
    author: "王羲之",
    source: "《晋书·王羲之传》相关作品",
    category: "人生哲理",
    text: "仰观宇宙之大，\n俯察品类之盛，\n所以游目骋怀，\n足以极视听之娱。",
    translations: [
        ["仰观宇宙之大", "抬头观察广阔无边的宇宙。"],
        ["俯察品类之盛", "低头欣赏世间万物的繁盛。"],
        ["所以游目骋怀", "借此开阔视野，舒展胸怀。"],
        ["足以极视听之娱", "足以充分享受视觉与听觉带来的乐趣。"]
    ],
    background: "东晋永和九年，王羲之与友人在兰亭举行修禊集会。众人饮酒赋诗，王羲之为诗集作序。",
    appreciation: "文章先写兰亭聚会的自然环境和欢快气氛，随后转入对人生短暂的思考。它在明朗与感伤之间形成了深刻的情感变化。"
},

{
    id: 11,
    type: "宋词",
    title: "水调歌头·明月几时有",
    author: "苏轼",
    source: "《东坡乐府》",
    category: "爱情情感",
    text: "人有悲欢离合，\n月有阴晴圆缺，\n此事古难全。\n但愿人长久，千里共婵娟。",
    translations: [
        ["人有悲欢离合", "人世间总有欢乐、悲伤、相聚和离别。"],
        ["月有阴晴圆缺", "月亮也总有阴天、晴天、圆满和残缺。"],
        ["此事古难全", "从古至今，这样的事情就很难十全十美。"],
        ["但愿人长久，千里共婵娟", "只希望彼此都能平安长久，即使相隔千里，也能共同欣赏这轮明月。"]
    ],
    background: "这首词创作于宋神宗熙宁九年（1076年）中秋。苏轼当时在密州任职，思念远在他乡的弟弟苏辙。",
    appreciation: "作品从对月亮的想象出发，逐渐转向对人生离合的思考。词人没有停留在个人的悲伤中，而是将思念升华为对天下离人的美好祝愿。"
},

{
    id: 12,
    type: "明代文学",
    title: "临江仙·滚滚长江东逝水",
    author: "杨慎",
    source: "《廿一史弹词》",
    category: "历史名著",
    text: "滚滚长江东逝水，\n浪花淘尽英雄。\n是非成败转头空。\n青山依旧在，几度夕阳红。",
    translations: [
        ["滚滚长江东逝水", "滚滚长江水不停地向东流去。"],
        ["浪花淘尽英雄", "历史的浪潮带走了曾经叱咤风云的英雄人物。"],
        ["是非成败转头空", "过去的是非与成败，转眼间都化为虚无。"],
        ["青山依旧在，几度夕阳红", "只有青山依然存在，夕阳却已经经历了无数次升落。"]
    ],
    background: "这首词出自杨慎的《廿一史弹词》，后来被用作《三国演义》的开篇词，使其广为流传。",
    appreciation: "词人借长江流水与青山夕阳的对比，感叹历史人物与功业终将消逝。作品具有浓厚的历史沧桑感，也表达了对人生荣辱的超然态度。"
},

{
    id: 13,
    type: "清代小说",
    title: "好了歌",
    author: "曹雪芹",
    source: "《红楼梦》第一回",
    category: "历史名著",
    text: "世人都晓神仙好，\n惟有功名忘不了。\n古今将相在何方？\n荒冢一堆草没了。",
    translations: [
        ["世人都晓神仙好", "世人都知道超脱世俗的生活值得向往。"],
        ["惟有功名忘不了", "但很多人仍然放不下功名利禄。"],
        ["古今将相在何方", "古往今来的将相如今都在哪里呢？"],
        ["荒冢一堆草没了", "最终也不过化作一座被野草掩埋的坟墓。"]
    ],
    background: "《好了歌》出现在《红楼梦》第一回，由跛足道人唱出。它以通俗的语言讽刺世人对功名、财富、情爱和家庭的执着。",
    appreciation: "作品通过反复的对照，揭示世俗追求与生命无常之间的矛盾。它也是理解《红楼梦》全书悲剧意识的重要线索。"
},

{
    id: 14,
    type: "唐诗",
    title: "山居秋暝",
    author: "王维",
    source: "《王右丞集》",
    category: "四时风物",
    text: "空山新雨后，\n天气晚来秋。\n明月松间照，\n清泉石上流。",
    translations: [
        ["空山新雨后", "空旷的山林刚刚下过一场雨。"],
        ["天气晚来秋", "傍晚的空气已经带有秋天的凉意。"],
        ["明月松间照", "皎洁的月光从松树间洒落。"],
        ["清泉石上流", "清澈的泉水在山石上缓缓流淌。"]
    ],
    background: "王维是盛唐山水田园诗派的代表诗人。这首诗描绘了秋日山居雨后的宁静景象。",
    appreciation: "诗人通过月光、松林、清泉等意象构成一幅清幽淡雅的山水画。诗中动静结合，表现出人与自然和谐相处的意境。"
},

{
    id: 15,
    type: "先秦经典",
    title: "论语·子罕",
    author: "孔子",
    source: "《论语》",
    category: "人生哲理",
    text: "岁寒，然后知松柏之后凋也。",
    translations: [
        ["岁寒", "到了寒冷的季节。"],
        ["然后知松柏之后凋也", "这时才知道松柏是最后凋谢的植物。"]
    ],
    background: "这句话出自《论语·子罕》。孔子借松柏在严寒中依然挺立的特点，说明人在艰难环境中的品格。",
    appreciation: "松柏象征坚定与坚韧。真正的品格往往不是在顺境中显现，而是在困难和压力之下得到检验。"
},

{
    id: 16,
    type: "唐诗",
    title: "将进酒",
    author: "李白",
    source: "《李太白集》",
    category: "人生哲理",
    text: "天生我材必有用，\n千金散尽还复来。",
    translations: [
        ["天生我材必有用", "上天赋予我的才能，一定会有发挥作用的地方。"],
        ["千金散尽还复来", "即使千金散尽，也终究还有重新获得的机会。"]
    ],
    background: "《将进酒》是李白的代表作之一。诗歌借宴饮抒发人生感慨，展现了诗人豪迈奔放的性格。",
    appreciation: "这两句体现了李白强烈的自信和昂扬的生命态度。即使身处失意之中，诗人仍然相信自身价值，表现出浪漫主义的精神气质。"
}
,
{
  "id": 17,
  "type": "唐诗",
  "title": "山居秋暝",
  "author": "王维",
  "source": "《王右丞集》",
  "category": "山水自然",
  "text": "空山新雨后，\n天气晚来秋。\n明月松间照，\n清泉石上流。\n竹喧归浣女，\n莲动下渔舟。\n随意春芳歇，\n王孙自可留。",
  "translations": [
    [
      "全文译意",
      "新雨过后，空山清朗，傍晚已带来秋意。明月透过松林洒下清辉，清泉在山石上潺潺流淌。"
    ]
  ],
  "background": "本篇选自《王右丞集》，作者为王维。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "王维将山中雨后、月色、清泉与人物活动组合成一幅幽静而有生气的秋夜图。诗中没有刻意描绘孤寂，反而在自然秩序中写出安宁与自足。"
},
{
  "id": 18,
  "type": "唐诗",
  "title": "鹿柴",
  "author": "王维",
  "source": "《王右丞集》",
  "category": "山水自然",
  "text": "空山不见人，\n但闻人语响。\n返景入深林，\n复照青苔上。",
  "translations": [
    [
      "全文译意",
      "空寂的山谷里看不见人影，却传来人说话的声音。夕阳返照进入幽深树林，又映在青苔之上。"
    ]
  ],
  "background": "本篇选自《王右丞集》，作者为王维。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "诗人以声音反衬山林的空寂，再以一束微光点亮青苔。短短二十字，写出幽深、静谧而富有层次的空间。"
},
{
  "id": 19,
  "type": "唐诗",
  "title": "竹里馆",
  "author": "王维",
  "source": "《王右丞集》",
  "category": "山水自然",
  "text": "独坐幽篁里，\n弹琴复长啸。\n深林人不知，\n明月来相照。",
  "translations": [
    [
      "全文译意",
      "独自坐在幽深竹林中，弹琴又长声吟啸。深林中无人知晓，只有明月前来相伴。"
    ]
  ],
  "background": "本篇选自《王右丞集》，作者为王维。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "诗中没有繁复景物，只有竹林、琴声与明月。独处并未带来孤苦，反而呈现出诗人内心的闲适与澄明。"
},
{
  "id": 20,
  "type": "唐诗",
  "title": "过故人庄",
  "author": "孟浩然",
  "source": "《孟浩然集》",
  "category": "友情相逢",
  "text": "故人具鸡黍，\n邀我至田家。\n绿树村边合，\n青山郭外斜。\n开轩面场圃，\n把酒话桑麻。\n待到重阳日，\n还来就菊花。",
  "translations": [
    [
      "全文译意",
      "老朋友准备好饭菜，邀请我到乡村家中做客。村边绿树环绕，城外青山横斜。打开窗户面对谷场菜园，举杯谈论农事。等到重阳节，再来一起赏菊。"
    ]
  ],
  "background": "本篇选自《孟浩然集》，作者为孟浩然。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "全诗以平易语言写田园日常。绿树、青山、场圃和家常话语构成真切温暖的友情图景，结尾的邀约让情谊自然延续。"
},
{
  "id": 21,
  "type": "唐诗",
  "title": "宿建德江",
  "author": "孟浩然",
  "source": "《孟浩然集》",
  "category": "羁旅乡愁",
  "text": "移舟泊烟渚，\n日暮客愁新。\n野旷天低树，\n江清月近人。",
  "translations": [
    [
      "全文译意",
      "把船停靠在烟雾笼罩的小洲边，日暮时分，羁旅的愁绪又涌上心头。原野空旷，远天仿佛低垂到树梢；江水清澈，月影仿佛靠近了人。"
    ]
  ],
  "background": "本篇选自《孟浩然集》，作者为孟浩然。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "前两句点出漂泊者的孤独，后两句以天地高低、人与月远近的错觉写出江夜的辽阔与清冷。景物越开阔，客愁越显深长。"
},
{
  "id": 22,
  "type": "唐诗",
  "title": "望岳",
  "author": "杜甫",
  "source": "《杜工部集》",
  "category": "山水自然",
  "text": "岱宗夫如何？齐鲁青未了。\n造化钟神秀，阴阳割昏晓。\n荡胸生曾云，决眦入归鸟。\n会当凌绝顶，一览众山小。",
  "translations": [
    [
      "全文译意",
      "泰山究竟是什么样的？它横跨齐鲁，青色山影绵延不尽。大自然把神奇秀丽都汇聚于此，山南山北仿佛分割出明暗。层云涌起荡涤胸怀，归鸟飞入视野。终有一天要登上顶峰，俯瞰群山。"
    ]
  ],
  "background": "本篇选自《杜工部集》，作者为杜甫。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "诗人以设问起笔，层层推进泰山的雄伟。末句从眼前景象转向未来志向，既写登临愿望，也寄托青年杜甫昂扬进取的精神。"
},
{
  "id": 23,
  "type": "唐诗",
  "title": "春望",
  "author": "杜甫",
  "source": "《杜工部集》",
  "category": "家国情怀",
  "text": "国破山河在，\n城春草木深。\n感时花溅泪，\n恨别鸟惊心。\n烽火连三月，\n家书抵万金。\n白头搔更短，\n浑欲不胜簪。",
  "translations": [
    [
      "全文译意",
      "国都沦陷，山河依旧，春天的城中草木却长得荒深。感伤时局，看见花也落泪；怅恨离别，听到鸟鸣也心惊。战火持续多月，一封家书珍贵如万金。忧愁使白发越搔越短，几乎无法插簪。"
    ]
  ],
  "background": "本篇选自《杜工部集》，作者为杜甫。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "诗歌将国难、家愁与个人衰老交织在一起。春日原本象征生机，在战乱背景下却成为触发悲痛的媒介，情感沉郁而深厚。"
},
{
  "id": 24,
  "type": "唐诗",
  "title": "月夜忆舍弟",
  "author": "杜甫",
  "source": "《杜工部集》",
  "category": "羁旅乡愁",
  "text": "戍鼓断人行，边秋一雁声。\n露从今夜白，月是故乡明。\n有弟皆分散，无家问死生。\n寄书长不达，况乃未休兵。",
  "translations": [
    [
      "全文译意",
      "戍楼鼓声响起，行人断绝，边塞秋夜传来孤雁鸣叫。今夜正逢白露，月亮还是故乡的最明亮。兄弟离散，家园不存，无法得知彼此生死。寄出的书信常常不能送达，更何况战乱还未停止。"
    ]
  ],
  "background": "本篇选自《杜工部集》，作者为杜甫。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "诗人从边地秋声写到兄弟离散。所谓“月是故乡明”并非客观比较，而是思乡情感对眼前月色的重新赋义。"
},
{
  "id": 25,
  "type": "唐诗",
  "title": "黄鹤楼",
  "author": "崔颢",
  "source": "《全唐诗》",
  "category": "羁旅乡愁",
  "text": "昔人已乘黄鹤去，此地空余黄鹤楼。\n黄鹤一去不复返，白云千载空悠悠。\n晴川历历汉阳树，芳草萋萋鹦鹉洲。\n日暮乡关何处是？烟波江上使人愁。",
  "translations": [
    [
      "全文译意",
      "传说中的仙人已经乘黄鹤离去，这里只剩下黄鹤楼。黄鹤一去不再回来，千百年来只有白云悠悠。晴朗时汉阳的树木清晰可见，鹦鹉洲上芳草茂盛。日暮时故乡在哪里呢？江上烟波使人忧愁。"
    ]
  ],
  "background": "本篇选自《全唐诗》，作者为崔颢。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "前半借传说抒发岁月流逝之感，后半转入眼前景色与乡愁。由历史的悠远落到个人的漂泊，收束自然有力。"
},
{
  "id": 26,
  "type": "唐诗",
  "title": "枫桥夜泊",
  "author": "张继",
  "source": "《全唐诗》",
  "category": "月色清寂",
  "text": "月落乌啼霜满天，\n江枫渔火对愁眠。\n姑苏城外寒山寺，\n夜半钟声到客船。",
  "translations": [
    [
      "全文译意",
      "月亮落下，乌鸦啼叫，寒霜仿佛布满天空。江边枫树与渔船灯火陪伴着愁眠的人。姑苏城外寒山寺的钟声，在半夜传到了客船上。"
    ]
  ],
  "background": "本篇选自《全唐诗》，作者为张继。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "诗中视觉、听觉与触觉交织。钟声穿过夜色抵达客船，使静夜有了纵深，也把旅人的孤独留在读者心中。"
},
{
  "id": 27,
  "type": "唐诗",
  "title": "锦瑟",
  "author": "李商隐",
  "source": "《李义山诗集》",
  "category": "人生感怀",
  "text": "锦瑟无端五十弦，一弦一柱思华年。\n庄生晓梦迷蝴蝶，望帝春心托杜鹃。\n沧海月明珠有泪，蓝田日暖玉生烟。\n此情可待成追忆，只是当时已惘然。",
  "translations": [
    [
      "全文译意",
      "精美的瑟为何有五十根弦？每一弦每一柱都使人追忆青春年华。庄周梦蝶，真假难辨；望帝化为杜鹃，寄托春心。明月照着沧海，鲛人泪化为珍珠；日光照暖蓝田，美玉仿佛升起烟气。这样的情感如今只能追忆，而当时早已怅惘。"
    ]
  ],
  "background": "本篇选自《李义山诗集》，作者为李商隐。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "诗中典故密集，意象朦胧，历来有多种解读。它不以明确叙事取胜，而以梦境、神话和珍贵意象表现难以言说的追忆与失落。"
},
{
  "id": 28,
  "type": "唐诗",
  "title": "登幽州台歌",
  "author": "陈子昂",
  "source": "《陈子昂集》",
  "category": "人生感怀",
  "text": "前不见古人，后不见来者。\n念天地之悠悠，独怆然而涕下。",
  "translations": [
    [
      "全文译意",
      "向前看不见古代贤明之人，向后也看不到能够理解自己的人。想到天地广阔、时间无穷，独自悲伤落泪。"
    ]
  ],
  "background": "本篇选自《陈子昂集》，作者为陈子昂。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "四句形成时间与空间的巨大张力。诗人把个人怀才不遇的孤独放进天地与历史之中，语言极简，情绪却极为深沉。"
},
{
  "id": 29,
  "type": "唐诗",
  "title": "送友人",
  "author": "李白",
  "source": "《李太白全集》",
  "category": "友情相逢",
  "text": "青山横北郭，白水绕东城。\n此地一为别，孤蓬万里征。\n浮云游子意，落日故人情。\n挥手自兹去，萧萧班马鸣。",
  "translations": [
    [
      "全文译意",
      "青山横亘在城北，清澈河水绕过东城。就在这里分别，友人将像孤蓬一样远行万里。浮云象征游子的行踪，落日寄托故人的情意。挥手告别后，离群的马也萧萧长鸣。"
    ]
  ],
  "background": "本篇选自《李太白全集》，作者为李白。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "诗人以青山、白水、浮云和落日铺陈送别场景。结尾不直说悲伤，而借马鸣收束，余韵悠长。"
},
{
  "id": 30,
  "type": "唐诗",
  "title": "独坐敬亭山",
  "author": "李白",
  "source": "《李太白全集》",
  "category": "山水自然",
  "text": "众鸟高飞尽，\n孤云独去闲。\n相看两不厌，\n只有敬亭山。",
  "translations": [
    [
      "全文译意",
      "鸟儿向远处飞去，直到消失；一片孤云悠闲地飘走。诗人与敬亭山相对而望，彼此都不觉得厌倦。"
    ]
  ],
  "background": "本篇选自《李太白全集》，作者为李白。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "诗中人与山互为知己。前两句写万物远去后的空寂，后两句却把山人格化，写出孤独中仍有精神相伴。"
},
{
  "id": 31,
  "type": "唐诗",
  "title": "悯农·其二",
  "author": "李绅",
  "source": "《全唐诗》",
  "category": "人生感怀",
  "text": "锄禾日当午，\n汗滴禾下土。\n谁知盘中餐，\n粒粒皆辛苦。",
  "translations": [
    [
      "全文译意",
      "盛夏正午，农人仍在田里锄草，汗水滴落在禾苗下的泥土中。又有谁知道，碗里的每一粒粮食都凝结着辛勤劳动？"
    ]
  ],
  "background": "本篇选自《全唐诗》，作者为李绅。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "诗歌从具体劳动场景切入，将粮食与汗水联系起来。语言朴素直接，提醒读者珍惜食物、尊重劳动。"
},
{
  "id": 32,
  "type": "宋词",
  "title": "一剪梅·红藕香残玉簟秋",
  "author": "李清照",
  "source": "《漱玉词》",
  "category": "爱情情感",
  "text": "红藕香残玉簟秋。轻解罗裳，独上兰舟。\n云中谁寄锦书来？雁字回时，月满西楼。\n花自飘零水自流。一种相思，两处闲愁。\n此情无计可消除，才下眉头，却上心头。",
  "translations": [
    [
      "全文译意",
      "荷花凋谢，竹席透出秋凉。轻轻解下罗衣，独自登上兰舟。云中会有谁寄来书信？雁阵归来时，月光洒满西楼。花自飘落，水自流淌，同一种相思牵动两地的闲愁。这份情绪无法排遣，刚从眉间退下，又涌上心头。"
    ]
  ],
  "background": "本篇选自《漱玉词》，作者为李清照。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "词作以秋景引出离情。下片从自然流逝写到两地相思，最后用“眉头”与“心头”的转换，表现愁绪挥之不去。"
},
{
  "id": 33,
  "type": "宋词",
  "title": "如梦令·常记溪亭日暮",
  "author": "李清照",
  "source": "《漱玉词》",
  "category": "四时风物",
  "text": "常记溪亭日暮，\n沉醉不知归路。\n兴尽晚回舟，\n误入藕花深处。\n争渡，争渡，\n惊起一滩鸥鹭。",
  "translations": [
    [
      "全文译意",
      "常常记起在溪边亭中游玩直到日暮，沉醉其中，忘了回去的路。游兴尽了，傍晚乘船返回，却误入荷花深处。急着划船，惊起了满滩鸥鹭。"
    ]
  ],
  "background": "本篇选自《漱玉词》，作者为李清照。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "全词像一段鲜活的生活片段。叠句制造急切的节奏，结尾群鸟惊飞，画面忽然灵动起来，显出少女时代的活泼与自在。"
},
{
  "id": 34,
  "type": "宋词",
  "title": "浣溪沙·一曲新词酒一杯",
  "author": "晏殊",
  "source": "《珠玉词》",
  "category": "人生感怀",
  "text": "一曲新词酒一杯，去年天气旧亭台。\n夕阳西下几时回？\n无可奈何花落去，似曾相识燕归来。\n小园香径独徘徊。",
  "translations": [
    [
      "全文译意",
      "听一曲新词，饮一杯美酒，天气与亭台仿佛仍是去年的模样。夕阳西下，何时才能再回来？花儿凋落令人无可奈何，似曾相识的燕子又飞回来了。我独自在飘着花香的小路上徘徊。"
    ]
  ],
  "background": "本篇选自《珠玉词》，作者为晏殊。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "词人从日常宴饮感受到时间流逝。花落与燕归一去一来，既有失去，也有重复出现的熟悉感，构成温柔而深沉的惆怅。"
},
{
  "id": 35,
  "type": "宋词",
  "title": "蝶恋花·伫倚危楼风细细",
  "author": "柳永",
  "source": "《乐章集》",
  "category": "爱情情感",
  "text": "伫倚危楼风细细。望极春愁，黯黯生天际。\n草色烟光残照里，无言谁会凭阑意。\n拟把疏狂图一醉，对酒当歌，强乐还无味。\n衣带渐宽终不悔，为伊消得人憔悴。",
  "translations": [
    [
      "全文译意",
      "久久倚靠高楼栏杆，细风吹拂。望向远方，春愁从天边暗暗升起。夕阳下草色朦胧，无人理解倚栏人的心意。想放纵饮酒求醉，勉强作乐却仍觉得无味。即使日渐消瘦，也不后悔为思念之人憔悴。"
    ]
  ],
  "background": "本篇选自《乐章集》，作者为柳永。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "上片写登楼望远的孤独，下片写试图排遣却无法忘情。末句把相思写成主动选择，情感执着而浓烈。"
},
{
  "id": 36,
  "type": "宋词",
  "title": "苏幕遮·碧云天",
  "author": "范仲淹",
  "source": "《范文正公集》",
  "category": "羁旅乡愁",
  "text": "碧云天，黄叶地，秋色连波，波上寒烟翠。\n山映斜阳天接水，芳草无情，更在斜阳外。\n黯乡魂，追旅思，夜夜除非，好梦留人睡。\n明月楼高休独倚，酒入愁肠，化作相思泪。",
  "translations": [
    [
      "全文译意",
      "碧蓝天空下是黄色大地，秋色连接着江波，水面寒烟呈青绿色。山映着夕阳，天水相接，无情的芳草一直延伸到夕阳之外。思乡之魂黯然，羁旅之愁难消，夜夜只有好梦才能留人入睡。明月之夜不要独自倚楼，酒进入愁肠，也化作相思的泪。"
    ]
  ],
  "background": "本篇选自《范文正公集》，作者为范仲淹。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "上片以浓丽色彩描绘秋日远景，下片转入羁旅乡愁。空间越辽阔，思乡越无边，景与情转换自然。"
},
{
  "id": 37,
  "type": "宋词",
  "title": "江城子·乙卯正月二十日夜记梦",
  "author": "苏轼",
  "source": "《东坡乐府》",
  "category": "爱情情感",
  "text": "十年生死两茫茫，不思量，自难忘。\n千里孤坟，无处话凄凉。\n纵使相逢应不识，尘满面，鬓如霜。\n夜来幽梦忽还乡，小轩窗，正梳妆。\n相顾无言，惟有泪千行。\n料得年年肠断处，明月夜，短松冈。",
  "translations": [
    [
      "全文译意",
      "十年生死相隔，彼此茫然，即使不刻意思念，也难以忘怀。远隔千里的孤坟，无处诉说心中的凄凉。即使相逢，她也可能认不出我，因为我已风尘满面、鬓发如霜。夜里忽然梦回故乡，看见她正在窗前梳妆。两人相对无言，只有泪水不断流下。想来年年令人断肠的地方，就是明月照着的短松冈。"
    ]
  ],
  "background": "本篇选自《东坡乐府》，作者为苏轼。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "这首悼亡词以梦境连接生死两界。没有刻意堆叠悲辞，而以日常梳妆的细节写出亲密记忆，因而格外动人。"
},
{
  "id": 38,
  "type": "宋词",
  "title": "念奴娇·赤壁怀古",
  "author": "苏轼",
  "source": "《东坡乐府》",
  "category": "历史名著",
  "text": "大江东去，浪淘尽，千古风流人物。\n故垒西边，人道是，三国周郎赤壁。\n乱石穿空，惊涛拍岸，卷起千堆雪。\n江山如画，一时多少豪杰。\n遥想公瑾当年，小乔初嫁了，雄姿英发。\n羽扇纶巾，谈笑间，樯橹灰飞烟灭。\n故国神游，多情应笑我，早生华发。\n人生如梦，一尊还酹江月。",
  "translations": [
    [
      "全文译意",
      "长江向东奔流，淘尽千古英雄人物。旧营垒西边，据说就是周瑜大破曹军的赤壁。乱石高耸，惊涛拍岸，浪花卷起如千堆白雪。江山如画，曾经涌现多少豪杰。遥想周瑜年轻时意气风发，谈笑之间便使敌船化为灰烬。如今我神游故地，也该笑自己多情而早生白发。人生如梦，姑且举酒祭奠江月。"
    ]
  ],
  "background": "本篇选自《东坡乐府》，作者为苏轼。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "上片写长江与赤壁的雄奇，下片追怀周瑜并映照自身。历史英雄的青春功业与词人的现实处境形成对照，最终归于旷达而复杂的人生感慨。"
},
{
  "id": 39,
  "type": "宋词",
  "title": "青玉案·元夕",
  "author": "辛弃疾",
  "source": "《稼轩长短句》",
  "category": "四时风物",
  "text": "东风夜放花千树，更吹落，星如雨。\n宝马雕车香满路。\n凤箫声动，玉壶光转，一夜鱼龙舞。\n蛾儿雪柳黄金缕，笑语盈盈暗香去。\n众里寻他千百度，蓦然回首，那人却在，灯火阑珊处。",
  "translations": [
    [
      "全文译意",
      "元宵夜东风吹开如千树繁花般的灯火，又仿佛吹落漫天流星。华丽车马经过，香气满路。乐声悠扬，月光流转，鱼灯龙灯彻夜舞动。盛装女子笑语而过，留下暗香。在人群中寻找那人千百遍，忽然回头，却发现她站在灯火稀疏之处。"
    ]
  ],
  "background": "本篇选自《稼轩长短句》，作者为辛弃疾。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "上片铺写元夕灯市的繁华，下片从人群中寻找写到灯火阑珊处的相逢。结尾的清冷与前文的热闹形成反差，也使“那人”具有多重意味。"
},
{
  "id": 40,
  "type": "宋词",
  "title": "丑奴儿·书博山道中壁",
  "author": "辛弃疾",
  "source": "《稼轩长短句》",
  "category": "人生感怀",
  "text": "少年不识愁滋味，爱上层楼。爱上层楼，为赋新词强说愁。\n而今识尽愁滋味，欲说还休。欲说还休，却道天凉好个秋。",
  "translations": [
    [
      "全文译意",
      "年轻时不懂真正的忧愁，却喜欢登高远望，为写新词勉强说愁。如今经历了许多，尝尽忧愁，想说却又停下。停了又停，最后只说一句：好一个凉爽的秋天。"
    ]
  ],
  "background": "本篇选自《稼轩长短句》，作者为辛弃疾。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "上下片以“少年”与“而今”对照，写出人生阅历改变后情感表达的克制。结尾以天气作答，言外之意比直抒胸臆更深。"
},
{
  "id": 41,
  "type": "先秦诗歌",
  "title": "蒹葭",
  "author": "佚名",
  "source": "《诗经·秦风》",
  "category": "爱情情感",
  "text": "蒹葭苍苍，白露为霜。所谓伊人，在水一方。\n溯洄从之，道阻且长。溯游从之，宛在水中央。\n蒹葭萋萋，白露未晞。所谓伊人，在水之湄。\n溯洄从之，道阻且跻。溯游从之，宛在水中坻。\n蒹葭采采，白露未已。所谓伊人，在水之涘。\n溯洄从之，道阻且右。溯游从之，宛在水中沚。",
  "translations": [
    [
      "全文译意",
      "芦苇苍苍，露水凝成白霜。心中思念的人在河水另一边。逆流寻找，道路艰险又漫长；顺流而下，仿佛她就在水中央。诗歌反复变换时令、地点与追寻方向，伊人始终若即若离。"
    ]
  ],
  "background": "本篇选自《诗经·秦风》，作者为佚名。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "重章叠句构成回环往复的节奏。水、秋露与远方伊人共同营造朦胧意境，既可读作爱情追寻，也可理解为对理想的执着求索。"
},
{
  "id": 42,
  "type": "先秦诗歌",
  "title": "桃夭",
  "author": "佚名",
  "source": "《诗经·周南》",
  "category": "四时风物",
  "text": "桃之夭夭，灼灼其华。\n之子于归，宜其室家。\n桃之夭夭，有蕡其实。\n之子于归，宜其家室。\n桃之夭夭，其叶蓁蓁。\n之子于归，宜其家人。",
  "translations": [
    [
      "全文译意",
      "桃树繁茂，花朵鲜艳。姑娘出嫁，将使家庭和美。桃树繁茂，果实累累；桃叶茂盛，也象征家族兴旺。"
    ]
  ],
  "background": "本篇选自《诗经·周南》，作者为佚名。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "诗歌以桃花、桃实、桃叶的生长变化，祝愿新婚女子生活美满。三章复沓，节奏明快，体现《诗经》民歌的质朴与祝福意味。"
},
{
  "id": 43,
  "type": "先秦诗歌",
  "title": "关雎",
  "author": "佚名",
  "source": "《诗经·周南》",
  "category": "爱情情感",
  "text": "关关雎鸠，在河之洲。\n窈窕淑女，君子好逑。\n参差荇菜，左右流之。\n窈窕淑女，寤寐求之。\n求之不得，寤寐思服。\n悠哉悠哉，辗转反侧。\n参差荇菜，左右采之。\n窈窕淑女，琴瑟友之。\n参差荇菜，左右芼之。\n窈窕淑女，钟鼓乐之。",
  "translations": [
    [
      "全文译意",
      "水鸟在河中沙洲上和鸣，美好的女子是君子的理想伴侣。男子思慕她，日夜思念，求而不得时辗转难眠；后来又想象以琴瑟、钟鼓表达亲近与欢喜。"
    ]
  ],
  "background": "本篇选自《诗经·周南》，作者为佚名。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "诗歌以雎鸠和鸣起兴，将自然和谐与人的情感联系起来。它既写爱慕的热切，也写追求过程中的克制与礼乐秩序。"
},
{
  "id": 44,
  "type": "楚辞",
  "title": "山鬼",
  "author": "屈原",
  "source": "《楚辞·九歌》（节选）",
  "category": "爱情情感",
  "text": "若有人兮山之阿，被薜荔兮带女萝。\n既含睇兮又宜笑，子慕予兮善窈窕。\n乘赤豹兮从文狸，辛夷车兮结桂旗。\n被石兰兮带杜衡，折芳馨兮遗所思。",
  "translations": [
    [
      "全文译意",
      "仿佛有人在山的转弯处，披着薜荔、系着女萝。她含情凝视，笑容美好。乘着赤豹、跟随花纹斑斓的狸猫，以香木装饰车驾，采折芳香花草赠给思念的人。"
    ]
  ],
  "background": "本篇选自《楚辞·九歌》，作者为屈原。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "《山鬼》以山中神灵的形象展开，香草、山林与神异车驾构成瑰丽世界。全篇情绪在期待与失落之间摇曳，具有浓厚的浪漫色彩。"
},
{
  "id": 45,
  "type": "先秦经典",
  "title": "论语·学而",
  "author": "孔子及其弟子",
  "source": "《论语》",
  "category": "人生哲理",
  "text": "学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？",
  "translations": [
    [
      "全文译意",
      "学习之后按时温习，不是很愉快吗？有志同道合的朋友从远方来，不是很快乐吗？别人不了解自己，也不因此怨恨，不就是君子吗？"
    ]
  ],
  "background": "本篇选自《论语》，作者为孔子及其弟子。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "开篇三问从学习、交友到修养，呈现儒家日常实践的三个层面。它强调的不是抽象说教，而是生活中可践行的态度。"
},
{
  "id": 46,
  "type": "先秦经典",
  "title": "论语·子罕",
  "author": "孔子及其弟子",
  "source": "《论语》",
  "category": "人生哲理",
  "text": "岁寒，然后知松柏之后凋也。",
  "translations": [
    [
      "全文译意",
      "到了寒冷的季节，才知道松树和柏树是最后凋谢的。"
    ]
  ],
  "background": "本篇选自《论语》，作者为孔子及其弟子。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "孔子借松柏耐寒的特性比喻人在艰难环境中显现的品格。平顺时不易看出坚守，逆境往往成为检验品性的时刻。"
},
{
  "id": 47,
  "type": "先秦经典",
  "title": "孟子·告子下",
  "author": "孟子",
  "source": "《孟子》",
  "category": "人生哲理",
  "text": "故天将降大任于是人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，曾益其所不能。",
  "translations": [
    [
      "全文译意",
      "上天将要把重大责任交给某个人，往往先使他的内心受困、筋骨劳累、身体饥饿、生活匮乏，并让行动受阻，以此磨炼心志、增强能力。"
    ]
  ],
  "background": "本篇选自《孟子》，作者为孟子。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "这段话强调磨难与成长之间的关系。它不是鼓励盲目忍受困境，而是指出人在压力与挫折中可能获得新的能力与韧性。"
},
{
  "id": 48,
  "type": "古文",
  "title": "桃花源记",
  "author": "陶渊明",
  "source": "《陶渊明集》（节选）",
  "category": "山水自然",
  "text": "晋太元中，武陵人捕鱼为业。缘溪行，忘路之远近。忽逢桃花林，夹岸数百步，中无杂树，芳草鲜美，落英缤纷。",
  "translations": [
    [
      "全文译意",
      "晋太元年间，武陵有个人以捕鱼为生。他沿着溪水划船，忘记了路程远近。忽然遇到一片桃花林，溪流两岸数百步内没有别的树，芳草鲜嫩美丽，落花纷纷。"
    ]
  ],
  "background": "本篇选自《陶渊明集》，作者为陶渊明。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "开篇以偶然发现引出理想世界。桃花林并非单纯的风景，而是现实生活通向另一种秩序的入口。全文寄托了对和平、安定与淳朴生活的向往。"
},
{
  "id": 49,
  "type": "古文",
  "title": "归去来兮辞·并序",
  "author": "陶渊明",
  "source": "《陶渊明集》（节选）",
  "category": "人生哲理",
  "text": "归去来兮，田园将芜胡不归？既自以心为形役，奚惆怅而独悲？悟已往之不谏，知来者之可追。",
  "translations": [
    [
      "全文译意",
      "回去吧，田园将要荒芜，为什么还不归去？既然过去让心灵受形体役使，又何必惆怅悲伤？过去的错误无法挽回，但未来仍来得及把握。"
    ]
  ],
  "background": "本篇选自《陶渊明集》，作者为陶渊明。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "这篇辞赋写辞官归隐的心路历程。它并非简单逃离现实，而是重新确认内心愿望，在自然生活中寻找精神自主。"
},
{
  "id": 50,
  "type": "古文",
  "title": "兰亭集序",
  "author": "王羲之",
  "source": "《晋书·王羲之传》及《兰亭集序》（节选）",
  "category": "人生感怀",
  "text": "永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。群贤毕至，少长咸集。此地有崇山峻岭，茂林修竹，又有清流激湍，映带左右。",
  "translations": [
    [
      "全文译意",
      "永和九年暮春，众多贤士聚集在会稽山阴的兰亭举行修禊活动。这里有高山峻岭、茂密树林和修长竹子，也有清澈湍急的溪流映绕四周。"
    ]
  ],
  "background": "本篇选自《晋书·王羲之传》及《兰亭集序》，作者为王羲之。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "文章先写兰亭雅集的良辰美景与欢聚之乐，继而转向生命短暂、盛事难常的感慨。由一场宴集引出对生死与时间的思考。"
},
{
  "id": 51,
  "type": "古文",
  "title": "滕王阁序",
  "author": "王勃",
  "source": "《王子安集》（节选）",
  "category": "人生感怀",
  "text": "豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。",
  "translations": [
    [
      "全文译意",
      "这里是古代豫章郡，如今成为洪州都府。地域对应翼、轸星宿，地势连接衡山与庐山，胸襟般汇合三江，衣带般环绕五湖。"
    ]
  ],
  "background": "本篇选自《王子安集》，作者为王勃。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "骈文以铺陈和对偶展开空间气势，写出洪州地理形胜与宴会盛况。篇中也有对个人际遇的感慨，使宏阔景象与生命意识相互映照。"
},
{
  "id": 52,
  "type": "古文",
  "title": "前赤壁赋",
  "author": "苏轼",
  "source": "《经进东坡文集事略》（节选）",
  "category": "人生哲理",
  "text": "壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。",
  "translations": [
    [
      "全文译意",
      "壬戌年秋天，七月十六日，苏轼与友人在赤壁下泛舟。清风缓缓吹来，水面平静。于是举酒劝客，吟诵有关明月的诗篇。"
    ]
  ],
  "background": "本篇选自《经进东坡文集事略》，作者为苏轼。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "文章由江上夜游展开，借主客问答讨论人生短暂与天地无穷。苏轼从水月变化中体会到事物的两面，最终获得旷达的精神安顿。"
},
{
  "id": 53,
  "type": "古文",
  "title": "小石潭记",
  "author": "柳宗元",
  "source": "《柳河东集》（节选）",
  "category": "山水自然",
  "text": "从小丘西行百二十步，隔篁竹，闻水声，如鸣珮环，心乐之。伐竹取道，下见小潭，水尤清冽。",
  "translations": [
    [
      "全文译意",
      "从小丘向西走一百二十步，隔着竹林听见水声，像玉佩玉环相碰，心里十分欢喜。砍开竹子开出道路，向下看见一个小潭，潭水格外清澈。"
    ]
  ],
  "background": "本篇选自《柳河东集》，作者为柳宗元。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "文章用声音引路，再以水的清澈、石的形态和游鱼的动态表现小潭幽美。景物越清冷，越映照出作者被贬后的孤寂心境。"
},
{
  "id": 54,
  "type": "古文",
  "title": "爱莲说",
  "author": "周敦颐",
  "source": "《周元公集》（节选）",
  "category": "人生哲理",
  "text": "水陆草木之花，可爱者甚蕃。晋陶渊明独爱菊。自李唐来，世人甚爱牡丹。予独爱莲之出淤泥而不染，濯清涟而不妖。",
  "translations": [
    [
      "全文译意",
      "水上和陆地上的花草树木，值得喜爱的很多。陶渊明偏爱菊花，唐代以来世人喜爱牡丹。我唯独喜爱莲花，因为它从淤泥中生长却不受污染，经过清水洗涤却不显得妖媚。"
    ]
  ],
  "background": "本篇选自《周元公集》，作者为周敦颐。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "文章以菊、牡丹、莲对照，借花喻人。莲的洁净、正直与端庄成为君子人格的象征，表达作者对高洁品格的推崇。"
},
{
  "id": 55,
  "type": "古文",
  "title": "陋室铭",
  "author": "刘禹锡",
  "source": "《刘禹锡集》（节选）",
  "category": "人生哲理",
  "text": "山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青。",
  "translations": [
    [
      "全文译意",
      "山不在于高，有仙人便有名；水不在于深，有蛟龙便显灵。这虽是一间简陋屋室，只因居住者品德高尚，便不觉简陋。苔痕爬上台阶，草色映入帘幕。"
    ]
  ],
  "background": "本篇选自《刘禹锡集》，作者为刘禹锡。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "文章从山水起兴，转而写居室环境与交往生活。作者以“德馨”重新定义居住价值，表达安贫乐道、不慕荣利的志趣。"
},
{
  "id": 56,
  "type": "古文",
  "title": "醉翁亭记",
  "author": "欧阳修",
  "source": "《欧阳文忠公集》（节选）",
  "category": "山水自然",
  "text": "环滁皆山也。其西南诸峰，林壑尤美，望之蔚然而深秀者，琅琊也。山行六七里，渐闻水声潺潺而泻出于两峰之间者，酿泉也。",
  "translations": [
    [
      "全文译意",
      "环绕滁州的都是山。西南方向的山峰与树林山谷尤其秀美，远望树木茂盛、幽深秀丽的地方就是琅琊山。沿山路走六七里，渐渐听见潺潺水声，从两峰之间流出的就是酿泉。"
    ]
  ],
  "background": "本篇选自《欧阳文忠公集》，作者为欧阳修。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "文章以山水游踪为线索，写四时景色、宴游之乐与百姓同乐。所谓“醉翁之意不在酒”，最终落在与民同乐的情怀。"
},
{
  "id": 57,
  "type": "古文",
  "title": "岳阳楼记",
  "author": "范仲淹",
  "source": "《范文正公集》（节选）",
  "category": "家国情怀",
  "text": "庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴，乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上。",
  "translations": [
    [
      "全文译意",
      "庆历四年春，滕子京被贬后担任巴陵郡太守。到了第二年，政事顺利、百姓和乐，各种荒废事业都兴办起来，于是重修岳阳楼，扩大原有规模，并在楼上刻录唐代名家和当代人的诗赋。"
    ]
  ],
  "background": "本篇选自《范文正公集》，作者为范仲淹。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "文章先叙修楼缘起，再由洞庭湖景色引出迁客骚人的悲喜，最后提出超越个人得失的理想。其核心不只是名句，更是士人的公共责任。"
},
{
  "id": 58,
  "type": "古文",
  "title": "记承天寺夜游",
  "author": "苏轼",
  "source": "《东坡志林》（节选）",
  "category": "月色清寂",
  "text": "元丰六年十月十二日夜，解衣欲睡，月色入户，欣然起行。念无与为乐者，遂至承天寺寻张怀民。",
  "translations": [
    [
      "全文译意",
      "元丰六年十月十二日夜，苏轼脱衣准备睡觉，月光照进门来，他高兴地起身出门。想到没有人可以一起赏月，于是到承天寺寻找张怀民。"
    ]
  ],
  "background": "本篇选自《东坡志林》，作者为苏轼。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "短文以一次夜游写出闲适与孤独。月色如水，竹柏影如藻荇，简洁比喻让寻常庭院成为清澈空明的世界。"
},
{
  "id": 59,
  "type": "古文",
  "title": "师说",
  "author": "韩愈",
  "source": "《昌黎先生集》（节选）",
  "category": "人生哲理",
  "text": "古之学者必有师。师者，所以传道受业解惑也。人非生而知之者，孰能无惑？惑而不从师，其为惑也，终不解矣。",
  "translations": [
    [
      "全文译意",
      "古代求学的人一定有老师。老师是用来传授道理、讲授学业、解答疑惑的人。人不是生下来就懂得一切，谁能没有疑惑？有疑惑却不向老师学习，疑惑终究无法解决。"
    ]
  ],
  "background": "本篇选自《昌黎先生集》，作者为韩愈。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "韩愈针对当时轻视师道的风气立论，层层论证从师的重要性。文章不仅讨论教育关系，也强调学问面前不应以年龄、地位论高下。"
},
{
  "id": 60,
  "type": "古文",
  "title": "项脊轩志",
  "author": "归有光",
  "source": "《震川先生集》（节选）",
  "category": "亲情记忆",
  "text": "项脊轩，旧南阁子也。室仅方丈，可容一人居。百年老屋，尘泥渗漉，雨泽下注；每移案，顾视无可置者。",
  "translations": [
    [
      "全文译意",
      "项脊轩是旧日的南阁子，房间只有一丈见方，只能容纳一人居住。百年老屋，灰尘泥土从屋顶漏下，雨水也往下滴；每次移动桌案，环顾四周都没有可以安放的地方。"
    ]
  ],
  "background": "本篇选自《震川先生集》，作者为归有光。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "文章从狭小破旧的书斋写起，逐渐牵出家族往事与亲人记忆。细节克制而深情，日常器物成为承载亲情与时间的媒介。"
},
{
  "id": 61,
  "type": "古文",
  "title": "陈情表",
  "author": "李密",
  "source": "《文选》（节选）",
  "category": "亲情记忆",
  "text": "臣密言：臣以险衅，夙遭闵凶。生孩六月，慈父见背；行年四岁，舅夺母志。祖母刘愍臣孤弱，躬亲抚养。",
  "translations": [
    [
      "全文译意",
      "臣李密陈述：自己命运坎坷，很早就遭遇不幸。出生六个月，父亲便去世；四岁时，母亲改嫁。祖母刘氏怜惜自己孤苦弱小，亲自抚养长大。"
    ]
  ],
  "background": "本篇选自《文选》，作者为李密。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "文章以身世经历为基础，层层说明祖母对自己的养育之恩与自己必须奉养祖母的现实。情理交融，语言恳切，是古代奏表中的名篇。"
},
{
  "id": 62,
  "type": "元曲",
  "title": "天净沙·秋思",
  "author": "马致远",
  "source": "《全元散曲》",
  "category": "羁旅乡愁",
  "text": "枯藤老树昏鸦，\n小桥流水人家，\n古道西风瘦马。\n夕阳西下，\n断肠人在天涯。",
  "translations": [
    [
      "全文译意",
      "枯藤缠绕着老树，黄昏时乌鸦归巢；小桥旁流水潺潺，有人家炊烟升起；荒凉古道上，旅人骑着瘦马，在西风中前行。夕阳西下，漂泊天涯的人肝肠寸断。"
    ]
  ],
  "background": "本篇选自《全元散曲》，作者为马致远。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "曲中几乎全由名词性意象组成，没有繁复叙述，却层层铺出秋日旅途的苍凉。末句点明游子身份，使前面的景物都染上乡愁。"
},
{
  "id": 63,
  "type": "元曲",
  "title": "山坡羊·潼关怀古",
  "author": "张养浩",
  "source": "《全元散曲》",
  "category": "家国情怀",
  "text": "峰峦如聚，波涛如怒，山河表里潼关路。\n望西都，意踌躇。\n伤心秦汉经行处，宫阙万间都做了土。\n兴，百姓苦；亡，百姓苦。",
  "translations": [
    [
      "全文译意",
      "山峰聚拢，黄河波涛汹涌，潼关道路依凭山河险要。遥望长安，思绪起伏。经过秦汉旧地令人伤感，昔日万间宫殿如今都化为泥土。王朝兴起，百姓受苦；王朝灭亡，百姓仍受苦。"
    ]
  ],
  "background": "本篇选自《全元散曲》，作者为张养浩。作品以文字描绘具体的人物、景物或情境，并由此寄托情感与思考。阅读时可留意题目、意象、语气变化以及结尾如何回应开篇。",
  "appreciation": "作品由潼关险要引出历史兴亡，再将目光落在普通百姓身上。末两句高度凝练，揭示战争与权力更迭中百姓承受的苦难。"
}
];

const STORAGE={favorites:"littlePoetryFavorites",history:"littlePoetryHistory",lastDaily:"littlePoetryLastDaily",paper:"littlePoetryPaper",font:"littlePoetryFont",vertical:"littlePoetryVertical"};
const $=id=>document.getElementById(id);
function getStorage(key,fallback=[]){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
function saveStorage(key,value){try{localStorage.setItem(key,JSON.stringify(value))}catch{showToast("浏览器存储不可用")}}
let favorites=getStorage(STORAGE.favorites,[]).map(Number);
let history=getStorage(STORAGE.history,[]).map(Number);
let currentPoem=null,activeCategory="全部",activePage="home";
const categories=["全部","山水自然","人生哲理","离别思念","爱情情感","家国情怀","历史名著","四时风物","月色清寂","羁旅乡愁","友情相逢","亲情记忆"];
const today=new Date();
$("todayDate").textContent=`${today.getFullYear()}.${String(today.getMonth()+1).padStart(2,"0")}.${String(today.getDate()).padStart(2,"0")}`;
const countEl=$("collectionCount");if(countEl)countEl.textContent=`馆藏作品 · ${poems.length} 篇`;
function getPoem(id){return poems.find(p=>p.id===Number(id))}
function showToast(message){const el=$("toast");el.textContent=message;el.classList.add("show");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>el.classList.remove("show"),1800)}
function addHistory(id){history=[Number(id),...history.filter(x=>Number(x)!==Number(id))].slice(0,50);saveStorage(STORAGE.history,history)}
function escapeHTML(value){return String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function poemCard(poem){return `<article class="poem-item" data-id="${poem.id}" tabindex="0" role="button"><h3>${escapeHTML(poem.title)}</h3><p>${escapeHTML(poem.text.replace(/\n/g," "))}</p><small>${escapeHTML(poem.author)} · ${escapeHTML(poem.category)}</small></article>`}
function bindPoemCards(root){root.querySelectorAll(".poem-item").forEach(item=>{const open=()=>selectPoem(item.dataset.id,true);item.addEventListener("click",open);item.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open()}})})}
function dailyPoem(){const day=Math.floor(new Date(today.getFullYear(),today.getMonth(),today.getDate()).getTime()/86400000);return poems[day%poems.length]}
function renderDaily(){const p=dailyPoem();$("dailyContent").innerHTML=`<h2>${escapeHTML(p.text)}</h2><p class="author">—— ${escapeHTML(p.author)} · ${escapeHTML(p.title)}</p><p class="daily-intro">${escapeHTML(p.appreciation.slice(0,68))}……</p>`;$ ("dailyDetailBtn").onclick=()=>selectPoem(p.id,true)}
function selectPoem(id,scroll=false){currentPoem=getPoem(id);if(!currentPoem)return;addHistory(currentPoem.id);renderReadingCard();renderDetail();updateFavoriteButton();if(activePage!=="home"){activePage="home";updateNavigation();renderPageList()}if(scroll){$("reading").scrollIntoView({behavior:"smooth",block:"center"})}}
function randomPoem(){let list=poems.filter(p=>activeCategory==="全部"||p.category===activeCategory);if(!list.length)list=poems;let pool=list.filter(p=>!currentPoem||p.id!==currentPoem.id);const p=(pool.length?pool:list)[Math.floor(Math.random()*(pool.length||list.length))];selectPoem(p.id,false)}
function renderReadingCard(){const p=currentPoem;$("readingCard").innerHTML=`<div class="poem-content"><span class="poem-type">${escapeHTML(p.type)} · ${escapeHTML(p.category)}</span><h2>${escapeHTML(p.text)}</h2><p class="author">—— ${escapeHTML(p.author)}《${escapeHTML(p.title)}》</p><p class="poem-category">${escapeHTML(p.source)}</p></div>`;["favoriteBtn","copyBtn","cardBtn"].forEach(id=>$(id).disabled=false)}
function updateFavoriteButton(){if(!currentPoem)return;const yes=favorites.includes(currentPoem.id);$("favoriteBtn").textContent=yes?"♥ 已收藏":"♡ 收藏"}
function toggleFavorite(){if(!currentPoem)return;const id=currentPoem.id;if(favorites.includes(id)){favorites=favorites.filter(x=>x!==id);showToast("已从收藏中移除")}else{favorites.unshift(id);showToast("已收入收藏")}saveStorage(STORAGE.favorites,favorites);updateFavoriteButton();if(activePage==="favorites")renderPageList()}
async function copyText(text){try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(text)}else{const area=document.createElement("textarea");area.value=text;area.style.position="fixed";area.style.opacity="0";document.body.appendChild(area);area.select();document.execCommand("copy");area.remove()}showToast("内容已复制")}catch{showToast("复制失败，请手动选择文字")}}
function copyPoem(){if(!currentPoem)return;copyText(`${currentPoem.text}\n\n—— ${currentPoem.author}《${currentPoem.title}》\n出处：${currentPoem.source}`)}
function renderDetail(){const p=currentPoem;const lines=p.translations.map(row=>`<div class="translation-line"><strong>${escapeHTML(row[0])}</strong><p>${escapeHTML(row[1])}</p></div>`).join("");$("detailContent").innerHTML=`<h2 class="detail-title">${escapeHTML(p.title)}</h2><p class="detail-author">${escapeHTML(p.author)} · ${escapeHTML(p.source)} · ${escapeHTML(p.type)}</p><div class="detail-block"><h3>一、作品原文</h3><p class="detail-original">${escapeHTML(p.text)}</p></div><div class="detail-block"><h3>二、逐句翻译</h3>${lines}</div><div class="detail-block"><h3>三、创作背景</h3><p>${escapeHTML(p.background)}</p></div><div class="detail-block"><h3>四、文学赏析</h3><p>${escapeHTML(p.appreciation)}</p></div><div class="detail-block"><h3>五、作品信息</h3><p>作者：${escapeHTML(p.author)}</p><p>出处：${escapeHTML(p.source)}</p><p>分类：${escapeHTML(p.category)}</p></div><div class="detail-actions"><button id="detailCopyBtn">复制这篇作品</button><button id="detailCardBtn">制作摘抄卡片</button></div>`;$("detailCopyBtn").onclick=copyPoem;$("detailCardBtn").onclick=createQuoteCard}
function renderCategories(){$("categoryList").innerHTML=categories.map(c=>`<button class="category-chip ${c===activeCategory?"active":""}" data-category="${escapeHTML(c)}">${escapeHTML(c)}</button>`).join("");$("categoryList").querySelectorAll("button").forEach(btn=>btn.addEventListener("click",()=>{activeCategory=btn.dataset.category;renderCategories();renderBrowse()}))}
function renderBrowse(){const list=poems.filter(p=>activeCategory==="全部"||p.category===activeCategory);$("browseGrid").innerHTML=list.map(poemCard).join("");bindPoemCards($("browseGrid"))}
function searchPoems(){const q=$("searchInput").value.trim().toLowerCase();const results=$("searchResults");if(!q){results.innerHTML="";$("searchHint").textContent="试着输入「苏轼」「明月」或一句你记得的诗。";return}const found=poems.filter(p=>[p.title,p.author,p.type,p.source,p.category,p.text,p.background,p.appreciation].join(" ").toLowerCase().includes(q));results.innerHTML=found.length?found.map(poemCard).join(""):`<div class="empty-list">没有找到相关作品。换个关键词试试。</div>`;$("searchHint").textContent=`找到 ${found.length} 篇相关作品`;bindPoemCards(results)}
function updateNavigation(){document.querySelectorAll(".nav-btn").forEach(btn=>btn.classList.toggle("active",btn.dataset.page===activePage))}
function renderPageList(){const home=activePage==="home";$("homeView").hidden=!home;$("pageView").hidden=home;if(home)return;const isFav=activePage==="favorites";const ids=isFav?favorites:history;$("pageTitle").textContent=isFav?"我的收藏":"阅读足迹";$("pageDescription").textContent=isFav?`已收藏 ${ids.length} 篇作品。喜欢的文字会留在这里。`:`最近阅读的 ${ids.length} 篇作品，最多保留 50 条记录。`;const list=ids.map(getPoem).filter(Boolean);$("pageGrid").innerHTML=list.length?list.map(poemCard).join(""):`<div class="empty-list">这里暂时还没有作品。去阅览室拾取一篇喜欢的文字吧。</div>`;bindPoemCards($("pageGrid"))}
document.querySelectorAll(".nav-btn").forEach(btn=>btn.addEventListener("click",()=>{activePage=btn.dataset.page;updateNavigation();renderPageList();window.scrollTo({top:0,behavior:"smooth"})}));
$("randomBtn").addEventListener("click",randomPoem);$("favoriteBtn").addEventListener("click",toggleFavorite);$("copyBtn").addEventListener("click",copyPoem);$("cardBtn").addEventListener("click",createQuoteCard);$("searchInput").addEventListener("input",searchPoems);$("clearSearch").addEventListener("click",()=>{$("searchInput").value="";searchPoems();$("searchInput").focus()});
// 纸张、字体和竖排偏好保存在本机。
function applyPreferences(){const paper=getStorage(STORAGE.paper,"snow"),font=getStorage(STORAGE.font,"song"),vertical=getStorage(STORAGE.vertical,false);document.body.dataset.paper=paper;document.body.dataset.font=font;document.body.classList.toggle("vertical-reading",!!vertical);$("paperSelect").value=paper;$("fontSelect").value=font;$("verticalBtn").setAttribute("aria-pressed",String(!!vertical));$("verticalBtn").textContent=vertical?"切换横排":"竖排阅读"}
$("paperSelect").addEventListener("change",e=>{document.body.dataset.paper=e.target.value;saveStorage(STORAGE.paper,e.target.value)});$("fontSelect").addEventListener("change",e=>{document.body.dataset.font=e.target.value;saveStorage(STORAGE.font,e.target.value)});$("verticalBtn").addEventListener("click",()=>{const on=!document.body.classList.contains("vertical-reading");document.body.classList.toggle("vertical-reading",on);saveStorage(STORAGE.vertical,on);$("verticalBtn").setAttribute("aria-pressed",String(on));$("verticalBtn").textContent=on?"切换横排":"竖排阅读"});
// 用 Web Audio API 本地合成轻柔环境音，不加载第三方音频文件。
let audioContext=null,masterGain=null,musicTimer=null,musicOn=false;function startMusic(){const AudioCtx=window.AudioContext||window.webkitAudioContext;if(!AudioCtx){showToast("当前浏览器不支持背景音乐");return}audioContext=audioContext||new AudioCtx();if(audioContext.state==="suspended")audioContext.resume();masterGain=audioContext.createGain();masterGain.gain.value=.035;masterGain.connect(audioContext.destination);const notes=[220,261.63,329.63,392,329.63,293.66];let index=0;function playNote(){if(!musicOn||!audioContext)return;const osc=audioContext.createOscillator(),gain=audioContext.createGain();osc.type="sine";osc.frequency.value=notes[index%notes.length];gain.gain.setValueAtTime(0,audioContext.currentTime);gain.gain.linearRampToValueAtTime(.45,audioContext.currentTime+.8);gain.gain.exponentialRampToValueAtTime(.001,audioContext.currentTime+3.5);osc.connect(gain);gain.connect(masterGain);osc.start();osc.stop(audioContext.currentTime+3.6);index++}playNote();musicTimer=setInterval(playNote,2600)}function stopMusic(){clearInterval(musicTimer);musicTimer=null;if(masterGain&&audioContext){masterGain.gain.setTargetAtTime(0,audioContext.currentTime,.15)}setTimeout(()=>{if(!musicOn&&masterGain){try{masterGain.disconnect()}catch{}masterGain=null}},700)}$("musicBtn").addEventListener("click",()=>{musicOn=!musicOn;$("musicBtn").setAttribute("aria-pressed",String(musicOn));$("musicBtn").innerHTML=musicOn?'<span class="music-dot"></span>暂停阅读音乐':'<span class="music-dot"></span>开启阅读音乐';if(musicOn)startMusic();else stopMusic()});
// 将当前作品绘制成可保存的 PNG 摘抄卡片。
function createQuoteCard(){if(!currentPoem)return;const p=currentPoem,canvas=document.createElement("canvas"),ctx=canvas.getContext("2d");canvas.width=1200;canvas.height=1500;ctx.fillStyle="#eef0f1";ctx.fillRect(0,0,1200,1500);ctx.strokeStyle="#cbd2d7";ctx.lineWidth=2;ctx.strokeRect(55,55,1090,1390);ctx.strokeStyle="#aab3b8";ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(120,190);ctx.lineTo(1080,190);ctx.stroke();ctx.fillStyle="#78858d";ctx.font="24px Georgia, serif";ctx.textAlign="left";ctx.fillText("LITTLE POETRY  ·  QUOTE CARD",120,145);ctx.fillStyle="#3c454b";ctx.font=`52px ${getComputedStyle(document.body).getPropertyValue("--font") || "serif"}`;ctx.textAlign="center";const lines=p.text.split("\n");const lineHeight=94;let y=560-(lines.length-1)*lineHeight/2;lines.forEach(line=>{ctx.fillText(line,600,y,900);y+=lineHeight});ctx.fillStyle="#737e85";ctx.font=`28px ${getComputedStyle(document.body).getPropertyValue("--font") || "serif"}`;ctx.fillText(`—— ${p.author}《${p.title}》`,600,1050);ctx.font=`21px ${getComputedStyle(document.body).getPropertyValue("--font") || "serif"}`;ctx.fillText(p.source,600,1110);ctx.fillStyle="#9aa3a8";ctx.font="20px Georgia, serif";ctx.fillText("以文字为笺，以岁月为墨。",600,1320);const link=document.createElement("a");link.download=`诗词拾光-${p.title}-摘抄卡.png`;link.href=canvas.toDataURL("image/png");link.click();showToast("摘抄卡片已生成")}
applyPreferences();renderDaily();renderCategories();renderBrowse();updateNavigation();
