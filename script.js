document.getElementById("btn").addEventListener("click",getbread);


async function getbread () {
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/breeds`
      );
      const data = await res.json();

      if (!res.ok) throw new Error("Api not working properly");
      if(res.ok){
        document.getElementById("error").innerHTML = `Here your random Doggies info`
      }

      let randomdata = ( data[Math.floor(Math.random()*data.length)]);
      console.log(randomdata);
      
      // dog name
      let name = randomdata.name;
      document.getElementById("heading").innerHTML = `Doggie Name :  ${name} `;
      
      // image data
      let pic = randomdata.image.url ;
      document.getElementById("div").innerHTML= `<img id="pic-edit" src="${pic}">`;
      
      // dog height
      let height = randomdata.height.metric;
      document.getElementById("height").innerHTML = `Height in Cm : ${height}`;
      
      // dog weight
      let weight = randomdata.weight.metric;
      document.getElementById("weight").innerHTML = `Weight in Kg : ${weight}`;

      // dog breed and bred-for
      let breedgroup = randomdata.breed_group;
      document.getElementById("breedgroup").innerHTML = `Breed group : ${breedgroup}`;
      if(breedgroup == undefined || breedgroup==""){
        document.getElementById("breedgroup").innerHTML = `Bred for : ${randomdata.bred_for}`;
      }
      if(randomdata.bred_for==undefined && breedgroup==undefined){
        document.getElementById("breedgroup").innerHTML = `Breed group and Bred for : Data not available`;
      }
      
      // dog lifespan
      let lifespan = randomdata.life_span;
      document.getElementById("lifespan").innerHTML = `Life span : ${lifespan}`;

      return data;
    } catch (error) {
      document.getElementById("error").innerHTML = `Check your internet connection , ${error.message}` 
      console.log(error.message);
     }
    
  };
  getbread();