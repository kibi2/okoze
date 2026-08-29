const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
document.addEventListener("paste", (event) => {
    const item = event.clipboardData.items[0];
    if (item.type.startsWith("image/")) {
        const file = item.getAsFile();
        const image = new Image();
        image.onload = () => {
            const scale = Math.min(
                canvas.width / image.width,
                canvas.height / image.height
            );
            const width = image.width * scale;
            const height = image.height * scale;
            ctx.drawImage(image, 0, 0, width, height);
        };
        image.src = URL.createObjectURL(file);
    }
});