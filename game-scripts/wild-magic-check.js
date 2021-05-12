let r = new Roll("1d20", {}).roll();
let currentWM = game.user.getFlag("macroeditor","custWM")?game.user.getFlag("macroeditor","custWM"):1;
let content = `<p>Wild Magic Check: ${r.total} <= ${currentWM}</p>`

let message = ChatMessage.create({
user: game.user._id,
roll:r,
speaker: ChatMessage.getSpeaker({token: actor}),
content: content,
type: CONST.CHAT_MESSAGE_TYPES.ROLL
});


if(r.total <= currentWM) {
    game.user.setFlag("macroeditor","custWM",1);
    setTimeout(function () {
        game.tables.get("H4wqTcnytCBA0hfs").draw();
    }, 3300);
} else {
    currentWM += 1;
    game.user.setFlag("macroeditor","custWM",currentWM);
}