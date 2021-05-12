let itemName = "Autotarget rifle";
if (speaker.token) actor = game.actors.tokens[speaker.token];
    if (!actor) actor = game.actors.get(speaker.actor);
    let item = actor ? actor.items.find(i => i.name === itemName) : null;
    if (!item) return ui.notifications.warn(`Your controlled Actor does not have an item named ${itemName}`);
    let usage = item._data.data.capacity.value;
    if(usage > 0) {
        let content = `<p>squeezes the trigger:<br/>[[1d20 + @abilities.dex.mod + @attributes.baseAttackBonus.value - 4]] to hit for [[1d6 + @details.level.value]] damage<p>`;
        usage--;
        usage--;
        while(usage > 1) {
            content += `<p>keeps holding the trigger:<br/>[[1d20 + @abilities.dex.mod + @attributes.baseAttackBonus.value - 4]] to hit for [[1d6 + @details.level.value]] damage<p>`;
        usage--;
        usage--;
        }
        content += `<p>is finally out of ammo</p>`;
        ChatMessage.create({
          speaker: speaker,
          flavor: "Autotarget Rifle:Full Auto",
          content: content,
          type: CONST.CHAT_MESSAGE_TYPES.OTHER
        });
        
    }
    
    
    actor.updateEmbeddedEntity("OwnedItem", {
                _id: item.data._id,
                "data.capacity.value": 0
            }, {});