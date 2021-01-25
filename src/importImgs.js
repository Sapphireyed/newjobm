function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const jobsImgs = importAll(require.context('./img/jobs', false, /\.(png|jpg|JPG|svg)$/));
const jobsFrames = importAll(require.context('./img/jobs/frames', false, /\.(png|jpg|JPG|svg)$/));
const jobsBg = importAll(require.context('./img/jobs/bg', false, /\.(png|jpg|JPG|svg)$/));
const matsImgs = importAll(require.context('./img/materials', false, /\.(png|jpg|JPG|svg)$/));
const matsFrames = importAll(require.context('./img/materials/Frames', false, /\.(png|jpg|JPG|svg)$/));
const abilsImgs = importAll(require.context('./img/Abilities', false, /\.(png|jpg|JPG|svg|WEBP|web|WEB|webp)$/));
const abilsBg = importAll(require.context('./img/Abilities/Bg', false, /\.(png|jpg|JPG|svg)$/));
export { jobsImgs, jobsFrames, jobsBg,
         matsImgs,matsFrames,
         abilsImgs, abilsBg }
