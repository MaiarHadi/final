//DO NOT CHANGE ANYTHING IN THIS FILE//

//// This file is responsible for generating the form used to create a new study set.

// This function will be used to render the new study set on submit
import { renderCardSetsPage } from "./cardSetsPage.js";
// This function will render errors
import { showError } from "./errors.js";

// These function create elements for our form
import {
  createLabel,
  createInput,
  createSubmitButton,
} from "./utilityRenderFunctions.js";

// This function generates the form for creating new study sets
const createSetForm = (setCards) => {
  // Generates the new form element
  const form = document.createElement("form");
  // Sets an attribute that will be used to select the form during testing
  form.setAttribute("data-cy", "set_form");
  // Sets the form to invisible
  form.className = "notVisible";

  //Creates the label for the title input
  const label = createLabel("Card Set Title", "titleInput");

  // Creates the input for the title
  const input = createInput("text", "titleInput", "titleInput");
  input.setAttribute("data-cy", "create-set-title"); 

  //Creates the submit button
  const submitButton = createSubmitButton("Create Set");
  submitButton.setAttribute("data-cy", "create-set-submit");

  //Adds event listener to the form
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = input.value.trim();
    if (!title) {
      showError("Title is required");
      return;
    }
    setCards(title);
    renderCardSetsPage();
  });

  //Appends the elements to the form
  form.append(label, input, submitButton);

  return form;
};

export { createSetForm };