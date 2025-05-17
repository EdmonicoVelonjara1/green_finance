async function getData(url: string) {
    let return_data = null;
    try {
        const response = await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })

        const result = await response.json()

        const transformedData = result.data.map((item: any) => ({
          ...item,
          date: new Date(item.date),
        }))
        return_data = transformedData;
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error)
      } 
      
      return return_data;
}