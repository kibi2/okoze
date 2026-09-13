import { Vec2d } from "./vec2d.js";

export class Box2d {
    constructor(point1, point2) {
        let minX = Math.min(point1.getX(), point2.getX())
        let maxX = Math.max(point1.getX(), point2.getX())
        let minY = Math.min(point1.getY(), point2.getY())
        let maxY = Math.max(point1.getY(), point2.getY())
        this.min = new Vec2d(minX, minY)
        this.max = new Vec2d(maxX, maxY)
    }
    getMin() {
        return this.min
    }
    getMax() {
        return this.max
    }
    getWidth() {
        return this.max.getX() - this.min.getX()
    }
    getHeight() {
        return this.max.getY() - this.min.getY()
    }
    draw(graph) {
        graph.draw(this)
    }
}
