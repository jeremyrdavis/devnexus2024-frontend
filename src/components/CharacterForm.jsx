import { useState } from "react";

export default function CharacterForm() {
  
    const [name, setName] = useState("");
    const [character, setCharacter] = useState("");
    const [whoIs, setWhoIs] = useState("");
    const [poem, setPoem] = useState("");
    const [updatedPoem, setUpdatedPoem] = useState("");
    const [prose, setProse] = useState("");
    const [liked, setLiked] = useState("");
    const [stage, setStage] = useState("");
    const [stars, setStars] = useState("");
    const [feedback, setFeedback] = useState("");

    function handleSubmitName(e) {
        e.preventDefault();
        setName(e.CharacterForm.name.value);
        setCharacter(characterName);
        alert(name);
    }

    function handleSubmitWhoIs(e){
        e.preventDefault();
        setWhoIs(whoIsText);
        alert(whoIs);
    }

    var characterName = "Tarrful";

    var whoIsText = "Tarfful is a Wookiee chieftain from the Star Wars universe. He played a significant role in the events of the Star Wars saga, particularly during the Clone Wars era and the rise of the Galactic Empire. Tarfful is best known for his appearance in "Star Wars: Episode III – Revenge of the Sith," where he fought alongside Jedi Master Yoda during the Battle of Kashyyyk, the Wookiee homeworld. Despite his limited screen time in the movies, Tarfful has become a recognizable figure among Star Wars fans, representing the bravery and strength of the Wookiee species in their resistance against oppression.";

    var poemText = "In the shadowed woods of Kashyyyk's embrace,\n \
                    Where ancient trees their whispers softly lace,\n \
                    There strides a Wookiee, proud and tall,\n \
                    Tarfful, chieftain, heeding nature's call.\n \
                    \n \
                    Amidst the chaos of the Clone War's strife,\n \
                    He stands a guardian of his planet's life,\n \
                    With fur like midnight, eyes ablaze with fire,\n \
                    A warrior's spirit, burning with desire.\n \
                    \n \
                    In Yoda's shadow, side by side they stand,\n \
                    Defenders of their homeworld's sacred land,\n \
                    Against the Empire's iron grip they rise,\n \
                    Their roar of freedom echoing the skies.\n \
                    \n \
                    Oh, Tarfful, noble guardian of the trees,\n \
                    Your strength and courage carried on the breeze,\n \
                    In Ferlinghetti's verse, we hear your tale,\n \
                    A rebel spirit that shall never fail.";

    var updatedPoemText = "In the shadowed woods of Kashyyyk's embrace,\n \
                    Where ancient trees their whispers softly lace,\n \
                    There strides a Wookiee, proud and tall,\n \
                    Tarfful, chieftain, heeding nature's call.\n \
                    \n \
                    Amidst the chaos of the Clone War's strife,\n \
                    He stands a guardian of his planet's life,\n \
                    With fur like midnight, eyes ablaze with fire,\n \
                    A warrior's spirit, burning with desire.\n \
                    \n \
                    And in this realm where legends intertwine,\n \
                    Where unicorns dance beneath the moon's soft shine,\n \
                    Tarfful strides, his mighty presence clear,\n \
                    Amidst the magic that the woods hold dear.\n \
                    \n \
                    In Yoda's shadow, side by side they stand,\n \
                    Defenders of their homeworld's sacred land,\n \
                    Against the Empire's iron grip they rise,\n \
                    Their roar of freedom echoing the skies.\n \
                    \n \
                    Oh, Tarfful, noble guardian of the trees,\n \
                    Your strength and courage carried on the breeze,\n \
                    In Ferlinghetti's verse, we hear your tale,\n \
                    A rebel spirit that shall never fail.";

    var proseText = "In the dim-lit depths of Kashyyyk's dense foliage, where ancient trees whispered secrets of ages past, there moved a figure, silent and imposing. Tarfful, Wookiee chieftain, navigated the shadows with a grace born of the wild, a sentinel to the natural order that thrummed through every leaf and branch.\n \
                    \n \
                    In the midst of the tumultuous Clone Wars, he emerged as a stalwart defender of his homeworld, a bastion against the encroaching darkness. His fur, dark as the night sky, masked a fierce determination, his eyes alight with a primal fire that spoke of battles fought and victories won.\n \
                    \n \
                    And amidst this untamed realm, where the line between myth and reality blurred, where unicorns danced beneath the shimmering moonlight, Tarfful stood, a colossus among legends. His presence, a force to be reckoned with, resonated with the ancient magic that permeated the forest's depths.\n \
                    \n \
                    By Yoda's side, he stood firm, a guardian of Kashyyyk's sacred soil, defying the Empire's iron grip with every sinew of his being. Their defiance echoed through the heavens, a clarion call to all who dared oppress the spirit of freedom.\n \
                    \n \
                    Oh, Tarfful, your legend etched in the annals of time, your valor carried on the winds of change. In the verses of Ferlinghetti, your tale finds voice, a testament to the indomitable spirit of rebellion that shall endure for all eternity.";
}