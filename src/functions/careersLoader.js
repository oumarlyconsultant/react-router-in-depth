//loader function
//npm install -g json-server
//*Use json-server to simulate api endpoint
//json-server -p 4000 -w "your_directory where data is"
export const careersLoader = async () => {
    const res = await fetch('http://localhost:4000/careers')

    if(!res.ok) {
        throw Error('COuld not fetch career page')
    }

    return res.json()
}