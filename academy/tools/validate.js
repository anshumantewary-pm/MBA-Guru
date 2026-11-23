// Checks that module content files load and match the schema.
// usage: node academy/tools/validate.js            (every module in the catalogue)
//        node academy/tools/validate.js F1 A2      (just these)
const fs=require('fs'),path=require('path');const dir=path.join(__dirname,'..','content','modules');
const store={};global.Academy={add(id,kind,data){(store[id]=store[id]||{})[kind]=data;}};
const L=['title','bullets','stat','compare','flow','quote','formula'];const B=['p','h','list','steps','callout','table','case','template','dialogue','checklist'];
let bad=0;const err=(m)=>{bad++;console.log('ERROR',m)};
global.window={};require(path.join(__dirname,'..','content','modules.js'));
const ids=process.argv.slice(2).length?process.argv.slice(2):window.CATALOG_MODULES.map(m=>m.id);
for(const id of ids){for(const k of['lessons','video','practice']){const f=path.join(dir,`${id}.${k}.js`);
 if(!fs.existsSync(f)){err(`${f} missing`);continue}try{require(f)}catch(e){err(`${f}: ${e.message}`);continue}}
 const m=store[id]||{};const ls=m.lessons;if(ls){if(!Array.isArray(ls.lessons)||ls.lessons.length<5)err(`${id} lessons<5`);
  (ls.lessons||[]).forEach((l,i)=>{if(!l.title||!l.minutes||!Array.isArray(l.blocks))err(`${id} lesson ${i} fields`);let w=0;
   (l.blocks||[]).forEach(b=>{if(!B.includes(b.type))err(`${id} lesson ${i} bad block ${b.type}`);w+=JSON.stringify(b).split(/\s+/).length});
   if(w<220)err(`${id} lesson ${i} too short (${w} words)`)});}
 const v=m.video;if(v){if(!v.title||!Array.isArray(v.scenes)||v.scenes.length<8)err(`${id} video scenes<8`);
  (v.scenes||[]).forEach((s,i)=>{if(!L.includes(s.layout))err(`${id} scene ${i} layout ${s.layout}`);if(!s.narration||s.narration.length<80)err(`${id} scene ${i} narration short`)});}
 const p=m.practice;if(p){if(!Array.isArray(p.quiz)||p.quiz.length!==5)err(`${id} quiz must be 5`);
  (p.quiz||[]).forEach((q,i)=>{if(!q.q||!Array.isArray(q.options)||q.options.length!==4||!(q.answer>=0&&q.answer<4)||!q.explain)err(`${id} quiz ${i} fields`)});
  if(!Array.isArray(p.tasks)||!p.tasks.length)err(`${id} no tasks`);if(!p.workshop)err(`${id} no workshop`);}
 if(m.lessons&&m.video&&m.practice)console.log('OK',id,`${m.lessons.lessons.length} lessons, ${m.video.scenes.length} scenes`);}
process.exit(bad?1:0);
