import { profile, sampleLinks } from "./profile.js";

const id = (name) => document.getElementById(name);
const shareDialog = id("share-dialog");
const shareUrl = id("share-url");
const shareFeedback = id("share-feedback");

function icon(name) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  svg.classList.add("icon");
  svg.setAttribute("aria-hidden", "true");
  use.setAttribute("href", `#i-${name}`);
  svg.append(use);
  return svg;
}

function element(tag, className, value) {
  const node = document.createElement(tag);
  node.className = className;
  if (value) node.textContent = value;
  return node;
}

function renderProfile() {
  if (profile.name) {
    id("profile-title").textContent = profile.name;
    document.title = `${profile.name} · Links`;
  }
  id("profile-greeting").textContent = profile.greeting;
  id("profile-description").textContent = profile.description;
  const isSample = profile.links.length === 0;
  id("sample-label").hidden = !isSample;
  const links = isSample ? sampleLinks : profile.links;
  for (const link of links) {
    let destination;
    try {
      destination = new URL(link.url);
    } catch {
      continue;
    }
    if (!["https:", "http:", "mailto:", "tel:"].includes(destination.protocol)) continue;
    const external = destination.protocol === "https:" || destination.protocol === "http:";
    const row = element("li", "link-row");
    const anchor = element("a", "glass link-card");
    anchor.href = destination.href;
    if (external) {
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
    }
    const badge = element("span", "link-icon");
    badge.dataset.color = link.color ?? "fern";
    badge.append(icon(link.icon ?? "link"));
    const label = element("span", "link-copy");
    label.append(element("span", "link-name", link.label));
    if (link.description) label.append(element("span", "link-description", link.description));
    const action = icon("link");
    action.classList.add("link-action");
    anchor.append(badge, label, action);
    row.append(anchor);
    id("link-list").append(row);
  }
}

function closeFromBackdrop(event) {
  const dialog = event.currentTarget;
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
}

async function copyShareLink(message) {
  try {
    await navigator.clipboard.writeText(shareUrl.value);
    shareFeedback.textContent = message;
  } catch {
    shareUrl.focus();
    shareUrl.select();
    shareFeedback.textContent = "The address is selected. Copy it using your browser.";
  }
}

shareDialog.addEventListener("click", closeFromBackdrop);
id("share-page").addEventListener("click", () => {
  const url = new URL(document.querySelector('link[rel="canonical"]').href);
  const whatsapp = new URL("https://wa.me/");
  whatsapp.searchParams.set("text", url.href);
  shareUrl.value = url.href;
  id("share-whatsapp").href = whatsapp.href;
  shareFeedback.textContent = "";
  shareDialog.showModal();
});
id("copy-share-link").addEventListener("click", () => copyShareLink("Link copied."));
id("share-instagram").addEventListener("click", () => copyShareLink("Link copied. Paste it into an Instagram message."));

renderProfile();
