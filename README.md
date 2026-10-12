!DOCTYPE html>
<html lang='pt-BR'>
<head>
<meta charset='UTF-8'>
<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0'>
<meta name='theme-color' content='#080808'>
<title>Próximo Nível — Grafite & Dourado</title>
<meta name='description' content='Organize tarefas, objetivos, estudos, hábitos, carreira e metas financeiras no Próximo Nível.'>
<style>
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
:root{--bg:#080808;--card:#111;--card2:#171717;--border:#292929;--text:#f5f5f5;--muted:#999;--purple:#c9a227;--purple2:#f0d77a;--green:#22c55e;--red:#ef4444}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:Arial,Helvetica,sans-serif;min-height:100vh;padding-bottom:82px}
button,input,textarea{font:inherit}
button{cursor:pointer}
.app{max-width:700px;margin:auto}
header{position:sticky;top:0;z-index:50;background:rgba(8,8,8,.95);backdrop-filter:blur(15px);border-bottom:1px solid var(--border);padding:16px 18px}
.header{display:flex;align-items:center;justify-content:space-between}.logo{font-weight:900;letter-spacing:1px}.logo span{color:var(--purple2)}
.xp{font-size:12px;color:var(--muted)}.xp b{color:var(--purple2)}
.page{display:none;padding:22px 18px;animation:fade .2s ease}.page.active{display:block}
@keyframes fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
h1{font-size:29px;margin-bottom:8px}h2{font-size:20px;margin-bottom:10px}h3{font-size:18px}
.sub{color:var(--muted);line-height:1.5;margin-bottom:19px}
.hero{background:radial-gradient(circle at top right,rgba(201,162,39,.22),transparent 44%),linear-gradient(145deg,#171717,#0d0d0d);border:1px solid var(--border);border-radius:23px;padding:22px;margin-bottom:16px}
.badge{display:inline-block;color:var(--purple2);background:#241f10;border:1px solid #6b571e;border-radius:999px;padding:7px 10px;font-size:10px;font-weight:800;margin-bottom:13px}.hero h1{font-size:31px}.hero p{color:#aaa;line-height:1.5;margin-top:9px}
.card{background:linear-gradient(145deg,#151515,#0e0e0e);border:1px solid var(--border);border-radius:18px;padding:17px;margin-bottom:13px}.title{font-weight:800;margin-bottom:5px}.muted{color:var(--muted);font-size:13px;line-height:1.5}
.btn{width:100%;padding:13px;border:0;border-radius:12px;background:var(--purple);color:#fff;font-weight:800;margin-top:11px;text-align:center;display:block;text-decoration:none}.btn.secondary{background:#191919;border:1px solid var(--border)}.btn.small{width:auto;padding:9px 12px;margin:0;font-size:12px}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:10px}.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px}.stat{background:var(--card);border:1px solid var(--border);border-radius:15px;padding:14px 8px;text-align:center}.stat b{display:block;font-size:21px;margin-bottom:4px}.stat span{font-size:11px;color:var(--muted)}
.progress{height:8px;background:#252525;border-radius:99px;overflow:hidden;margin-top:11px}.progress>div{height:100%;background:linear-gradient(90deg,var(--purple),var(--purple2));border-radius:99px;transition:.3s}
.form{margin-top:14px}.group{margin-bottom:12px}label{display:block;color:#aaa;font-size:12px;margin-bottom:6px}
input,textarea{width:100%;padding:13px;border-radius:12px;border:1px solid var(--border);background:#0c0c0c;color:#fff;outline:none}textarea{min-height:90px;resize:vertical}input:focus,textarea:focus{border-color:var(--purple)}
.custom-select{position:relative}.select-trigger{width:100%;height:50px;padding:0 14px;border:1px solid var(--border);border-radius:13px;background:#111;color:#fff;display:flex;align-items:center;justify-content:space-between;font-weight:700;text-align:left}.chevron{color:#aaa;font-size:20px}.select-menu{position:absolute;left:0;right:0;top:56px;z-index:80;background:#171717;border:1px solid #333;border-radius:15px;padding:6px;box-shadow:0 18px 40px #000b;display:none}.custom-select.open .select-menu{display:block}.select-menu button{display:block;width:100%;height:45px;text-align:left;padding:0 12px;border:0;border-radius:10px;background:transparent;color:#ddd}.select-menu button:hover{background:#252027;color:#fff}
.task{display:flex;align-items:center;gap:11px;padding:13px 0;border-bottom:1px solid #222}.task:last-child{border-bottom:0}.check{width:25px;height:25px;min-width:25px;border-radius:8px;border:1px solid #444;background:#101010;color:#fff}.task.done .check{background:var(--purple);border-color:var(--purple)}.task.done .name{text-decoration:line-through;color:#777}.taskinfo{flex:1}.name{font-weight:700;font-size:14px}.meta{color:#777;font-size:11px;margin-top:4px}
.goal{margin-bottom:13px}.goalhead{display:flex;justify-content:space-between;gap:10px}.percent{color:var(--purple2);font-weight:800}
.empty{text-align:center;color:#777;padding:20px 8px;line-height:1.5}
.next{border-color:#6b571e;background:linear-gradient(145deg,rgba(201,162,39,.16),rgba(201,162,39,.04))}.nextlabel{color:var(--purple2);font-size:11px;font-weight:900;letter-spacing:1px;margin-bottom:8px}.next h3{font-size:19px}.next p{color:#aaa;font-size:13px;line-height:1.5;margin-top:7px}
.action{display:flex;align-items:center;gap:12px;padding:14px;border:1px solid var(--border);border-radius:15px;background:#111;margin-bottom:9px}.action .symbol{width:38px;height:38px;border-radius:11px;background:#292311;display:grid;place-items:center;font-size:18px}.action .grow{flex:1}.action b{font-size:14px}.action small{display:block;color:#777;margin-top:4px}
.chiprow{display:flex;gap:7px;overflow:auto;padding-bottom:3px}.chip{white-space:nowrap;border:1px solid var(--border);background:#121212;color:#aaa;border-radius:999px;padding:9px 12px;font-size:12px}.chip.active{border-color:#c9a227;background:#292311;color:#c7b8ff}
.icon-card{padding:15px}.icon-card .big{font-size:23px;margin-bottom:9px}.icon-card b{display:block;font-size:14px}.icon-card span{font-size:11px;color:#777;display:block;margin-top:4px}
.section-title{display:flex;align-items:center;justify-content:space-between;margin:18px 0 10px}.section-title button{background:none;border:0;color:var(--purple2);font-size:12px}
.table-row{display:grid;grid-template-columns:1fr auto;gap:10px;padding:12px 0;border-bottom:1px solid #222}.table-row:last-child{border-bottom:0}
.big-number{font-size:31px;font-weight:900}.green{color:var(--green)}.purple{color:var(--purple2)}.red{color:var(--red)}
.quote{font-size:16px;line-height:1.6;font-weight:700}
.bottom{position:fixed;bottom:0;left:0;right:0;height:74px;background:rgba(12,12,12,.97);border-top:1px solid var(--border);z-index:20}.nav{max-width:700px;margin:auto;display:grid;grid-template-columns:repeat(4,1fr);height:100%}.nav button{background:none;border:0;color:#777;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;font-size:10px;font-weight:600}.nav .ico{font-size:18px}.nav button.active{color:var(--purple2)}
.toast{position:fixed;left:50%;bottom:90px;transform:translate(-50%,20px);background:#222;border:1px solid #333;padding:11px 15px;border-radius:12px;font-size:13px;opacity:0;pointer-events:none;transition:.2s;z-index:100;white-space:nowrap}.toast.show{opacity:1;transform:translate(-50%,0)}
.modal{position:fixed;inset:0;background:#000b;z-index:90;display:none;align-items:flex-end}.modal.show{display:flex}.sheet{width:100%;max-width:700px;margin:auto;background:#121212;border:1px solid #333;border-radius:24px 24px 0 0;padding:20px;max-height:88vh;overflow:auto}.sheet-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}.close{width:35px;height:35px;border-radius:50%;border:1px solid #333;background:#1b1b1b;color:#fff}
@media(max-width:390px){.hero h1{font-size:27px}h1{font-size:26px}.grid2{gap:7px}.icon-card{padding:12px}}
:root{--bg:#070b15;--card:#0d1528;--card2:#111d34;--border:#263653;--text:#f4f7ff;--muted:#9ba9c2;--purple:#f4bf3c;--purple2:#ffe08a;--green:#35d6a0;--red:#fb7185}
html{background:#070b15}
body{background:radial-gradient(ellipse at 4% 12%,rgba(91,45,169,.38),transparent 34%),radial-gradient(ellipse at 92% 19%,rgba(16,111,137,.30),transparent 33%),radial-gradient(ellipse at 80% 88%,rgba(85,41,153,.24),transparent 35%),#070b15;color:var(--text)}
.app{max-width:none;margin:0;min-height:100vh}
header{background:rgba(7,12,25,.92);border-bottom:1px solid rgba(116,148,197,.19);padding:15px 22px}
.header{gap:12px;min-height:34px}
.logo{font-size:15px;letter-spacing:1.4px}
.logo span{color:var(--purple2)}
.xp{padding:9px 12px;border:1px solid rgba(244,191,60,.27);border-radius:12px;background:rgba(244,191,60,.07);white-space:nowrap}
.xp b{color:var(--purple2)}
.page{padding:24px 18px 30px}
h1{font-size:clamp(27px,3.5vw,37px);letter-spacing:-.7px}
h2{font-size:21px;letter-spacing:-.2px}
.sub{color:#a5b2cb;max-width:760px}
.hero{position:relative;overflow:hidden;background:radial-gradient(ellipse at 100% 0%,rgba(244,191,60,.13),transparent 38%),linear-gradient(118deg,rgba(21,31,58,.98),rgba(9,16,33,.97));border:1px solid rgba(117,146,197,.23);border-radius:22px;padding:25px;margin-bottom:18px;box-shadow:0 18px 50px rgba(0,0,0,.16)}
.hero:after{content:'';position:absolute;right:-48px;bottom:-95px;width:220px;height:220px;border-radius:50%;border:1px solid rgba(244,191,60,.12);box-shadow:0 0 0 22px rgba(244,191,60,.025),0 0 0 45px rgba(244,191,60,.018);pointer-events:none}
.hero h1{max-width:680px;line-height:1.12;position:relative;z-index:1}
.hero p{max-width:690px;color:#aab6ce;line-height:1.6;position:relative;z-index:1}
.badge{color:var(--purple2);background:rgba(244,191,60,.10);border:1px solid rgba(244,191,60,.28);letter-spacing:.65px}
.card{background:linear-gradient(145deg,rgba(17,29,52,.96),rgba(10,18,35,.97));border:1px solid rgba(103,133,184,.19);border-radius:18px;padding:18px;margin-bottom:14px;box-shadow:0 9px 28px rgba(0,0,0,.10);transition:border-color .18s,transform .18s,box-shadow .18s}
.card[onclick]{cursor:pointer}
.card[onclick]:hover{border-color:rgba(244,191,60,.38);transform:translateY(-2px);box-shadow:0 14px 32px rgba(0,0,0,.2)}
.title{color:#f4f7ff}
.muted{color:#9ba9c2}
.btn{background:linear-gradient(180deg,#ffdc70,#f3b82b);color:#171717;font-weight:900;letter-spacing:.25px;box-shadow:0 5px 16px rgba(244,191,60,.11)}
.btn:hover{filter:brightness(1.06);transform:translateY(-1px)}
.btn.secondary{background:rgba(255,255,255,.035);color:#e7edf9;border:1px solid #2a3a56;box-shadow:none}
.stats{gap:10px}
.stat{background:linear-gradient(145deg,rgba(17,29,52,.95),rgba(9,16,32,.97));border-color:rgba(103,133,184,.2);padding:16px 9px}
.stat b{color:#fff;font-size:24px}
.stat span{color:#9ba9c2}
.progress{background:#1b2942}
.progress>div{background:linear-gradient(90deg,#d99e16,#ffe08a);box-shadow:0 0 13px rgba(244,191,60,.23)}
.next{border-color:rgba(244,191,60,.32);background:radial-gradient(ellipse at 100% 0%,rgba(244,191,60,.12),transparent 52%),linear-gradient(145deg,#111c33,#0b1428)}
.nextlabel,.percent,.section-title button{color:var(--purple2)}
.action{background:rgba(12,22,41,.9);border-color:#263653}
.action .symbol{background:rgba(244,191,60,.12);color:#ffe08a}
input,textarea{background:#081123;border-color:#2a3b58;color:#fff}
input:focus,textarea:focus{border-color:#e9b936;box-shadow:0 0 0 3px rgba(244,191,60,.08)}
.custom-select .select-trigger{background:#0d172b;border-color:#2a3b58}
.select-menu{background:#0c162b;border-color:#2a3b58}
.select-menu button:hover{background:#1b2942}
.task{border-bottom-color:rgba(103,133,184,.17)}
.check{background:#0b1427;border-color:#425371}
.task.done .check{background:#e8b52e;border-color:#e8b52e;color:#111}
.chip{background:#0b1427;border-color:#2a3b58;color:#aab6ce}
.chip.active{border-color:#e4b535;background:rgba(244,191,60,.12);color:#ffe08a}
.bottom{background:rgba(7,12,25,.97);border-color:rgba(116,148,197,.2);backdrop-filter:blur(18px)}
.nav button{color:#8e9db8}
.nav button.active{color:#ffe08a}
.nav .ico{font-size:19px}
.toast{background:#111d34;border-color:#334765;color:#fff;max-width:calc(100vw - 28px);white-space:normal;text-align:center}
.modal{backdrop-filter:blur(6px)}
.sheet{background:#0d172b;border-color:#2a3b58}
.close{background:#15223a;border-color:#344766}
.sidebar{position:fixed;z-index:110;inset:0 auto 0 0;width:248px;padding:20px 14px 15px;display:flex;flex-direction:column;overflow-y:auto;background:linear-gradient(180deg,rgba(9,17,35,.99),rgba(7,12,25,.99));border-right:1px solid rgba(116,148,197,.20);box-shadow:14px 0 45px rgba(0,0,0,.16)}
.side-brand{display:flex;gap:11px;align-items:center;padding:5px 7px 22px;border-bottom:1px solid rgba(116,148,197,.16);margin-bottom:17px}
.side-mark{width:43px;height:43px;border-radius:14px;display:grid;place-items:center;font-weight:1000;font-size:19px;color:#111;background:linear-gradient(145deg,#ffe08a,#e4a91f);box-shadow:0 5px 18px rgba(244,191,60,.16)}
.side-brand b{display:block;font-size:13px;letter-spacing:1px;line-height:1.35}
.side-brand small{display:block;font-size:9px;letter-spacing:2px;color:#d2ad4b;margin-top:3px}
.side-label{font-size:9px;font-weight:900;letter-spacing:1.6px;color:#70809d;padding:12px 11px 7px}
.side-nav{display:flex;flex-direction:column;gap:4px}
.side-nav button{width:100%;display:flex;align-items:center;gap:11px;text-align:left;padding:11px 12px;border-radius:12px;background:transparent;border:1px solid transparent;color:#aab6ce;font-size:12px;font-weight:650;transition:.15s}
.side-nav button .side-ico{width:22px;text-align:center;font-size:16px}
.side-nav button:hover{background:rgba(255,255,255,.035);color:#fff}
.side-nav button.active{color:#ffe08a;background:linear-gradient(90deg,rgba(244,191,60,.13),rgba(244,191,60,.035));border-color:rgba(244,191,60,.16);box-shadow:inset 3px 0 #f4bf3c}
.side-bottom{margin-top:auto;padding-top:18px}
.side-profile{display:flex;gap:10px;align-items:center;padding:12px 8px;border-top:1px solid rgba(116,148,197,.16);color:#aab6ce;font-size:11px;line-height:1.4}
.side-avatar{width:34px;height:34px;flex:0 0 34px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(140deg,#f5cc54,#a97412);color:#101010;font-weight:900}
.side-profile b{display:block;color:#fff;font-size:11px}
.menu-trigger{width:39px;height:39px;display:grid;place-items:center;border:1px solid #2b3b57;border-radius:12px;background:#0d172b;color:#f8d56d;font-size:19px;flex:0 0 auto}
.header-brand{display:flex;align-items:center;gap:12px;min-width:0}
.header-caption{display:block;color:#8797b4;font-size:10px;margin-top:3px;letter-spacing:.2px}
.sidebar-backdrop{display:none}
@media(min-width:900px){
.app{margin-left:248px;min-height:100vh}
header{padding:15px 30px}
.page{max-width:1500px;padding:30px clamp(25px,3vw,48px) 44px}
.hero{padding:30px 34px;min-height:190px;display:flex;flex-direction:column;justify-content:center}
.stats{grid-template-columns:repeat(3,minmax(0,1fr));max-width:920px}
#home>.grid2{grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
#home>.card{max-width:none}
.bottom{display:none}
.menu-trigger{display:none}
}
@media(max-width:899px){
.sidebar{transform:translateX(-105%);transition:transform .24s ease;width:min(290px,86vw);box-shadow:none}
.sidebar.open{transform:translateX(0);box-shadow:18px 0 60px rgba(0,0,0,.45)}
.sidebar-backdrop.open{display:block;position:fixed;z-index:105;inset:0;background:rgba(1,5,14,.68);backdrop-filter:blur(3px)}
.header{justify-content:space-between}
.header-brand{flex:1}
.page{padding:19px 15px 25px}
.hero{padding:21px 19px}
.card{padding:16px}
}
@media(max-width:390px){
.header-caption{display:none}.logo{font-size:13px}.xp{padding:8px 9px}.stats{gap:6px}.stat b{font-size:21px}
}
.isis-messages{display:flex;flex-direction:column;gap:10px;max-height:52vh;overflow:auto;padding:4px 1px 12px}
.isis-message{max-width:94%;padding:12px 13px;border-radius:15px;line-height:1.5;font-size:13px;white-space:pre-wrap;overflow-wrap:anywhere}
.isis-message p{margin-top:5px}.isis-message.assistant{align-self:flex-start;background:#19170f;border:1px solid #4c3e19;color:#f3f0e6}.isis-message.user{align-self:flex-end;background:#252525;border:1px solid #454545;color:#fff}.isis-message b{font-size:11px;color:var(--purple2);letter-spacing:.4px}.isis-message.user b{color:#fff}
.isis-message.pending{opacity:.7;font-style:italic}
</style>
</head>
<body>
<div class='sidebar-backdrop' id='sidebarBackdrop' onclick='toggleSidebar(false)'></div>
<aside class='sidebar' id='sidebar' aria-label='Menu principal'>
<div class='side-brand'><div class='side-mark'>N</div><div><b>PRÓXIMO NÍVEL</b><small>EVOLUA TODOS OS DIAS</small></div></div>
<div class='side-label'>PAINEL PRINCIPAL</div>
<nav class='side-nav' aria-label='Navegação principal'>
<button class='active' data-page='home' onclick='showPage("home")'><span class='side-ico'>⌂</span>Visão geral</button>
<button data-page='tasks' onclick='showPage("tasks")'><span class='side-ico'>✓</span>Meu dia e tarefas</button>
<button data-page='goals' onclick='showPage("goals")'><span class='side-ico'>◎</span>Objetivos</button>
<button data-page='progressPage' onclick='showPage("progressPage")'><span class='side-ico'>◈</span>Progresso</button>
</nav>
<div class='side-label'>EVOLUÇÃO PESSOAL</div>
<nav class='side-nav' aria-label='Áreas de evolução'>
<button data-page='study' onclick='showPage("study")'><span class='side-ico'>▤</span>Estudos</button>
<button data-page='gym' onclick='showPage("gym")'><span class='side-ico'>♜</span>Academia</button>
<button data-page='finance' onclick='showPage("finance")'><span class='side-ico'>＄</span>Finanças</button>
<button data-page='career' onclick='showPage("career")'><span class='side-ico'>↗</span>Carreira</button>
<button data-page='habits' onclick='showPage("habits")'><span class='side-ico'>✦</span>Hábitos</button>
</nav>
<div class='side-label'>ESPAÇO PESSOAL</div>
<nav class='side-nav' aria-label='Área pessoal'>
<button data-page='ai' onclick='showPage("ai")'><span class='side-ico'>✧</span>Ísis · Assistente</button>
<button data-page='community' onclick='showPage("community")'><span class='side-ico'>◉</span>Comunidade</button>
<button data-page='profile' onclick='showPage("profile")'><span class='side-ico'>⚙</span>Meu perfil</button>
</nav>
<div class='side-bottom'><div class='side-profile'><div class='side-avatar'>PN</div><div><b>Seu Próximo Nível</b><span>Seu espaço de evolução</span></div></div></div>
</aside>
<div class='app'>
<header><div class='header'><div class='header-brand'><button class='menu-trigger' onclick='toggleSidebar()' aria-label='Abrir menu'>☰</button><div><div class='logo'>PRÓXIMO <span>NÍVEL</span></div><small class='header-caption'>Planeje. Execute. Evolua.</small></div></div><div class='xp'>✦ XP <b id='topXP'>0</b></div></div></header>
​<section class='page active' id='home'>
<div class='hero'><div class='badge'>🚀 EVOLUA UM DIA DE CADA VEZ</div><h1>Sua próxima versão começa hoje.</h1><p>O seu espaço para transformar objetivos em ações, acompanhar evolução e descobrir o próximo passo.</p></div>
<div class='stats'><div class='stat'><b id='done'>0</b><span>Concluídas</span></div><div class='stat'><b id='total'>0</b><span>Hoje</span></div><div class='stat'><b id='level'>1</b><span>Nível</span></div></div>
<div class='card' style='padding:12px 15px;display:flex;align-items:center;justify-content:space-between;gap:12px'><div><b>🤝 Comunidade</b><div class='muted'>Registre e compartilhe suas conquistas</div></div><button class='btn small' onclick='showPage("community")'>ABRIR</button></div>
<div class='card next'><div class='nextlabel'>🔥 SEU PRÓXIMO PASSO</div><h3 id='nextTitle'>Crie sua primeira tarefa.</h3><p id='nextText'>Escolha uma pequena ação que você pode realizar hoje.</p><button class='btn' onclick='showPage("tasks")'>COMEÇAR AGORA</button></div>
<div class='card'><div class='title'>Progresso de hoje</div><div class='muted' id='dayText'>0% concluído</div><div class='progress'><div id='dayBar'></div></div></div>
<div class='section-title'><h2>Áreas</h2></div>
<div class='grid2'>
<div class='card icon-card' onclick='showPage("finance")'><div class='big'>💰</div><b>Finanças</b><span>Metas e economia</span></div>
<div class='card icon-card' onclick='showPage("gym")'><div class='big'>🏋️</div><b>Academia</b><span>Treinos e evolução</span></div>
<div class='card icon-card' onclick='showPage("study")'><div class='big'>📚</div><b>Estudos</b><span>Foco e aprendizado</span></div>
<div class='card icon-card' onclick='showPage("career")'><div class='big'>💼</div><b>Carreira</b><span>Próximos passos</span></div>
</div>
</section>
​<section class='page' id='tasks'>
<h1>Meu Dia</h1><p class='sub'>Não tente resolver tudo. Descubra o próximo passo.</p>
<div class='card'><div class='title'>Adicionar tarefa</div><div class='form'>
<div class='group'><label>O que precisa ser feito?</label><input id='taskInput' placeholder='Ex.: Estudar 1 hora'></div>
<div class='group'><label>Categoria</label><div class='custom-select' id='taskCatBox'><button type='button' class='select-trigger' onclick='toggleSelect("taskCatBox")'><span id='taskCatLabel'>Rotina</span><span class='chevron'>⌄</span></button><div class='select-menu'><button onclick='chooseSelect("taskCatBox","taskCatLabel","rotina","Rotina")'>Rotina</button><button onclick='chooseSelect("taskCatBox","taskCatLabel","estudos","Estudos")'>Estudos</button><button onclick='chooseSelect("taskCatBox","taskCatLabel","academia","Academia")'>Academia</button><button onclick='chooseSelect("taskCatBox","taskCatLabel","financas","Finanças")'>Finanças</button><button onclick='chooseSelect("taskCatBox","taskCatLabel","carreira","Carreira")'>Carreira</button><button onclick='chooseSelect("taskCatBox","taskCatLabel","outro","Outro")'>Outro</button></div></div><input type='hidden' id='taskCat' value='rotina'></div>
<button class='btn' onclick='addTask()'>ADICIONAR TAREFA</button></div></div>
<div class='card'><div class='title'>Tarefas de hoje</div><div id='taskList'></div></div>
</section>
​<section class='page' id='goals'>
<h1>Meus Objetivos</h1><p class='sub'>Transforme o que você quer em um caminho claro.</p>
<div class='card'><div class='title'>Criar objetivo</div><div class='form'>
<div class='group'><label>Objetivo</label><input id='goalInput' placeholder='Ex.: Aprender programação'></div>
<div class='group'><label>Categoria</label><div class='custom-select' id='goalCatBox'><button type='button' class='select-trigger' onclick='toggleSelect("goalCatBox")'><span id='goalCatLabel'>Estudos</span><span class='chevron'>⌄</span></button><div class='select-menu'><button onclick='chooseSelect("goalCatBox","goalCatLabel","estudos","Estudos")'>📚 Estudos</button><button onclick='chooseSelect("goalCatBox","goalCatLabel","academia","Academia")'>🏋️ Academia</button><button onclick='chooseSelect("goalCatBox","goalCatLabel","financas","Finanças")'>💰 Finanças</button><button onclick='chooseSelect("goalCatBox","goalCatLabel","carreira","Carreira")'>💼 Carreira</button><button onclick='chooseSelect("goalCatBox","goalCatLabel","habitos","Hábitos")'>🔥 Hábitos</button><button onclick='chooseSelect("goalCatBox","goalCatLabel","outro","Outro")'>🎯 Outro</button></div></div><input type='hidden' id='goalCat' value='estudos'></div>
<button class='btn' onclick='addGoal()'>CRIAR OBJETIVO</button></div></div>
<div id='goalList'></div>
</section>
​<section class='page' id='progressPage'>
<h1>Minha Evolução</h1><p class='sub'>Veja onde você está e compare com o seu próprio histórico.</p>
<div class='stats'><div class='stat'><b id='pTasks'>0</b><span>Tarefas</span></div><div class='stat'><b id='pGoals'>0</b><span>Objetivos</span></div><div class='stat'><b id='pXP'>0</b><span>XP</span></div></div>
<div class='card'><div class='title'>Seu nível</div><div class='muted' id='levelText'>Nível 1</div><div class='progress'><div id='xpBar'></div></div><div class='muted' style='margin-top:9px' id='xpText'>0 / 100 XP para o próximo nível</div></div>
<div class='card'><div class='title'>🔮 Se continuar assim...</div><div class='quote' id='projection'>Cada pequena ação acumulada muda o resultado.</div></div>
<div class='card'><div class='title'>Evolução por área</div><div class='table-row'><span>📚 Estudos</span><b id='studyScore'>0%</b></div><div class='table-row'><span>🏋️ Academia</span><b id='gymScore'>0%</b></div><div class='table-row'><span>💰 Finanças</span><b id='financeScore'>0%</b></div><div class='table-row'><span>🔥 Hábitos</span><b id='habitScore'>0%</b></div></div>
</section>
​<section class='page' id='ai'>
<div class='hero'><div class='badge'>✦ SUA PARCEIRA DE EVOLUÇÃO</div><h1>Ísis <span style='color:var(--purple2)'>IA</span></h1><p>Uma assistente para organizar ideias, planejar metas, estudar e transformar intenção em ação.</p><div style='display:flex;align-items:center;gap:8px;margin-top:13px'><span id='isisStatusDot' style='width:9px;height:9px;border-radius:50%;background:#22c55e;display:inline-block'></span><span id='isisStatus' class='muted'>Ísis conectada</span></div></div>
<div class='card'><div class='title'>💬 Converse com a Ísis</div><div id='isisMessages' class='isis-messages' aria-live='polite'><div class='isis-message assistant'><b>Ísis</b><p>Oi! Sou a Ísis, sua assistente do Próximo Nível. Posso ajudar a organizar suas metas e próximos passos. Como posso te ajudar hoje?</p></div></div><div class='form'><textarea id='isisInput' rows='3' placeholder='Escreva para a Ísis… (Enter envia, Shift+Enter quebra linha)'></textarea><button class='btn' id='isisSend' onclick='sendToIsis()'>ENVIAR PARA ÍSIS ↗</button><button class='btn secondary' onclick='clearIsisChat()'>LIMPAR CONVERSA</button></div><p class='muted' style='margin-top:10px'>A conversa fica salva neste aparelho. Não coloque senhas, dados bancários ou informações privadas no chat.</p></div>
<div class='card next'><div class='nextlabel'>🎯 PLANO RÁPIDO</div><h3>Quer descobrir seu próximo passo?</h3><p id='aiAnswer'>A Ísis pode sugerir uma ação com base nas suas tarefas e objetivos salvos neste aparelho.</p><button class='btn' onclick='askAI()'>ANALISAR MINHA EVOLUÇÃO</button></div>
</section>
​<section class='page' id='gym'>
<h1>Academia</h1><p class='sub'>Registre seus treinos e acompanhe consistência.</p>
<div class='chiprow'><button class='chip active'>Hoje</button><button class='chip'>Iniciante</button><button class='chip'>Hipertrofia</button><button class='chip'>Força</button></div>
<div class='card' style='margin-top:14px'><div class='title'>🏋️ Treino de hoje</div><div id='workoutList'></div><button class='btn' onclick='finishWorkout()'>CONCLUIR TREINO</button></div>
<div class='stats'><div class='stat'><b id='workouts'>0</b><span>Treinos</span></div><div class='stat'><b id='streak'>0</b><span>Sequência</span></div><div class='stat'><b id='gymXP'>0</b><span>XP</span></div></div>
<div class='card'><div class='title'>Histórico</div><div class='muted'>Cada treino concluído fica registrado neste aparelho.</div></div>
</section>
​<section class='page' id='study'>
<h1>Estudos</h1><p class='sub'>Organize sessões de estudo e construa consistência.</p>
<div class='card'><div class='title'>📚 Sessão de hoje</div><div class='big-number' id='studyMinutes'>0 min</div><div class='muted'>Estude em blocos de foco e registre quando terminar.</div><button class='btn' onclick='studySession()'>CONCLUIR 25 MINUTOS</button></div>
<div class='card'><div class='title'>Meu plano</div><div class='table-row'><span>🎯 Objetivo</span><b id='studyGoalText'>Defina um objetivo</b></div><div class='table-row'><span>⏱️ Sessões</span><b id='studySessions'>0</b></div><div class='table-row'><span>🔥 Consistência</span><b id='studyConsistency'>0%</b></div></div>
</section>
​<section class='page' id='finance'>
<h1>Finanças</h1><p class='sub'>Uma visão simples para acompanhar objetivos financeiros.</p>
<div class='card'><div class='title'>🎯 Nova meta financeira</div><div class='form'><div class='group'><label>Nome da meta</label><input id='moneyName' placeholder='Ex.: Reserva de emergência'></div><div class='grid2'><div class='group'><label>Tenho</label><input id='moneyCurrent' type='number' min='0' placeholder='0'></div><div class='group'><label>Quero chegar em</label><input id='moneyTarget' type='number' min='1' placeholder='5000'></div></div><button class='btn' onclick='saveMoneyGoal()'>SALVAR META</button></div></div>
<div class='card'><div class='title' id='moneyTitle'>Nenhuma meta financeira</div><div class='big-number' id='moneyAmount'>R$ 0</div><div class='progress'><div id='moneyBar'></div></div><div class='muted' style='margin-top:9px' id='moneyText'>Crie uma meta para começar.</div></div>
</section>
​<section class='page' id='career'>
<h1>Carreira</h1><p class='sub'>Transforme intenção profissional em próximos passos.</p>
<div class='card'><div class='title'>💼 Meu próximo passo profissional</div><div class='form'><input id='careerGoal' placeholder='Ex.: Conseguir minha primeira vaga na área'><button class='btn' onclick='saveCareer()'>SALVAR OBJETIVO</button></div><div class='muted' style='margin-top:13px' id='careerSaved'>Nenhum objetivo definido.</div></div>
<div class='card'><div class='title'>Checklist</div><div id='careerList'></div></div>
</section>
​<section class='page' id='habits'>
<h1>Hábitos</h1><p class='sub'>Pequenas ações repetidas constroem consistência.</p>
<div id='habitList'></div>
<div class='card'><div class='title'>Adicionar hábito</div><div class='form'><input id='habitInput' placeholder='Ex.: Beber água'><button class='btn' onclick='addHabit()'>ADICIONAR HÁBITO</button></div></div>
</section>
​<section class='page' id='community'>
<h1>Comunidade</h1><p class='sub'>Compartilhe uma conquista, registre sua intenção e mantenha o foco.</p>
<div class='card'><div class='title'>✍️ Publicar no meu mural</div><div class='form'><textarea id='communityInput' placeholder='Qual foi sua conquista de hoje? O que você aprendeu?'></textarea><button class='btn' onclick='addCommunityPost()'>PUBLICAR CONQUISTA</button></div><p class='muted' style='margin-top:10px'>Neste HTML, as publicações ficam salvas apenas neste aparelho. Para uma comunidade real entre pessoas, é necessário conectar um servidor.</p></div>
<div class='section-title'><h2>Meu mural</h2><button onclick='shareWhatsApp()'>Compartilhar ↗</button></div><div id='communityPosts'></div>
</section>
​<section class='page' id='profile'>
<h1>Meu Perfil</h1><p class='sub'>Seu painel pessoal no Próximo Nível.</p>
<div class='card'><div class='title'>👤 Perfil</div><div class='form'><label>Seu nome</label><input id='profileName' placeholder='Como quer ser chamado?'><button class='btn' onclick='saveProfile()'>SALVAR</button></div></div>
<div class='card'><div class='title'>Resumo</div><div class='table-row'><span>Nível</span><b id='profileLevel'>1</b></div><div class='table-row'><span>XP</span><b id='profileXP'>0</b></div><div class='table-row'><span>Objetivos</span><b id='profileGoals'>0</b></div></div>
<div class='card'><div class='title'>⚙️ Dados</div><div class='muted'>Esta versão salva os dados localmente neste aparelho. A conexão com Supabase pode ser adicionada depois.</div><button class='btn secondary' onclick='resetData()'>REDEFINIR DADOS</button></div>
<div class='card'><div class='title'>📲 Compartilhe sua evolução</div><p class='muted'>Envie uma mensagem sobre sua jornada para seus contatos.</p><button class='btn' onclick='shareWhatsApp()'>COMPARTILHAR NO WHATSAPP</button></div>
</section>
</div>
​<nav class='bottom'><div class='nav'>
<button class='active' data-page='home' onclick='showPage("home")'><span class='ico'>⌂</span>Início</button>
<button data-page='tasks' onclick='showPage('tasks')'><span class='ico'>✓</span>Meu Dia</button>
<button data-page='goals' onclick='showPage('goals')'><span class='ico'>🎯</span>Objetivos</button>
<button data-page='progressPage' onclick='showPage('progressPage')'><span class='ico'>◈</span>Evolução</button>
</div></nav>
​<div class='toast' id='toast'></div>
​<script>
const STORAGE_KEY = 'proximoNivel3';
function createDefaultData() {
return {
tasks: [], goals: [], xp: 0, workouts: 0, studyMinutes: 0, studySessions: 0,
money: { name: '', current: 0, target: 0 }, career: '', habits: [], profileName: '',
careerTasks: ['Atualizar currículo', 'Estudar uma habilidade', 'Fazer uma ação profissional'],
careerDone: [], communityPosts: []
};
}
function loadData() {
const defaults = createDefaultData();
try {
const saved = localStorage.getItem(STORAGE_KEY);
if (!saved) return defaults;
const parsed = JSON.parse(saved);
if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return defaults;
const merged = { ...defaults, ...parsed };
merged.tasks = Array.isArray(merged.tasks) ? merged.tasks : [];
merged.goals = Array.isArray(merged.goals) ? merged.goals : [];
merged.habits = Array.isArray(merged.habits) ? merged.habits : [];
merged.communityPosts = Array.isArray(merged.communityPosts) ? merged.communityPosts : [];
merged.careerTasks = Array.isArray(merged.careerTasks) ? merged.careerTasks : defaults.careerTasks;
merged.careerDone = Array.isArray(merged.careerDone) ? merged.careerDone : [];
merged.money = { ...defaults.money, ...(merged.money && typeof merged.money === 'object' ? merged.money : {}) };
merged.xp = Math.max(0, Number(merged.xp) || 0);
merged.workouts = Math.max(0, Number(merged.workouts) || 0);
merged.studyMinutes = Math.max(0, Number(merged.studyMinutes) || 0);
merged.studySessions = Math.max(0, Number(merged.studySessions) || 0);
return merged;
} catch (error) {
return defaults;
}
}
let data = loadData();
function save() {
try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); return true; }
catch (error) { toast('Não foi possível salvar.'); return false; }
}
function esc(value) {
const element = document.createElement('div');
element.textContent = value == null ? '' : String(value);
return element.innerHTML;
}
function toast(message) {
const element = document.getElementById('toast');
if (!element) return;
element.textContent = message;
element.classList.add('show');
clearTimeout(window._toast);
window._toast = setTimeout(() => element.classList.remove('show'), 2200);
}
function toggleSidebar(force) {
const sidebar = document.getElementById('sidebar');
const backdrop = document.getElementById('sidebarBackdrop');
if (!sidebar || !backdrop) return;
const shouldOpen = typeof force === 'boolean' ? force : !sidebar.classList.contains('open');
sidebar.classList.toggle('open', shouldOpen);
backdrop.classList.toggle('open', shouldOpen);
document.body.style.overflow = shouldOpen && window.innerWidth < 900 ? 'hidden' : '';
}
function showPage(pageId) {
document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
const page = document.getElementById(pageId);
if (page) page.classList.add('active');
document.querySelectorAll('.nav button, .side-nav button').forEach(button => {
button.classList.toggle('active', button.dataset.page === pageId);
});
toggleSidebar(false);
window.scrollTo(0, 0);
render();
}
function toggleSelect(boxId) {
const box = document.getElementById(boxId);
if (!box) return;
document.querySelectorAll('.custom-select.open').forEach(item => {
if (item !== box) item.classList.remove('open');
});
box.classList.toggle('open');
}
function chooseSelect(boxId, labelId, value, label) {
const inputId = boxId.replace('Box', '');
const input = document.getElementById(inputId);
const labelElement = document.getElementById(labelId);
const box = document.getElementById(boxId);
if (input) input.value = value;
if (labelElement) labelElement.textContent = label;
if (box) box.classList.remove('open');
}
document.addEventListener('click', event => {
if (!event.target.closest('.custom-select')) {
document.querySelectorAll('.custom-select.open').forEach(item => item.classList.remove('open'));
}
});
function addTask() {
const input = document.getElementById('taskInput');
const name = input.value.trim();
if (!name) return toast('Digite uma tarefa.');
data.tasks.unshift({ id: Date.now(), name, cat: document.getElementById('taskCat').value, done: false });
input.value = '';
save(); render(); toast('Tarefa adicionada!');
}
function toggleTask(id) {
const task = data.tasks.find(item => item.id === id);
if (!task) return;
task.done = !task.done;
data.xp = Math.max(0, data.xp + (task.done ? 10 : -10));
save(); render(); toast(task.done ? '+10 XP! Tarefa concluída.' : 'Tarefa desmarcada.');
}
function delTask(id) {
data.tasks = data.tasks.filter(item => item.id !== id);
save(); render(); toast('Tarefa removida.');
}
function addGoal() {
const input = document.getElementById('goalInput');
const name = input.value.trim();
if (!name) return toast('Digite um objetivo.');
data.goals.unshift({ id: Date.now(), name, cat: document.getElementById('goalCat').value, progress: 0 });
input.value = '';
save(); render(); toast('Objetivo criado!');
}
function advanceGoal(id) {
const goal = data.goals.find(item => item.id === id);
if (!goal) return;
goal.progress = Math.min(100, Math.max(0, Number(goal.progress) || 0) + 10);
data.xp += 5;
save(); render(); toast('+5 XP! Objetivo atualizado.');
}
function delGoal(id) {
data.goals = data.goals.filter(item => item.id !== id);
save(); render(); toast('Objetivo removido.');
}
function finishWorkout() { data.workouts++; data.xp += 20; save(); render(); toast('+20 XP! Treino concluído.'); }
function studySession() { data.studyMinutes += 25; data.studySessions++; data.xp += 15; save(); render(); toast('+15 XP! 25 minutos registrados.'); }
function saveMoneyGoal() {
const name = document.getElementById('moneyName').value.trim();
const current = Math.max(0, Number(document.getElementById('moneyCurrent').value) || 0);
const target = Math.max(0, Number(document.getElementById('moneyTarget').value) || 0);
if (!name || target <= 0) return toast('Preencha a meta e o valor alvo.');
data.money = { name, current, target };
save(); render(); toast('Meta financeira salva!');
}
function saveCareer() {
const name = document.getElementById('careerGoal').value.trim();
if (!name) return toast('Digite seu objetivo profissional.');
data.career = name;
save(); render(); toast('Objetivo profissional salvo!');
}
function addHabit() {
const input = document.getElementById('habitInput');
const name = input.value.trim();
if (!name) return toast('Digite um hábito.');
data.habits.push({ id: Date.now(), name, done: false });
input.value = '';
save(); render(); toast('Hábito adicionado!');
}
function toggleHabit(id) {
const habit = data.habits.find(item => item.id === id);
if (!habit) return;
habit.done = !habit.done;
data.xp = Math.max(0, data.xp + (habit.done ? 5 : -5));
save(); render();
}
function saveProfile() {
data.profileName = document.getElementById('profileName').value.trim();
save(); render(); toast('Perfil salvo!');
}
function resetData() {
if (!confirm('Apagar todas as informações deste aparelho?')) return;
try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
location.reload();
}
const ISIS_CHAT_KEY = 'proximoNivelIsisChat';
let isisHistory = loadIsisHistory();
function loadIsisHistory() {
try { const v = JSON.parse(localStorage.getItem(ISIS_CHAT_KEY) || '[]'); return Array.isArray(v) ? v.slice(-40) : []; } catch (e) { return []; }
}
function appendIsisMessage(role, content, pending=false) {
const box = document.getElementById('isisMessages');
if (!box) return null;
const item = document.createElement('div');
item.className = 'isis-message ' + (role === 'user' ? 'user' : 'assistant') + (pending ? ' pending' : '');
const who = document.createElement('b');
who.textContent = role === 'user' ? (data.profileName || 'Você') : 'Ísis';
const body = document.createElement('p');
body.textContent = content;
item.append(who, body);
box.appendChild(item);
box.scrollTop = box.scrollHeight;
return item;
}
function renderIsisHistory() {
const box = document.getElementById('isisMessages');
if (!box) return;
box.innerHTML = '';
if (!isisHistory.length) {
appendIsisMessage('assistant', 'Oi! Sou a Ísis, sua assistente do Próximo Nível. Posso ajudar a organizar suas metas e próximos passos. Como posso te ajudar hoje?');
return;
}
isisHistory.forEach(m => appendIsisMessage(m.role, m.content));
}
async function sendToIsis() {
const input = document.getElementById('isisInput'), button = document.getElementById('isisSend');
const message = input.value.trim();
if (!message) return toast('Escreva uma mensagem para a Ísis.');
const endpoint = 'https://proximo-nivel-2.onrender.com/api/chat';
isisHistory.push({ role: 'user', content: message });
appendIsisMessage('user', message);
input.value = '';
const pending = appendIsisMessage('assistant', 'Pensando…', true);
button.disabled = true;
button.textContent = 'AGUARDE…';
try {
const context = { profileName: data.profileName || '', tasks: data.tasks.map(t => ({ name: t.name, done: !!t.done })), goals: data.goals.map(g => ({ name: g.name, progress: Number(g.progress) || 0 })), xp: data.xp, studySessions: data.studySessions, studyMinutes: data.studyMinutes, money: data.money };
const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message, history: isisHistory.slice(0, -1).slice(-16), context }) });
if (!response.ok) throw new Error('Status ' + response.status);
const result = await response.json();
const reply = result.reply || result.output || result.message;
if (typeof reply !== 'string' || !reply.trim()) throw new Error('Resposta inválida');
pending?.remove();
isisHistory.push({ role: 'assistant', content: reply });
isisHistory = isisHistory.slice(-40);
localStorage.setItem(ISIS_CHAT_KEY, JSON.stringify(isisHistory));
appendIsisMessage('assistant', reply);
} catch (error) {
pending?.remove();
const reply = 'Não consegui conectar ao backend no Render. Detalhe: ' + error.message;
isisHistory.push({ role: 'assistant', content: reply });
isisHistory = isisHistory.slice(-40);
localStorage.setItem(ISIS_CHAT_KEY, JSON.stringify(isisHistory));
appendIsisMessage('assistant', reply);
} finally {
button.disabled = false;
button.textContent = 'ENVIAR PARA ÍSIS ↗';
}
}
function clearIsisChat() {
if (!confirm('Limpar o histórico da conversa?')) return;
isisHistory = [];
localStorage.removeItem(ISIS_CHAT_KEY);
renderIsisHistory();
toast('Conversa limpa.');
}
function askAI() {
const pendingTask = data.tasks.find(task => !task.done);
const pendingGoal = data.goals.find(goal => (Number(goal.progress) || 0) < 100);
let answer = pendingTask ? 'Seu próximo passo é: ' + pendingTask.name + '.' : (pendingGoal ? 'Foque em avançar no objetivo: ' + pendingGoal.name + '.' : 'Crie uma tarefa pequena para hoje.');
document.getElementById('aiAnswer').textContent = answer;
showPage('ai');
}
function workoutHTML() {
return ['Supino / exercício principal', 'Exercício complementar', 'Ombros ou costas', 'Finalização']
.map((name, index) => <div class='table-row'><span>${index + 1}. ${name}</span><span>☐</span></div>).join('');
}
function careerHTML() {
return data.careerTasks.map((name, index) =>
<div class='task'><button class='check' onclick='careerDone(${index})'>${data.careerDone[index] ? '✓' : ''}</button><div class='taskinfo'><div class='name'>${esc(name)}</div><div class='meta'>Ação profissional</div></div></div>
).join('');
}
function careerDone(index) {
if (!Array.isArray(data.careerDone)) data.careerDone = [];
data.careerDone[index] = !data.careerDone[index];
data.xp = Math.max(0, data.xp + (data.careerDone[index] ? 10 : -10));
save(); render();
}
function render() {
const level = Math.floor(data.xp / 100) + 1;
document.getElementById('topXP').textContent = data.xp;
document.getElementById('level').textContent = level;
const total = data.tasks.length;
const done = data.tasks.filter(task => task.done).length;
const percent = total ? Math.round(done / total * 100) : 0;
document.getElementById('total').textContent = total;
document.getElementById('done').textContent = done;
document.getElementById('dayText').textContent = percent + '% concluído';
document.getElementById('dayBar').style.width = percent + '%';
const nextTask = data.tasks.find(task => !task.done);
document.getElementById('nextTitle').textContent = nextTask ? nextTask.name : (total ? 'Você terminou tudo por hoje! 🔥' : 'Crie sua primeira tarefa.');
document.getElementById('nextText').textContent = nextTask ? 'Essa é a próxima ação da sua lista.' : (total ? 'Excelente.' : 'Escolha uma pequena ação.');
document.getElementById('taskList').innerHTML = total ? data.tasks.map(task =>
<div class='task ${task.done ? 'done' : ''}'><button class='check' onclick='toggleTask(${Number(task.id)})'>${task.done ? '✓' : ''}</button><div class='taskinfo'><div class='name'>${esc(task.name)}</div><div class='meta'>${cat(task.cat)}</div></div><button class='btn small secondary' onclick='delTask(${Number(task.id)})'>×</button></div>
).join('') : '<div class='empty'>Nenhuma tarefa criada ainda.</div>';
document.getElementById('goalList').innerHTML = data.goals.length ? data.goals.map(goal => {
const progress = Math.min(100, Math.max(0, Number(goal.progress) || 0));
return <div class='card goal'><div class='goalhead'><div><div class='title'>${esc(goal.name)}</div><div class='muted'>${cat(goal.cat)}</div></div><div class='percent'>${progress}%</div></div><div class='progress'><div style='width:${progress}%'></div></div><div style='display:flex;gap:8px;margin-top:12px'><button class='btn small' onclick='advanceGoal(${Number(goal.id)})'>+ PROGRESSO</button><button class='btn small secondary' onclick='delGoal(${Number(goal.id)})'>EXCLUIR</button></div></div>;
}).join('') : '<div class='card empty'>Nenhum objetivo criado.</div>';
document.getElementById('pTasks').textContent = done;
document.getElementById('pGoals').textContent = data.goals.length;
document.getElementById('pXP').textContent = data.xp;
document.getElementById('levelText').textContent = 'Nível ' + level;
document.getElementById('xpBar').style.width = (data.xp % 100) + '%';
document.getElementById('xpText').textContent = (data.xp % 100) + ' / 100 XP para o próximo nível';
document.getElementById('projection').textContent = Você já concluiu ${done} tarefa(s). A consistência é construída um dia de cada vez.;
const areaPercent = category => {
const items = data.tasks.filter(task => task.cat === category);
return items.length ? Math.round(items.filter(task => task.done).length / items.length * 100) : 0;
};
document.getElementById('studyScore').textContent = areaPercent('estudos') + '%';
document.getElementById('gymScore').textContent = areaPercent('academia') + '%';
document.getElementById('financeScore').textContent = areaPercent('financas') + '%';
document.getElementById('habitScore').textContent = (data.habits.length ? Math.round(data.habits.filter(habit => habit.done).length / data.habits.length * 100) : 0) + '%';
document.getElementById('workoutList').innerHTML = workoutHTML();
document.getElementById('workouts').textContent = data.workouts;
document.getElementById('gymXP').textContent = data.workouts * 20;
document.getElementById('streak').textContent = data.workouts;
document.getElementById('studyMinutes').textContent = data.studyMinutes + ' min';
document.getElementById('studySessions').textContent = data.studySessions;
document.getElementById('studyConsistency').textContent = Math.min(100, data.studySessions * 10) + '%';
const studyGoal = data.goals.find(goal => goal.cat === 'estudos');
document.getElementById('studyGoalText').textContent = studyGoal ? studyGoal.name : 'Defina um objetivo';
document.getElementById('moneyTitle').textContent = data.money.name || 'Nenhuma meta financeira';
document.getElementById('moneyAmount').textContent = 'R$ ' + Number(data.money.current || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const moneyPercent = data.money.target ? Math.min(100, Math.round(data.money.current / data.money.target * 100)) : 0;
document.getElementById('moneyBar').style.width = moneyPercent + '%';
document.getElementById('moneyText').textContent = data.money.target ? ${moneyPercent}% da meta : 'Crie uma meta.';
document.getElementById('careerSaved').textContent = data.career || 'Nenhum objetivo definido.';
document.getElementById('careerList').innerHTML = careerHTML();
document.getElementById('habitList').innerHTML = data.habits.length ? data.habits.map(habit =>
<div class='action'><button class='check ${habit.done ? 'done' : ''}' onclick='toggleHabit(${Number(habit.id)})'>${habit.done ? '✓' : ''}</button><div class='grow'><b>${esc(habit.name)}</b><small>${habit.done ? 'Concluído hoje' : 'Pendente'}</small></div></div>
).join('') : '<div class='card empty'>Nenhum hábito criado.</div>';
document.getElementById('profileName').value = data.profileName || '';
document.getElementById('profileLevel').textContent = level;
document.getElementById('profileXP').textContent = data.xp;
document.getElementById('profileGoals').textContent = data.goals.length;
const communityPosts = document.getElementById('communityPosts');
if (communityPosts) communityPosts.innerHTML = data.communityPosts.length ? data.communityPosts.map(post =>
<div class='card'><div style='display:flex;justify-content:space-between;gap:10px'><b>${esc(post.name)}</b><span class='muted'>${esc(post.date)}</span></div><p style='margin-top:10px;line-height:1.5;white-space:pre-wrap'>${esc(post.message)}</p><div style='display:flex;gap:8px;margin-top:12px'><button class='btn small' onclick='shareWhatsApp()'>COMPARTILHAR</button><button class='btn small secondary' onclick='deleteCommunityPost(${Number(post.id)})'>EXCLUIR</button></div></div>
).join('') : '<div class='card empty'>Mural vazio.</div>';
}
function shareWhatsApp() {
const name = data.profileName || 'Eu';
const completed = data.tasks.filter(task => task.done).length;
const text = 🚀 Minha evolução no Próximo Nível\n\n${name} está construindo consistência!\n✅ Tarefas: ${completed}\n⭐ XP: ${data.xp};
window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank', 'noopener');
}
function addCommunityPost() {
const input = document.getElementById('communityInput');
const message = input.value.trim();
if (!message) return toast('Escreva sua conquista.');
data.communityPosts.unshift({ id: Date.now(), message, date: new Date().toLocaleDateString('pt-BR'), name: data.profileName || 'Meu perfil' });
save(); input.value = ''; render(); toast('Conquista salva!');
}
function deleteCommunityPost(id) {
data.communityPosts = data.communityPosts.filter(post => post.id !== id);
save(); render(); toast('Removido.');
}
function cat(category) {
return ({
rotina: '🔥 Rotina', estudos: '📚 Estudos', academia: '🏋️ Academia',
financas: '💰 Finanças', carreira: '💼 Carreira', habitos: '🔥 Hábitos', outro: '🎯 Outro'
})[category] || '🎯 Outro';
}
renderIsisHistory();
const isisInputField = document.getElementById('isisInput');
if (isisInputField) isisInputField.addEventListener('keydown', event => {
if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); sendToIsis(); }
});
render();
</script>
</body>
</html>
HTML)?>">Baixar arquivo index.html atualizado</a>
