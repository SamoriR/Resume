export interface IArticle {
  url: string
  date: string
  title: string
  description: string
}

const getMockArticles = (): IArticle[] => [
  {
    url: '',
    date: '2022-11-20',
    title: 'Burning Fat and Building Muscle',
    description: 'When it comes to counting calories and eating to support working out, it is important to know your maintenance caloric burn and to decided on either prioritizing losing fat or gaining muscle.',
  },
  {
    url: '',
    date: '2022-11-01',
    title: 'Monte Carlo Simulations',
    description: 'A Monte Carlo simulation is used to model the probability of different outcomes in a process that cannot easily be predicted due to the intervention of random variables. It is a technique used to understand the impact of risk and uncertainty.',
  },
];

const getArticles = async (): Promise<IArticle[]> => {
  const mock = getMockArticles();

  return mock;
};

export default getArticles;
