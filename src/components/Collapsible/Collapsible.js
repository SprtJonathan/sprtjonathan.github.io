export default function Collapsible(
  collapsibleId,
  collapsibleClass,
  titleContent,
  bodyContent
) {
  let collapsibleState = false;

  let collapsibleClassName = collapsibleClass;
  if (collapsibleClass == "" || collapsibleClass == null) {
    collapsibleClassName = "collapsible";
  }

  const collapsibleContainer = document.createElement("div");
  collapsibleContainer.setAttribute("id", collapsibleId);
  collapsibleContainer.setAttribute(
    "class",
    collapsibleClassName + "--container"
  );

  const collapsibleExpandIcon = document.createElement("span");
  collapsibleExpandIcon.setAttribute(
    "id",
    "collapsible-" + collapsibleId + "-icon"
  );
  collapsibleExpandIcon.setAttribute(
    "class",
    collapsibleClassName + "--title--text--chevron"
  );
  collapsibleExpandIcon.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`;

  const collapsibleTitleContainer = document.createElement("div");
  collapsibleTitleContainer.setAttribute("id", collapsibleId + "-title");
  collapsibleTitleContainer.setAttribute(
    "class",
    collapsibleClassName + "--title--container"
  );

  const collapsibleTitle = document.createElement("div");
  collapsibleTitle.setAttribute("class", collapsibleClassName + "--title");

  collapsibleTitle.innerHTML = `<span class=collapsibleClassName + "--title--text">${titleContent} </span>`;
  collapsibleTitle.append(collapsibleExpandIcon);

  collapsibleTitleContainer.appendChild(collapsibleTitle);
  collapsibleContainer.appendChild(collapsibleTitleContainer);

  const collapsibleContentContainer = document.createElement("div");
  collapsibleContentContainer.setAttribute(
    "id",
    collapsibleId + "-content-container"
  );
  collapsibleContentContainer.setAttribute(
    "class",
    collapsibleClassName + "--content--container"
  );

  const collapsibleContent = document.createElement("div");
  collapsibleContent.setAttribute("id", collapsibleId + "-content");
  collapsibleContent.setAttribute("class", collapsibleClassName + "--content");
  collapsibleContent.append(bodyContent);

  collapsibleContentContainer.appendChild(collapsibleContent);
  collapsibleContainer.appendChild(collapsibleContentContainer);

  //   console.log(collapsibleTitle);

  collapsibleTitleContainer.addEventListener("click", (e) => {
    toggleCollapsible();
  });

  function toggleCollapsible() {
    if (collapsibleState) {
      collapsibleContentContainer.classList.remove("active");
      collapsibleContentContainer.style.maxHeight = "0px";
      collapsibleExpandIcon.classList =
        collapsibleClassName + "--title--text--chevron";
      collapsibleState = !collapsibleState;
    } else {
      collapsibleContentContainer.classList.add("active");
      collapsibleContentContainer.style.maxHeight = "1000vh";
      //   collapsibleContentContainer.scrollHeight + "px";
      collapsibleExpandIcon.classList =
        collapsibleClassName + "--title--text--chevron--upside-down";
      collapsibleState = !collapsibleState;
    }
  }
  return collapsibleContainer;
}
