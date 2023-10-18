const _palestineStyles = document.createElement("style");
_palestineStyles.innerText = `
#support-palestine {
  cursor: pointer;
  position: relative;
  width: 100vw;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: white;
  background-color: #452020;
  z-index: 9999;
}

#support-palestine > img {
  width: 2rem;
  display: inline-block;
  object-fit: contain;
  border-radius: 0.25rem";
}
`;
document.head.appendChild(_palestineStyles);

const _containerPalestine = document.createElement("div");
_containerPalestine.id = "support-palestine";
_containerPalestine.onclick = () => {
  const a = document.createElement("a");
  a.target = "_blank";
  a.href = "https://buildpalestine.com/2021/05/15/trusted-organizations-to-donate-to-palestine/";
  a.click();
};

const _textPalestine = document.createElement("span");
_textPalestine.innerHTML = `<u>Support Palestine</u>. Stop The Zionist Occupation on Palestine.`;

const _flagPalestine = document.createElement("img");
_flagPalestine.src = "https://i.imgur.com/z24NlKH.png";
_flagPalestine.loading = "eager";

_containerPalestine.appendChild(_flagPalestine);
_containerPalestine.appendChild(_textPalestine);
document.body.insertBefore(_containerPalestine, document.body.children[0]);
