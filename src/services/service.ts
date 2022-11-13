export default class service {
  public static async sendImage(base64Image: string) {
    console.log(JSON.stringify({Image: base64Image}));
    fetch(
      'https://a65rjtjnmj.execute-api.us-east-1.amazonaws.com/default/GreenPayExtract',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({Image: base64Image}),
      },
    )
      .then(response => response.json())
      .then(response => console.log(JSON.stringify(response)));
  }
}
