
let firstNames = ['zxc','cvrsxd?','sxd','zxcvenorez','dolboeb1','ты в муте чудище','💔 𝐷 𝑒 𝑎 𝑑   𝑖 𝑛 𝑠 𝑖 𝑑 𝑒 💔','†𝙳𝚎𝚊𝚍𝙸𝚗𝚜𝚒𝚍𝚎†','безмамный гуль','克グghoulグ克','damaged 6 y.o.','zxcaratel next door大1000-7?克','ZXChloroplast',];
let secondNames = ['im 12yo btw','dead inside', 'гуль 1000 ранга','【🅳🅴🅰🅳🅸🅽🆂🅸🅳🅴','I wanna die','伝sad伝 ︎鎰dying as a lifestyle鎰︎','zxclobbylord','😈На́гибат0р Ваших Мам0к 288😈','Dëåd🖤 ïñ$ïdë🖤','波は彼らの罪を贖うための無駄な試みで岸に衝突します','zxc мать в канаве','zxcБЕЗДАРЬ','dead inside chen abuzer スempti',];
secondNames.length = firstNames.length;
let codex = [
    '1. ты не клоун. если ты ставишь себе на аву гуля, спамишь zxczxczcxczcxzxc, ставишь паузы после каждого кила без причин и просто позер - то ты не гуль и не называй себя так',
    '2. тебе должно быть плевать. ты аморал, без нравственных качеств. тебя послали *****, сказали что ты бездарь? не позорься, не оправдывайся, не отвечай, хочешь доказать - докажи на деле, уничтожь в zxc, ты не терпила, ты не тратишь свое время. ты обещал разбить вещи? бей их, встань в амулет, отвечай за слова ',
    '3. не выделывайся. у тебя 3к птс и ты говоришь что смурф? закрой рот, это твой ммр, ты играешь на победу и не присваивай себе заслуг, которых не добился. тебе никто ничего не обязан и ты тоже. если ты ломаешь вещи из за того, что тебе не пикнули саппорта - ты нытик, ты не гуль ',
    '4. каждый гуль должен хотя бы знать что такое zxc, а тем более уметь там постоять за себя. если для мужчин нормальна случайность обменяться кулаками с другим мужчиной, то так же норма для гуля ответить или заставить ответить за слова в zxc. не будь тряпкой, ты сильнее ',
    '5. сосредотачивайся на игре, zitraks mod. твоя главная цель победить, ты должен уметь давать all mute, справляться с тильтом и выигрывать непобедимое. враги должны бояться гулей, а не смеяться с рейдж бб нытика ',
    '6. если ты достоин называться гулем, то ты априоре ставишь себя выше остальных. если ты уверен в себе, то забирай роль, фпшь героя, твоя игра твои правила, но не руинь, пока не заруинили тебе. пикнули дабл мид? иди на сфе в лес и тащи соло, не забудь поставить паузу при смерти дурачка и потапать на него, насмехайся над ними, но не становись посмешищем, выигрывай все игры, если команда сама не захотела или не заслужила поражения, выбор твой ',
    '7. all chat для тебя не существует, зачем тебе писать врагам что то, кроме ? после убийств ','8. убил мидера на фб? f9 + ?. у врага падает трон? ) в all chat, но не больше, ты не clown. ',
    '8. гули нормальные, ты не токсик свинья и позер, ты нормальный, порофли с тимой если хочешь, хорошо общайся со своими ребятами если нужно, уважай тех, кто действительно этого достоин ',
    '9. чсв - положительное качество, ты сильнее и лучше всех, но ты должен это оправдывать ',
    '10. будь верен своим идеалам. тебе не обязательно иметь гуля на аве, к чему это, поставь лил пипа или гослинга если хочешь, держись идеалов, но твой ник не должен быть отвратительным ',
    '11. никогда не пиши заглавными буквами. пиши размеренно и по правилам, не будь быдло, это низко',
    '12. запомни в последний раз, ты не клоун, не позер и не нытик, ты гуль, не позорься и строй из себя не пойми что ',
];
let divBGs = ['assets/img/divBGs/bg1.webp','assets/img/divBGs/bg2.webp','assets/img/divBGs/bg3.webp','assets/img/divBGs/bg4.webp','assets/img/divBGs/bg5.webp','assets/img/divBGs/bg6.webp','assets/img/divBGs/bg7.webp','assets/img/divBGs/bg8.webp','assets/img/divBGs/bg9.webp','assets/img/divBGs/bg10.webp','assets/img/divBGs/bg11.webp','assets/img/divBGs/bg12.webp','assets/img/divBGs/bg13.webp',];
var body = document.querySelector('body');
var backgrounds = ['assets/img/bg/bg1.webp','assets/img/bg/bg2.webp','assets/img/bg/bg3.webp','assets/img/bg/bg4.webp','assets/img/bg/bg5.webp','assets/img/bg/bg7.webp','assets/img/bg/bg8.webp',];




let nickname = document.querySelector('.generator__item__col2__result');
let codexNum = document.querySelector('.generator__item__col1__info');
let divBG = document.querySelector('.generator__item__col2__img');

let genBtn = document.querySelector('.generator__item__col1__btn');
let getFirstName = function(max) {
    let result = Math.round(Math.random() * max);
    return firstNames[result]
};

let getSecondName = function(max) {
    let result = Math.round(Math.random() * max);
    return secondNames[result]
};

let getCodexItem = function(max) {
    let result = Math.round(Math.random() * max);
    return codex[result]
};

let getDivBG = function(max) {
    let result = Math.round(Math.random() * max);
    return divBGs[result]
};

var getBG = function(max) {
    var result = Math.round(Math.random() * max);
    return backgrounds[result]
};

nickname.textContent = `${getFirstName(firstNames.length - 1)} ${getSecondName(secondNames.length - 1)}`;
codexNum.textContent = `Заповедь гуля №${getCodexItem(codex.length - 1)}`;
divBG.style.backgroundImage = `url('${getDivBG(divBGs.length - 1)}')`;
body.style.backgroundImage = `url('${getBG(backgrounds.length - 1)}')`;

genBtn.onclick = () => {
    nickname.textContent = `${getFirstName(firstNames.length - 1)} ${getSecondName(secondNames.length - 1)}`;
    codexNum.textContent = `Заповедь гуля №${getCodexItem(codex.length - 1)}`;
    divBG.style.backgroundImage = `url('${getDivBG(divBGs.length - 1)}')`;
    body.style.backgroundImage = `url('${getBG(backgrounds.length - 1)}')`;
};