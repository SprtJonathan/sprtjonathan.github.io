import { createElementFromTemplate } from "../helpers.js";

function Modal(instanceName, header, bodyContent, className, backgroundStyle) {
  const modalName = instanceName;
  const modalHeader = header;
  const modalBody = bodyContent;

  //const modalCloseButton = props.closeButton;
  let modalClassName, backrgoundStyleName;

  if (!className || className == "") {
    modalClassName = "modal";
  } else {
    modalClassName = className;
  }

  if (!backgroundStyle) {
    backrgoundStyleName = "";
  } else {
    backrgoundStyleName = "--" + backgroundStyle;
  }

  const modalInstance = createElementFromTemplate(
    "div",
    {
      id: modalName,
      class: modalClassName + "--container--base",
    },
    "",
    ""
  );

  const modalContainer = createElementFromTemplate(
    "div",
    {
      class: modalClassName + "--container",
    },
    "",
    modalInstance
  );

  const modalContent = createElementFromTemplate(
    "div",
    {
      class: modalClassName + "--content" + backrgoundStyleName,
    },
    "",
    modalContainer
  );

  if (!backgroundStyle) {
    createElementFromTemplate(
      "div",
      { class: modalClassName + "--blur" },
      "",
      modalContent
    );
  } else {
    createElementFromTemplate(
      "div",
      { class: modalClassName + backrgoundStyleName },
      "",
      modalContent
    );
  }

  const modalHeaderContainer = createElementFromTemplate(
    "div",
    { class: modalClassName + "--header" },
    "",
    modalContent
  );

  if (modalHeader != "" || modalHeader != null) {
    createElementFromTemplate(
      "h2",
      { class: modalClassName + "--header--text" },
      modalHeader,
      modalHeaderContainer
    );
  }

  // Modal close button
  const closeButton = createElementFromTemplate(
    "button",
    {
      type: "button",
      id: "close-modal",
      class: modalClassName + "--exit" + backrgoundStyleName,
    },
    `<i class="fa fa-close"></i>`,
    modalHeaderContainer
  );

  // Modal bodyContent container
  const modalBodyContent = createElementFromTemplate(
    "div",
    { class: modalClassName + "--body" },
    "",
    modalContent
  );

  modalBodyContent.append(modalBody);

  const modalResultObject = {
    htmlCode: modalInstance,
    closeButton: closeButton,
  };

  return modalResultObject;
}

export default Modal;
