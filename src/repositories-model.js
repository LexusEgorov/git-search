import Observer from './observer';

export default class RepositoriesModel extends Observer{
  #api = null;
  #repositories = [];

  constructor(api){
    super();
    this.#api = api;
  }

  async getRepositories(repoName){
    try {
      this.#repositories = [];
      let repositories = await this.#api.getRepositories(repoName);
      repositories = repositories.items.slice(0, 10);
      for(const repository of repositories){
        this.#repositories.push(
          {
            picture: repository.owner.avatar_url,
            userName: repository.owner.login,
            link: repository.html_url,
            repoName: repository.name,
            description: repository.description,
          }
        )
      }
      } catch{
        this.#repositories = [-1];
      }
      this._notify(this.#repositories);
  }
}