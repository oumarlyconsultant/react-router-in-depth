//loader function
//npm install -g json-server
//*Use json-server to simulate api endpoint
//json-server -p 4000 -w "your_directory where data is"
export const careerDetailLoader = async ({params}) => {
    const {id} = params
    const res = await fetch('http://localhost:4000/careers/'+id)

    if(!res.ok){
        throw Error("Could not find a career")
    }

    return res.json()
}