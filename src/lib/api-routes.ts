import { COIN_GECKO_ROOT_URL } from "./constants";

export const API_ROUTES = {
  get_coin_data: (coin: string) => `${COIN_GECKO_ROOT_URL}/${coin}`,

  get_chart_data: (coin: string, days: number | string) =>
    `${COIN_GECKO_ROOT_URL}/${coin}/market_chart?vs_currency=usd&days=${days}`,
};
