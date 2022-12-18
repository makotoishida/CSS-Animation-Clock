const root = document.documentElement;
const d = new Date();
const angleS = 360 * d.getSeconds() / 60;
const angleM = (360 * d.getMinutes() + angleS) / 60;
const angleH = (360 * (d.getHours() % 12) + angleM) / 12;
root.style.setProperty("--angleS", `${angleS}deg`);
root.style.setProperty("--angleM", `${angleM}deg`);
root.style.setProperty("--angleH", `${angleH}deg`);