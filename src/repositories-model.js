import Observer from './observer';

export default class RepositoriesModel extends Observer{
  #api = null;
  #repositories = null;

  constructor(api){
    super();
    this.#api = api;
  }

  async getRepositories(repoName){
    /*try {
      const repositories = await this.#api.getRepositories(repoName);
      this.#repositories = repositories.items.slice(0, 10);
    } catch{
      this._notify(null);
    }*/
    const testResults = [
      {
        picture: 'https://avatars.githubusercontent.com/u/75787214?v=4',
        userName: 'LexusEgorov',
        link: 'https://github.com/LexusEgorov/Legalide',
        repoName: 'Legalide',
        description: 'Полностью адаптивная верстка. Mobile first'
      },
      {
        picture: 'https://avatars.githubusercontent.com/u/75787214?v=4',
        userName: 'LexusEgorov',
        link: 'https://github.com/LexusEgorov/Legalide',
        repoName: 'Legalide',
        description: 'Полностью адаптивная верстка. Mobile first'
      },
      {
        picture: 'https://avatars.githubusercontent.com/u/75787214?v=4',
        userName: 'LexusEgorov',
        link: 'https://github.com/LexusEgorov/Legalide',
        repoName: 'Legalide',
        description: 'Полностью адаптивная верстка. Mobile first'
      },
      {
        picture: 'https://avatars.githubusercontent.com/u/75787214?v=4',
        userName: 'LexusEgorov',
        link: 'https://github.com/LexusEgorov/Legalide',
        repoName: 'Legalide',
        description: 'Полностью адаптивная верстка. Mobile first'
      },
      {
        picture: 'https://avatars.githubusercontent.com/u/75787214?v=4',
        userName: 'LexusEgorov',
        link: 'https://github.com/LexusEgorov/Legalide',
        repoName: 'Legalide',
        description: 'Полностью адаптивная верстка. Mobile first'
      },
      {
        picture: 'https://avatars.githubusercontent.com/u/75787214?v=4',
        userName: 'LexusEgorov',
        link: 'https://github.com/LexusEgorov/Legalide',
        repoName: 'Legalide',
        description: 'Полностью адаптивная верстка. Mobile first'
      },
      {
        picture: 'https://avatars.githubusercontent.com/u/75787214?v=4',
        userName: 'LexusEgorov',
        link: 'https://github.com/LexusEgorov/Legalide',
        repoName: 'Legalide',
        description: 'Полностью адаптивная верстка. Mobile first'
      },
      {
        picture: 'https://avatars.githubusercontent.com/u/75787214?v=4',
        userName: 'LexusEgorov',
        link: 'https://github.com/LexusEgorov/Legalide',
        repoName: 'Legalide',
        description: 'Полностью адаптивная верстка. Mobile first'
      },
      {
        picture: 'https://avatars.githubusercontent.com/u/75787214?v=4',
        userName: 'LexusEgorov',
        link: 'https://github.com/LexusEgorov/Legalide',
        repoName: 'Legalide',
        description: 'Полностью адаптивная верстка. Mobile first'
      },
      {
        picture: 'https://avatars.githubusercontent.com/u/75787214?v=4',
        userName: 'LexusEgorov',
        link: 'https://github.com/LexusEgorov/Legalide',
        repoName: 'Legalide',
        description: 'Полностью адаптивная верстка. Mobile first'
      },
    ];
    this._notify(testResults);
  }
}