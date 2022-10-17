export function createElementFromTemplate(
  tagName,
  elementAttributes,
  textContent,
  appendTo,
  event,
  callback
) {
  const newElement = document.createElement(tagName);
  for (const [key, value] of Object.entries(elementAttributes)) {
    newElement.setAttribute(key, value);
  }
  if (event) {
    newElement.addEventListener(event, callback);
  }
  newElement.innerHTML = textContent;
  if (!appendTo) {
    return newElement;
  }
  appendTo.appendChild(newElement);
  return newElement;
}

/**
 * If appendModalTo is not null, append the element to appendModalTo, otherwise remove the element.
 * @param element - The modal element
 * @param appendModalTo - This is the element that you want to append the modal to.
 */
export function toggleModal(element, appendModalTo) {
  // console.log(value === true);
  if (appendModalTo != null) {
    element.classList.add("active");
    element.classList.remove("invisible");
  } else {
    element.classList.remove("active");
    element.classList.add("invisible");
  }
}

export function createListOfLinks(arrayOfLinks, arrayOfTitles, appendTo) {
  if (!arrayOfLinks) {
    arrayOfLinks = [];
  }
  for (let i = 0; i < arrayOfLinks.length; i++) {
    const projectsList = createElementFromTemplate("li", {}, "", appendTo);
    createElementFromTemplate(
      "a",
      { class: "link", href: arrayOfLinks[i] },
      arrayOfTitles[i],
      projectsList
    );
  }
}

export function createMultipleMediaSection(arrayOfMedia) {
  const mediaSection = createElementFromTemplate(
    "div",
    { class: "media-block" },
    "",
    ""
  );

  arrayOfMedia.forEach((media) => {
    const slideDiv = createElementFromTemplate(
      "figure",
      {
        class: carouselClass + "--slide",
      },
      "",
      carouselContainer
    );

    if (media.title || media.title != "") {
      const carouselMediaTitle = createElementFromTemplate(
        "div",
        {
          class: carouselClass + "--media--title",
        },
        media.title,
        slideDiv
      );
    }
    if (media.type == "video") {
      const carouselMediaContainer = createElementFromTemplate(
        "video",
        {
          class: carouselClass + "--media--video",
          controls: true,
          height: "100%",
        },
        "",
        slideDiv
      );
      createElementFromTemplate(
        "source",
        {
          class: carouselClass + "--media--video",
          src: media.link,
        },
        "",
        carouselMediaContainer
      );
    } else {
      const imageLink = createElementFromTemplate(
        "a",
        {
          class: carouselClass + "--media--image--link",
          href: media.link,
          target: "_blank",
        },
        "",
        slideDiv
      );
      createElementFromTemplate(
        "img",
        {
          class: carouselClass + "--media--img",
          src: media.link,
        },
        "",
        imageLink
      );

      if (media.description || media.description != "") {
        const carouselMediaDescription = createElementFromTemplate(
          "figcaption",
          {
            class: carouselClass + "--media--description",
          },
          "",
          slideDiv
        );
        const carouselMediaDescriptionText = createElementFromTemplate(
          "p",
          {
            class: carouselClass + "--media--description--text",
          },
          media[currentSlide].description,
          carouselMediaDescription
        );
      }
    }
    mediaSection.append(slideDiv);
  });
}
