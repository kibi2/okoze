const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
document.addEventListener("paste", (event) => {
    const item = event.clipboardData.items[0];
    if (item.type.startsWith("image/")) {
        const file = item.getAsFile();
        const image = new Image();
        image.onload = () => {
            ctx.drawImage(image, 0, 0);
        };
        image.src = URL.createObjectURL(file);
    }
});