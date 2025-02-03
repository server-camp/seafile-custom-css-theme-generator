const minifyCSS = function (css) {
    return css
        // Entfernt Kommentare
        .replace(/\/\*[\s\S]*?\*\//g, '')
        // Entfernt Leerzeichen und Zeilenumbrüche außerhalb von Werten
        .replace(/\s+/g, ' ')
        .replace(/^\s+|\s+$/g, '')
        // Entfernt unnötige Leerzeichen um Klammern und Semikolons
        .replace(/\s*([{};:])\s*/g, '$1')
        // Entfernt Leerzeichen vor und nach jedem Attributwert
        .replace(/\s*([:;{}])\s*/g, '$1');
}

const updateColor = async function () {
    const primaryColor = document.getElementById("primary-color").value;
    const primaryTextColor = document.getElementById("primary-text-color").value;
    const themeVersion = document.getElementById("seafile-theme").value;

    let template = await fetch("themes/" + themeVersion + ".css").then(response => response.text());

    template = template.replace('#00b5d6', primaryColor);
    template = template.replace("#ffffff", primaryTextColor);

    document.getElementById("custom-css").value = minifyCSS(template);
}

const copyToClipboard = function () {
    const button = document.getElementById("copy");
    button.querySelector(".icon-small").classList.remove("hidden");
    setTimeout(() => {
        button.querySelector(".icon-small").classList.add("hidden");
    }, 1000);
    const textArea = document.getElementById("custom-css");
    const text = textArea.value;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
        return
    }
    textArea.focus()
    textArea.select()
    document.execCommand('copy')
    document.getElementById("copy").innerText = "Copied!";
}