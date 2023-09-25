import { VideoData } from "@/type";

const url = 'https://youtube-v38.p.rapidapi.com';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '11cbd1ad6fmsh0a817753b0087c5p1e4529jsn2e3582618183',
		'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
	}
};



export const fetchFunc = async(endpoint: string) => {
    let response = await fetch(`${url}/${endpoint}`, options)
    let result = await response.json(); 
	let contents = result.contents;
    return contents;
}


export function formatViews(views: number) {
  if (views >= 1000 && views < 1000000) {
    return Math.ceil(views / 1000) + "K";
  }
  if (views >= 1000000 && views < 1000000000) {
    return Math.ceil(views / 10000000) + "M";
  }
  if (views >= 1000000000) {
    return Math.ceil(views / 1000000000) + "B";
  }
}

export function formatSeconds(time: number) {
  const seconds = Math.floor(time % 60);
  const minutes = Math.floor(time / 60);
  const hours = Math.floor(minutes / 60);

  return `${hours > 0 ? hours + ":" : ""}${minutes}:${
    seconds > 10 ? seconds : "0" + seconds
  }`;
}

export function formatNumbers(view : number) {
  const integerFormater = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 0,
  });
  const formattedNumber = integerFormater.format(view);
  return formattedNumber;
}