import { TileEngine } from 'kontra';
import Global from '../global';

export class TileSet {
  constructor(){
    this.engine = undefined;
  }
  init(){
    this.engine = TileEngine({
      // tile size
      tilewidth: 32,
      tileheight: 32,

      // map size in tiles
      width: 28,
      height: 16,

      // tileset object
      tilesets: [{
        firstgid: 1,
        image: Global.tileSheetImg
      }],

      // layer object
      layers: [{
        name: 'walls',
        data: [3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 22, 0, 0, 24, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 22, 0, 0, 24, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 26, 0, 0, 25, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 36, 0, 0, 35, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 32, 33, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 33, 34, 4, 4, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 4, 4, 14, 14, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 33, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 33, 33, 3, 4, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 4, 5, 13, 14, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 14, 15, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 7, 0, 0, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 22, 0, 0, 24, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 32, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 34, 22, 0, 0, 24, 32, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 2]
      }]
    });
    this.render();
  }
  render(){
    this.engine.render();
  }
}