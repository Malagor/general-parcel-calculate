export const getCurrencyByCode = async (code: string) => {
  const url = `https://www.nbrb.by/api/exrates/rates/${code}?parammode=2`;

  return fetch(url)
    .then(async (res) => res.json())
    .then((rate) => rate.Cur_OfficialRate / rate.Cur_Scale);
};
