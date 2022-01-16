// books data
var books = [];
var book = {};
var shopCta = 'bestellen';

var imgDir = '../../';
var imgDirList = ['images/boeken/', 'images/artikelen/', 'images/recepten/'];

var aHrefList = ['../pages/', 'javescript;']
var book = {
    title: 'Simply Nigella',
    mbItalicIntro: '"Relaxt, inspirerend en om te watertanden"',
    rBoldIntro: 'Simply Nigella',
    synopsis: 'Looking for recipes that are uncomplicated, relaxed and yet always satisfying? Nigella has the answer. Simply Nigella is the perfect antidote to our busy lives: a calm celebration of food to soothe and uplift, containing 125 recipes to invigorate and inspire. Whatever the occasion, food - in the making and the eating - should always be pleasurable. ',
    imgSrc: imgDirList[0] + 'nigella-simply/simpy-nigella-boek.jpg',
    cta: 'Simply Nigella',
    aHref: aHrefList[0],
    prijs: '&euro;19.99',
    rating: '4'
};
books.push(book);

var book = {
    title: 'Sweet',
    mbItalicIntro: 'In Sweet keert Yotam Ottolenghi terug naar het begon',
    rBoldIntro: 'In de patisserie',
    synopsis: 'Volmaakt luchtig biscuitgebak, op smaak gebracht met kruiden en citrus, een met poedersuiker bestoven, superkruimelig koekje rechtstreeks uit de oven... Er is weinig dat ons zon geluksgevoel kan geven als deze zoete verleidingen.',
    imgSrc: imgDirList[0] + 'nigella-sweet/sweet-voorzijde.jpg',
    cta: 'Sweet',
    aHref: aHrefList[0],
    prijs: '&euro;24.99',
    rating: '5'
};
books.push(book);

var book = {
    title: 'Jamie\'s Superfood',
    mbItalicIntro: 'Super food voor elke dag is het nieuwste kookboek',
    rBoldIntro: 'van Jamie Oliver',
    synopsis: 'Jamie\'s super food voor elke dag is het nieuwste kookboek van Jamie Oliver. Gezond eten en je goed voelen wordt een koud kunstje, met deze recepten voor een healthy en happy leven. Het ultieme boek voor iedereen die een gezonde eet- en leefstijl wil. Word de beste versie jezelf!',
    imgSrc: imgDirList[0] + 'jamies-superfood/jamies-super-food.jpg',
    cta: 'Jamie\'s Superfood',
    aHref: aHrefList[0],
    prijs: '&euro;20.99',
    rating: '5'
};
books.push(book);

var book = {
    title: 'Smokey BBQ',
    mbItalicIntro: 'Het nieuwste en dikste BBQ-boek van Jord Althuizen ooit',
    rBoldIntro: 'Het ultieme BBQ-handboek voor NL en BE',
    synopsis: 'Smokey Goodness Lowlands BBQ, het nieuwste en dikste BBQ-boek van Jord Althuizen ooit, heeft onze eigen Lage Landen als inspiratiebron. Bigger, better en dit keer geheel in onze eigen backyard. Ga mee op een vurige ontdekkingsreis en bijt je vast in de allerbeste kreeft, world-famous lamsvlees en award-winning rundvlees van eigen bodem? Met alle basisinfo over barbecueën en als bonus een ultieme BBQ-guide: de heetste BBQ-restaurants, de vetste BBQ-shops & de beste butchers van Nederland en België op een rij.',
    imgSrc: imgDirList[0] + 'bbq.jpg',
    cta: 'Smokey BBQ',
    aHref: aHrefList[1],
    prijs: '&euro;31.99',
    rating: '3'
};
books.push(book);

var book = {
    title: 'Heerlijke winter',
    mbItalicIntro: 'Hét afslankboek voor de herfst en winter! ',
    rBoldIntro: 'Afvallen met Project Gezond',
    synopsis: 'Al 40.000 stuks verkocht! Hét afslankboek voor de herfst en winter! Het succes van Project Gezond duurt voort. Sinds de lancering van het eerste boek in 2017 hebben al zeker 300.000 mensen profijt gehad van de heerlijke recepten en handige weekmenu’s die Natalia en Walter maken. Met dit boek voegen zij weer een nieuwe dimensie toe aan het afslanken. Namelijk: seizoensproducten! Hoe leuk is het als je ook tijdens het afslanken kunt genieten van al het lekkers dat de herfst en winter te bieden hebben. Denk aan een heerlijke truffelpasta, pompoencake, runderstoof met bier, een vegetarische quiche met brie en spinazie, stevige tomatensoep met rookworst, stamppotten, hachee en een geweldige mandarijn-roomkaastaart met een bodem van kruidnoten.',
    imgSrc: imgDirList[0] + 'heerlijke-winter.jpg',
    cta: 'Heerlijke winter',
    aHref: aHrefList[1],
    prijs: '&euro;29.99',
    rating: '4'
};
books.push(book);

var book = {
    title: 'De groene bakplaat',
    mbItalicIntro: 'De ene helft uit veganistische en voor de andere helft uit vegetarische recepten.',
    rBoldIntro: '75 groenterecepten uit de oven',
    synopsis: 'In \'De groene bakplaat\' staan 75 creatieve en veelzijdige recepten waarmee je eenvoudig de lekkerste veganistische en vegetarische ovengerechten kunt bereiden. Het boek bestaat voor de ene helft uit veganistische en voor de andere helft uit vegetarische recepten. De hoofdstukken zijn ingedeeld op bereidingstijd. Denk aan curry van geroosterde wortel en bonen (30 min.), shakshuka uit de oven (45 min.) of gevulde pompoen met salie en geitenkaas (1 uur). Snijd de groenten, verdeel over de bakplaat, ga ontspannen achterover zitten en laat de oven het werk doen.',
    imgSrc: imgDirList[0] + 'groene-bakplaat.jpg',
    cta: 'De groene bakplaat',
    aHref: aHrefList[1],
    prijs: '&euro;21.50',
    rating: '3'
};
books.push(book);

var book = {
    title: 'Lekker & Simpel',
    mbItalicIntro: 'Met ruim 200 gerechten welke je ook nog eens binnen 20 minuten op tafel',
    rBoldIntro: '200 hoofdgerechten',
    synopsis: 'Laat je inspireren door onze favoriete vegetarische recepten! Lekker en Simpel Vegetarisch met maar liefst 150 vegetarische recepten! Of je nou één keer per week of de hele week vegetarisch wil eten, met dit kookboek kun je vooruit. Van gemakkelijke pasta’s, ovengerechten, soepen, recepten met wraps, eenpansgerechten, salades, en bowls tot heerlijke stoofschotels.',
    imgSrc: imgDirList[0] + 'lekker-simpel.jpg',
    cta: 'Lekker & Simpel',
    aHref: aHrefList[1],
    prijs: '&euro;21.99',
    rating: '5'
};
books.push(book);

var book = {
    title: 'Samen eten',
    mbItalicIntro: 'Een overheerlijke ode aan superlekkere maaltijden om met z’n allen van te genieten',
    rBoldIntro: 'Aan tafel!',
    synopsis: 'Jamie Olivers nieuwste kookboek, \'Samen eten\', is een overheerlijke ode aan superlekkere maaltijden om met z’n allen van te genieten. Met meer dan 120 inspirerende en praktische recepten.',
    imgSrc: imgDirList[0] + 'samen-eten.jpg',
    cta: 'Samen eten',
    aHref: aHrefList[1],
    prijs: '&euro;32.50',
    rating: '5'
};
books.push(book);

var book = {
    title: 'Top',
    mbItalicIntro: 'Recepten die ooit ontwikkeld zijn voor de leden van het Project Gezond afslankprogramma.',
    rBoldIntro: '100 heerlijke recepten die je absoluut wilt proeven',
    synopsis: 'Stel dat je jarenlang elke week nieuwe recepten ontwikkelt. En deze recepten vervolgens gekookt en beoordeeld worden door duizenden mensen. Dan weet je precies van welke recepten men blij wordt toch? Klopt, en dit boek is het resultaat! In ‘TOP’ delen Natalia en Walter van Project Gezond 100 toppers van de afgelopen jaren. Recepten die ooit ontwikkeld zijn voor de leden van het Project Gezond afslankprogramma. ',
    imgSrc: imgDirList[0] + 'top.jpg',
    cta: 'Top',
    aHref: aHrefList[1],
    prijs: '&euro;27.50',
    rating: '5'
};
books.push(book);

var book = {
    title: 'Taart ende Koeck',
    mbItalicIntro: '\'Taart ende Koeck\' is het vegan antwoord op Yvette en Nigella.',
    rBoldIntro: 'Ouderwets lekker bakboek, 100% vegan',
    synopsis: '\'Taart ende Koeck\' is het eerste bakboek van Maartje Borst, het vegan antwoord op Yvette en Nigella. Ouderwets lekkere baksels met simpele, slimme, natuurlijk ingrediënten: 100% vegan, 100% lekker!',
    imgSrc: imgDirList[0] + 'taart-ende-koeck.jpg',
    cta: 'Taart ende Koeck',
    aHref: aHrefList[1],
    prijs: '&euro;29.99',
    rating: '5'
};
books.push(book);
// news data
var newsList = [];
var newsItem = {};

var newsItem = {
    title: 'Welk deel van de koe?',
    synopsis: 'Lees waar de steek, entrecote,ossenhaas en ribeye precies vandaan komen. Elk deel van de koe heeft zijn eigen malsheid en stevigheid. Ontedek welk stuk vlees de slager het liefst voor zichzelf houdt...',
    imgSrc: imgDirList[1] + 'koe/steak-veal.jpeg',
    cta: 'meer over de koe',
    aHref: aHrefList[0]
};
newsList.push(newsItem);

var newsItem = {
    title: 'Zelf sushi maken',
    synopsis: 'Zelf sushi maken is even een werkje en ook het koken van de sushirijst moet je niet onderschatten. Ook de Cuisine redactie gaat regelmatig thuis aan de slag met de vellen nori en schaaltjes sojasaus...',
    imgSrc: imgDirList[1] + 'sushi/sushi-plank.jpg',
    cta: 'meer over sushi',
    aHref: aHrefList[0]
};
newsList.push(newsItem);

var newsItem = {
    title: '5 tips voor duurzaam koken',
    synopsis: 'Duurzaam, gezond en voldoende voedsel voor iedereen zou in 2030 voor iedereen ter wereld beschikbaar moeten zijn. Dat doel is ambitieus, maar niet onhaalbaar. Daarvoor moeten wel grote stappen gemaakt worden: wereldwijd zijn er meer dan 2 miljoen mensen waarvoor gezonde voeding nog niet vanzelfsprekend is. ',
    imgSrc: imgDirList[1] + 'duurzaam-koken.jpg',
    cta: 'duurzaam koken',
    aHref: aHrefList[1]
};
newsList.push(newsItem);

var newsItem = {
    title: 'De wereld rond in eigen keuken',
    synopsis: 'Koken met NEFF-apparatuur is altijd een feestje en precies wat elke culi wil. Dat ondervonden ook Eke, Zweder, Annelien en Mees. Zij mochten ieder een kookvideo opnemen met chef Andy in de NEFF-keuken. In de spotlights stond steeds een klassieker uit de wereldkeuken.',
    imgSrc: imgDirList[1] + 'wereld-rond.jpg',
    cta: 'meer lezen',
    aHref: aHrefList[1]
};
newsList.push(newsItem);

var newsItem = {
    title: 'Havermelk op? Probeer erwtenmelk!',
    synopsis: 'Erwtenmelk? Ja, je leest het goed! De afgelopen weken ontstond er door tekorten bij verschillende leveranciers een run op publieksfavoriet havermelk, waardoor de andere plantaardige melksoorten populairder zijn geworden.',
    imgSrc: imgDirList[1] + 'probeer-erwtenmelk.jpg',
    cta: 'meer over erwtenmelk',
    aHref: aHrefList[1]
};
newsList.push(newsItem);

var newsItem = {
    title: '5 x Leuke foodwalks door heel Nederland',
    synopsis: 'Foodwalks zijn met de huidige coronamaatregelen dé manier om te genieten van wat alle horeca te bieden heeft en locals te supporten, zonder dicht op elkaar te zitten. Je hebt ze inmiddels in alle soorten en maten, van simpeler tot superluxe. We zetten 5 leuke foodwalks op een rij, verspreid door het hele land.',
    imgSrc: imgDirList[1] + 'foodwalks.jpg',
    cta: 'meer over foodwalks',
    aHref: aHrefList[1]
};
newsList.push(newsItem);

var newsItem = {
    title: 'DIY ramenboxen voor thuis',
    synopsis: 'Met deze ramenboxen maak je thuis heel easy Japanse noedelsoep met verse noedels, lang getrokken bouillon en smaakvolle toppings – alles apart verpakt. Hierdoor is de ramen langer houdbaar en kun je de soep zelf thuis nog maken of alleen opwarmen, worden de noedels niet overgaar en blijven crunchy toppings krokant.',
    imgSrc: imgDirList[1] + 'ramenboxen.jpg',
    cta: 'meer over ramenboxen',
    aHref: aHrefList[1]
};
newsList.push(newsItem);

var newsItem = {
    title: 'Deze challenge roept Nederlanders op om een week lang gezond te snoepen',
    synopsis: 'Wekelijks wordt er in Nederland 1.846.199 kilo aan snoep gegeten, dat blijkt uit cijfers van het RIVM. ”Een verandering in ons snoepgedrag is dus nodig”, aldus de initiatiefnemers van de nationale ‘Week van Snoep Goed’. Tijdens deze week wordt aandacht gevraagd voor een gezonder voedingspatroon dat juist in deze coronatijd belangrijker is dan ooit.',
    imgSrc: imgDirList[1] + 'challenge.jpg',
    cta: 'meer over challenge',
    aHref: aHrefList[1]
};
newsList.push(newsItem);

// recipes data
var recipes = [];
var recipe = {};

var recipe = {
    title: 'Chili-kip met scherp-zure ananas',
    foodIcons: '<ul id="foodIcons"><li><i class="iconfont icon-lemon"></i></li><li><i class="iconfont icon-chicken"></i></li><li><i class="iconfont icon-time"><span>90 min</span></i></li></ul>',
    steps: '<ul id="steps"><li>2 kilo kip met bot en vel poten</li><li>110 g lichte basterdsuiker</li><li>120 ml neutrale rijstwijnazijn</li><li>125 g sambal</li><li>60 ml vissaus</li></ul>',
    imgSrc: imgDirList[2] + 'chili-kip.jpg',
    cta: 'Chili kip Maken',
    aHref: aHrefList[1],
    foodType: 'meat',
    cookType: 'steam',
    eatNumber: '3-6'
};
recipes.push(recipe);

var recipe = {
    title: 'Bami Soep',
    foodIcons: '<ul id="foodIcons"><li><i class="iconfont icon-steam"></i></li><li><i class="iconfont icon-fish"></i></li><li><i class="iconfont icon-time"><span>100 min</span></i></li></ul>',
    steps: '<ul id="steps"><li>1 mienestje</li><li>1 bosje Lente ui</li><li>1 bosje Koriander</li><li>1 Chilipeper</li><li>Miso bouillon</li></ul>',
    imgSrc: imgDirList[2] + 'bami-soup.jpg',
    cta: 'Bami Soep Maken',
    aHref: aHrefList[0],
    foodType: 'fish',
    cookType: 'steam',
    eatNumber: '1-4'
};
recipes.push(recipe);

var recipe = {
    title: 'Thaise kip',
    foodIcons: '<ul id="foodIcons"><li><i class="iconfont icon-steam"></i></li><li><i class="iconfont icon-chicken"></i></li><li><i class="iconfont icon-time"><span>30 min</span></i></li></ul>',
    steps: '<ul id="steps"><li>600 gr. kipfilet</li><li>paprika groen/geel/rood</li><li>1 bosje Koriander</li><li>1 zakje cashewnoten</li><li>250 gr. shi-take</li></ul>',
    imgSrc: imgDirList[2] + 'thaise-kip.jpg',
    cta: 'Thaise kip Maken',
    aHref: aHrefList[0],
    foodType: 'meat',
    cookType: 'steam',
    eatNumber: '1-6'
};
recipes.push(recipe);

var recipe = {
    title: 'Tagliatelle',
    foodIcons: '<ul id="foodIcons"><li><i class="iconfont icon-steam"></i></li><li><i class="iconfont icon-plant"></i></li><li><i class="iconfont icon-time"><span>10 min</span></i></li></ul>',
    steps: '<ul id="steps"><li>1 pak tagliatelle</li><li>140 gr. verse spinazie</li><li>2.5 dl melk</li><li>1 bosje sille</li><li>Klaar</li></ul>',
    imgSrc: imgDirList[2] + 'tagliatelle.jpg',
    cta: 'Tagliatelle Maken',
    aHref: aHrefList[0],
    foodType: 'veg',
    cookType: 'steam',
    eatNumber: '1-2'
};
recipes.push(recipe);

var recipe = {
    title: 'Bietenhutspot met pulled oats & uien-tijmjus',
    foodIcons: '<ul id="foodIcons"><li><i class="iconfont icon-vege"></i></li><li><i class="iconfont icon-plant"></i></li><li><i class="iconfont icon-time"><span>30 min</span></i></li></ul>',
    steps: '<ul id="steps"><li>500 g rode uien</li><li>1 kg kruimige aardappels</li><li>500 g gekookte rode bieten</li><li>10 g gedroogde porcini</li><li>200 ml groentebouillon</li></ul>',
    imgSrc: imgDirList[2] + 'bietenhutspot.jpg',
    cta: 'Bietenhutspot Maken',
    aHref: aHrefList[1],
    foodType: 'veg',
    cookType: 'none',
    eatNumber: '1-4'
};
recipes.push(recipe);

var recipe = {
    title: 'Sandwich van walnootbrood met belegen kaas, zoete appel en witlof',
    foodIcons: '<ul id="foodIcons"><li><i class="iconfont icon-cake"></i></li><li><i class="iconfont icon-vege"></i></li><li><i class="iconfont icon-time"><span>30 min</span></i></li></ul>',
    steps: '<ul id="steps"><li>4 plakken Old Amsterdam Belegen</li><li>1 zoete appel gesneden</li><li>1 stronkje witlof</li><li>4 sneden walnootbrood</li><li>2 tl dijonmosterd</li></ul>',
    imgSrc: imgDirList[2] + 'sandwich-van-walnootbrood.jpg',
    cta: 'Sandwich Maken',
    aHref: aHrefList[1],
    foodType: 'veg',
    cookType: 'none',
    eatNumber: '1-2'
};
recipes.push(recipe);

var recipe = {
    title: 'Walnotentaart met gegrild fruit en sinaasappel-brandyroom van Yvette van Boven',
    foodIcons: '<ul id="foodIcons"><li><i class="iconfont icon-cake"></i></li><li><i class="iconfont icon-oven"></i></li><li><i class="iconfont icon-time"><span>30 min</span></i></li></ul>',
    steps: '<ul id="steps"><li>250 g fijne suiker</li><li>90 g boter gesmolten</li><li>8 eieren</li><li>140 g fijngemalen walnoten</li><li>150 g gezeefde bloem</li></ul>',
    imgSrc: imgDirList[2] + 'walnotentaart.jpg',
    cta: 'Walnotentaart Maken',
    aHref: aHrefList[1],
    foodType: 'veg',
    cookType: 'oven',
    eatNumber: '3-5'
};
recipes.push(recipe);



var recipe = {
    title: 'Citroentiramisu met limoncello en lemon curd',
    foodIcons: '<ul id="foodIcons"><li><i class="iconfont icon-lemon"></i></li><li><i class="iconfont icon-cake"></i></li><li><i class="iconfont icon-time"><span>45 min</span></i></li></ul>',
    steps: '<ul id="steps"><li>525 ml slagroom</li><li>3 gelatineblaadjes</li><li>4 eidooiers</li><li>220 g fijne kristalsuiker</li><li>500 g mascarpone</li></ul>',
    imgSrc: imgDirList[2] + 'citroentiramisu.jpg',
    cta: 'Tiramisu Maken',
    aHref: aHrefList[1],
    foodType: 'veg',
    cookType: 'none',
    eatNumber: '3-8'
};
recipes.push(recipe);

var recipe = {
    title: 'Griekse kritharaki (orzo) met aubergine, spinazie en gemarineerde feta',
    foodIcons: '<ul id="foodIcons"><li><i class="iconfont icon-vege"></i></li><li><i class="iconfont icon-plant"></i></li><li><i class="iconfont icon-time"><span>30 min</span></i></li></ul>',
    steps: '<ul id="steps"><li>200 g feta</li><li>5 el olijfolie extra vierge</li><li>1 biocitroen</li><li>250 g orzo </li><li>2 aubergines</li></ul>',
    imgSrc: imgDirList[2] + 'griekse-kritharaki.jpg',
    cta: 'Kritharaki Maken',
    aHref: aHrefList[1],
    foodType: 'veg',
    cookType: 'cook',
    eatNumber: '2-5'
};
recipes.push(recipe);

var recipe = {
    title: 'Japanse kerriesoep met ei en varkensgehakt',
    foodIcons: '<ul id="foodIcons"><li><i class="iconfont icon-egg"></i></li><li><i class="iconfont icon-ham"></i></li><li><i class="iconfont icon-time"><span>30 min</span></i></li></ul>',
    steps: '<ul id="steps"><li>2 l runderbouillon</li><li>100 g boter</li><li>100 g bloem</li><li>4 eieren </li><li>270 g udonnoedels</li></ul>',
    imgSrc: imgDirList[2] + 'japanse-kerriesoep.jpg',
    cta: 'Kerriesoep Maken',
    aHref: aHrefList[1],
    foodType: 'meat',
    cookType: 'cook',
    eatNumber: '1-2'
};
recipes.push(recipe);

var recipe = {
    title: 'Gebraden kip met zeewierpesto uit Van Bovens leftovers',
    foodIcons: '<ul id="foodIcons"><li><i class="iconfont icon-oven"></i></li><li><i class="iconfont icon-chicken"></i></li><li><i class="iconfont icon-time"><span>80 min</span></i></li></ul>',
    steps: '<ul id="steps"><li>30 g gedroogde zeesla wakame</li><li>2 tenen knoflook</li><li>15 g platte peterselie</li><li>4 eieren </li><li>1 kip van goede komaf</li></ul>',
    imgSrc: imgDirList[2] + 'gebraden-kip.jpg',
    cta: 'Gebraden kip Maken',
    aHref: aHrefList[1],
    foodType: 'meat',
    cookType: 'oven',
    eatNumber: '4-8'
};
recipes.push(recipe);

var recipe = {
    title: 'Salade van snijbiet en zwartoogbonen uit Salad Days',
    foodIcons: '<ul id="foodIcons"><li><i class="iconfont icon-lemon"></i></li><li><i class="iconfont icon-vege"></i></li><li><i class="iconfont icon-time"><span>15 min</span></i></li></ul>',
    steps: '<ul id="steps"><li>500 g snijbiet</li><li>50 ml extra vergine olijfolie</li><li>25 g boter</li><li>4 gram eizeezoutvlokken </li><li>zwarte peper</li></ul>',
    imgSrc: imgDirList[2] + 'salade-van-snijbiet.jpg',
    cta: 'Salade Maken',
    aHref: aHrefList[1],
    foodType: 'veg',
    cookType: 'none',
    eatNumber: '1-4'
};
recipes.push(recipe);

var recipe = {
    title: 'Thaise drumsticks',
    foodIcons: '<ul id="foodIcons"><li><i class="iconfont icon-steam"></i></li><li><i class="iconfont icon-chicken"></i></li><li><i class="iconfont icon-time"><span>80 min</span></i></li></ul>',
    steps: '<ul id="steps"><li>8 kip drumsticks</li><li>300 g spitskool</li><li>300 ml kokosmelk</li><li>75 cashewnoten</li><li>1 el Thaise rode currypasta</li></ul>',
    imgSrc: imgDirList[2] + 'drumsticks.jpg',
    cta: 'Salade Maken',
    aHref: aHrefList[1],
    foodType: 'meat',
    cookType: 'steam',
    eatNumber: '3-6'
};
recipes.push(recipe);

// campagne webpage: Nigella's recipes
var nRecipes = [];
var nRecipe = {};

var nRecipe = {
    title: 'Rice Pudding Cake',
    foodIcons: '<ul id="foodIcons"><li><i class="iconfont icon-oven"></i></li><li><i class="iconfont icon-egg"></i></li><li><i class="iconfont icon-time"><span>50 min</span></i></li></ul>',
    steps: '<ul id="steps"><li>150 grams arborio rice</li><li>700 millilitres full fat milk</li><li>75 grams soft unsalted butter</li><li>3 large eggs</li><li>75 grams caster sugar</li></ul>',
    imgSrc: '../../images/campagne/rice-pudding-cake.jpg',
    cta: 'Volledig recept',
    aHref: aHrefList[0],
    foodType: 'veg',
    cookType: 'none',
    eatNumber: '3-8'
};
nRecipes.push(nRecipe);

var nRecipe = {
    title: 'Cauliflower with curry',
    foodIcons: '<ul id="foodIcons"><li><i class="iconfont icon-cook"></i></li><li><i class="iconfont icon-plant"></i></li><li><i class="iconfont icon-time"><span>60min</span></i></li></ul>',
    steps: '<ul id="steps"><li>1 medium cauliflower</li><li>2 spring onions</li><li>75 grams cashew nuts</li><li>1 teaspoon cumin seeds</li><li>seeds from 3 cardamom pods</li></ul>',
    imgSrc: '../../images/campagne/cauliflower-curry.jpg',
    cta: 'Volledig recept',
    aHref: aHrefList[0],
    foodType: 'veg',
    cookType: 'cook',
    eatNumber: '1-4'
};
nRecipes.push(nRecipe);

var nRecipe = {
    title: 'Speedy seafood supper',
    foodIcons: '<ul id="foodIcons"><li><i class="iconfont icon-steam"></i></li><li><i class="iconfont icon-fish"></i></li><li><i class="iconfont icon-time"><span>10 min</span></i></li></ul>',
    steps: '<ul id="steps"><li>250 ml freshly boiled water</li><li>4 spoons garlic infused olive oil</li><li>6 spring onions</li><li>400 gr. frozen mixed seafood</li><li>125 ml dry white vermouth</li></ul>',
    imgSrc: '../../images/campagne/seafood.jpg',
    cta: 'Volledig recept',
    aHref: aHrefList[0],
    foodType: 'fish',
    cookType: 'steam',
    eatNumber: '3-6'
};
nRecipes.push(nRecipe);