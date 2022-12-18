import * as Three from 'three'

export class Sphere {
    constructor(radius, texturePath) {
        this.radius = radius;
        this.texturePath = texturePath;
        this._setMesh();
    }

    _setMesh() {
        const sphereGeometry = new Three.SphereGeometry(this.radius, 60, 16);
        if (this.texturePath) {
            const sphereTexture = new Three.TextureLoader().load(this.texturePath);
            this.mesh = new Three.Mesh(sphereGeometry, new Three.MeshBasicMaterial({ map: sphereTexture }));
            return;
        }

        this.mesh = new Three.Mesh(sphereGeometry);
    }
}