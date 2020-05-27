
const DecodeHtml = (html: string) => {
    const txt: HTMLTextAreaElement = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
}

export { DecodeHtml }