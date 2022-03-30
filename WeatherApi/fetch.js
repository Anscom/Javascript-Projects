class Fetch {
    async getCurrent(input) {
        const myKey = "d0c17798a8e66fd77155317b671a03bb";

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
        );

        const data = await response.json();

        console.log(data);

        return data;
    }
}