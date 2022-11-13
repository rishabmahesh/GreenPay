export default class service {
  public static async sendImage(base64Image: string) {
    console.log(JSON.stringify({Image: base64Image}));
    fetch('https://greenpay-backend-flask-l65dlhbnna-uc.a.run.app/scan', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userID: 'user1', Image: base64Image}),
    })
      .then(response => response.json())
      .then(response => console.log(JSON.stringify(response)));
  }
}
