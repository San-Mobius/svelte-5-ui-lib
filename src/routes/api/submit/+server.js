async function callInternalAPI() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const jsonData = await response.json();
  
      return jsonData;
    } catch (error) {
      console.log("Error while fetching response from the internal API", error);
      return null;
    }
  }
  
  function convertJSONToHTML(jsonData) {
    try {
      return jsonData
        .map((item) => `<p>${item.title}: ${item.completed}</p>`)
        .join("");
    } catch (error) {
      console.log("Error while converting JSON to HTML", error);
      return null;
    }
  }
  
  export async function POST({ request }) {
    try {
      const formData = await request.formData();
      const name = formData.get("name");
      const jsonData = await callInternalAPI();
      let htmlContent = `<h4>TODO's by ${name}</h4>`;
      htmlContent += convertJSONToHTML(jsonData);
  
      return new Response(htmlContent, {
        headers: { "Content-Type": "text/html" },
      });
    } catch (error) {
      console.log(error);
  
      return new Response("Error fetching data", { status: 500 });
    }
  }
  
  export async function GET() {
    try {
      const jsonData = await callInternalAPI();
      let htmlContent = convertJSONToHTML(jsonData);
  
      return new Response(htmlContent, {
        headers: { "Content-Type": "text/html" },
      });
    } catch (error) {
      console.log(error);
  
      return new Response("Error fetching data", { status: 500 });
    }
  }