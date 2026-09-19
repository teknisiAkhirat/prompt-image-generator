export const CATEGORIES=["Akidah","Bahasa Arab","Fiqih","Tajwid","Tahfidz","Al-Qur'an & Hadis"] as const;export type Category=typeof CATEGORIES[number];
export const THEMES=["Mobil Balap & Truk Konstruksi","Pesawat Terbang & Jet","Kereta Api Cepat & Rel","Blok Kayu Edukasi & Meja Belajar","Pemandangan Alam & Arsitektur Masjid Minimalis"] as const;export type Theme=typeof THEMES[number];
export const STYLES=["3D Cute Isometric Clay","Flat Vector Infographic","Clean LEGO Style Bricks"] as const;export type Style=typeof STYLES[number];
export const MOODS=["Cerah Ceria","Lembut Pastel","Minimalis Islami"] as const;export type Mood=typeof MOODS[number];
export const FORBIDDEN=["human","humans","person","people","man","woman","men","women","boy","girl","child","children","kid","kids","face","faces","eyes","hand","hands","animal","animals","bird","birds","insect","insects","fish","living creature","living creatures","character","characters","mascot","mascots","statue","statues","figurine","figurines","doll","dolls","mannequin","silhouette","silhouettes","angel","angels","demon","demons","cross","crosses","om","idol","idols"] as const;
export const NEGATIVE=[...FORBIDDEN,"anthropomorphic object","anthropomorphic objects","pareidolia","human-like shadow","human-like silhouette","religious text errors","misspelled Arabic","garbled Arabic","fake Arabic","watermark","blurry","low quality","distorted shapes","cluttered background","commercial styling","airport","garage","railway station","platform"].join(", ");
type ThemeVocabulary=[string,string];
const DATA:Record<Theme,ThemeVocabulary>={
"Mobil Balap & Truk Konstruksi":["plain colorful toy race cars and construction trucks as neutral visual units","simple clean bases or surfaces only when needed; do not force a road, garage, racetrack, or construction site"],
"Pesawat Terbang & Jet":["plain toy passenger airplanes and sleek jets as neutral visual units","simple clean bases or open space only when needed; do not force an airport, runway, terminal, hangar, or airfield"],
"Kereta Api Cepat & Rel":["plain toy high-speed trains and simple railway components as neutral visual units","simple clean linear bases only when useful; do not force a station, platform, rail yard, or railway setting"],
"Blok Kayu Edukasi & Meja Belajar":["plain wooden educational blocks and simple study objects as neutral visual units","a clean neutral surface only when useful; do not force a classroom, school, or desk scene"],
"Pemandangan Alam & Arsitektur Masjid Minimalis":["minimalist mosque architecture, geometric architectural elements, and natural landscape elements as optional visual vocabulary","simple uncluttered architectural or natural space only when it directly supports the composition; do not force a mosque scene when architecture is not needed"]};
export const TEMPLATES=[{id:"imam",label:"Hadits Urutan Imam Salat",lesson:"Hadits tentang urutan imam salat. Tempelkan redaksi Arab dan terjemahan lengkap dari sumber yang telah diverifikasi.",category:"Fiqih" as Category,theme:"Mobil Balap & Truk Konstruksi" as Theme},{id:"rukun",label:"Rukun Islam",lesson:"Lima Rukun Islam secara berurutan: syahadat, salat, zakat, puasa Ramadan, dan haji bagi yang mampu.",category:"Akidah" as Category,theme:"Blok Kayu Edukasi & Meja Belajar" as Theme},{id:"makan",label:"Adab Makan",lesson:"Adab makan: membaca bismillah, makan dengan tangan kanan, makan yang terdekat, tidak berlebihan, dan mengucap hamdalah setelah selesai.",category:"Fiqih" as Category,theme:"Kereta Api Cepat & Rel" as Theme}];
export function sanitizeLesson(value:string){return value.replace(/\s+/g," ").trim()}
export function validateInput(lesson:string){return lesson.trim()?{ok:true as const}:{ok:false as const,message:"Materi pelajaran belum diisi. Tulis atau tempel materi yang sudah diverifikasi terlebih dahulu."}}
const conceptFor=(category:Category)=>category==="Akidah"?"foundational Islamic beliefs and their sourced educational explanation":category==="Bahasa Arab"?"Arabic vocabulary, grammar, and language concepts presented clearly":category==="Fiqih"?"Islamic rulings and practical worship concepts presented from the provided source":category==="Tajwid"?"Qur'an recitation rules and letter/sound relationships presented clearly":category==="Tahfidz"?"Qur'an memorization concepts, sequence, repetition, and organized study":"Qur'an and hadith knowledge presented faithfully from the supplied source";
const styleFor=(style:Style)=>style==="3D Cute Isometric Clay"?"cute 3D isometric clay style":style==="Flat Vector Infographic"?"flat vector infographic style":"clean LEGO-style brick diorama";
const buildPreImage=(i:{lesson:string;category:Category;theme:Theme;style:Style;mood:Mood})=>{
const lesson=sanitizeLesson(i.lesson),v=DATA[i.theme],style=styleFor(i.style);
return `Create a PRE-IMAGE PLANNING PROMPT for an external AI image-prompt generator.

SOURCE MATERIAL (AUTHORITATIVE USER INPUT):
"""
${lesson}
"""

TASK:
Analyze the complete source material and determine how many separate educational images are genuinely needed from the material's length, structure, sentence boundaries, topic changes, and context. Do NOT force a fixed number of images. Split only at natural semantic boundaries so each image remains readable, coherent, and faithful to the source.

CRITICAL CONTENT INTEGRITY:
- Treat the supplied source material as authoritative input, not as something to rewrite.
- Preserve all source content required for faithful coverage across the resulting image prompts.
- Never invent, fabricate, paraphrase, summarize, reorder, or silently omit religious source text.
- If Arabic matn and an Indonesian translation are supplied, keep them paired in the corresponding source segment.
- For hadith, Qur'an, du'a, dhikr, or scholar quotations, do not invent missing wording.
- Exact sacred typography must be handled externally/manually; image prompts should reserve clean typography space and must never ask the image model to invent Arabic or long religious text.

CORE VISUAL PIPELINE:
SOURCE MATERIAL → CONTENT/STRUCTURE ANALYSIS → PEDAGOGICAL RELATIONSHIP → VISUAL METAPHOR → SELECTED THEME VOCABULARY → COMPOSITION → SALAF VISUAL GUARDRAILS.

THEME IS A VISUAL VOCABULARY, NOT THE SUBJECT:
- The selected theme supplies object/material vocabulary only. It does NOT define the semantic subject, story setting, or scene.
- First determine what the lesson is teaching and what structural relationship the segment contains. Only then choose how the selected theme's inanimate objects can express that relationship.
- Never turn a lesson into an airport, runway, garage, racetrack, railway station, classroom, school, or other literal theme setting merely because the selected theme contains airplanes, cars, trains, blocks, or architecture.
- Do not repeatedly fill the frame with the same theme object when it does not communicate the lesson.
- Use the theme as a visual language, not as decorative filler.
- Current theme vocabulary: ${v[0]}.
- Optional setting guidance: ${v[1]}.
- If the theme conflicts with clear source meaning, preserve the source meaning and use the theme minimally.

PEDAGOGICAL VISUAL TRANSLATION:
Before writing each image prompt, identify the dominant structural relationship actually present in that source segment. Use only relationships supported by the source, such as:
- comparison → visibly comparable groups or paired structures;
- agreement/consensus → aligned or uniform structures;
- disagreement/khilaf → clearly distinct branches/groups without implying unsupported moral judgment;
- sequence/order → ordered progression;
- division → separated sections;
- grouping/category → distinct clusters;
- repetition → repeated visual pattern;
- cause → effect → directional or spatial relationship showing the sourced relation;
- progression → staged movement from one state to another;
- branching/options → multiple distinct paths or structures;
- central point → a clear focal structure with supporting elements;
- multiple named items → distinct visual units corresponding to those items.
Do NOT invent numerical counts unless the source itself supplies the count or the count is strictly necessary to represent a stated structure.
Do NOT use visual metaphors to assign religious authority, holiness, truth, superiority, reward, punishment, or doctrinal status unless that meaning is explicitly present in the source. A visual metaphor represents structure; it is not a new interpretation.

METAPHOR-FIRST COMPOSITION:
- Use 1–3 strong visual relationships that directly communicate the source segment.
- Object arrangement carries meaning; object identity alone does not.
- Prefer meaningful grouping, spacing, alignment, contrast, progression, branching, or correspondence over a literal themed environment.
- Avoid decorative filler and repetitive rows of identical objects.
- Do not force runway lanes, roads, tracks, platforms, desks, classrooms, or other setting-specific infrastructure unless the source actually calls for that setting.
- When a religious concept has no safe literal depiction, use abstract non-figurative structure, geometry, materials, architecture, or nature to communicate only the educational relationship.

SALAF VISUAL SAFETY:
Create educational visuals using a conservative, aniconic Islamic design approach aligned with the project's Salaf visual safety guidelines. This is a project-level design policy, not a fatwa.
- Prefer clearly inanimate objects, architecture, nature, geometry, materials, and abstract non-figurative forms.
- No literal depiction of Allah, prophets, companions, angels, jinn, paradise, hell, the unseen, or other ghaib matters.
- Do not depict humans or animals, including partial bodies, faces, eyes, hands, silhouettes, statues, dolls, figurines, mascots, fantasy creatures, or anthropomorphic objects.
- Avoid pareidolia: clouds, stones, smoke, moon, shadows, or textures must not resemble faces or living beings.
- Do not use sacred books or religious text as decorative patterns on vehicles, floors, walls, packaging, clothing, or unrelated objects.
- When a Qur'an or sacred book is shown, place it respectfully on a clean elevated surface such as a rehal, shelf, or table; never on the floor, road, sidewalk, or dirty surface.
- Do not introduce non-Islamic religious symbols.
- Use concrete visual descriptions rather than vague labels such as "Islamic aesthetic".
- Keep the visual dignified, educational, calm, and non-commercial.

OUTPUT FORMAT — COPY-READY MARKDOWN:
Return a short segmentation rationale first, then return ONLY the image prompts as separate Markdown code blocks.
- Each image must have its own heading: # IMAGE 1, # IMAGE 2, # IMAGE 3, etc.
- Immediately under each heading, place ONE fenced Markdown code block containing the complete standalone image-generation prompt.
- The fenced code block must contain ONLY the paste-ready image-generation prompt, with no commentary, source-analysis labels, or explanation outside the prompt.
- Do not combine multiple image prompts into one code block.
- Do not put "Source segment:", "Verbatim source:", or long planning notes outside/inside the individual prompt unless they are necessary for the image generator to understand the visual relationship.
- Each prompt must be independently understandable when copied without the surrounding package.
- Keep the source segment reference concise. If exact source wording is needed for external typography, include it inside the prompt under a clearly marked "EXTERNAL TYPOGRAPHY SOURCE — DO NOT RENDER" block.
- End every image prompt with a strict exclusions block.

INDIVIDUAL PROMPT STRUCTURE:
1. Source segment reference — concise.
2. Visual concept — explain the pedagogical relationship being visualized.
3. Subject — the selected theme objects only as needed to express that relationship.
4. Scene — neutral context; never automatically a themed location.
5. Composition — arrangement must communicate the source structure.
6. Camera.
7. Lighting.
8. Material.
9. Color/mood.
10. Typography strategy.
11. Strict exclusions.

IMAGE-MODEL TYPOGRAPHY RULE:
The image model must NOT render Arabic, Qur'an text, hadith text, Indonesian paragraphs, letters, numbers, labels, logos, or watermarks. Reserve clean blank areas for external typography. Exact source text may be supplied for external/manual typography but must never be invented or rendered by the image model.

QUALITY GATE BEFORE OUTPUT:
- [ ] Number of images follows source structure; no fixed-count assumption.
- [ ] Complete source coverage across the package.
- [ ] No source segment silently omitted.
- [ ] No invented religious wording.
- [ ] Pedagogical relationship was determined before theme selection.
- [ ] Theme is used only as visual vocabulary, not forced as the subject or setting.
- [ ] No airport/garage/station/classroom/racetrack drift unless the source itself requires it.
- [ ] Visual metaphor encodes only relationships supported by the source.
- [ ] No literal ghaib depiction.
- [ ] No living beings or figurative creatures.
- [ ] No anthropomorphic objects or pareidolia.
- [ ] Sacred objects treated respectfully.
- [ ] Religious typography handled conservatively.
- [ ] Each image prompt is standalone and copy-ready.
- [ ] Each image prompt is in its own Markdown fenced code block.
- [ ] Exclusions appear at the end of each prompt.

The output is a prompt package for image generation, not the final images and not a religious interpretation.`;
};
export function generatePrompt(i:{lesson:string;category:Category;theme:Theme;style:Style;mood:Mood}){return{prompt:buildPreImage(i),negative:NEGATIVE}}