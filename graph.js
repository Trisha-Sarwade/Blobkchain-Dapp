/*fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        const xValues = data.map(item => item.title);
        const yValues = data.map(item => item.price);
        const chart = new Chart('myChart', {
            type: 'line',
            data: {
                labels: xValues,
                datasets: [{
                    label: 'Product Prices',
                    data: yValues,
                    borderColor: 'blue',
                    fill: false
                }]
            }
        });
    });*/

const apiUrl = "http://10.145.242.193:4000/channels/mychannel/chaincodes/fabcar?args=[%27%27]&fcn=queryAllCars&peer=peer0.org2.example.com";
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRyaXNoYSIsIm9yZ05hbWUiOiJPcmcxIiwiaWF0IjoxNjgxMjkyNDg5LCJleHAiOjMzNjI5NDQ5Nzh9.uKVOF7TRihJeSImsUhcRALwvCeaSPW0HMIyyp17yVvU'
const labels = [];
const data = [];
fetch(apiUrl, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        }
    })
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            labels.push(product.Record.make);
            data.push(product.Record.model);
        });
        const ctx = document.getElementById("myChart").getContext("2d");
        const chart = new Chart(ctx, {
            type: "line",
            data: {
                labels: labels,
                datasets: [{
                    label: "Mango Container Temperature",
                    data: data,
                    fill: false,
                    borderColor: "rgb(75, 192, 192)",
                    tension: 0.1,
                }, ],
            },
            options: {
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Temperature'
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Product'
                        }
                    }]
                }
            }
        });
    });