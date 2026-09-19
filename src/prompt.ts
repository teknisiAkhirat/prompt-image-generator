export const CATEGORIES=["Akidah","Bahasa Arab","Fiqih","Tajwid","Tahfidz","Al-Qur'an & Hadis"] as const;export type Category=typeof CATEGORIES[number];
export const THEMES=["Mobil Balap & Truk Konstruksi","Pesawat Terbang & Jet","Kereta Api Cepat & Rel","Blok Kayu Edukasi & Meja Belajar","Pemandangan Alam & Arsitektur Masjid Minimalis"] as const;export type Theme=typeof THEMES[number];
export const STYLES=["3D Cute Isometric Clay","Flat Vector Infographic","Clean LEGO Style Bricks"] as const;export type Style=typeof STYLES[number];
export const MOODS=["Cerah Ceria","Lembut Pastel","Minimalis Islami"] as const;export type Mood=typeof MOODS[number];

export const FORBIDDEN=["human","humans","person","people","man","woman","men","women","boy","girl","child","children","kid","kids","face","faces","eyes","hand","hands","animal","animals","bird","birds","insect","insects","fish","living creature","living creatures","character","characters","mascot","mascots","statue","statues","figurine","figurines","doll","dolls","mannequin","silhouette","silhouettes","angel","angels","demon","demons","cross","crosses","om","idol","idols"] as const;
export const NEGATIVE=[...FORBIDDEN,"anthropomorphic object","anthropomorphic objects","pareidolia","human-like shadow","human-like silhouette","religious text errors","misspelled Arabic","garbled Arabic","fake Arabic","watermark","blurry","low quality","distorted shapes","cluttered background","commercial styling"].join(", ");

const DATA:Record<Theme,[string,string,string]>={"Mobil Balap & Truk Konstruksi":["plain colorful toy race cars and construction trucks","plain toy vehicles arranged in precise straight rows","an empty clean toy garage floor"],"Pesawat Terbang & Jet":["plain toy passenger airplanes and sleek jets","plain toy airplanes arranged in precise parallel rows","an empty miniature runway"],"Kereta Api Cepat & Rel":["plain toy high-speed trains and railway tracks","plain numbered train carriages connected in exact order","an empty miniature railway platform"],"Blok Kayu Edukasi & Meja Belajar":["plain wooden educational blocks and a tidy study desk","numbered wooden blocks arranged in exact order","a clean empty study desk"],"Pemandangan Alam & Arsitektur Masjid Minimalis":["minimalist mosque architecture and natural landscape","empty prayer mats aligned precisely in straight rows","a serene empty mosque and landscape"]};

export const TEMPLATES=[{id:"imam",label:"Hadits Urutan Imam Salat",lesson:"Hadits tentang urutan imam salat. Tempelkan redaksi Arab dan terjemahan lengkap dari sumber yang telah diverifikasi.",category:"Fiqih" as Category,theme:"Mobil Balap & Truk Konstruksi" as Theme},{id:"rukun",label:"Rukun Islam",lesson:"Lima Rukun Islam secara berurutan: syahadat, salat, zakat, puasa Ramadan, dan haji bagi yang mampu.",category:"Akidah" as Category,theme:"Blok Kayu Edukasi & Meja Belajar" as Theme},{id:"makan",label:"Adab Makan",lesson:"Adab makan: membaca bismillah, makan dengan tangan kanan, makan yang terdekat, tidak berlebihan, dan mengucap hamdalah setelah selesai.",category:"Fiqih" as Category,theme:"Kereta Api Cepat & Rel" as Theme}];

export function sanitizeLesson(value:string){return value.replace(/\s+/g," ").trim()}
export function validateInput(lesson:string){return lesson.trim()?{ok:true as const}:{ok:false as const,message:"Materi pelajaran belum diisi. Tulis atau tempel materi yang sudah diverifikasi terlebih dahulu."}}

const conceptFor=(category:Category)=>category==="Akidah"?"foundational Islamic beliefs and their sourced educational explanation":category==="Bahasa Arab"?"Arabic vocabulary, grammar, and language concepts presented clearly":category==="Fiqih"?"Islamic rulings and practical worship concepts presented from the provided source":category==="Tajwid"?"Qur'an recitation rules and letter/sound relationships presented clearly":category==="Tahfidz"?"Qur'an memorization concepts, sequence, repetition, and organized study":"Qur'an and hadith knowledge presented faithfully from the supplied source";

const styleFor=(style:Style)=>style==="3D Cute Isometric Clay"?"cute 3D isometric clay style":style==="Flat Vector Infographic"?"flat vector infographic style":"clean LEGO-style brick diorama";

const buildPreImage=(i:{lesson:string;category:Category;theme:Theme;style:Style;mood:Mood})=>{
 const lesson=sanitizeLesson(i.lesson),d=DATA[i.theme],style=styleFor(i.style);
 return `Create a PRE-IMAGE PLANNING PROMPT for an external AI image-prompt generator.

SOURCE MATERIAL (AUTHORITATIVE USER INPUT):
"""
${lesson}
"""

TASK:
Analyze the complete source material and determine how many separate educational images are genuinely needed based on the material's length, structure, sentence boundaries, and context. Do NOT force a fixed number of images. A short lesson may need one image; a longer lesson may need several. Split at natural semantic boundaries so each image remains readable and coherent.

CRITICAL CONTENT INTEGRITY:
- Treat the supplied source material as authoritative input, not as something to rewrite.
- Preserve every required source passage and its meaning across the resulting image prompts.
- Never invent, fabricate, paraphrase, summarize, reorder, or silently omit religious source text.
- If Arabic matn and an Indonesian translation are supplied, keep the Arabic and translation paired in the same corresponding section.
- For hadith, Qur'an, du'a, dhikr, or scholar quotations, do not ask the image model to invent missing wording.
- If exact religious typography is needed, instruct the image prompt to reserve clean space for external/manual typography instead of generating sacred text inaccurately.

VISUAL METHODOLOGY:
Create educational visuals using a conservative, aniconic Islamic design approach aligned with the project's Salaf visual safety guidelines. This is a project-level design policy, not a fatwa.
- Prefer clearly inanimate objects, architecture, nature, geometry, materials, and abstract non-figurative forms.
- No literal depiction of Allah, prophets, companions, angels, jinn, paradise, hell, the unseen, or other ghaib matters.
- Do not depict humans or animals, including partial bodies, faces, eyes, hands, silhouettes, statues, dolls, figurines, mascots, fantasy creatures, or anthropomorphic objects.
- Avoid pareidolia: clouds, stones, smoke, moon, shadows, or textures must not resemble faces or living beings.
- Do not use sacred books or religious text as decorative patterns on vehicles, floors, walls, packaging, clothing, or other unrelated objects.
- When a Qur'an or sacred book is shown, place it respectfully on a clean elevated surface such as a rehal, shelf, or table; never on the floor, road, sidewalk, or dirty surface.
- Do not introduce non-Islamic religious symbols.
- Use concrete visual descriptions rather than vague labels such as "Islamic aesthetic".
- Keep the visual dignified, educational, calm, and non-commercial.
- The selected visual direction is: ${d[0]}; preferred arrangement: ${d[1]}; setting: ${d[2]}; style: ${style}; color mood: ${i.mood}.

PROMPT STRUCTURE FOR EACH OUTPUT:
Subject → Scene → Composition → Camera → Lighting → Material → Color → Atmosphere → Typography strategy → Strict visual constraints.

OUTPUT REQUIREMENT:
Return ONLY the separate, numbered IMAGE-GENERATION PROMPTS, each as a standalone prompt ready to paste into an external image generator. Number them sequentially (IMAGE 1, IMAGE 2, etc.). For every prompt:
1. State exactly which source segment it represents.
2. Preserve that segment's required wording without alteration.
3. Explain the non-living visual concept and its symbolism without adding religious claims not present in the source.
4. Specify composition, camera, lighting, material, color, atmosphere, and aspect ratio as appropriate.
5. If source text is long or sacred, explicitly reserve clean typography space and recommend adding the exact text externally after generation.
6. End with a strict exclusion block covering humans, animals, figurative creatures, anthropomorphism, pareidolia, non-Islamic symbols, disrespectful placement of sacred objects, invented/garbled religious text, watermarks, and clutter.

IMPORTANT:
The number of output prompts is decided from the source material's length and context. Do not assume five images, four images, or any fixed number. Do not collapse a long lesson into one image merely to reduce the count.

The output is a prompt package for image generation, not the final images and not a religious interpretation.

QUALITY GATE BEFORE OUTPUT:
- [ ] Complete source coverage across all image prompts
- [ ] No source segment silently omitted
- [ ] No invented religious wording
- [ ] No literal ghaib depiction
- [ ] No living beings or figurative creatures
- [ ] No anthropomorphic objects or pareidolia
- [ ] Sacred objects treated respectfully
- [ ] Religious typography handled conservatively
- [ ] Each prompt is standalone
- [ ] Visual concept remains faithful to the educational context
- [ ] Exclusions appear at the end of each prompt`;
};

export function generatePrompt(i:{lesson:string;category:Category;theme:Theme;style:Style;mood:Mood}){return{prompt:buildPreImage(i),negative:NEGATIVE}}