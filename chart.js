const apiUrl = "http://10.145.242.193:4000/channels/mychannel/chaincodes/fabcar?args=[%27%27]&fcn=queryAllCars&peer=peer0.org2.example.com";
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRyaXNoYSIsIm9yZ05hbWUiOiJPcmcxIiwiaWF0IjoxNjgxNTMxMzkyLCJleHAiOjMzNjM0MjI3ODR9.iiSIIlk471BKv02FHX0WxrDMddirXWWDJglb7Uk_EVE';

fetch(apiUrl, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // view the data in the console
        createTable(data);
    })
    .catch((err) => {
        console.log(err);
    });

function createTable(data) {
    let tableData = "";
    data.map((values) => {
        tableData += `<tr>
        <td>${values.Record.colour}</td>
        <td>${values.Record.make}</td>
        <td>${values.Record.model}</td>
        <td>${values.Record.owner}</td>
    </tr>`; //value.[title names in api]
        console.log(values.Record.colour);
    });
    document.getElementById("table_body").innerHTML = tableData;
}
