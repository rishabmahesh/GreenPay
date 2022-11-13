export default class service {
  public static async sendImage(base64Image: string) {
    return fetch(
      'https://greenpay-backend-flask-l65dlhbnna-uc.a.run.app/scan',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userID: 'user1', Image: base64Image}),
      },
    ).then(response => response.json());
  }

  public static async home() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    return fetch(
      'https://greenpay-backend-flask-l65dlhbnna-uc.a.run.app/home',
      requestOptions,
    )
      .then(response => response.json())
      .catch(error => console.log('error', error));
  }

  public static async rewards() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    return fetch(
      'https://greenpay-backend-flask-l65dlhbnna-uc.a.run.app/get_rewards',
      requestOptions,
    )
      .then(response => response.json())
      .catch(error => console.log('error', error));
  }

  public static async reducePoints(cost: number) {
    fetch('https://greenpay-backend-flask-l65dlhbnna-uc.a.run.app/redeem', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userID: 'user1', cost: cost}),
    })
      .then(response => response.json())
      .then(response => console.log(JSON.stringify(response)));
  }
}
