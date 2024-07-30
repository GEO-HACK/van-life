export async function getVans(){
    const res = await fetch('/api/vans')
    if (!res.ok){
        throw{
            message:"failed to fetch vans",
            statusText:res.statusText,
            status:res.status
        }
    }
    const data = await res.json()
    console.log("fetched this data:", data)
    return data.vans
            

}