import * as Three from 'three'

export class StarsGenerator {
    constructor(amount, avoidPosition) {
        this.stars = [];
        this.avoidPosition = avoidPosition
        
        Array(amount).fill().forEach(() => this._addStar());
    }

    _addStar() {
        const geometry = new Three.SphereGeometry(0.25, 24, 24);
        const material = new Three.MeshStandardMaterial({ color: 0xffffff });
        const star = new Three.Mesh(geometry, material);

        const [x, y, z] = Array(3)
            .fill()
            .map(() => Three.MathUtils.randFloatSpread(1000));

        star.position.set(x, y, z);
        
        if (star.position.distanceTo(this.avoidPosition) <= 20) {
            this._addStar();
        }

        this.stars.push(star);
    }
}