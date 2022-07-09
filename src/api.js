export default class Api{
  #endPoint = null;

  constructor(){
    this.#endPoint = 'https://api.github.com/search/repositories?q=';
  }

  async getRepositories(repoName){
    const response = await fetch(`${this.#endPoint}${repoName}`);

    try{
      Api.checkStatus(response);
      return response.json();
    } catch(err){
      Api.catchError(err);
    }
  }

  static checkStatus(response){
    if(!response.ok){
      throw new Error('Ошибка');
    }
  }

  static catchError(err){
    throw err;
  }
}