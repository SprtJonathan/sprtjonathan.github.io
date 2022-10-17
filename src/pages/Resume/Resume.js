import { resumeHeader, resumeContent } from "./views/resumeUI.js";

export function Resume() {
  const resume = document.createElement("main");
  resume.setAttribute("class", "resume");

  resume.appendChild(resumeHeader);
  resume.appendChild(resumeContent);

  return resume;
}
