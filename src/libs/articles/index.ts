import dietAndNutritionPage from './documents/dietAndNutrition';
import monteCarloSimulationPage from './documents/monteCarloSimulation';
import onenotePage from './documents/onenote';
import { Article } from './types';

export const allArticles: Article[] = [
  dietAndNutritionPage,
  monteCarloSimulationPage,
  onenotePage,
];

export const getArticleFromId = (id: string) => allArticles.find((article) => article.id === id);
export const getLatestArticles = (n: number) => {
  const sorted = allArticles.sort((a: Article, b: Article) => {
    const dateB = new Date(b.date);
    const dateA = new Date(a.date);
    return dateB.valueOf() - dateA.valueOf();
  });

  return sorted.slice(0, n);
};
