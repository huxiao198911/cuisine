(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.biefstuk1 = function() {
	this.initialize(img.biefstuk1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,128);


(lib.Bitmap15 = function() {
	this.initialize(img.Bitmap15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,110);


(lib.Bitmap18 = function() {
	this.initialize(img.Bitmap18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.Bitmap20 = function() {
	this.initialize(img.Bitmap20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.Bitmap21 = function() {
	this.initialize(img.Bitmap21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.Bitmap22 = function() {
	this.initialize(img.Bitmap22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.dekoebody = function() {
	this.initialize(img.dekoebody);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,614,422);


(lib.dekoe = function() {
	this.initialize(img.dekoe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,422);


(lib.ossehaas1 = function() {
	this.initialize(img.ossehaas1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,42);


(lib.ribeye1 = function() {
	this.initialize(img.ribeye1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,68);


(lib.sukade1 = function() {
	this.initialize(img.sukade1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,92);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.sukade_txt_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Bij de slager liggen ze meestal voorgesneden in de koelvitrine: sukadelappen. Wie kent ze niet? Lekker ouderwets…langzaam garen, blaadje laurier erbij..genieten! Sukade kan ook in zijn geheel gestoofd worden en aan tafel worden getrancheerd. Een festijn! Het vlees heeft een prachtige draad en de zeen wordt door slow cooking lekker mals.\nLang gegaarde sukade is botermals.", "normal 500 16px 'Raleway'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 676;
	this.text.parent = this;
	this.text.setTransform(340.05,271.25);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}

	this.text_1 = new cjs.Text("Sukade wordt gesneden uit de schouder van het rund", "normal 700 24px 'Raleway'", "#D98A3F");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 35;
	this.text_1.lineWidth = 508;
	this.text_1.parent = this;
	this.text_1.setTransform(340.05,196.15);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("Sukade", "normal 700 32px 'Raleway'", "#418C9F");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 45;
	this.text_2.lineWidth = 160;
	this.text_2.parent = this;
	this.text_2.setTransform(340.05,2);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text_2);
	}

	this.instance = new lib.Bitmap18();
	this.instance.setTransform(276.05,57.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sukade_txt_mc, new cjs.Rectangle(0,0,680.2,392.3), null);


(lib.ribeye_txt_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Het bot is lang en vrij breed. Als men dat bot eraan laat zitten krijgt men hele hoge ribeyes. De meeste Nederlandse en Belgische consumenten houden van iets minder hoog gesneden vlees. Daarom wordt het bot meestal verwijderd. Alleen in bepaalde ribstukken en in de imposante specialty cut “Tomahawk” is het bot nog te zien. Deze specialty cut noemt men ook wel cowboy cut of cowboy steak.", "normal 500 16px 'Raleway'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 684;
	this.text.parent = this;
	this.text.setTransform(344.15,270.05);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}

	this.text_1 = new cjs.Text("Ribeye, wordt gesneden uit de rib van het rund?", "normal 700 24px 'Raleway'", "#D98A3F");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 35;
	this.text_1.lineWidth = 532;
	this.text_1.parent = this;
	this.text_1.setTransform(344.15,199.95);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("Ribeye", "normal 700 32px 'Raleway'", "#418C9F");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 45;
	this.text_2.lineWidth = 148;
	this.text_2.parent = this;
	this.text_2.setTransform(344.15,2);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text_2);
	}

	this.instance = new lib.Bitmap20();
	this.instance.setTransform(280.15,59.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ribeye_txt_mc, new cjs.Rectangle(0,0,688.4,433.2), null);


(lib.ossehaas_txt_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Ossenhaas, ook wel tournedos, biefstuk van de haas, filet, tenderloin genaamd. Het heeft geen bot. Er is nogal wat verwarring over “gewone” biefstuk en ossenhaas. Toch is het simpel: een koe is een dier, niet elk dier een koe. Zo ook de ossenhaas: elke ossenhaas is biefstuk, lang niet elke biefstuk is ossenhaas. De ossenhaas is een vrij klein stuk in de koe, en in elk beestje zitten er maar 2 (links en rechts van de wervelkolom). Het is uitermate zacht vlees en daarom erg geliefd. Schaars en geliefd, iedere econoom weet het….dat drijft de prijs op.", "normal 500 16px 'Raleway'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 680;
	this.text.parent = this;
	this.text.setTransform(341.9,270.55);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}

	this.text_1 = new cjs.Text("Ossehaas wordt gesneden uit de lende van het rund. ", "normal 700 24px 'Raleway'", "#D98A3F");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 35;
	this.text_1.lineWidth = 476;
	this.text_1.parent = this;
	this.text_1.setTransform(341.9,199.2);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("Ossenhaas", "normal 700 32px 'Raleway'", "#418C9F");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 45;
	this.text_2.lineWidth = 178;
	this.text_2.parent = this;
	this.text_2.setTransform(341.9,2);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text_2);
	}

	this.instance = new lib.Bitmap22();
	this.instance.setTransform(277.9,57.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ossehaas_txt_mc, new cjs.Rectangle(0,0,683.9,437.2), null);


(lib.koe_txt_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Klik op bovenstaande illustratie om te zien waar de biefstuk, ossenhaas, ribeye en sukade precies vandaan komen. Elk deel van de koe heeft zijn eigen malsheid en stevigheid. Er zijn natuurlijk verschillende onderdelen van de koe. Hoe zit dit nou precies? Zo hoef je je nooit meer af te vragen welk stukje van zo’n prachtig beest er voor je ligt.", "normal 500 16px 'Raleway'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 668;
	this.text.parent = this;
	this.text.setTransform(432.4,249.5);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}

	this.text_1 = new cjs.Text("Welk deel van de koe?", "normal 700 24px 'Raleway'", "#D98A3F");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 35;
	this.text_1.lineWidth = 348;
	this.text_1.parent = this;
	this.text_1.setTransform(432.4,198.1);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text_1);
	}

	this.instance = new lib.Bitmap15();
	this.instance.setTransform(379.4,66.1);

	this.text_2 = new cjs.Text("De Koe", "normal 700 32px 'Raleway'", "#418C9F");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 45;
	this.text_2.lineWidth = 861;
	this.text_2.parent = this;
	this.text_2.setTransform(432.4,2);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text_2);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.koe_txt_mc, new cjs.Rectangle(0,0,864.8,354.8), null);


(lib.koe_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.dekoe();
	this.instance.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.koe_mc, new cjs.Rectangle(0,0,1400,844), null);


(lib.btn_sukade = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sukade1();
	this.instance.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,204,184);


(lib.btn_ribeye = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ribeye1();
	this.instance.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,332,136);


(lib.btn_ossehaas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ossehaas1();
	this.instance.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244,84);


(lib.btn_body = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.dekoebody();
	this.instance.setTransform(0,0,1.5765,1.3828);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,968,583.6);


(lib.btn_biefstuk = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.biefstuk1();
	this.instance.setTransform(0,0,2,2.0004);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,256.1);


(lib.briefstuk_txt_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Sommige slagers gebruiken ook wel eens het spierstuk. In die bovenbil zitten een grote spier en een iets kleinere, de kogel. U raadt het al: uit die kogel komt de kogelbiefstuk. Een bijzondere cut van de biefstuk is de corazon de cuadril, erg populair in Zuid-Amerika. Deze wordt gesneden van de dikke lende. Men noemt de tournedos (ossenhaas) ook wel biefstuk: biefstuk van de haas. Die zit in de rug van het rund. Ook hoor je vlees van de dikke lende, wij hebben het hier over “gewone” biefstuk.", "normal 500 16px 'Raleway'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 670;
	this.text.parent = this;
	this.text.setTransform(337.15,270.55);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}

	this.text_1 = new cjs.Text("Biefstuk wordt gesneden uit de bovenbil van het rund. ", "normal 700 24px 'Raleway'", "#D98A3F");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 35;
	this.text_1.lineWidth = 484;
	this.text_1.parent = this;
	this.text_1.setTransform(337.15,195.95);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("Biefstuk", "normal 700 32px 'Raleway'", "#418C9F");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 45;
	this.text_2.lineWidth = 208;
	this.text_2.parent = this;
	this.text_2.setTransform(337.15,2);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text_2);
	}

	this.instance = new lib.Bitmap21();
	this.instance.setTransform(273.15,57.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.briefstuk_txt_mc, new cjs.Rectangle(0,0,674.4,437.2), null);


// stage content:
(lib.koe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var root = this;
		
		root.koe_txt_mc.alpha=1;
		
		root.btn_body.on("click", function(){
			
			root.btn_sukade.alpha=0.1;
			root.btn_biefstuk.alpha=0.1;
			root.btn_ossehaas.alpha=0.1;
			root.btn_ribeye.alpha=0.1;
			
			root.sukade_txt_mc.alpha=0.01;
			root.ribeye_txt_mc.alpha=0.01;
			root.ossehaas_txt_mc.alpha=0.01;
			root.biefstuk_txt_mc.alpha=0.01;
			
			root.koe_txt_mc.alpha=1;
			
		});
			
		root.btn_sukade.on("click", function(){
			
			root.btn_biefstuk.alpha=0.1;
			root.btn_ossehaas.alpha=0.1;
			root.btn_ribeye.alpha=0.1;
			
			gsap.to(root.btn_sukade,{
				duration:0.5,
				alpha:1
			});
			
			root.koe_txt_mc.alpha=0.01;
			root.ribeye_txt_mc.alpha=0.01;
			root.ossehaas_txt_mc.alpha=0.01;
			root.biefstuk_txt_mc.alpha=0.01;
			
			root.sukade_txt_mc.alpha=1;
			
		});
		
		
		root.btn_biefstuk.on("click", function(){
			root.btn_sukade.alpha=0.1;
			root.btn_ossehaas.alpha=0.1;
			root.btn_ribeye.alpha=0.1;
			
			gsap.to(root.btn_biefstuk,{
				duration:0.5,
				alpha:1
			});
			root.koe_txt_mc.alpha=0.01;
			root.sukade_txt_mc.alpha=0.01;
			root.ribeye_txt_mc.alpha=0.01;
			root.ossehaas_txt_mc.alpha=0.01;
			root.biefstuk_txt_mc.alpha=1;
			
		});
		
		
		root.btn_ossehaas.on("click", function(){
			root.btn_sukade.alpha=0.1;
			root.btn_biefstuk.alpha=0.1;
			root.btn_ribeye.alpha=0.1;
			
			
			gsap.to(root.btn_ossehaas,{
				duration:0.5,
				alpha:1
			});
			root.koe_txt_mc.alpha=0.01;
			root.biefstuk_txt_mc.alpha=0.01;
			root.sukade_txt_mc.alpha=0.01;
			root.ribeye_txt_mc.alpha=0.01;
			root.ossehaas_txt_mc.alpha=1;
		});
		
		
		root.btn_ribeye.on("click", function(){	
			root.btn_sukade.alpha=0.1;
			root.btn_biefstuk.alpha=0.1;
			root.btn_ossehaas.alpha=0.1;
		
			
			gsap.to(root.btn_ribeye,{
				duration:0.5,
				alpha:1
			});
			
			root.koe_txt_mc.alpha=0.01;
			root.biefstuk_txt_mc.alpha=0.01;
			root.ossehaas_txt_mc.alpha=0.01;
			root.sukade_txt_mc.alpha=0.01;
			
			root.ribeye_txt_mc.alpha=1;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// ossehaas_txt_mc
	this.ossehaas_txt_mc = new lib.ossehaas_txt_mc();
	this.ossehaas_txt_mc.name = "ossehaas_txt_mc";
	this.ossehaas_txt_mc.setTransform(700.05,925.25,1.5692,1.5692,0,0,0,341.9,218.6);
	this.ossehaas_txt_mc.alpha = 0.0195;

	this.timeline.addTween(cjs.Tween.get(this.ossehaas_txt_mc).wait(1));

	// btn_ossehaas
	this.btn_ossehaas = new lib.btn_ossehaas();
	this.btn_ossehaas.name = "btn_ossehaas";
	this.btn_ossehaas.setTransform(415.75,150.2,0.6914,0.6914,0,0,0,0.2,0.1);
	this.btn_ossehaas.alpha = 0.0195;
	new cjs.ButtonHelper(this.btn_ossehaas, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_ossehaas).wait(1));

	// biefstuk_txt_mc
	this.biefstuk_txt_mc = new lib.briefstuk_txt_mc();
	this.biefstuk_txt_mc.name = "biefstuk_txt_mc";
	this.biefstuk_txt_mc.setTransform(700.05,925.25,1.5692,1.5692,0,0,0,337.2,218.6);
	this.biefstuk_txt_mc.alpha = 0.0195;

	this.timeline.addTween(cjs.Tween.get(this.biefstuk_txt_mc).wait(1));

	// btn_biefstuk
	this.btn_biefstuk = new lib.btn_biefstuk();
	this.btn_biefstuk.name = "btn_biefstuk";
	this.btn_biefstuk.setTransform(365.4,106.5,0.6914,0.6914,0,0,0,0.1,-0.1);
	this.btn_biefstuk.alpha = 0.0195;
	new cjs.ButtonHelper(this.btn_biefstuk, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_biefstuk).wait(1));

	// ribeye_txt_mc
	this.ribeye_txt_mc = new lib.ribeye_txt_mc();
	this.ribeye_txt_mc.name = "ribeye_txt_mc";
	this.ribeye_txt_mc.setTransform(700.05,919,1.5692,1.5692,0,0,0,344.2,216.6);
	this.ribeye_txt_mc.alpha = 0.0195;

	this.timeline.addTween(cjs.Tween.get(this.ribeye_txt_mc).wait(1));

	// btn_ribeye
	this.btn_ribeye = new lib.btn_ribeye();
	this.btn_ribeye.name = "btn_ribeye";
	this.btn_ribeye.setTransform(510.55,114.2,0.6914,0.6914,0,0,0,0.3,0.1);
	this.btn_ribeye.alpha = 0.0391;
	new cjs.ButtonHelper(this.btn_ribeye, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_ribeye).wait(1));

	// sukade_txt_mc
	this.sukade_txt_mc = new lib.sukade_txt_mc();
	this.sukade_txt_mc.name = "sukade_txt_mc";
	this.sukade_txt_mc.setTransform(700.05,891.4,1.5692,1.5692,0,0,0,340.1,196.2);
	this.sukade_txt_mc.alpha = 0.0195;

	this.timeline.addTween(cjs.Tween.get(this.sukade_txt_mc).wait(1));

	// btn_sukade
	this.btn_sukade = new lib.btn_sukade();
	this.btn_sukade.name = "btn_sukade";
	this.btn_sukade.setTransform(754.8,252.25,0.6914,0.6914,0,0,0,0.2,0.2);
	this.btn_sukade.alpha = 0.0195;
	new cjs.ButtonHelper(this.btn_sukade, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_sukade).wait(1));

	// koe_txt_mc
	this.koe_txt_mc = new lib.koe_txt_mc();
	this.koe_txt_mc.name = "koe_txt_mc";
	this.koe_txt_mc.setTransform(700,862.05,1.5692,1.5692,0,0,0,432.4,177.5);

	this.timeline.addTween(cjs.Tween.get(this.koe_txt_mc).wait(1));

	// koe_mc
	this.instance = new lib.koe_mc();
	this.instance.setTransform(700,291.7,0.6914,0.6914,0,0,0,700.1,421.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// btn_body
	this.btn_body = new lib.btn_body();
	this.btn_body.name = "btn_body";
	this.btn_body.setTransform(700,291.8,1,1,0,0,0,484,291.8);
	new cjs.ButtonHelper(this.btn_body, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_body).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(721.5,642,657,626.2);
// library properties:
lib.properties = {
	id: '773C1B3F65D0B2478380AB4BA7B23BE2',
	width: 1400,
	height: 1284,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/biefstuk1.png", id:"biefstuk1"},
		{src:"images/Bitmap15.png", id:"Bitmap15"},
		{src:"images/Bitmap18.png", id:"Bitmap18"},
		{src:"images/Bitmap20.png", id:"Bitmap20"},
		{src:"images/Bitmap21.png", id:"Bitmap21"},
		{src:"images/Bitmap22.png", id:"Bitmap22"},
		{src:"images/dekoebody.png", id:"dekoebody"},
		{src:"images/dekoe.png", id:"dekoe"},
		{src:"images/ossehaas1.png", id:"ossehaas1"},
		{src:"images/ribeye1.png", id:"ribeye1"},
		{src:"images/sukade1.png", id:"sukade1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['773C1B3F65D0B2478380AB4BA7B23BE2'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;