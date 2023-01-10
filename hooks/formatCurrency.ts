export function FormatCur(item:number) {
    const price = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "EUR",
    }).format(Number(item.toFixed(2)));
    return price;
}