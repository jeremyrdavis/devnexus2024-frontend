import { useState } from "react";
import { WorkflowForm } from "./WorkflowForm.jsx";

export default function CharacterForm() {
  const [workflow, setWorkflow] = useState(0);
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

  let characterName = "Tarrful";

  let whoIsText =
    'Tarfful is a Wookiee chieftain from the Star Wars universe. He played a significant role in the events of the Star Wars saga, particularly during the Clone Wars era and the rise of the Galactic Empire. Tarfful is best known for his appearance in "Star Wars: Episode III – Revenge of the Sith," where he fought alongside Jedi Master Yoda during the Battle of Kashyyyk, the Wookiee homeworld. Despite his limited screen time in the movies, Tarfful has become a recognizable figure among Star Wars fans, representing the bravery and strength of the Wookiee species in their resistance against oppression.';

  let poemText =
    "In the shadowed woods of Kashyyyk's embrace,\n \
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

  let updatedPoemText =
    "In the shadowed woods of Kashyyyk's embrace,\n \
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

  let proseText =
    "In the dim-lit depths of Kashyyyk's dense foliage, where ancient trees whispered secrets of ages past, there moved a figure, silent and imposing. Tarfful, Wookiee chieftain, navigated the shadows with a grace born of the wild, a sentinel to the natural order that thrummed through every leaf and branch.\n \
                    \n \
                    In the midst of the tumultuous Clone Wars, he emerged as a stalwart defender of his homeworld, a bastion against the encroaching darkness. His fur, dark as the night sky, masked a fierce determination, his eyes alight with a primal fire that spoke of battles fought and victories won.\n \
                    \n \
                    And amidst this untamed realm, where the line between myth and reality blurred, where unicorns danced beneath the shimmering moonlight, Tarfful stood, a colossus among legends. His presence, a force to be reckoned with, resonated with the ancient magic that permeated the forest's depths.\n \
                    \n \
                    By Yoda's side, he stood firm, a guardian of Kashyyyk's sacred soil, defying the Empire's iron grip with every sinew of his being. Their defiance echoed through the heavens, a clarion call to all who dared oppress the spirit of freedom.\n \
                    \n \
                    Oh, Tarfful, your legend etched in the annals of time, your valor carried on the winds of change. In the verses of Ferlinghetti, your tale finds voice, a testament to the indomitable spirit of rebellion that shall endure for all eternity.";

  function retrieveCharacter() {
    setCharacter(characterName);
  }

  // 0
  function handleSubmitName(e) {
    e.preventDefault();
    setName(CharacterForm.name.value);
    setCharacter(characterName);
    setWorkflow(1);
  }

  // 2
  function handleSubmitWhoIs(e) {
    e.preventDefault();
    setWhoIs(whoIsText);
    setWorkflow(2);
  }

  // 3
  function handleSubmitPoem(e) {
    e.preventDefault();
    setPoem(poemText);
    setWorkflow(3);
  }

  // 4
  function handleSubmitUpdatedPoem(e) {
    e.preventDefault();
    setUpdatedPoem(updatedPoemText);
    setWorkflow(4);
  }

  // 5
  function handleSubmitProse(e) {
    e.preventDefault();
    setProse(proseText);
    setWorkflow(5);
  }

  // 6
  function handleFeedback(e) {
    e.preventDefault();
    setFeedback(feedback);
  }

  function handleSubmitLike(e) {
    e.preventDefault();
    setLiked(true);
    setWorkflow(6);
  }

  function handleSubmitDislike(e) {
    e.preventDefault();
    if (workflow === 1) {
      setWorkflow(2);
    } else if (workflow === 2) {
      setWorkflow(3);
    } else if (workflow === 3) {
      setWorkflow(4);
    } else if (workflow === 4) {
      setWorkflow(5);
    } else if (workflow === 5) {
      setWorkflow(6);
    }
    setLiked(false);
  }

  return (
    <div>
      {workflow === 0 && (
        <form id="nameForm">
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
          />
          <button type="submit" onClick={handleSubmitName}>
            Submit
          </button>
        </form>
      )}
      {workflow === 1 && (
        <form id="characterForm">
          <div>
            <p>Your Star Wars Spirit Charachter is {character}!</p>
            Do you feel a bond with {character}?
          </div>
          <button type="submit" onClick={handleSubmitLike}>
            Yes
          </button>
          <button type="submit" onClick={handleSubmitDislike}>
            No
          </button>
          <button type="submit" onClick={handleSubmitWhoIs}>
            Who is {character}?
          </button>
        </form>
      )}
      {workflow === 2 && (
        <WorkflowForm
          workflow={workflow}
          text={whoIsText}
          handleSubmitLike={handleSubmitLike}
          handleSubmitDislike={handleSubmitDislike}
        />
      )}
      {workflow === 3 && (
        <WorkflowForm
          workflow={workflow}
          text={poemText}
          handleSubmitLike={handleSubmitLike}
          handleSubmitDislike={handleSubmitDislike}
        />
      )}
      {workflow === 4 && (
        <WorkflowForm
          workflow={workflow}
          text={updatedPoemText}
          handleSubmitLike={handleSubmitLike}
          handleSubmitDislike={handleSubmitDislike}
        />
      )}
      {workflow === 5 && (
        <WorkflowForm
          workflow={workflow}
          text={proseText}
          handleSubmitLike={handleSubmitLike}
          handleSubmitDislike={handleSubmitDislike}
        />
      )}
      {workflow === 6 && (
        <form id="feedbackForm">
          <textarea
            cols="50"
            rows="10"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback here..."
          />
          <button type="submit" onClick={handleFeedback}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
