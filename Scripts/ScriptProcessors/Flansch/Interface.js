Content.makeFrontInterface(598, 354


);


const var Hide = Content.getComponent("Hide");
const var DryWet = Content.getComponent("DryWet");
const var Hide1 = Content.getComponent("Hide1");
const var Sync = Content.getComponent("Sync");

// Timer-Funktion zur Überwachung
const var ComboMonitor = Engine.createTimerObject();

// Callback-Funktion für den Timer
ComboMonitor.setTimerCallback(function()
{
    // Überprüfung für ComboBox1
    var value1 = DryWet.getValue();
    Hide.set("visible", value1 == 2);  // Hide sichtbar machen, wenn ComboBox1 den Wert 2 hat

    // Überprüfung für ComboBox2
    var value2 = Sync.getValue();
    Hide1.set("visible", value2 >= 2);  // Hide1 sichtbar machen, wenn ComboBox2 den Wert >= 2 hat
});

// Starte den Timer, um alle 100ms zu prüfen
ComboMonitor.startTimer(100);



// Komponenten definieren
const var components = [
    { slider: "Mix", label: "MixValue", transform: (v) => v / 2, decimals: 2 },
    { slider: "Speed", label: "SpeedValue", transform: (v) => Math.pow(v / 100, 1.5) * 20, decimals: 2 },
    { slider: "Depth", label: "DepthValue", transform: (v) => v, decimals: 2 },
    { slider: "Position", label: "PositionValue", transform: (v) => v, decimals: 2 },
    { slider: "Offset", label: "OffsetValue", transform: (v) => v, decimals: 2 },
    { slider: "Feedback", label: "FeedbackValue", transform: (v) => v, decimals: 2 },
    { slider: "Color", label: "ColorValue", transform: (v) => v, decimals: 0 }, // Ohne Dezimalstellen
    { slider: "Spread", label: "SpreadValue", transform: (v) => v, decimals: 2 },
    { slider: "Comp", label: "CompValue", transform: (v) => v, decimals: 2 },
    { slider: "Gain", label: "GainValue", transform: (v) => v, decimals: 2 }
];

// Komponenten abrufen
for (var i = 0; i < components.length; i++) {
    components[i].sliderComponent = Content.getComponent(components[i].slider);
    components[i].labelComponent = Content.getComponent(components[i].label);
}

// Ein einzelner Timer für alle Updates
const var MainMonitor = Engine.createTimerObject();

MainMonitor.setTimerCallback(function()
{
    for (var i = 0; i < components.length; i++) {
        var value = components[i].sliderComponent.getValue();
        var transformedValue = components[i].transform(value);
        var formattedValue = Engine.doubleToString(transformedValue, components[i].decimals);
        components[i].labelComponent.set("text", formattedValue);
    }
});

// Starte den Timer, um alle 100ms die Werte zu aktualisieren
MainMonitor.startTimer(100);


// 1️⃣ Komponenten abrufen
const var SpeedTt = Content.getComponent("SpeedTt");
const var DepthTt = Content.getComponent("DepthTt");
const var PositionTt = Content.getComponent("PositionTt");
const var OffsetTt = Content.getComponent("OffsetTt");
const var FeedbackTt = Content.getComponent("FeedbackTt");
const var ColorTt = Content.getComponent("ColorTt");
const var SpreadTt = Content.getComponent("SpreadTt");
const var CompTt = Content.getComponent("CompTt");
const var GainTt = Content.getComponent("GainTt");
const var MixTt = Content.getComponent("MixTt");



// === Speed Tooltip ===
const var SpeedToolTip = Engine.createBroadcaster({
  "id": "SpeedToolTip",
  "args": ["component", "event"],
  "tags": []
});

// Hänge SpeedToolTip an den Slider "Speed" (Clicks & Hover)
SpeedToolTip.attachToComponentMouseEvents(["Speed"], "Clicks & Hover", "Sender");

// Listener für den Speed Tooltip (SpeedTt)
SpeedToolTip.addComponentPropertyListener(["SpeedTt"], ["visible"], "Listener", function(index, component, event){
    // Zeige SpeedTt nur an, wenn der Slider "Speed" gehoved wird
    return event.hover;
});


// === Depth Tooltip ===
const var DepthToolTip = Engine.createBroadcaster({
  "id": "DepthToolTip",
  "args": ["component", "event"],
  "tags": []
});

// Hänge DepthToolTip an den Slider "Depth" (Clicks & Hover)
DepthToolTip.attachToComponentMouseEvents(["Depth"], "Clicks & Hover", "Sender");

// Listener für den Depth Tooltip (DepthTt)
DepthToolTip.addComponentPropertyListener(["DepthTt"], ["visible"], "Listener", function(index, component, event){
    // Zeige DepthTt nur an, wenn der Slider "Depth" gehoved wird
    return event.hover;
});

// === Position Tooltip ===
const var PositionToolTip = Engine.createBroadcaster({
  "id": "PositionToolTip",
  "args": ["component", "event"],
  "tags": []
});

// Hänge PositionToolTip an den Slider "Position" (Clicks & Hover)
PositionToolTip.attachToComponentMouseEvents(["Position"], "Clicks & Hover", "Sender");

// Listener für den Position Tooltip (PositionTt)
PositionToolTip.addComponentPropertyListener(["PositionTt"], ["visible"], "Listener", function(index, component, event){
    return event.hover;
});

// === Offset Tooltip ===
const var OffsetToolTip = Engine.createBroadcaster({
  "id": "OffsetToolTip",
  "args": ["component", "event"],
  "tags": []
});

// Hänge OffsetToolTip an den Slider "Offset" (Clicks & Hover)
OffsetToolTip.attachToComponentMouseEvents(["Offset"], "Clicks & Hover", "Sender");

// Listener für den Offset Tooltip (OffsetTt)
OffsetToolTip.addComponentPropertyListener(["OffsetTt"], ["visible"], "Listener", function(index, component, event){
    return event.hover;
});

// === Feedback Tooltip ===
const var FeedbackToolTip = Engine.createBroadcaster({
  "id": "FeedbackToolTip",
  "args": ["component", "event"],
  "tags": []
});

// Hänge FeedbackToolTip an den Slider "Feedback" (Clicks & Hover)
FeedbackToolTip.attachToComponentMouseEvents(["Feedback"], "Clicks & Hover", "Sender");

// Listener für den Feedback Tooltip (FeedbackTt)
FeedbackToolTip.addComponentPropertyListener(["FeedbackTt"], ["visible"], "Listener", function(index, component, event){
    return event.hover;
});


// === Color Tooltip ===
const var ColorToolTip = Engine.createBroadcaster({
  "id": "ColorToolTip",
  "args": ["component", "event"],
  "tags": []
});

// Hänge ColorToolTip an den Slider "Color" (Clicks & Hover)
ColorToolTip.attachToComponentMouseEvents(["Color"], "Clicks & Hover", "Sender");

// Listener für den Color Tooltip (ColorTt)
ColorToolTip.addComponentPropertyListener(["ColorTt"], ["visible"], "Listener", function(index, component, event){
    return event.hover;
});


// === Spread Tooltip ===
const var SpreadToolTip = Engine.createBroadcaster({
  "id": "SpreadToolTip",
  "args": ["component", "event"],
  "tags": []
});

// Hänge SpreadToolTip an den Slider "Spread" (Clicks & Hover)
SpreadToolTip.attachToComponentMouseEvents(["Spread"], "Clicks & Hover", "Sender");

// Listener für den Spread Tooltip (SpreadTt)
SpreadToolTip.addComponentPropertyListener(["SpreadTt"], ["visible"], "Listener", function(index, component, event){
    return event.hover;
});


// === Comp Tooltip ===
const var CompToolTip = Engine.createBroadcaster({
  "id": "CompToolTip",
  "args": ["component", "event"],
  "tags": []
});

// Hänge CompToolTip an den Slider "Comp" (Clicks & Hover)
CompToolTip.attachToComponentMouseEvents(["Comp"], "Clicks & Hover", "Sender");

// Listener für den Comp Tooltip (CompTt)
CompToolTip.addComponentPropertyListener(["CompTt"], ["visible"], "Listener", function(index, component, event){
    return event.hover;
});


// === Gain Tooltip ===
const var GainToolTip = Engine.createBroadcaster({
  "id": "GainToolTip",
  "args": ["component", "event"],
  "tags": []
});

// Hänge GainToolTip an den Slider "Gain" (Clicks & Hover)
GainToolTip.attachToComponentMouseEvents(["Gain"], "Clicks & Hover", "Sender");

// Listener für den Gain Tooltip (GainTt)
GainToolTip.addComponentPropertyListener(["GainTt"], ["visible"], "Listener", function(index, component, event){
    return event.hover;
});


// === Mix Tooltip ===
const var MixToolTip = Engine.createBroadcaster({
  "id": "MixToolTip",
  "args": ["component", "event"],
  "tags": []
});

// Hänge MixToolTip an den Slider "Mix" (Clicks & Hover)
MixToolTip.attachToComponentMouseEvents(["Mix"], "Clicks & Hover", "Sender");

// Listener für den Mix Tooltip (MixTt)
MixToolTip.addComponentPropertyListener(["MixTt"], ["visible"], "Listener", function(index, component, event){
    return event.hover;
});




//PRESETBROWSER


reg currentPreset;

const uph = Engine.createUserPresetHandler();

uph.setPostCallback(function(presetFile)
{
    currentPreset = presetFile;
    lblPreset.set("text", presetFile.toString(presetFile.NoExtension));
});

const var fltPresetBrowser = Content.getComponent("fltPresetBrowser");
fltPresetBrowser.showControl(false);

const var btnPresetBrowser = Content.getComponent("btnPresetBrowser");
btnPresetBrowser.setValue(false);
btnPresetBrowser.setControlCallback(onbtnPresetBrowserControl);

inline function onbtnPresetBrowserControl(component, value)
{
    fltPresetBrowser.showControl(value);
}

const var lblPreset = Content.getComponent("lblPreset");
lblPreset.set("text", "No Preset Loaded"); // Standardtext beim Start

function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 