import { Vec2d } from "./vec2d.js";
import { Box2d } from "./box2d.js";
import { Graph2d } from "./graph2d.js";

const canvas = document.getElementById("okoze");
const ctx = canvas.getContext("2d");
const graph2d = new Graph2d(ctx);

const boxSize = Math.min(canvas.width, canvas.height) * 0.8;
const box = new Box2d(
    new Vec2d(
        (canvas.width - boxSize) / 2,
        (canvas.height - boxSize) / 2
    ),
    new Vec2d(
        (canvas.width + boxSize) / 2,
        (canvas.height + boxSize) / 2
    )
);

box.draw(graph2d);

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
            const xPos = (canvas.width - width) / 2;
            const yPos = (canvas.height - height) / 2;

            ctx.drawImage(image, xPos, yPos, width, height);
            box.draw(graph2d);
        };
        image.src = URL.createObjectURL(file);
    }
});
