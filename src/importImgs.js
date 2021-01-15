function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const jobsImgs = importAll(require.context('./img/jobs', false, /\.(png|jpe?g|svg)$/));
const jobsFrames = importAll(require.context('./img/jobs/frames', false, /\.(png|jpe?g|svg)$/));
const jobsBg = importAll(require.context('./img/jobs/bg', false, /\.(png|jpe?g|svg)$/));
const matsImgs = importAll(require.context('./img/materials', false, /\.(png|jpe?g|svg)$/));
const matsFrames = importAll(require.context('./img/materials/Frames', false, /\.(png|jpe?g|svg)$/));

export { jobsImgs, jobsFrames, jobsBg, matsImgs,matsFrames }
