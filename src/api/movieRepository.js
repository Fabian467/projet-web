const GetMovieData = async function(){
    const response = await fetch('https://ghibliapi.herokuapp.com/films', {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
    })
    if (response.status == 200){
        return await response.json()

    }
    else {
        new Error(response.statusText)
    }
}
export default GetMovieData