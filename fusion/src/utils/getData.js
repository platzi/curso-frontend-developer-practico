const getData = async (API) => {
  try {
    const res = await fetch(API);
    const data = await res.json();
    const dataRes = data.slice(0,100);

    return dataRes;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}
export default getData;