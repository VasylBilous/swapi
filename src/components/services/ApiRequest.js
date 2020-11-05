export default class WorkWithApi {
  mainUrl = 'https://swapi.dev/api/'
  imgUrl = 'https://starwars-visualguide.com/assets/img/'

  async getRandomStarship() {
    let responce = await fetch(this.mainUrl + 'starships/');
    let json = await responce.json();
    let item = json.results[Math.floor(Math.random() * json.results.length)];
    let id = item.url.match(/\d/g);
    id = id.join("");
    item.img = this.imgUrl + 'starships/' + id + '.jpg';

    return item;
  }

  async getAll(instance) {
    let responce = await fetch(this.mainUrl + instance + '/');
    let json = await responce.json();
    let arr = json.results;
    arr.forEach(item => {
      let id = item.url.match(/\d/g);
      id = id.join("");     
      if (instance === 'people')
        instance = 'characters'
      item.img = this.imgUrl + instance + '/' + id + '.jpg';
      item.type = instance;

    });
    return arr;
  }
}