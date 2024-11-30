




export async function onRequest(c){


    let r = c.request;
    let cf = c.cf;
    let p = Object.fromEntries(new URL(r.url).searchParams.entries());
    let h = Object.fromEntries(r.headers.entries());


    let appid="8990e28f3b41423e8758d72138ccab8c"

    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    let kv = new MYKV(

    )

    fetch("https://api.exchangerate-api.com/v4/latest/", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}