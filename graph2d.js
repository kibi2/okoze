export class Graph2d {
    constructor(ctx) {
        this.ctx = ctx
    }

    draw(box) {
        let min = box.getMin()
        this.ctx.strokeRect(
            min.getX(),
            min.getY(),
            box.getWidth(),
            box.getHeight()
        )
    }
}