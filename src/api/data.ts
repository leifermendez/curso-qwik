export const getData = async () => {
    const data = await fetch('https://eocrx1nlkkqxmi2.m.pipedream.net/').then((res) => res.json())
    return data
}