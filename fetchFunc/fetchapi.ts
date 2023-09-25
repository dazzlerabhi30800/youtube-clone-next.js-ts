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
    return result;
}